/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";

export interface Product {
  integer?: number;
  string?: string;
}

/** Known values of {@link Enum0} that the service accepts. */
export const enum KnownEnum0 {
  One = "one",
  Two = "two"
}

/**
 * Defines values for Enum0. \
 * {@link KnownEnum0} can be used interchangeably with Enum0,
 *  this enum contains the known values that the service supports.
 * ### Know values supported by the service
 * **one** \
 * **two**
 */
export type Enum0 = string;

/** Optional parameters. */
export interface NoOperationsClientOptionalParams
  extends coreHttp.ServiceClientOptions {
  /** Overrides client endpoint. */
  endpoint?: string;
}
