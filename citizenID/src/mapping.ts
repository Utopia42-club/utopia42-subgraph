import { BigInt } from "@graphprotocol/graph-ts"
import {
    BrightIDSet
} from "../generated/citizenVerification/CitizenIDVerification"
import { CitizenIDVerification } from "../generated/schema"

export function handleBrightIDSet(event: BrightIDSet): void {
  let entity = CitizenIDVerification.load(event.params.nftId.toString())

  if (!entity) {
    entity = new CitizenIDVerification(event.params.nftId.toString())

  }
  entity.citizen = event.params.addrs[0]
  entity.tokenId = event.params.nftId
  entity.verifier = event.params.caller
  entity.save()
}

