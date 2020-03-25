/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { BodyDurationClient } from "../bodyDurationClient";
import {
  DurationGetNullResponse,
  DurationGetPositiveDurationResponse,
  DurationGetInvalidResponse
} from "../models";

/**
 * Class representing a Duration.
 */
export class Duration {
  private readonly client: BodyDurationClient;

  /**
   * Initialize a new instance of the class Duration class.
   * @param client Reference to the service client
   */
  constructor(client: BodyDurationClient) {
    this.client = client;
  }

  /**
   * Get null duration value
   * @param options The options parameters.
   */
  getNull(
    options?: coreHttp.OperationOptions
  ): Promise<DurationGetNullResponse> {
    return this.client.sendOperationRequest(
      { options },
      getNullOperationSpec
    ) as Promise<DurationGetNullResponse>;
  }

  /**
   * Put a positive duration value
   * @param durationBody
   * @param options The options parameters.
   */
  putPositiveDuration(
    durationBody: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    return this.client.sendOperationRequest(
      { durationBody, options },
      putPositiveDurationOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Get a positive duration value
   * @param options The options parameters.
   */
  getPositiveDuration(
    options?: coreHttp.OperationOptions
  ): Promise<DurationGetPositiveDurationResponse> {
    return this.client.sendOperationRequest(
      { options },
      getPositiveDurationOperationSpec
    ) as Promise<DurationGetPositiveDurationResponse>;
  }

  /**
   * Get an invalid duration value
   * @param options The options parameters.
   */
  getInvalid(
    options?: coreHttp.OperationOptions
  ): Promise<DurationGetInvalidResponse> {
    return this.client.sendOperationRequest(
      { options },
      getInvalidOperationSpec
    ) as Promise<DurationGetInvalidResponse>;
  }
}
// Operation Specifications

const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const getNullOperationSpec: coreHttp.OperationSpec = {
  path: "/duration/null",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "TimeSpan" }, serializedName: "Duration" }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  serializer
};
const putPositiveDurationOperationSpec: coreHttp.OperationSpec = {
  path: "/duration/positiveduration",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.durationBody,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType],
  serializer
};
const getPositiveDurationOperationSpec: coreHttp.OperationSpec = {
  path: "/duration/positiveduration",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "TimeSpan" }, serializedName: "Duration" }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  serializer
};
const getInvalidOperationSpec: coreHttp.OperationSpec = {
  path: "/duration/invalid",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: { type: { name: "TimeSpan" }, serializedName: "Duration" }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  serializer
};
