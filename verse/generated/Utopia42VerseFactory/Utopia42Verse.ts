// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Assign extends ethereum.Event {
  get params(): Assign__Params {
    return new Assign__Params(this);
  }
}

export class Assign__Params {
  _event: Assign;

  constructor(event: Assign) {
    this._event = event;
  }

  get landId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get x1(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get x2(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get y1(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get y2(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get owner(): Address {
    return this._event.parameters[5].value.toAddress();
  }

  get hash(): string {
    return this._event.parameters[6].value.toString();
  }
}

export class Burn extends ethereum.Event {
  get params(): Burn__Params {
    return new Burn__Params(this);
  }
}

export class Burn__Params {
  _event: Burn;

  constructor(event: Burn) {
    this._event = event;
  }

  get landId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class LandToNFTSet extends ethereum.Event {
  get params(): LandToNFTSet__Params {
    return new LandToNFTSet__Params(this);
  }
}

export class LandToNFTSet__Params {
  _event: LandToNFTSet;

  constructor(event: LandToNFTSet) {
    this._event = event;
  }

  get landId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class LandTransfer extends ethereum.Event {
  get params(): LandTransfer__Params {
    return new LandTransfer__Params(this);
  }
}

export class LandTransfer__Params {
  _event: LandTransfer;

  constructor(event: LandTransfer) {
    this._event = event;
  }

  get landId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get from(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class LandUpdate extends ethereum.Event {
  get params(): LandUpdate__Params {
    return new LandUpdate__Params(this);
  }
}

export class LandUpdate__Params {
  _event: LandUpdate;

  constructor(event: LandUpdate) {
    this._event = event;
  }

  get landId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get hash(): string {
    return this._event.parameters[1].value.toString();
  }
}

export class NFTToLandSet extends ethereum.Event {
  get params(): NFTToLandSet__Params {
    return new NFTToLandSet__Params(this);
  }
}

export class NFTToLandSet__Params {
  _event: NFTToLandSet;

  constructor(event: NFTToLandSet) {
    this._event = event;
  }

  get landId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class RoleAdminChanged extends ethereum.Event {
  get params(): RoleAdminChanged__Params {
    return new RoleAdminChanged__Params(this);
  }
}

export class RoleAdminChanged__Params {
  _event: RoleAdminChanged;

  constructor(event: RoleAdminChanged) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get previousAdminRole(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get newAdminRole(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }
}

export class RoleGranted extends ethereum.Event {
  get params(): RoleGranted__Params {
    return new RoleGranted__Params(this);
  }
}

export class RoleGranted__Params {
  _event: RoleGranted;

  constructor(event: RoleGranted) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class RoleRevoked extends ethereum.Event {
  get params(): RoleRevoked__Params {
    return new RoleRevoked__Params(this);
  }
}

export class RoleRevoked__Params {
  _event: RoleRevoked;

  constructor(event: RoleRevoked) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class Utopia42Verse__landsResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;
  value5: BigInt;
  value6: string;
  value7: boolean;
  value8: Address;
  value9: BigInt;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt,
    value5: BigInt,
    value6: string,
    value7: boolean,
    value8: Address,
    value9: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
    this.value8 = value8;
    this.value9 = value9;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromSignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromSignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromSignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromSignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    map.set("value6", ethereum.Value.fromString(this.value6));
    map.set("value7", ethereum.Value.fromBoolean(this.value7));
    map.set("value8", ethereum.Value.fromAddress(this.value8));
    map.set("value9", ethereum.Value.fromUnsignedBigInt(this.value9));
    return map;
  }

  getId(): BigInt {
    return this.value0;
  }

  getX1(): BigInt {
    return this.value1;
  }

  getX2(): BigInt {
    return this.value2;
  }

  getY1(): BigInt {
    return this.value3;
  }

  getY2(): BigInt {
    return this.value4;
  }

  getTime(): BigInt {
    return this.value5;
  }

  getHash(): string {
    return this.value6;
  }

  getIsNFT(): boolean {
    return this.value7;
  }

  getOwner(): Address {
    return this.value8;
  }

  getOwnerIndex(): BigInt {
    return this.value9;
  }
}

export class Utopia42Verse__getLandsResult_landsStruct extends ethereum.Tuple {
  get id(): BigInt {
    return this[0].toBigInt();
  }

  get x1(): BigInt {
    return this[1].toBigInt();
  }

  get x2(): BigInt {
    return this[2].toBigInt();
  }

  get y1(): BigInt {
    return this[3].toBigInt();
  }

  get y2(): BigInt {
    return this[4].toBigInt();
  }

  get time(): BigInt {
    return this[5].toBigInt();
  }

  get hash(): string {
    return this[6].toString();
  }

  get isNFT(): boolean {
    return this[7].toBoolean();
  }

  get owner(): Address {
    return this[8].toAddress();
  }

  get ownerIndex(): BigInt {
    return this[9].toBigInt();
  }
}

export class Utopia42Verse__getLandsByIdsResult_landsStruct extends ethereum.Tuple {
  get id(): BigInt {
    return this[0].toBigInt();
  }

  get x1(): BigInt {
    return this[1].toBigInt();
  }

  get x2(): BigInt {
    return this[2].toBigInt();
  }

  get y1(): BigInt {
    return this[3].toBigInt();
  }

  get y2(): BigInt {
    return this[4].toBigInt();
  }

  get time(): BigInt {
    return this[5].toBigInt();
  }

  get hash(): string {
    return this[6].toString();
  }

  get isNFT(): boolean {
    return this[7].toBoolean();
  }

  get owner(): Address {
    return this[8].toAddress();
  }

  get ownerIndex(): BigInt {
    return this[9].toBigInt();
  }
}

export class Utopia42Verse extends ethereum.SmartContract {
  static bind(address: Address): Utopia42Verse {
    return new Utopia42Verse("Utopia42Verse", address);
  }

  BURN_ROLE(): Bytes {
    let result = super.call("BURN_ROLE", "BURN_ROLE():(bytes32)", []);

    return result[0].toBytes();
  }

  try_BURN_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("BURN_ROLE", "BURN_ROLE():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  CONFLICT_FREE_ROLE(): Bytes {
    let result = super.call(
      "CONFLICT_FREE_ROLE",
      "CONFLICT_FREE_ROLE():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_CONFLICT_FREE_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "CONFLICT_FREE_ROLE",
      "CONFLICT_FREE_ROLE():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  DEFAULT_ADMIN_ROLE(): Bytes {
    let result = super.call(
      "DEFAULT_ADMIN_ROLE",
      "DEFAULT_ADMIN_ROLE():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_DEFAULT_ADMIN_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "DEFAULT_ADMIN_ROLE",
      "DEFAULT_ADMIN_ROLE():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  NFT_ROLE(): Bytes {
    let result = super.call("NFT_ROLE", "NFT_ROLE():(bytes32)", []);

    return result[0].toBytes();
  }

  try_NFT_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("NFT_ROLE", "NFT_ROLE():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  UTOPIA42DAO_ROLE(): Bytes {
    let result = super.call(
      "UTOPIA42DAO_ROLE",
      "UTOPIA42DAO_ROLE():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_UTOPIA42DAO_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "UTOPIA42DAO_ROLE",
      "UTOPIA42DAO_ROLE():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  VERSE_ADMIN_ROLE(): Bytes {
    let result = super.call(
      "VERSE_ADMIN_ROLE",
      "VERSE_ADMIN_ROLE():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_VERSE_ADMIN_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "VERSE_ADMIN_ROLE",
      "VERSE_ADMIN_ROLE():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  VERSE_FACTORY_ROLE(): Bytes {
    let result = super.call(
      "VERSE_FACTORY_ROLE",
      "VERSE_FACTORY_ROLE():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_VERSE_FACTORY_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "VERSE_FACTORY_ROLE",
      "VERSE_FACTORY_ROLE():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  assignLandWithoutSigEnabled(): boolean {
    let result = super.call(
      "assignLandWithoutSigEnabled",
      "assignLandWithoutSigEnabled():(bool)",
      []
    );

    return result[0].toBoolean();
  }

  try_assignLandWithoutSigEnabled(): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "assignLandWithoutSigEnabled",
      "assignLandWithoutSigEnabled():(bool)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  controllerAddress(): Address {
    let result = super.call(
      "controllerAddress",
      "controllerAddress():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_controllerAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "controllerAddress",
      "controllerAddress():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getRoleAdmin(role: Bytes): Bytes {
    let result = super.call("getRoleAdmin", "getRoleAdmin(bytes32):(bytes32)", [
      ethereum.Value.fromFixedBytes(role)
    ]);

    return result[0].toBytes();
  }

  try_getRoleAdmin(role: Bytes): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "getRoleAdmin",
      "getRoleAdmin(bytes32):(bytes32)",
      [ethereum.Value.fromFixedBytes(role)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  hasRole(role: Bytes, account: Address): boolean {
    let result = super.call("hasRole", "hasRole(bytes32,address):(bool)", [
      ethereum.Value.fromFixedBytes(role),
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBoolean();
  }

  try_hasRole(role: Bytes, account: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("hasRole", "hasRole(bytes32,address):(bool)", [
      ethereum.Value.fromFixedBytes(role),
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  landToNFTEnabled(): boolean {
    let result = super.call(
      "landToNFTEnabled",
      "landToNFTEnabled():(bool)",
      []
    );

    return result[0].toBoolean();
  }

  try_landToNFTEnabled(): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "landToNFTEnabled",
      "landToNFTEnabled():(bool)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  lands(param0: BigInt): Utopia42Verse__landsResult {
    let result = super.call(
      "lands",
      "lands(uint256):(uint256,int256,int256,int256,int256,uint256,string,bool,address,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new Utopia42Verse__landsResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toBigInt(),
      result[6].toString(),
      result[7].toBoolean(),
      result[8].toAddress(),
      result[9].toBigInt()
    );
  }

  try_lands(param0: BigInt): ethereum.CallResult<Utopia42Verse__landsResult> {
    let result = super.tryCall(
      "lands",
      "lands(uint256):(uint256,int256,int256,int256,int256,uint256,string,bool,address,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Utopia42Verse__landsResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toBigInt(),
        value[6].toString(),
        value[7].toBoolean(),
        value[8].toAddress(),
        value[9].toBigInt()
      )
    );
  }

  lastLandId(): BigInt {
    let result = super.call("lastLandId", "lastLandId():(uint256)", []);

    return result[0].toBigInt();
  }

  try_lastLandId(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("lastLandId", "lastLandId():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  nftContract(): Address {
    let result = super.call("nftContract", "nftContract():(address)", []);

    return result[0].toAddress();
  }

  try_nftContract(): ethereum.CallResult<Address> {
    let result = super.tryCall("nftContract", "nftContract():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  ownerLands(param0: Address, param1: BigInt): BigInt {
    let result = super.call(
      "ownerLands",
      "ownerLands(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return result[0].toBigInt();
  }

  try_ownerLands(param0: Address, param1: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "ownerLands",
      "ownerLands(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  publicAssignEnabled(): boolean {
    let result = super.call(
      "publicAssignEnabled",
      "publicAssignEnabled():(bool)",
      []
    );

    return result[0].toBoolean();
  }

  try_publicAssignEnabled(): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "publicAssignEnabled",
      "publicAssignEnabled():(bool)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  verseName(): string {
    let result = super.call("verseName", "verseName():(string)", []);

    return result[0].toString();
  }

  try_verseName(): ethereum.CallResult<string> {
    let result = super.tryCall("verseName", "verseName():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  updateLand(hash: string, landId: BigInt): boolean {
    let result = super.call("updateLand", "updateLand(string,uint256):(bool)", [
      ethereum.Value.fromString(hash),
      ethereum.Value.fromUnsignedBigInt(landId)
    ]);

    return result[0].toBoolean();
  }

  try_updateLand(hash: string, landId: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "updateLand",
      "updateLand(string,uint256):(bool)",
      [
        ethereum.Value.fromString(hash),
        ethereum.Value.fromUnsignedBigInt(landId)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  landPrice(x1: BigInt, x2: BigInt, y1: BigInt, y2: BigInt): BigInt {
    let result = super.call(
      "landPrice",
      "landPrice(int256,int256,int256,int256):(uint256)",
      [
        ethereum.Value.fromSignedBigInt(x1),
        ethereum.Value.fromSignedBigInt(x2),
        ethereum.Value.fromSignedBigInt(y1),
        ethereum.Value.fromSignedBigInt(y2)
      ]
    );

    return result[0].toBigInt();
  }

  try_landPrice(
    x1: BigInt,
    x2: BigInt,
    y1: BigInt,
    y2: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "landPrice",
      "landPrice(int256,int256,int256,int256):(uint256)",
      [
        ethereum.Value.fromSignedBigInt(x1),
        ethereum.Value.fromSignedBigInt(x2),
        ethereum.Value.fromSignedBigInt(y1),
        ethereum.Value.fromSignedBigInt(y2)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  abs(x: BigInt): BigInt {
    let result = super.call("abs", "abs(int256):(uint256)", [
      ethereum.Value.fromSignedBigInt(x)
    ]);

    return result[0].toBigInt();
  }

  try_abs(x: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall("abs", "abs(int256):(uint256)", [
      ethereum.Value.fromSignedBigInt(x)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getLands(owner: Address): Array<Utopia42Verse__getLandsResult_landsStruct> {
    let result = super.call(
      "getLands",
      "getLands(address):((uint256,int256,int256,int256,int256,uint256,string,bool,address,uint256)[])",
      [ethereum.Value.fromAddress(owner)]
    );

    return result[0].toTupleArray<Utopia42Verse__getLandsResult_landsStruct>();
  }

  try_getLands(
    owner: Address
  ): ethereum.CallResult<Array<Utopia42Verse__getLandsResult_landsStruct>> {
    let result = super.tryCall(
      "getLands",
      "getLands(address):((uint256,int256,int256,int256,int256,uint256,string,bool,address,uint256)[])",
      [ethereum.Value.fromAddress(owner)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<Utopia42Verse__getLandsResult_landsStruct>()
    );
  }

  getLandsByIds(
    ids: Array<BigInt>
  ): Array<Utopia42Verse__getLandsByIdsResult_landsStruct> {
    let result = super.call(
      "getLandsByIds",
      "getLandsByIds(uint256[]):((uint256,int256,int256,int256,int256,uint256,string,bool,address,uint256)[])",
      [ethereum.Value.fromUnsignedBigIntArray(ids)]
    );

    return result[0].toTupleArray<
      Utopia42Verse__getLandsByIdsResult_landsStruct
    >();
  }

  try_getLandsByIds(
    ids: Array<BigInt>
  ): ethereum.CallResult<
    Array<Utopia42Verse__getLandsByIdsResult_landsStruct>
  > {
    let result = super.tryCall(
      "getLandsByIds",
      "getLandsByIds(uint256[]):((uint256,int256,int256,int256,int256,uint256,string,bool,address,uint256)[])",
      [ethereum.Value.fromUnsignedBigIntArray(ids)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<Utopia42Verse__getLandsByIdsResult_landsStruct>()
    );
  }

  hasConflict(
    x1: BigInt,
    x2: BigInt,
    y1: BigInt,
    y2: BigInt,
    lastLandChecked: BigInt
  ): boolean {
    let result = super.call(
      "hasConflict",
      "hasConflict(int256,int256,int256,int256,uint256):(bool)",
      [
        ethereum.Value.fromSignedBigInt(x1),
        ethereum.Value.fromSignedBigInt(x2),
        ethereum.Value.fromSignedBigInt(y1),
        ethereum.Value.fromSignedBigInt(y2),
        ethereum.Value.fromUnsignedBigInt(lastLandChecked)
      ]
    );

    return result[0].toBoolean();
  }

  try_hasConflict(
    x1: BigInt,
    x2: BigInt,
    y1: BigInt,
    y2: BigInt,
    lastLandChecked: BigInt
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "hasConflict",
      "hasConflict(int256,int256,int256,int256,uint256):(bool)",
      [
        ethereum.Value.fromSignedBigInt(x1),
        ethereum.Value.fromSignedBigInt(x2),
        ethereum.Value.fromSignedBigInt(y1),
        ethereum.Value.fromSignedBigInt(y2),
        ethereum.Value.fromUnsignedBigInt(lastLandChecked)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _owner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _controller(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _publicAssignEnabled(): boolean {
    return this._call.inputValues[2].value.toBoolean();
  }

  get _verseName(): string {
    return this._call.inputValues[3].value.toString();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class GrantRoleCall extends ethereum.Call {
  get inputs(): GrantRoleCall__Inputs {
    return new GrantRoleCall__Inputs(this);
  }

  get outputs(): GrantRoleCall__Outputs {
    return new GrantRoleCall__Outputs(this);
  }
}

export class GrantRoleCall__Inputs {
  _call: GrantRoleCall;

  constructor(call: GrantRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class GrantRoleCall__Outputs {
  _call: GrantRoleCall;

  constructor(call: GrantRoleCall) {
    this._call = call;
  }
}

export class RenounceRoleCall extends ethereum.Call {
  get inputs(): RenounceRoleCall__Inputs {
    return new RenounceRoleCall__Inputs(this);
  }

  get outputs(): RenounceRoleCall__Outputs {
    return new RenounceRoleCall__Outputs(this);
  }
}

export class RenounceRoleCall__Inputs {
  _call: RenounceRoleCall;

  constructor(call: RenounceRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RenounceRoleCall__Outputs {
  _call: RenounceRoleCall;

  constructor(call: RenounceRoleCall) {
    this._call = call;
  }
}

export class RevokeRoleCall extends ethereum.Call {
  get inputs(): RevokeRoleCall__Inputs {
    return new RevokeRoleCall__Inputs(this);
  }

  get outputs(): RevokeRoleCall__Outputs {
    return new RevokeRoleCall__Outputs(this);
  }
}

export class RevokeRoleCall__Inputs {
  _call: RevokeRoleCall;

  constructor(call: RevokeRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RevokeRoleCall__Outputs {
  _call: RevokeRoleCall;

  constructor(call: RevokeRoleCall) {
    this._call = call;
  }
}

export class UpdateLandCall extends ethereum.Call {
  get inputs(): UpdateLandCall__Inputs {
    return new UpdateLandCall__Inputs(this);
  }

  get outputs(): UpdateLandCall__Outputs {
    return new UpdateLandCall__Outputs(this);
  }
}

export class UpdateLandCall__Inputs {
  _call: UpdateLandCall;

  constructor(call: UpdateLandCall) {
    this._call = call;
  }

  get hash(): string {
    return this._call.inputValues[0].value.toString();
  }

  get landId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class UpdateLandCall__Outputs {
  _call: UpdateLandCall;

  constructor(call: UpdateLandCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class TransferLandCall extends ethereum.Call {
  get inputs(): TransferLandCall__Inputs {
    return new TransferLandCall__Inputs(this);
  }

  get outputs(): TransferLandCall__Outputs {
    return new TransferLandCall__Outputs(this);
  }
}

export class TransferLandCall__Inputs {
  _call: TransferLandCall;

  constructor(call: TransferLandCall) {
    this._call = call;
  }

  get landId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class TransferLandCall__Outputs {
  _call: TransferLandCall;

  constructor(call: TransferLandCall) {
    this._call = call;
  }
}

export class TransferNFTLandCall extends ethereum.Call {
  get inputs(): TransferNFTLandCall__Inputs {
    return new TransferNFTLandCall__Inputs(this);
  }

  get outputs(): TransferNFTLandCall__Outputs {
    return new TransferNFTLandCall__Outputs(this);
  }
}

export class TransferNFTLandCall__Inputs {
  _call: TransferNFTLandCall;

  constructor(call: TransferNFTLandCall) {
    this._call = call;
  }

  get landId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class TransferNFTLandCall__Outputs {
  _call: TransferNFTLandCall;

  constructor(call: TransferNFTLandCall) {
    this._call = call;
  }
}

export class BurnLandCall extends ethereum.Call {
  get inputs(): BurnLandCall__Inputs {
    return new BurnLandCall__Inputs(this);
  }

  get outputs(): BurnLandCall__Outputs {
    return new BurnLandCall__Outputs(this);
  }
}

export class BurnLandCall__Inputs {
  _call: BurnLandCall;

  constructor(call: BurnLandCall) {
    this._call = call;
  }

  get landId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class BurnLandCall__Outputs {
  _call: BurnLandCall;

  constructor(call: BurnLandCall) {
    this._call = call;
  }
}

export class AdminAssignLandCall extends ethereum.Call {
  get inputs(): AdminAssignLandCall__Inputs {
    return new AdminAssignLandCall__Inputs(this);
  }

  get outputs(): AdminAssignLandCall__Outputs {
    return new AdminAssignLandCall__Outputs(this);
  }
}

export class AdminAssignLandCall__Inputs {
  _call: AdminAssignLandCall;

  constructor(call: AdminAssignLandCall) {
    this._call = call;
  }

  get x1(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get x2(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get y1(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get y2(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get addr(): Address {
    return this._call.inputValues[4].value.toAddress();
  }

  get hash(): string {
    return this._call.inputValues[5].value.toString();
  }
}

export class AdminAssignLandCall__Outputs {
  _call: AdminAssignLandCall;

  constructor(call: AdminAssignLandCall) {
    this._call = call;
  }
}

export class AssignLandCall extends ethereum.Call {
  get inputs(): AssignLandCall__Inputs {
    return new AssignLandCall__Inputs(this);
  }

  get outputs(): AssignLandCall__Outputs {
    return new AssignLandCall__Outputs(this);
  }
}

export class AssignLandCall__Inputs {
  _call: AssignLandCall;

  constructor(call: AssignLandCall) {
    this._call = call;
  }

  get x1(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get x2(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get y1(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get y2(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get hash(): string {
    return this._call.inputValues[4].value.toString();
  }
}

export class AssignLandCall__Outputs {
  _call: AssignLandCall;

  constructor(call: AssignLandCall) {
    this._call = call;
  }
}

export class AssignLandConflictFreeForCall extends ethereum.Call {
  get inputs(): AssignLandConflictFreeForCall__Inputs {
    return new AssignLandConflictFreeForCall__Inputs(this);
  }

  get outputs(): AssignLandConflictFreeForCall__Outputs {
    return new AssignLandConflictFreeForCall__Outputs(this);
  }
}

export class AssignLandConflictFreeForCall__Inputs {
  _call: AssignLandConflictFreeForCall;

  constructor(call: AssignLandConflictFreeForCall) {
    this._call = call;
  }

  get x1(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get x2(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get y1(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get y2(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get hash(): string {
    return this._call.inputValues[4].value.toString();
  }

  get lastLandChecked(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get forAddress(): Address {
    return this._call.inputValues[6].value.toAddress();
  }
}

export class AssignLandConflictFreeForCall__Outputs {
  _call: AssignLandConflictFreeForCall;

  constructor(call: AssignLandConflictFreeForCall) {
    this._call = call;
  }
}

export class AssignLandConflictFreeCall extends ethereum.Call {
  get inputs(): AssignLandConflictFreeCall__Inputs {
    return new AssignLandConflictFreeCall__Inputs(this);
  }

  get outputs(): AssignLandConflictFreeCall__Outputs {
    return new AssignLandConflictFreeCall__Outputs(this);
  }
}

export class AssignLandConflictFreeCall__Inputs {
  _call: AssignLandConflictFreeCall;

  constructor(call: AssignLandConflictFreeCall) {
    this._call = call;
  }

  get x1(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get x2(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get y1(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get y2(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get hash(): string {
    return this._call.inputValues[4].value.toString();
  }

  get lastLandChecked(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get sig(): Bytes {
    return this._call.inputValues[6].value.toBytes();
  }
}

export class AssignLandConflictFreeCall__Outputs {
  _call: AssignLandConflictFreeCall;

  constructor(call: AssignLandConflictFreeCall) {
    this._call = call;
  }
}

export class LandToNFTCall extends ethereum.Call {
  get inputs(): LandToNFTCall__Inputs {
    return new LandToNFTCall__Inputs(this);
  }

  get outputs(): LandToNFTCall__Outputs {
    return new LandToNFTCall__Outputs(this);
  }
}

export class LandToNFTCall__Inputs {
  _call: LandToNFTCall;

  constructor(call: LandToNFTCall) {
    this._call = call;
  }

  get landId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class LandToNFTCall__Outputs {
  _call: LandToNFTCall;

  constructor(call: LandToNFTCall) {
    this._call = call;
  }
}

export class NFTToLandCall extends ethereum.Call {
  get inputs(): NFTToLandCall__Inputs {
    return new NFTToLandCall__Inputs(this);
  }

  get outputs(): NFTToLandCall__Outputs {
    return new NFTToLandCall__Outputs(this);
  }
}

export class NFTToLandCall__Inputs {
  _call: NFTToLandCall;

  constructor(call: NFTToLandCall) {
    this._call = call;
  }

  get landId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class NFTToLandCall__Outputs {
  _call: NFTToLandCall;

  constructor(call: NFTToLandCall) {
    this._call = call;
  }
}

export class AdminSetIsPublicCall extends ethereum.Call {
  get inputs(): AdminSetIsPublicCall__Inputs {
    return new AdminSetIsPublicCall__Inputs(this);
  }

  get outputs(): AdminSetIsPublicCall__Outputs {
    return new AdminSetIsPublicCall__Outputs(this);
  }
}

export class AdminSetIsPublicCall__Inputs {
  _call: AdminSetIsPublicCall;

  constructor(call: AdminSetIsPublicCall) {
    this._call = call;
  }

  get val(): boolean {
    return this._call.inputValues[0].value.toBoolean();
  }
}

export class AdminSetIsPublicCall__Outputs {
  _call: AdminSetIsPublicCall;

  constructor(call: AdminSetIsPublicCall) {
    this._call = call;
  }
}

export class AdminSetVerseNameCall extends ethereum.Call {
  get inputs(): AdminSetVerseNameCall__Inputs {
    return new AdminSetVerseNameCall__Inputs(this);
  }

  get outputs(): AdminSetVerseNameCall__Outputs {
    return new AdminSetVerseNameCall__Outputs(this);
  }
}

export class AdminSetVerseNameCall__Inputs {
  _call: AdminSetVerseNameCall;

  constructor(call: AdminSetVerseNameCall) {
    this._call = call;
  }

  get _newName(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class AdminSetVerseNameCall__Outputs {
  _call: AdminSetVerseNameCall;

  constructor(call: AdminSetVerseNameCall) {
    this._call = call;
  }
}

export class AdminSetNFTContractCall extends ethereum.Call {
  get inputs(): AdminSetNFTContractCall__Inputs {
    return new AdminSetNFTContractCall__Inputs(this);
  }

  get outputs(): AdminSetNFTContractCall__Outputs {
    return new AdminSetNFTContractCall__Outputs(this);
  }
}

export class AdminSetNFTContractCall__Inputs {
  _call: AdminSetNFTContractCall;

  constructor(call: AdminSetNFTContractCall) {
    this._call = call;
  }

  get addr(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class AdminSetNFTContractCall__Outputs {
  _call: AdminSetNFTContractCall;

  constructor(call: AdminSetNFTContractCall) {
    this._call = call;
  }
}

export class AdminEnableWithoutSigCall extends ethereum.Call {
  get inputs(): AdminEnableWithoutSigCall__Inputs {
    return new AdminEnableWithoutSigCall__Inputs(this);
  }

  get outputs(): AdminEnableWithoutSigCall__Outputs {
    return new AdminEnableWithoutSigCall__Outputs(this);
  }
}

export class AdminEnableWithoutSigCall__Inputs {
  _call: AdminEnableWithoutSigCall;

  constructor(call: AdminEnableWithoutSigCall) {
    this._call = call;
  }

  get val(): boolean {
    return this._call.inputValues[0].value.toBoolean();
  }
}

export class AdminEnableWithoutSigCall__Outputs {
  _call: AdminEnableWithoutSigCall;

  constructor(call: AdminEnableWithoutSigCall) {
    this._call = call;
  }
}

export class AdminEnableLandToNFTCall extends ethereum.Call {
  get inputs(): AdminEnableLandToNFTCall__Inputs {
    return new AdminEnableLandToNFTCall__Inputs(this);
  }

  get outputs(): AdminEnableLandToNFTCall__Outputs {
    return new AdminEnableLandToNFTCall__Outputs(this);
  }
}

export class AdminEnableLandToNFTCall__Inputs {
  _call: AdminEnableLandToNFTCall;

  constructor(call: AdminEnableLandToNFTCall) {
    this._call = call;
  }

  get val(): boolean {
    return this._call.inputValues[0].value.toBoolean();
  }
}

export class AdminEnableLandToNFTCall__Outputs {
  _call: AdminEnableLandToNFTCall;

  constructor(call: AdminEnableLandToNFTCall) {
    this._call = call;
  }
}
