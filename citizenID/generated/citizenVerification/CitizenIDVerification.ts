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

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get approved(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class ApprovalForAll extends ethereum.Event {
  get params(): ApprovalForAll__Params {
    return new ApprovalForAll__Params(this);
  }
}

export class ApprovalForAll__Params {
  _event: ApprovalForAll;

  constructor(event: ApprovalForAll) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get operator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get approved(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class BrightIDSet extends ethereum.Event {
  get params(): BrightIDSet__Params {
    return new BrightIDSet__Params(this);
  }
}

export class BrightIDSet__Params {
  _event: BrightIDSet;

  constructor(event: BrightIDSet) {
    this._event = event;
  }

  get nftId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get caller(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get addrs(): Array<Address> {
    return this._event.parameters[2].value.toAddressArray();
  }
}

export class CitizenIDTransferWhUpdated extends ethereum.Event {
  get params(): CitizenIDTransferWhUpdated__Params {
    return new CitizenIDTransferWhUpdated__Params(this);
  }
}

export class CitizenIDTransferWhUpdated__Params {
  _event: CitizenIDTransferWhUpdated;

  constructor(event: CitizenIDTransferWhUpdated) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get isAdded(): boolean {
    return this._event.parameters[1].value.toBoolean();
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

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class CitizenIDVerification__paramsResult {
  value0: BigInt;
  value1: boolean;
  value2: BigInt;

  constructor(value0: BigInt, value1: boolean, value2: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromBoolean(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    return map;
  }

  getMintTime(): BigInt {
    return this.value0;
  }

  getIsVerified(): boolean {
    return this.value1;
  }

  getVerifyTime(): BigInt {
    return this.value2;
  }
}

export class CitizenIDVerification__getCitizenInfoByIDResult {
  value0: BigInt;
  value1: boolean;
  value2: BigInt;
  value3: BigInt;

  constructor(value0: BigInt, value1: boolean, value2: BigInt, value3: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromBoolean(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    return map;
  }

  getCitizenId(): BigInt {
    return this.value0;
  }

  getIsVerified(): boolean {
    return this.value1;
  }

  getMintTime(): BigInt {
    return this.value2;
  }

  getVerifyTime(): BigInt {
    return this.value3;
  }
}

export class CitizenIDVerification__getCitizenInfoResult {
  value0: BigInt;
  value1: boolean;
  value2: BigInt;
  value3: BigInt;

  constructor(value0: BigInt, value1: boolean, value2: BigInt, value3: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromBoolean(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    return map;
  }

  getCitizenId(): BigInt {
    return this.value0;
  }

  getIsVerified(): boolean {
    return this.value1;
  }

  getMintTime(): BigInt {
    return this.value2;
  }

  getVerifyTime(): BigInt {
    return this.value3;
  }
}

export class CitizenIDVerification extends ethereum.SmartContract {
  static bind(address: Address): CitizenIDVerification {
    return new CitizenIDVerification("CitizenIDVerification", address);
  }

  ADMIN_ROLE(): Bytes {
    let result = super.call("ADMIN_ROLE", "ADMIN_ROLE():(bytes32)", []);

    return result[0].toBytes();
  }

  try_ADMIN_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("ADMIN_ROLE", "ADMIN_ROLE():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  BURNER_ROLE(): Bytes {
    let result = super.call("BURNER_ROLE", "BURNER_ROLE():(bytes32)", []);

    return result[0].toBytes();
  }

  try_BURNER_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("BURNER_ROLE", "BURNER_ROLE():(bytes32)", []);
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

  MINTER_ROLE(): Bytes {
    let result = super.call("MINTER_ROLE", "MINTER_ROLE():(bytes32)", []);

    return result[0].toBytes();
  }

  try_MINTER_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("MINTER_ROLE", "MINTER_ROLE():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  _baseTokenURI(): string {
    let result = super.call("_baseTokenURI", "_baseTokenURI():(string)", []);

    return result[0].toString();
  }

  try__baseTokenURI(): ethereum.CallResult<string> {
    let result = super.tryCall("_baseTokenURI", "_baseTokenURI():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  app(): Bytes {
    let result = super.call("app", "app():(bytes32)", []);

    return result[0].toBytes();
  }

  try_app(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("app", "app():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  balanceOf(owner: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(owner: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  brightIDAddrs(param0: Address): BigInt {
    let result = super.call(
      "brightIDAddrs",
      "brightIDAddrs(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBigInt();
  }

  try_brightIDAddrs(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "brightIDAddrs",
      "brightIDAddrs(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  citizenIDTransferWhitelist(param0: Address): boolean {
    let result = super.call(
      "citizenIDTransferWhitelist",
      "citizenIDTransferWhitelist(address):(bool)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBoolean();
  }

  try_citizenIDTransferWhitelist(
    param0: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "citizenIDTransferWhitelist",
      "citizenIDTransferWhitelist(address):(bool)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  getApproved(tokenId: BigInt): Address {
    let result = super.call("getApproved", "getApproved(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_getApproved(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getApproved",
      "getApproved(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(tokenId)]
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

  isApprovedForAll(owner: Address, operator: Address): boolean {
    let result = super.call(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );

    return result[0].toBoolean();
  }

  try_isApprovedForAll(
    owner: Address,
    operator: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(owner), ethereum.Value.fromAddress(operator)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  ownerOf(tokenId: BigInt): Address {
    let result = super.call("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toAddress();
  }

  try_ownerOf(tokenId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  params(param0: BigInt): CitizenIDVerification__paramsResult {
    let result = super.call(
      "params",
      "params(uint256):(uint256,bool,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new CitizenIDVerification__paramsResult(
      result[0].toBigInt(),
      result[1].toBoolean(),
      result[2].toBigInt()
    );
  }

  try_params(
    param0: BigInt
  ): ethereum.CallResult<CitizenIDVerification__paramsResult> {
    let result = super.tryCall(
      "params",
      "params(uint256):(uint256,bool,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new CitizenIDVerification__paramsResult(
        value[0].toBigInt(),
        value[1].toBoolean(),
        value[2].toBigInt()
      )
    );
  }

  signer(): Address {
    let result = super.call("signer", "signer():(address)", []);

    return result[0].toAddress();
  }

  try_signer(): ethereum.CallResult<Address> {
    let result = super.tryCall("signer", "signer():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
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

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  tokenByIndex(index: BigInt): BigInt {
    let result = super.call("tokenByIndex", "tokenByIndex(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(index)
    ]);

    return result[0].toBigInt();
  }

  try_tokenByIndex(index: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "tokenByIndex",
      "tokenByIndex(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(index)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  tokenOfOwnerByIndex(owner: Address, index: BigInt): BigInt {
    let result = super.call(
      "tokenOfOwnerByIndex",
      "tokenOfOwnerByIndex(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(owner),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );

    return result[0].toBigInt();
  }

  try_tokenOfOwnerByIndex(
    owner: Address,
    index: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "tokenOfOwnerByIndex",
      "tokenOfOwnerByIndex(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(owner),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  tokenURI(tokenId: BigInt): string {
    let result = super.call("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toString();
  }

  try_tokenURI(tokenId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  tokensOfOwner(_owner: Address): Array<BigInt> {
    let result = super.call(
      "tokensOfOwner",
      "tokensOfOwner(address):(uint256[])",
      [ethereum.Value.fromAddress(_owner)]
    );

    return result[0].toBigIntArray();
  }

  try_tokensOfOwner(_owner: Address): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "tokensOfOwner",
      "tokensOfOwner(address):(uint256[])",
      [ethereum.Value.fromAddress(_owner)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", "totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalSupply", "totalSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  setBrightId(
    _nftId: BigInt,
    addrs: Array<Address>,
    timestamp: BigInt,
    v: i32,
    r: Bytes,
    s: Bytes
  ): boolean {
    let result = super.call(
      "setBrightId",
      "setBrightId(uint256,address[],uint256,uint8,bytes32,bytes32):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(_nftId),
        ethereum.Value.fromAddressArray(addrs),
        ethereum.Value.fromUnsignedBigInt(timestamp),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(v)),
        ethereum.Value.fromFixedBytes(r),
        ethereum.Value.fromFixedBytes(s)
      ]
    );

    return result[0].toBoolean();
  }

  try_setBrightId(
    _nftId: BigInt,
    addrs: Array<Address>,
    timestamp: BigInt,
    v: i32,
    r: Bytes,
    s: Bytes
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "setBrightId",
      "setBrightId(uint256,address[],uint256,uint8,bytes32,bytes32):(bool)",
      [
        ethereum.Value.fromUnsignedBigInt(_nftId),
        ethereum.Value.fromAddressArray(addrs),
        ethereum.Value.fromUnsignedBigInt(timestamp),
        ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(v)),
        ethereum.Value.fromFixedBytes(r),
        ethereum.Value.fromFixedBytes(s)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  getCitizenID(_user: Address): BigInt {
    let result = super.call("getCitizenID", "getCitizenID(address):(uint256)", [
      ethereum.Value.fromAddress(_user)
    ]);

    return result[0].toBigInt();
  }

  try_getCitizenID(_user: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getCitizenID",
      "getCitizenID(address):(uint256)",
      [ethereum.Value.fromAddress(_user)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getCitizenInfoByID(
    id: BigInt
  ): CitizenIDVerification__getCitizenInfoByIDResult {
    let result = super.call(
      "getCitizenInfoByID",
      "getCitizenInfoByID(uint256):(uint256,bool,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(id)]
    );

    return new CitizenIDVerification__getCitizenInfoByIDResult(
      result[0].toBigInt(),
      result[1].toBoolean(),
      result[2].toBigInt(),
      result[3].toBigInt()
    );
  }

  try_getCitizenInfoByID(
    id: BigInt
  ): ethereum.CallResult<CitizenIDVerification__getCitizenInfoByIDResult> {
    let result = super.tryCall(
      "getCitizenInfoByID",
      "getCitizenInfoByID(uint256):(uint256,bool,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(id)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new CitizenIDVerification__getCitizenInfoByIDResult(
        value[0].toBigInt(),
        value[1].toBoolean(),
        value[2].toBigInt(),
        value[3].toBigInt()
      )
    );
  }

  getCitizenInfo(_user: Address): CitizenIDVerification__getCitizenInfoResult {
    let result = super.call(
      "getCitizenInfo",
      "getCitizenInfo(address):(uint256,bool,uint256,uint256)",
      [ethereum.Value.fromAddress(_user)]
    );

    return new CitizenIDVerification__getCitizenInfoResult(
      result[0].toBigInt(),
      result[1].toBoolean(),
      result[2].toBigInt(),
      result[3].toBigInt()
    );
  }

  try_getCitizenInfo(
    _user: Address
  ): ethereum.CallResult<CitizenIDVerification__getCitizenInfoResult> {
    let result = super.tryCall(
      "getCitizenInfo",
      "getCitizenInfo(address):(uint256,bool,uint256,uint256)",
      [ethereum.Value.fromAddress(_user)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new CitizenIDVerification__getCitizenInfoResult(
        value[0].toBigInt(),
        value[1].toBoolean(),
        value[2].toBigInt(),
        value[3].toBigInt()
      )
    );
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

  get _signer(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _app(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }
}

export class BurnCall extends ethereum.Call {
  get inputs(): BurnCall__Inputs {
    return new BurnCall__Inputs(this);
  }

  get outputs(): BurnCall__Outputs {
    return new BurnCall__Outputs(this);
  }
}

export class BurnCall__Inputs {
  _call: BurnCall;

  constructor(call: BurnCall) {
    this._call = call;
  }

  get tokenId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class BurnCall__Outputs {
  _call: BurnCall;

  constructor(call: BurnCall) {
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

export class MintCall extends ethereum.Call {
  get inputs(): MintCall__Inputs {
    return new MintCall__Inputs(this);
  }

  get outputs(): MintCall__Outputs {
    return new MintCall__Outputs(this);
  }
}

export class MintCall__Inputs {
  _call: MintCall;

  constructor(call: MintCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get id(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class MintCall__Outputs {
  _call: MintCall;

  constructor(call: MintCall) {
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

export class SafeTransferFromCall extends ethereum.Call {
  get inputs(): SafeTransferFromCall__Inputs {
    return new SafeTransferFromCall__Inputs(this);
  }

  get outputs(): SafeTransferFromCall__Outputs {
    return new SafeTransferFromCall__Outputs(this);
  }
}

export class SafeTransferFromCall__Inputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SafeTransferFromCall__Outputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }
}

export class SafeTransferFrom1Call extends ethereum.Call {
  get inputs(): SafeTransferFrom1Call__Inputs {
    return new SafeTransferFrom1Call__Inputs(this);
  }

  get outputs(): SafeTransferFrom1Call__Outputs {
    return new SafeTransferFrom1Call__Outputs(this);
  }
}

export class SafeTransferFrom1Call__Inputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class SafeTransferFrom1Call__Outputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }
}

export class SetApprovalForAllCall extends ethereum.Call {
  get inputs(): SetApprovalForAllCall__Inputs {
    return new SetApprovalForAllCall__Inputs(this);
  }

  get outputs(): SetApprovalForAllCall__Outputs {
    return new SetApprovalForAllCall__Outputs(this);
  }
}

export class SetApprovalForAllCall__Inputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }

  get operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get approved(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetApprovalForAllCall__Outputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }
}

export class SetBrightIdCall extends ethereum.Call {
  get inputs(): SetBrightIdCall__Inputs {
    return new SetBrightIdCall__Inputs(this);
  }

  get outputs(): SetBrightIdCall__Outputs {
    return new SetBrightIdCall__Outputs(this);
  }
}

export class SetBrightIdCall__Inputs {
  _call: SetBrightIdCall;

  constructor(call: SetBrightIdCall) {
    this._call = call;
  }

  get _nftId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get addrs(): Array<Address> {
    return this._call.inputValues[1].value.toAddressArray();
  }

  get timestamp(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get v(): i32 {
    return this._call.inputValues[3].value.toI32();
  }

  get r(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }

  get s(): Bytes {
    return this._call.inputValues[5].value.toBytes();
  }
}

export class SetBrightIdCall__Outputs {
  _call: SetBrightIdCall;

  constructor(call: SetBrightIdCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class SetCitizenIDTransferWhitelistCall extends ethereum.Call {
  get inputs(): SetCitizenIDTransferWhitelistCall__Inputs {
    return new SetCitizenIDTransferWhitelistCall__Inputs(this);
  }

  get outputs(): SetCitizenIDTransferWhitelistCall__Outputs {
    return new SetCitizenIDTransferWhitelistCall__Outputs(this);
  }
}

export class SetCitizenIDTransferWhitelistCall__Inputs {
  _call: SetCitizenIDTransferWhitelistCall;

  constructor(call: SetCitizenIDTransferWhitelistCall) {
    this._call = call;
  }

  get _user(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _inWhitelist(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetCitizenIDTransferWhitelistCall__Outputs {
  _call: SetCitizenIDTransferWhitelistCall;

  constructor(call: SetCitizenIDTransferWhitelistCall) {
    this._call = call;
  }
}

export class SetAppNameCall extends ethereum.Call {
  get inputs(): SetAppNameCall__Inputs {
    return new SetAppNameCall__Inputs(this);
  }

  get outputs(): SetAppNameCall__Outputs {
    return new SetAppNameCall__Outputs(this);
  }
}

export class SetAppNameCall__Inputs {
  _call: SetAppNameCall;

  constructor(call: SetAppNameCall) {
    this._call = call;
  }

  get appName(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class SetAppNameCall__Outputs {
  _call: SetAppNameCall;

  constructor(call: SetAppNameCall) {
    this._call = call;
  }
}

export class SetSignerCall extends ethereum.Call {
  get inputs(): SetSignerCall__Inputs {
    return new SetSignerCall__Inputs(this);
  }

  get outputs(): SetSignerCall__Outputs {
    return new SetSignerCall__Outputs(this);
  }
}

export class SetSignerCall__Inputs {
  _call: SetSignerCall;

  constructor(call: SetSignerCall) {
    this._call = call;
  }

  get _signer(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetSignerCall__Outputs {
  _call: SetSignerCall;

  constructor(call: SetSignerCall) {
    this._call = call;
  }
}