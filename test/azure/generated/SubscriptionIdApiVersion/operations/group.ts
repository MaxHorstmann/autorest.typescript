/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/mappers";
import { MicrosoftAzureTestUrl } from "../microsoftAzureTestUrl";

const WebResource = msRest.WebResource;

/** Class representing a Group. */
export class Group {
  private readonly client: MicrosoftAzureTestUrl;
  /**
   * Create a Group.
   * @param {MicrosoftAzureTestUrl} client Reference to the service client.
   */
  constructor(client: MicrosoftAzureTestUrl) {
    this.client = client;
  }

  /**
   * Provides a resouce group with name 'testgroup101' and location 'West US'.
   *
   * @param {string} resourceGroupName Resource Group name 'testgroup101'.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  async getSampleResourceGroupWithHttpOperationResponse(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse<Models.SampleResourceGroup>> {
    let client = this.client;
    // Validate
    try {
      if (this.client.subscriptionId === null || this.client.subscriptionId === undefined || typeof this.client.subscriptionId.valueOf() !== 'string') {
        throw new Error('this.client.subscriptionId cannot be null or undefined and it must be of type string.');
      }
      if (resourceGroupName === null || resourceGroupName === undefined || typeof resourceGroupName.valueOf() !== 'string') {
        throw new Error('resourceGroupName cannot be null or undefined and it must be of type string.');
      }
      if (this.client.apiVersion === null || this.client.apiVersion === undefined || typeof this.client.apiVersion.valueOf() !== 'string') {
        throw new Error('this.client.apiVersion cannot be null or undefined and it must be of type string.');
      }
      if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
        throw new Error('this.client.acceptLanguage must be of type string.');
      }
    } catch (error) {
      return Promise.reject(error);
    }

    // Create HTTP transport objects
    const httpRequest = new WebResource();
    let operationRes: msRest.HttpOperationResponse;
    try {
      operationRes = await client.sendOperationRequest(
        httpRequest,
        {
          arguments: {
            "this.client.subscriptionId": this.client.subscriptionId,
            resourceGroupName,
            "this.client.apiVersion": this.client.apiVersion,
            "this.client.acceptLanguage": this.client.acceptLanguage
          },
          abortSignal: options && options.abortSignal,
          customHeaders: options && options.customHeaders
        },
        {
          httpMethod: "GET",
          baseUrl: this.client.baseUri,
          path: "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}",
          urlParameters: [
            {
              parameterName: "this.client.subscriptionId",
              urlParameterName: "subscriptionId",
              type: msRest.OperationParameterType.String
            },
            {
              parameterName: "resourceGroupName",
              type: msRest.OperationParameterType.String
            }
          ],
          queryParameters: [
            {
              parameterName: "this.client.apiVersion",
              queryParameterName: "api-version",
              type: msRest.OperationParameterType.String
            }
          ],
          headerParameters: [
            {
              parameterName: "this.client.acceptLanguage",
              headerName: "accept-language",
              type: msRest.OperationParameterType.String
            }
          ]
        });
      let statusCode = operationRes.status;
      if (statusCode !== 200) {
        let error = new msRest.RestError(operationRes.bodyAsText as string);
        error.statusCode = operationRes.status;
        error.request = msRest.stripRequest(httpRequest);
        error.response = msRest.stripResponse(operationRes);
        let parsedErrorResponse = operationRes.parsedBody as { [key: string]: any };
        try {
          if (parsedErrorResponse) {
            let internalError = null;
            if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
            error.code = internalError ? internalError.code : parsedErrorResponse.code;
            error.message = internalError ? internalError.message : parsedErrorResponse.message;
          }
          if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
            let resultMapper = Mappers.ErrorModel;
            error.body = client.serializer.deserialize(resultMapper, parsedErrorResponse, 'error.body');
          }
        } catch (defaultError) {
          error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                           `- "${operationRes.bodyAsText}" for the default response.`;
          return Promise.reject(error);
        }
        return Promise.reject(error);
      }
      // Deserialize Response
      if (statusCode === 200) {
        let parsedResponse = operationRes.parsedBody as { [key: string]: any };
        try {
          if (parsedResponse !== null && parsedResponse !== undefined) {
            let resultMapper = Mappers.SampleResourceGroup;
            operationRes.parsedBody = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.parsedBody');
          }
        } catch (error) {
          let deserializationError = new msRest.RestError(`Error ${error} occurred in deserializing the responseBody - ${operationRes.bodyAsText}`);
          deserializationError.request = msRest.stripRequest(httpRequest);
          deserializationError.response = msRest.stripResponse(operationRes);
          return Promise.reject(deserializationError);
        }
      }

    } catch(err) {
      return Promise.reject(err);
    }

    return Promise.resolve(operationRes);
  }

  /**
   * Provides a resouce group with name 'testgroup101' and location 'West US'.
   *
   * @param {string} resourceGroupName Resource Group name 'testgroup101'.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback - The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, operationRes)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Models.SampleResourceGroup} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.SampleResourceGroup} for more
   *                      information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {HttpOperationResponse} [response] - The HTTP Response stream if an error did not occur.
   */
  getSampleResourceGroup(resourceGroupName: string): Promise<Models.SampleResourceGroup>;
  getSampleResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase): Promise<Models.SampleResourceGroup>;
  getSampleResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.SampleResourceGroup>): void;
  getSampleResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SampleResourceGroup>): void;
  getSampleResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.SampleResourceGroup>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<Models.SampleResourceGroup>;
    if (!callback) {
      return this.getSampleResourceGroupWithHttpOperationResponse(resourceGroupName, options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as Models.SampleResourceGroup);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.getSampleResourceGroupWithHttpOperationResponse(resourceGroupName, options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as Models.SampleResourceGroup;
        return cb(err, result, data.request, data);
      });
    }
  }

}
