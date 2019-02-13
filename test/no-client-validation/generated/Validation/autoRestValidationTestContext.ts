/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "./models";

const packageName = "";
const packageVersion = "";

export class AutoRestValidationTestContext extends msRest.ServiceClient {
  subscriptionId: string;
  apiVersion: string;

  /**
   * Initializes a new instance of the AutoRestValidationTestContext class.
   * @param subscriptionId Subscription ID.
   * @param apiVersion Required string following pattern \d{2}-\d{2}-\d{4}
   * @param [options] The parameter options
   */
  constructor(subscriptionId: string, apiVersion: string, options?: Models.AutoRestValidationTestOptions) {
    if (subscriptionId === null || subscriptionId === undefined) {
      throw new Error('\'subscriptionId\' cannot be null.');
    }
    if (apiVersion === null || apiVersion === undefined) {
      throw new Error('\'apiVersion\' cannot be null.');
    }

    if (!options) {
      options = {};
    }

    if (!options.userAgent) {
      const defaultUserAgent = msRest.getDefaultUserAgentValue();
      options.userAgent = `${packageName}/${packageVersion} ${defaultUserAgent}`;
    }

    super(undefined, options);

    this.baseUri = options.baseUri || this.baseUri || "http://localhost:3000";
    this.requestContentType = "application/json; charset=utf-8";
    this.subscriptionId = subscriptionId;
    this.apiVersion = apiVersion;
  }
}
