import { Address } from '@graphprotocol/graph-ts'
import { Utopia42Verse } from '../generated/templates/Utopia42Verse/Utopia42Verse'

export const FACTORY_ADDRESS = '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f'

export function getVerseName(verseAddress: Address): String {
    let verseContract = Utopia42Verse.bind(Address.fromString(verseAddress.toHexString()))
    let try_name = verseContract.try_verseName()
    return try_name.reverted   ? '' : try_name.value
}
