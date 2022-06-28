import { IpfsData, Land, Particle, Utopia, Factory, ERC721Contract } from "../generated/schema";
import { Address, BigInt, Bytes, ipfs, json, JSONValue, log, store, TypedMap, } from "@graphprotocol/graph-ts";
import { Assign, Burn, LandUpdate, } from "../generated/templates/Utopia/Utopia";
// import { Transfer } from "../generated/templates/UtopiaNFT/UtopiaNFT";
import { LandCreated } from "../generated/UtopiaFactory/UtopiaFactory";
import { Utopia as UtopiaCreator } from '../generated/templates'
import { UtopiaNFT as UtopiaNFTCreator } from '../generated/templates'
import { fetchERC721 } from "../fetch/erc721";
import { fetchAccount } from "../fetch/account";

const contractMappings = new TypedMap<string, Address>();
contractMappings.set("0x6dcd83daaf43560e8692c58bf02f36d647c32716",
    Address.fromBytes(Bytes.fromHexString("0xf4315D6Ab7B18A5903d22f9dc17358C7bBA85b8F")));

export function handleLandCreated(event: LandCreated): void {
    const utopiaId = event.params.landAddress
    let factory = Factory.load(utopiaId.toHex())
    if (!factory) {
        let owner = fetchAccount(event.params.owner)
        factory = new Factory(utopiaId.toHex())
        factory.factory = event.address
        factory.utopiaAddress = event.params.landAddress
        factory.collectionAddress = event.params.collectionAddress
        factory.owner = owner.id
        factory.createdAt = event.params.time
        factory.blockNumber = event.block.number

        let utopia = new Utopia(utopiaId.toHex())
        utopia.owner = event.params.owner
        utopia.utopia = factory.id
        let utopiaNFT = fetchERC721(event.params.collectionAddress)
        if (utopiaNFT) {
            utopiaNFT.collection = factory.id
            utopiaNFT.save()
        }


        UtopiaCreator.create(event.params.landAddress)
        UtopiaNFTCreator.create(event.params.collectionAddress)
        utopia.save()
        factory.save()

    }
}

export function handleAssign(event: Assign): void
{
    const transactionHash = event.transaction.hash.toHexString();
    log.debug("Handling Assign event (Tx {})", [transactionHash]);

    const contract = event.transaction.to;
    if (contract === null) {
        log.warning("Transaction sent to null. ({})", [event.transaction.hash.toHexString()]);
        return;
    }

    const landId = event.params.landId;
    // const id = calculateLandId(contract, landId);

    if (Land.load(landId.toString()) !== null) {
        log.warning("Land {} on contract {} already exists. (Tx {})",
            [landId.toString(), contract.toHexString(), transactionHash]);
        return;
    }

    const ipfsKey = event.params.hash;
    const ipfsKeyAvailable = ipfsKey !== null && ipfsKey.length !== 0;
    if (ipfsKeyAvailable && IpfsData.load(ipfsKey) !== null) {
        log.warning(`Assign event ignored since the ipfs key already exists. (Tx {})`, [transactionHash]);
        return;
    }
    let land = Land.load(landId.toString())
    if (!land) {
        land = new Land(landId.toString());
        land.contract = contract.toHex();
        land.landId = landId;
        land.owner = event.params.owner;
        land.x1 = event.params.x1;
        land.x2 = event.params.x2;
        land.y1 = event.params.y1;
        land.y2 = event.params.y2;
        land.create_time = event.block.timestamp;
        land.update_time = event.block.timestamp;
        land.isNFT = false;
        land.save();
    } else {
        log.warning("Land {} is Note save)",
            [landId.toString()]);
        return;
    }


    // let ipfsData: IpfsData | null = null;
    // if (ipfsKeyAvailable) {
    //     ipfsData = new IpfsData(ipfsKey);
    //     ipfsData.save();
    //     land.ipfsData = ipfsKey;
    // }

    land.save();

    // if (ipfsData !== null)
    //     loadIpfsData(contract, ipfsData);
}

export function handleLandUpdate(event: LandUpdate): void
{
    const transactionHash = event.transaction.hash.toHexString();
    log.debug("Handling LandUpdate event (Tx {})", [transactionHash]);

    const contract = event.transaction.to;
    if (contract === null) {
        log.warning("Transaction sent to null. ({})", [transactionHash]);
        return;
    }

    const landId = event.params.landId;
    const id = calculateLandId(contract, landId);

    const land = Land.load(id.toHex());
    if (land === null) {
        log.warning("LandUpdate event ignored since no land with id {} exists on contract {}. (Tx {})",
            [landId.toString(), contract.toHexString(), transactionHash]);
        return;
    }

    const oldIpfsKey = land.ipfsData;
    if (oldIpfsKey !== null) {
        log.debug("Removing old particles of hash {}", [oldIpfsKey])
        const ipfsData = IpfsData.load(oldIpfsKey);
        if (ipfsData !== null) {
            // ipfsData.particles.forEach((particleId) => {
            //     store.remove("Particle", particleId.toHexString());
            // });
            store.remove("IpfsData", oldIpfsKey);
        }
    }
    const ipfsKey = event.params.hash;
    let ipfsData = new IpfsData(ipfsKey);
    ipfsData.save();
    // loadIpfsData(contract, ipfsData);

    land.ipfsData = ipfsKey;
    land.update_time = event.block.timestamp;
    land.save();
}

