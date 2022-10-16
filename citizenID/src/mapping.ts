import { BigInt } from "@graphprotocol/graph-ts"
import {
    BrightIDSet,
} from "../generated/citizenVerification/CitizenIDVerification"
import { CitizenIDVerification, Counter } from "../generated/schema"

const citizenIdContractAddress = '0xEDa45366e9135920403A15Dc697b021f80Ff9d2D'

export function handleBrightIDSet(event: BrightIDSet): void {
  let entity = CitizenIDVerification.load(event.params.nftId.toString())

  if (!entity) {
    entity = new CitizenIDVerification(event.params.nftId.toString())
  }

  let counter = Counter.load(citizenIdContractAddress)
  if (!counter) {
    counter = new Counter(citizenIdContractAddress)
    counter.totalVerified = BigInt.fromI32(0)
  }
  counter.totalVerified = counter.totalVerified.plus(BigInt.fromI32(1))

  entity.citizen = event.params.addrs[0]
  entity.tokenId = event.params.nftId
  entity.verifier = event.params.caller
  entity.save()
  counter.save()
}

