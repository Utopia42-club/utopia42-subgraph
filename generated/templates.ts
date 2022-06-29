// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  Address,
  DataSourceTemplate,
  DataSourceContext
} from "@graphprotocol/graph-ts";

export class Utopia extends DataSourceTemplate {
  static create(address: Address): void {
    DataSourceTemplate.create("Utopia", [address.toHex()]);
  }

  static createWithContext(address: Address, context: DataSourceContext): void {
    DataSourceTemplate.createWithContext("Utopia", [address.toHex()], context);
  }
}

export class UtopiaNFT extends DataSourceTemplate {
  static create(address: Address): void {
    DataSourceTemplate.create("UtopiaNFT", [address.toHex()]);
  }

  static createWithContext(address: Address, context: DataSourceContext): void {
    DataSourceTemplate.createWithContext(
      "UtopiaNFT",
      [address.toHex()],
      context
    );
  }
}