function loadIpfsData(contract: Address, ipfsData: IpfsData): void
{
    const ipfsKey = ipfsData.id;
    log.debug("Loading ipfs data with key {}", [ipfsKey])

    const bytes = ipfs.cat(ipfsKey);
    if (bytes === null) {
        log.warning("IpfsData with key {} could not be loaded", [ipfsKey])
        return;
    }

    const data = json.try_fromBytes(bytes);
    if (!data.isOk) {
        log.warning("Json read from ipfs with key {} could not be deserialized", [ipfsKey])
        return;
    }

    ipfsData.loaded = true;
    ipfsData.save();

    const obj = data.value.toObject();
    const particles = new TypedMap<string, Particle>();

    const changes = obj.get("changes");
    if (changes === null) return;
    parseChanges(contract, changes.toObject(), particles);

    const metadata = obj.get("metadata");
    if (metadata)
        parseMetaData(metadata.toObject(), particles);

    for (let i: i32 = 0; i < particles.entries.length; i++) {
        const particle = particles.entries[i].value;
        particle.ipfsData = ipfsKey;
        particle.save();
    }
}

function parseChanges(
    contract: Address,
    changes: TypedMap<string, JSONValue>,
    particles: TypedMap<string, Particle>
): void
{
    for (let i: i32 = 0; i < changes.entries.length; i++) {
        const entry = changes.entries[i];
        const key = entry.key;
        const id = contract.concat(Bytes.fromUTF8(key));
        if (Particle.load(id.toHex()) !== null) {
            log.warning(`Particle ${id} already exists`, []); // this should not happen
            continue;
        }

        const name = entry.value.toObject().get("name");
        if (name === null) continue;

        const particle = new Particle(id.toHex());
        const x_y_z = key.split("_");
        if (x_y_z.length < 3) continue;
        particle.x = BigInt.fromString(x_y_z[0]);
        particle.y = BigInt.fromString(x_y_z[1]);
        particle.z = BigInt.fromString(x_y_z[2]);
        particle.block = name.toString();
        particles.set(key, particle);
    }
}

function parseMetaData(
    metaData: TypedMap<string, JSONValue>,
    particles: TypedMap<string, Particle>
): void
{
    for (let i: i32 = 0; i < metaData.entries.length; i++) {
        const entry = metaData.entries[i];

        const key = entry.key;
        const particle = particles.get(key);
        if (particle === null) {
            log.warning(`No base block found for meta ${key}`, []);
            continue;
        }

        const value = entry.value.toObject();
        const type = value.get("type");
        if (type === null) continue;
        const properties = value.get("properties");
        if (properties === null) continue;

        particle.metaBlock = type.toString();
        particle.metaBlockProperties = properties.toString();
    }
}

export function handleBurn(event: Burn): void
{
    const transactionHash = event.transaction.hash.toHexString();
    log.debug("Handling Burn event (Tx {})", [transactionHash]);

    const contract = event.transaction.to;
    if (contract === null) {
        log.warning("Transaction sent to null. ({})", [transactionHash]);
        return;
    }

    const landId = event.params.landId;
    const id = calculateLandId(contract, landId);

    const land = Land.load(id.toHex());
    if (land === null) {
        log.warning("Burn event ignored since no land with id {} exists on contract {}. (Tx {})",
            [landId.toString(), contract.toHexString(), transactionHash]);
        return;
    }

    store.remove('Land', id.toHexString()); // https://github.com/graphprotocol/docs/issues/115
}

function calculateLandId(contract: Address, landId: BigInt): Bytes
{
    return contract.concat(Bytes.fromByteArray(Bytes.fromBigInt(landId)));
}



const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";

// export function handleNFTTransfer(event: Transfer): void
// {
//     const transactionHash = event.transaction.hash.toHexString();
//     log.debug("Handling Transfer event (Tx {})", [transactionHash]);

//     const nftContract = event.transaction.to;
//     if (nftContract === null) {
//         log.warning("Transaction sent to null. ({})", [transactionHash]);
//         return;
//     }

//     const from = event.params.from.toHexString();
//     const to = event.params.to.toHexString();
//     const landId = event.params.tokenId;

//     if (from === to || (from !== ZERO_ADDRESS && to !== ZERO_ADDRESS))
//         return;

//     const contract = contractMappings.get(nftContract.toHexString());
//     if (contract === null) {
//         log.warning("NFT contract does not have corresponding contract address. ({})", [transactionHash]);
//         return;
//     }

//     const id = calculateLandId(contract, landId);
//     const land = Land.load(id.toHex());
//     if (land === null) {
//         log.warning("NFT Transfer event ignored since no land with id {} exists on contract {}. (Tx {})",
//             [landId.toString(), contract.toHexString(), transactionHash]);
//         return;
//     }

//     if (from === ZERO_ADDRESS) {
//         land.isNFT = true;
//     } else if (to === ZERO_ADDRESS) {
//         land.isNFT = false;
//     }

//     land.update_time = event.block.timestamp;
//     land.save();
// }