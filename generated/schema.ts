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

export class Factory extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("factory", Value.fromBytes(Bytes.empty()));
    this.set("utopiaAddress", Value.fromBytes(Bytes.empty()));
    this.set("collectionAddress", Value.fromBytes(Bytes.empty()));
    this.set("owner", Value.fromString(""));
    this.set("createdAt", Value.fromBigInt(BigInt.zero()));
    this.set("blockNumber", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Factory entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Factory entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Factory", id.toString(), this);
    }
  }

  static load(id: string): Factory | null {
    return changetype<Factory | null>(store.get("Factory", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get factory(): Bytes {
    let value = this.get("factory");
    return value!.toBytes();
  }

  set factory(value: Bytes) {
    this.set("factory", Value.fromBytes(value));
  }

  get utopia(): Array<string> {
    let value = this.get("utopia");
    return value!.toStringArray();
  }

  set utopia(value: Array<string>) {
    this.set("utopia", Value.fromStringArray(value));
  }

  get collection(): Array<string> {
    let value = this.get("collection");
    return value!.toStringArray();
  }

  set collection(value: Array<string>) {
    this.set("collection", Value.fromStringArray(value));
  }

  get utopiaAddress(): Bytes {
    let value = this.get("utopiaAddress");
    return value!.toBytes();
  }

  set utopiaAddress(value: Bytes) {
    this.set("utopiaAddress", Value.fromBytes(value));
  }

  get collectionAddress(): Bytes {
    let value = this.get("collectionAddress");
    return value!.toBytes();
  }

  set collectionAddress(value: Bytes) {
    this.set("collectionAddress", Value.fromBytes(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value!.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }

  get createdAt(): BigInt {
    let value = this.get("createdAt");
    return value!.toBigInt();
  }

  set createdAt(value: BigInt) {
    this.set("createdAt", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value!.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }
}

export class Utopia extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("owner", Value.fromBytes(Bytes.empty()));
    this.set("utopia", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Utopia entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Utopia entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Utopia", id.toString(), this);
    }
  }

  static load(id: string): Utopia | null {
    return changetype<Utopia | null>(store.get("Utopia", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value!.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get utopia(): string {
    let value = this.get("utopia");
    return value!.toString();
  }

  set utopia(value: string) {
    this.set("utopia", Value.fromString(value));
  }

  get lands(): Array<string> {
    let value = this.get("lands");
    return value!.toStringArray();
  }

  set lands(value: Array<string>) {
    this.set("lands", Value.fromStringArray(value));
  }
}

export class Land extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("contract", Value.fromString(""));
    this.set("landId", Value.fromBigInt(BigInt.zero()));
    this.set("owner", Value.fromBytes(Bytes.empty()));
    this.set("x1", Value.fromBigInt(BigInt.zero()));
    this.set("x2", Value.fromBigInt(BigInt.zero()));
    this.set("y1", Value.fromBigInt(BigInt.zero()));
    this.set("y2", Value.fromBigInt(BigInt.zero()));
    this.set("create_time", Value.fromBigInt(BigInt.zero()));
    this.set("update_time", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Land entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Land entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Land", id.toString(), this);
    }
  }

  static load(id: string): Land | null {
    return changetype<Land | null>(store.get("Land", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get contract(): string {
    let value = this.get("contract");
    return value!.toString();
  }

  set contract(value: string) {
    this.set("contract", Value.fromString(value));
  }

  get landId(): BigInt {
    let value = this.get("landId");
    return value!.toBigInt();
  }

  set landId(value: BigInt) {
    this.set("landId", Value.fromBigInt(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value!.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get x1(): BigInt {
    let value = this.get("x1");
    return value!.toBigInt();
  }

  set x1(value: BigInt) {
    this.set("x1", Value.fromBigInt(value));
  }

  get x2(): BigInt {
    let value = this.get("x2");
    return value!.toBigInt();
  }

  set x2(value: BigInt) {
    this.set("x2", Value.fromBigInt(value));
  }

  get y1(): BigInt {
    let value = this.get("y1");
    return value!.toBigInt();
  }

  set y1(value: BigInt) {
    this.set("y1", Value.fromBigInt(value));
  }

  get y2(): BigInt {
    let value = this.get("y2");
    return value!.toBigInt();
  }

  set y2(value: BigInt) {
    this.set("y2", Value.fromBigInt(value));
  }

  get create_time(): BigInt {
    let value = this.get("create_time");
    return value!.toBigInt();
  }

  set create_time(value: BigInt) {
    this.set("create_time", Value.fromBigInt(value));
  }

  get update_time(): BigInt {
    let value = this.get("update_time");
    return value!.toBigInt();
  }

  set update_time(value: BigInt) {
    this.set("update_time", Value.fromBigInt(value));
  }

  get ipfsData(): string | null {
    let value = this.get("ipfsData");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set ipfsData(value: string | null) {
    if (!value) {
      this.unset("ipfsData");
    } else {
      this.set("ipfsData", Value.fromString(<string>value));
    }
  }

  get isNFT(): boolean {
    let value = this.get("isNFT");
    return value!.toBoolean();
  }

  set isNFT(value: boolean) {
    this.set("isNFT", Value.fromBoolean(value));
  }
}

export class Particle extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("contract", Value.fromBytes(Bytes.empty()));
    this.set("x", Value.fromBigInt(BigInt.zero()));
    this.set("y", Value.fromBigInt(BigInt.zero()));
    this.set("z", Value.fromBigInt(BigInt.zero()));
    this.set("block", Value.fromString(""));
    this.set("ipfsData", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Particle entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Particle entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Particle", id.toString(), this);
    }
  }

  static load(id: string): Particle | null {
    return changetype<Particle | null>(store.get("Particle", id));
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

  get x(): BigInt {
    let value = this.get("x");
    return value!.toBigInt();
  }

  set x(value: BigInt) {
    this.set("x", Value.fromBigInt(value));
  }

  get y(): BigInt {
    let value = this.get("y");
    return value!.toBigInt();
  }

  set y(value: BigInt) {
    this.set("y", Value.fromBigInt(value));
  }

  get z(): BigInt {
    let value = this.get("z");
    return value!.toBigInt();
  }

  set z(value: BigInt) {
    this.set("z", Value.fromBigInt(value));
  }

  get block(): string {
    let value = this.get("block");
    return value!.toString();
  }

  set block(value: string) {
    this.set("block", Value.fromString(value));
  }

  get metaBlock(): string | null {
    let value = this.get("metaBlock");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set metaBlock(value: string | null) {
    if (!value) {
      this.unset("metaBlock");
    } else {
      this.set("metaBlock", Value.fromString(<string>value));
    }
  }

  get metaBlockProperties(): string | null {
    let value = this.get("metaBlockProperties");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set metaBlockProperties(value: string | null) {
    if (!value) {
      this.unset("metaBlockProperties");
    } else {
      this.set("metaBlockProperties", Value.fromString(<string>value));
    }
  }

  get ipfsData(): string {
    let value = this.get("ipfsData");
    return value!.toString();
  }

  set ipfsData(value: string) {
    this.set("ipfsData", Value.fromString(value));
  }
}

export class IpfsData extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save IpfsData entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save IpfsData entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("IpfsData", id.toString(), this);
    }
  }

  static load(id: string): IpfsData | null {
    return changetype<IpfsData | null>(store.get("IpfsData", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get loaded(): boolean {
    let value = this.get("loaded");
    return value!.toBoolean();
  }

  set loaded(value: boolean) {
    this.set("loaded", Value.fromBoolean(value));
  }

  get particles(): Array<string> {
    let value = this.get("particles");
    return value!.toStringArray();
  }

  set particles(value: Array<string>) {
    this.set("particles", Value.fromStringArray(value));
  }
}

export class Account extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Account entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Account entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Account", id.toString(), this);
    }
  }

  static load(id: string): Account | null {
    return changetype<Account | null>(store.get("Account", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get asERC721(): string | null {
    let value = this.get("asERC721");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set asERC721(value: string | null) {
    if (!value) {
      this.unset("asERC721");
    } else {
      this.set("asERC721", Value.fromString(<string>value));
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

  get asOwnable(): string | null {
    let value = this.get("asOwnable");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set asOwnable(value: string | null) {
    if (!value) {
      this.unset("asOwnable");
    } else {
      this.set("asOwnable", Value.fromString(<string>value));
    }
  }

  get ownerOf(): Array<string> {
    let value = this.get("ownerOf");
    return value!.toStringArray();
  }

  set ownerOf(value: Array<string>) {
    this.set("ownerOf", Value.fromStringArray(value));
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
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("collection", Value.fromString(""));
    this.set("asAccount", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ERC721Contract entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save ERC721Contract entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("ERC721Contract", id.toString(), this);
    }
  }

  static load(id: string): ERC721Contract | null {
    return changetype<ERC721Contract | null>(store.get("ERC721Contract", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get collection(): string {
    let value = this.get("collection");
    return value!.toString();
  }

  set collection(value: string) {
    this.set("collection", Value.fromString(value));
  }

  get asAccount(): string {
    let value = this.get("asAccount");
    return value!.toString();
  }

  set asAccount(value: string) {
    this.set("asAccount", Value.fromString(value));
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

    this.set("contract", Value.fromString(""));
    this.set("identifier", Value.fromBigInt(BigInt.zero()));
    this.set("owner", Value.fromString(""));
    this.set("approval", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ERC721Token entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save ERC721Token entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
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

  get contract(): string {
    let value = this.get("contract");
    return value!.toString();
  }

  set contract(value: string) {
    this.set("contract", Value.fromString(value));
  }

  get identifier(): BigInt {
    let value = this.get("identifier");
    return value!.toBigInt();
  }

  set identifier(value: BigInt) {
    this.set("identifier", Value.fromBigInt(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value!.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }

  get approval(): string {
    let value = this.get("approval");
    return value!.toString();
  }

  set approval(value: string) {
    this.set("approval", Value.fromString(value));
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

    this.set("contract", Value.fromString(""));
    this.set("owner", Value.fromString(""));
    this.set("operator", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ERC721Operator entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save ERC721Operator entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
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

  get contract(): string {
    let value = this.get("contract");
    return value!.toString();
  }

  set contract(value: string) {
    this.set("contract", Value.fromString(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value!.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }

  get operator(): string {
    let value = this.get("operator");
    return value!.toString();
  }

  set operator(value: string) {
    this.set("operator", Value.fromString(value));
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

    this.set("emitter", Value.fromString(""));
    this.set("transaction", Value.fromString(""));
    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
    this.set("contract", Value.fromString(""));
    this.set("token", Value.fromString(""));
    this.set("from", Value.fromString(""));
    this.set("to", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ERC721Transfer entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save ERC721Transfer entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
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

  get emitter(): string {
    let value = this.get("emitter");
    return value!.toString();
  }

  set emitter(value: string) {
    this.set("emitter", Value.fromString(value));
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

  get contract(): string {
    let value = this.get("contract");
    return value!.toString();
  }

  set contract(value: string) {
    this.set("contract", Value.fromString(value));
  }

  get token(): string {
    let value = this.get("token");
    return value!.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }

  get from(): string {
    let value = this.get("from");
    return value!.toString();
  }

  set from(value: string) {
    this.set("from", Value.fromString(value));
  }

  get to(): string {
    let value = this.get("to");
    return value!.toString();
  }

  set to(value: string) {
    this.set("to", Value.fromString(value));
  }
}

export class Ownable extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("asAccount", Value.fromString(""));
    this.set("owner", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Ownable entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Ownable entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Ownable", id.toString(), this);
    }
  }

  static load(id: string): Ownable | null {
    return changetype<Ownable | null>(store.get("Ownable", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get asAccount(): string {
    let value = this.get("asAccount");
    return value!.toString();
  }

  set asAccount(value: string) {
    this.set("asAccount", Value.fromString(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value!.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
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

    this.set("emitter", Value.fromString(""));
    this.set("transaction", Value.fromString(""));
    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
    this.set("contract", Value.fromString(""));
    this.set("owner", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save OwnershipTransferred entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save OwnershipTransferred entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
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

  get emitter(): string {
    let value = this.get("emitter");
    return value!.toString();
  }

  set emitter(value: string) {
    this.set("emitter", Value.fromString(value));
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

  get contract(): string {
    let value = this.get("contract");
    return value!.toString();
  }

  set contract(value: string) {
    this.set("contract", Value.fromString(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value!.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }
}

export class Transaction extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
    this.set("blockNumber", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Transaction entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Transaction entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
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
