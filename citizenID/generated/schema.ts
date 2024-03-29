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

export class Account extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Account entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type Account must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Account", id.toBytes().toHexString(), this);
    }
  }

  static load(id: Bytes): Account | null {
    return changetype<Account | null>(store.get("Account", id.toHexString()));
  }

  get id(): Bytes {
    let value = this.get("id");
    return value!.toBytes();
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get asERC721(): Bytes | null {
    let value = this.get("asERC721");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set asERC721(value: Bytes | null) {
    if (!value) {
      this.unset("asERC721");
    } else {
      this.set("asERC721", Value.fromBytes(<Bytes>value));
    }
  }

  get ERC721tokens(): Array<string> {
    let value = this.get("ERC721tokens");
    return value!.toStringArray();
  }

  set ERC721tokens(value: Array<string>) {
    this.set("ERC721tokens", Value.fromStringArray(value));
  }

  get ERC721operatorOwner(): Array<string> {
    let value = this.get("ERC721operatorOwner");
    return value!.toStringArray();
  }

  set ERC721operatorOwner(value: Array<string>) {
    this.set("ERC721operatorOwner", Value.fromStringArray(value));
  }

  get ERC721operatorOperator(): Array<string> {
    let value = this.get("ERC721operatorOperator");
    return value!.toStringArray();
  }

  set ERC721operatorOperator(value: Array<string>) {
    this.set("ERC721operatorOperator", Value.fromStringArray(value));
  }

  get ERC721transferFromEvent(): Array<string> {
    let value = this.get("ERC721transferFromEvent");
    return value!.toStringArray();
  }

  set ERC721transferFromEvent(value: Array<string>) {
    this.set("ERC721transferFromEvent", Value.fromStringArray(value));
  }

  get ERC721transferToEvent(): Array<string> {
    let value = this.get("ERC721transferToEvent");
    return value!.toStringArray();
  }

  set ERC721transferToEvent(value: Array<string>) {
    this.set("ERC721transferToEvent", Value.fromStringArray(value));
  }

  get asOwnable(): Bytes | null {
    let value = this.get("asOwnable");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set asOwnable(value: Bytes | null) {
    if (!value) {
      this.unset("asOwnable");
    } else {
      this.set("asOwnable", Value.fromBytes(<Bytes>value));
    }
  }

  get ownerOf(): Array<Bytes> {
    let value = this.get("ownerOf");
    return value!.toBytesArray();
  }

  set ownerOf(value: Array<Bytes>) {
    this.set("ownerOf", Value.fromBytesArray(value));
  }

  get ownershipTransferred(): Array<string> {
    let value = this.get("ownershipTransferred");
    return value!.toStringArray();
  }

  set ownershipTransferred(value: Array<string>) {
    this.set("ownershipTransferred", Value.fromStringArray(value));
  }

  get events(): Array<string> {
    let value = this.get("events");
    return value!.toStringArray();
  }

  set events(value: Array<string>) {
    this.set("events", Value.fromStringArray(value));
  }
}

export class ERC721Contract extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ERC721Contract entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type ERC721Contract must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ERC721Contract", id.toBytes().toHexString(), this);
    }
  }

  static load(id: Bytes): ERC721Contract | null {
    return changetype<ERC721Contract | null>(
      store.get("ERC721Contract", id.toHexString())
    );
  }

  get id(): Bytes {
    let value = this.get("id");
    return value!.toBytes();
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get asAccount(): Bytes {
    let value = this.get("asAccount");
    return value!.toBytes();
  }

  set asAccount(value: Bytes) {
    this.set("asAccount", Value.fromBytes(value));
  }

  get supportsMetadata(): boolean {
    let value = this.get("supportsMetadata");
    return value!.toBoolean();
  }

  set supportsMetadata(value: boolean) {
    this.set("supportsMetadata", Value.fromBoolean(value));
  }

  get name(): string | null {
    let value = this.get("name");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set name(value: string | null) {
    if (!value) {
      this.unset("name");
    } else {
      this.set("name", Value.fromString(<string>value));
    }
  }

  get symbol(): string | null {
    let value = this.get("symbol");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set symbol(value: string | null) {
    if (!value) {
      this.unset("symbol");
    } else {
      this.set("symbol", Value.fromString(<string>value));
    }
  }

  get tokens(): Array<string> {
    let value = this.get("tokens");
    return value!.toStringArray();
  }

  set tokens(value: Array<string>) {
    this.set("tokens", Value.fromStringArray(value));
  }

  get operators(): Array<string> {
    let value = this.get("operators");
    return value!.toStringArray();
  }

  set operators(value: Array<string>) {
    this.set("operators", Value.fromStringArray(value));
  }

  get transfers(): Array<string> {
    let value = this.get("transfers");
    return value!.toStringArray();
  }

  set transfers(value: Array<string>) {
    this.set("transfers", Value.fromStringArray(value));
  }
}

export class ERC721Token extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ERC721Token entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type ERC721Token must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ERC721Token", id.toString(), this);
    }
  }

  static load(id: string): ERC721Token | null {
    return changetype<ERC721Token | null>(store.get("ERC721Token", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get contract(): Bytes {
    let value = this.get("contract");
    return value!.toBytes();
  }

  set contract(value: Bytes) {
    this.set("contract", Value.fromBytes(value));
  }

  get identifier(): BigInt {
    let value = this.get("identifier");
    return value!.toBigInt();
  }

  set identifier(value: BigInt) {
    this.set("identifier", Value.fromBigInt(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value!.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get approval(): Bytes {
    let value = this.get("approval");
    return value!.toBytes();
  }

  set approval(value: Bytes) {
    this.set("approval", Value.fromBytes(value));
  }

  get uri(): string | null {
    let value = this.get("uri");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set uri(value: string | null) {
    if (!value) {
      this.unset("uri");
    } else {
      this.set("uri", Value.fromString(<string>value));
    }
  }

  get transfers(): Array<string> {
    let value = this.get("transfers");
    return value!.toStringArray();
  }

  set transfers(value: Array<string>) {
    this.set("transfers", Value.fromStringArray(value));
  }
}

export class ERC721Operator extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ERC721Operator entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type ERC721Operator must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ERC721Operator", id.toString(), this);
    }
  }

  static load(id: string): ERC721Operator | null {
    return changetype<ERC721Operator | null>(store.get("ERC721Operator", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get contract(): Bytes {
    let value = this.get("contract");
    return value!.toBytes();
  }

  set contract(value: Bytes) {
    this.set("contract", Value.fromBytes(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value!.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get operator(): Bytes {
    let value = this.get("operator");
    return value!.toBytes();
  }

  set operator(value: Bytes) {
    this.set("operator", Value.fromBytes(value));
  }

  get approved(): boolean {
    let value = this.get("approved");
    return value!.toBoolean();
  }

  set approved(value: boolean) {
    this.set("approved", Value.fromBoolean(value));
  }
}

export class ERC721Transfer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ERC721Transfer entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type ERC721Transfer must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ERC721Transfer", id.toString(), this);
    }
  }

  static load(id: string): ERC721Transfer | null {
    return changetype<ERC721Transfer | null>(store.get("ERC721Transfer", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get emitter(): Bytes {
    let value = this.get("emitter");
    return value!.toBytes();
  }

  set emitter(value: Bytes) {
    this.set("emitter", Value.fromBytes(value));
  }

  get transaction(): string {
    let value = this.get("transaction");
    return value!.toString();
  }

  set transaction(value: string) {
    this.set("transaction", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get contract(): Bytes {
    let value = this.get("contract");
    return value!.toBytes();
  }

  set contract(value: Bytes) {
    this.set("contract", Value.fromBytes(value));
  }

  get token(): string {
    let value = this.get("token");
    return value!.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }

  get from(): Bytes {
    let value = this.get("from");
    return value!.toBytes();
  }

  set from(value: Bytes) {
    this.set("from", Value.fromBytes(value));
  }

  get to(): Bytes {
    let value = this.get("to");
    return value!.toBytes();
  }

  set to(value: Bytes) {
    this.set("to", Value.fromBytes(value));
  }
}

export class Ownable extends Entity {
  constructor(id: Bytes) {
    super();
    this.set("id", Value.fromBytes(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Ownable entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.BYTES,
        `Entities of type Ownable must have an ID of type Bytes but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Ownable", id.toBytes().toHexString(), this);
    }
  }

  static load(id: Bytes): Ownable | null {
    return changetype<Ownable | null>(store.get("Ownable", id.toHexString()));
  }

  get id(): Bytes {
    let value = this.get("id");
    return value!.toBytes();
  }

  set id(value: Bytes) {
    this.set("id", Value.fromBytes(value));
  }

  get asAccount(): Bytes {
    let value = this.get("asAccount");
    return value!.toBytes();
  }

  set asAccount(value: Bytes) {
    this.set("asAccount", Value.fromBytes(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value!.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get ownershipTransferred(): Array<string> {
    let value = this.get("ownershipTransferred");
    return value!.toStringArray();
  }

  set ownershipTransferred(value: Array<string>) {
    this.set("ownershipTransferred", Value.fromStringArray(value));
  }
}

export class OwnershipTransferred extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save OwnershipTransferred entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type OwnershipTransferred must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("OwnershipTransferred", id.toString(), this);
    }
  }

  static load(id: string): OwnershipTransferred | null {
    return changetype<OwnershipTransferred | null>(
      store.get("OwnershipTransferred", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get emitter(): Bytes {
    let value = this.get("emitter");
    return value!.toBytes();
  }

  set emitter(value: Bytes) {
    this.set("emitter", Value.fromBytes(value));
  }

  get transaction(): string {
    let value = this.get("transaction");
    return value!.toString();
  }

  set transaction(value: string) {
    this.set("transaction", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get contract(): Bytes {
    let value = this.get("contract");
    return value!.toBytes();
  }

  set contract(value: Bytes) {
    this.set("contract", Value.fromBytes(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value!.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }
}

export class Transaction extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Transaction entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Transaction must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Transaction", id.toString(), this);
    }
  }

  static load(id: string): Transaction | null {
    return changetype<Transaction | null>(store.get("Transaction", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get events(): Array<string> {
    let value = this.get("events");
    return value!.toStringArray();
  }

  set events(value: Array<string>) {
    this.set("events", Value.fromStringArray(value));
  }
}

export class CitizenIDVerification extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save CitizenIDVerification entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type CitizenIDVerification must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("CitizenIDVerification", id.toString(), this);
    }
  }

  static load(id: string): CitizenIDVerification | null {
    return changetype<CitizenIDVerification | null>(
      store.get("CitizenIDVerification", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value!.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get verifier(): Bytes {
    let value = this.get("verifier");
    return value!.toBytes();
  }

  set verifier(value: Bytes) {
    this.set("verifier", Value.fromBytes(value));
  }

  get citizen(): Bytes {
    let value = this.get("citizen");
    return value!.toBytes();
  }

  set citizen(value: Bytes) {
    this.set("citizen", Value.fromBytes(value));
  }
}

export class Counter extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Counter entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Counter must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Counter", id.toString(), this);
    }
  }

  static load(id: string): Counter | null {
    return changetype<Counter | null>(store.get("Counter", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get totalVerified(): BigInt {
    let value = this.get("totalVerified");
    return value!.toBigInt();
  }

  set totalVerified(value: BigInt) {
    this.set("totalVerified", Value.fromBigInt(value));
  }
}
