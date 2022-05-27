import {
    BigInt,
    log,
    ipfs,
    json,
} from "@graphprotocol/graph-ts";
import {
    Utopia,
    Assign,
    Burn,
    LandUpdate,
    RoleAdminChanged,
    RoleGranted,
    RoleRevoked,
} from "../generated/Utopia/Utopia";
import { ExampleEntity } from "../generated/schema";

export function handleAssign(event: Assign): void {
    return;
    // Entities can be loaded from the store using a string ID; this ID
    // needs to be unique across all entities of the same type
    let entity = ExampleEntity.load(event.transaction.from.toHex());

    // Entities only exist after they have been saved to the store;
    // `null` checks allow to create entities on demand
    if (!entity) {
        entity = new ExampleEntity(event.transaction.from.toHex());

        // Entity fields can be set using simple assignments
        entity.count = BigInt.fromI32(0);
    }

    // BigInt and BigDecimal math are supported
    entity.count = entity.count + BigInt.fromI32(1);

    // Entity fields can be set based on event parameters
    entity.landId = event.params.landId;
    entity.x1 = event.params.x1;

    // Entities can be written to the store with `.save()`
    entity.save();

    // Note: If a handler doesn't require existing field values, it is faster
    // _not_ to load the entity from the store. Instead, create it fresh with
    // `new Entity(...)`, set the fields that should be updated and save the
    // entity back to the store. Fields that were not set or unset remain
    // unchanged, allowing for partial updates to be applied.

    // It is also possible to access smart contracts from mappings. For
    // example, the contract that has emitted the event can be connected to
    // with:
    //
    // let contract = Contract.bind(event.address)
    //
    // The following functions can then be called on this contract to access
    // state variables and other data:
    //
    // - contract.ADMIN_ROLE(...)
    // - contract.BURN_ROLE(...)
    // - contract.CONFLICT_ROLE(...)
    // - contract.DAOWallet(...)
    // - contract.DEFAULT_ADMIN_ROLE(...)
    // - contract.NFT_ROLE(...)
    // - contract.abs(...)
    // - contract.assignLandWithoutSigEnabled(...)
    // - contract.getLands(...)
    // - contract.getLandsByIds(...)
    // - contract.getRoleAdmin(...)
    // - contract.hasConflict(...)
    // - contract.hasRole(...)
    // - contract.landPrice(...)
    // - contract.landToNFTEnabled(...)
    // - contract.landToNFTMinDelay(...)
    // - contract.lands(...)
    // - contract.lastLandId(...)
    // - contract.nftContract(...)
    // - contract.ownerLands(...)
    // - contract.publicAssignEnabled(...)
    // - contract.supportsInterface(...)
    // - contract.unitLandPrice(...)
    // - contract.updateLand(...)
}

export function handleBurn(event: Burn): void {}

export function handleLandUpdate(event: LandUpdate): void {
    log.debug(`handleLandUpdate called`, []);

    const wallet = getWallet(event.params.hash);
    if (wallet)
        log.debug(
            `ipfs.cat called (${event.params.hash}): result ${wallet}`,
            []
        );
}

export function handleRoleAdminChanged(event: RoleAdminChanged): void {}

export function handleRoleGranted(event: RoleGranted): void {}

export function handleRoleRevoked(event: RoleRevoked): void {}

export function getWallet(hash: string): string | null {
    const bytes = ipfs.cat(hash);
    if (bytes === null) return null;

    const result = json.try_fromBytes(bytes);
    if (result === null) return null;

    const value = result._value;
    if (value === null) return null;

    const data = value.inner;
    if (data === null) return null;

    const obj = data.toObject();
    if (obj === null) return null;

    const wallet = obj.get("wallet");
    if (wallet === null) return null;

    return wallet.toString();
}
