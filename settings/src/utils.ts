import { Address, BigInt } from '@graphprotocol/graph-ts'

export function createUserId(userAddress: Address, tokenId: BigInt): String {
    return userAddress.toHexString().concat('-').concat(tokenId.toString())
}
