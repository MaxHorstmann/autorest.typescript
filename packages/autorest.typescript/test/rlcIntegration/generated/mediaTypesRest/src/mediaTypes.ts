// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { logger } from "./logger";
import { MediaTypesClient } from "./clientDefinitions";

/**
 * Initialize a new instance of `MediaTypesClient`
 * @param options - the parameter for all optional parameters
 */
export default function createClient(
  options: ClientOptions = {},
): MediaTypesClient {
  const baseUrl = options.baseUrl ?? `http://localhost:3000`;
  const userAgentInfo = `azsdk-js-media-types-service-rest/1.0.0-preview1`;
  const userAgentPrefix =
    options.userAgentOptions && options.userAgentOptions.userAgentPrefix
      ? `${options.userAgentOptions.userAgentPrefix} ${userAgentInfo}`
      : `${userAgentInfo}`;
  options = {
    ...options,
    userAgentOptions: {
      userAgentPrefix,
    },
    loggingOptions: {
      logger: options.loggingOptions?.logger ?? logger.info,
    },
  };

  const client = getClient(baseUrl, options) as MediaTypesClient;

  client.pipeline.removePolicy({ name: "ApiVersionPolicy" });
  return client;
}
