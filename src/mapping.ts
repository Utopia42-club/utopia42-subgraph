import {
    log,
    ipfs,
    json,
} from "@graphprotocol/graph-ts";
import {
    Assign,
    Burn,
    LandUpdate,
    RoleAdminChanged,
    RoleGranted,
    RoleRevoked,
} from "../generated/Utopia/Utopia";

export function handleAssign(event: Assign): void {
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
