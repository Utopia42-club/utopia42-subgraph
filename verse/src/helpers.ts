import { Address } from '@graphprotocol/graph-ts'
import { Utopia42Verse } from '../generated/templates/Utopia42Verse/Utopia42Verse'

export const FACTORY_ADDRESS = '0x71E9d0bB75EC8320d0Af229e957e9dc28E84f4b9'

export function getVerseName(verseAddress: Address): String {
    let verseContract = Utopia42Verse.bind(Address.fromString(verseAddress.toHexString()))
    let try_name = verseContract.try_verseName()
    return try_name.reverted   ? '' : try_name.value
}
