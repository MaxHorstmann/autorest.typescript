// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  ListWidgetsParameters,
  CreateWidgetParameters,
  ListWidgetsPagesParameters,
  QueryWidgetsPagesParameters,
  GetWidgetParameters,
  UpdateWidgetParameters,
  DeleteWidgetParameters,
  AnalyzeWidgetParameters,
} from "./parameters.js";
import {
  ListWidgets200Response,
  ListWidgetsDefaultResponse,
  CreateWidget201Response,
  CreateWidgetDefaultResponse,
  ListWidgetsPages200Response,
  ListWidgetsPagesDefaultResponse,
  QueryWidgetsPages200Response,
  QueryWidgetsPagesDefaultResponse,
  GetWidget200Response,
  GetWidgetDefaultResponse,
  UpdateWidget200Response,
  UpdateWidgetDefaultResponse,
  DeleteWidget204Response,
  DeleteWidgetDefaultResponse,
  AnalyzeWidget200Response,
  AnalyzeWidgetDefaultResponse,
} from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface ListWidgets {
  /**
   * List all widgets in the system. This operation is not paginated, and returns a simple array of widgets.
   *
   * It does not accept any options or parameters.
   */
  get(
    options: ListWidgetsParameters,
  ): StreamableMethod<ListWidgets200Response | ListWidgetsDefaultResponse>;
  /**
   * Create a new widget.
   *
   * The widget ID is not required during creation, as it is automatically set by the server. Providing an ID will
   * result in an error.
   */
  post(
    options?: CreateWidgetParameters,
  ): StreamableMethod<CreateWidget201Response | CreateWidgetDefaultResponse>;
}

export interface ListWidgetsPages {
  get(
    options: ListWidgetsPagesParameters,
  ): StreamableMethod<
    ListWidgetsPages200Response | ListWidgetsPagesDefaultResponse
  >;
  post(
    options: QueryWidgetsPagesParameters,
  ): StreamableMethod<
    QueryWidgetsPages200Response | QueryWidgetsPagesDefaultResponse
  >;
}

export interface GetWidget {
  /** Get a widget by ID. */
  get(
    options?: GetWidgetParameters,
  ): StreamableMethod<GetWidget200Response | GetWidgetDefaultResponse>;
  /**
   * Update the contents of the widget. The widget ID is required in the input, but cannot be changed. All other fields
   * are optional and will be updated within the widget if provided.
   */
  patch(
    options?: UpdateWidgetParameters,
  ): StreamableMethod<UpdateWidget200Response | UpdateWidgetDefaultResponse>;
  /** Delete a widget by ID. */
  delete(
    options?: DeleteWidgetParameters,
  ): StreamableMethod<DeleteWidget204Response | DeleteWidgetDefaultResponse>;
}

export interface AnalyzeWidget {
  /** Analyze a widget. The only guarantee is that this method will return a string containing the results of the analysis. */
  post(
    options?: AnalyzeWidgetParameters,
  ): StreamableMethod<AnalyzeWidget200Response | AnalyzeWidgetDefaultResponse>;
}

export interface Routes {
  /** Resource for '/widgets' has methods for the following verbs: get, post */
  (path: "/widgets"): ListWidgets;
  /** Resource for '/widgets/widgets/pages' has methods for the following verbs: get, post */
  (path: "/widgets/widgets/pages"): ListWidgetsPages;
  /** Resource for '/widgets/\{id\}' has methods for the following verbs: get, patch, delete */
  (path: "/widgets/{id}", id: string): GetWidget;
  /** Resource for '/widgets/\{id\}/analyze' has methods for the following verbs: post */
  (path: "/widgets/{id}/analyze", id: string): AnalyzeWidget;
}

export type WidgetServiceContext = Client & {
  path: Routes;
};
