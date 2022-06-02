import { IpfsData, Land, Particle } from "../generated/schema";
import { BigInt, ipfs, json, JSONValue, log, store, TypedMap, } from "@graphprotocol/graph-ts";
import { Assign, Burn, LandUpdate, RoleAdminChanged, RoleGranted, RoleRevoked, } from "../generated/Utopia/Utopia";

export function handleAssign(event: Assign): void
{
    const hash = event.params.hash;
    if (hash && hash.length !== 0) {
        if (IpfsData.load(hash) !== null) {
            log.warning(
                `Assign event ignored since the hash already exists. (Tx ${event.transaction.hash.toHexString()})`,
                []
            );
            return;
        }
        new IpfsData(hash).save();
        parseIpfsData(hash);
        createLand(event, hash);
        return;
    }
    createLand(event, null);
    log.debug(
        `Assign event handled (Tx ${event.transaction.hash.toHexString()})`,
        []
    );
}

export function handleLandUpdate(event: LandUpdate): void
{
    const landId = event.params.landId.toString();
    const land = Land.load(landId);
    if (land === null) {
        log.warning(
            `LandUpdate event ignored since no land with id ${landId} exists. (Tx ${event.transaction.hash.toHexString()})`,
            []
        );
        return;
    }

    const oldHash = land.hash;
    if (oldHash !== null) {
        log.debug(`Removing old particles of hash ${oldHash}`, [])
        const ipfsData = IpfsData.load(oldHash);
        if (ipfsData !== null) {
            ipfsData.particles.forEach((particleId) => {
                store.remove("Particle", particleId);
            });
            store.remove("IpfsData", oldHash);
        }
    }
    const hash = event.params.hash;
    new IpfsData(hash).save();
    parseIpfsData(hash);
    log.debug(
        `Update event handled (Tx ${event.transaction.hash.toHexString()})`,
        []
    );
}

function createLand(event: Assign, hash: string | null): void
{
    const landId = event.params.landId.toString();
    if (Land.load(landId) !== null) {
        log.warning(
            `Land ${landId} already exists. (Tx ${event.transaction.hash.toHexString()})`,
            []
        );
        return;
    }
    const land = new Land(landId);
    land.x1 = event.params.x1;
    land.x2 = event.params.x2;
    land.y1 = event.params.y1;
    land.y2 = event.params.y2;
    land.isNFT = false;
    land.owner = event.params.owner;
    if (hash) land.hash = hash;
    land.save();
}

function parseIpfsData(hash: string): void
{
    const bytes = ipfs.cat(hash);
    if (bytes === null) return;

    const result = json.try_fromBytes(bytes);
    if (result === null) return;

    const value = result._value;
    if (value === null) return;

    const data = value.inner;
    if (data === null) return;

    const obj = data.toObject();

    const changes = obj.get("changes");
    if (changes === null) return;

    const particles = new TypedMap<string, Particle>();

    const metadata = obj.get("metadata");

    parseChanges(changes.toObject(), particles);
    if (metadata) {
        parseMetaData(metadata.toObject(), particles);
    }

    for (let i: i32 = 0; i < particles.entries.length; i++) {
        const particle = particles.entries[i].value;
        particle.hash = hash;
        particle.save();
    }
}

function parseChanges(
    changes: TypedMap<string, JSONValue>,
    particles: TypedMap<string, Particle>
): void
{
    for (let i: i32 = 0; i < changes.entries.length; i++) {
        const entry = changes.entries[i];
        const key = entry.key.toString();
        if (Particle.load(key) !== null) {
            log.warning(`Particle ${key} already exists`, []); // this should not happen
            continue;
        }

        const name = entry.value.toObject().get("name");
        if (name === null) continue;

        const particle = new Particle(key);
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

        const key = entry.key.toString();
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
}

export function handleRoleAdminChanged(event: RoleAdminChanged): void
{
}

export function handleRoleGranted(event: RoleGranted): void
{
}

export function handleRoleRevoked(event: RoleRevoked): void
{
}
