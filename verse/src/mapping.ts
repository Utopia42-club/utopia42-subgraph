import { Factory, IpfsData, Land, Particle, Verse, BurnedLand, LandsTransfer } from "../generated/schema";
import { Address, BigInt, Bytes, ipfs, json, JSONValue, log, store, TypedMap, } from "@graphprotocol/graph-ts";
import { Assign, Burn, LandUpdate, LandTransfer, NFTToLandSet, LandToNFTSet} from "../generated/templates/Utopia42Verse/Utopia42Verse";
import { VerseCreated } from "../generated/Utopia42VerseFactory/Utopia42VerseFactory";
import { Utopia42Verse as Utopia42VerseCreator, UtopiaNFT as UtopiaNFTCreator } from '../generated/templates'
import { fetchERC721 } from "../fetch/erc721";
import { fetchAccount } from "../fetch/account";
import { FACTORY_ADDRESS, getVerseName } from './helpers'
import {
	constants,
} from '@amxx/graphprotocol-utils'

export function handleVerseCreated(event: VerseCreated): void {
    let factory = Factory.load(FACTORY_ADDRESS)
    if (!factory) {
        factory = new Factory(FACTORY_ADDRESS)
        factory.totalVerse = constants.BIGINT_ZERO
    }
    factory.totalVerse = factory.totalVerse.plus(constants.BIGINT_ONE)

    const verseId = event.params.verseAddress
    let owner = fetchAccount(event.params.owner)
    let creator = fetchAccount(event.params.creator)
    let verse = Verse.load(verseId.toHex())
    if (!verse) {
        let verse = new Verse(verseId.toHex())
        verse.owner = owner.id
        verse.creator = creator.id
        verse.createdAt = event.block.timestamp
        verse.blockNumber = event.block.number
        verse.name = getVerseName(verseId).toString()
        let collection = fetchERC721(event.params.collectionAddress, verse)
        if (collection) {
            verse.collection = collection.id
            verse.save()
        }
    }

    Utopia42VerseCreator.create(event.params.verseAddress)
    UtopiaNFTCreator.create(event.params.collectionAddress)
    factory.save()
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
    const id = calculateLandId(contract, landId);

    if (Land.load(id.toHex()) !== null) {
        log.warning("Land {} on contract {} already exists. (Tx {})",
            [landId.toHexString(), contract.toHexString(), transactionHash]);
        return;
    }

    const ipfsKey = event.params.hash;
    const ipfsKeyAvailable = ipfsKey !== null && ipfsKey.length !== 0;
    const land = new Land(id.toHex());
    if (ipfsKeyAvailable) {
        if(IpfsData.load(ipfsKey) === null)
            new IpfsData(ipfsKey).save();
        land.ipfsData = ipfsKey;
    }
    
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


    // let ipfsData: IpfsData | null = null;
    // if (ipfsKeyAvailable) {
    //     ipfsData = new IpfsData(ipfsKey);
    //     ipfsData.save();
    //     land.ipfsData = ipfsKey;
    // }

    // land.save();

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
            [landId.toHexString(), contract.toHexString(), transactionHash]);
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
            [landId.toHexString(), contract.toHexString(), transactionHash]);
        return;
    }

    store.remove('Land', id.toHexString()); // https://github.com/graphprotocol/docs/issues/115
    let time = event.block.timestamp;
    let burnedLand = new BurnedLand(id.toHex());
    burnedLand.contract = contract;
    burnedLand.landId = landId;
    burnedLand.time = time;
    burnedLand.verse = contract.toHex();
    burnedLand.save();
}

export function handleLandTransfer(event: LandTransfer): void
{
    const transactionHash = event.transaction.hash.toHexString()

    const verseAddress = event.address
    const landId = event.params.landId
    const id = calculateLandId(verseAddress, landId)

    const land = Land.load(id.toHex())
    if (!land) {
        log.warning("LandTransfer event ignored since no land with id {} exists on verse {}. (Tx {})",
            [landId.toHexString(), verseAddress.toHexString(), transactionHash])
        return;
    }

    let landTransfer = new LandsTransfer(
        transactionHash
    )
    landTransfer.from = event.params.from
    landTransfer.to = event.params.to
    landTransfer.timestamp = event.block.timestamp
    landTransfer.land = land.id
    land.owner = event.params.to
    land.save()
    landTransfer.save();
}

export function handleNftToLand(event: NFTToLandSet): void {
    const landId = event.params.landId
    const verseAddress = event.address
    const id = calculateLandId(verseAddress, landId)
    const land = Land.load(id.toHex())
    if (!land) {
        log.warning("NFTToLandSet event ignored since no land with id {} exists on verse {}. (Tx {})",
            [landId.toHexString(), verseAddress.toHexString(), event.transaction.hash.toHexString()])
        return;
    }
    land.isNFT = false
    land.save()
}

export function handleLandToNft(event: LandToNFTSet): void {
    const landId = event.params.landId
    const verseAddress = event.address
    const id = calculateLandId(verseAddress, landId)
    const land = Land.load(id.toHex())
    if (!land) {
        log.warning("NFTToLandSet event ignored since no land with id {} exists on verse {}. (Tx {})",
            [landId.toHexString(), verseAddress.toHexString(), event.transaction.hash.toHexString()])
        return;
    }
    land.isNFT = true
    land.save()
}

function calculateLandId(contract: Address, landId: BigInt): Bytes
{
    return contract.concat(Bytes.fromByteArray(Bytes.fromBigInt(landId)));
}

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