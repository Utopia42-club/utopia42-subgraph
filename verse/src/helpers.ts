import { Address } from '@graphprotocol/graph-ts'
import { Utopia42Verse } from '../generated/templates/Utopia42Verse/Utopia42Verse'

export const FACTORY_ADDRESS = '0xFcdF8f39CFe0a928081cC8C4D0eF3f6E2CE5452E'

export function getVerseName(verseAddress: Address): String {
    let verseContract = Utopia42Verse.bind(Address.fromString(verseAddress.toHexString()))
    let try_name = verseContract.try_verseName()
    return try_name.reverted   ? '' : try_name.value
}
