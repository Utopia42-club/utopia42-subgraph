// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class CitizenID extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save CitizenID entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type CitizenID must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("CitizenID", id.toString(), this);
    }
  }

  static load(id: string): CitizenID | null {
    return changetype<CitizenID | null>(store.get("CitizenID", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get account(): Bytes {
    let value = this.get("account");
    return value!.toBytes();
  }

  set account(value: Bytes) {
    this.set("account", Value.fromBytes(value));
  }

  get lastUpdate(): BigInt {
    let value = this.get("lastUpdate");
    return value!.toBigInt();
  }

  set lastUpdate(value: BigInt) {
    this.set("lastUpdate", Value.fromBigInt(value));
  }

  get tokenID(): BigInt {
    let value = this.get("tokenID");
    return value!.toBigInt();
  }

  set tokenID(value: BigInt) {
    this.set("tokenID", Value.fromBigInt(value));
  }

  get keys(): Array<string> {
    let value = this.get("keys");
    return value!.toStringArray();
  }

  set keys(value: Array<string>) {
    this.set("keys", Value.fromStringArray(value));
  }

  get values(): Array<string> {
    let value = this.get("values");
    return value!.toStringArray();
  }

  set values(value: Array<string>) {
    this.set("values", Value.fromStringArray(value));
  }
}