import {
  SettingUpdated,
} from "../generated/Utopia42Settings/Utopia42Settings"
import { User } from "../generated/schema"
import { createUserId } from "./utils"
import { log } from "@graphprotocol/graph-ts";

export function handleSettingUpdated(event: SettingUpdated): void {

  const id = createUserId(event.params.user, event.params.tokenId)
  let user = User.load(id.toString())
  let keys = event.params.keys
  let values = event.params.values

  if (!user) {
    user = new User(id.toString())
    user.keys = keys
    user.values = values

  } else {
    let newKeys = user.keys
    let newValues = user.values
    for (let i = 0; i < keys.length; i++) {
      if (newKeys.includes(keys[i])) {
        const keyIndex = newKeys.indexOf(keys[i])
        newValues[keyIndex] = values[i]
        log.warning("keys: {} values:{} keyIndex: {}, currentValues:{}",
          [keys.toString(), values.toString(), keyIndex.toString(), user.values.toString()]);
      } else {
        newKeys.push(keys[i])
        newValues.push(values[i])
      }
    }
    user.keys = newKeys
    user.values = newValues
  }
  user.lastUpdate = event.block.timestamp
  user.account = event.params.user
  user.tokenID = event.params.tokenId
  user.save()
}
