import * as coreClient from "@azure/core-client";

export type FactoryRepoConfigurationUnion =
  | FactoryRepoConfiguration
  | FactoryVstsConfiguration
  | FactoryGitHubConfiguration;
export type IntegrationRuntimeUnion =
  | IntegrationRuntime
  | ManagedIntegrationRuntime
  | SelfHostedIntegrationRuntime;
export type IntegrationRuntimeStatusUnion =
  | IntegrationRuntimeStatus
  | ManagedIntegrationRuntimeStatus
  | SelfHostedIntegrationRuntimeStatus;
export type SsisObjectMetadataUnion =
  | SsisObjectMetadata
  | SsisFolder
  | SsisProject
  | SsisPackage
  | SsisEnvironment;
export type LinkedServiceUnion =
  | LinkedService
  | AzureStorageLinkedService
  | AzureBlobStorageLinkedService
  | AzureTableStorageLinkedService
  | AzureSqlDWLinkedService
  | SqlServerLinkedService
  | AmazonRdsForSqlServerLinkedService
  | AzureSqlDatabaseLinkedService
  | AzureSqlMILinkedService
  | AzureBatchLinkedService
  | AzureKeyVaultLinkedService
  | CosmosDbLinkedService
  | DynamicsLinkedService
  | DynamicsCrmLinkedService
  | CommonDataServiceForAppsLinkedService
  | HDInsightLinkedService
  | FileServerLinkedService
  | AzureFileStorageLinkedService
  | AmazonS3CompatibleLinkedService
  | OracleCloudStorageLinkedService
  | GoogleCloudStorageLinkedService
  | OracleLinkedService
  | AmazonRdsForOracleLinkedService
  | AzureMySqlLinkedService
  | MySqlLinkedService
  | PostgreSqlLinkedService
  | SybaseLinkedService
  | Db2LinkedService
  | TeradataLinkedService
  | AzureMLLinkedService
  | AzureMLServiceLinkedService
  | OdbcLinkedService
  | InformixLinkedService
  | MicrosoftAccessLinkedService
  | HdfsLinkedService
  | ODataLinkedService
  | WebLinkedService
  | CassandraLinkedService
  | MongoDbLinkedService
  | MongoDbAtlasLinkedService
  | MongoDbV2LinkedService
  | CosmosDbMongoDbApiLinkedService
  | AzureDataLakeStoreLinkedService
  | AzureBlobFSLinkedService
  | Office365LinkedService
  | SalesforceLinkedService
  | SalesforceServiceCloudLinkedService
  | SapCloudForCustomerLinkedService
  | SapEccLinkedService
  | SapOpenHubLinkedService
  | RestServiceLinkedService
  | AmazonS3LinkedService
  | AmazonRedshiftLinkedService
  | CustomDataSourceLinkedService
  | AzureSearchLinkedService
  | HttpLinkedService
  | FtpServerLinkedService
  | SftpServerLinkedService
  | SapBWLinkedService
  | SapHanaLinkedService
  | AmazonMWSLinkedService
  | AzurePostgreSqlLinkedService
  | ConcurLinkedService
  | CouchbaseLinkedService
  | DrillLinkedService
  | EloquaLinkedService
  | GoogleBigQueryLinkedService
  | GreenplumLinkedService
  | HBaseLinkedService
  | HiveLinkedService
  | HubspotLinkedService
  | ImpalaLinkedService
  | JiraLinkedService
  | MagentoLinkedService
  | MariaDBLinkedService
  | AzureMariaDBLinkedService
  | MarketoLinkedService
  | PaypalLinkedService
  | PhoenixLinkedService
  | PrestoLinkedService
  | QuickBooksLinkedService
  | ServiceNowLinkedService
  | ShopifyLinkedService
  | SparkLinkedService
  | SquareLinkedService
  | XeroLinkedService
  | ZohoLinkedService
  | VerticaLinkedService
  | NetezzaLinkedService
  | SalesforceMarketingCloudLinkedService
  | HDInsightOnDemandLinkedService
  | AzureDataLakeAnalyticsLinkedService
  | AzureDatabricksLinkedService
  | AzureDatabricksDeltaLakeLinkedService
  | ResponsysLinkedService
  | DynamicsAXLinkedService
  | OracleServiceCloudLinkedService
  | GoogleAdWordsLinkedService
  | SapTableLinkedService
  | AzureDataExplorerLinkedService
  | AzureFunctionLinkedService
  | SnowflakeLinkedService
  | SharePointOnlineListLinkedService;
export type DatasetUnion =
  | Dataset
  | AmazonS3Dataset
  | AvroDataset
  | ExcelDataset
  | ParquetDataset
  | DelimitedTextDataset
  | JsonDataset
  | XmlDataset
  | OrcDataset
  | BinaryDataset
  | AzureBlobDataset
  | AzureTableDataset
  | AzureSqlTableDataset
  | AzureSqlMITableDataset
  | AzureSqlDWTableDataset
  | CassandraTableDataset
  | CustomDataset
  | CosmosDbSqlApiCollectionDataset
  | DocumentDbCollectionDataset
  | DynamicsEntityDataset
  | DynamicsCrmEntityDataset
  | CommonDataServiceForAppsEntityDataset
  | AzureDataLakeStoreDataset
  | AzureBlobFSDataset
  | Office365Dataset
  | FileShareDataset
  | MongoDbCollectionDataset
  | MongoDbAtlasCollectionDataset
  | MongoDbV2CollectionDataset
  | CosmosDbMongoDbApiCollectionDataset
  | ODataResourceDataset
  | OracleTableDataset
  | AmazonRdsForOracleTableDataset
  | TeradataTableDataset
  | AzureMySqlTableDataset
  | AmazonRedshiftTableDataset
  | Db2TableDataset
  | RelationalTableDataset
  | InformixTableDataset
  | OdbcTableDataset
  | MySqlTableDataset
  | PostgreSqlTableDataset
  | MicrosoftAccessTableDataset
  | SalesforceObjectDataset
  | SalesforceServiceCloudObjectDataset
  | SybaseTableDataset
  | SapBwCubeDataset
  | SapCloudForCustomerResourceDataset
  | SapEccResourceDataset
  | SapHanaTableDataset
  | SapOpenHubTableDataset
  | SqlServerTableDataset
  | AmazonRdsForSqlServerTableDataset
  | RestResourceDataset
  | SapTableResourceDataset
  | WebTableDataset
  | AzureSearchIndexDataset
  | HttpDataset
  | AmazonMWSObjectDataset
  | AzurePostgreSqlTableDataset
  | ConcurObjectDataset
  | CouchbaseTableDataset
  | DrillTableDataset
  | EloquaObjectDataset
  | GoogleBigQueryObjectDataset
  | GreenplumTableDataset
  | HBaseObjectDataset
  | HiveObjectDataset
  | HubspotObjectDataset
  | ImpalaObjectDataset
  | JiraObjectDataset
  | MagentoObjectDataset
  | MariaDBTableDataset
  | AzureMariaDBTableDataset
  | MarketoObjectDataset
  | PaypalObjectDataset
  | PhoenixObjectDataset
  | PrestoObjectDataset
  | QuickBooksObjectDataset
  | ServiceNowObjectDataset
  | ShopifyObjectDataset
  | SparkObjectDataset
  | SquareObjectDataset
  | XeroObjectDataset
  | ZohoObjectDataset
  | NetezzaTableDataset
  | VerticaTableDataset
  | SalesforceMarketingCloudObjectDataset
  | ResponsysObjectDataset
  | DynamicsAXResourceDataset
  | OracleServiceCloudObjectDataset
  | AzureDataExplorerTableDataset
  | GoogleAdWordsObjectDataset
  | SnowflakeDataset
  | SharePointOnlineListResourceDataset
  | AzureDatabricksDeltaLakeDataset;
export type ActivityUnion =
  | Activity
  | ControlActivityUnion
  | ExecutionActivityUnion
  | ExecuteWranglingDataflowActivity;
export type TriggerUnion =
  | Trigger
  | MultiplePipelineTriggerUnion
  | TumblingWindowTrigger
  | RerunTumblingWindowTrigger
  | ChainingTrigger;
export type DataFlowUnion =
  | DataFlow
  | MappingDataFlow
  | Flowlet
  | WranglingDataFlow;
export type SecretBaseUnion =
  | SecretBase
  | SecureString
  | AzureKeyVaultSecretReference;
export type CredentialUnion =
  | Credential
  | ServicePrincipalCredential
  | ManagedIdentityCredential;
export type DatasetLocationUnion =
  | DatasetLocation
  | AzureBlobStorageLocation
  | AzureBlobFSLocation
  | AzureDataLakeStoreLocation
  | AmazonS3Location
  | FileServerLocation
  | AzureFileStorageLocation
  | AmazonS3CompatibleLocation
  | OracleCloudStorageLocation
  | GoogleCloudStorageLocation
  | FtpServerLocation
  | SftpLocation
  | HttpServerLocation
  | HdfsLocation;
export type DatasetStorageFormatUnion =
  | DatasetStorageFormat
  | TextFormat
  | JsonFormat
  | AvroFormat
  | OrcFormat
  | ParquetFormat;
export type DatasetCompressionUnion =
  | DatasetCompression
  | DatasetBZip2Compression
  | DatasetGZipCompression
  | DatasetDeflateCompression
  | DatasetZipDeflateCompression
  | DatasetTarCompression
  | DatasetTarGZipCompression;
export type CustomSetupBaseUnion =
  | CustomSetupBase
  | CmdkeySetup
  | EnvironmentVariableSetup
  | ComponentSetup
  | AzPowerShellSetup;
export type LinkedIntegrationRuntimeTypeUnion =
  | LinkedIntegrationRuntimeType
  | LinkedIntegrationRuntimeKeyAuthorization
  | LinkedIntegrationRuntimeRbacAuthorization;
export type WebLinkedServiceTypePropertiesUnion =
  | WebLinkedServiceTypeProperties
  | WebAnonymousAuthentication
  | WebBasicAuthentication
  | WebClientCertificateAuthentication;
export type StoreReadSettingsUnion =
  | StoreReadSettings
  | AzureBlobStorageReadSettings
  | AzureBlobFSReadSettings
  | AzureDataLakeStoreReadSettings
  | AmazonS3ReadSettings
  | FileServerReadSettings
  | AzureFileStorageReadSettings
  | AmazonS3CompatibleReadSettings
  | OracleCloudStorageReadSettings
  | GoogleCloudStorageReadSettings
  | FtpReadSettings
  | SftpReadSettings
  | HttpReadSettings
  | HdfsReadSettings;
export type StoreWriteSettingsUnion =
  | StoreWriteSettings
  | SftpWriteSettings
  | AzureBlobStorageWriteSettings
  | AzureBlobFSWriteSettings
  | AzureDataLakeStoreWriteSettings
  | FileServerWriteSettings
  | AzureFileStorageWriteSettings;
export type FormatReadSettingsUnion =
  | FormatReadSettings
  | DelimitedTextReadSettings
  | JsonReadSettings
  | XmlReadSettings
  | BinaryReadSettings;
export type CompressionReadSettingsUnion =
  | CompressionReadSettings
  | ZipDeflateReadSettings
  | TarReadSettings
  | TarGZipReadSettings;
export type FormatWriteSettingsUnion =
  | FormatWriteSettings
  | AvroWriteSettings
  | OrcWriteSettings
  | ParquetWriteSettings
  | DelimitedTextWriteSettings
  | JsonWriteSettings;
export type CopySourceUnion =
  | CopySource
  | AvroSource
  | ExcelSource
  | ParquetSource
  | DelimitedTextSource
  | JsonSource
  | XmlSource
  | OrcSource
  | BinarySource
  | TabularSourceUnion
  | BlobSource
  | DocumentDbCollectionSource
  | CosmosDbSqlApiSource
  | DynamicsSource
  | DynamicsCrmSource
  | CommonDataServiceForAppsSource
  | RelationalSource
  | MicrosoftAccessSource
  | ODataSource
  | SalesforceServiceCloudSource
  | RestSource
  | FileSystemSource
  | HdfsSource
  | AzureDataExplorerSource
  | OracleSource
  | AmazonRdsForOracleSource
  | WebSource
  | MongoDbSource
  | MongoDbAtlasSource
  | MongoDbV2Source
  | CosmosDbMongoDbApiSource
  | Office365Source
  | AzureDataLakeStoreSource
  | AzureBlobFSSource
  | HttpSource
  | SnowflakeSource
  | AzureDatabricksDeltaLakeSource
  | SharePointOnlineListSource;
export type CopySinkUnion =
  | CopySink
  | DelimitedTextSink
  | JsonSink
  | OrcSink
  | RestSink
  | AzurePostgreSqlSink
  | AzureMySqlSink
  | AzureDatabricksDeltaLakeSink
  | SapCloudForCustomerSink
  | AzureQueueSink
  | AzureTableSink
  | AvroSink
  | ParquetSink
  | BinarySink
  | BlobSink
  | FileSystemSink
  | DocumentDbCollectionSink
  | CosmosDbSqlApiSink
  | SqlSink
  | SqlServerSink
  | AzureSqlSink
  | SqlMISink
  | SqlDWSink
  | SnowflakeSink
  | OracleSink
  | AzureDataLakeStoreSink
  | AzureBlobFSSink
  | AzureSearchIndexSink
  | OdbcSink
  | InformixSink
  | MicrosoftAccessSink
  | DynamicsSink
  | DynamicsCrmSink
  | CommonDataServiceForAppsSink
  | AzureDataExplorerSink
  | SalesforceSink
  | SalesforceServiceCloudSink
  | MongoDbAtlasSink
  | MongoDbV2Sink
  | CosmosDbMongoDbApiSink;
export type ExportSettingsUnion =
  | ExportSettings
  | SnowflakeExportCopyCommand
  | AzureDatabricksDeltaLakeExportCommand;
export type ImportSettingsUnion =
  | ImportSettings
  | AzureDatabricksDeltaLakeImportCommand
  | SnowflakeImportCopyCommand;
export type CopyTranslatorUnion = CopyTranslator | TabularTranslator;
export type DependencyReferenceUnion =
  | DependencyReference
  | TriggerDependencyReferenceUnion
  | SelfDependencyTumblingWindowTriggerReference;
export type ControlActivityUnion =
  | ControlActivity
  | ExecutePipelineActivity
  | IfConditionActivity
  | SwitchActivity
  | ForEachActivity
  | WaitActivity
  | UntilActivity
  | ValidationActivity
  | FilterActivity
  | SetVariableActivity
  | AppendVariableActivity
  | WebHookActivity;
export type ExecutionActivityUnion =
  | ExecutionActivity
  | CopyActivity
  | HDInsightHiveActivity
  | HDInsightPigActivity
  | HDInsightMapReduceActivity
  | HDInsightStreamingActivity
  | HDInsightSparkActivity
  | ExecuteSsisPackageActivity
  | CustomActivity
  | SqlServerStoredProcedureActivity
  | DeleteActivity
  | AzureDataExplorerCommandActivity
  | LookupActivity
  | WebActivity
  | GetMetadataActivity
  | AzureMLBatchExecutionActivity
  | AzureMLUpdateResourceActivity
  | AzureMLExecutePipelineActivity
  | DataLakeAnalyticsUsqlActivity
  | DatabricksNotebookActivity
  | DatabricksSparkJarActivity
  | DatabricksSparkPythonActivity
  | AzureFunctionActivity
  | ExecuteDataFlowActivity;
export type MultiplePipelineTriggerUnion =
  | MultiplePipelineTrigger
  | ScheduleTrigger
  | BlobTrigger
  | BlobEventsTrigger
  | CustomEventsTrigger;
export type TabularSourceUnion =
  | TabularSource
  | AzureTableSource
  | InformixSource
  | Db2Source
  | OdbcSource
  | MySqlSource
  | PostgreSqlSource
  | SybaseSource
  | SapBwSource
  | SalesforceSource
  | SapCloudForCustomerSource
  | SapEccSource
  | SapHanaSource
  | SapOpenHubSource
  | SapTableSource
  | SqlSource
  | SqlServerSource
  | AmazonRdsForSqlServerSource
  | AzureSqlSource
  | SqlMISource
  | SqlDWSource
  | AzureMySqlSource
  | TeradataSource
  | CassandraSource
  | AmazonMWSSource
  | AzurePostgreSqlSource
  | ConcurSource
  | CouchbaseSource
  | DrillSource
  | EloquaSource
  | GoogleBigQuerySource
  | GreenplumSource
  | HBaseSource
  | HiveSource
  | HubspotSource
  | ImpalaSource
  | JiraSource
  | MagentoSource
  | MariaDBSource
  | AzureMariaDBSource
  | MarketoSource
  | PaypalSource
  | PhoenixSource
  | PrestoSource
  | QuickBooksSource
  | ServiceNowSource
  | ShopifySource
  | SparkSource
  | SquareSource
  | XeroSource
  | ZohoSource
  | NetezzaSource
  | VerticaSource
  | SalesforceMarketingCloudSource
  | ResponsysSource
  | DynamicsAXSource
  | OracleServiceCloudSource
  | GoogleAdWordsSource
  | AmazonRedshiftSource;
export type TriggerDependencyReferenceUnion =
  | TriggerDependencyReference
  | TumblingWindowTriggerDependencyReference;

/** A list of operations that can be performed by the Data Factory service. */
export interface OperationListResponse {
  /** List of Data Factory operations supported by the Data Factory resource provider. */
  value?: Operation[];
  /** The link to the next page of results, if any remaining results exist. */
  nextLink?: string;
}

/** Azure Data Factory API operation definition. */
export interface Operation {
  /** Operation name: {provider}/{resource}/{operation} */
  name?: string;
  /** The intended executor of the operation. */
  origin?: string;
  /** Metadata associated with the operation. */
  display?: OperationDisplay;
  /** Details about a service operation. */
  serviceSpecification?: OperationServiceSpecification;
}

/** Metadata associated with the operation. */
export interface OperationDisplay {
  /** The description of the operation. */
  description?: string;
  /** The name of the provider. */
  provider?: string;
  /** The name of the resource type on which the operation is performed. */
  resource?: string;
  /** The type of operation: get, read, delete, etc. */
  operation?: string;
}

/** Details about a service operation. */
export interface OperationServiceSpecification {
  /** Details about operations related to logs. */
  logSpecifications?: OperationLogSpecification[];
  /** Details about operations related to metrics. */
  metricSpecifications?: OperationMetricSpecification[];
}

/** Details about an operation related to logs. */
export interface OperationLogSpecification {
  /** The name of the log category. */
  name?: string;
  /** Localized display name. */
  displayName?: string;
  /** Blobs created in the customer storage account, per hour. */
  blobDuration?: string;
}

/** Details about an operation related to metrics. */
export interface OperationMetricSpecification {
  /** The name of the metric. */
  name?: string;
  /** Localized display name of the metric. */
  displayName?: string;
  /** The description of the metric. */
  displayDescription?: string;
  /** The unit that the metric is measured in. */
  unit?: string;
  /** The type of metric aggregation. */
  aggregationType?: string;
  /** Whether or not the service is using regional MDM accounts. */
  enableRegionalMdmAccount?: string;
  /** The name of the MDM account. */
  sourceMdmAccount?: string;
  /** The name of the MDM namespace. */
  sourceMdmNamespace?: string;
  /** Defines how often data for metrics becomes available. */
  availabilities?: OperationMetricAvailability[];
  /** Defines the metric dimension. */
  dimensions?: OperationMetricDimension[];
}

/** Defines how often data for a metric becomes available. */
export interface OperationMetricAvailability {
  /** The granularity for the metric. */
  timeGrain?: string;
  /** Blob created in the customer storage account, per hour. */
  blobDuration?: string;
}

/** Defines the metric dimension. */
export interface OperationMetricDimension {
  /** The name of the dimension for the metric. */
  name?: string;
  /** The display name of the metric dimension. */
  displayName?: string;
  /** Whether the dimension should be exported to Azure Monitor. */
  toBeExportedForShoebox?: boolean;
}

/** The object that defines the structure of an Azure Data Factory error response. */
export interface CloudError {
  /** Error code. */
  code: string;
  /** Error message. */
  message: string;
  /** Property name/path in request associated with error. */
  target?: string;
  /** Array with additional error details. */
  details?: CloudError[];
}

/** A list of factory resources. */
export interface FactoryListResponse {
  /** List of factories. */
  value: Factory[];
  /** The link to the next page of results, if any remaining results exist. */
  nextLink?: string;
}

/** Identity properties of the factory resource. */
export interface FactoryIdentity {
  /** The identity type. */
  type: FactoryIdentityType;
  /**
   * The principal id of the identity.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly principalId?: string;
  /**
   * The client tenant id of the identity.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly tenantId?: string;
  /** List of user assigned identities for the factory. */
  userAssignedIdentities?: { [propertyName: string]: Record<string, unknown> };
}

/** Factory's git repo information. */
export interface FactoryRepoConfiguration {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "FactoryVSTSConfiguration" | "FactoryGitHubConfiguration";
  /** Account name. */
  accountName: string;
  /** Repository name. */
  repositoryName: string;
  /** Collaboration branch. */
  collaborationBranch: string;
  /** Root folder. */
  rootFolder: string;
  /** Last commit id. */
  lastCommitId?: string;
}

/** Definition of a single parameter for an entity. */
export interface GlobalParameterSpecification {
  /** Global Parameter type. */
  type: GlobalParameterType;
  /** Value of parameter. */
  value: Record<string, unknown>;
}

/** Definition of CMK for the factory. */
export interface EncryptionConfiguration {
  /** The name of the key in Azure Key Vault to use as Customer Managed Key. */
  keyName: string;
  /** The url of the Azure Key Vault used for CMK. */
  vaultBaseUrl: string;
  /** The version of the key used for CMK. If not provided, latest version will be used. */
  keyVersion?: string;
  /** User assigned identity to use to authenticate to customer's key vault. If not provided Managed Service Identity will be used. */
  identity?: CMKIdentityDefinition;
}

/** Managed Identity used for CMK. */
export interface CMKIdentityDefinition {
  /** The resource id of the user assigned identity to authenticate to customer's key vault. */
  userAssignedIdentity?: string;
}

/** Azure Data Factory top-level resource. */
export interface Resource {
  /**
   * The resource identifier.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * The resource name.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * The resource type.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /** The resource location. */
  location?: string;
  /** The resource tags. */
  tags?: { [propertyName: string]: string };
  /**
   * Etag identifies change in the resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly eTag?: string;
}

/** Factory's git repo information. */
export interface FactoryRepoUpdate {
  /** The factory resource id. */
  factoryResourceId?: string;
  /** Git repo information of the factory. */
  repoConfiguration?: FactoryRepoConfigurationUnion;
}

/** The exposure control request. */
export interface ExposureControlRequest {
  /** The feature name. */
  featureName?: string;
  /** The feature type. */
  featureType?: string;
}

/** The exposure control response. */
export interface ExposureControlResponse {
  /**
   * The feature name.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly featureName?: string;
  /**
   * The feature value.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly value?: string;
}

/** A list of exposure control features. */
export interface ExposureControlBatchRequest {
  /** List of exposure control features. */
  exposureControlRequests: ExposureControlRequest[];
}

/** A list of exposure control feature values. */
export interface ExposureControlBatchResponse {
  /** List of exposure control feature values. */
  exposureControlResponses: ExposureControlResponse[];
}

/** Parameters for updating a factory resource. */
export interface FactoryUpdateParameters {
  /** The resource tags. */
  tags?: { [propertyName: string]: string };
  /** Managed service identity of the factory. */
  identity?: FactoryIdentity;
  /** Whether or not public network access is allowed for the data factory. */
  publicNetworkAccess?: PublicNetworkAccess;
}

/** Get GitHub access token request definition. */
export interface GitHubAccessTokenRequest {
  /** GitHub access code. */
  gitHubAccessCode: string;
  /** GitHub application client ID. */
  gitHubClientId?: string;
  /** GitHub bring your own app client secret information. */
  gitHubClientSecret?: GitHubClientSecret;
  /** GitHub access token base URL. */
  gitHubAccessTokenBaseUrl: string;
}

/** Client secret information for factory's bring your own app repository configuration. */
export interface GitHubClientSecret {
  /** Bring your own app client secret AKV URL. */
  byoaSecretAkvUrl?: string;
  /** Bring your own app client secret name in AKV. */
  byoaSecretName?: string;
}

/** Get GitHub access token response definition. */
export interface GitHubAccessTokenResponse {
  /** GitHub access token. */
  gitHubAccessToken?: string;
}

/** Get Data Plane read only token request definition. */
export interface UserAccessPolicy {
  /** The string with permissions for Data Plane access. Currently only 'r' is supported which grants read only access. */
  permissions?: string;
  /** The resource path to get access relative to factory. Currently only empty string is supported which corresponds to the factory resource. */
  accessResourcePath?: string;
  /** The name of the profile. Currently only the default is supported. The default value is DefaultProfile. */
  profileName?: string;
  /** Start time for the token. If not specified the current time will be used. */
  startTime?: string;
  /** Expiration time for the token. Maximum duration for the token is eight hours and by default the token will expire in eight hours. */
  expireTime?: string;
}

/** Get Data Plane read only token response definition. */
export interface AccessPolicyResponse {
  /** The user access policy. */
  policy?: UserAccessPolicy;
  /** Data Plane read only access token. */
  accessToken?: string;
  /** Data Plane service base URL. */
  dataPlaneUrl?: string;
}

/** A list of integration runtime resources. */
export interface IntegrationRuntimeListResponse {
  /** List of integration runtimes. */
  value: IntegrationRuntimeResource[];
  /** The link to the next page of results, if any remaining results exist. */
  nextLink?: string;
}

/** Azure Data Factory nested object which serves as a compute resource for activities. */
export interface IntegrationRuntime {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "Managed" | "SelfHosted";
  /** Describes unknown properties. The value of an unknown property can be of "any" type. */
  [property: string]: any;
  /** Integration runtime description. */
  description?: string;
}

/** Azure Data Factory nested resource, which belongs to a factory. */
export interface SubResource {
  /**
   * The resource identifier.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * The resource name.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * The resource type.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /**
   * Etag identifies change in the resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly etag?: string;
}

/** Update integration runtime request. */
export interface UpdateIntegrationRuntimeRequest {
  /** Enables or disables the auto-update feature of the self-hosted integration runtime. See https://go.microsoft.com/fwlink/?linkid=854189. */
  autoUpdate?: IntegrationRuntimeAutoUpdate;
  /** The time offset (in hours) in the day, e.g., PT03H is 3 hours. The integration runtime auto update will happen on that time. */
  updateDelayOffset?: string;
}

/** Integration runtime status response. */
export interface IntegrationRuntimeStatusResponse {
  /**
   * The integration runtime name.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /** Integration runtime properties. */
  properties: IntegrationRuntimeStatusUnion;
}

/** Integration runtime status. */
export interface IntegrationRuntimeStatus {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "Managed" | "SelfHosted";
  /** Describes unknown properties. The value of an unknown property can be of "any" type. */
  [property: string]: any;
  /**
   * The data factory name which the integration runtime belong to.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly dataFactoryName?: string;
  /**
   * The state of integration runtime.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly state?: IntegrationRuntimeState;
}

/** Azure-SSIS integration runtime outbound network dependency endpoints. */
export interface IntegrationRuntimeOutboundNetworkDependenciesEndpointsResponse {
  /** The list of outbound network dependency endpoints. */
  value?: IntegrationRuntimeOutboundNetworkDependenciesCategoryEndpoint[];
}

/** Azure-SSIS integration runtime outbound network dependency endpoints for one category. */
export interface IntegrationRuntimeOutboundNetworkDependenciesCategoryEndpoint {
  /** The category of outbound network dependency. */
  category?: string;
  /** The endpoints for outbound network dependency. */
  endpoints?: IntegrationRuntimeOutboundNetworkDependenciesEndpoint[];
}

/** The endpoint for Azure-SSIS integration runtime outbound network dependency. */
export interface IntegrationRuntimeOutboundNetworkDependenciesEndpoint {
  /** The domain name of endpoint. */
  domainName?: string;
  /** The details of endpoint. */
  endpointDetails?: IntegrationRuntimeOutboundNetworkDependenciesEndpointDetails[];
}

/** The details of Azure-SSIS integration runtime outbound network dependency endpoint. */
export interface IntegrationRuntimeOutboundNetworkDependenciesEndpointDetails {
  /** The port of endpoint. */
  port?: number;
}

/** Connection information for encrypting the on-premises data source credentials. */
export interface IntegrationRuntimeConnectionInfo {
  /** Describes unknown properties. The value of an unknown property can be of "any" type. */
  [property: string]: any;
  /**
   * The token generated in service. Callers use this token to authenticate to integration runtime.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly serviceToken?: string;
  /**
   * The integration runtime SSL certificate thumbprint. Click-Once application uses it to do server validation.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly identityCertThumbprint?: string;
  /**
   * The on-premises integration runtime host URL.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly hostServiceUri?: string;
  /**
   * The integration runtime version.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly version?: string;
  /**
   * The public key for encrypting a credential when transferring the credential to the integration runtime.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly publicKey?: string;
  /**
   * Whether the identity certificate is expired.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly isIdentityCertExprired?: boolean;
}

/** Parameters to regenerate the authentication key. */
export interface IntegrationRuntimeRegenerateKeyParameters {
  /** The name of the authentication key to regenerate. */
  keyName?: IntegrationRuntimeAuthKeyName;
}

/** The integration runtime authentication keys. */
export interface IntegrationRuntimeAuthKeys {
  /** The primary integration runtime authentication key. */
  authKey1?: string;
  /** The secondary integration runtime authentication key. */
  authKey2?: string;
}

/** Get monitoring data response. */
export interface IntegrationRuntimeMonitoringData {
  /** Integration runtime name. */
  name?: string;
  /** Integration runtime node monitoring data. */
  nodes?: IntegrationRuntimeNodeMonitoringData[];
}

/** Monitoring data for integration runtime node. */
export interface IntegrationRuntimeNodeMonitoringData {
  /** Describes unknown properties. The value of an unknown property can be of "any" type. */
  [property: string]: any;
  /**
   * Name of the integration runtime node.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nodeName?: string;
  /**
   * Available memory (MB) on the integration runtime node.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly availableMemoryInMB?: number;
  /**
   * CPU percentage on the integration runtime node.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly cpuUtilization?: number;
  /**
   * Maximum concurrent jobs on the integration runtime node.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly concurrentJobsLimit?: number;
  /**
   * The number of jobs currently running on the integration runtime node.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly concurrentJobsRunning?: number;
  /**
   * The maximum concurrent jobs in this integration runtime.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly maxConcurrentJobs?: number;
  /**
   * Sent bytes on the integration runtime node.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly sentBytes?: number;
  /**
   * Received bytes on the integration runtime node.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly receivedBytes?: number;
}

/** Data factory name for linked integration runtime request. */
export interface LinkedIntegrationRuntimeRequest {
  /** The data factory name for linked integration runtime. */
  linkedFactoryName: string;
}

/** The linked integration runtime information. */
export interface CreateLinkedIntegrationRuntimeRequest {
  /** The name of the linked integration runtime. */
  name?: string;
  /** The ID of the subscription that the linked integration runtime belongs to. */
  subscriptionId?: string;
  /** The name of the data factory that the linked integration runtime belongs to. */
  dataFactoryName?: string;
  /** The location of the data factory that the linked integration runtime belongs to. */
  dataFactoryLocation?: string;
}

/** The status of the operation. */
export interface SsisObjectMetadataStatusResponse {
  /** The status of the operation. */
  status?: string;
  /** The operation name. */
  name?: string;
  /** The operation properties. */
  properties?: string;
  /** The operation error message. */
  error?: string;
}

/** The request payload of get SSIS object metadata. */
export interface GetSsisObjectMetadataRequest {
  /** Metadata path. */
  metadataPath?: string;
}

/** A list of SSIS object metadata. */
export interface SsisObjectMetadataListResponse {
  /** List of SSIS object metadata. */
  value?: SsisObjectMetadataUnion[];
  /** The link to the next page of results, if any remaining results exist. */
  nextLink?: string;
}

/** SSIS object metadata. */
export interface SsisObjectMetadata {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "Folder" | "Project" | "Package" | "Environment";
  /** Metadata id. */
  id?: number;
  /** Metadata name. */
  name?: string;
  /** Metadata description. */
  description?: string;
}

/** Properties of Self-hosted integration runtime node. */
export interface SelfHostedIntegrationRuntimeNode {
  /** Describes unknown properties. The value of an unknown property can be of "any" type. */
  [property: string]: any;
  /**
   * Name of the integration runtime node.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nodeName?: string;
  /**
   * Machine name of the integration runtime node.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly machineName?: string;
  /**
   * URI for the host machine of the integration runtime.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly hostServiceUri?: string;
  /**
   * Status of the integration runtime node.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly status?: SelfHostedIntegrationRuntimeNodeStatus;
  /**
   * The integration runtime capabilities dictionary
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly capabilities?: { [propertyName: string]: string };
  /**
   * Status of the integration runtime node version.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly versionStatus?: string;
  /**
   * Version of the integration runtime node.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly version?: string;
  /**
   * The time at which the integration runtime node was registered in ISO8601 format.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly registerTime?: Date;
  /**
   * The most recent time at which the integration runtime was connected in ISO8601 format.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly lastConnectTime?: Date;
  /**
   * The time at which the integration runtime will expire in ISO8601 format.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly expiryTime?: Date;
  /**
   * The time the node last started up.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly lastStartTime?: Date;
  /**
   * The integration runtime node last stop time.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly lastStopTime?: Date;
  /**
   * The result of the last integration runtime node update.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly lastUpdateResult?: IntegrationRuntimeUpdateResult;
  /**
   * The last time for the integration runtime node update start.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly lastStartUpdateTime?: Date;
  /**
   * The last time for the integration runtime node update end.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly lastEndUpdateTime?: Date;
  /**
   * Indicates whether this node is the active dispatcher for integration runtime requests.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly isActiveDispatcher?: boolean;
  /**
   * Maximum concurrent jobs on the integration runtime node.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly concurrentJobsLimit?: number;
  /**
   * The maximum concurrent jobs in this integration runtime.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly maxConcurrentJobs?: number;
}

/** Update integration runtime node request. */
export interface UpdateIntegrationRuntimeNodeRequest {
  /** The number of concurrent jobs permitted to run on the integration runtime node. Values between 1 and maxConcurrentJobs(inclusive) are allowed. */
  concurrentJobsLimit?: number;
}

/** The IP address of self-hosted integration runtime node. */
export interface IntegrationRuntimeNodeIpAddress {
  /**
   * The IP address of self-hosted integration runtime node.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly ipAddress?: string;
}

/** A list of linked service resources. */
export interface LinkedServiceListResponse {
  /** List of linked services. */
  value: LinkedServiceResource[];
  /** The link to the next page of results, if any remaining results exist. */
  nextLink?: string;
}

/** The Azure Data Factory nested object which contains the information and credential which can be used to connect with related store or compute resource. */
export interface LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type:
    | "AzureStorage"
    | "AzureBlobStorage"
    | "AzureTableStorage"
    | "AzureSqlDW"
    | "SqlServer"
    | "AmazonRdsForSqlServer"
    | "AzureSqlDatabase"
    | "AzureSqlMI"
    | "AzureBatch"
    | "AzureKeyVault"
    | "CosmosDb"
    | "Dynamics"
    | "DynamicsCrm"
    | "CommonDataServiceForApps"
    | "HDInsight"
    | "FileServer"
    | "AzureFileStorage"
    | "AmazonS3Compatible"
    | "OracleCloudStorage"
    | "GoogleCloudStorage"
    | "Oracle"
    | "AmazonRdsForOracle"
    | "AzureMySql"
    | "MySql"
    | "PostgreSql"
    | "Sybase"
    | "Db2"
    | "Teradata"
    | "AzureML"
    | "AzureMLService"
    | "Odbc"
    | "Informix"
    | "MicrosoftAccess"
    | "Hdfs"
    | "OData"
    | "Web"
    | "Cassandra"
    | "MongoDb"
    | "MongoDbAtlas"
    | "MongoDbV2"
    | "CosmosDbMongoDbApi"
    | "AzureDataLakeStore"
    | "AzureBlobFS"
    | "Office365"
    | "Salesforce"
    | "SalesforceServiceCloud"
    | "SapCloudForCustomer"
    | "SapEcc"
    | "SapOpenHub"
    | "RestService"
    | "AmazonS3"
    | "AmazonRedshift"
    | "CustomDataSource"
    | "AzureSearch"
    | "HttpServer"
    | "FtpServer"
    | "Sftp"
    | "SapBW"
    | "SapHana"
    | "AmazonMWS"
    | "AzurePostgreSql"
    | "Concur"
    | "Couchbase"
    | "Drill"
    | "Eloqua"
    | "GoogleBigQuery"
    | "Greenplum"
    | "HBase"
    | "Hive"
    | "Hubspot"
    | "Impala"
    | "Jira"
    | "Magento"
    | "MariaDB"
    | "AzureMariaDB"
    | "Marketo"
    | "Paypal"
    | "Phoenix"
    | "Presto"
    | "QuickBooks"
    | "ServiceNow"
    | "Shopify"
    | "Spark"
    | "Square"
    | "Xero"
    | "Zoho"
    | "Vertica"
    | "Netezza"
    | "SalesforceMarketingCloud"
    | "HDInsightOnDemand"
    | "AzureDataLakeAnalytics"
    | "AzureDatabricks"
    | "AzureDatabricksDeltaLake"
    | "Responsys"
    | "DynamicsAX"
    | "OracleServiceCloud"
    | "GoogleAdWords"
    | "SapTable"
    | "AzureDataExplorer"
    | "AzureFunction"
    | "Snowflake"
    | "SharePointOnlineList";
  /** Describes unknown properties. The value of an unknown property can be of "any" type. */
  [property: string]: any;
  /** The integration runtime reference. */
  connectVia?: IntegrationRuntimeReference;
  /** Linked service description. */
  description?: string;
  /** Parameters for linked service. */
  parameters?: { [propertyName: string]: ParameterSpecification };
  /** List of tags that can be used for describing the linked service. */
  annotations?: Record<string, unknown>[];
}

/** Integration runtime reference type. */
export interface IntegrationRuntimeReference {
  /** Type of integration runtime. */
  type: "IntegrationRuntimeReference";
  /** Reference integration runtime name. */
  referenceName: string;
  /** Arguments for integration runtime. */
  parameters?: { [propertyName: string]: Record<string, unknown> };
}

/** Definition of a single parameter for an entity. */
export interface ParameterSpecification {
  /** Parameter type. */
  type: ParameterType;
  /** Default value of parameter. */
  defaultValue?: Record<string, unknown>;
}

/** A list of dataset resources. */
export interface DatasetListResponse {
  /** List of datasets. */
  value: DatasetResource[];
  /** The link to the next page of results, if any remaining results exist. */
  nextLink?: string;
}

/** The Azure Data Factory nested object which identifies data within different data stores, such as tables, files, folders, and documents. */
export interface Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type:
    | "AmazonS3Object"
    | "Avro"
    | "Excel"
    | "Parquet"
    | "DelimitedText"
    | "Json"
    | "Xml"
    | "Orc"
    | "Binary"
    | "AzureBlob"
    | "AzureTable"
    | "AzureSqlTable"
    | "AzureSqlMITable"
    | "AzureSqlDWTable"
    | "CassandraTable"
    | "CustomDataset"
    | "CosmosDbSqlApiCollection"
    | "DocumentDbCollection"
    | "DynamicsEntity"
    | "DynamicsCrmEntity"
    | "CommonDataServiceForAppsEntity"
    | "AzureDataLakeStoreFile"
    | "AzureBlobFSFile"
    | "Office365Table"
    | "FileShare"
    | "MongoDbCollection"
    | "MongoDbAtlasCollection"
    | "MongoDbV2Collection"
    | "CosmosDbMongoDbApiCollection"
    | "ODataResource"
    | "OracleTable"
    | "AmazonRdsForOracleTable"
    | "TeradataTable"
    | "AzureMySqlTable"
    | "AmazonRedshiftTable"
    | "Db2Table"
    | "RelationalTable"
    | "InformixTable"
    | "OdbcTable"
    | "MySqlTable"
    | "PostgreSqlTable"
    | "MicrosoftAccessTable"
    | "SalesforceObject"
    | "SalesforceServiceCloudObject"
    | "SybaseTable"
    | "SapBwCube"
    | "SapCloudForCustomerResource"
    | "SapEccResource"
    | "SapHanaTable"
    | "SapOpenHubTable"
    | "SqlServerTable"
    | "AmazonRdsForSqlServerTable"
    | "RestResource"
    | "SapTableResource"
    | "WebTable"
    | "AzureSearchIndex"
    | "HttpFile"
    | "AmazonMWSObject"
    | "AzurePostgreSqlTable"
    | "ConcurObject"
    | "CouchbaseTable"
    | "DrillTable"
    | "EloquaObject"
    | "GoogleBigQueryObject"
    | "GreenplumTable"
    | "HBaseObject"
    | "HiveObject"
    | "HubspotObject"
    | "ImpalaObject"
    | "JiraObject"
    | "MagentoObject"
    | "MariaDBTable"
    | "AzureMariaDBTable"
    | "MarketoObject"
    | "PaypalObject"
    | "PhoenixObject"
    | "PrestoObject"
    | "QuickBooksObject"
    | "ServiceNowObject"
    | "ShopifyObject"
    | "SparkObject"
    | "SquareObject"
    | "XeroObject"
    | "ZohoObject"
    | "NetezzaTable"
    | "VerticaTable"
    | "SalesforceMarketingCloudObject"
    | "ResponsysObject"
    | "DynamicsAXResource"
    | "OracleServiceCloudObject"
    | "AzureDataExplorerTable"
    | "GoogleAdWordsObject"
    | "SnowflakeTable"
    | "SharePointOnlineListResource"
    | "AzureDatabricksDeltaLakeDataset";
  /** Describes unknown properties. The value of an unknown property can be of "any" type. */
  [property: string]: any;
  /** Dataset description. */
  description?: string;
  /** Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement. */
  structure?: Record<string, unknown>;
  /** Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement. */
  schema?: Record<string, unknown>;
  /** Linked service reference. */
  linkedServiceName: LinkedServiceReference;
  /** Parameters for dataset. */
  parameters?: { [propertyName: string]: ParameterSpecification };
  /** List of tags that can be used for describing the Dataset. */
  annotations?: Record<string, unknown>[];
  /** The folder that this Dataset is in. If not specified, Dataset will appear at the root level. */
  folder?: DatasetFolder;
}

/** Linked service reference type. */
export interface LinkedServiceReference {
  /** Linked service reference type. */
  type: "LinkedServiceReference";
  /** Reference LinkedService name. */
  referenceName: string;
  /** Arguments for LinkedService. */
  parameters?: { [propertyName: string]: Record<string, unknown> };
}

/** The folder that this Dataset is in. If not specified, Dataset will appear at the root level. */
export interface DatasetFolder {
  /** The name of the folder that this Dataset is in. */
  name?: string;
}

/** A list of pipeline resources. */
export interface PipelineListResponse {
  /** List of pipelines. */
  value: PipelineResource[];
  /** The link to the next page of results, if any remaining results exist. */
  nextLink?: string;
}

/** A pipeline activity. */
export interface Activity {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type:
    | "Container"
    | "Execution"
    | "Copy"
    | "HDInsightHive"
    | "HDInsightPig"
    | "HDInsightMapReduce"
    | "HDInsightStreaming"
    | "HDInsightSpark"
    | "ExecuteSSISPackage"
    | "Custom"
    | "SqlServerStoredProcedure"
    | "ExecutePipeline"
    | "Delete"
    | "AzureDataExplorerCommand"
    | "Lookup"
    | "WebActivity"
    | "GetMetadata"
    | "IfCondition"
    | "Switch"
    | "ForEach"
    | "AzureMLBatchExecution"
    | "AzureMLUpdateResource"
    | "AzureMLExecutePipeline"
    | "DataLakeAnalyticsU-SQL"
    | "Wait"
    | "Until"
    | "Validation"
    | "Filter"
    | "DatabricksNotebook"
    | "DatabricksSparkJar"
    | "DatabricksSparkPython"
    | "SetVariable"
    | "AppendVariable"
    | "AzureFunctionActivity"
    | "WebHook"
    | "ExecuteDataFlow"
    | "ExecuteWranglingDataflow";
  /** Describes unknown properties. The value of an unknown property can be of "any" type. */
  [property: string]: any;
  /** Activity name. */
  name: string;
  /** Activity description. */
  description?: string;
  /** Activity depends on condition. */
  dependsOn?: ActivityDependency[];
  /** Activity user properties. */
  userProperties?: UserProperty[];
}

/** Activity dependency information. */
export interface ActivityDependency {
  /** Describes unknown properties. The value of an unknown property can be of "any" type. */
  [property: string]: any;
  /** Activity name. */
  activity: string;
  /** Match-Condition for the dependency. */
  dependencyConditions: DependencyCondition[];
}

/** User property. */
export interface UserProperty {
  /** User property name. */
  name: string;
  /** User property value. Type: string (or Expression with resultType string). */
  value: Record<string, unknown>;
}

/** Definition of a single variable for a Pipeline. */
export interface VariableSpecification {
  /** Variable type. */
  type: VariableType;
  /** Default value of variable. */
  defaultValue?: Record<string, unknown>;
}

/** The folder that this Pipeline is in. If not specified, Pipeline will appear at the root level. */
export interface PipelineFolder {
  /** The name of the folder that this Pipeline is in. */
  name?: string;
}

/** Pipeline Policy. */
export interface PipelinePolicy {
  /** Pipeline ElapsedTime Metric Policy. */
  elapsedTimeMetric?: PipelineElapsedTimeMetricPolicy;
}

/** Pipeline ElapsedTime Metric Policy. */
export interface PipelineElapsedTimeMetricPolicy {
  /** TimeSpan value, after which an Azure Monitoring Metric is fired. */
  duration?: Record<string, unknown>;
}

/** Response body with a run identifier. */
export interface CreateRunResponse {
  /** Identifier of a run. */
  runId: string;
}

/** Query parameters for listing runs. */
export interface RunFilterParameters {
  /** The continuation token for getting the next page of results. Null for first page. */
  continuationToken?: string;
  /** The time at or after which the run event was updated in 'ISO 8601' format. */
  lastUpdatedAfter: Date;
  /** The time at or before which the run event was updated in 'ISO 8601' format. */
  lastUpdatedBefore: Date;
  /** List of filters. */
  filters?: RunQueryFilter[];
  /** List of OrderBy option. */
  orderBy?: RunQueryOrderBy[];
}

/** Query filter option for listing runs. */
export interface RunQueryFilter {
  /** Parameter name to be used for filter. The allowed operands to query pipeline runs are PipelineName, RunStart, RunEnd and Status; to query activity runs are ActivityName, ActivityRunStart, ActivityRunEnd, ActivityType and Status, and to query trigger runs are TriggerName, TriggerRunTimestamp and Status. */
  operand: RunQueryFilterOperand;
  /** Operator to be used for filter. */
  operator: RunQueryFilterOperator;
  /** List of filter values. */
  values: string[];
}

/** An object to provide order by options for listing runs. */
export interface RunQueryOrderBy {
  /** Parameter name to be used for order by. The allowed parameters to order by for pipeline runs are PipelineName, RunStart, RunEnd and Status; for activity runs are ActivityName, ActivityRunStart, ActivityRunEnd and Status; for trigger runs are TriggerName, TriggerRunTimestamp and Status. */
  orderBy: RunQueryOrderByField;
  /** Sorting order of the parameter. */
  order: RunQueryOrder;
}

/** A list pipeline runs. */
export interface PipelineRunsQueryResponse {
  /** List of pipeline runs. */
  value: PipelineRun[];
  /** The continuation token for getting the next page of results, if any remaining results exist, null otherwise. */
  continuationToken?: string;
}

/** Information about a pipeline run. */
export interface PipelineRun {
  /** Describes unknown properties. The value of an unknown property can be of "any" type. */
  [property: string]: any;
  /**
   * Identifier of a run.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly runId?: string;
  /**
   * Identifier that correlates all the recovery runs of a pipeline run.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly runGroupId?: string;
  /**
   * Indicates if the recovered pipeline run is the latest in its group.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly isLatest?: boolean;
  /**
   * The pipeline name.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly pipelineName?: string;
  /**
   * The full or partial list of parameter name, value pair used in the pipeline run.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly parameters?: { [propertyName: string]: string };
  /**
   * Run dimensions emitted by Pipeline run.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly runDimensions?: { [propertyName: string]: string };
  /**
   * Entity that started the pipeline run.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly invokedBy?: PipelineRunInvokedBy;
  /**
   * The last updated timestamp for the pipeline run event in ISO8601 format.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly lastUpdated?: Date;
  /**
   * The start time of a pipeline run in ISO8601 format.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly runStart?: Date;
  /**
   * The end time of a pipeline run in ISO8601 format.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly runEnd?: Date;
  /**
   * The duration of a pipeline run.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly durationInMs?: number;
  /**
   * The status of a pipeline run.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly status?: string;
  /**
   * The message from a pipeline run.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly message?: string;
}

/** Provides entity name and id that started the pipeline run. */
export interface PipelineRunInvokedBy {
  /**
   * Name of the entity that started the pipeline run.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * The ID of the entity that started the run.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * The type of the entity that started the run.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly invokedByType?: string;
  /**
   * The name of the pipeline that triggered the run, if any.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly pipelineName?: string;
  /**
   * The run id of the pipeline that triggered the run, if any.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly pipelineRunId?: string;
}

/** A list activity runs. */
export interface ActivityRunsQueryResponse {
  /** List of activity runs. */
  value: ActivityRun[];
  /** The continuation token for getting the next page of results, if any remaining results exist, null otherwise. */
  continuationToken?: string;
}

/** Information about an activity run in a pipeline. */
export interface ActivityRun {
  /** Describes unknown properties. The value of an unknown property can be of "any" type. */
  [property: string]: any;
  /**
   * The name of the pipeline.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly pipelineName?: string;
  /**
   * The id of the pipeline run.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly pipelineRunId?: string;
  /**
   * The name of the activity.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly activityName?: string;
  /**
   * The type of the activity.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly activityType?: string;
  /**
   * The id of the activity run.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly activityRunId?: string;
  /**
   * The name of the compute linked service.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly linkedServiceName?: string;
  /**
   * The status of the activity run.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly status?: string;
  /**
   * The start time of the activity run in 'ISO 8601' format.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly activityRunStart?: Date;
  /**
   * The end time of the activity run in 'ISO 8601' format.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly activityRunEnd?: Date;
  /**
   * The duration of the activity run.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly durationInMs?: number;
  /**
   * The input for the activity.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly input?: Record<string, unknown>;
  /**
   * The output for the activity.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly output?: Record<string, unknown>;
  /**
   * The error if any from the activity run.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly error?: Record<string, unknown>;
}

/** A list of trigger resources. */
export interface TriggerListResponse {
  /** List of triggers. */
  value: TriggerResource[];
  /** The link to the next page of results, if any remaining results exist. */
  nextLink?: string;
}

/** Azure data factory nested object which contains information about creating pipeline run */
export interface Trigger {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type:
    | "MultiplePipelineTrigger"
    | "ScheduleTrigger"
    | "BlobTrigger"
    | "BlobEventsTrigger"
    | "CustomEventsTrigger"
    | "TumblingWindowTrigger"
    | "RerunTumblingWindowTrigger"
    | "ChainingTrigger";
  /** Describes unknown properties. The value of an unknown property can be of "any" type. */
  [property: string]: any;
  /** Trigger description. */
  description?: string;
  /**
   * Indicates if trigger is running or not. Updated when Start/Stop APIs are called on the Trigger.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly runtimeState?: TriggerRuntimeState;
  /** List of tags that can be used for describing the trigger. */
  annotations?: Record<string, unknown>[];
}

/** Query parameters for triggers. */
export interface TriggerFilterParameters {
  /** The continuation token for getting the next page of results. Null for first page. */
  continuationToken?: string;
  /** The name of the parent TumblingWindowTrigger to get the child rerun triggers */
  parentTriggerName?: string;
}

/** A query of triggers. */
export interface TriggerQueryResponse {
  /** List of triggers. */
  value: TriggerResource[];
  /** The continuation token for getting the next page of results, if any remaining results exist, null otherwise. */
  continuationToken?: string;
}

/** Defines the response of a trigger subscription operation. */
export interface TriggerSubscriptionOperationStatus {
  /**
   * Trigger name.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly triggerName?: string;
  /**
   * Event Subscription Status.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly status?: EventSubscriptionStatus;
}

/** A list of trigger runs. */
export interface TriggerRunsQueryResponse {
  /** List of trigger runs. */
  value: TriggerRun[];
  /** The continuation token for getting the next page of results, if any remaining results exist, null otherwise. */
  continuationToken?: string;
}

/** Trigger runs. */
export interface TriggerRun {
  /** Describes unknown properties. The value of an unknown property can be of "any" type. */
  [property: string]: any;
  /**
   * Trigger run id.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly triggerRunId?: string;
  /**
   * Trigger name.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly triggerName?: string;
  /**
   * Trigger type.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly triggerType?: string;
  /**
   * Trigger run start time.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly triggerRunTimestamp?: Date;
  /**
   * Trigger run status.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly status?: TriggerRunStatus;
  /**
   * Trigger error message.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly message?: string;
  /**
   * List of property name and value related to trigger run. Name, value pair depends on type of trigger.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly properties?: { [propertyName: string]: string };
  /**
   * List of pipeline name and run Id triggered by the trigger run.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly triggeredPipelines?: { [propertyName: string]: string };
  /**
   * Run dimension for which trigger was fired.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly runDimension?: { [propertyName: string]: string };
  /**
   * Status of the upstream pipelines.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly dependencyStatus?: {
    [propertyName: string]: Record<string, unknown>;
  };
}

/** Azure Data Factory nested object which contains a flow with data movements and transformations. */
export interface DataFlow {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "MappingDataFlow" | "Flowlet" | "WranglingDataFlow";
  /** The description of the data flow. */
  description?: string;
  /** List of tags that can be used for describing the data flow. */
  annotations?: Record<string, unknown>[];
  /** The folder that this data flow is in. If not specified, Data flow will appear at the root level. */
  folder?: DataFlowFolder;
}

/** The folder that this data flow is in. If not specified, Data flow will appear at the root level. */
export interface DataFlowFolder {
  /** The name of the folder that this data flow is in. */
  name?: string;
}

/** A list of data flow resources. */
export interface DataFlowListResponse {
  /** List of data flows. */
  value: DataFlowResource[];
  /** The link to the next page of results, if any remaining results exist. */
  nextLink?: string;
}

/** Request body structure for creating data flow debug session. */
export interface CreateDataFlowDebugSessionRequest {
  /** Compute type of the cluster. The value will be overwritten by the same setting in integration runtime if provided. */
  computeType?: string;
  /** Core count of the cluster. The value will be overwritten by the same setting in integration runtime if provided. */
  coreCount?: number;
  /** Time to live setting of the cluster in minutes. */
  timeToLive?: number;
  /** Set to use integration runtime setting for data flow debug session. */
  integrationRuntime?: IntegrationRuntimeDebugResource;
}

/** Azure Data Factory nested debug resource. */
export interface SubResourceDebugResource {
  /** The resource name. */
  name?: string;
}

/** Response body structure for creating data flow debug session. */
export interface CreateDataFlowDebugSessionResponse {
  /** The state of the debug session. */
  status?: string;
  /** The ID of data flow debug session. */
  sessionId?: string;
}

/** A list of active debug sessions. */
export interface QueryDataFlowDebugSessionsResponse {
  /** Array with all active debug sessions. */
  value?: DataFlowDebugSessionInfo[];
  /** The link to the next page of results, if any remaining results exist. */
  nextLink?: string;
}

/** Data flow debug session info. */
export interface DataFlowDebugSessionInfo {
  /** Describes unknown properties. The value of an unknown property can be of "any" type. */
  [property: string]: any;
  /** The name of the data flow. */
  dataFlowName?: string;
  /** Compute type of the cluster. */
  computeType?: string;
  /** Core count of the cluster. */
  coreCount?: number;
  /** Node count of the cluster. (deprecated property) */
  nodeCount?: number;
  /** Attached integration runtime name of data flow debug session. */
  integrationRuntimeName?: string;
  /** The ID of data flow debug session. */
  sessionId?: string;
  /** Start time of data flow debug session. */
  startTime?: string;
  /** Compute type of the cluster. */
  timeToLiveInMinutes?: number;
  /** Last activity time of data flow debug session. */
  lastActivityTime?: string;
}

/** Request body structure for starting data flow debug session. */
export interface DataFlowDebugPackage {
  /** Describes unknown properties. The value of an unknown property can be of "any" type. */
  [property: string]: any;
  /** The ID of data flow debug session. */
  sessionId?: string;
  /** Data flow instance. */
  dataFlow?: DataFlowDebugResource;
  /** List of Data flows */
  dataFlows?: DataFlowDebugResource[];
  /** List of datasets. */
  datasets?: DatasetDebugResource[];
  /** List of linked services. */
  linkedServices?: LinkedServiceDebugResource[];
  /** Staging info for debug session. */
  staging?: DataFlowStagingInfo;
  /** Data flow debug settings. */
  debugSettings?: DataFlowDebugPackageDebugSettings;
}

/** Staging info for execute data flow activity. */
export interface DataFlowStagingInfo {
  /** Staging linked service reference. */
  linkedService?: LinkedServiceReference;
  /** Folder path for staging blob. Type: string (or Expression with resultType string) */
  folderPath?: Record<string, unknown>;
}

/** Data flow debug settings. */
export interface DataFlowDebugPackageDebugSettings {
  /** Source setting for data flow debug. */
  sourceSettings?: DataFlowSourceSetting[];
  /** Data flow parameters. */
  parameters?: { [propertyName: string]: Record<string, unknown> };
  /** Parameters for dataset. */
  datasetParameters?: Record<string, unknown>;
}

/** Definition of data flow source setting for debug. */
export interface DataFlowSourceSetting {
  /** Describes unknown properties. The value of an unknown property can be of "any" type. */
  [property: string]: any;
  /** The data flow source name. */
  sourceName?: string;
  /** Defines the row limit of data flow source in debug. */
  rowLimit?: number;
}

/** Response body structure for starting data flow debug session. */
export interface AddDataFlowToDebugSessionResponse {
  /** The ID of data flow debug job version. */
  jobVersion?: string;
}

/** Request body structure for deleting data flow debug session. */
export interface DeleteDataFlowDebugSessionRequest {
  /** The ID of data flow debug session. */
  sessionId?: string;
}

/** Request body structure for data flow debug command. */
export interface DataFlowDebugCommandRequest {
  /** The ID of data flow debug session. */
  sessionId?: string;
  /** The command type. */
  command?: DataFlowDebugCommandType;
  /** The command payload object. */
  commandPayload?: DataFlowDebugCommandPayload;
}

/** Structure of command payload. */
export interface DataFlowDebugCommandPayload {
  /** The stream name which is used for preview. */
  streamName: string;
  /** Row limits for preview response. */
  rowLimits?: number;
  /** Array of column names. */
  columns?: string[];
  /** The expression which is used for preview. */
  expression?: string;
}

/** Response body structure of data flow result for data preview, statistics or expression preview. */
export interface DataFlowDebugCommandResponse {
  /** The run status of data preview, statistics or expression preview. */
  status?: string;
  /** The result data of data preview, statistics or expression preview. */
  data?: string;
}

/** A list of managed Virtual Network resources. */
export interface ManagedVirtualNetworkListResponse {
  /** List of managed Virtual Networks. */
  value: ManagedVirtualNetworkResource[];
  /** The link to the next page of results, if any remaining results exist. */
  nextLink?: string;
}

/** A managed Virtual Network associated with the Azure Data Factory */
export interface ManagedVirtualNetwork {
  /** Describes unknown properties. The value of an unknown property can be of "any" type. */
  [property: string]: any;
  /**
   * Managed Virtual Network ID.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly vNetId?: string;
  /**
   * Managed Virtual Network alias.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly alias?: string;
}

/** A list of managed private endpoint resources. */
export interface ManagedPrivateEndpointListResponse {
  /** List of managed private endpoints. */
  value: ManagedPrivateEndpointResource[];
  /** The link to the next page of results, if any remaining results exist. */
  nextLink?: string;
}

/** Properties of a managed private endpoint */
export interface ManagedPrivateEndpoint {
  /** Describes unknown properties. The value of an unknown property can be of "any" type. */
  [property: string]: any;
  /** The managed private endpoint connection state */
  connectionState?: ConnectionStateProperties;
  /** Fully qualified domain names */
  fqdns?: string[];
  /** The groupId to which the managed private endpoint is created */
  groupId?: string;
  /**
   * Denotes whether the managed private endpoint is reserved
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly isReserved?: boolean;
  /** The ARM resource ID of the resource to which the managed private endpoint is created */
  privateLinkResourceId?: string;
  /**
   * The managed private endpoint provisioning state
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: string;
}

/** The connection state of a managed private endpoint */
export interface ConnectionStateProperties {
  /**
   * The actions required on the managed private endpoint
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly actionsRequired?: string;
  /**
   * The managed private endpoint description
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly description?: string;
  /**
   * The approval status
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly status?: string;
}

/** A list of linked service resources. */
export interface PrivateEndpointConnectionListResponse {
  /** List of Private Endpoint Connections. */
  value: PrivateEndpointConnectionResource[];
  /** The link to the next page of results, if any remaining results exist. */
  nextLink?: string;
}

/** A remote private endpoint connection */
export interface RemotePrivateEndpointConnection {
  /** NOTE: This property will not be serialized. It can only be populated by the server. */
  readonly provisioningState?: string;
  /** PrivateEndpoint of a remote private endpoint connection */
  privateEndpoint?: ArmIdWrapper;
  /** The state of a private link connection */
  privateLinkServiceConnectionState?: PrivateLinkConnectionState;
}

/** A wrapper for an ARM resource id */
export interface ArmIdWrapper {
  /** NOTE: This property will not be serialized. It can only be populated by the server. */
  readonly id?: string;
}

/** The state of a private link connection */
export interface PrivateLinkConnectionState {
  /** Status of a private link connection */
  status?: string;
  /** Description of a private link connection */
  description?: string;
  /** ActionsRequired for a private link connection */
  actionsRequired?: string;
}

/** A request to approve or reject a private endpoint connection */
export interface PrivateLinkConnectionApprovalRequest {
  /** The state of a private link connection */
  privateLinkServiceConnectionState?: PrivateLinkConnectionState;
}

/** Wrapper for a collection of private link resources */
export interface PrivateLinkResourcesWrapper {
  value: PrivateLinkResource[];
}

/** Properties of a private link resource */
export interface PrivateLinkResourceProperties {
  /**
   * GroupId of a private link resource
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly groupId?: string;
  /**
   * RequiredMembers of a private link resource
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly requiredMembers?: string[];
  /**
   * RequiredZoneNames of a private link resource
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly requiredZoneNames?: string[];
}

/** Azure Data Factory expression definition. */
export interface Expression {
  /** Expression type. */
  type: "Expression";
  /** Expression value. */
  value: string;
}

/** The base definition of a secret type. */
export interface SecretBase {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "SecureString" | "AzureKeyVaultSecret";
}

/** A list of integration runtime status. */
export interface IntegrationRuntimeStatusListResponse {
  /** List of integration runtime status. */
  value: IntegrationRuntimeStatusResponse[];
  /** The link to the next page of results, if any remaining results exist. */
  nextLink?: string;
}

/** Pipeline reference type. */
export interface PipelineReference {
  /** Pipeline reference type. */
  type: "PipelineReference";
  /** Reference pipeline name. */
  referenceName: string;
  /** Reference name. */
  name?: string;
}

/** Pipeline that needs to be triggered with the given parameters. */
export interface TriggerPipelineReference {
  /** Pipeline reference. */
  pipelineReference?: PipelineReference;
  /** Pipeline parameters. */
  parameters?: { [propertyName: string]: Record<string, unknown> };
}

/** Dataset reference type. */
export interface DatasetReference {
  /** Dataset reference type. */
  type: "DatasetReference";
  /** Reference dataset name. */
  referenceName: string;
  /** Arguments for dataset. */
  parameters?: { [propertyName: string]: Record<string, unknown> };
}

/** Response body structure for get data factory operation status. */
export interface GetDataFactoryOperationStatusResponse {
  /** Describes unknown properties. The value of an unknown property can be of "any" type. */
  [property: string]: any;
  /** Status of the operation. */
  status?: string;
}

/** Data flow reference type. */
export interface DataFlowReference {
  /** Describes unknown properties. The value of an unknown property can be of "any" type. */
  [property: string]: any;
  /** Data flow reference type. */
  type: "DataFlowReference";
  /** Reference data flow name. */
  referenceName: string;
  /** Reference data flow parameters from dataset. */
  datasetParameters?: Record<string, unknown>;
}

/** Managed Virtual Network reference type. */
export interface ManagedVirtualNetworkReference {
  /** Managed Virtual Network reference type. */
  type: "ManagedVirtualNetworkReference";
  /** Reference ManagedVirtualNetwork name. */
  referenceName: string;
}

/** Credential reference type. */
export interface CredentialReference {
  /** Describes unknown properties. The value of an unknown property can be of "any" type. */
  [property: string]: any;
  /** Credential reference type. */
  type: "CredentialReference";
  /** Reference credential name. */
  referenceName: string;
}

/** The Azure Data Factory nested object which contains the information and credential which can be used to connect with related store or compute resource. */
export interface Credential {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "ServicePrincipal" | "ManagedIdentity";
  /** Describes unknown properties. The value of an unknown property can be of "any" type. */
  [property: string]: any;
  /** Credential description. */
  description?: string;
  /** List of tags that can be used for describing the Credential. */
  annotations?: Record<string, unknown>[];
}

/** A data flow transformation. */
export interface Transformation {
  /** Transformation name. */
  name: string;
  /** Transformation description. */
  description?: string;
  /** Flowlet Reference */
  flowlet?: DataFlowReference;
}

/** Dataset location. */
export interface DatasetLocation {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type:
    | "AzureBlobStorageLocation"
    | "AzureBlobFSLocation"
    | "AzureDataLakeStoreLocation"
    | "AmazonS3Location"
    | "FileServerLocation"
    | "AzureFileStorageLocation"
    | "AmazonS3CompatibleLocation"
    | "OracleCloudStorageLocation"
    | "GoogleCloudStorageLocation"
    | "FtpServerLocation"
    | "SftpLocation"
    | "HttpServerLocation"
    | "HdfsLocation";
  /** Describes unknown properties. The value of an unknown property can be of "any" type. */
  [property: string]: any;
  /** Specify the folder path of dataset. Type: string (or Expression with resultType string) */
  folderPath?: Record<string, unknown>;
  /** Specify the file name of dataset. Type: string (or Expression with resultType string). */
  fileName?: Record<string, unknown>;
}

/** Columns that define the structure of the dataset. */
export interface DatasetDataElement {
  /** Name of the column. Type: string (or Expression with resultType string). */
  name?: Record<string, unknown>;
  /** Type of the column. Type: string (or Expression with resultType string). */
  type?: Record<string, unknown>;
}

/** Columns that define the physical type schema of the dataset. */
export interface DatasetSchemaDataElement {
  /** Describes unknown properties. The value of an unknown property can be of "any" type. */
  [property: string]: any;
  /** Name of the schema column. Type: string (or Expression with resultType string). */
  name?: Record<string, unknown>;
  /** Type of the schema column. Type: string (or Expression with resultType string). */
  type?: Record<string, unknown>;
}

/** The format definition of a storage. */
export interface DatasetStorageFormat {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type:
    | "TextFormat"
    | "JsonFormat"
    | "AvroFormat"
    | "OrcFormat"
    | "ParquetFormat";
  /** Describes unknown properties. The value of an unknown property can be of "any" type. */
  [property: string]: any;
  /** Serializer. Type: string (or Expression with resultType string). */
  serializer?: Record<string, unknown>;
  /** Deserializer. Type: string (or Expression with resultType string). */
  deserializer?: Record<string, unknown>;
}

/** The compression method used on a dataset. */
export interface DatasetCompression {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "BZip2" | "GZip" | "Deflate" | "ZipDeflate" | "Tar" | "TarGZip";
  /** Describes unknown properties. The value of an unknown property can be of "any" type. */
  [property: string]: any;
}

/** The compute resource properties for managed integration runtime. */
export interface IntegrationRuntimeComputeProperties {
  /** Describes unknown properties. The value of an unknown property can be of "any" type. */
  [property: string]: any;
  /** The location for managed integration runtime. The supported regions could be found on https://docs.microsoft.com/en-us/azure/data-factory/data-factory-data-movement-activities */
  location?: string;
  /** The node size requirement to managed integration runtime. */
  nodeSize?: string;
  /** The required number of nodes for managed integration runtime. */
  numberOfNodes?: number;
  /** Maximum parallel executions count per node for managed integration runtime. */
  maxParallelExecutionsPerNode?: number;
  /** Data flow properties for managed integration runtime. */
  dataFlowProperties?: IntegrationRuntimeDataFlowProperties;
  /** VNet properties for managed integration runtime. */
  vNetProperties?: IntegrationRuntimeVNetProperties;
}

/** Data flow properties for managed integration runtime. */
export interface IntegrationRuntimeDataFlowProperties {
  /** Describes unknown properties. The value of an unknown property can be of "any" type. */
  [property: string]: any;
  /** Compute type of the cluster which will execute data flow job. */
  computeType?: DataFlowComputeType;
  /** Core count of the cluster which will execute data flow job. Supported values are: 8, 16, 32, 48, 80, 144 and 272. */
  coreCount?: number;
  /** Time to live (in minutes) setting of the cluster which will execute data flow job. */
  timeToLive?: number;
  /** Cluster will not be recycled and it will be used in next data flow activity run until TTL (time to live) is reached if this is set as false. Default is true. */
  cleanup?: boolean;
}

/** VNet properties for managed integration runtime. */
export interface IntegrationRuntimeVNetProperties {
  /** Describes unknown properties. The value of an unknown property can be of "any" type. */
  [property: string]: any;
  /** The ID of the VNet that this integration runtime will join. */
  vNetId?: string;
  /** The name of the subnet this integration runtime will join. */
  subnet?: string;
  /** Resource IDs of the public IP addresses that this integration runtime will use. */
  publicIPs?: string[];
  /** The ID of subnet, to which this Azure-SSIS integration runtime will be joined. */
  subnetId?: string;
}

/** SSIS properties for managed integration runtime. */
export interface IntegrationRuntimeSsisProperties {
  /** Describes unknown properties. The value of an unknown property can be of "any" type. */
  [property: string]: any;
  /** Catalog information for managed dedicated integration runtime. */
  catalogInfo?: IntegrationRuntimeSsisCatalogInfo;
  /** License type for bringing your own license scenario. */
  licenseType?: IntegrationRuntimeLicenseType;
  /** Custom setup script properties for a managed dedicated integration runtime. */
  customSetupScriptProperties?: IntegrationRuntimeCustomSetupScriptProperties;
  /** Data proxy properties for a managed dedicated integration runtime. */
  dataProxyProperties?: IntegrationRuntimeDataProxyProperties;
  /** The edition for the SSIS Integration Runtime */
  edition?: IntegrationRuntimeEdition;
  /** Custom setup without script properties for a SSIS integration runtime. */
  expressCustomSetupProperties?: CustomSetupBaseUnion[];
  /** Package stores for the SSIS Integration Runtime. */
  packageStores?: PackageStore[];
  /** The credential reference containing authentication information. */
  credential?: CredentialReference;
}

/** Catalog information for managed dedicated integration runtime. */
export interface IntegrationRuntimeSsisCatalogInfo {
  /** Describes unknown properties. The value of an unknown property can be of "any" type. */
  [property: string]: any;
  /** The catalog database server URL. */
  catalogServerEndpoint?: string;
  /** The administrator user name of catalog database. */
  catalogAdminUserName?: string;
  /** The password of the administrator user account of the catalog database. */
  catalogAdminPassword?: SecureString;
  /** The pricing tier for the catalog database. The valid values could be found in https://azure.microsoft.com/en-us/pricing/details/sql-database/ */
  catalogPricingTier?: IntegrationRuntimeSsisCatalogPricingTier;
  /** The dual standby pair name of Azure-SSIS Integration Runtimes to support SSISDB failover. */
  dualStandbyPairName?: string;
}

/** Custom setup script properties for a managed dedicated integration runtime. */
export interface IntegrationRuntimeCustomSetupScriptProperties {
  /** The URI of the Azure blob container that contains the custom setup script. */
  blobContainerUri?: string;
  /** The SAS token of the Azure blob container. */
  sasToken?: SecureString;
}

/** Data proxy properties for a managed dedicated integration runtime. */
export interface IntegrationRuntimeDataProxyProperties {
  /** The self-hosted integration runtime reference. */
  connectVia?: EntityReference;
  /** The staging linked service reference. */
  stagingLinkedService?: EntityReference;
  /** The path to contain the staged data in the Blob storage. */
  path?: string;
}

/** The entity reference. */
export interface EntityReference {
  /** The type of this referenced entity. */
  type?: IntegrationRuntimeEntityReferenceType;
  /** The name of this referenced entity. */
  referenceName?: string;
}

/** The base definition of the custom setup. */
export interface CustomSetupBase {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type:
    | "CmdkeySetup"
    | "EnvironmentVariableSetup"
    | "ComponentSetup"
    | "AzPowerShellSetup";
}

/** Package store for the SSIS integration runtime. */
export interface PackageStore {
  /** The name of the package store */
  name: string;
  /** The package store linked service reference. */
  packageStoreLinkedService: EntityReference;
}

/** The definition and properties of virtual network to which Azure-SSIS integration runtime will join. */
export interface IntegrationRuntimeCustomerVirtualNetwork {
  /** The ID of subnet to which Azure-SSIS integration runtime will join. */
  subnetId?: string;
}

/** The base definition of a linked integration runtime. */
export interface LinkedIntegrationRuntimeType {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  authorizationType: "Key" | "RBAC";
}

/** Properties of integration runtime node. */
export interface ManagedIntegrationRuntimeNode {
  /** Describes unknown properties. The value of an unknown property can be of "any" type. */
  [property: string]: any;
  /**
   * The managed integration runtime node id.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nodeId?: string;
  /**
   * The managed integration runtime node status.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly status?: ManagedIntegrationRuntimeNodeStatus;
  /** The errors that occurred on this integration runtime node. */
  errors?: ManagedIntegrationRuntimeError[];
}

/** Error definition for managed integration runtime. */
export interface ManagedIntegrationRuntimeError {
  /** Describes unknown properties. The value of an unknown property can be of "any" type. */
  [property: string]: any;
  /**
   * The time when the error occurred.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly time?: Date;
  /**
   * Error code.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly code?: string;
  /**
   * Managed integration runtime error parameters.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly parameters?: string[];
  /**
   * Error message.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly message?: string;
}

/** Properties of managed integration runtime operation result. */
export interface ManagedIntegrationRuntimeOperationResult {
  /** Describes unknown properties. The value of an unknown property can be of "any" type. */
  [property: string]: any;
  /**
   * The operation type. Could be start or stop.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /**
   * The start time of the operation.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly startTime?: Date;
  /**
   * The operation result.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly result?: string;
  /**
   * The error code.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly errorCode?: string;
  /**
   * Managed integration runtime error parameters.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly parameters?: string[];
  /**
   * The activity id for the operation request.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly activityId?: string;
}

/** The linked integration runtime information. */
export interface LinkedIntegrationRuntime {
  /**
   * The name of the linked integration runtime.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * The subscription ID for which the linked integration runtime belong to.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly subscriptionId?: string;
  /**
   * The name of the data factory for which the linked integration runtime belong to.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly dataFactoryName?: string;
  /**
   * The location of the data factory for which the linked integration runtime belong to.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly dataFactoryLocation?: string;
  /**
   * The creating time of the linked integration runtime.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly createTime?: Date;
}

/** Ssis environment reference. */
export interface SsisEnvironmentReference {
  /** Environment reference id. */
  id?: number;
  /** Environment folder name. */
  environmentFolderName?: string;
  /** Environment name. */
  environmentName?: string;
  /** Reference type */
  referenceType?: string;
}

/** Ssis parameter. */
export interface SsisParameter {
  /** Parameter id. */
  id?: number;
  /** Parameter name. */
  name?: string;
  /** Parameter description. */
  description?: string;
  /** Parameter type. */
  dataType?: string;
  /** Whether parameter is required. */
  required?: boolean;
  /** Whether parameter is sensitive. */
  sensitive?: boolean;
  /** Design default value of parameter. */
  designDefaultValue?: string;
  /** Default value of parameter. */
  defaultValue?: string;
  /** Default sensitive value of parameter. */
  sensitiveDefaultValue?: string;
  /** Parameter value type. */
  valueType?: string;
  /** Parameter value set. */
  valueSet?: boolean;
  /** Parameter reference variable. */
  variable?: string;
}

/** Ssis variable. */
export interface SsisVariable {
  /** Variable id. */
  id?: number;
  /** Variable name. */
  name?: string;
  /** Variable description. */
  description?: string;
  /** Variable type. */
  dataType?: string;
  /** Whether variable is sensitive. */
  sensitive?: boolean;
  /** Variable value. */
  value?: string;
  /** Variable sensitive value. */
  sensitiveValue?: string;
}

/** Sql always encrypted properties. */
export interface SqlAlwaysEncryptedProperties {
  /** Sql always encrypted AKV authentication type. Type: string (or Expression with resultType string). */
  alwaysEncryptedAkvAuthType: SqlAlwaysEncryptedAkvAuthType;
  /** The client ID of the application in Azure Active Directory used for Azure Key Vault authentication. Type: string (or Expression with resultType string). */
  servicePrincipalId?: Record<string, unknown>;
  /** The key of the service principal used to authenticate against Azure Key Vault. */
  servicePrincipalKey?: SecretBaseUnion;
  /** The credential reference containing authentication information. */
  credential?: CredentialReference;
}

/** Base definition of WebLinkedServiceTypeProperties, this typeProperties is polymorphic based on authenticationType, so not flattened in SDK models. */
export interface WebLinkedServiceTypeProperties {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  authenticationType: "Anonymous" | "Basic" | "ClientCertificate";
  /** The URL of the web service endpoint, e.g. http://www.microsoft.com . Type: string (or Expression with resultType string). */
  url: Record<string, unknown>;
}

/** Custom script action to run on HDI ondemand cluster once it's up. */
export interface ScriptAction {
  /** The user provided name of the script action. */
  name: string;
  /** The URI for the script action. */
  uri: string;
  /** The node types on which the script action should be executed. */
  roles: Record<string, unknown>;
  /** The parameters for the script action. */
  parameters?: string;
}

/** Execution policy for an activity. */
export interface ActivityPolicy {
  /** Describes unknown properties. The value of an unknown property can be of "any" type. */
  [property: string]: any;
  /** Specifies the timeout for the activity to run. The default timeout is 7 days. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
  timeout?: Record<string, unknown>;
  /** Maximum ordinary retry attempts. Default is 0. Type: integer (or Expression with resultType integer), minimum: 0. */
  retry?: Record<string, unknown>;
  /** Interval between each retry attempt (in seconds). The default is 30 sec. */
  retryIntervalInSeconds?: number;
  /** When set to true, Input from activity is considered as secure and will not be logged to monitoring. */
  secureInput?: boolean;
  /** When set to true, Output from activity is considered as secure and will not be logged to monitoring. */
  secureOutput?: boolean;
}

/** Connector read setting. */
export interface StoreReadSettings {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type:
    | "AzureBlobStorageReadSettings"
    | "AzureBlobFSReadSettings"
    | "AzureDataLakeStoreReadSettings"
    | "AmazonS3ReadSettings"
    | "FileServerReadSettings"
    | "AzureFileStorageReadSettings"
    | "AmazonS3CompatibleReadSettings"
    | "OracleCloudStorageReadSettings"
    | "GoogleCloudStorageReadSettings"
    | "FtpReadSettings"
    | "SftpReadSettings"
    | "HttpReadSettings"
    | "HdfsReadSettings";
  /** Describes unknown properties. The value of an unknown property can be of "any" type. */
  [property: string]: any;
  /** The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer). */
  maxConcurrentConnections?: Record<string, unknown>;
  /** If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean). */
  disableMetricsCollection?: Record<string, unknown>;
}

/** Connector write settings. */
export interface StoreWriteSettings {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type:
    | "SftpWriteSettings"
    | "AzureBlobStorageWriteSettings"
    | "AzureBlobFSWriteSettings"
    | "AzureDataLakeStoreWriteSettings"
    | "FileServerWriteSettings"
    | "AzureFileStorageWriteSettings";
  /** Describes unknown properties. The value of an unknown property can be of "any" type. */
  [property: string]: any;
  /** The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer). */
  maxConcurrentConnections?: Record<string, unknown>;
  /** If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean). */
  disableMetricsCollection?: Record<string, unknown>;
  /** The type of copy behavior for copy sink. */
  copyBehavior?: Record<string, unknown>;
}

/** Distcp settings. */
export interface DistcpSettings {
  /** Specifies the Yarn ResourceManager endpoint. Type: string (or Expression with resultType string). */
  resourceManagerEndpoint: Record<string, unknown>;
  /** Specifies an existing folder path which will be used to store temp Distcp command script. The script file is generated by ADF and will be removed after Copy job finished. Type: string (or Expression with resultType string). */
  tempScriptPath: Record<string, unknown>;
  /** Specifies the Distcp options. Type: string (or Expression with resultType string). */
  distcpOptions?: Record<string, unknown>;
}

/** Format read settings. */
export interface FormatReadSettings {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type:
    | "DelimitedTextReadSettings"
    | "JsonReadSettings"
    | "XmlReadSettings"
    | "BinaryReadSettings";
  /** Describes unknown properties. The value of an unknown property can be of "any" type. */
  [property: string]: any;
}

/** Compression read settings. */
export interface CompressionReadSettings {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "ZipDeflateReadSettings" | "TarReadSettings" | "TarGZipReadSettings";
  /** Describes unknown properties. The value of an unknown property can be of "any" type. */
  [property: string]: any;
}

/** Format write settings. */
export interface FormatWriteSettings {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type:
    | "AvroWriteSettings"
    | "OrcWriteSettings"
    | "ParquetWriteSettings"
    | "DelimitedTextWriteSettings"
    | "JsonWriteSettings";
  /** Describes unknown properties. The value of an unknown property can be of "any" type. */
  [property: string]: any;
}

/** A copy activity source. */
export interface CopySource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type:
    | "AvroSource"
    | "ExcelSource"
    | "ParquetSource"
    | "DelimitedTextSource"
    | "JsonSource"
    | "XmlSource"
    | "OrcSource"
    | "BinarySource"
    | "TabularSource"
    | "AzureTableSource"
    | "BlobSource"
    | "DocumentDbCollectionSource"
    | "CosmosDbSqlApiSource"
    | "DynamicsSource"
    | "DynamicsCrmSource"
    | "CommonDataServiceForAppsSource"
    | "RelationalSource"
    | "InformixSource"
    | "MicrosoftAccessSource"
    | "Db2Source"
    | "OdbcSource"
    | "MySqlSource"
    | "PostgreSqlSource"
    | "SybaseSource"
    | "SapBwSource"
    | "ODataSource"
    | "SalesforceSource"
    | "SalesforceServiceCloudSource"
    | "SapCloudForCustomerSource"
    | "SapEccSource"
    | "SapHanaSource"
    | "SapOpenHubSource"
    | "SapTableSource"
    | "RestSource"
    | "SqlSource"
    | "SqlServerSource"
    | "AmazonRdsForSqlServerSource"
    | "AzureSqlSource"
    | "SqlMISource"
    | "SqlDWSource"
    | "FileSystemSource"
    | "HdfsSource"
    | "AzureMySqlSource"
    | "AzureDataExplorerSource"
    | "OracleSource"
    | "AmazonRdsForOracleSource"
    | "TeradataSource"
    | "WebSource"
    | "CassandraSource"
    | "MongoDbSource"
    | "MongoDbAtlasSource"
    | "MongoDbV2Source"
    | "CosmosDbMongoDbApiSource"
    | "Office365Source"
    | "AzureDataLakeStoreSource"
    | "AzureBlobFSSource"
    | "HttpSource"
    | "AmazonMWSSource"
    | "AzurePostgreSqlSource"
    | "ConcurSource"
    | "CouchbaseSource"
    | "DrillSource"
    | "EloquaSource"
    | "GoogleBigQuerySource"
    | "GreenplumSource"
    | "HBaseSource"
    | "HiveSource"
    | "HubspotSource"
    | "ImpalaSource"
    | "JiraSource"
    | "MagentoSource"
    | "MariaDBSource"
    | "AzureMariaDBSource"
    | "MarketoSource"
    | "PaypalSource"
    | "PhoenixSource"
    | "PrestoSource"
    | "QuickBooksSource"
    | "ServiceNowSource"
    | "ShopifySource"
    | "SparkSource"
    | "SquareSource"
    | "XeroSource"
    | "ZohoSource"
    | "NetezzaSource"
    | "VerticaSource"
    | "SalesforceMarketingCloudSource"
    | "ResponsysSource"
    | "DynamicsAXSource"
    | "OracleServiceCloudSource"
    | "GoogleAdWordsSource"
    | "AmazonRedshiftSource"
    | "SnowflakeSource"
    | "AzureDatabricksDeltaLakeSource"
    | "SharePointOnlineListSource";
  /** Describes unknown properties. The value of an unknown property can be of "any" type. */
  [property: string]: any;
  /** Source retry count. Type: integer (or Expression with resultType integer). */
  sourceRetryCount?: Record<string, unknown>;
  /** Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
  sourceRetryWait?: Record<string, unknown>;
  /** The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer). */
  maxConcurrentConnections?: Record<string, unknown>;
  /** If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean). */
  disableMetricsCollection?: Record<string, unknown>;
}

/** A copy activity sink. */
export interface CopySink {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type:
    | "DelimitedTextSink"
    | "JsonSink"
    | "OrcSink"
    | "RestSink"
    | "AzurePostgreSqlSink"
    | "AzureMySqlSink"
    | "AzureDatabricksDeltaLakeSink"
    | "SapCloudForCustomerSink"
    | "AzureQueueSink"
    | "AzureTableSink"
    | "AvroSink"
    | "ParquetSink"
    | "BinarySink"
    | "BlobSink"
    | "FileSystemSink"
    | "DocumentDbCollectionSink"
    | "CosmosDbSqlApiSink"
    | "SqlSink"
    | "SqlServerSink"
    | "AzureSqlSink"
    | "SqlMISink"
    | "SqlDWSink"
    | "SnowflakeSink"
    | "OracleSink"
    | "AzureDataLakeStoreSink"
    | "AzureBlobFSSink"
    | "AzureSearchIndexSink"
    | "OdbcSink"
    | "InformixSink"
    | "MicrosoftAccessSink"
    | "DynamicsSink"
    | "DynamicsCrmSink"
    | "CommonDataServiceForAppsSink"
    | "AzureDataExplorerSink"
    | "SalesforceSink"
    | "SalesforceServiceCloudSink"
    | "MongoDbAtlasSink"
    | "MongoDbV2Sink"
    | "CosmosDbMongoDbApiSink";
  /** Describes unknown properties. The value of an unknown property can be of "any" type. */
  [property: string]: any;
  /** Write batch size. Type: integer (or Expression with resultType integer), minimum: 0. */
  writeBatchSize?: Record<string, unknown>;
  /** Write batch timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
  writeBatchTimeout?: Record<string, unknown>;
  /** Sink retry count. Type: integer (or Expression with resultType integer). */
  sinkRetryCount?: Record<string, unknown>;
  /** Sink retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
  sinkRetryWait?: Record<string, unknown>;
  /** The maximum concurrent connection count for the sink data store. Type: integer (or Expression with resultType integer). */
  maxConcurrentConnections?: Record<string, unknown>;
  /** If true, disable data store metrics collection. Default is false. Type: boolean (or Expression with resultType boolean). */
  disableMetricsCollection?: Record<string, unknown>;
}

/** Staging settings. */
export interface StagingSettings {
  /** Describes unknown properties. The value of an unknown property can be of "any" type. */
  [property: string]: any;
  /** Staging linked service reference. */
  linkedServiceName: LinkedServiceReference;
  /** The path to storage for storing the interim data. Type: string (or Expression with resultType string). */
  path?: Record<string, unknown>;
  /** Specifies whether to use compression when copying data via an interim staging. Default value is false. Type: boolean (or Expression with resultType boolean). */
  enableCompression?: Record<string, unknown>;
}

/** Redirect incompatible row settings */
export interface RedirectIncompatibleRowSettings {
  /** Describes unknown properties. The value of an unknown property can be of "any" type. */
  [property: string]: any;
  /** Name of the Azure Storage, Storage SAS, or Azure Data Lake Store linked service used for redirecting incompatible row. Must be specified if redirectIncompatibleRowSettings is specified. Type: string (or Expression with resultType string). */
  linkedServiceName: Record<string, unknown>;
  /** The path for storing the redirect incompatible row data. Type: string (or Expression with resultType string). */
  path?: Record<string, unknown>;
}

/** (Deprecated. Please use LogSettings) Log storage settings. */
export interface LogStorageSettings {
  /** Describes unknown properties. The value of an unknown property can be of "any" type. */
  [property: string]: any;
  /** Log storage linked service reference. */
  linkedServiceName: LinkedServiceReference;
  /** The path to storage for storing detailed logs of activity execution. Type: string (or Expression with resultType string). */
  path?: Record<string, unknown>;
  /** Gets or sets the log level, support: Info, Warning. Type: string (or Expression with resultType string). */
  logLevel?: Record<string, unknown>;
  /** Specifies whether to enable reliable logging. Type: boolean (or Expression with resultType boolean). */
  enableReliableLogging?: Record<string, unknown>;
}

/** Log settings. */
export interface LogSettings {
  /** Specifies whether to enable copy activity log. Type: boolean (or Expression with resultType boolean). */
  enableCopyActivityLog?: Record<string, unknown>;
  /** Specifies settings for copy activity log. */
  copyActivityLogSettings?: CopyActivityLogSettings;
  /** Log location settings customer needs to provide when enabling log. */
  logLocationSettings: LogLocationSettings;
}

/** Settings for copy activity log. */
export interface CopyActivityLogSettings {
  /** Gets or sets the log level, support: Info, Warning. Type: string (or Expression with resultType string). */
  logLevel?: Record<string, unknown>;
  /** Specifies whether to enable reliable logging. Type: boolean (or Expression with resultType boolean). */
  enableReliableLogging?: Record<string, unknown>;
}

/** Log location settings. */
export interface LogLocationSettings {
  /** Log storage linked service reference. */
  linkedServiceName: LinkedServiceReference;
  /** The path to storage for storing detailed logs of activity execution. Type: string (or Expression with resultType string). */
  path?: Record<string, unknown>;
}

/** Skip error file. */
export interface SkipErrorFile {
  /** Skip if file is deleted by other client during copy. Default is true. Type: boolean (or Expression with resultType boolean). */
  fileMissing?: Record<string, unknown>;
  /** Skip if source/sink file changed by other concurrent write. Default is false. Type: boolean (or Expression with resultType boolean). */
  dataInconsistency?: Record<string, unknown>;
}

/** The settings that will be leveraged for SAP HANA source partitioning. */
export interface SapHanaPartitionSettings {
  /** The name of the column that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). */
  partitionColumnName?: Record<string, unknown>;
}

/** The settings that will be leveraged for SAP table source partitioning. */
export interface SapTablePartitionSettings {
  /** The name of the column that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). */
  partitionColumnName?: Record<string, unknown>;
  /** The maximum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). */
  partitionUpperBound?: Record<string, unknown>;
  /** The minimum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). */
  partitionLowerBound?: Record<string, unknown>;
  /** The maximum value of partitions the table will be split into. Type: integer (or Expression with resultType string). */
  maxPartitionsNumber?: Record<string, unknown>;
}

/** SQL stored procedure parameter. */
export interface StoredProcedureParameter {
  /** Stored procedure parameter value. Type: string (or Expression with resultType string). */
  value?: Record<string, unknown>;
  /** Stored procedure parameter type. */
  type?: StoredProcedureParameterType;
}

/** The settings that will be leveraged for Sql source partitioning. */
export interface SqlPartitionSettings {
  /** The name of the column in integer or datetime type that will be used for proceeding partitioning. If not specified, the primary key of the table is auto-detected and used as the partition column. Type: string (or Expression with resultType string). */
  partitionColumnName?: Record<string, unknown>;
  /** The maximum value of the partition column for partition range splitting. This value is used to decide the partition stride, not for filtering the rows in table. All rows in the table or query result will be partitioned and copied. Type: string (or Expression with resultType string). */
  partitionUpperBound?: Record<string, unknown>;
  /** The minimum value of the partition column for partition range splitting. This value is used to decide the partition stride, not for filtering the rows in table. All rows in the table or query result will be partitioned and copied. Type: string (or Expression with resultType string). */
  partitionLowerBound?: Record<string, unknown>;
}

/** The settings that will be leveraged for Oracle source partitioning. */
export interface OraclePartitionSettings {
  /** Names of the physical partitions of Oracle table. */
  partitionNames?: Record<string, unknown>;
  /** The name of the column in integer type that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). */
  partitionColumnName?: Record<string, unknown>;
  /** The maximum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). */
  partitionUpperBound?: Record<string, unknown>;
  /** The minimum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). */
  partitionLowerBound?: Record<string, unknown>;
}

/** The settings that will be leveraged for AmazonRdsForOracle source partitioning. */
export interface AmazonRdsForOraclePartitionSettings {
  /** Names of the physical partitions of AmazonRdsForOracle table. */
  partitionNames?: Record<string, unknown>;
  /** The name of the column in integer type that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). */
  partitionColumnName?: Record<string, unknown>;
  /** The maximum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). */
  partitionUpperBound?: Record<string, unknown>;
  /** The minimum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). */
  partitionLowerBound?: Record<string, unknown>;
}

/** The settings that will be leveraged for teradata source partitioning. */
export interface TeradataPartitionSettings {
  /** The name of the column that will be used for proceeding range or hash partitioning. Type: string (or Expression with resultType string). */
  partitionColumnName?: Record<string, unknown>;
  /** The maximum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). */
  partitionUpperBound?: Record<string, unknown>;
  /** The minimum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). */
  partitionLowerBound?: Record<string, unknown>;
}

/** Cursor methods for Mongodb query */
export interface MongoDbCursorMethodsProperties {
  /** Describes unknown properties. The value of an unknown property can be of "any" type. */
  [property: string]: any;
  /** Specifies the fields to return in the documents that match the query filter. To return all fields in the matching documents, omit this parameter. Type: string (or Expression with resultType string). */
  project?: Record<string, unknown>;
  /** Specifies the order in which the query returns matching documents. Type: string (or Expression with resultType string). Type: string (or Expression with resultType string). */
  sort?: Record<string, unknown>;
  /** Specifies the how many documents skipped and where MongoDB begins returning results. This approach may be useful in implementing paginated results. Type: integer (or Expression with resultType integer). */
  skip?: Record<string, unknown>;
  /** Specifies the maximum number of documents the server returns. limit() is analogous to the LIMIT statement in a SQL database. Type: integer (or Expression with resultType integer). */
  limit?: Record<string, unknown>;
}

/** The settings that will be leveraged for Netezza source partitioning. */
export interface NetezzaPartitionSettings {
  /** The name of the column in integer type that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). */
  partitionColumnName?: Record<string, unknown>;
  /** The maximum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). */
  partitionUpperBound?: Record<string, unknown>;
  /** The minimum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). */
  partitionLowerBound?: Record<string, unknown>;
}

/** The Amazon S3 settings needed for the interim Amazon S3 when copying from Amazon Redshift with unload. With this, data from Amazon Redshift source will be unloaded into S3 first and then copied into the targeted sink from the interim S3. */
export interface RedshiftUnloadSettings {
  /** The name of the Amazon S3 linked service which will be used for the unload operation when copying from the Amazon Redshift source. */
  s3LinkedServiceName: LinkedServiceReference;
  /** The bucket of the interim Amazon S3 which will be used to store the unloaded data from Amazon Redshift source. The bucket must be in the same region as the Amazon Redshift source. Type: string (or Expression with resultType string). */
  bucketName: Record<string, unknown>;
}

/** Export command settings. */
export interface ExportSettings {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "SnowflakeExportCopyCommand" | "AzureDatabricksDeltaLakeExportCommand";
  /** Describes unknown properties. The value of an unknown property can be of "any" type. */
  [property: string]: any;
}

/** Import command settings. */
export interface ImportSettings {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AzureDatabricksDeltaLakeImportCommand" | "SnowflakeImportCopyCommand";
  /** Describes unknown properties. The value of an unknown property can be of "any" type. */
  [property: string]: any;
}

/** Specify the name and value of custom metadata item. */
export interface MetadataItem {
  /** Metadata item key name. Type: string (or Expression with resultType string). */
  name?: Record<string, unknown>;
  /** Metadata item value. Type: string (or Expression with resultType string). */
  value?: Record<string, unknown>;
}

/** Sql upsert option settings */
export interface SqlUpsertSettings {
  /** Specifies whether to use temp db for upsert interim table. Type: boolean (or Expression with resultType boolean). */
  useTempDB?: Record<string, unknown>;
  /** Schema name for interim table. Type: string (or Expression with resultType string). */
  interimSchemaName?: Record<string, unknown>;
  /** Key column names for unique row identification. Type: array of strings (or Expression with resultType array of strings). */
  keys?: Record<string, unknown>;
}

/** PolyBase settings. */
export interface PolybaseSettings {
  /** Describes unknown properties. The value of an unknown property can be of "any" type. */
  [property: string]: any;
  /** Reject type. */
  rejectType?: PolybaseSettingsRejectType;
  /** Specifies the value or the percentage of rows that can be rejected before the query fails. Type: number (or Expression with resultType number), minimum: 0. */
  rejectValue?: Record<string, unknown>;
  /** Determines the number of rows to attempt to retrieve before the PolyBase recalculates the percentage of rejected rows. Type: integer (or Expression with resultType integer), minimum: 0. */
  rejectSampleValue?: Record<string, unknown>;
  /** Specifies how to handle missing values in delimited text files when PolyBase retrieves data from the text file. Type: boolean (or Expression with resultType boolean). */
  useTypeDefault?: Record<string, unknown>;
}

/** DW Copy Command settings. */
export interface DWCopyCommandSettings {
  /** Specifies the default values for each target column in SQL DW. The default values in the property overwrite the DEFAULT constraint set in the DB, and identity column cannot have a default value. Type: array of objects (or Expression with resultType array of objects). */
  defaultValues?: DWCopyCommandDefaultValue[];
  /** Additional options directly passed to SQL DW in Copy Command. Type: key value pairs (value should be string type) (or Expression with resultType object). Example: "additionalOptions": { "MAXERRORS": "1000", "DATEFORMAT": "'ymd'" } */
  additionalOptions?: { [propertyName: string]: string };
}

/** Default value. */
export interface DWCopyCommandDefaultValue {
  /** Column name. Type: object (or Expression with resultType string). */
  columnName?: Record<string, unknown>;
  /** The default value of the column. Type: object (or Expression with resultType string). */
  defaultValue?: Record<string, unknown>;
}

/** Sql DW upsert option settings */
export interface SqlDWUpsertSettings {
  /** Schema name for interim table. Type: string (or Expression with resultType string). */
  interimSchemaName?: Record<string, unknown>;
  /** Key column names for unique row identification. Type: array of strings (or Expression with resultType array of strings). */
  keys?: Record<string, unknown>;
}

/** Specify the column name and value of additional columns. */
export interface AdditionalColumns {
  /** Additional column name. Type: string (or Expression with resultType string). */
  name?: Record<string, unknown>;
  /** Additional column value. Type: string (or Expression with resultType string). */
  value?: Record<string, unknown>;
}

/** A copy activity translator. */
export interface CopyTranslator {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "TabularTranslator";
  /** Describes unknown properties. The value of an unknown property can be of "any" type. */
  [property: string]: any;
}

/** Type conversion settings */
export interface TypeConversionSettings {
  /** Whether to allow data truncation when converting the data. Type: boolean (or Expression with resultType boolean). */
  allowDataTruncation?: Record<string, unknown>;
  /** Whether to treat boolean values as numbers. Type: boolean (or Expression with resultType boolean). */
  treatBooleanAsNumber?: Record<string, unknown>;
  /** The format for DateTime values. Type: string (or Expression with resultType string). */
  dateTimeFormat?: Record<string, unknown>;
  /** The format for DateTimeOffset values. Type: string (or Expression with resultType string). */
  dateTimeOffsetFormat?: Record<string, unknown>;
  /** The format for TimeSpan values. Type: string (or Expression with resultType string). */
  timeSpanFormat?: Record<string, unknown>;
  /** The culture used to convert data from/to string. Type: string (or Expression with resultType string). */
  culture?: Record<string, unknown>;
}

/** SSIS package location. */
export interface SsisPackageLocation {
  /** The SSIS package path. Type: string (or Expression with resultType string). */
  packagePath?: Record<string, unknown>;
  /** The type of SSIS package location. */
  type?: SsisPackageLocationType;
  /** Password of the package. */
  packagePassword?: SecretBaseUnion;
  /** The package access credential. */
  accessCredential?: SsisAccessCredential;
  /** The configuration file of the package execution. Type: string (or Expression with resultType string). */
  configurationPath?: Record<string, unknown>;
  /** The configuration file access credential. */
  configurationAccessCredential?: SsisAccessCredential;
  /** The package name. */
  packageName?: string;
  /** The embedded package content. Type: string (or Expression with resultType string). */
  packageContent?: Record<string, unknown>;
  /** The embedded package last modified date. */
  packageLastModifiedDate?: string;
  /** The embedded child package list. */
  childPackages?: SsisChildPackage[];
}

/** SSIS access credential. */
export interface SsisAccessCredential {
  /** Domain for windows authentication. */
  domain: Record<string, unknown>;
  /** UseName for windows authentication. */
  userName: Record<string, unknown>;
  /** Password for windows authentication. */
  password: SecretBaseUnion;
}

/** SSIS embedded child package. */
export interface SsisChildPackage {
  /** Path for embedded child package. Type: string (or Expression with resultType string). */
  packagePath: Record<string, unknown>;
  /** Name for embedded child package. */
  packageName?: string;
  /** Content for embedded child package. Type: string (or Expression with resultType string). */
  packageContent: Record<string, unknown>;
  /** Last modified date for embedded child package. */
  packageLastModifiedDate?: string;
}

/** SSIS package execution credential. */
export interface SsisExecutionCredential {
  /** Domain for windows authentication. */
  domain: Record<string, unknown>;
  /** UseName for windows authentication. */
  userName: Record<string, unknown>;
  /** Password for windows authentication. */
  password: SecureString;
}

/** SSIS execution parameter. */
export interface SsisExecutionParameter {
  /** SSIS package execution parameter value. Type: string (or Expression with resultType string). */
  value: Record<string, unknown>;
}

/** SSIS property override. */
export interface SsisPropertyOverride {
  /** SSIS package property override value. Type: string (or Expression with resultType string). */
  value: Record<string, unknown>;
  /** Whether SSIS package property override value is sensitive data. Value will be encrypted in SSISDB if it is true */
  isSensitive?: boolean;
}

/** SSIS package execution log location */
export interface SsisLogLocation {
  /** The SSIS package execution log path. Type: string (or Expression with resultType string). */
  logPath: Record<string, unknown>;
  /** The type of SSIS log location. */
  type: SsisLogLocationType;
  /** The package execution log access credential. */
  accessCredential?: SsisAccessCredential;
  /** Specifies the interval to refresh log. The default interval is 5 minutes. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
  logRefreshInterval?: Record<string, unknown>;
}

/** Reference objects for custom activity */
export interface CustomActivityReferenceObject {
  /** Linked service references. */
  linkedServices?: LinkedServiceReference[];
  /** Dataset references. */
  datasets?: DatasetReference[];
}

/** Web activity authentication properties. */
export interface WebActivityAuthentication {
  /** Web activity authentication (Basic/ClientCertificate/MSI/ServicePrincipal) */
  type?: string;
  /** Base64-encoded contents of a PFX file or Certificate when used for ServicePrincipal */
  pfx?: SecretBaseUnion;
  /** Web activity authentication user name for basic authentication or ClientID when used for ServicePrincipal. Type: string (or Expression with resultType string). */
  username?: Record<string, unknown>;
  /** Password for the PFX file or basic authentication / Secret when used for ServicePrincipal */
  password?: SecretBaseUnion;
  /** Resource for which Azure Auth token will be requested when using MSI Authentication. Type: string (or Expression with resultType string). */
  resource?: Record<string, unknown>;
  /** TenantId for which Azure Auth token will be requested when using ServicePrincipal Authentication. Type: string (or Expression with resultType string). */
  userTenant?: Record<string, unknown>;
  /** The credential reference containing authentication information. */
  credential?: CredentialReference;
}

/** Switch cases with have a value and corresponding activities. */
export interface SwitchCase {
  /** Expected value that satisfies the expression result of the 'on' property. */
  value?: string;
  /** List of activities to execute for satisfied case condition. */
  activities?: ActivityUnion[];
}

/** Azure ML WebService Input/Output file */
export interface AzureMLWebServiceFile {
  /** The relative file path, including container name, in the Azure Blob Storage specified by the LinkedService. Type: string (or Expression with resultType string). */
  filePath: Record<string, unknown>;
  /** Reference to an Azure Storage LinkedService, where Azure ML WebService Input/Output file located. */
  linkedServiceName: LinkedServiceReference;
}

/** Execute data flow activity properties. */
export interface ExecuteDataFlowActivityTypeProperties {
  /** Data flow reference. */
  dataFlow: DataFlowReference;
  /** Staging info for execute data flow activity. */
  staging?: DataFlowStagingInfo;
  /** The integration runtime reference. */
  integrationRuntime?: IntegrationRuntimeReference;
  /** Compute properties for data flow activity. */
  compute?: ExecuteDataFlowActivityTypePropertiesCompute;
  /** Trace level setting used for data flow monitoring output. Supported values are: 'coarse', 'fine', and 'none'. Type: string (or Expression with resultType string) */
  traceLevel?: Record<string, unknown>;
  /** Continue on error setting used for data flow execution. Enables processing to continue if a sink fails. Type: boolean (or Expression with resultType boolean) */
  continueOnError?: Record<string, unknown>;
  /** Concurrent run setting used for data flow execution. Allows sinks with the same save order to be processed concurrently. Type: boolean (or Expression with resultType boolean) */
  runConcurrently?: Record<string, unknown>;
}

/** Compute properties for data flow activity. */
export interface ExecuteDataFlowActivityTypePropertiesCompute {
  /** Compute type of the cluster which will execute data flow job. Possible values include: 'General', 'MemoryOptimized', 'ComputeOptimized'. Type: string (or Expression with resultType string) */
  computeType?: Record<string, unknown>;
  /** Core count of the cluster which will execute data flow job. Supported values are: 8, 16, 32, 48, 80, 144 and 272. Type: integer (or Expression with resultType integer) */
  coreCount?: Record<string, unknown>;
}

/** Map Power Query mashup query to sink dataset(s). */
export interface PowerQuerySinkMapping {
  /** Name of the query in Power Query mashup document. */
  queryName?: string;
  /** List of sinks mapped to Power Query mashup query. */
  dataflowSinks?: PowerQuerySink[];
}

/** The workflow trigger recurrence. */
export interface ScheduleTriggerRecurrence {
  /** Describes unknown properties. The value of an unknown property can be of "any" type. */
  [property: string]: any;
  /** The frequency. */
  frequency?: RecurrenceFrequency;
  /** The interval. */
  interval?: number;
  /** The start time. */
  startTime?: Date;
  /** The end time. */
  endTime?: Date;
  /** The time zone. */
  timeZone?: string;
  /** The recurrence schedule. */
  schedule?: RecurrenceSchedule;
}

/** The recurrence schedule. */
export interface RecurrenceSchedule {
  /** Describes unknown properties. The value of an unknown property can be of "any" type. */
  [property: string]: any;
  /** The minutes. */
  minutes?: number[];
  /** The hours. */
  hours?: number[];
  /** The days of the week. */
  weekDays?: DaysOfWeek[];
  /** The month days. */
  monthDays?: number[];
  /** The monthly occurrences. */
  monthlyOccurrences?: RecurrenceScheduleOccurrence[];
}

/** The recurrence schedule occurrence. */
export interface RecurrenceScheduleOccurrence {
  /** Describes unknown properties. The value of an unknown property can be of "any" type. */
  [property: string]: any;
  /** The day of the week. */
  day?: DayOfWeek;
  /** The occurrence. */
  occurrence?: number;
}

/** Execution policy for an activity. */
export interface RetryPolicy {
  /** Maximum ordinary retry attempts. Default is 0. Type: integer (or Expression with resultType integer), minimum: 0. */
  count?: Record<string, unknown>;
  /** Interval between retries in seconds. Default is 30. */
  intervalInSeconds?: number;
}

/** Referenced dependency. */
export interface DependencyReference {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type:
    | "TriggerDependencyReference"
    | "TumblingWindowTriggerDependencyReference"
    | "SelfDependencyTumblingWindowTriggerReference";
}

/** Trigger reference type. */
export interface TriggerReference {
  /** Trigger reference type. */
  type: "TriggerReference";
  /** Reference trigger name. */
  referenceName: string;
}

/** Factory's VSTS repo information. */
export interface FactoryVstsConfiguration extends FactoryRepoConfiguration {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "FactoryVSTSConfiguration";
  /** VSTS project name. */
  projectName: string;
  /** VSTS tenant id. */
  tenantId?: string;
}

/** Factory's GitHub repo information. */
export interface FactoryGitHubConfiguration extends FactoryRepoConfiguration {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "FactoryGitHubConfiguration";
  /** GitHub Enterprise host name. For example: https://github.mydomain.com */
  hostName?: string;
  /** GitHub bring your own app client id. */
  clientId?: string;
  /** GitHub bring your own app client secret information. */
  clientSecret?: GitHubClientSecret;
}

/** Factory resource type. */
export interface Factory extends Resource {
  /** Describes unknown properties. The value of an unknown property can be of "any" type. */
  [property: string]: any;
  /** Managed service identity of the factory. */
  identity?: FactoryIdentity;
  /**
   * Factory provisioning state, example Succeeded.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: string;
  /**
   * Time the factory was created in ISO8601 format.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly createTime?: Date;
  /**
   * Version of the factory.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly version?: string;
  /** Git repo information of the factory. */
  repoConfiguration?: FactoryRepoConfigurationUnion;
  /** List of parameters for factory. */
  globalParameters?: { [propertyName: string]: GlobalParameterSpecification };
  /** Properties to enable Customer Managed Key for the factory. */
  encryption?: EncryptionConfiguration;
  /** Whether or not public network access is allowed for the data factory. */
  publicNetworkAccess?: PublicNetworkAccess;
}

/** Managed integration runtime, including managed elastic and managed dedicated integration runtimes. */
export interface ManagedIntegrationRuntime extends IntegrationRuntime {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "Managed";
  /**
   * Integration runtime state, only valid for managed dedicated integration runtime.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly state?: IntegrationRuntimeState;
  /** Managed Virtual Network reference. */
  managedVirtualNetwork?: ManagedVirtualNetworkReference;
  /** The compute resource for managed integration runtime. */
  computeProperties?: IntegrationRuntimeComputeProperties;
  /** SSIS properties for managed integration runtime. */
  ssisProperties?: IntegrationRuntimeSsisProperties;
  /** The name of virtual network to which Azure-SSIS integration runtime will join */
  customerVirtualNetwork?: IntegrationRuntimeCustomerVirtualNetwork;
}

/** Self-hosted integration runtime. */
export interface SelfHostedIntegrationRuntime extends IntegrationRuntime {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "SelfHosted";
  /** The base definition of a linked integration runtime. */
  linkedInfo?: LinkedIntegrationRuntimeTypeUnion;
}

/** Integration runtime resource type. */
export interface IntegrationRuntimeResource extends SubResource {
  /** Integration runtime properties. */
  properties: IntegrationRuntimeUnion;
}

/** Linked service resource type. */
export interface LinkedServiceResource extends SubResource {
  /** Properties of linked service. */
  properties: LinkedServiceUnion;
}

/** Dataset resource type. */
export interface DatasetResource extends SubResource {
  /** Dataset properties. */
  properties: DatasetUnion;
}

/** Pipeline resource type. */
export interface PipelineResource extends SubResource {
  /** Describes unknown properties. The value of an unknown property can be of "any" type. */
  [property: string]: any;
  /** The description of the pipeline. */
  description?: string;
  /** List of activities in pipeline. */
  activities?: ActivityUnion[];
  /** List of parameters for pipeline. */
  parameters?: { [propertyName: string]: ParameterSpecification };
  /** List of variables for pipeline. */
  variables?: { [propertyName: string]: VariableSpecification };
  /** The max number of concurrent runs for the pipeline. */
  concurrency?: number;
  /** List of tags that can be used for describing the Pipeline. */
  annotations?: Record<string, unknown>[];
  /** Dimensions emitted by Pipeline. */
  runDimensions?: { [propertyName: string]: Record<string, unknown> };
  /** The folder that this Pipeline is in. If not specified, Pipeline will appear at the root level. */
  folder?: PipelineFolder;
  /** Pipeline Policy. */
  policy?: PipelinePolicy;
}

/** Trigger resource type. */
export interface TriggerResource extends SubResource {
  /** Properties of the trigger. */
  properties: TriggerUnion;
}

/** Data flow resource type. */
export interface DataFlowResource extends SubResource {
  /** Data flow properties. */
  properties: DataFlowUnion;
}

/** Managed Virtual Network resource type. */
export interface ManagedVirtualNetworkResource extends SubResource {
  /** Managed Virtual Network properties. */
  properties: ManagedVirtualNetwork;
}

/** Managed private endpoint resource type. */
export interface ManagedPrivateEndpointResource extends SubResource {
  /** Managed private endpoint properties. */
  properties: ManagedPrivateEndpoint;
}

/** Private Endpoint Connection ARM resource. */
export interface PrivateEndpointConnectionResource extends SubResource {
  /** Core resource properties */
  properties?: RemotePrivateEndpointConnection;
}

/** Private Endpoint Connection Approval ARM resource. */
export interface PrivateLinkConnectionApprovalRequestResource
  extends SubResource {
  /** Core resource properties */
  properties?: PrivateLinkConnectionApprovalRequest;
}

/** A private link resource */
export interface PrivateLinkResource extends SubResource {
  /** Core resource properties */
  properties?: PrivateLinkResourceProperties;
}

/** Credential resource type. */
export interface CredentialResource extends SubResource {
  /** Properties of credentials. */
  properties: CredentialUnion;
}

/** Managed integration runtime status. */
export interface ManagedIntegrationRuntimeStatus
  extends IntegrationRuntimeStatus {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "Managed";
  /**
   * The time at which the integration runtime was created, in ISO8601 format.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly createTime?: Date;
  /**
   * The list of nodes for managed integration runtime.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly nodes?: ManagedIntegrationRuntimeNode[];
  /**
   * The errors that occurred on this integration runtime.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly otherErrors?: ManagedIntegrationRuntimeError[];
  /**
   * The last operation result that occurred on this integration runtime.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly lastOperation?: ManagedIntegrationRuntimeOperationResult;
}

/** Self-hosted integration runtime status. */
export interface SelfHostedIntegrationRuntimeStatus
  extends IntegrationRuntimeStatus {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "SelfHosted";
  /**
   * The time at which the integration runtime was created, in ISO8601 format.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly createTime?: Date;
  /**
   * The task queue id of the integration runtime.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly taskQueueId?: string;
  /**
   * It is used to set the encryption mode for node-node communication channel (when more than 2 self-hosted integration runtime nodes exist).
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly internalChannelEncryption?: IntegrationRuntimeInternalChannelEncryptionMode;
  /**
   * Version of the integration runtime.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly version?: string;
  /** The list of nodes for this integration runtime. */
  nodes?: SelfHostedIntegrationRuntimeNode[];
  /**
   * The date at which the integration runtime will be scheduled to update, in ISO8601 format.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly scheduledUpdateDate?: Date;
  /**
   * The time in the date scheduled by service to update the integration runtime, e.g., PT03H is 3 hours
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly updateDelayOffset?: string;
  /**
   * The local time zone offset in hours.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly localTimeZoneOffset?: string;
  /**
   * Object with additional information about integration runtime capabilities.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly capabilities?: { [propertyName: string]: string };
  /**
   * The URLs for the services used in integration runtime backend service.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly serviceUrls?: string[];
  /**
   * Whether Self-hosted integration runtime auto update has been turned on.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly autoUpdate?: IntegrationRuntimeAutoUpdate;
  /**
   * Status of the integration runtime version.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly versionStatus?: string;
  /** The list of linked integration runtimes that are created to share with this integration runtime. */
  links?: LinkedIntegrationRuntime[];
  /**
   * The version that the integration runtime is going to update to.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly pushedVersion?: string;
  /**
   * The latest version on download center.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly latestVersion?: string;
  /**
   * The estimated time when the self-hosted integration runtime will be updated.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly autoUpdateETA?: Date;
}

/** Ssis folder. */
export interface SsisFolder extends SsisObjectMetadata {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "Folder";
}

/** Ssis project. */
export interface SsisProject extends SsisObjectMetadata {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "Project";
  /** Folder id which contains project. */
  folderId?: number;
  /** Project version. */
  version?: number;
  /** Environment reference in project */
  environmentRefs?: SsisEnvironmentReference[];
  /** Parameters in project */
  parameters?: SsisParameter[];
}

/** Ssis Package. */
export interface SsisPackage extends SsisObjectMetadata {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "Package";
  /** Folder id which contains package. */
  folderId?: number;
  /** Project version which contains package. */
  projectVersion?: number;
  /** Project id which contains package. */
  projectId?: number;
  /** Parameters in package */
  parameters?: SsisParameter[];
}

/** Ssis environment. */
export interface SsisEnvironment extends SsisObjectMetadata {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "Environment";
  /** Folder id which contains environment. */
  folderId?: number;
  /** Variable in environment */
  variables?: SsisVariable[];
}

/** The storage account linked service. */
export interface AzureStorageLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AzureStorage";
  /** The connection string. It is mutually exclusive with sasUri property. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString?: Record<string, unknown>;
  /** The Azure key vault secret reference of accountKey in connection string. */
  accountKey?: AzureKeyVaultSecretReference;
  /** SAS URI of the Azure Storage resource. It is mutually exclusive with connectionString property. Type: string, SecureString or AzureKeyVaultSecretReference. */
  sasUri?: Record<string, unknown>;
  /** The Azure key vault secret reference of sasToken in sas uri. */
  sasToken?: AzureKeyVaultSecretReference;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: string;
}

/** The azure blob storage linked service. */
export interface AzureBlobStorageLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AzureBlobStorage";
  /** The connection string. It is mutually exclusive with sasUri, serviceEndpoint property. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString?: Record<string, unknown>;
  /** The Azure key vault secret reference of accountKey in connection string. */
  accountKey?: AzureKeyVaultSecretReference;
  /** SAS URI of the Azure Blob Storage resource. It is mutually exclusive with connectionString, serviceEndpoint property. Type: string, SecureString or AzureKeyVaultSecretReference. */
  sasUri?: Record<string, unknown>;
  /** The Azure key vault secret reference of sasToken in sas uri. */
  sasToken?: AzureKeyVaultSecretReference;
  /** Blob service endpoint of the Azure Blob Storage resource. It is mutually exclusive with connectionString, sasUri property. */
  serviceEndpoint?: string;
  /** The ID of the service principal used to authenticate against Azure SQL Data Warehouse. Type: string (or Expression with resultType string). */
  servicePrincipalId?: Record<string, unknown>;
  /** The key of the service principal used to authenticate against Azure SQL Data Warehouse. */
  servicePrincipalKey?: SecretBaseUnion;
  /** The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string). */
  tenant?: Record<string, unknown>;
  /** Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regions’ cloud type. Type: string (or Expression with resultType string). */
  azureCloudType?: Record<string, unknown>;
  /** Specify the kind of your storage account. Allowed values are: Storage (general purpose v1), StorageV2 (general purpose v2), BlobStorage, or BlockBlobStorage. Type: string (or Expression with resultType string). */
  accountKind?: string;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: string;
  /** The credential reference containing authentication information. */
  credential?: CredentialReference;
}

/** The azure table storage linked service. */
export interface AzureTableStorageLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AzureTableStorage";
  /** The connection string. It is mutually exclusive with sasUri property. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString?: Record<string, unknown>;
  /** The Azure key vault secret reference of accountKey in connection string. */
  accountKey?: AzureKeyVaultSecretReference;
  /** SAS URI of the Azure Storage resource. It is mutually exclusive with connectionString property. Type: string, SecureString or AzureKeyVaultSecretReference. */
  sasUri?: Record<string, unknown>;
  /** The Azure key vault secret reference of sasToken in sas uri. */
  sasToken?: AzureKeyVaultSecretReference;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: string;
}

/** Azure SQL Data Warehouse linked service. */
export interface AzureSqlDWLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AzureSqlDW";
  /** The connection string. Type: string, SecureString or AzureKeyVaultSecretReference. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString: Record<string, unknown>;
  /** The Azure key vault secret reference of password in connection string. */
  password?: AzureKeyVaultSecretReference;
  /** The ID of the service principal used to authenticate against Azure SQL Data Warehouse. Type: string (or Expression with resultType string). */
  servicePrincipalId?: Record<string, unknown>;
  /** The key of the service principal used to authenticate against Azure SQL Data Warehouse. */
  servicePrincipalKey?: SecretBaseUnion;
  /** The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string). */
  tenant?: Record<string, unknown>;
  /** Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regions’ cloud type. Type: string (or Expression with resultType string). */
  azureCloudType?: Record<string, unknown>;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
  /** The credential reference containing authentication information. */
  credential?: CredentialReference;
}

/** SQL Server linked service. */
export interface SqlServerLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "SqlServer";
  /** The connection string. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString: Record<string, unknown>;
  /** The on-premises Windows authentication user name. Type: string (or Expression with resultType string). */
  userName?: Record<string, unknown>;
  /** The on-premises Windows authentication password. */
  password?: SecretBaseUnion;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
  /** Sql always encrypted properties. */
  alwaysEncryptedSettings?: SqlAlwaysEncryptedProperties;
}

/** Amazon RDS for SQL Server linked service. */
export interface AmazonRdsForSqlServerLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AmazonRdsForSqlServer";
  /** The connection string. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString: Record<string, unknown>;
  /** The on-premises Windows authentication user name. Type: string (or Expression with resultType string). */
  userName?: Record<string, unknown>;
  /** The on-premises Windows authentication password. */
  password?: SecretBaseUnion;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
  /** Sql always encrypted properties. */
  alwaysEncryptedSettings?: SqlAlwaysEncryptedProperties;
}

/** Microsoft Azure SQL Database linked service. */
export interface AzureSqlDatabaseLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AzureSqlDatabase";
  /** The connection string. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString: Record<string, unknown>;
  /** The Azure key vault secret reference of password in connection string. */
  password?: AzureKeyVaultSecretReference;
  /** The ID of the service principal used to authenticate against Azure SQL Database. Type: string (or Expression with resultType string). */
  servicePrincipalId?: Record<string, unknown>;
  /** The key of the service principal used to authenticate against Azure SQL Database. */
  servicePrincipalKey?: SecretBaseUnion;
  /** The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string). */
  tenant?: Record<string, unknown>;
  /** Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regions’ cloud type. Type: string (or Expression with resultType string). */
  azureCloudType?: Record<string, unknown>;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
  /** Sql always encrypted properties. */
  alwaysEncryptedSettings?: SqlAlwaysEncryptedProperties;
  /** The credential reference containing authentication information. */
  credential?: CredentialReference;
}

/** Azure SQL Managed Instance linked service. */
export interface AzureSqlMILinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AzureSqlMI";
  /** The connection string. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString: Record<string, unknown>;
  /** The Azure key vault secret reference of password in connection string. */
  password?: AzureKeyVaultSecretReference;
  /** The ID of the service principal used to authenticate against Azure SQL Managed Instance. Type: string (or Expression with resultType string). */
  servicePrincipalId?: Record<string, unknown>;
  /** The key of the service principal used to authenticate against Azure SQL Managed Instance. */
  servicePrincipalKey?: SecretBaseUnion;
  /** The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string). */
  tenant?: Record<string, unknown>;
  /** Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regions’ cloud type. Type: string (or Expression with resultType string). */
  azureCloudType?: Record<string, unknown>;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
  /** Sql always encrypted properties. */
  alwaysEncryptedSettings?: SqlAlwaysEncryptedProperties;
  /** The credential reference containing authentication information. */
  credential?: CredentialReference;
}

/** Azure Batch linked service. */
export interface AzureBatchLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AzureBatch";
  /** The Azure Batch account name. Type: string (or Expression with resultType string). */
  accountName: Record<string, unknown>;
  /** The Azure Batch account access key. */
  accessKey?: SecretBaseUnion;
  /** The Azure Batch URI. Type: string (or Expression with resultType string). */
  batchUri: Record<string, unknown>;
  /** The Azure Batch pool name. Type: string (or Expression with resultType string). */
  poolName: Record<string, unknown>;
  /** The Azure Storage linked service reference. */
  linkedServiceName: LinkedServiceReference;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
  /** The credential reference containing authentication information. */
  credential?: CredentialReference;
}

/** Azure Key Vault linked service. */
export interface AzureKeyVaultLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AzureKeyVault";
  /** The base URL of the Azure Key Vault. e.g. https://myakv.vault.azure.net Type: string (or Expression with resultType string). */
  baseUrl: Record<string, unknown>;
  /** The credential reference containing authentication information. */
  credential?: CredentialReference;
}

/** Microsoft Azure Cosmos Database (CosmosDB) linked service. */
export interface CosmosDbLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "CosmosDb";
  /** The connection string. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString?: Record<string, unknown>;
  /** The endpoint of the Azure CosmosDB account. Type: string (or Expression with resultType string) */
  accountEndpoint?: Record<string, unknown>;
  /** The name of the database. Type: string (or Expression with resultType string) */
  database?: Record<string, unknown>;
  /** The account key of the Azure CosmosDB account. Type: SecureString or AzureKeyVaultSecretReference. */
  accountKey?: SecretBaseUnion;
  /** The client ID of the application in Azure Active Directory used for Server-To-Server authentication. Type: string (or Expression with resultType string). */
  servicePrincipalId?: Record<string, unknown>;
  /** The service principal credential type to use in Server-To-Server authentication. 'ServicePrincipalKey' for key/secret, 'ServicePrincipalCert' for certificate. Type: string (or Expression with resultType string). */
  servicePrincipalCredentialType?: CosmosDbServicePrincipalCredentialType;
  /** The credential of the service principal object in Azure Active Directory. If servicePrincipalCredentialType is 'ServicePrincipalKey', servicePrincipalCredential can be SecureString or AzureKeyVaultSecretReference. If servicePrincipalCredentialType is 'ServicePrincipalCert', servicePrincipalCredential can only be AzureKeyVaultSecretReference. */
  servicePrincipalCredential?: SecretBaseUnion;
  /** The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string). */
  tenant?: Record<string, unknown>;
  /** Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regions’ cloud type. Type: string (or Expression with resultType string). */
  azureCloudType?: Record<string, unknown>;
  /** The connection mode used to access CosmosDB account. Type: string (or Expression with resultType string). */
  connectionMode?: CosmosDbConnectionMode;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
}

/** Dynamics linked service. */
export interface DynamicsLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "Dynamics";
  /** The deployment type of the Dynamics instance. 'Online' for Dynamics Online and 'OnPremisesWithIfd' for Dynamics on-premises with Ifd. Type: string (or Expression with resultType string). */
  deploymentType: Record<string, unknown>;
  /** The host name of the on-premises Dynamics server. The property is required for on-prem and not allowed for online. Type: string (or Expression with resultType string). */
  hostName?: Record<string, unknown>;
  /** The port of on-premises Dynamics server. The property is required for on-prem and not allowed for online. Default is 443. Type: integer (or Expression with resultType integer), minimum: 0. */
  port?: Record<string, unknown>;
  /** The URL to the Microsoft Dynamics server. The property is required for on-line and not allowed for on-prem. Type: string (or Expression with resultType string). */
  serviceUri?: Record<string, unknown>;
  /** The organization name of the Dynamics instance. The property is required for on-prem and required for online when there are more than one Dynamics instances associated with the user. Type: string (or Expression with resultType string). */
  organizationName?: Record<string, unknown>;
  /** The authentication type to connect to Dynamics server. 'Office365' for online scenario, 'Ifd' for on-premises with Ifd scenario, 'AADServicePrincipal' for Server-To-Server authentication in online scenario. Type: string (or Expression with resultType string). */
  authenticationType: Record<string, unknown>;
  /** User name to access the Dynamics instance. Type: string (or Expression with resultType string). */
  username?: Record<string, unknown>;
  /** Password to access the Dynamics instance. */
  password?: SecretBaseUnion;
  /** The client ID of the application in Azure Active Directory used for Server-To-Server authentication. Type: string (or Expression with resultType string). */
  servicePrincipalId?: Record<string, unknown>;
  /** The service principal credential type to use in Server-To-Server authentication. 'ServicePrincipalKey' for key/secret, 'ServicePrincipalCert' for certificate. Type: string (or Expression with resultType string). */
  servicePrincipalCredentialType?: Record<string, unknown>;
  /** The credential of the service principal object in Azure Active Directory. If servicePrincipalCredentialType is 'ServicePrincipalKey', servicePrincipalCredential can be SecureString or AzureKeyVaultSecretReference. If servicePrincipalCredentialType is 'ServicePrincipalCert', servicePrincipalCredential can only be AzureKeyVaultSecretReference. */
  servicePrincipalCredential?: SecretBaseUnion;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
}

/** Dynamics CRM linked service. */
export interface DynamicsCrmLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "DynamicsCrm";
  /** The deployment type of the Dynamics CRM instance. 'Online' for Dynamics CRM Online and 'OnPremisesWithIfd' for Dynamics CRM on-premises with Ifd. Type: string (or Expression with resultType string). */
  deploymentType: Record<string, unknown>;
  /** The host name of the on-premises Dynamics CRM server. The property is required for on-prem and not allowed for online. Type: string (or Expression with resultType string). */
  hostName?: Record<string, unknown>;
  /** The port of on-premises Dynamics CRM server. The property is required for on-prem and not allowed for online. Default is 443. Type: integer (or Expression with resultType integer), minimum: 0. */
  port?: Record<string, unknown>;
  /** The URL to the Microsoft Dynamics CRM server. The property is required for on-line and not allowed for on-prem. Type: string (or Expression with resultType string). */
  serviceUri?: Record<string, unknown>;
  /** The organization name of the Dynamics CRM instance. The property is required for on-prem and required for online when there are more than one Dynamics CRM instances associated with the user. Type: string (or Expression with resultType string). */
  organizationName?: Record<string, unknown>;
  /** The authentication type to connect to Dynamics CRM server. 'Office365' for online scenario, 'Ifd' for on-premises with Ifd scenario, 'AADServicePrincipal' for Server-To-Server authentication in online scenario. Type: string (or Expression with resultType string). */
  authenticationType: Record<string, unknown>;
  /** User name to access the Dynamics CRM instance. Type: string (or Expression with resultType string). */
  username?: Record<string, unknown>;
  /** Password to access the Dynamics CRM instance. */
  password?: SecretBaseUnion;
  /** The client ID of the application in Azure Active Directory used for Server-To-Server authentication. Type: string (or Expression with resultType string). */
  servicePrincipalId?: Record<string, unknown>;
  /** The service principal credential type to use in Server-To-Server authentication. 'ServicePrincipalKey' for key/secret, 'ServicePrincipalCert' for certificate. Type: string (or Expression with resultType string). */
  servicePrincipalCredentialType?: Record<string, unknown>;
  /** The credential of the service principal object in Azure Active Directory. If servicePrincipalCredentialType is 'ServicePrincipalKey', servicePrincipalCredential can be SecureString or AzureKeyVaultSecretReference. If servicePrincipalCredentialType is 'ServicePrincipalCert', servicePrincipalCredential can only be AzureKeyVaultSecretReference. */
  servicePrincipalCredential?: SecretBaseUnion;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
}

/** Common Data Service for Apps linked service. */
export interface CommonDataServiceForAppsLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "CommonDataServiceForApps";
  /** The deployment type of the Common Data Service for Apps instance. 'Online' for Common Data Service for Apps Online and 'OnPremisesWithIfd' for Common Data Service for Apps on-premises with Ifd. Type: string (or Expression with resultType string). */
  deploymentType: Record<string, unknown>;
  /** The host name of the on-premises Common Data Service for Apps server. The property is required for on-prem and not allowed for online. Type: string (or Expression with resultType string). */
  hostName?: Record<string, unknown>;
  /** The port of on-premises Common Data Service for Apps server. The property is required for on-prem and not allowed for online. Default is 443. Type: integer (or Expression with resultType integer), minimum: 0. */
  port?: Record<string, unknown>;
  /** The URL to the Microsoft Common Data Service for Apps server. The property is required for on-line and not allowed for on-prem. Type: string (or Expression with resultType string). */
  serviceUri?: Record<string, unknown>;
  /** The organization name of the Common Data Service for Apps instance. The property is required for on-prem and required for online when there are more than one Common Data Service for Apps instances associated with the user. Type: string (or Expression with resultType string). */
  organizationName?: Record<string, unknown>;
  /** The authentication type to connect to Common Data Service for Apps server. 'Office365' for online scenario, 'Ifd' for on-premises with Ifd scenario. 'AADServicePrincipal' for Server-To-Server authentication in online scenario. Type: string (or Expression with resultType string). */
  authenticationType: Record<string, unknown>;
  /** User name to access the Common Data Service for Apps instance. Type: string (or Expression with resultType string). */
  username?: Record<string, unknown>;
  /** Password to access the Common Data Service for Apps instance. */
  password?: SecretBaseUnion;
  /** The client ID of the application in Azure Active Directory used for Server-To-Server authentication. Type: string (or Expression with resultType string). */
  servicePrincipalId?: Record<string, unknown>;
  /** The service principal credential type to use in Server-To-Server authentication. 'ServicePrincipalKey' for key/secret, 'ServicePrincipalCert' for certificate. Type: string (or Expression with resultType string). */
  servicePrincipalCredentialType?: Record<string, unknown>;
  /** The credential of the service principal object in Azure Active Directory. If servicePrincipalCredentialType is 'ServicePrincipalKey', servicePrincipalCredential can be SecureString or AzureKeyVaultSecretReference. If servicePrincipalCredentialType is 'ServicePrincipalCert', servicePrincipalCredential can only be AzureKeyVaultSecretReference. */
  servicePrincipalCredential?: SecretBaseUnion;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
}

/** HDInsight linked service. */
export interface HDInsightLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "HDInsight";
  /** HDInsight cluster URI. Type: string (or Expression with resultType string). */
  clusterUri: Record<string, unknown>;
  /** HDInsight cluster user name. Type: string (or Expression with resultType string). */
  userName?: Record<string, unknown>;
  /** HDInsight cluster password. */
  password?: SecretBaseUnion;
  /** The Azure Storage linked service reference. */
  linkedServiceName?: LinkedServiceReference;
  /** A reference to the Azure SQL linked service that points to the HCatalog database. */
  hcatalogLinkedServiceName?: LinkedServiceReference;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
  /** Specify if the HDInsight is created with ESP (Enterprise Security Package). Type: Boolean. */
  isEspEnabled?: Record<string, unknown>;
  /** Specify the FileSystem if the main storage for the HDInsight is ADLS Gen2. Type: string (or Expression with resultType string). */
  fileSystem?: Record<string, unknown>;
}

/** File system linked service. */
export interface FileServerLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "FileServer";
  /** Host name of the server. Type: string (or Expression with resultType string). */
  host: Record<string, unknown>;
  /** User ID to logon the server. Type: string (or Expression with resultType string). */
  userId?: Record<string, unknown>;
  /** Password to logon the server. */
  password?: SecretBaseUnion;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
}

/** Azure File Storage linked service. */
export interface AzureFileStorageLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AzureFileStorage";
  /** Host name of the server. Type: string (or Expression with resultType string). */
  host?: Record<string, unknown>;
  /** User ID to logon the server. Type: string (or Expression with resultType string). */
  userId?: Record<string, unknown>;
  /** Password to logon the server. */
  password?: SecretBaseUnion;
  /** The connection string. It is mutually exclusive with sasUri property. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString?: Record<string, unknown>;
  /** The Azure key vault secret reference of accountKey in connection string. */
  accountKey?: AzureKeyVaultSecretReference;
  /** SAS URI of the Azure File resource. It is mutually exclusive with connectionString property. Type: string, SecureString or AzureKeyVaultSecretReference. */
  sasUri?: Record<string, unknown>;
  /** The Azure key vault secret reference of sasToken in sas uri. */
  sasToken?: AzureKeyVaultSecretReference;
  /** The azure file share name. It is required when auth with accountKey/sasToken. Type: string (or Expression with resultType string). */
  fileShare?: Record<string, unknown>;
  /** The azure file share snapshot version. Type: string (or Expression with resultType string). */
  snapshot?: Record<string, unknown>;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
}

/** Linked service for Amazon S3 Compatible. */
export interface AmazonS3CompatibleLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AmazonS3Compatible";
  /** The access key identifier of the Amazon S3 Compatible Identity and Access Management (IAM) user. Type: string (or Expression with resultType string). */
  accessKeyId?: Record<string, unknown>;
  /** The secret access key of the Amazon S3 Compatible Identity and Access Management (IAM) user. */
  secretAccessKey?: SecretBaseUnion;
  /** This value specifies the endpoint to access with the Amazon S3 Compatible Connector. This is an optional property; change it only if you want to try a different service endpoint or want to switch between https and http. Type: string (or Expression with resultType string). */
  serviceUrl?: Record<string, unknown>;
  /** If true, use S3 path-style access instead of virtual hosted-style access. Default value is false. Type: boolean (or Expression with resultType boolean). */
  forcePathStyle?: Record<string, unknown>;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
}

/** Linked service for Oracle Cloud Storage. */
export interface OracleCloudStorageLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "OracleCloudStorage";
  /** The access key identifier of the Oracle Cloud Storage Identity and Access Management (IAM) user. Type: string (or Expression with resultType string). */
  accessKeyId?: Record<string, unknown>;
  /** The secret access key of the Oracle Cloud Storage Identity and Access Management (IAM) user. */
  secretAccessKey?: SecretBaseUnion;
  /** This value specifies the endpoint to access with the Oracle Cloud Storage Connector. This is an optional property; change it only if you want to try a different service endpoint or want to switch between https and http. Type: string (or Expression with resultType string). */
  serviceUrl?: Record<string, unknown>;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
}

/** Linked service for Google Cloud Storage. */
export interface GoogleCloudStorageLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "GoogleCloudStorage";
  /** The access key identifier of the Google Cloud Storage Identity and Access Management (IAM) user. Type: string (or Expression with resultType string). */
  accessKeyId?: Record<string, unknown>;
  /** The secret access key of the Google Cloud Storage Identity and Access Management (IAM) user. */
  secretAccessKey?: SecretBaseUnion;
  /** This value specifies the endpoint to access with the Google Cloud Storage Connector. This is an optional property; change it only if you want to try a different service endpoint or want to switch between https and http. Type: string (or Expression with resultType string). */
  serviceUrl?: Record<string, unknown>;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
}

/** Oracle database. */
export interface OracleLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "Oracle";
  /** The connection string. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString: Record<string, unknown>;
  /** The Azure key vault secret reference of password in connection string. */
  password?: AzureKeyVaultSecretReference;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
}

/** AmazonRdsForOracle database. */
export interface AmazonRdsForOracleLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AmazonRdsForOracle";
  /** The connection string. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString: Record<string, unknown>;
  /** The Azure key vault secret reference of password in connection string. */
  password?: SecretBaseUnion;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
}

/** Azure MySQL database linked service. */
export interface AzureMySqlLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AzureMySql";
  /** The connection string. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString: Record<string, unknown>;
  /** The Azure key vault secret reference of password in connection string. */
  password?: AzureKeyVaultSecretReference;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
}

/** Linked service for MySQL data source. */
export interface MySqlLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "MySql";
  /** The connection string. */
  connectionString: Record<string, unknown>;
  /** The Azure key vault secret reference of password in connection string. */
  password?: AzureKeyVaultSecretReference;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
}

/** Linked service for PostgreSQL data source. */
export interface PostgreSqlLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "PostgreSql";
  /** The connection string. */
  connectionString: Record<string, unknown>;
  /** The Azure key vault secret reference of password in connection string. */
  password?: AzureKeyVaultSecretReference;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
}

/** Linked service for Sybase data source. */
export interface SybaseLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "Sybase";
  /** Server name for connection. Type: string (or Expression with resultType string). */
  server: Record<string, unknown>;
  /** Database name for connection. Type: string (or Expression with resultType string). */
  database: Record<string, unknown>;
  /** Schema name for connection. Type: string (or Expression with resultType string). */
  schema?: Record<string, unknown>;
  /** AuthenticationType to be used for connection. */
  authenticationType?: SybaseAuthenticationType;
  /** Username for authentication. Type: string (or Expression with resultType string). */
  username?: Record<string, unknown>;
  /** Password for authentication. */
  password?: SecretBaseUnion;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
}

/** Linked service for DB2 data source. */
export interface Db2LinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "Db2";
  /** The connection string. It is mutually exclusive with server, database, authenticationType, userName, packageCollection and certificateCommonName property. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString?: Record<string, unknown>;
  /** Server name for connection. It is mutually exclusive with connectionString property. Type: string (or Expression with resultType string). */
  server?: Record<string, unknown>;
  /** Database name for connection. It is mutually exclusive with connectionString property. Type: string (or Expression with resultType string). */
  database?: Record<string, unknown>;
  /** AuthenticationType to be used for connection. It is mutually exclusive with connectionString property. */
  authenticationType?: Db2AuthenticationType;
  /** Username for authentication. It is mutually exclusive with connectionString property. Type: string (or Expression with resultType string). */
  username?: Record<string, unknown>;
  /** Password for authentication. */
  password?: SecretBaseUnion;
  /** Under where packages are created when querying database. It is mutually exclusive with connectionString property. Type: string (or Expression with resultType string). */
  packageCollection?: Record<string, unknown>;
  /** Certificate Common Name when TLS is enabled. It is mutually exclusive with connectionString property. Type: string (or Expression with resultType string). */
  certificateCommonName?: Record<string, unknown>;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. It is mutually exclusive with connectionString property. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
}

/** Linked service for Teradata data source. */
export interface TeradataLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "Teradata";
  /** Teradata ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString?: Record<string, unknown>;
  /** Server name for connection. Type: string (or Expression with resultType string). */
  server?: Record<string, unknown>;
  /** AuthenticationType to be used for connection. */
  authenticationType?: TeradataAuthenticationType;
  /** Username for authentication. Type: string (or Expression with resultType string). */
  username?: Record<string, unknown>;
  /** Password for authentication. */
  password?: SecretBaseUnion;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
}

/** Azure ML Studio Web Service linked service. */
export interface AzureMLLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AzureML";
  /** The Batch Execution REST URL for an Azure ML Studio Web Service endpoint. Type: string (or Expression with resultType string). */
  mlEndpoint: Record<string, unknown>;
  /** The API key for accessing the Azure ML model endpoint. */
  apiKey: SecretBaseUnion;
  /** The Update Resource REST URL for an Azure ML Studio Web Service endpoint. Type: string (or Expression with resultType string). */
  updateResourceEndpoint?: Record<string, unknown>;
  /** The ID of the service principal used to authenticate against the ARM-based updateResourceEndpoint of an Azure ML Studio web service. Type: string (or Expression with resultType string). */
  servicePrincipalId?: Record<string, unknown>;
  /** The key of the service principal used to authenticate against the ARM-based updateResourceEndpoint of an Azure ML Studio web service. */
  servicePrincipalKey?: SecretBaseUnion;
  /** The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string). */
  tenant?: Record<string, unknown>;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
  /** Type of authentication (Required to specify MSI) used to connect to AzureML. Type: string (or Expression with resultType string). */
  authentication?: Record<string, unknown>;
}

/** Azure ML Service linked service. */
export interface AzureMLServiceLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AzureMLService";
  /** Azure ML Service workspace subscription ID. Type: string (or Expression with resultType string). */
  subscriptionId: Record<string, unknown>;
  /** Azure ML Service workspace resource group name. Type: string (or Expression with resultType string). */
  resourceGroupName: Record<string, unknown>;
  /** Azure ML Service workspace name. Type: string (or Expression with resultType string). */
  mlWorkspaceName: Record<string, unknown>;
  /** The ID of the service principal used to authenticate against the endpoint of a published Azure ML Service pipeline. Type: string (or Expression with resultType string). */
  servicePrincipalId?: Record<string, unknown>;
  /** The key of the service principal used to authenticate against the endpoint of a published Azure ML Service pipeline. */
  servicePrincipalKey?: SecretBaseUnion;
  /** The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string). */
  tenant?: Record<string, unknown>;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
}

/** Open Database Connectivity (ODBC) linked service. */
export interface OdbcLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "Odbc";
  /** The non-access credential portion of the connection string as well as an optional encrypted credential. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString: Record<string, unknown>;
  /** Type of authentication used to connect to the ODBC data store. Possible values are: Anonymous and Basic. Type: string (or Expression with resultType string). */
  authenticationType?: Record<string, unknown>;
  /** The access credential portion of the connection string specified in driver-specific property-value format. */
  credential?: SecretBaseUnion;
  /** User name for Basic authentication. Type: string (or Expression with resultType string). */
  userName?: Record<string, unknown>;
  /** Password for Basic authentication. */
  password?: SecretBaseUnion;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
}

/** Informix linked service. */
export interface InformixLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "Informix";
  /** The non-access credential portion of the connection string as well as an optional encrypted credential. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString: Record<string, unknown>;
  /** Type of authentication used to connect to the Informix as ODBC data store. Possible values are: Anonymous and Basic. Type: string (or Expression with resultType string). */
  authenticationType?: Record<string, unknown>;
  /** The access credential portion of the connection string specified in driver-specific property-value format. */
  credential?: SecretBaseUnion;
  /** User name for Basic authentication. Type: string (or Expression with resultType string). */
  userName?: Record<string, unknown>;
  /** Password for Basic authentication. */
  password?: SecretBaseUnion;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
}

/** Microsoft Access linked service. */
export interface MicrosoftAccessLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "MicrosoftAccess";
  /** The non-access credential portion of the connection string as well as an optional encrypted credential. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString: Record<string, unknown>;
  /** Type of authentication used to connect to the Microsoft Access as ODBC data store. Possible values are: Anonymous and Basic. Type: string (or Expression with resultType string). */
  authenticationType?: Record<string, unknown>;
  /** The access credential portion of the connection string specified in driver-specific property-value format. */
  credential?: SecretBaseUnion;
  /** User name for Basic authentication. Type: string (or Expression with resultType string). */
  userName?: Record<string, unknown>;
  /** Password for Basic authentication. */
  password?: SecretBaseUnion;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
}

/** Hadoop Distributed File System (HDFS) linked service. */
export interface HdfsLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "Hdfs";
  /** The URL of the HDFS service endpoint, e.g. http://myhostname:50070/webhdfs/v1 . Type: string (or Expression with resultType string). */
  url: Record<string, unknown>;
  /** Type of authentication used to connect to the HDFS. Possible values are: Anonymous and Windows. Type: string (or Expression with resultType string). */
  authenticationType?: Record<string, unknown>;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
  /** User name for Windows authentication. Type: string (or Expression with resultType string). */
  userName?: Record<string, unknown>;
  /** Password for Windows authentication. */
  password?: SecretBaseUnion;
}

/** Open Data Protocol (OData) linked service. */
export interface ODataLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "OData";
  /** The URL of the OData service endpoint. Type: string (or Expression with resultType string). */
  url: Record<string, unknown>;
  /** Type of authentication used to connect to the OData service. */
  authenticationType?: ODataAuthenticationType;
  /** User name of the OData service. Type: string (or Expression with resultType string). */
  userName?: Record<string, unknown>;
  /** Password of the OData service. */
  password?: SecretBaseUnion;
  /** The additional HTTP headers in the request to RESTful API used for authorization. Type: object (or Expression with resultType object). */
  authHeaders?: Record<string, unknown>;
  /** Specify the tenant information (domain name or tenant ID) under which your application resides. Type: string (or Expression with resultType string). */
  tenant?: Record<string, unknown>;
  /** Specify the application id of your application registered in Azure Active Directory. Type: string (or Expression with resultType string). */
  servicePrincipalId?: Record<string, unknown>;
  /** Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regions’ cloud type. Type: string (or Expression with resultType string). */
  azureCloudType?: Record<string, unknown>;
  /** Specify the resource you are requesting authorization to use Directory. Type: string (or Expression with resultType string). */
  aadResourceId?: Record<string, unknown>;
  /** Specify the credential type (key or cert) is used for service principal. */
  aadServicePrincipalCredentialType?: ODataAadServicePrincipalCredentialType;
  /** Specify the secret of your application registered in Azure Active Directory. Type: string (or Expression with resultType string). */
  servicePrincipalKey?: SecretBaseUnion;
  /** Specify the base64 encoded certificate of your application registered in Azure Active Directory. Type: string (or Expression with resultType string). */
  servicePrincipalEmbeddedCert?: SecretBaseUnion;
  /** Specify the password of your certificate if your certificate has a password and you are using AadServicePrincipal authentication. Type: string (or Expression with resultType string). */
  servicePrincipalEmbeddedCertPassword?: SecretBaseUnion;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
}

/** Web linked service. */
export interface WebLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "Web";
  /** Web linked service properties. */
  typeProperties: WebLinkedServiceTypePropertiesUnion;
}

/** Linked service for Cassandra data source. */
export interface CassandraLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "Cassandra";
  /** Host name for connection. Type: string (or Expression with resultType string). */
  host: Record<string, unknown>;
  /** AuthenticationType to be used for connection. Type: string (or Expression with resultType string). */
  authenticationType?: Record<string, unknown>;
  /** The port for the connection. Type: integer (or Expression with resultType integer). */
  port?: Record<string, unknown>;
  /** Username for authentication. Type: string (or Expression with resultType string). */
  username?: Record<string, unknown>;
  /** Password for authentication. */
  password?: SecretBaseUnion;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
}

/** Linked service for MongoDb data source. */
export interface MongoDbLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "MongoDb";
  /** The IP address or server name of the MongoDB server. Type: string (or Expression with resultType string). */
  server: Record<string, unknown>;
  /** The authentication type to be used to connect to the MongoDB database. */
  authenticationType?: MongoDbAuthenticationType;
  /** The name of the MongoDB database that you want to access. Type: string (or Expression with resultType string). */
  databaseName: Record<string, unknown>;
  /** Username for authentication. Type: string (or Expression with resultType string). */
  username?: Record<string, unknown>;
  /** Password for authentication. */
  password?: SecretBaseUnion;
  /** Database to verify the username and password. Type: string (or Expression with resultType string). */
  authSource?: Record<string, unknown>;
  /** The TCP port number that the MongoDB server uses to listen for client connections. The default value is 27017. Type: integer (or Expression with resultType integer), minimum: 0. */
  port?: Record<string, unknown>;
  /** Specifies whether the connections to the server are encrypted using SSL. The default value is false. Type: boolean (or Expression with resultType boolean). */
  enableSsl?: Record<string, unknown>;
  /** Specifies whether to allow self-signed certificates from the server. The default value is false. Type: boolean (or Expression with resultType boolean). */
  allowSelfSignedServerCert?: Record<string, unknown>;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
}

/** Linked service for MongoDB Atlas data source. */
export interface MongoDbAtlasLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "MongoDbAtlas";
  /** The MongoDB Atlas connection string. Type: string, SecureString or AzureKeyVaultSecretReference. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString: Record<string, unknown>;
  /** The name of the MongoDB Atlas database that you want to access. Type: string (or Expression with resultType string). */
  database: Record<string, unknown>;
}

/** Linked service for MongoDB data source. */
export interface MongoDbV2LinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "MongoDbV2";
  /** The MongoDB connection string. Type: string, SecureString or AzureKeyVaultSecretReference. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString: Record<string, unknown>;
  /** The name of the MongoDB database that you want to access. Type: string (or Expression with resultType string). */
  database: Record<string, unknown>;
}

/** Linked service for CosmosDB (MongoDB API) data source. */
export interface CosmosDbMongoDbApiLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "CosmosDbMongoDbApi";
  /** Whether the CosmosDB (MongoDB API) server version is higher than 3.2. The default value is false. Type: boolean (or Expression with resultType boolean). */
  isServerVersionAbove32?: Record<string, unknown>;
  /** The CosmosDB (MongoDB API) connection string. Type: string, SecureString or AzureKeyVaultSecretReference. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString: Record<string, unknown>;
  /** The name of the CosmosDB (MongoDB API) database that you want to access. Type: string (or Expression with resultType string). */
  database: Record<string, unknown>;
}

/** Azure Data Lake Store linked service. */
export interface AzureDataLakeStoreLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AzureDataLakeStore";
  /** Data Lake Store service URI. Type: string (or Expression with resultType string). */
  dataLakeStoreUri: Record<string, unknown>;
  /** The ID of the application used to authenticate against the Azure Data Lake Store account. Type: string (or Expression with resultType string). */
  servicePrincipalId?: Record<string, unknown>;
  /** The Key of the application used to authenticate against the Azure Data Lake Store account. */
  servicePrincipalKey?: SecretBaseUnion;
  /** The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string). */
  tenant?: Record<string, unknown>;
  /** Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regions’ cloud type. Type: string (or Expression with resultType string). */
  azureCloudType?: Record<string, unknown>;
  /** Data Lake Store account name. Type: string (or Expression with resultType string). */
  accountName?: Record<string, unknown>;
  /** Data Lake Store account subscription ID (if different from Data Factory account). Type: string (or Expression with resultType string). */
  subscriptionId?: Record<string, unknown>;
  /** Data Lake Store account resource group name (if different from Data Factory account). Type: string (or Expression with resultType string). */
  resourceGroupName?: Record<string, unknown>;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
  /** The credential reference containing authentication information. */
  credential?: CredentialReference;
}

/** Azure Data Lake Storage Gen2 linked service. */
export interface AzureBlobFSLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AzureBlobFS";
  /** Endpoint for the Azure Data Lake Storage Gen2 service. Type: string (or Expression with resultType string). */
  url: Record<string, unknown>;
  /** Account key for the Azure Data Lake Storage Gen2 service. Type: string (or Expression with resultType string). */
  accountKey?: Record<string, unknown>;
  /** The ID of the application used to authenticate against the Azure Data Lake Storage Gen2 account. Type: string (or Expression with resultType string). */
  servicePrincipalId?: Record<string, unknown>;
  /** The Key of the application used to authenticate against the Azure Data Lake Storage Gen2 account. */
  servicePrincipalKey?: SecretBaseUnion;
  /** The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string). */
  tenant?: Record<string, unknown>;
  /** Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regions’ cloud type. Type: string (or Expression with resultType string). */
  azureCloudType?: Record<string, unknown>;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
  /** The credential reference containing authentication information. */
  credential?: CredentialReference;
}

/** Office365 linked service. */
export interface Office365LinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "Office365";
  /** Azure tenant ID to which the Office 365 account belongs. Type: string (or Expression with resultType string). */
  office365TenantId: Record<string, unknown>;
  /** Specify the tenant information under which your Azure AD web application resides. Type: string (or Expression with resultType string). */
  servicePrincipalTenantId: Record<string, unknown>;
  /** Specify the application's client ID. Type: string (or Expression with resultType string). */
  servicePrincipalId: Record<string, unknown>;
  /** Specify the application's key. */
  servicePrincipalKey: SecretBaseUnion;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
}

/** Linked service for Salesforce. */
export interface SalesforceLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "Salesforce";
  /** The URL of Salesforce instance. Default is 'https://login.salesforce.com'. To copy data from sandbox, specify 'https://test.salesforce.com'. To copy data from custom domain, specify, for example, 'https://[domain].my.salesforce.com'. Type: string (or Expression with resultType string). */
  environmentUrl?: Record<string, unknown>;
  /** The username for Basic authentication of the Salesforce instance. Type: string (or Expression with resultType string). */
  username?: Record<string, unknown>;
  /** The password for Basic authentication of the Salesforce instance. */
  password?: SecretBaseUnion;
  /** The security token is optional to remotely access Salesforce instance. */
  securityToken?: SecretBaseUnion;
  /** The Salesforce API version used in ADF. Type: string (or Expression with resultType string). */
  apiVersion?: Record<string, unknown>;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
}

/** Linked service for Salesforce Service Cloud. */
export interface SalesforceServiceCloudLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "SalesforceServiceCloud";
  /** The URL of Salesforce Service Cloud instance. Default is 'https://login.salesforce.com'. To copy data from sandbox, specify 'https://test.salesforce.com'. To copy data from custom domain, specify, for example, 'https://[domain].my.salesforce.com'. Type: string (or Expression with resultType string). */
  environmentUrl?: Record<string, unknown>;
  /** The username for Basic authentication of the Salesforce instance. Type: string (or Expression with resultType string). */
  username?: Record<string, unknown>;
  /** The password for Basic authentication of the Salesforce instance. */
  password?: SecretBaseUnion;
  /** The security token is optional to remotely access Salesforce instance. */
  securityToken?: SecretBaseUnion;
  /** The Salesforce API version used in ADF. Type: string (or Expression with resultType string). */
  apiVersion?: Record<string, unknown>;
  /** Extended properties appended to the connection string. Type: string (or Expression with resultType string). */
  extendedProperties?: Record<string, unknown>;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
}

/** Linked service for SAP Cloud for Customer. */
export interface SapCloudForCustomerLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "SapCloudForCustomer";
  /** The URL of SAP Cloud for Customer OData API. For example, '[https://[tenantname].crm.ondemand.com/sap/c4c/odata/v1]'. Type: string (or Expression with resultType string). */
  url: Record<string, unknown>;
  /** The username for Basic authentication. Type: string (or Expression with resultType string). */
  username?: Record<string, unknown>;
  /** The password for Basic authentication. */
  password?: SecretBaseUnion;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Either encryptedCredential or username/password must be provided. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
}

/** Linked service for SAP ERP Central Component(SAP ECC). */
export interface SapEccLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "SapEcc";
  /** The URL of SAP ECC OData API. For example, '[https://hostname:port/sap/opu/odata/sap/servicename/]'. Type: string (or Expression with resultType string). */
  url: string;
  /** The username for Basic authentication. Type: string (or Expression with resultType string). */
  username?: string;
  /** The password for Basic authentication. */
  password?: SecretBaseUnion;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Either encryptedCredential or username/password must be provided. Type: string (or Expression with resultType string). */
  encryptedCredential?: string;
}

/** SAP Business Warehouse Open Hub Destination Linked Service. */
export interface SapOpenHubLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "SapOpenHub";
  /** Host name of the SAP BW instance where the open hub destination is located. Type: string (or Expression with resultType string). */
  server?: Record<string, unknown>;
  /** System number of the BW system where the open hub destination is located. (Usually a two-digit decimal number represented as a string.) Type: string (or Expression with resultType string). */
  systemNumber?: Record<string, unknown>;
  /** Client ID of the client on the BW system where the open hub destination is located. (Usually a three-digit decimal number represented as a string) Type: string (or Expression with resultType string). */
  clientId?: Record<string, unknown>;
  /** Language of the BW system where the open hub destination is located. The default value is EN. Type: string (or Expression with resultType string). */
  language?: Record<string, unknown>;
  /** SystemID of the SAP system where the table is located. Type: string (or Expression with resultType string). */
  systemId?: Record<string, unknown>;
  /** Username to access the SAP BW server where the open hub destination is located. Type: string (or Expression with resultType string). */
  userName?: Record<string, unknown>;
  /** Password to access the SAP BW server where the open hub destination is located. */
  password?: SecretBaseUnion;
  /** The hostname of the SAP Message Server. Type: string (or Expression with resultType string). */
  messageServer?: Record<string, unknown>;
  /** The service name or port number of the Message Server. Type: string (or Expression with resultType string). */
  messageServerService?: Record<string, unknown>;
  /** The Logon Group for the SAP System. Type: string (or Expression with resultType string). */
  logonGroup?: Record<string, unknown>;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
}

/** Rest Service linked service. */
export interface RestServiceLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "RestService";
  /** The base URL of the REST service. */
  url: Record<string, unknown>;
  /** Whether to validate server side SSL certificate when connecting to the endpoint.The default value is true. Type: boolean (or Expression with resultType boolean). */
  enableServerCertificateValidation?: Record<string, unknown>;
  /** Type of authentication used to connect to the REST service. */
  authenticationType: RestServiceAuthenticationType;
  /** The user name used in Basic authentication type. */
  userName?: Record<string, unknown>;
  /** The password used in Basic authentication type. */
  password?: SecretBaseUnion;
  /** The additional HTTP headers in the request to RESTful API used for authorization. Type: object (or Expression with resultType object). */
  authHeaders?: Record<string, unknown>;
  /** The application's client ID used in AadServicePrincipal authentication type. */
  servicePrincipalId?: Record<string, unknown>;
  /** The application's key used in AadServicePrincipal authentication type. */
  servicePrincipalKey?: SecretBaseUnion;
  /** The tenant information (domain name or tenant ID) used in AadServicePrincipal authentication type under which your application resides. */
  tenant?: Record<string, unknown>;
  /** Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regions’ cloud type. Type: string (or Expression with resultType string). */
  azureCloudType?: Record<string, unknown>;
  /** The resource you are requesting authorization to use. */
  aadResourceId?: Record<string, unknown>;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
  /** The credential reference containing authentication information. */
  credential?: CredentialReference;
}

/** Linked service for Amazon S3. */
export interface AmazonS3LinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AmazonS3";
  /** The authentication type of S3. Allowed value: AccessKey (default) or TemporarySecurityCredentials. Type: string (or Expression with resultType string). */
  authenticationType?: Record<string, unknown>;
  /** The access key identifier of the Amazon S3 Identity and Access Management (IAM) user. Type: string (or Expression with resultType string). */
  accessKeyId?: Record<string, unknown>;
  /** The secret access key of the Amazon S3 Identity and Access Management (IAM) user. */
  secretAccessKey?: SecretBaseUnion;
  /** This value specifies the endpoint to access with the S3 Connector. This is an optional property; change it only if you want to try a different service endpoint or want to switch between https and http. Type: string (or Expression with resultType string). */
  serviceUrl?: Record<string, unknown>;
  /** The session token for the S3 temporary security credential. */
  sessionToken?: SecretBaseUnion;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
}

/** Linked service for Amazon Redshift. */
export interface AmazonRedshiftLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AmazonRedshift";
  /** The name of the Amazon Redshift server. Type: string (or Expression with resultType string). */
  server: Record<string, unknown>;
  /** The username of the Amazon Redshift source. Type: string (or Expression with resultType string). */
  username?: Record<string, unknown>;
  /** The password of the Amazon Redshift source. */
  password?: SecretBaseUnion;
  /** The database name of the Amazon Redshift source. Type: string (or Expression with resultType string). */
  database: Record<string, unknown>;
  /** The TCP port number that the Amazon Redshift server uses to listen for client connections. The default value is 5439. Type: integer (or Expression with resultType integer). */
  port?: Record<string, unknown>;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
}

/** Custom linked service. */
export interface CustomDataSourceLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "CustomDataSource";
  /** Custom linked service properties. */
  typeProperties: Record<string, unknown>;
}

/** Linked service for Windows Azure Search Service. */
export interface AzureSearchLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AzureSearch";
  /** URL for Azure Search service. Type: string (or Expression with resultType string). */
  url: Record<string, unknown>;
  /** Admin Key for Azure Search service */
  key?: SecretBaseUnion;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
}

/** Linked service for an HTTP source. */
export interface HttpLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "HttpServer";
  /** The base URL of the HTTP endpoint, e.g. http://www.microsoft.com. Type: string (or Expression with resultType string). */
  url: Record<string, unknown>;
  /** The authentication type to be used to connect to the HTTP server. */
  authenticationType?: HttpAuthenticationType;
  /** User name for Basic, Digest, or Windows authentication. Type: string (or Expression with resultType string). */
  userName?: Record<string, unknown>;
  /** Password for Basic, Digest, Windows, or ClientCertificate with EmbeddedCertData authentication. */
  password?: SecretBaseUnion;
  /** The additional HTTP headers in the request to RESTful API used for authorization. Type: object (or Expression with resultType object). */
  authHeaders?: Record<string, unknown>;
  /** Base64 encoded certificate data for ClientCertificate authentication. For on-premises copy with ClientCertificate authentication, either CertThumbprint or EmbeddedCertData/Password should be specified. Type: string (or Expression with resultType string). */
  embeddedCertData?: Record<string, unknown>;
  /** Thumbprint of certificate for ClientCertificate authentication. Only valid for on-premises copy. For on-premises copy with ClientCertificate authentication, either CertThumbprint or EmbeddedCertData/Password should be specified. Type: string (or Expression with resultType string). */
  certThumbprint?: Record<string, unknown>;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
  /** If true, validate the HTTPS server SSL certificate. Default value is true. Type: boolean (or Expression with resultType boolean). */
  enableServerCertificateValidation?: Record<string, unknown>;
}

/** A FTP server Linked Service. */
export interface FtpServerLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "FtpServer";
  /** Host name of the FTP server. Type: string (or Expression with resultType string). */
  host: Record<string, unknown>;
  /** The TCP port number that the FTP server uses to listen for client connections. Default value is 21. Type: integer (or Expression with resultType integer), minimum: 0. */
  port?: Record<string, unknown>;
  /** The authentication type to be used to connect to the FTP server. */
  authenticationType?: FtpAuthenticationType;
  /** Username to logon the FTP server. Type: string (or Expression with resultType string). */
  userName?: Record<string, unknown>;
  /** Password to logon the FTP server. */
  password?: SecretBaseUnion;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
  /** If true, connect to the FTP server over SSL/TLS channel. Default value is true. Type: boolean (or Expression with resultType boolean). */
  enableSsl?: Record<string, unknown>;
  /** If true, validate the FTP server SSL certificate when connect over SSL/TLS channel. Default value is true. Type: boolean (or Expression with resultType boolean). */
  enableServerCertificateValidation?: Record<string, unknown>;
}

/** A linked service for an SSH File Transfer Protocol (SFTP) server. */
export interface SftpServerLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "Sftp";
  /** The SFTP server host name. Type: string (or Expression with resultType string). */
  host: Record<string, unknown>;
  /** The TCP port number that the SFTP server uses to listen for client connections. Default value is 22. Type: integer (or Expression with resultType integer), minimum: 0. */
  port?: Record<string, unknown>;
  /** The authentication type to be used to connect to the FTP server. */
  authenticationType?: SftpAuthenticationType;
  /** The username used to log on to the SFTP server. Type: string (or Expression with resultType string). */
  userName?: Record<string, unknown>;
  /** Password to logon the SFTP server for Basic authentication. */
  password?: SecretBaseUnion;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
  /** The SSH private key file path for SshPublicKey authentication. Only valid for on-premises copy. For on-premises copy with SshPublicKey authentication, either PrivateKeyPath or PrivateKeyContent should be specified. SSH private key should be OpenSSH format. Type: string (or Expression with resultType string). */
  privateKeyPath?: Record<string, unknown>;
  /** Base64 encoded SSH private key content for SshPublicKey authentication. For on-premises copy with SshPublicKey authentication, either PrivateKeyPath or PrivateKeyContent should be specified. SSH private key should be OpenSSH format. */
  privateKeyContent?: SecretBaseUnion;
  /** The password to decrypt the SSH private key if the SSH private key is encrypted. */
  passPhrase?: SecretBaseUnion;
  /** If true, skip the SSH host key validation. Default value is false. Type: boolean (or Expression with resultType boolean). */
  skipHostKeyValidation?: Record<string, unknown>;
  /** The host key finger-print of the SFTP server. When SkipHostKeyValidation is false, HostKeyFingerprint should be specified. Type: string (or Expression with resultType string). */
  hostKeyFingerprint?: Record<string, unknown>;
}

/** SAP Business Warehouse Linked Service. */
export interface SapBWLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "SapBW";
  /** Host name of the SAP BW instance. Type: string (or Expression with resultType string). */
  server: Record<string, unknown>;
  /** System number of the BW system. (Usually a two-digit decimal number represented as a string.) Type: string (or Expression with resultType string). */
  systemNumber: Record<string, unknown>;
  /** Client ID of the client on the BW system. (Usually a three-digit decimal number represented as a string) Type: string (or Expression with resultType string). */
  clientId: Record<string, unknown>;
  /** Username to access the SAP BW server. Type: string (or Expression with resultType string). */
  userName?: Record<string, unknown>;
  /** Password to access the SAP BW server. */
  password?: SecretBaseUnion;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
}

/** SAP HANA Linked Service. */
export interface SapHanaLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "SapHana";
  /** SAP HANA ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString?: Record<string, unknown>;
  /** Host name of the SAP HANA server. Type: string (or Expression with resultType string). */
  server?: Record<string, unknown>;
  /** The authentication type to be used to connect to the SAP HANA server. */
  authenticationType?: SapHanaAuthenticationType;
  /** Username to access the SAP HANA server. Type: string (or Expression with resultType string). */
  userName?: Record<string, unknown>;
  /** Password to access the SAP HANA server. */
  password?: SecretBaseUnion;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
}

/** Amazon Marketplace Web Service linked service. */
export interface AmazonMWSLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AmazonMWS";
  /** The endpoint of the Amazon MWS server, (i.e. mws.amazonservices.com) */
  endpoint: Record<string, unknown>;
  /** The Amazon Marketplace ID you want to retrieve data from. To retrieve data from multiple Marketplace IDs, separate them with a comma (,). (i.e. A2EUQ1WTGCTBG2) */
  marketplaceID: Record<string, unknown>;
  /** The Amazon seller ID. */
  sellerID: Record<string, unknown>;
  /** The Amazon MWS authentication token. */
  mwsAuthToken?: SecretBaseUnion;
  /** The access key id used to access data. */
  accessKeyId: Record<string, unknown>;
  /** The secret key used to access data. */
  secretKey?: SecretBaseUnion;
  /** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. */
  useEncryptedEndpoints?: Record<string, unknown>;
  /** Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. */
  useHostVerification?: Record<string, unknown>;
  /** Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. */
  usePeerVerification?: Record<string, unknown>;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
}

/** Azure PostgreSQL linked service. */
export interface AzurePostgreSqlLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AzurePostgreSql";
  /** An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString?: Record<string, unknown>;
  /** The Azure key vault secret reference of password in connection string. */
  password?: AzureKeyVaultSecretReference;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
}

/** Concur Service linked service. */
export interface ConcurLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "Concur";
  /** Properties used to connect to Concur. It is mutually exclusive with any other properties in the linked service. Type: object. */
  connectionProperties?: Record<string, unknown>;
  /** Application client_id supplied by Concur App Management. */
  clientId: Record<string, unknown>;
  /** The user name that you use to access Concur Service. */
  username: Record<string, unknown>;
  /** The password corresponding to the user name that you provided in the username field. */
  password?: SecretBaseUnion;
  /** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. */
  useEncryptedEndpoints?: Record<string, unknown>;
  /** Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. */
  useHostVerification?: Record<string, unknown>;
  /** Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. */
  usePeerVerification?: Record<string, unknown>;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
}

/** Couchbase server linked service. */
export interface CouchbaseLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "Couchbase";
  /** An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString?: Record<string, unknown>;
  /** The Azure key vault secret reference of credString in connection string. */
  credString?: AzureKeyVaultSecretReference;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
}

/** Drill server linked service. */
export interface DrillLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "Drill";
  /** An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString?: Record<string, unknown>;
  /** The Azure key vault secret reference of password in connection string. */
  pwd?: AzureKeyVaultSecretReference;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
}

/** Eloqua server linked service. */
export interface EloquaLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "Eloqua";
  /** The endpoint of the Eloqua server. (i.e. eloqua.example.com) */
  endpoint: Record<string, unknown>;
  /** The site name and user name of your Eloqua account in the form: sitename/username. (i.e. Eloqua/Alice) */
  username: Record<string, unknown>;
  /** The password corresponding to the user name. */
  password?: SecretBaseUnion;
  /** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. */
  useEncryptedEndpoints?: Record<string, unknown>;
  /** Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. */
  useHostVerification?: Record<string, unknown>;
  /** Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. */
  usePeerVerification?: Record<string, unknown>;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
}

/** Google BigQuery service linked service. */
export interface GoogleBigQueryLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "GoogleBigQuery";
  /** The default BigQuery project to query against. */
  project: Record<string, unknown>;
  /** A comma-separated list of public BigQuery projects to access. */
  additionalProjects?: Record<string, unknown>;
  /** Whether to request access to Google Drive. Allowing Google Drive access enables support for federated tables that combine BigQuery data with data from Google Drive. The default value is false. */
  requestGoogleDriveScope?: Record<string, unknown>;
  /** The OAuth 2.0 authentication mechanism used for authentication. ServiceAuthentication can only be used on self-hosted IR. */
  authenticationType: GoogleBigQueryAuthenticationType;
  /** The refresh token obtained from Google for authorizing access to BigQuery for UserAuthentication. */
  refreshToken?: SecretBaseUnion;
  /** The client id of the google application used to acquire the refresh token. Type: string (or Expression with resultType string). */
  clientId?: Record<string, unknown>;
  /** The client secret of the google application used to acquire the refresh token. */
  clientSecret?: SecretBaseUnion;
  /** The service account email ID that is used for ServiceAuthentication and can only be used on self-hosted IR. */
  email?: Record<string, unknown>;
  /** The full path to the .p12 key file that is used to authenticate the service account email address and can only be used on self-hosted IR. */
  keyFilePath?: Record<string, unknown>;
  /** The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR. */
  trustedCertPath?: Record<string, unknown>;
  /** Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false. */
  useSystemTrustStore?: Record<string, unknown>;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
}

/** Greenplum Database linked service. */
export interface GreenplumLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "Greenplum";
  /** An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString?: Record<string, unknown>;
  /** The Azure key vault secret reference of password in connection string. */
  pwd?: AzureKeyVaultSecretReference;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
}

/** HBase server linked service. */
export interface HBaseLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "HBase";
  /** The IP address or host name of the HBase server. (i.e. 192.168.222.160) */
  host: Record<string, unknown>;
  /** The TCP port that the HBase instance uses to listen for client connections. The default value is 9090. */
  port?: Record<string, unknown>;
  /** The partial URL corresponding to the HBase server. (i.e. /gateway/sandbox/hbase/version) */
  httpPath?: Record<string, unknown>;
  /** The authentication mechanism to use to connect to the HBase server. */
  authenticationType: HBaseAuthenticationType;
  /** The user name used to connect to the HBase instance. */
  username?: Record<string, unknown>;
  /** The password corresponding to the user name. */
  password?: SecretBaseUnion;
  /** Specifies whether the connections to the server are encrypted using SSL. The default value is false. */
  enableSsl?: Record<string, unknown>;
  /** The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR. */
  trustedCertPath?: Record<string, unknown>;
  /** Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false. */
  allowHostNameCNMismatch?: Record<string, unknown>;
  /** Specifies whether to allow self-signed certificates from the server. The default value is false. */
  allowSelfSignedServerCert?: Record<string, unknown>;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
}

/** Hive Server linked service. */
export interface HiveLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "Hive";
  /** IP address or host name of the Hive server, separated by ';' for multiple hosts (only when serviceDiscoveryMode is enable). */
  host: Record<string, unknown>;
  /** The TCP port that the Hive server uses to listen for client connections. */
  port?: Record<string, unknown>;
  /** The type of Hive server. */
  serverType?: HiveServerType;
  /** The transport protocol to use in the Thrift layer. */
  thriftTransportProtocol?: HiveThriftTransportProtocol;
  /** The authentication method used to access the Hive server. */
  authenticationType: HiveAuthenticationType;
  /** true to indicate using the ZooKeeper service, false not. */
  serviceDiscoveryMode?: Record<string, unknown>;
  /** The namespace on ZooKeeper under which Hive Server 2 nodes are added. */
  zooKeeperNameSpace?: Record<string, unknown>;
  /** Specifies whether the driver uses native HiveQL queries,or converts them into an equivalent form in HiveQL. */
  useNativeQuery?: Record<string, unknown>;
  /** The user name that you use to access Hive Server. */
  username?: Record<string, unknown>;
  /** The password corresponding to the user name that you provided in the Username field */
  password?: SecretBaseUnion;
  /** The partial URL corresponding to the Hive server. */
  httpPath?: Record<string, unknown>;
  /** Specifies whether the connections to the server are encrypted using SSL. The default value is false. */
  enableSsl?: Record<string, unknown>;
  /** The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR. */
  trustedCertPath?: Record<string, unknown>;
  /** Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false. */
  useSystemTrustStore?: Record<string, unknown>;
  /** Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false. */
  allowHostNameCNMismatch?: Record<string, unknown>;
  /** Specifies whether to allow self-signed certificates from the server. The default value is false. */
  allowSelfSignedServerCert?: Record<string, unknown>;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
}

/** Hubspot Service linked service. */
export interface HubspotLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "Hubspot";
  /** The client ID associated with your Hubspot application. */
  clientId: Record<string, unknown>;
  /** The client secret associated with your Hubspot application. */
  clientSecret?: SecretBaseUnion;
  /** The access token obtained when initially authenticating your OAuth integration. */
  accessToken?: SecretBaseUnion;
  /** The refresh token obtained when initially authenticating your OAuth integration. */
  refreshToken?: SecretBaseUnion;
  /** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. */
  useEncryptedEndpoints?: Record<string, unknown>;
  /** Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. */
  useHostVerification?: Record<string, unknown>;
  /** Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. */
  usePeerVerification?: Record<string, unknown>;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
}

/** Impala server linked service. */
export interface ImpalaLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "Impala";
  /** The IP address or host name of the Impala server. (i.e. 192.168.222.160) */
  host: Record<string, unknown>;
  /** The TCP port that the Impala server uses to listen for client connections. The default value is 21050. */
  port?: Record<string, unknown>;
  /** The authentication type to use. */
  authenticationType: ImpalaAuthenticationType;
  /** The user name used to access the Impala server. The default value is anonymous when using SASLUsername. */
  username?: Record<string, unknown>;
  /** The password corresponding to the user name when using UsernameAndPassword. */
  password?: SecretBaseUnion;
  /** Specifies whether the connections to the server are encrypted using SSL. The default value is false. */
  enableSsl?: Record<string, unknown>;
  /** The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR. */
  trustedCertPath?: Record<string, unknown>;
  /** Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false. */
  useSystemTrustStore?: Record<string, unknown>;
  /** Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false. */
  allowHostNameCNMismatch?: Record<string, unknown>;
  /** Specifies whether to allow self-signed certificates from the server. The default value is false. */
  allowSelfSignedServerCert?: Record<string, unknown>;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
}

/** Jira Service linked service. */
export interface JiraLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "Jira";
  /** The IP address or host name of the Jira service. (e.g. jira.example.com) */
  host: Record<string, unknown>;
  /** The TCP port that the Jira server uses to listen for client connections. The default value is 443 if connecting through HTTPS, or 8080 if connecting through HTTP. */
  port?: Record<string, unknown>;
  /** The user name that you use to access Jira Service. */
  username: Record<string, unknown>;
  /** The password corresponding to the user name that you provided in the username field. */
  password?: SecretBaseUnion;
  /** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. */
  useEncryptedEndpoints?: Record<string, unknown>;
  /** Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. */
  useHostVerification?: Record<string, unknown>;
  /** Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. */
  usePeerVerification?: Record<string, unknown>;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
}

/** Magento server linked service. */
export interface MagentoLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "Magento";
  /** The URL of the Magento instance. (i.e. 192.168.222.110/magento3) */
  host: Record<string, unknown>;
  /** The access token from Magento. */
  accessToken?: SecretBaseUnion;
  /** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. */
  useEncryptedEndpoints?: Record<string, unknown>;
  /** Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. */
  useHostVerification?: Record<string, unknown>;
  /** Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. */
  usePeerVerification?: Record<string, unknown>;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
}

/** MariaDB server linked service. */
export interface MariaDBLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "MariaDB";
  /** An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString?: Record<string, unknown>;
  /** The Azure key vault secret reference of password in connection string. */
  pwd?: AzureKeyVaultSecretReference;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
}

/** Azure Database for MariaDB linked service. */
export interface AzureMariaDBLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AzureMariaDB";
  /** An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString?: Record<string, unknown>;
  /** The Azure key vault secret reference of password in connection string. */
  pwd?: AzureKeyVaultSecretReference;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
}

/** Marketo server linked service. */
export interface MarketoLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "Marketo";
  /** The endpoint of the Marketo server. (i.e. 123-ABC-321.mktorest.com) */
  endpoint: Record<string, unknown>;
  /** The client Id of your Marketo service. */
  clientId: Record<string, unknown>;
  /** The client secret of your Marketo service. */
  clientSecret?: SecretBaseUnion;
  /** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. */
  useEncryptedEndpoints?: Record<string, unknown>;
  /** Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. */
  useHostVerification?: Record<string, unknown>;
  /** Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. */
  usePeerVerification?: Record<string, unknown>;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
}

/** Paypal Service linked service. */
export interface PaypalLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "Paypal";
  /** The URL of the PayPal instance. (i.e. api.sandbox.paypal.com) */
  host: Record<string, unknown>;
  /** The client ID associated with your PayPal application. */
  clientId: Record<string, unknown>;
  /** The client secret associated with your PayPal application. */
  clientSecret?: SecretBaseUnion;
  /** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. */
  useEncryptedEndpoints?: Record<string, unknown>;
  /** Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. */
  useHostVerification?: Record<string, unknown>;
  /** Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. */
  usePeerVerification?: Record<string, unknown>;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
}

/** Phoenix server linked service. */
export interface PhoenixLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "Phoenix";
  /** The IP address or host name of the Phoenix server. (i.e. 192.168.222.160) */
  host: Record<string, unknown>;
  /** The TCP port that the Phoenix server uses to listen for client connections. The default value is 8765. */
  port?: Record<string, unknown>;
  /** The partial URL corresponding to the Phoenix server. (i.e. /gateway/sandbox/phoenix/version). The default value is hbasephoenix if using WindowsAzureHDInsightService. */
  httpPath?: Record<string, unknown>;
  /** The authentication mechanism used to connect to the Phoenix server. */
  authenticationType: PhoenixAuthenticationType;
  /** The user name used to connect to the Phoenix server. */
  username?: Record<string, unknown>;
  /** The password corresponding to the user name. */
  password?: SecretBaseUnion;
  /** Specifies whether the connections to the server are encrypted using SSL. The default value is false. */
  enableSsl?: Record<string, unknown>;
  /** The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR. */
  trustedCertPath?: Record<string, unknown>;
  /** Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false. */
  useSystemTrustStore?: Record<string, unknown>;
  /** Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false. */
  allowHostNameCNMismatch?: Record<string, unknown>;
  /** Specifies whether to allow self-signed certificates from the server. The default value is false. */
  allowSelfSignedServerCert?: Record<string, unknown>;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
}

/** Presto server linked service. */
export interface PrestoLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "Presto";
  /** The IP address or host name of the Presto server. (i.e. 192.168.222.160) */
  host: Record<string, unknown>;
  /** The version of the Presto server. (i.e. 0.148-t) */
  serverVersion: Record<string, unknown>;
  /** The catalog context for all request against the server. */
  catalog: Record<string, unknown>;
  /** The TCP port that the Presto server uses to listen for client connections. The default value is 8080. */
  port?: Record<string, unknown>;
  /** The authentication mechanism used to connect to the Presto server. */
  authenticationType: PrestoAuthenticationType;
  /** The user name used to connect to the Presto server. */
  username?: Record<string, unknown>;
  /** The password corresponding to the user name. */
  password?: SecretBaseUnion;
  /** Specifies whether the connections to the server are encrypted using SSL. The default value is false. */
  enableSsl?: Record<string, unknown>;
  /** The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR. */
  trustedCertPath?: Record<string, unknown>;
  /** Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false. */
  useSystemTrustStore?: Record<string, unknown>;
  /** Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false. */
  allowHostNameCNMismatch?: Record<string, unknown>;
  /** Specifies whether to allow self-signed certificates from the server. The default value is false. */
  allowSelfSignedServerCert?: Record<string, unknown>;
  /** The local time zone used by the connection. Valid values for this option are specified in the IANA Time Zone Database. The default value is the system time zone. */
  timeZoneID?: Record<string, unknown>;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
}

/** QuickBooks server linked service. */
export interface QuickBooksLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "QuickBooks";
  /** Properties used to connect to QuickBooks. It is mutually exclusive with any other properties in the linked service. Type: object. */
  connectionProperties?: Record<string, unknown>;
  /** The endpoint of the QuickBooks server. (i.e. quickbooks.api.intuit.com) */
  endpoint?: Record<string, unknown>;
  /** The company ID of the QuickBooks company to authorize. */
  companyId?: Record<string, unknown>;
  /** The consumer key for OAuth 1.0 authentication. */
  consumerKey?: Record<string, unknown>;
  /** The consumer secret for OAuth 1.0 authentication. */
  consumerSecret?: SecretBaseUnion;
  /** The access token for OAuth 1.0 authentication. */
  accessToken?: SecretBaseUnion;
  /** The access token secret for OAuth 1.0 authentication. */
  accessTokenSecret?: SecretBaseUnion;
  /** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. */
  useEncryptedEndpoints?: Record<string, unknown>;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
}

/** ServiceNow server linked service. */
export interface ServiceNowLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "ServiceNow";
  /** The endpoint of the ServiceNow server. (i.e. <instance>.service-now.com) */
  endpoint: Record<string, unknown>;
  /** The authentication type to use. */
  authenticationType: ServiceNowAuthenticationType;
  /** The user name used to connect to the ServiceNow server for Basic and OAuth2 authentication. */
  username?: Record<string, unknown>;
  /** The password corresponding to the user name for Basic and OAuth2 authentication. */
  password?: SecretBaseUnion;
  /** The client id for OAuth2 authentication. */
  clientId?: Record<string, unknown>;
  /** The client secret for OAuth2 authentication. */
  clientSecret?: SecretBaseUnion;
  /** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. */
  useEncryptedEndpoints?: Record<string, unknown>;
  /** Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. */
  useHostVerification?: Record<string, unknown>;
  /** Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. */
  usePeerVerification?: Record<string, unknown>;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
}

/** Shopify Service linked service. */
export interface ShopifyLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "Shopify";
  /** The endpoint of the Shopify server. (i.e. mystore.myshopify.com) */
  host: Record<string, unknown>;
  /** The API access token that can be used to access Shopify’s data. The token won't expire if it is offline mode. */
  accessToken?: SecretBaseUnion;
  /** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. */
  useEncryptedEndpoints?: Record<string, unknown>;
  /** Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. */
  useHostVerification?: Record<string, unknown>;
  /** Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. */
  usePeerVerification?: Record<string, unknown>;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
}

/** Spark Server linked service. */
export interface SparkLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "Spark";
  /** IP address or host name of the Spark server */
  host: Record<string, unknown>;
  /** The TCP port that the Spark server uses to listen for client connections. */
  port: Record<string, unknown>;
  /** The type of Spark server. */
  serverType?: SparkServerType;
  /** The transport protocol to use in the Thrift layer. */
  thriftTransportProtocol?: SparkThriftTransportProtocol;
  /** The authentication method used to access the Spark server. */
  authenticationType: SparkAuthenticationType;
  /** The user name that you use to access Spark Server. */
  username?: Record<string, unknown>;
  /** The password corresponding to the user name that you provided in the Username field */
  password?: SecretBaseUnion;
  /** The partial URL corresponding to the Spark server. */
  httpPath?: Record<string, unknown>;
  /** Specifies whether the connections to the server are encrypted using SSL. The default value is false. */
  enableSsl?: Record<string, unknown>;
  /** The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR. */
  trustedCertPath?: Record<string, unknown>;
  /** Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false. */
  useSystemTrustStore?: Record<string, unknown>;
  /** Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false. */
  allowHostNameCNMismatch?: Record<string, unknown>;
  /** Specifies whether to allow self-signed certificates from the server. The default value is false. */
  allowSelfSignedServerCert?: Record<string, unknown>;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
}

/** Square Service linked service. */
export interface SquareLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "Square";
  /** Properties used to connect to Square. It is mutually exclusive with any other properties in the linked service. Type: object. */
  connectionProperties?: Record<string, unknown>;
  /** The URL of the Square instance. (i.e. mystore.mysquare.com) */
  host?: Record<string, unknown>;
  /** The client ID associated with your Square application. */
  clientId?: Record<string, unknown>;
  /** The client secret associated with your Square application. */
  clientSecret?: SecretBaseUnion;
  /** The redirect URL assigned in the Square application dashboard. (i.e. http://localhost:2500) */
  redirectUri?: Record<string, unknown>;
  /** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. */
  useEncryptedEndpoints?: Record<string, unknown>;
  /** Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. */
  useHostVerification?: Record<string, unknown>;
  /** Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. */
  usePeerVerification?: Record<string, unknown>;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
}

/** Xero Service linked service. */
export interface XeroLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "Xero";
  /** Properties used to connect to Xero. It is mutually exclusive with any other properties in the linked service. Type: object. */
  connectionProperties?: Record<string, unknown>;
  /** The endpoint of the Xero server. (i.e. api.xero.com) */
  host?: Record<string, unknown>;
  /** The consumer key associated with the Xero application. */
  consumerKey?: SecretBaseUnion;
  /**
   * The private key from the .pem file that was generated for your Xero private application. You must include all the text from the .pem file, including the Unix line endings(
   * ).
   */
  privateKey?: SecretBaseUnion;
  /** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. */
  useEncryptedEndpoints?: Record<string, unknown>;
  /** Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. */
  useHostVerification?: Record<string, unknown>;
  /** Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. */
  usePeerVerification?: Record<string, unknown>;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
}

/** Zoho server linked service. */
export interface ZohoLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "Zoho";
  /** Properties used to connect to Zoho. It is mutually exclusive with any other properties in the linked service. Type: object. */
  connectionProperties?: Record<string, unknown>;
  /** The endpoint of the Zoho server. (i.e. crm.zoho.com/crm/private) */
  endpoint?: Record<string, unknown>;
  /** The access token for Zoho authentication. */
  accessToken?: SecretBaseUnion;
  /** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. */
  useEncryptedEndpoints?: Record<string, unknown>;
  /** Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. */
  useHostVerification?: Record<string, unknown>;
  /** Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. */
  usePeerVerification?: Record<string, unknown>;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
}

/** Vertica linked service. */
export interface VerticaLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "Vertica";
  /** An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString?: Record<string, unknown>;
  /** The Azure key vault secret reference of password in connection string. */
  pwd?: AzureKeyVaultSecretReference;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
}

/** Netezza linked service. */
export interface NetezzaLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "Netezza";
  /** An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString?: Record<string, unknown>;
  /** The Azure key vault secret reference of password in connection string. */
  pwd?: AzureKeyVaultSecretReference;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
}

/** Salesforce Marketing Cloud linked service. */
export interface SalesforceMarketingCloudLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "SalesforceMarketingCloud";
  /** Properties used to connect to Salesforce Marketing Cloud. It is mutually exclusive with any other properties in the linked service. Type: object. */
  connectionProperties?: Record<string, unknown>;
  /** The client ID associated with the Salesforce Marketing Cloud application. Type: string (or Expression with resultType string). */
  clientId?: Record<string, unknown>;
  /** The client secret associated with the Salesforce Marketing Cloud application. Type: string (or Expression with resultType string). */
  clientSecret?: SecretBaseUnion;
  /** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. Type: boolean (or Expression with resultType boolean). */
  useEncryptedEndpoints?: Record<string, unknown>;
  /** Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. Type: boolean (or Expression with resultType boolean). */
  useHostVerification?: Record<string, unknown>;
  /** Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. Type: boolean (or Expression with resultType boolean). */
  usePeerVerification?: Record<string, unknown>;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
}

/** HDInsight ondemand linked service. */
export interface HDInsightOnDemandLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "HDInsightOnDemand";
  /** Number of worker/data nodes in the cluster. Suggestion value: 4. Type: string (or Expression with resultType string). */
  clusterSize: Record<string, unknown>;
  /** The allowed idle time for the on-demand HDInsight cluster. Specifies how long the on-demand HDInsight cluster stays alive after completion of an activity run if there are no other active jobs in the cluster. The minimum value is 5 mins. Type: string (or Expression with resultType string). */
  timeToLive: Record<string, unknown>;
  /** Version of the HDInsight cluster.  Type: string (or Expression with resultType string). */
  version: Record<string, unknown>;
  /** Azure Storage linked service to be used by the on-demand cluster for storing and processing data. */
  linkedServiceName: LinkedServiceReference;
  /** The customer’s subscription to host the cluster. Type: string (or Expression with resultType string). */
  hostSubscriptionId: Record<string, unknown>;
  /** The service principal id for the hostSubscriptionId. Type: string (or Expression with resultType string). */
  servicePrincipalId?: Record<string, unknown>;
  /** The key for the service principal id. */
  servicePrincipalKey?: SecretBaseUnion;
  /** The Tenant id/name to which the service principal belongs. Type: string (or Expression with resultType string). */
  tenant: Record<string, unknown>;
  /** The resource group where the cluster belongs. Type: string (or Expression with resultType string). */
  clusterResourceGroup: Record<string, unknown>;
  /** The prefix of cluster name, postfix will be distinct with timestamp. Type: string (or Expression with resultType string). */
  clusterNamePrefix?: Record<string, unknown>;
  /** The username to access the cluster. Type: string (or Expression with resultType string). */
  clusterUserName?: Record<string, unknown>;
  /** The password to access the cluster. */
  clusterPassword?: SecretBaseUnion;
  /** The username to SSH remotely connect to cluster’s node (for Linux). Type: string (or Expression with resultType string). */
  clusterSshUserName?: Record<string, unknown>;
  /** The password to SSH remotely connect cluster’s node (for Linux). */
  clusterSshPassword?: SecretBaseUnion;
  /** Specifies additional storage accounts for the HDInsight linked service so that the Data Factory service can register them on your behalf. */
  additionalLinkedServiceNames?: LinkedServiceReference[];
  /** The name of Azure SQL linked service that point to the HCatalog database. The on-demand HDInsight cluster is created by using the Azure SQL database as the metastore. */
  hcatalogLinkedServiceName?: LinkedServiceReference;
  /** The cluster type. Type: string (or Expression with resultType string). */
  clusterType?: Record<string, unknown>;
  /** The version of spark if the cluster type is 'spark'. Type: string (or Expression with resultType string). */
  sparkVersion?: Record<string, unknown>;
  /** Specifies the core configuration parameters (as in core-site.xml) for the HDInsight cluster to be created. */
  coreConfiguration?: Record<string, unknown>;
  /** Specifies the HBase configuration parameters (hbase-site.xml) for the HDInsight cluster. */
  hBaseConfiguration?: Record<string, unknown>;
  /** Specifies the HDFS configuration parameters (hdfs-site.xml) for the HDInsight cluster. */
  hdfsConfiguration?: Record<string, unknown>;
  /** Specifies the hive configuration parameters (hive-site.xml) for the HDInsight cluster. */
  hiveConfiguration?: Record<string, unknown>;
  /** Specifies the MapReduce configuration parameters (mapred-site.xml) for the HDInsight cluster. */
  mapReduceConfiguration?: Record<string, unknown>;
  /** Specifies the Oozie configuration parameters (oozie-site.xml) for the HDInsight cluster. */
  oozieConfiguration?: Record<string, unknown>;
  /** Specifies the Storm configuration parameters (storm-site.xml) for the HDInsight cluster. */
  stormConfiguration?: Record<string, unknown>;
  /** Specifies the Yarn configuration parameters (yarn-site.xml) for the HDInsight cluster. */
  yarnConfiguration?: Record<string, unknown>;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
  /** Specifies the size of the head node for the HDInsight cluster. */
  headNodeSize?: Record<string, unknown>;
  /** Specifies the size of the data node for the HDInsight cluster. */
  dataNodeSize?: Record<string, unknown>;
  /** Specifies the size of the Zoo Keeper node for the HDInsight cluster. */
  zookeeperNodeSize?: Record<string, unknown>;
  /** Custom script actions to run on HDI ondemand cluster once it's up. Please refer to https://docs.microsoft.com/en-us/azure/hdinsight/hdinsight-hadoop-customize-cluster-linux?toc=%2Fen-us%2Fazure%2Fhdinsight%2Fr-server%2FTOC.json&bc=%2Fen-us%2Fazure%2Fbread%2Ftoc.json#understanding-script-actions. */
  scriptActions?: ScriptAction[];
  /** The ARM resource ID for the vNet to which the cluster should be joined after creation. Type: string (or Expression with resultType string). */
  virtualNetworkId?: Record<string, unknown>;
  /** The ARM resource ID for the subnet in the vNet. If virtualNetworkId was specified, then this property is required. Type: string (or Expression with resultType string). */
  subnetName?: Record<string, unknown>;
  /** The credential reference containing authentication information. */
  credential?: CredentialReference;
}

/** Azure Data Lake Analytics linked service. */
export interface AzureDataLakeAnalyticsLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AzureDataLakeAnalytics";
  /** The Azure Data Lake Analytics account name. Type: string (or Expression with resultType string). */
  accountName: Record<string, unknown>;
  /** The ID of the application used to authenticate against the Azure Data Lake Analytics account. Type: string (or Expression with resultType string). */
  servicePrincipalId?: Record<string, unknown>;
  /** The Key of the application used to authenticate against the Azure Data Lake Analytics account. */
  servicePrincipalKey?: SecretBaseUnion;
  /** The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string). */
  tenant: Record<string, unknown>;
  /** Data Lake Analytics account subscription ID (if different from Data Factory account). Type: string (or Expression with resultType string). */
  subscriptionId?: Record<string, unknown>;
  /** Data Lake Analytics account resource group name (if different from Data Factory account). Type: string (or Expression with resultType string). */
  resourceGroupName?: Record<string, unknown>;
  /** Azure Data Lake Analytics URI Type: string (or Expression with resultType string). */
  dataLakeAnalyticsUri?: Record<string, unknown>;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
}

/** Azure Databricks linked service. */
export interface AzureDatabricksLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AzureDatabricks";
  /** <REGION>.azuredatabricks.net, domain name of your Databricks deployment. Type: string (or Expression with resultType string). */
  domain: Record<string, unknown>;
  /** Access token for databricks REST API. Refer to https://docs.azuredatabricks.net/api/latest/authentication.html. Type: string (or Expression with resultType string). */
  accessToken?: SecretBaseUnion;
  /** Required to specify MSI, if using Workspace resource id for databricks REST API. Type: string (or Expression with resultType string). */
  authentication?: Record<string, unknown>;
  /** Workspace resource id for databricks REST API. Type: string (or Expression with resultType string). */
  workspaceResourceId?: Record<string, unknown>;
  /** The id of an existing interactive cluster that will be used for all runs of this activity. Type: string (or Expression with resultType string). */
  existingClusterId?: Record<string, unknown>;
  /** The id of an existing instance pool that will be used for all runs of this activity. Type: string (or Expression with resultType string). */
  instancePoolId?: Record<string, unknown>;
  /** If not using an existing interactive cluster, this specifies the Spark version of a new job cluster or instance pool nodes created for each run of this activity. Required if instancePoolId is specified. Type: string (or Expression with resultType string). */
  newClusterVersion?: Record<string, unknown>;
  /** If not using an existing interactive cluster, this specifies the number of worker nodes to use for the new job cluster or instance pool. For new job clusters, this a string-formatted Int32, like '1' means numOfWorker is 1 or '1:10' means auto-scale from 1 (min) to 10 (max). For instance pools, this is a string-formatted Int32, and can only specify a fixed number of worker nodes, such as '2'. Required if newClusterVersion is specified. Type: string (or Expression with resultType string). */
  newClusterNumOfWorker?: Record<string, unknown>;
  /** The node type of the new job cluster. This property is required if newClusterVersion is specified and instancePoolId is not specified. If instancePoolId is specified, this property is ignored. Type: string (or Expression with resultType string). */
  newClusterNodeType?: Record<string, unknown>;
  /** A set of optional, user-specified Spark configuration key-value pairs. */
  newClusterSparkConf?: { [propertyName: string]: Record<string, unknown> };
  /** A set of optional, user-specified Spark environment variables key-value pairs. */
  newClusterSparkEnvVars?: { [propertyName: string]: Record<string, unknown> };
  /** Additional tags for cluster resources. This property is ignored in instance pool configurations. */
  newClusterCustomTags?: { [propertyName: string]: Record<string, unknown> };
  /** Specify a location to deliver Spark driver, worker, and event logs. Type: string (or Expression with resultType string). */
  newClusterLogDestination?: Record<string, unknown>;
  /** The driver node type for the new job cluster. This property is ignored in instance pool configurations. Type: string (or Expression with resultType string). */
  newClusterDriverNodeType?: Record<string, unknown>;
  /** User-defined initialization scripts for the new cluster. Type: array of strings (or Expression with resultType array of strings). */
  newClusterInitScripts?: Record<string, unknown>;
  /** Enable the elastic disk on the new cluster. This property is now ignored, and takes the default elastic disk behavior in Databricks (elastic disks are always enabled). Type: boolean (or Expression with resultType boolean). */
  newClusterEnableElasticDisk?: Record<string, unknown>;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
  /** The policy id for limiting the ability to configure clusters based on a user defined set of rules. Type: string (or Expression with resultType string). */
  policyId?: Record<string, unknown>;
  /** The credential reference containing authentication information. */
  credential?: CredentialReference;
}

/** Azure Databricks Delta Lake linked service. */
export interface AzureDatabricksDeltaLakeLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AzureDatabricksDeltaLake";
  /** <REGION>.azuredatabricks.net, domain name of your Databricks deployment. Type: string (or Expression with resultType string). */
  domain: Record<string, unknown>;
  /** Access token for databricks REST API. Refer to https://docs.azuredatabricks.net/api/latest/authentication.html. Type: string, SecureString or AzureKeyVaultSecretReference. */
  accessToken?: SecretBaseUnion;
  /** The id of an existing interactive cluster that will be used for all runs of this job. Type: string (or Expression with resultType string). */
  clusterId?: Record<string, unknown>;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
}

/** Responsys linked service. */
export interface ResponsysLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "Responsys";
  /** The endpoint of the Responsys server. */
  endpoint: Record<string, unknown>;
  /** The client ID associated with the Responsys application. Type: string (or Expression with resultType string). */
  clientId: Record<string, unknown>;
  /** The client secret associated with the Responsys application. Type: string (or Expression with resultType string). */
  clientSecret?: SecretBaseUnion;
  /** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. Type: boolean (or Expression with resultType boolean). */
  useEncryptedEndpoints?: Record<string, unknown>;
  /** Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. Type: boolean (or Expression with resultType boolean). */
  useHostVerification?: Record<string, unknown>;
  /** Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. Type: boolean (or Expression with resultType boolean). */
  usePeerVerification?: Record<string, unknown>;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
}

/** Dynamics AX linked service. */
export interface DynamicsAXLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "DynamicsAX";
  /** The Dynamics AX (or Dynamics 365 Finance and Operations) instance OData endpoint. */
  url: Record<string, unknown>;
  /** Specify the application's client ID. Type: string (or Expression with resultType string). */
  servicePrincipalId: Record<string, unknown>;
  /** Specify the application's key. Mark this field as a SecureString to store it securely in Data Factory, or reference a secret stored in Azure Key Vault. Type: string (or Expression with resultType string). */
  servicePrincipalKey: SecretBaseUnion;
  /** Specify the tenant information (domain name or tenant ID) under which your application resides. Retrieve it by hovering the mouse in the top-right corner of the Azure portal. Type: string (or Expression with resultType string). */
  tenant: Record<string, unknown>;
  /** Specify the resource you are requesting authorization. Type: string (or Expression with resultType string). */
  aadResourceId: Record<string, unknown>;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
}

/** Oracle Service Cloud linked service. */
export interface OracleServiceCloudLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "OracleServiceCloud";
  /** The URL of the Oracle Service Cloud instance. */
  host: Record<string, unknown>;
  /** The user name that you use to access Oracle Service Cloud server. */
  username: Record<string, unknown>;
  /** The password corresponding to the user name that you provided in the username key. */
  password: SecretBaseUnion;
  /** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. Type: boolean (or Expression with resultType boolean). */
  useEncryptedEndpoints?: Record<string, unknown>;
  /** Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. Type: boolean (or Expression with resultType boolean). */
  useHostVerification?: Record<string, unknown>;
  /** Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. Type: boolean (or Expression with resultType boolean). */
  usePeerVerification?: Record<string, unknown>;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
}

/** Google AdWords service linked service. */
export interface GoogleAdWordsLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "GoogleAdWords";
  /** The Client customer ID of the AdWords account that you want to fetch report data for. */
  clientCustomerID: Record<string, unknown>;
  /** The developer token associated with the manager account that you use to grant access to the AdWords API. */
  developerToken: SecretBaseUnion;
  /** The OAuth 2.0 authentication mechanism used for authentication. ServiceAuthentication can only be used on self-hosted IR. */
  authenticationType: GoogleAdWordsAuthenticationType;
  /** The refresh token obtained from Google for authorizing access to AdWords for UserAuthentication. */
  refreshToken?: SecretBaseUnion;
  /** The client id of the google application used to acquire the refresh token. Type: string (or Expression with resultType string). */
  clientId?: Record<string, unknown>;
  /** The client secret of the google application used to acquire the refresh token. */
  clientSecret?: SecretBaseUnion;
  /** The service account email ID that is used for ServiceAuthentication and can only be used on self-hosted IR. */
  email?: Record<string, unknown>;
  /** The full path to the .p12 key file that is used to authenticate the service account email address and can only be used on self-hosted IR. */
  keyFilePath?: Record<string, unknown>;
  /** The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR. */
  trustedCertPath?: Record<string, unknown>;
  /** Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false. */
  useSystemTrustStore?: Record<string, unknown>;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
}

/** SAP Table Linked Service. */
export interface SapTableLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "SapTable";
  /** Host name of the SAP instance where the table is located. Type: string (or Expression with resultType string). */
  server?: Record<string, unknown>;
  /** System number of the SAP system where the table is located. (Usually a two-digit decimal number represented as a string.) Type: string (or Expression with resultType string). */
  systemNumber?: Record<string, unknown>;
  /** Client ID of the client on the SAP system where the table is located. (Usually a three-digit decimal number represented as a string) Type: string (or Expression with resultType string). */
  clientId?: Record<string, unknown>;
  /** Language of the SAP system where the table is located. The default value is EN. Type: string (or Expression with resultType string). */
  language?: Record<string, unknown>;
  /** SystemID of the SAP system where the table is located. Type: string (or Expression with resultType string). */
  systemId?: Record<string, unknown>;
  /** Username to access the SAP server where the table is located. Type: string (or Expression with resultType string). */
  userName?: Record<string, unknown>;
  /** Password to access the SAP server where the table is located. */
  password?: SecretBaseUnion;
  /** The hostname of the SAP Message Server. Type: string (or Expression with resultType string). */
  messageServer?: Record<string, unknown>;
  /** The service name or port number of the Message Server. Type: string (or Expression with resultType string). */
  messageServerService?: Record<string, unknown>;
  /** SNC activation indicator to access the SAP server where the table is located. Must be either 0 (off) or 1 (on). Type: string (or Expression with resultType string). */
  sncMode?: Record<string, unknown>;
  /** Initiator's SNC name to access the SAP server where the table is located. Type: string (or Expression with resultType string). */
  sncMyName?: Record<string, unknown>;
  /** Communication partner's SNC name to access the SAP server where the table is located. Type: string (or Expression with resultType string). */
  sncPartnerName?: Record<string, unknown>;
  /** External security product's library to access the SAP server where the table is located. Type: string (or Expression with resultType string). */
  sncLibraryPath?: Record<string, unknown>;
  /** SNC Quality of Protection. Allowed value include: 1, 2, 3, 8, 9. Type: string (or Expression with resultType string). */
  sncQop?: Record<string, unknown>;
  /** The Logon Group for the SAP System. Type: string (or Expression with resultType string). */
  logonGroup?: Record<string, unknown>;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
}

/** Azure Data Explorer (Kusto) linked service. */
export interface AzureDataExplorerLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AzureDataExplorer";
  /** The endpoint of Azure Data Explorer (the engine's endpoint). URL will be in the format https://<clusterName>.<regionName>.kusto.windows.net. Type: string (or Expression with resultType string) */
  endpoint: Record<string, unknown>;
  /** The ID of the service principal used to authenticate against Azure Data Explorer. Type: string (or Expression with resultType string). */
  servicePrincipalId?: Record<string, unknown>;
  /** The key of the service principal used to authenticate against Kusto. */
  servicePrincipalKey?: SecretBaseUnion;
  /** Database name for connection. Type: string (or Expression with resultType string). */
  database: Record<string, unknown>;
  /** The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string). */
  tenant?: Record<string, unknown>;
  /** The credential reference containing authentication information. */
  credential?: CredentialReference;
}

/** Azure Function linked service. */
export interface AzureFunctionLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AzureFunction";
  /** The endpoint of the Azure Function App. URL will be in the format https://<accountName>.azurewebsites.net. */
  functionAppUrl: Record<string, unknown>;
  /** Function or Host key for Azure Function App. */
  functionKey?: SecretBaseUnion;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
  /** The credential reference containing authentication information. */
  credential?: CredentialReference;
  /** Allowed token audiences for azure function. */
  resourceId?: Record<string, unknown>;
  /** Type of authentication (Required to specify MSI) used to connect to AzureFunction. Type: string (or Expression with resultType string). */
  authentication?: Record<string, unknown>;
}

/** Snowflake linked service. */
export interface SnowflakeLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "Snowflake";
  /** The connection string of snowflake. Type: string, SecureString. */
  connectionString: Record<string, unknown>;
  /** The Azure key vault secret reference of password in connection string. */
  password?: AzureKeyVaultSecretReference;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
}

/** SharePoint Online List linked service. */
export interface SharePointOnlineListLinkedService extends LinkedService {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "SharePointOnlineList";
  /** The URL of the SharePoint Online site. For example, https://contoso.sharepoint.com/sites/siteName. Type: string (or Expression with resultType string). */
  siteUrl: Record<string, unknown>;
  /** The tenant ID under which your application resides. You can find it from Azure portal Active Directory overview page. Type: string (or Expression with resultType string). */
  tenantId: Record<string, unknown>;
  /** The application (client) ID of your application registered in Azure Active Directory. Make sure to grant SharePoint site permission to this application. Type: string (or Expression with resultType string). */
  servicePrincipalId: Record<string, unknown>;
  /** The client secret of your application registered in Azure Active Directory. Type: string (or Expression with resultType string). */
  servicePrincipalKey: SecretBaseUnion;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: Record<string, unknown>;
}

/** A single Amazon Simple Storage Service (S3) object or a set of S3 objects. */
export interface AmazonS3Dataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AmazonS3Object";
  /** The name of the Amazon S3 bucket. Type: string (or Expression with resultType string). */
  bucketName: Record<string, unknown>;
  /** The key of the Amazon S3 object. Type: string (or Expression with resultType string). */
  key?: Record<string, unknown>;
  /** The prefix filter for the S3 object name. Type: string (or Expression with resultType string). */
  prefix?: Record<string, unknown>;
  /** The version for the S3 object. Type: string (or Expression with resultType string). */
  version?: Record<string, unknown>;
  /** The start of S3 object's modified datetime. Type: string (or Expression with resultType string). */
  modifiedDatetimeStart?: Record<string, unknown>;
  /** The end of S3 object's modified datetime. Type: string (or Expression with resultType string). */
  modifiedDatetimeEnd?: Record<string, unknown>;
  /** The format of files. */
  format?: DatasetStorageFormatUnion;
  /** The data compression method used for the Amazon S3 object. */
  compression?: DatasetCompressionUnion;
}

/** Avro dataset. */
export interface AvroDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "Avro";
  /** The location of the avro storage. */
  location?: DatasetLocationUnion;
  /** The data avroCompressionCodec. Type: string (or Expression with resultType string). */
  avroCompressionCodec?: Record<string, unknown>;
  avroCompressionLevel?: number;
}

/** Excel dataset. */
export interface ExcelDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "Excel";
  /** The location of the excel storage. */
  location?: DatasetLocationUnion;
  /** The sheet name of excel file. Type: string (or Expression with resultType string). */
  sheetName?: Record<string, unknown>;
  /** The sheet index of excel file and default value is 0. Type: integer (or Expression with resultType integer) */
  sheetIndex?: Record<string, unknown>;
  /** The partial data of one sheet. Type: string (or Expression with resultType string). */
  range?: Record<string, unknown>;
  /** When used as input, treat the first row of data as headers. When used as output,write the headers into the output as the first row of data. The default value is false. Type: boolean (or Expression with resultType boolean). */
  firstRowAsHeader?: Record<string, unknown>;
  /** The data compression method used for the json dataset. */
  compression?: DatasetCompressionUnion;
  /** The null value string. Type: string (or Expression with resultType string). */
  nullValue?: Record<string, unknown>;
}

/** Parquet dataset. */
export interface ParquetDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "Parquet";
  /** The location of the parquet storage. */
  location?: DatasetLocationUnion;
  /** The data compressionCodec. Type: string (or Expression with resultType string). */
  compressionCodec?: Record<string, unknown>;
}

/** Delimited text dataset. */
export interface DelimitedTextDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "DelimitedText";
  /** The location of the delimited text storage. */
  location?: DatasetLocationUnion;
  /** The column delimiter. Type: string (or Expression with resultType string). */
  columnDelimiter?: Record<string, unknown>;
  /** The row delimiter. Type: string (or Expression with resultType string). */
  rowDelimiter?: Record<string, unknown>;
  /** The code page name of the preferred encoding. If miss, the default value is UTF-8, unless BOM denotes another Unicode encoding. Refer to the name column of the table in the following link to set supported values: https://msdn.microsoft.com/library/system.text.encoding.aspx. Type: string (or Expression with resultType string). */
  encodingName?: Record<string, unknown>;
  /** The data compressionCodec. Type: string (or Expression with resultType string). */
  compressionCodec?: Record<string, unknown>;
  /** The data compression method used for DelimitedText. */
  compressionLevel?: Record<string, unknown>;
  /** The quote character. Type: string (or Expression with resultType string). */
  quoteChar?: Record<string, unknown>;
  /** The escape character. Type: string (or Expression with resultType string). */
  escapeChar?: Record<string, unknown>;
  /** When used as input, treat the first row of data as headers. When used as output,write the headers into the output as the first row of data. The default value is false. Type: boolean (or Expression with resultType boolean). */
  firstRowAsHeader?: Record<string, unknown>;
  /** The null value string. Type: string (or Expression with resultType string). */
  nullValue?: Record<string, unknown>;
}

/** Json dataset. */
export interface JsonDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "Json";
  /** The location of the json data storage. */
  location?: DatasetLocationUnion;
  /** The code page name of the preferred encoding. If not specified, the default value is UTF-8, unless BOM denotes another Unicode encoding. Refer to the name column of the table in the following link to set supported values: https://msdn.microsoft.com/library/system.text.encoding.aspx. Type: string (or Expression with resultType string). */
  encodingName?: Record<string, unknown>;
  /** The data compression method used for the json dataset. */
  compression?: DatasetCompressionUnion;
}

/** Xml dataset. */
export interface XmlDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "Xml";
  /** The location of the json data storage. */
  location?: DatasetLocationUnion;
  /** The code page name of the preferred encoding. If not specified, the default value is UTF-8, unless BOM denotes another Unicode encoding. Refer to the name column of the table in the following link to set supported values: https://msdn.microsoft.com/library/system.text.encoding.aspx. Type: string (or Expression with resultType string). */
  encodingName?: Record<string, unknown>;
  /** The null value string. Type: string (or Expression with resultType string). */
  nullValue?: Record<string, unknown>;
  /** The data compression method used for the json dataset. */
  compression?: DatasetCompressionUnion;
}

/** ORC dataset. */
export interface OrcDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "Orc";
  /** The location of the ORC data storage. */
  location?: DatasetLocationUnion;
  /** The data orcCompressionCodec. Type: string (or Expression with resultType string). */
  orcCompressionCodec?: Record<string, unknown>;
}

/** Binary dataset. */
export interface BinaryDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "Binary";
  /** The location of the Binary storage. */
  location?: DatasetLocationUnion;
  /** The data compression method used for the binary dataset. */
  compression?: DatasetCompressionUnion;
}

/** The Azure Blob storage. */
export interface AzureBlobDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AzureBlob";
  /** The path of the Azure Blob storage. Type: string (or Expression with resultType string). */
  folderPath?: Record<string, unknown>;
  /** The root of blob path. Type: string (or Expression with resultType string). */
  tableRootLocation?: Record<string, unknown>;
  /** The name of the Azure Blob. Type: string (or Expression with resultType string). */
  fileName?: Record<string, unknown>;
  /** The start of Azure Blob's modified datetime. Type: string (or Expression with resultType string). */
  modifiedDatetimeStart?: Record<string, unknown>;
  /** The end of Azure Blob's modified datetime. Type: string (or Expression with resultType string). */
  modifiedDatetimeEnd?: Record<string, unknown>;
  /** The format of the Azure Blob storage. */
  format?: DatasetStorageFormatUnion;
  /** The data compression method used for the blob storage. */
  compression?: DatasetCompressionUnion;
}

/** The Azure Table storage dataset. */
export interface AzureTableDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AzureTable";
  /** The table name of the Azure Table storage. Type: string (or Expression with resultType string). */
  tableName: Record<string, unknown>;
}

/** The Azure SQL Server database dataset. */
export interface AzureSqlTableDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AzureSqlTable";
  /** This property will be retired. Please consider using schema + table properties instead. */
  tableName?: Record<string, unknown>;
  /** The schema name of the Azure SQL database. Type: string (or Expression with resultType string). */
  schemaTypePropertiesSchema?: Record<string, unknown>;
  /** The table name of the Azure SQL database. Type: string (or Expression with resultType string). */
  table?: Record<string, unknown>;
}

/** The Azure SQL Managed Instance dataset. */
export interface AzureSqlMITableDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AzureSqlMITable";
  /** This property will be retired. Please consider using schema + table properties instead. */
  tableName?: Record<string, unknown>;
  /** The schema name of the Azure SQL Managed Instance. Type: string (or Expression with resultType string). */
  schemaTypePropertiesSchema?: Record<string, unknown>;
  /** The table name of the Azure SQL Managed Instance dataset. Type: string (or Expression with resultType string). */
  table?: Record<string, unknown>;
}

/** The Azure SQL Data Warehouse dataset. */
export interface AzureSqlDWTableDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AzureSqlDWTable";
  /** This property will be retired. Please consider using schema + table properties instead. */
  tableName?: Record<string, unknown>;
  /** The schema name of the Azure SQL Data Warehouse. Type: string (or Expression with resultType string). */
  schemaTypePropertiesSchema?: Record<string, unknown>;
  /** The table name of the Azure SQL Data Warehouse. Type: string (or Expression with resultType string). */
  table?: Record<string, unknown>;
}

/** The Cassandra database dataset. */
export interface CassandraTableDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "CassandraTable";
  /** The table name of the Cassandra database. Type: string (or Expression with resultType string). */
  tableName?: Record<string, unknown>;
  /** The keyspace of the Cassandra database. Type: string (or Expression with resultType string). */
  keyspace?: Record<string, unknown>;
}

/** The custom dataset. */
export interface CustomDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "CustomDataset";
  /** Custom dataset properties. */
  typeProperties?: Record<string, unknown>;
}

/** Microsoft Azure CosmosDB (SQL API) Collection dataset. */
export interface CosmosDbSqlApiCollectionDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "CosmosDbSqlApiCollection";
  /** CosmosDB (SQL API) collection name. Type: string (or Expression with resultType string). */
  collectionName: Record<string, unknown>;
}

/** Microsoft Azure Document Database Collection dataset. */
export interface DocumentDbCollectionDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "DocumentDbCollection";
  /** Document Database collection name. Type: string (or Expression with resultType string). */
  collectionName: Record<string, unknown>;
}

/** The Dynamics entity dataset. */
export interface DynamicsEntityDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "DynamicsEntity";
  /** The logical name of the entity. Type: string (or Expression with resultType string). */
  entityName?: Record<string, unknown>;
}

/** The Dynamics CRM entity dataset. */
export interface DynamicsCrmEntityDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "DynamicsCrmEntity";
  /** The logical name of the entity. Type: string (or Expression with resultType string). */
  entityName?: Record<string, unknown>;
}

/** The Common Data Service for Apps entity dataset. */
export interface CommonDataServiceForAppsEntityDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "CommonDataServiceForAppsEntity";
  /** The logical name of the entity. Type: string (or Expression with resultType string). */
  entityName?: Record<string, unknown>;
}

/** Azure Data Lake Store dataset. */
export interface AzureDataLakeStoreDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AzureDataLakeStoreFile";
  /** Path to the folder in the Azure Data Lake Store. Type: string (or Expression with resultType string). */
  folderPath?: Record<string, unknown>;
  /** The name of the file in the Azure Data Lake Store. Type: string (or Expression with resultType string). */
  fileName?: Record<string, unknown>;
  /** The format of the Data Lake Store. */
  format?: DatasetStorageFormatUnion;
  /** The data compression method used for the item(s) in the Azure Data Lake Store. */
  compression?: DatasetCompressionUnion;
}

/** The Azure Data Lake Storage Gen2 storage. */
export interface AzureBlobFSDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AzureBlobFSFile";
  /** The path of the Azure Data Lake Storage Gen2 storage. Type: string (or Expression with resultType string). */
  folderPath?: Record<string, unknown>;
  /** The name of the Azure Data Lake Storage Gen2. Type: string (or Expression with resultType string). */
  fileName?: Record<string, unknown>;
  /** The format of the Azure Data Lake Storage Gen2 storage. */
  format?: DatasetStorageFormatUnion;
  /** The data compression method used for the blob storage. */
  compression?: DatasetCompressionUnion;
}

/** The Office365 account. */
export interface Office365Dataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "Office365Table";
  /** Name of the dataset to extract from Office 365. Type: string (or Expression with resultType string). */
  tableName: Record<string, unknown>;
  /** A predicate expression that can be used to filter the specific rows to extract from Office 365. Type: string (or Expression with resultType string). */
  predicate?: Record<string, unknown>;
}

/** An on-premises file system dataset. */
export interface FileShareDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "FileShare";
  /** The path of the on-premises file system. Type: string (or Expression with resultType string). */
  folderPath?: Record<string, unknown>;
  /** The name of the on-premises file system. Type: string (or Expression with resultType string). */
  fileName?: Record<string, unknown>;
  /** The start of file's modified datetime. Type: string (or Expression with resultType string). */
  modifiedDatetimeStart?: Record<string, unknown>;
  /** The end of file's modified datetime. Type: string (or Expression with resultType string). */
  modifiedDatetimeEnd?: Record<string, unknown>;
  /** The format of the files. */
  format?: DatasetStorageFormatUnion;
  /** Specify a filter to be used to select a subset of files in the folderPath rather than all files. Type: string (or Expression with resultType string). */
  fileFilter?: Record<string, unknown>;
  /** The data compression method used for the file system. */
  compression?: DatasetCompressionUnion;
}

/** The MongoDB database dataset. */
export interface MongoDbCollectionDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "MongoDbCollection";
  /** The table name of the MongoDB database. Type: string (or Expression with resultType string). */
  collectionName: Record<string, unknown>;
}

/** The MongoDB Atlas database dataset. */
export interface MongoDbAtlasCollectionDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "MongoDbAtlasCollection";
  /** The collection name of the MongoDB Atlas database. Type: string (or Expression with resultType string). */
  collection: Record<string, unknown>;
}

/** The MongoDB database dataset. */
export interface MongoDbV2CollectionDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "MongoDbV2Collection";
  /** The collection name of the MongoDB database. Type: string (or Expression with resultType string). */
  collection: Record<string, unknown>;
}

/** The CosmosDB (MongoDB API) database dataset. */
export interface CosmosDbMongoDbApiCollectionDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "CosmosDbMongoDbApiCollection";
  /** The collection name of the CosmosDB (MongoDB API) database. Type: string (or Expression with resultType string). */
  collection: Record<string, unknown>;
}

/** The Open Data Protocol (OData) resource dataset. */
export interface ODataResourceDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "ODataResource";
  /** The OData resource path. Type: string (or Expression with resultType string). */
  path?: Record<string, unknown>;
}

/** The on-premises Oracle database dataset. */
export interface OracleTableDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "OracleTable";
  /** This property will be retired. Please consider using schema + table properties instead. */
  tableName?: Record<string, unknown>;
  /** The schema name of the on-premises Oracle database. Type: string (or Expression with resultType string). */
  schemaTypePropertiesSchema?: Record<string, unknown>;
  /** The table name of the on-premises Oracle database. Type: string (or Expression with resultType string). */
  table?: Record<string, unknown>;
}

/** The AmazonRdsForOracle database dataset. */
export interface AmazonRdsForOracleTableDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AmazonRdsForOracleTable";
  /** The schema name of the AmazonRdsForOracle database. Type: string (or Expression with resultType string). */
  schemaTypePropertiesSchema?: Record<string, unknown>;
  /** The table name of the AmazonRdsForOracle database. Type: string (or Expression with resultType string). */
  table?: Record<string, unknown>;
}

/** The Teradata database dataset. */
export interface TeradataTableDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "TeradataTable";
  /** The database name of Teradata. Type: string (or Expression with resultType string). */
  database?: Record<string, unknown>;
  /** The table name of Teradata. Type: string (or Expression with resultType string). */
  table?: Record<string, unknown>;
}

/** The Azure MySQL database dataset. */
export interface AzureMySqlTableDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AzureMySqlTable";
  /** The Azure MySQL database table name. Type: string (or Expression with resultType string). */
  tableName?: Record<string, unknown>;
  /** The name of Azure MySQL database table. Type: string (or Expression with resultType string). */
  table?: Record<string, unknown>;
}

/** The Amazon Redshift table dataset. */
export interface AmazonRedshiftTableDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AmazonRedshiftTable";
  /** This property will be retired. Please consider using schema + table properties instead. */
  tableName?: Record<string, unknown>;
  /** The Amazon Redshift table name. Type: string (or Expression with resultType string). */
  table?: Record<string, unknown>;
  /** The Amazon Redshift schema name. Type: string (or Expression with resultType string). */
  schemaTypePropertiesSchema?: Record<string, unknown>;
}

/** The Db2 table dataset. */
export interface Db2TableDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "Db2Table";
  /** This property will be retired. Please consider using schema + table properties instead. */
  tableName?: Record<string, unknown>;
  /** The Db2 schema name. Type: string (or Expression with resultType string). */
  schemaTypePropertiesSchema?: Record<string, unknown>;
  /** The Db2 table name. Type: string (or Expression with resultType string). */
  table?: Record<string, unknown>;
}

/** The relational table dataset. */
export interface RelationalTableDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "RelationalTable";
  /** The relational table name. Type: string (or Expression with resultType string). */
  tableName?: Record<string, unknown>;
}

/** The Informix table dataset. */
export interface InformixTableDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "InformixTable";
  /** The Informix table name. Type: string (or Expression with resultType string). */
  tableName?: Record<string, unknown>;
}

/** The ODBC table dataset. */
export interface OdbcTableDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "OdbcTable";
  /** The ODBC table name. Type: string (or Expression with resultType string). */
  tableName?: Record<string, unknown>;
}

/** The MySQL table dataset. */
export interface MySqlTableDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "MySqlTable";
  /** The MySQL table name. Type: string (or Expression with resultType string). */
  tableName?: Record<string, unknown>;
}

/** The PostgreSQL table dataset. */
export interface PostgreSqlTableDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "PostgreSqlTable";
  /** This property will be retired. Please consider using schema + table properties instead. */
  tableName?: Record<string, unknown>;
  /** The PostgreSQL table name. Type: string (or Expression with resultType string). */
  table?: Record<string, unknown>;
  /** The PostgreSQL schema name. Type: string (or Expression with resultType string). */
  schemaTypePropertiesSchema?: Record<string, unknown>;
}

/** The Microsoft Access table dataset. */
export interface MicrosoftAccessTableDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "MicrosoftAccessTable";
  /** The Microsoft Access table name. Type: string (or Expression with resultType string). */
  tableName?: Record<string, unknown>;
}

/** The Salesforce object dataset. */
export interface SalesforceObjectDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "SalesforceObject";
  /** The Salesforce object API name. Type: string (or Expression with resultType string). */
  objectApiName?: Record<string, unknown>;
}

/** The Salesforce Service Cloud object dataset. */
export interface SalesforceServiceCloudObjectDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "SalesforceServiceCloudObject";
  /** The Salesforce Service Cloud object API name. Type: string (or Expression with resultType string). */
  objectApiName?: Record<string, unknown>;
}

/** The Sybase table dataset. */
export interface SybaseTableDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "SybaseTable";
  /** The Sybase table name. Type: string (or Expression with resultType string). */
  tableName?: Record<string, unknown>;
}

/** The SAP BW cube dataset. */
export interface SapBwCubeDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "SapBwCube";
}

/** The path of the SAP Cloud for Customer OData entity. */
export interface SapCloudForCustomerResourceDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "SapCloudForCustomerResource";
  /** The path of the SAP Cloud for Customer OData entity. Type: string (or Expression with resultType string). */
  path: Record<string, unknown>;
}

/** The path of the SAP ECC OData entity. */
export interface SapEccResourceDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "SapEccResource";
  /** The path of the SAP ECC OData entity. Type: string (or Expression with resultType string). */
  path: Record<string, unknown>;
}

/** SAP HANA Table properties. */
export interface SapHanaTableDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "SapHanaTable";
  /** The schema name of SAP HANA. Type: string (or Expression with resultType string). */
  schemaTypePropertiesSchema?: Record<string, unknown>;
  /** The table name of SAP HANA. Type: string (or Expression with resultType string). */
  table?: Record<string, unknown>;
}

/** Sap Business Warehouse Open Hub Destination Table properties. */
export interface SapOpenHubTableDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "SapOpenHubTable";
  /** The name of the Open Hub Destination with destination type as Database Table. Type: string (or Expression with resultType string). */
  openHubDestinationName: Record<string, unknown>;
  /** Whether to exclude the records of the last request. The default value is true. Type: boolean (or Expression with resultType boolean). */
  excludeLastRequest?: Record<string, unknown>;
  /** The ID of request for delta loading. Once it is set, only data with requestId larger than the value of this property will be retrieved. The default value is 0. Type: integer (or Expression with resultType integer ). */
  baseRequestId?: Record<string, unknown>;
}

/** The on-premises SQL Server dataset. */
export interface SqlServerTableDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "SqlServerTable";
  /** This property will be retired. Please consider using schema + table properties instead. */
  tableName?: Record<string, unknown>;
  /** The schema name of the SQL Server dataset. Type: string (or Expression with resultType string). */
  schemaTypePropertiesSchema?: Record<string, unknown>;
  /** The table name of the SQL Server dataset. Type: string (or Expression with resultType string). */
  table?: Record<string, unknown>;
}

/** The Amazon RDS for SQL Server dataset. */
export interface AmazonRdsForSqlServerTableDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AmazonRdsForSqlServerTable";
  /** The schema name of the SQL Server dataset. Type: string (or Expression with resultType string). */
  schemaTypePropertiesSchema?: Record<string, unknown>;
  /** The table name of the SQL Server dataset. Type: string (or Expression with resultType string). */
  table?: Record<string, unknown>;
}

/** A Rest service dataset. */
export interface RestResourceDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "RestResource";
  /** The relative URL to the resource that the RESTful API provides. Type: string (or Expression with resultType string). */
  relativeUrl?: Record<string, unknown>;
  /** The HTTP method used to call the RESTful API. The default is GET. Type: string (or Expression with resultType string). */
  requestMethod?: Record<string, unknown>;
  /** The HTTP request body to the RESTful API if requestMethod is POST. Type: string (or Expression with resultType string). */
  requestBody?: Record<string, unknown>;
  /** The additional HTTP headers in the request to the RESTful API. Type: string (or Expression with resultType string). */
  additionalHeaders?: Record<string, unknown>;
  /** The pagination rules to compose next page requests. Type: string (or Expression with resultType string). */
  paginationRules?: Record<string, unknown>;
}

/** SAP Table Resource properties. */
export interface SapTableResourceDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "SapTableResource";
  /** The name of the SAP Table. Type: string (or Expression with resultType string). */
  tableName: Record<string, unknown>;
}

/** The dataset points to a HTML table in the web page. */
export interface WebTableDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "WebTable";
  /** The zero-based index of the table in the web page. Type: integer (or Expression with resultType integer), minimum: 0. */
  index: Record<string, unknown>;
  /** The relative URL to the web page from the linked service URL. Type: string (or Expression with resultType string). */
  path?: Record<string, unknown>;
}

/** The Azure Search Index. */
export interface AzureSearchIndexDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AzureSearchIndex";
  /** The name of the Azure Search Index. Type: string (or Expression with resultType string). */
  indexName: Record<string, unknown>;
}

/** A file in an HTTP web server. */
export interface HttpDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "HttpFile";
  /** The relative URL based on the URL in the HttpLinkedService refers to an HTTP file Type: string (or Expression with resultType string). */
  relativeUrl?: Record<string, unknown>;
  /** The HTTP method for the HTTP request. Type: string (or Expression with resultType string). */
  requestMethod?: Record<string, unknown>;
  /** The body for the HTTP request. Type: string (or Expression with resultType string). */
  requestBody?: Record<string, unknown>;
  /**
   * The headers for the HTTP Request. e.g. request-header-name-1:request-header-value-1
   * ...
   * request-header-name-n:request-header-value-n Type: string (or Expression with resultType string).
   */
  additionalHeaders?: Record<string, unknown>;
  /** The format of files. */
  format?: DatasetStorageFormatUnion;
  /** The data compression method used on files. */
  compression?: DatasetCompressionUnion;
}

/** Amazon Marketplace Web Service dataset. */
export interface AmazonMWSObjectDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AmazonMWSObject";
  /** The table name. Type: string (or Expression with resultType string). */
  tableName?: Record<string, unknown>;
}

/** Azure PostgreSQL dataset. */
export interface AzurePostgreSqlTableDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AzurePostgreSqlTable";
  /** The table name of the Azure PostgreSQL database which includes both schema and table. Type: string (or Expression with resultType string). */
  tableName?: Record<string, unknown>;
  /** The table name of the Azure PostgreSQL database. Type: string (or Expression with resultType string). */
  table?: Record<string, unknown>;
  /** The schema name of the Azure PostgreSQL database. Type: string (or Expression with resultType string). */
  schemaTypePropertiesSchema?: Record<string, unknown>;
}

/** Concur Service dataset. */
export interface ConcurObjectDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "ConcurObject";
  /** The table name. Type: string (or Expression with resultType string). */
  tableName?: Record<string, unknown>;
}

/** Couchbase server dataset. */
export interface CouchbaseTableDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "CouchbaseTable";
  /** The table name. Type: string (or Expression with resultType string). */
  tableName?: Record<string, unknown>;
}

/** Drill server dataset. */
export interface DrillTableDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "DrillTable";
  /** This property will be retired. Please consider using schema + table properties instead. */
  tableName?: Record<string, unknown>;
  /** The table name of the Drill. Type: string (or Expression with resultType string). */
  table?: Record<string, unknown>;
  /** The schema name of the Drill. Type: string (or Expression with resultType string). */
  schemaTypePropertiesSchema?: Record<string, unknown>;
}

/** Eloqua server dataset. */
export interface EloquaObjectDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "EloquaObject";
  /** The table name. Type: string (or Expression with resultType string). */
  tableName?: Record<string, unknown>;
}

/** Google BigQuery service dataset. */
export interface GoogleBigQueryObjectDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "GoogleBigQueryObject";
  /** This property will be retired. Please consider using database + table properties instead. */
  tableName?: Record<string, unknown>;
  /** The table name of the Google BigQuery. Type: string (or Expression with resultType string). */
  table?: Record<string, unknown>;
  /** The database name of the Google BigQuery. Type: string (or Expression with resultType string). */
  dataset?: Record<string, unknown>;
}

/** Greenplum Database dataset. */
export interface GreenplumTableDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "GreenplumTable";
  /** This property will be retired. Please consider using schema + table properties instead. */
  tableName?: Record<string, unknown>;
  /** The table name of Greenplum. Type: string (or Expression with resultType string). */
  table?: Record<string, unknown>;
  /** The schema name of Greenplum. Type: string (or Expression with resultType string). */
  schemaTypePropertiesSchema?: Record<string, unknown>;
}

/** HBase server dataset. */
export interface HBaseObjectDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "HBaseObject";
  /** The table name. Type: string (or Expression with resultType string). */
  tableName?: Record<string, unknown>;
}

/** Hive Server dataset. */
export interface HiveObjectDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "HiveObject";
  /** This property will be retired. Please consider using schema + table properties instead. */
  tableName?: Record<string, unknown>;
  /** The table name of the Hive. Type: string (or Expression with resultType string). */
  table?: Record<string, unknown>;
  /** The schema name of the Hive. Type: string (or Expression with resultType string). */
  schemaTypePropertiesSchema?: Record<string, unknown>;
}

/** Hubspot Service dataset. */
export interface HubspotObjectDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "HubspotObject";
  /** The table name. Type: string (or Expression with resultType string). */
  tableName?: Record<string, unknown>;
}

/** Impala server dataset. */
export interface ImpalaObjectDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "ImpalaObject";
  /** This property will be retired. Please consider using schema + table properties instead. */
  tableName?: Record<string, unknown>;
  /** The table name of the Impala. Type: string (or Expression with resultType string). */
  table?: Record<string, unknown>;
  /** The schema name of the Impala. Type: string (or Expression with resultType string). */
  schemaTypePropertiesSchema?: Record<string, unknown>;
}

/** Jira Service dataset. */
export interface JiraObjectDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "JiraObject";
  /** The table name. Type: string (or Expression with resultType string). */
  tableName?: Record<string, unknown>;
}

/** Magento server dataset. */
export interface MagentoObjectDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "MagentoObject";
  /** The table name. Type: string (or Expression with resultType string). */
  tableName?: Record<string, unknown>;
}

/** MariaDB server dataset. */
export interface MariaDBTableDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "MariaDBTable";
  /** The table name. Type: string (or Expression with resultType string). */
  tableName?: Record<string, unknown>;
}

/** Azure Database for MariaDB dataset. */
export interface AzureMariaDBTableDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AzureMariaDBTable";
  /** The table name. Type: string (or Expression with resultType string). */
  tableName?: Record<string, unknown>;
}

/** Marketo server dataset. */
export interface MarketoObjectDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "MarketoObject";
  /** The table name. Type: string (or Expression with resultType string). */
  tableName?: Record<string, unknown>;
}

/** Paypal Service dataset. */
export interface PaypalObjectDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "PaypalObject";
  /** The table name. Type: string (or Expression with resultType string). */
  tableName?: Record<string, unknown>;
}

/** Phoenix server dataset. */
export interface PhoenixObjectDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "PhoenixObject";
  /** This property will be retired. Please consider using schema + table properties instead. */
  tableName?: Record<string, unknown>;
  /** The table name of the Phoenix. Type: string (or Expression with resultType string). */
  table?: Record<string, unknown>;
  /** The schema name of the Phoenix. Type: string (or Expression with resultType string). */
  schemaTypePropertiesSchema?: Record<string, unknown>;
}

/** Presto server dataset. */
export interface PrestoObjectDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "PrestoObject";
  /** This property will be retired. Please consider using schema + table properties instead. */
  tableName?: Record<string, unknown>;
  /** The table name of the Presto. Type: string (or Expression with resultType string). */
  table?: Record<string, unknown>;
  /** The schema name of the Presto. Type: string (or Expression with resultType string). */
  schemaTypePropertiesSchema?: Record<string, unknown>;
}

/** QuickBooks server dataset. */
export interface QuickBooksObjectDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "QuickBooksObject";
  /** The table name. Type: string (or Expression with resultType string). */
  tableName?: Record<string, unknown>;
}

/** ServiceNow server dataset. */
export interface ServiceNowObjectDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "ServiceNowObject";
  /** The table name. Type: string (or Expression with resultType string). */
  tableName?: Record<string, unknown>;
}

/** Shopify Service dataset. */
export interface ShopifyObjectDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "ShopifyObject";
  /** The table name. Type: string (or Expression with resultType string). */
  tableName?: Record<string, unknown>;
}

/** Spark Server dataset. */
export interface SparkObjectDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "SparkObject";
  /** This property will be retired. Please consider using schema + table properties instead. */
  tableName?: Record<string, unknown>;
  /** The table name of the Spark. Type: string (or Expression with resultType string). */
  table?: Record<string, unknown>;
  /** The schema name of the Spark. Type: string (or Expression with resultType string). */
  schemaTypePropertiesSchema?: Record<string, unknown>;
}

/** Square Service dataset. */
export interface SquareObjectDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "SquareObject";
  /** The table name. Type: string (or Expression with resultType string). */
  tableName?: Record<string, unknown>;
}

/** Xero Service dataset. */
export interface XeroObjectDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "XeroObject";
  /** The table name. Type: string (or Expression with resultType string). */
  tableName?: Record<string, unknown>;
}

/** Zoho server dataset. */
export interface ZohoObjectDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "ZohoObject";
  /** The table name. Type: string (or Expression with resultType string). */
  tableName?: Record<string, unknown>;
}

/** Netezza dataset. */
export interface NetezzaTableDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "NetezzaTable";
  /** This property will be retired. Please consider using schema + table properties instead. */
  tableName?: Record<string, unknown>;
  /** The table name of the Netezza. Type: string (or Expression with resultType string). */
  table?: Record<string, unknown>;
  /** The schema name of the Netezza. Type: string (or Expression with resultType string). */
  schemaTypePropertiesSchema?: Record<string, unknown>;
}

/** Vertica dataset. */
export interface VerticaTableDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "VerticaTable";
  /** This property will be retired. Please consider using schema + table properties instead. */
  tableName?: Record<string, unknown>;
  /** The table name of the Vertica. Type: string (or Expression with resultType string). */
  table?: Record<string, unknown>;
  /** The schema name of the Vertica. Type: string (or Expression with resultType string). */
  schemaTypePropertiesSchema?: Record<string, unknown>;
}

/** Salesforce Marketing Cloud dataset. */
export interface SalesforceMarketingCloudObjectDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "SalesforceMarketingCloudObject";
  /** The table name. Type: string (or Expression with resultType string). */
  tableName?: Record<string, unknown>;
}

/** Responsys dataset. */
export interface ResponsysObjectDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "ResponsysObject";
  /** The table name. Type: string (or Expression with resultType string). */
  tableName?: Record<string, unknown>;
}

/** The path of the Dynamics AX OData entity. */
export interface DynamicsAXResourceDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "DynamicsAXResource";
  /** The path of the Dynamics AX OData entity. Type: string (or Expression with resultType string). */
  path: Record<string, unknown>;
}

/** Oracle Service Cloud dataset. */
export interface OracleServiceCloudObjectDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "OracleServiceCloudObject";
  /** The table name. Type: string (or Expression with resultType string). */
  tableName?: Record<string, unknown>;
}

/** The Azure Data Explorer (Kusto) dataset. */
export interface AzureDataExplorerTableDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AzureDataExplorerTable";
  /** The table name of the Azure Data Explorer database. Type: string (or Expression with resultType string). */
  table?: Record<string, unknown>;
}

/** Google AdWords service dataset. */
export interface GoogleAdWordsObjectDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "GoogleAdWordsObject";
  /** The table name. Type: string (or Expression with resultType string). */
  tableName?: Record<string, unknown>;
}

/** The snowflake dataset. */
export interface SnowflakeDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "SnowflakeTable";
  /** The schema name of the Snowflake database. Type: string (or Expression with resultType string). */
  schemaTypePropertiesSchema?: Record<string, unknown>;
  /** The table name of the Snowflake database. Type: string (or Expression with resultType string). */
  table?: Record<string, unknown>;
}

/** The sharepoint online list resource dataset. */
export interface SharePointOnlineListResourceDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "SharePointOnlineListResource";
  /** The name of the SharePoint Online list. Type: string (or Expression with resultType string). */
  listName?: Record<string, unknown>;
}

/** Azure Databricks Delta Lake dataset. */
export interface AzureDatabricksDeltaLakeDataset extends Dataset {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AzureDatabricksDeltaLakeDataset";
  /** The name of delta table. Type: string (or Expression with resultType string). */
  table?: Record<string, unknown>;
  /** The database name of delta table. Type: string (or Expression with resultType string). */
  database?: Record<string, unknown>;
}

/** Base class for all control activities like IfCondition, ForEach , Until. */
export interface ControlActivity extends Activity {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type:
    | "Container"
    | "ExecutePipeline"
    | "IfCondition"
    | "Switch"
    | "ForEach"
    | "Wait"
    | "Until"
    | "Validation"
    | "Filter"
    | "SetVariable"
    | "AppendVariable"
    | "WebHook";
}

/** Base class for all execution activities. */
export interface ExecutionActivity extends Activity {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type:
    | "Execution"
    | "Copy"
    | "HDInsightHive"
    | "HDInsightPig"
    | "HDInsightMapReduce"
    | "HDInsightStreaming"
    | "HDInsightSpark"
    | "ExecuteSSISPackage"
    | "Custom"
    | "SqlServerStoredProcedure"
    | "Delete"
    | "AzureDataExplorerCommand"
    | "Lookup"
    | "WebActivity"
    | "GetMetadata"
    | "AzureMLBatchExecution"
    | "AzureMLUpdateResource"
    | "AzureMLExecutePipeline"
    | "DataLakeAnalyticsU-SQL"
    | "DatabricksNotebook"
    | "DatabricksSparkJar"
    | "DatabricksSparkPython"
    | "AzureFunctionActivity"
    | "ExecuteDataFlow";
  /** Linked service reference. */
  linkedServiceName?: LinkedServiceReference;
  /** Activity policy. */
  policy?: ActivityPolicy;
}

/** Execute power query activity. */
export interface ExecuteWranglingDataflowActivity extends Activity {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "ExecuteWranglingDataflow";
  /** Activity policy. */
  policy?: ActivityPolicy;
  /** Data flow reference. */
  dataFlow: DataFlowReference;
  /** Staging info for execute data flow activity. */
  staging?: DataFlowStagingInfo;
  /** The integration runtime reference. */
  integrationRuntime?: IntegrationRuntimeReference;
  /** Compute properties for data flow activity. */
  compute?: ExecuteDataFlowActivityTypePropertiesCompute;
  /** Trace level setting used for data flow monitoring output. Supported values are: 'coarse', 'fine', and 'none'. Type: string (or Expression with resultType string) */
  traceLevel?: Record<string, unknown>;
  /** Continue on error setting used for data flow execution. Enables processing to continue if a sink fails. Type: boolean (or Expression with resultType boolean) */
  continueOnError?: Record<string, unknown>;
  /** Concurrent run setting used for data flow execution. Allows sinks with the same save order to be processed concurrently. Type: boolean (or Expression with resultType boolean) */
  runConcurrently?: Record<string, unknown>;
  /** (Deprecated. Please use Queries). List of Power Query activity sinks mapped to a queryName. */
  sinks?: { [propertyName: string]: PowerQuerySink };
  /** List of mapping for Power Query mashup query to sink dataset(s). */
  queries?: PowerQuerySinkMapping[];
}

/** Base class for all triggers that support one to many model for trigger to pipeline. */
export interface MultiplePipelineTrigger extends Trigger {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type:
    | "MultiplePipelineTrigger"
    | "ScheduleTrigger"
    | "BlobTrigger"
    | "BlobEventsTrigger"
    | "CustomEventsTrigger";
  /** Pipelines that need to be started. */
  pipelines?: TriggerPipelineReference[];
}

/** Trigger that schedules pipeline runs for all fixed time interval windows from a start time without gaps and also supports backfill scenarios (when start time is in the past). */
export interface TumblingWindowTrigger extends Trigger {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "TumblingWindowTrigger";
  /** Pipeline for which runs are created when an event is fired for trigger window that is ready. */
  pipeline: TriggerPipelineReference;
  /** The frequency of the time windows. */
  frequency: TumblingWindowFrequency;
  /** The interval of the time windows. The minimum interval allowed is 15 Minutes. */
  interval: number;
  /** The start time for the time period for the trigger during which events are fired for windows that are ready. Only UTC time is currently supported. */
  startTime: Date;
  /** The end time for the time period for the trigger during which events are fired for windows that are ready. Only UTC time is currently supported. */
  endTime?: Date;
  /** Specifies how long the trigger waits past due time before triggering new run. It doesn't alter window start and end time. The default is 0. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
  delay?: Record<string, unknown>;
  /** The max number of parallel time windows (ready for execution) for which a new run is triggered. */
  maxConcurrency: number;
  /** Retry policy that will be applied for failed pipeline runs. */
  retryPolicy?: RetryPolicy;
  /** Triggers that this trigger depends on. Only tumbling window triggers are supported. */
  dependsOn?: DependencyReferenceUnion[];
}

/** Trigger that schedules pipeline reruns for all fixed time interval windows from a requested start time to requested end time. */
export interface RerunTumblingWindowTrigger extends Trigger {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "RerunTumblingWindowTrigger";
  /** The parent trigger reference. */
  parentTrigger: Record<string, unknown>;
  /** The start time for the time period for which restatement is initiated. Only UTC time is currently supported. */
  requestedStartTime: Date;
  /** The end time for the time period for which restatement is initiated. Only UTC time is currently supported. */
  requestedEndTime: Date;
  /** The max number of parallel time windows (ready for execution) for which a rerun is triggered. */
  rerunConcurrency: number;
}

/** Trigger that allows the referenced pipeline to depend on other pipeline runs based on runDimension Name/Value pairs. Upstream pipelines should declare the same runDimension Name and their runs should have the values for those runDimensions. The referenced pipeline run would be triggered if the values for the runDimension match for all upstream pipeline runs. */
export interface ChainingTrigger extends Trigger {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "ChainingTrigger";
  /** Pipeline for which runs are created when all upstream pipelines complete successfully. */
  pipeline: TriggerPipelineReference;
  /** Upstream Pipelines. */
  dependsOn: PipelineReference[];
  /** Run Dimension property that needs to be emitted by upstream pipelines. */
  runDimension: string;
}

/** Mapping data flow. */
export interface MappingDataFlow extends DataFlow {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "MappingDataFlow";
  /** List of sources in data flow. */
  sources?: DataFlowSource[];
  /** List of sinks in data flow. */
  sinks?: DataFlowSink[];
  /** List of transformations in data flow. */
  transformations?: Transformation[];
  /** DataFlow script. */
  script?: string;
  /** Data flow script lines. */
  scriptLines?: string[];
}

/** Data flow flowlet */
export interface Flowlet extends DataFlow {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "Flowlet";
  /** Describes unknown properties. The value of an unknown property can be of "any" type. */
  [property: string]: any;
  /** List of sources in Flowlet. */
  sources?: DataFlowSource[];
  /** List of sinks in Flowlet. */
  sinks?: DataFlowSink[];
  /** List of transformations in Flowlet. */
  transformations?: Transformation[];
  /** Flowlet script. */
  script?: string;
  /** Flowlet script lines. */
  scriptLines?: string[];
  /** Any object */
  additionalProperties?: Record<string, unknown>;
}

/** Power Query data flow. */
export interface WranglingDataFlow extends DataFlow {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "WranglingDataFlow";
  /** List of sources in Power Query. */
  sources?: PowerQuerySource[];
  /** Power query mashup script. */
  script?: string;
  /** Locale of the Power query mashup document. */
  documentLocale?: string;
}

/** Integration runtime debug resource. */
export interface IntegrationRuntimeDebugResource
  extends SubResourceDebugResource {
  /** Integration runtime properties. */
  properties: IntegrationRuntimeUnion;
}

/** Data flow debug resource. */
export interface DataFlowDebugResource extends SubResourceDebugResource {
  /** Data flow properties. */
  properties: DataFlowUnion;
}

/** Dataset debug resource. */
export interface DatasetDebugResource extends SubResourceDebugResource {
  /** Dataset properties. */
  properties: DatasetUnion;
}

/** Linked service debug resource. */
export interface LinkedServiceDebugResource extends SubResourceDebugResource {
  /** Properties of linked service. */
  properties: LinkedServiceUnion;
}

/** Azure Data Factory secure string definition. The string value will be masked with asterisks '*' during Get or List API calls. */
export interface SecureString extends SecretBase {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "SecureString";
  /** Value of secure string. */
  value: string;
}

/** Azure Key Vault secret reference. */
export interface AzureKeyVaultSecretReference extends SecretBase {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AzureKeyVaultSecret";
  /** The Azure Key Vault linked service reference. */
  store: LinkedServiceReference;
  /** The name of the secret in Azure Key Vault. Type: string (or Expression with resultType string). */
  secretName: Record<string, unknown>;
  /** The version of the secret in Azure Key Vault. The default value is the latest version of the secret. Type: string (or Expression with resultType string). */
  secretVersion?: Record<string, unknown>;
}

/** Service principal credential. */
export interface ServicePrincipalCredential extends Credential {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "ServicePrincipal";
  /** The app ID of the service principal used to authenticate */
  servicePrincipalId?: Record<string, unknown>;
  /** The key of the service principal used to authenticate. */
  servicePrincipalKey?: AzureKeyVaultSecretReference;
  /** The ID of the tenant to which the service principal belongs */
  tenant?: Record<string, unknown>;
}

/** Managed identity credential. */
export interface ManagedIdentityCredential extends Credential {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "ManagedIdentity";
  /** The resource id of user assigned managed identity */
  resourceId?: string;
}

/** Transformation for data flow source. */
export interface DataFlowSource extends Transformation {
  /** Dataset reference. */
  dataset?: DatasetReference;
  /** Linked service reference. */
  linkedService?: LinkedServiceReference;
  /** Schema linked service reference. */
  schemaLinkedService?: LinkedServiceReference;
}

/** Transformation for data flow sink. */
export interface DataFlowSink extends Transformation {
  /** Dataset reference. */
  dataset?: DatasetReference;
  /** Linked service reference. */
  linkedService?: LinkedServiceReference;
  /** Schema linked service reference. */
  schemaLinkedService?: LinkedServiceReference;
}

/** The location of azure blob dataset. */
export interface AzureBlobStorageLocation extends DatasetLocation {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AzureBlobStorageLocation";
  /** Specify the container of azure blob. Type: string (or Expression with resultType string). */
  container?: Record<string, unknown>;
}

/** The location of azure blobFS dataset. */
export interface AzureBlobFSLocation extends DatasetLocation {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AzureBlobFSLocation";
  /** Specify the fileSystem of azure blobFS. Type: string (or Expression with resultType string). */
  fileSystem?: Record<string, unknown>;
}

/** The location of azure data lake store dataset. */
export interface AzureDataLakeStoreLocation extends DatasetLocation {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AzureDataLakeStoreLocation";
}

/** The location of amazon S3 dataset. */
export interface AmazonS3Location extends DatasetLocation {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AmazonS3Location";
  /** Specify the bucketName of amazon S3. Type: string (or Expression with resultType string) */
  bucketName?: Record<string, unknown>;
  /** Specify the version of amazon S3. Type: string (or Expression with resultType string). */
  version?: Record<string, unknown>;
}

/** The location of file server dataset. */
export interface FileServerLocation extends DatasetLocation {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "FileServerLocation";
}

/** The location of file server dataset. */
export interface AzureFileStorageLocation extends DatasetLocation {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AzureFileStorageLocation";
}

/** The location of Amazon S3 Compatible dataset. */
export interface AmazonS3CompatibleLocation extends DatasetLocation {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AmazonS3CompatibleLocation";
  /** Specify the bucketName of Amazon S3 Compatible. Type: string (or Expression with resultType string) */
  bucketName?: Record<string, unknown>;
  /** Specify the version of Amazon S3 Compatible. Type: string (or Expression with resultType string). */
  version?: Record<string, unknown>;
}

/** The location of Oracle Cloud Storage dataset. */
export interface OracleCloudStorageLocation extends DatasetLocation {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "OracleCloudStorageLocation";
  /** Specify the bucketName of Oracle Cloud Storage. Type: string (or Expression with resultType string) */
  bucketName?: Record<string, unknown>;
  /** Specify the version of Oracle Cloud Storage. Type: string (or Expression with resultType string). */
  version?: Record<string, unknown>;
}

/** The location of Google Cloud Storage dataset. */
export interface GoogleCloudStorageLocation extends DatasetLocation {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "GoogleCloudStorageLocation";
  /** Specify the bucketName of Google Cloud Storage. Type: string (or Expression with resultType string) */
  bucketName?: Record<string, unknown>;
  /** Specify the version of Google Cloud Storage. Type: string (or Expression with resultType string). */
  version?: Record<string, unknown>;
}

/** The location of ftp server dataset. */
export interface FtpServerLocation extends DatasetLocation {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "FtpServerLocation";
}

/** The location of SFTP dataset. */
export interface SftpLocation extends DatasetLocation {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "SftpLocation";
}

/** The location of http server. */
export interface HttpServerLocation extends DatasetLocation {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "HttpServerLocation";
  /** Specify the relativeUrl of http server. Type: string (or Expression with resultType string) */
  relativeUrl?: Record<string, unknown>;
}

/** The location of HDFS. */
export interface HdfsLocation extends DatasetLocation {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "HdfsLocation";
}

/** The data stored in text format. */
export interface TextFormat extends DatasetStorageFormat {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "TextFormat";
  /** The column delimiter. Type: string (or Expression with resultType string). */
  columnDelimiter?: Record<string, unknown>;
  /** The row delimiter. Type: string (or Expression with resultType string). */
  rowDelimiter?: Record<string, unknown>;
  /** The escape character. Type: string (or Expression with resultType string). */
  escapeChar?: Record<string, unknown>;
  /** The quote character. Type: string (or Expression with resultType string). */
  quoteChar?: Record<string, unknown>;
  /** The null value string. Type: string (or Expression with resultType string). */
  nullValue?: Record<string, unknown>;
  /** The code page name of the preferred encoding. If miss, the default value is ΓÇ£utf-8ΓÇ¥, unless BOM denotes another Unicode encoding. Refer to the ΓÇ£NameΓÇ¥ column of the table in the following link to set supported values: https://msdn.microsoft.com/library/system.text.encoding.aspx. Type: string (or Expression with resultType string). */
  encodingName?: Record<string, unknown>;
  /** Treat empty column values in the text file as null. The default value is true. Type: boolean (or Expression with resultType boolean). */
  treatEmptyAsNull?: Record<string, unknown>;
  /** The number of lines/rows to be skipped when parsing text files. The default value is 0. Type: integer (or Expression with resultType integer). */
  skipLineCount?: Record<string, unknown>;
  /** When used as input, treat the first row of data as headers. When used as output,write the headers into the output as the first row of data. The default value is false. Type: boolean (or Expression with resultType boolean). */
  firstRowAsHeader?: Record<string, unknown>;
}

/** The data stored in JSON format. */
export interface JsonFormat extends DatasetStorageFormat {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "JsonFormat";
  /** File pattern of JSON. To be more specific, the way of separating a collection of JSON objects. The default value is 'setOfObjects'. It is case-sensitive. */
  filePattern?: Record<string, unknown>;
  /** The character used to separate nesting levels. Default value is '.' (dot). Type: string (or Expression with resultType string). */
  nestingSeparator?: Record<string, unknown>;
  /** The code page name of the preferred encoding. If not provided, the default value is 'utf-8', unless the byte order mark (BOM) denotes another Unicode encoding. The full list of supported values can be found in the 'Name' column of the table of encodings in the following reference: https://go.microsoft.com/fwlink/?linkid=861078. Type: string (or Expression with resultType string). */
  encodingName?: Record<string, unknown>;
  /** The JSONPath of the JSON array element to be flattened. Example: "$.ArrayPath". Type: string (or Expression with resultType string). */
  jsonNodeReference?: Record<string, unknown>;
  /** The JSONPath definition for each column mapping with a customized column name to extract data from JSON file. For fields under root object, start with "$"; for fields inside the array chosen by jsonNodeReference property, start from the array element. Example: {"Column1": "$.Column1Path", "Column2": "Column2PathInArray"}. Type: object (or Expression with resultType object). */
  jsonPathDefinition?: Record<string, unknown>;
}

/** The data stored in Avro format. */
export interface AvroFormat extends DatasetStorageFormat {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AvroFormat";
}

/** The data stored in Optimized Row Columnar (ORC) format. */
export interface OrcFormat extends DatasetStorageFormat {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "OrcFormat";
}

/** The data stored in Parquet format. */
export interface ParquetFormat extends DatasetStorageFormat {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "ParquetFormat";
}

/** The BZip2 compression method used on a dataset. */
export interface DatasetBZip2Compression extends DatasetCompression {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "BZip2";
}

/** The GZip compression method used on a dataset. */
export interface DatasetGZipCompression extends DatasetCompression {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "GZip";
  /** The GZip compression level. */
  level?: Record<string, unknown>;
}

/** The Deflate compression method used on a dataset. */
export interface DatasetDeflateCompression extends DatasetCompression {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "Deflate";
  /** The Deflate compression level. */
  level?: Record<string, unknown>;
}

/** The ZipDeflate compression method used on a dataset. */
export interface DatasetZipDeflateCompression extends DatasetCompression {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "ZipDeflate";
  /** The ZipDeflate compression level. */
  level?: Record<string, unknown>;
}

/** The Tar archive method used on a dataset. */
export interface DatasetTarCompression extends DatasetCompression {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "Tar";
}

/** The TarGZip compression method used on a dataset. */
export interface DatasetTarGZipCompression extends DatasetCompression {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "TarGZip";
  /** The TarGZip compression level. */
  level?: Record<string, unknown>;
}

/** The custom setup of running cmdkey commands. */
export interface CmdkeySetup extends CustomSetupBase {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "CmdkeySetup";
  /** The server name of data source access. */
  targetName: Record<string, unknown>;
  /** The user name of data source access. */
  userName: Record<string, unknown>;
  /** The password of data source access. */
  password: SecretBaseUnion;
}

/** The custom setup of setting environment variable. */
export interface EnvironmentVariableSetup extends CustomSetupBase {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "EnvironmentVariableSetup";
  /** The name of the environment variable. */
  variableName: string;
  /** The value of the environment variable. */
  variableValue: string;
}

/** The custom setup of installing 3rd party components. */
export interface ComponentSetup extends CustomSetupBase {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "ComponentSetup";
  /** The name of the 3rd party component. */
  componentName: string;
  /** The license key to activate the component. */
  licenseKey?: SecretBaseUnion;
}

/** The express custom setup of installing Azure PowerShell. */
export interface AzPowerShellSetup extends CustomSetupBase {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AzPowerShellSetup";
  /** The required version of Azure PowerShell to install. */
  version: string;
}

/** The key authorization type integration runtime. */
export interface LinkedIntegrationRuntimeKeyAuthorization
  extends LinkedIntegrationRuntimeType {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  authorizationType: "Key";
  /** The key used for authorization. */
  key: SecureString;
}

/** The role based access control (RBAC) authorization type integration runtime. */
export interface LinkedIntegrationRuntimeRbacAuthorization
  extends LinkedIntegrationRuntimeType {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  authorizationType: "RBAC";
  /** The resource identifier of the integration runtime to be shared. */
  resourceId: string;
}

/** A WebLinkedService that uses anonymous authentication to communicate with an HTTP endpoint. */
export interface WebAnonymousAuthentication
  extends WebLinkedServiceTypeProperties {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  authenticationType: "Anonymous";
}

/** A WebLinkedService that uses basic authentication to communicate with an HTTP endpoint. */
export interface WebBasicAuthentication extends WebLinkedServiceTypeProperties {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  authenticationType: "Basic";
  /** User name for Basic authentication. Type: string (or Expression with resultType string). */
  username: Record<string, unknown>;
  /** The password for Basic authentication. */
  password: SecretBaseUnion;
}

/** A WebLinkedService that uses client certificate based authentication to communicate with an HTTP endpoint. This scheme follows mutual authentication; the server must also provide valid credentials to the client. */
export interface WebClientCertificateAuthentication
  extends WebLinkedServiceTypeProperties {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  authenticationType: "ClientCertificate";
  /** Base64-encoded contents of a PFX file. */
  pfx: SecretBaseUnion;
  /** Password for the PFX file. */
  password: SecretBaseUnion;
}

/** Azure blob read settings. */
export interface AzureBlobStorageReadSettings extends StoreReadSettings {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AzureBlobStorageReadSettings";
  /** If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). */
  recursive?: Record<string, unknown>;
  /** Azure blob wildcardFolderPath. Type: string (or Expression with resultType string). */
  wildcardFolderPath?: Record<string, unknown>;
  /** Azure blob wildcardFileName. Type: string (or Expression with resultType string). */
  wildcardFileName?: Record<string, unknown>;
  /** The prefix filter for the Azure Blob name. Type: string (or Expression with resultType string). */
  prefix?: Record<string, unknown>;
  /** Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string). */
  fileListPath?: Record<string, unknown>;
  /** Indicates whether to enable partition discovery. */
  enablePartitionDiscovery?: boolean;
  /** Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string). */
  partitionRootPath?: Record<string, unknown>;
  /** Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean). */
  deleteFilesAfterCompletion?: Record<string, unknown>;
  /** The start of file's modified datetime. Type: string (or Expression with resultType string). */
  modifiedDatetimeStart?: Record<string, unknown>;
  /** The end of file's modified datetime. Type: string (or Expression with resultType string). */
  modifiedDatetimeEnd?: Record<string, unknown>;
}

/** Azure blobFS read settings. */
export interface AzureBlobFSReadSettings extends StoreReadSettings {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AzureBlobFSReadSettings";
  /** If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). */
  recursive?: Record<string, unknown>;
  /** Azure blobFS wildcardFolderPath. Type: string (or Expression with resultType string). */
  wildcardFolderPath?: Record<string, unknown>;
  /** Azure blobFS wildcardFileName. Type: string (or Expression with resultType string). */
  wildcardFileName?: Record<string, unknown>;
  /** Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string). */
  fileListPath?: Record<string, unknown>;
  /** Indicates whether to enable partition discovery. */
  enablePartitionDiscovery?: boolean;
  /** Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string). */
  partitionRootPath?: Record<string, unknown>;
  /** Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean). */
  deleteFilesAfterCompletion?: Record<string, unknown>;
  /** The start of file's modified datetime. Type: string (or Expression with resultType string). */
  modifiedDatetimeStart?: Record<string, unknown>;
  /** The end of file's modified datetime. Type: string (or Expression with resultType string). */
  modifiedDatetimeEnd?: Record<string, unknown>;
}

/** Azure data lake store read settings. */
export interface AzureDataLakeStoreReadSettings extends StoreReadSettings {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AzureDataLakeStoreReadSettings";
  /** If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). */
  recursive?: Record<string, unknown>;
  /** ADLS wildcardFolderPath. Type: string (or Expression with resultType string). */
  wildcardFolderPath?: Record<string, unknown>;
  /** ADLS wildcardFileName. Type: string (or Expression with resultType string). */
  wildcardFileName?: Record<string, unknown>;
  /** Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string). */
  fileListPath?: Record<string, unknown>;
  /** Lists files after the value (exclusive) based on file/folder names’ lexicographical order. Applies under the folderPath in data set, and filter files/sub-folders under the folderPath. Type: string (or Expression with resultType string). */
  listAfter?: Record<string, unknown>;
  /** Lists files before the value (inclusive) based on file/folder names’ lexicographical order. Applies under the folderPath in data set, and filter files/sub-folders under the folderPath. Type: string (or Expression with resultType string). */
  listBefore?: Record<string, unknown>;
  /** Indicates whether to enable partition discovery. */
  enablePartitionDiscovery?: boolean;
  /** Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string). */
  partitionRootPath?: Record<string, unknown>;
  /** Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean). */
  deleteFilesAfterCompletion?: Record<string, unknown>;
  /** The start of file's modified datetime. Type: string (or Expression with resultType string). */
  modifiedDatetimeStart?: Record<string, unknown>;
  /** The end of file's modified datetime. Type: string (or Expression with resultType string). */
  modifiedDatetimeEnd?: Record<string, unknown>;
}

/** Amazon S3 read settings. */
export interface AmazonS3ReadSettings extends StoreReadSettings {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AmazonS3ReadSettings";
  /** If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). */
  recursive?: Record<string, unknown>;
  /** AmazonS3 wildcardFolderPath. Type: string (or Expression with resultType string). */
  wildcardFolderPath?: Record<string, unknown>;
  /** AmazonS3 wildcardFileName. Type: string (or Expression with resultType string). */
  wildcardFileName?: Record<string, unknown>;
  /** The prefix filter for the S3 object name. Type: string (or Expression with resultType string). */
  prefix?: Record<string, unknown>;
  /** Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string). */
  fileListPath?: Record<string, unknown>;
  /** Indicates whether to enable partition discovery. */
  enablePartitionDiscovery?: boolean;
  /** Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string). */
  partitionRootPath?: Record<string, unknown>;
  /** Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean). */
  deleteFilesAfterCompletion?: Record<string, unknown>;
  /** The start of file's modified datetime. Type: string (or Expression with resultType string). */
  modifiedDatetimeStart?: Record<string, unknown>;
  /** The end of file's modified datetime. Type: string (or Expression with resultType string). */
  modifiedDatetimeEnd?: Record<string, unknown>;
}

/** File server read settings. */
export interface FileServerReadSettings extends StoreReadSettings {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "FileServerReadSettings";
  /** If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). */
  recursive?: Record<string, unknown>;
  /** FileServer wildcardFolderPath. Type: string (or Expression with resultType string). */
  wildcardFolderPath?: Record<string, unknown>;
  /** FileServer wildcardFileName. Type: string (or Expression with resultType string). */
  wildcardFileName?: Record<string, unknown>;
  /** Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string). */
  fileListPath?: Record<string, unknown>;
  /** Indicates whether to enable partition discovery. */
  enablePartitionDiscovery?: boolean;
  /** Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string). */
  partitionRootPath?: Record<string, unknown>;
  /** Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean). */
  deleteFilesAfterCompletion?: Record<string, unknown>;
  /** The start of file's modified datetime. Type: string (or Expression with resultType string). */
  modifiedDatetimeStart?: Record<string, unknown>;
  /** The end of file's modified datetime. Type: string (or Expression with resultType string). */
  modifiedDatetimeEnd?: Record<string, unknown>;
  /** Specify a filter to be used to select a subset of files in the folderPath rather than all files. Type: string (or Expression with resultType string). */
  fileFilter?: Record<string, unknown>;
}

/** Azure File Storage read settings. */
export interface AzureFileStorageReadSettings extends StoreReadSettings {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AzureFileStorageReadSettings";
  /** If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). */
  recursive?: Record<string, unknown>;
  /** Azure File Storage wildcardFolderPath. Type: string (or Expression with resultType string). */
  wildcardFolderPath?: Record<string, unknown>;
  /** Azure File Storage wildcardFileName. Type: string (or Expression with resultType string). */
  wildcardFileName?: Record<string, unknown>;
  /** The prefix filter for the Azure File name starting from root path. Type: string (or Expression with resultType string). */
  prefix?: Record<string, unknown>;
  /** Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string). */
  fileListPath?: Record<string, unknown>;
  /** Indicates whether to enable partition discovery. */
  enablePartitionDiscovery?: boolean;
  /** Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string). */
  partitionRootPath?: Record<string, unknown>;
  /** Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean). */
  deleteFilesAfterCompletion?: Record<string, unknown>;
  /** The start of file's modified datetime. Type: string (or Expression with resultType string). */
  modifiedDatetimeStart?: Record<string, unknown>;
  /** The end of file's modified datetime. Type: string (or Expression with resultType string). */
  modifiedDatetimeEnd?: Record<string, unknown>;
}

/** Amazon S3 Compatible read settings. */
export interface AmazonS3CompatibleReadSettings extends StoreReadSettings {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AmazonS3CompatibleReadSettings";
  /** If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). */
  recursive?: Record<string, unknown>;
  /** Amazon S3 Compatible wildcardFolderPath. Type: string (or Expression with resultType string). */
  wildcardFolderPath?: Record<string, unknown>;
  /** Amazon S3 Compatible wildcardFileName. Type: string (or Expression with resultType string). */
  wildcardFileName?: Record<string, unknown>;
  /** The prefix filter for the S3 Compatible object name. Type: string (or Expression with resultType string). */
  prefix?: Record<string, unknown>;
  /** Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string). */
  fileListPath?: Record<string, unknown>;
  /** Indicates whether to enable partition discovery. */
  enablePartitionDiscovery?: boolean;
  /** Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string). */
  partitionRootPath?: Record<string, unknown>;
  /** Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean). */
  deleteFilesAfterCompletion?: Record<string, unknown>;
  /** The start of file's modified datetime. Type: string (or Expression with resultType string). */
  modifiedDatetimeStart?: Record<string, unknown>;
  /** The end of file's modified datetime. Type: string (or Expression with resultType string). */
  modifiedDatetimeEnd?: Record<string, unknown>;
}

/** Oracle Cloud Storage read settings. */
export interface OracleCloudStorageReadSettings extends StoreReadSettings {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "OracleCloudStorageReadSettings";
  /** If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). */
  recursive?: Record<string, unknown>;
  /** Oracle Cloud Storage wildcardFolderPath. Type: string (or Expression with resultType string). */
  wildcardFolderPath?: Record<string, unknown>;
  /** Oracle Cloud Storage wildcardFileName. Type: string (or Expression with resultType string). */
  wildcardFileName?: Record<string, unknown>;
  /** The prefix filter for the Oracle Cloud Storage object name. Type: string (or Expression with resultType string). */
  prefix?: Record<string, unknown>;
  /** Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string). */
  fileListPath?: Record<string, unknown>;
  /** Indicates whether to enable partition discovery. */
  enablePartitionDiscovery?: boolean;
  /** Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string). */
  partitionRootPath?: Record<string, unknown>;
  /** Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean). */
  deleteFilesAfterCompletion?: Record<string, unknown>;
  /** The start of file's modified datetime. Type: string (or Expression with resultType string). */
  modifiedDatetimeStart?: Record<string, unknown>;
  /** The end of file's modified datetime. Type: string (or Expression with resultType string). */
  modifiedDatetimeEnd?: Record<string, unknown>;
}

/** Google Cloud Storage read settings. */
export interface GoogleCloudStorageReadSettings extends StoreReadSettings {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "GoogleCloudStorageReadSettings";
  /** If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). */
  recursive?: Record<string, unknown>;
  /** Google Cloud Storage wildcardFolderPath. Type: string (or Expression with resultType string). */
  wildcardFolderPath?: Record<string, unknown>;
  /** Google Cloud Storage wildcardFileName. Type: string (or Expression with resultType string). */
  wildcardFileName?: Record<string, unknown>;
  /** The prefix filter for the Google Cloud Storage object name. Type: string (or Expression with resultType string). */
  prefix?: Record<string, unknown>;
  /** Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string). */
  fileListPath?: Record<string, unknown>;
  /** Indicates whether to enable partition discovery. */
  enablePartitionDiscovery?: boolean;
  /** Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string). */
  partitionRootPath?: Record<string, unknown>;
  /** Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean). */
  deleteFilesAfterCompletion?: Record<string, unknown>;
  /** The start of file's modified datetime. Type: string (or Expression with resultType string). */
  modifiedDatetimeStart?: Record<string, unknown>;
  /** The end of file's modified datetime. Type: string (or Expression with resultType string). */
  modifiedDatetimeEnd?: Record<string, unknown>;
}

/** Ftp read settings. */
export interface FtpReadSettings extends StoreReadSettings {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "FtpReadSettings";
  /** If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). */
  recursive?: Record<string, unknown>;
  /** Ftp wildcardFolderPath. Type: string (or Expression with resultType string). */
  wildcardFolderPath?: Record<string, unknown>;
  /** Ftp wildcardFileName. Type: string (or Expression with resultType string). */
  wildcardFileName?: Record<string, unknown>;
  /** Indicates whether to enable partition discovery. */
  enablePartitionDiscovery?: boolean;
  /** Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string). */
  partitionRootPath?: Record<string, unknown>;
  /** Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean). */
  deleteFilesAfterCompletion?: Record<string, unknown>;
  /** Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string). */
  fileListPath?: Record<string, unknown>;
  /** Specify whether to use binary transfer mode for FTP stores. */
  useBinaryTransfer?: boolean;
}

/** Sftp read settings. */
export interface SftpReadSettings extends StoreReadSettings {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "SftpReadSettings";
  /** If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). */
  recursive?: Record<string, unknown>;
  /** Sftp wildcardFolderPath. Type: string (or Expression with resultType string). */
  wildcardFolderPath?: Record<string, unknown>;
  /** Sftp wildcardFileName. Type: string (or Expression with resultType string). */
  wildcardFileName?: Record<string, unknown>;
  /** Indicates whether to enable partition discovery. */
  enablePartitionDiscovery?: boolean;
  /** Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string). */
  partitionRootPath?: Record<string, unknown>;
  /** Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string). */
  fileListPath?: Record<string, unknown>;
  /** Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean). */
  deleteFilesAfterCompletion?: Record<string, unknown>;
  /** The start of file's modified datetime. Type: string (or Expression with resultType string). */
  modifiedDatetimeStart?: Record<string, unknown>;
  /** The end of file's modified datetime. Type: string (or Expression with resultType string). */
  modifiedDatetimeEnd?: Record<string, unknown>;
}

/** Sftp read settings. */
export interface HttpReadSettings extends StoreReadSettings {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "HttpReadSettings";
  /** The HTTP method used to call the RESTful API. The default is GET. Type: string (or Expression with resultType string). */
  requestMethod?: Record<string, unknown>;
  /** The HTTP request body to the RESTful API if requestMethod is POST. Type: string (or Expression with resultType string). */
  requestBody?: Record<string, unknown>;
  /** The additional HTTP headers in the request to the RESTful API. Type: string (or Expression with resultType string). */
  additionalHeaders?: Record<string, unknown>;
  /** Specifies the timeout for a HTTP client to get HTTP response from HTTP server. */
  requestTimeout?: Record<string, unknown>;
  /** Indicates whether to enable partition discovery. */
  enablePartitionDiscovery?: boolean;
  /** Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string). */
  partitionRootPath?: Record<string, unknown>;
}

/** HDFS read settings. */
export interface HdfsReadSettings extends StoreReadSettings {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "HdfsReadSettings";
  /** If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). */
  recursive?: Record<string, unknown>;
  /** HDFS wildcardFolderPath. Type: string (or Expression with resultType string). */
  wildcardFolderPath?: Record<string, unknown>;
  /** HDFS wildcardFileName. Type: string (or Expression with resultType string). */
  wildcardFileName?: Record<string, unknown>;
  /** Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string). */
  fileListPath?: Record<string, unknown>;
  /** Indicates whether to enable partition discovery. */
  enablePartitionDiscovery?: boolean;
  /** Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string). */
  partitionRootPath?: Record<string, unknown>;
  /** The start of file's modified datetime. Type: string (or Expression with resultType string). */
  modifiedDatetimeStart?: Record<string, unknown>;
  /** The end of file's modified datetime. Type: string (or Expression with resultType string). */
  modifiedDatetimeEnd?: Record<string, unknown>;
  /** Specifies Distcp-related settings. */
  distcpSettings?: DistcpSettings;
  /** Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean). */
  deleteFilesAfterCompletion?: Record<string, unknown>;
}

/** Sftp write settings. */
export interface SftpWriteSettings extends StoreWriteSettings {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "SftpWriteSettings";
  /** Specifies the timeout for writing each chunk to SFTP server. Default value: 01:00:00 (one hour). Type: string (or Expression with resultType string). */
  operationTimeout?: Record<string, unknown>;
  /** Upload to temporary file(s) and rename. Disable this option if your SFTP server doesn't support rename operation. Type: boolean (or Expression with resultType boolean). */
  useTempFileRename?: Record<string, unknown>;
}

/** Azure blob write settings. */
export interface AzureBlobStorageWriteSettings extends StoreWriteSettings {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AzureBlobStorageWriteSettings";
  /** Indicates the block size(MB) when writing data to blob. Type: integer (or Expression with resultType integer). */
  blockSizeInMB?: Record<string, unknown>;
}

/** Azure blobFS write settings. */
export interface AzureBlobFSWriteSettings extends StoreWriteSettings {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AzureBlobFSWriteSettings";
  /** Indicates the block size(MB) when writing data to blob. Type: integer (or Expression with resultType integer). */
  blockSizeInMB?: Record<string, unknown>;
}

/** Azure data lake store write settings. */
export interface AzureDataLakeStoreWriteSettings extends StoreWriteSettings {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AzureDataLakeStoreWriteSettings";
  /** Specifies the expiry time of the written files. The time is applied to the UTC time zone in the format of "2018-12-01T05:00:00Z". Default value is NULL. Type: integer (or Expression with resultType integer). */
  expiryDateTime?: Record<string, unknown>;
}

/** File server write settings. */
export interface FileServerWriteSettings extends StoreWriteSettings {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "FileServerWriteSettings";
}

/** Azure File Storage write settings. */
export interface AzureFileStorageWriteSettings extends StoreWriteSettings {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AzureFileStorageWriteSettings";
}

/** Delimited text read settings. */
export interface DelimitedTextReadSettings extends FormatReadSettings {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "DelimitedTextReadSettings";
  /** Indicates the number of non-empty rows to skip when reading data from input files. Type: integer (or Expression with resultType integer). */
  skipLineCount?: Record<string, unknown>;
  /** Compression settings. */
  compressionProperties?: CompressionReadSettingsUnion;
}

/** Json read settings. */
export interface JsonReadSettings extends FormatReadSettings {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "JsonReadSettings";
  /** Compression settings. */
  compressionProperties?: CompressionReadSettingsUnion;
}

/** Xml read settings. */
export interface XmlReadSettings extends FormatReadSettings {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "XmlReadSettings";
  /** Compression settings. */
  compressionProperties?: CompressionReadSettingsUnion;
  /** Indicates what validation method is used when reading the xml files. Allowed values: 'none', 'xsd', or 'dtd'. Type: string (or Expression with resultType string). */
  validationMode?: Record<string, unknown>;
  /** Indicates whether type detection is enabled when reading the xml files. Type: boolean (or Expression with resultType boolean). */
  detectDataType?: Record<string, unknown>;
  /** Indicates whether namespace is enabled when reading the xml files. Type: boolean (or Expression with resultType boolean). */
  namespaces?: Record<string, unknown>;
  /** Namespace uri to prefix mappings to override the prefixes in column names when namespace is enabled, if no prefix is defined for a namespace uri, the prefix of xml element/attribute name in the xml data file will be used. Example: "{"http://www.example.com/xml":"prefix"}" Type: object (or Expression with resultType object). */
  namespacePrefixes?: Record<string, unknown>;
}

/** Binary read settings. */
export interface BinaryReadSettings extends FormatReadSettings {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "BinaryReadSettings";
  /** Compression settings. */
  compressionProperties?: CompressionReadSettingsUnion;
}

/** The ZipDeflate compression read settings. */
export interface ZipDeflateReadSettings extends CompressionReadSettings {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "ZipDeflateReadSettings";
  /** Preserve the zip file name as folder path. Type: boolean (or Expression with resultType boolean). */
  preserveZipFileNameAsFolder?: Record<string, unknown>;
}

/** The Tar compression read settings. */
export interface TarReadSettings extends CompressionReadSettings {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "TarReadSettings";
  /** Preserve the compression file name as folder path. Type: boolean (or Expression with resultType boolean). */
  preserveCompressionFileNameAsFolder?: Record<string, unknown>;
}

/** The TarGZip compression read settings. */
export interface TarGZipReadSettings extends CompressionReadSettings {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "TarGZipReadSettings";
  /** Preserve the compression file name as folder path. Type: boolean (or Expression with resultType boolean). */
  preserveCompressionFileNameAsFolder?: Record<string, unknown>;
}

/** Avro write settings. */
export interface AvroWriteSettings extends FormatWriteSettings {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AvroWriteSettings";
  /** Top level record name in write result, which is required in AVRO spec. */
  recordName?: string;
  /** Record namespace in the write result. */
  recordNamespace?: string;
  /** Limit the written file's row count to be smaller than or equal to the specified count. Type: integer (or Expression with resultType integer). */
  maxRowsPerFile?: Record<string, unknown>;
  /** Specifies the file name pattern <fileNamePrefix>_<fileIndex>.<fileExtension> when copy from non-file based store without partitionOptions. Type: string (or Expression with resultType string). */
  fileNamePrefix?: Record<string, unknown>;
}

/** Orc write settings. */
export interface OrcWriteSettings extends FormatWriteSettings {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "OrcWriteSettings";
  /** Limit the written file's row count to be smaller than or equal to the specified count. Type: integer (or Expression with resultType integer). */
  maxRowsPerFile?: Record<string, unknown>;
  /** Specifies the file name pattern <fileNamePrefix>_<fileIndex>.<fileExtension> when copy from non-file based store without partitionOptions. Type: string (or Expression with resultType string). */
  fileNamePrefix?: Record<string, unknown>;
}

/** Parquet write settings. */
export interface ParquetWriteSettings extends FormatWriteSettings {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "ParquetWriteSettings";
  /** Limit the written file's row count to be smaller than or equal to the specified count. Type: integer (or Expression with resultType integer). */
  maxRowsPerFile?: Record<string, unknown>;
  /** Specifies the file name pattern <fileNamePrefix>_<fileIndex>.<fileExtension> when copy from non-file based store without partitionOptions. Type: string (or Expression with resultType string). */
  fileNamePrefix?: Record<string, unknown>;
}

/** Delimited text write settings. */
export interface DelimitedTextWriteSettings extends FormatWriteSettings {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "DelimitedTextWriteSettings";
  /** Indicates whether string values should always be enclosed with quotes. Type: boolean (or Expression with resultType boolean). */
  quoteAllText?: Record<string, unknown>;
  /** The file extension used to create the files. Type: string (or Expression with resultType string). */
  fileExtension: Record<string, unknown>;
  /** Limit the written file's row count to be smaller than or equal to the specified count. Type: integer (or Expression with resultType integer). */
  maxRowsPerFile?: Record<string, unknown>;
  /** Specifies the file name pattern <fileNamePrefix>_<fileIndex>.<fileExtension> when copy from non-file based store without partitionOptions. Type: string (or Expression with resultType string). */
  fileNamePrefix?: Record<string, unknown>;
}

/** Json write settings. */
export interface JsonWriteSettings extends FormatWriteSettings {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "JsonWriteSettings";
  /** File pattern of JSON. This setting controls the way a collection of JSON objects will be treated. The default value is 'setOfObjects'. It is case-sensitive. */
  filePattern?: Record<string, unknown>;
}

/** A copy activity Avro source. */
export interface AvroSource extends CopySource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AvroSource";
  /** Avro store settings. */
  storeSettings?: StoreReadSettingsUnion;
  /** Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). */
  additionalColumns?: Record<string, unknown>;
}

/** A copy activity excel source. */
export interface ExcelSource extends CopySource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "ExcelSource";
  /** Excel store settings. */
  storeSettings?: StoreReadSettingsUnion;
  /** Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). */
  additionalColumns?: Record<string, unknown>;
}

/** A copy activity Parquet source. */
export interface ParquetSource extends CopySource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "ParquetSource";
  /** Parquet store settings. */
  storeSettings?: StoreReadSettingsUnion;
  /** Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). */
  additionalColumns?: Record<string, unknown>;
}

/** A copy activity DelimitedText source. */
export interface DelimitedTextSource extends CopySource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "DelimitedTextSource";
  /** DelimitedText store settings. */
  storeSettings?: StoreReadSettingsUnion;
  /** DelimitedText format settings. */
  formatSettings?: DelimitedTextReadSettings;
  /** Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). */
  additionalColumns?: Record<string, unknown>;
}

/** A copy activity Json source. */
export interface JsonSource extends CopySource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "JsonSource";
  /** Json store settings. */
  storeSettings?: StoreReadSettingsUnion;
  /** Json format settings. */
  formatSettings?: JsonReadSettings;
  /** Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). */
  additionalColumns?: Record<string, unknown>;
}

/** A copy activity Xml source. */
export interface XmlSource extends CopySource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "XmlSource";
  /** Xml store settings. */
  storeSettings?: StoreReadSettingsUnion;
  /** Xml format settings. */
  formatSettings?: XmlReadSettings;
  /** Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). */
  additionalColumns?: Record<string, unknown>;
}

/** A copy activity ORC source. */
export interface OrcSource extends CopySource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "OrcSource";
  /** ORC store settings. */
  storeSettings?: StoreReadSettingsUnion;
  /** Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). */
  additionalColumns?: Record<string, unknown>;
}

/** A copy activity Binary source. */
export interface BinarySource extends CopySource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "BinarySource";
  /** Binary store settings. */
  storeSettings?: StoreReadSettingsUnion;
  /** Binary format settings. */
  formatSettings?: BinaryReadSettings;
}

/** Copy activity sources of tabular type. */
export interface TabularSource extends CopySource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type:
    | "TabularSource"
    | "AzureTableSource"
    | "InformixSource"
    | "Db2Source"
    | "OdbcSource"
    | "MySqlSource"
    | "PostgreSqlSource"
    | "SybaseSource"
    | "SapBwSource"
    | "SalesforceSource"
    | "SapCloudForCustomerSource"
    | "SapEccSource"
    | "SapHanaSource"
    | "SapOpenHubSource"
    | "SapTableSource"
    | "SqlSource"
    | "SqlServerSource"
    | "AmazonRdsForSqlServerSource"
    | "AzureSqlSource"
    | "SqlMISource"
    | "SqlDWSource"
    | "AzureMySqlSource"
    | "TeradataSource"
    | "CassandraSource"
    | "AmazonMWSSource"
    | "AzurePostgreSqlSource"
    | "ConcurSource"
    | "CouchbaseSource"
    | "DrillSource"
    | "EloquaSource"
    | "GoogleBigQuerySource"
    | "GreenplumSource"
    | "HBaseSource"
    | "HiveSource"
    | "HubspotSource"
    | "ImpalaSource"
    | "JiraSource"
    | "MagentoSource"
    | "MariaDBSource"
    | "AzureMariaDBSource"
    | "MarketoSource"
    | "PaypalSource"
    | "PhoenixSource"
    | "PrestoSource"
    | "QuickBooksSource"
    | "ServiceNowSource"
    | "ShopifySource"
    | "SparkSource"
    | "SquareSource"
    | "XeroSource"
    | "ZohoSource"
    | "NetezzaSource"
    | "VerticaSource"
    | "SalesforceMarketingCloudSource"
    | "ResponsysSource"
    | "DynamicsAXSource"
    | "OracleServiceCloudSource"
    | "GoogleAdWordsSource"
    | "AmazonRedshiftSource";
  /** Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
  queryTimeout?: Record<string, unknown>;
  /** Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). */
  additionalColumns?: Record<string, unknown>;
}

/** A copy activity Azure Blob source. */
export interface BlobSource extends CopySource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "BlobSource";
  /** Treat empty as null. Type: boolean (or Expression with resultType boolean). */
  treatEmptyAsNull?: Record<string, unknown>;
  /** Number of header lines to skip from each blob. Type: integer (or Expression with resultType integer). */
  skipHeaderLineCount?: Record<string, unknown>;
  /** If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). */
  recursive?: Record<string, unknown>;
}

/** A copy activity Document Database Collection source. */
export interface DocumentDbCollectionSource extends CopySource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "DocumentDbCollectionSource";
  /** Documents query. Type: string (or Expression with resultType string). */
  query?: Record<string, unknown>;
  /** Nested properties separator. Type: string (or Expression with resultType string). */
  nestingSeparator?: Record<string, unknown>;
  /** Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
  queryTimeout?: Record<string, unknown>;
  /** Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). */
  additionalColumns?: Record<string, unknown>;
}

/** A copy activity Azure CosmosDB (SQL API) Collection source. */
export interface CosmosDbSqlApiSource extends CopySource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "CosmosDbSqlApiSource";
  /** SQL API query. Type: string (or Expression with resultType string). */
  query?: Record<string, unknown>;
  /** Page size of the result. Type: integer (or Expression with resultType integer). */
  pageSize?: Record<string, unknown>;
  /** Preferred regions. Type: array of strings (or Expression with resultType array of strings). */
  preferredRegions?: Record<string, unknown>;
  /** Whether detect primitive values as datetime values. Type: boolean (or Expression with resultType boolean). */
  detectDatetime?: Record<string, unknown>;
  /** Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). */
  additionalColumns?: Record<string, unknown>;
}

/** A copy activity Dynamics source. */
export interface DynamicsSource extends CopySource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "DynamicsSource";
  /** FetchXML is a proprietary query language that is used in Microsoft Dynamics (online & on-premises). Type: string (or Expression with resultType string). */
  query?: Record<string, unknown>;
  /** Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). */
  additionalColumns?: Record<string, unknown>;
}

/** A copy activity Dynamics CRM source. */
export interface DynamicsCrmSource extends CopySource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "DynamicsCrmSource";
  /** FetchXML is a proprietary query language that is used in Microsoft Dynamics CRM (online & on-premises). Type: string (or Expression with resultType string). */
  query?: Record<string, unknown>;
  /** Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). */
  additionalColumns?: Record<string, unknown>;
}

/** A copy activity Common Data Service for Apps source. */
export interface CommonDataServiceForAppsSource extends CopySource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "CommonDataServiceForAppsSource";
  /** FetchXML is a proprietary query language that is used in Microsoft Common Data Service for Apps (online & on-premises). Type: string (or Expression with resultType string). */
  query?: Record<string, unknown>;
  /** Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). */
  additionalColumns?: Record<string, unknown>;
}

/** A copy activity source for various relational databases. */
export interface RelationalSource extends CopySource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "RelationalSource";
  /** Database query. Type: string (or Expression with resultType string). */
  query?: Record<string, unknown>;
  /** Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). */
  additionalColumns?: Record<string, unknown>;
}

/** A copy activity source for Microsoft Access. */
export interface MicrosoftAccessSource extends CopySource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "MicrosoftAccessSource";
  /** Database query. Type: string (or Expression with resultType string). */
  query?: Record<string, unknown>;
  /** Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). */
  additionalColumns?: Record<string, unknown>;
}

/** A copy activity source for OData source. */
export interface ODataSource extends CopySource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "ODataSource";
  /** OData query. For example, "$top=1". Type: string (or Expression with resultType string). */
  query?: Record<string, unknown>;
  /** The timeout (TimeSpan) to get an HTTP response. It is the timeout to get a response, not the timeout to read response data. Default value: 00:05:00. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
  httpRequestTimeout?: Record<string, unknown>;
  /** Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). */
  additionalColumns?: Record<string, unknown>;
}

/** A copy activity Salesforce Service Cloud source. */
export interface SalesforceServiceCloudSource extends CopySource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "SalesforceServiceCloudSource";
  /** Database query. Type: string (or Expression with resultType string). */
  query?: Record<string, unknown>;
  /** The read behavior for the operation. Default is Query. */
  readBehavior?: SalesforceSourceReadBehavior;
  /** Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). */
  additionalColumns?: Record<string, unknown>;
}

/** A copy activity Rest service source. */
export interface RestSource extends CopySource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "RestSource";
  /** The HTTP method used to call the RESTful API. The default is GET. Type: string (or Expression with resultType string). */
  requestMethod?: Record<string, unknown>;
  /** The HTTP request body to the RESTful API if requestMethod is POST. Type: string (or Expression with resultType string). */
  requestBody?: Record<string, unknown>;
  /** The additional HTTP headers in the request to the RESTful API. Type: string (or Expression with resultType string). */
  additionalHeaders?: Record<string, unknown>;
  /** The pagination rules to compose next page requests. Type: string (or Expression with resultType string). */
  paginationRules?: Record<string, unknown>;
  /** The timeout (TimeSpan) to get an HTTP response. It is the timeout to get a response, not the timeout to read response data. Default value: 00:01:40. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
  httpRequestTimeout?: Record<string, unknown>;
  /** The time to await before sending next page request. */
  requestInterval?: Record<string, unknown>;
  /** Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). */
  additionalColumns?: Record<string, unknown>;
}

/** A copy activity file system source. */
export interface FileSystemSource extends CopySource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "FileSystemSource";
  /** If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). */
  recursive?: Record<string, unknown>;
  /** Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). */
  additionalColumns?: Record<string, unknown>;
}

/** A copy activity HDFS source. */
export interface HdfsSource extends CopySource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "HdfsSource";
  /** If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). */
  recursive?: Record<string, unknown>;
  /** Specifies Distcp-related settings. */
  distcpSettings?: DistcpSettings;
}

/** A copy activity Azure Data Explorer (Kusto) source. */
export interface AzureDataExplorerSource extends CopySource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AzureDataExplorerSource";
  /** Database query. Should be a Kusto Query Language (KQL) query. Type: string (or Expression with resultType string). */
  query: Record<string, unknown>;
  /** The name of the Boolean option that controls whether truncation is applied to result-sets that go beyond a certain row-count limit. */
  noTruncation?: Record<string, unknown>;
  /** Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).. */
  queryTimeout?: Record<string, unknown>;
  /** Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). */
  additionalColumns?: Record<string, unknown>;
}

/** A copy activity Oracle source. */
export interface OracleSource extends CopySource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "OracleSource";
  /** Oracle reader query. Type: string (or Expression with resultType string). */
  oracleReaderQuery?: Record<string, unknown>;
  /** Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
  queryTimeout?: Record<string, unknown>;
  /** The partition mechanism that will be used for Oracle read in parallel. Possible values include: "None", "PhysicalPartitionsOfTable", "DynamicRange". */
  partitionOption?: Record<string, unknown>;
  /** The settings that will be leveraged for Oracle source partitioning. */
  partitionSettings?: OraclePartitionSettings;
  /** Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). */
  additionalColumns?: Record<string, unknown>;
}

/** A copy activity AmazonRdsForOracle source. */
export interface AmazonRdsForOracleSource extends CopySource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AmazonRdsForOracleSource";
  /** AmazonRdsForOracle reader query. Type: string (or Expression with resultType string). */
  oracleReaderQuery?: Record<string, unknown>;
  /** Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
  queryTimeout?: Record<string, unknown>;
  /** The partition mechanism that will be used for AmazonRdsForOracle read in parallel. Type: string (or Expression with resultType string). */
  partitionOption?: Record<string, unknown>;
  /** The settings that will be leveraged for AmazonRdsForOracle source partitioning. */
  partitionSettings?: AmazonRdsForOraclePartitionSettings;
  /** Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). */
  additionalColumns?: Record<string, unknown>;
}

/** A copy activity source for web page table. */
export interface WebSource extends CopySource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "WebSource";
  /** Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). */
  additionalColumns?: Record<string, unknown>;
}

/** A copy activity source for a MongoDB database. */
export interface MongoDbSource extends CopySource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "MongoDbSource";
  /** Database query. Should be a SQL-92 query expression. Type: string (or Expression with resultType string). */
  query?: Record<string, unknown>;
  /** Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). */
  additionalColumns?: Record<string, unknown>;
}

/** A copy activity source for a MongoDB Atlas database. */
export interface MongoDbAtlasSource extends CopySource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "MongoDbAtlasSource";
  /** Specifies selection filter using query operators. To return all documents in a collection, omit this parameter or pass an empty document ({}). Type: string (or Expression with resultType string). */
  filter?: Record<string, unknown>;
  /** Cursor methods for Mongodb query */
  cursorMethods?: MongoDbCursorMethodsProperties;
  /** Specifies the number of documents to return in each batch of the response from MongoDB Atlas instance. In most cases, modifying the batch size will not affect the user or the application. This property's main purpose is to avoid hit the limitation of response size. Type: integer (or Expression with resultType integer). */
  batchSize?: Record<string, unknown>;
  /** Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
  queryTimeout?: Record<string, unknown>;
  /** Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). */
  additionalColumns?: Record<string, unknown>;
}

/** A copy activity source for a MongoDB database. */
export interface MongoDbV2Source extends CopySource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "MongoDbV2Source";
  /** Specifies selection filter using query operators. To return all documents in a collection, omit this parameter or pass an empty document ({}). Type: string (or Expression with resultType string). */
  filter?: Record<string, unknown>;
  /** Cursor methods for Mongodb query */
  cursorMethods?: MongoDbCursorMethodsProperties;
  /** Specifies the number of documents to return in each batch of the response from MongoDB instance. In most cases, modifying the batch size will not affect the user or the application. This property's main purpose is to avoid hit the limitation of response size. Type: integer (or Expression with resultType integer). */
  batchSize?: Record<string, unknown>;
  /** Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
  queryTimeout?: Record<string, unknown>;
  /** Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). */
  additionalColumns?: Record<string, unknown>;
}

/** A copy activity source for a CosmosDB (MongoDB API) database. */
export interface CosmosDbMongoDbApiSource extends CopySource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "CosmosDbMongoDbApiSource";
  /** Specifies selection filter using query operators. To return all documents in a collection, omit this parameter or pass an empty document ({}). Type: string (or Expression with resultType string). */
  filter?: Record<string, unknown>;
  /** Cursor methods for Mongodb query. */
  cursorMethods?: MongoDbCursorMethodsProperties;
  /** Specifies the number of documents to return in each batch of the response from MongoDB instance. In most cases, modifying the batch size will not affect the user or the application. This property's main purpose is to avoid hit the limitation of response size. Type: integer (or Expression with resultType integer). */
  batchSize?: Record<string, unknown>;
  /** Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
  queryTimeout?: Record<string, unknown>;
  /** Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). */
  additionalColumns?: Record<string, unknown>;
}

/** A copy activity source for an Office 365 service. */
export interface Office365Source extends CopySource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "Office365Source";
  /** The groups containing all the users. Type: array of strings (or Expression with resultType array of strings). */
  allowedGroups?: Record<string, unknown>;
  /** The user scope uri. Type: string (or Expression with resultType string). */
  userScopeFilterUri?: Record<string, unknown>;
  /** The Column to apply the <paramref name="StartTime"/> and <paramref name="EndTime"/>. Type: string (or Expression with resultType string). */
  dateFilterColumn?: Record<string, unknown>;
  /** Start time of the requested range for this dataset. Type: string (or Expression with resultType string). */
  startTime?: Record<string, unknown>;
  /** End time of the requested range for this dataset. Type: string (or Expression with resultType string). */
  endTime?: Record<string, unknown>;
  /** The columns to be read out from the Office 365 table. Type: array of objects (or Expression with resultType array of objects). Example: [ { "name": "Id" }, { "name": "CreatedDateTime" } ] */
  outputColumns?: Record<string, unknown>;
}

/** A copy activity Azure Data Lake source. */
export interface AzureDataLakeStoreSource extends CopySource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AzureDataLakeStoreSource";
  /** If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). */
  recursive?: Record<string, unknown>;
}

/** A copy activity Azure BlobFS source. */
export interface AzureBlobFSSource extends CopySource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AzureBlobFSSource";
  /** Treat empty as null. Type: boolean (or Expression with resultType boolean). */
  treatEmptyAsNull?: Record<string, unknown>;
  /** Number of header lines to skip from each blob. Type: integer (or Expression with resultType integer). */
  skipHeaderLineCount?: Record<string, unknown>;
  /** If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). */
  recursive?: Record<string, unknown>;
}

/** A copy activity source for an HTTP file. */
export interface HttpSource extends CopySource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "HttpSource";
  /** Specifies the timeout for a HTTP client to get HTTP response from HTTP server. The default value is equivalent to System.Net.HttpWebRequest.Timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
  httpRequestTimeout?: Record<string, unknown>;
}

/** A copy activity snowflake source. */
export interface SnowflakeSource extends CopySource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "SnowflakeSource";
  /** Snowflake Sql query. Type: string (or Expression with resultType string). */
  query?: Record<string, unknown>;
  /** Snowflake export settings. */
  exportSettings?: SnowflakeExportCopyCommand;
}

/** A copy activity Azure Databricks Delta Lake source. */
export interface AzureDatabricksDeltaLakeSource extends CopySource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AzureDatabricksDeltaLakeSource";
  /** Azure Databricks Delta Lake Sql query. Type: string (or Expression with resultType string). */
  query?: Record<string, unknown>;
  /** Azure Databricks Delta Lake export settings. */
  exportSettings?: AzureDatabricksDeltaLakeExportCommand;
}

/** A copy activity source for sharePoint online list source. */
export interface SharePointOnlineListSource extends CopySource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "SharePointOnlineListSource";
  /** The OData query to filter the data in SharePoint Online list. For example, "$top=1". Type: string (or Expression with resultType string). */
  query?: Record<string, unknown>;
  /** The wait time to get a response from SharePoint Online. Default value is 5 minutes (00:05:00). Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
  httpRequestTimeout?: Record<string, unknown>;
}

/** A copy activity DelimitedText sink. */
export interface DelimitedTextSink extends CopySink {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "DelimitedTextSink";
  /** DelimitedText store settings. */
  storeSettings?: StoreWriteSettingsUnion;
  /** DelimitedText format settings. */
  formatSettings?: DelimitedTextWriteSettings;
}

/** A copy activity Json sink. */
export interface JsonSink extends CopySink {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "JsonSink";
  /** Json store settings. */
  storeSettings?: StoreWriteSettingsUnion;
  /** Json format settings. */
  formatSettings?: JsonWriteSettings;
}

/** A copy activity ORC sink. */
export interface OrcSink extends CopySink {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "OrcSink";
  /** ORC store settings. */
  storeSettings?: StoreWriteSettingsUnion;
  /** ORC format settings. */
  formatSettings?: OrcWriteSettings;
}

/** A copy activity Rest service Sink. */
export interface RestSink extends CopySink {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "RestSink";
  /** The HTTP method used to call the RESTful API. The default is POST. Type: string (or Expression with resultType string). */
  requestMethod?: Record<string, unknown>;
  /** The additional HTTP headers in the request to the RESTful API. Type: string (or Expression with resultType string). */
  additionalHeaders?: Record<string, unknown>;
  /** The timeout (TimeSpan) to get an HTTP response. It is the timeout to get a response, not the timeout to read response data. Default value: 00:01:40. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
  httpRequestTimeout?: Record<string, unknown>;
  /** The time to await before sending next request, in milliseconds */
  requestInterval?: Record<string, unknown>;
  /** Http Compression Type to Send data in compressed format with Optimal Compression Level, Default is None. And The Only Supported option is Gzip. */
  httpCompressionType?: Record<string, unknown>;
}

/** A copy activity Azure PostgreSQL sink. */
export interface AzurePostgreSqlSink extends CopySink {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AzurePostgreSqlSink";
  /** A query to execute before starting the copy. Type: string (or Expression with resultType string). */
  preCopyScript?: Record<string, unknown>;
}

/** A copy activity Azure MySql sink. */
export interface AzureMySqlSink extends CopySink {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AzureMySqlSink";
  /** A query to execute before starting the copy. Type: string (or Expression with resultType string). */
  preCopyScript?: Record<string, unknown>;
}

/** A copy activity Azure Databricks Delta Lake sink. */
export interface AzureDatabricksDeltaLakeSink extends CopySink {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AzureDatabricksDeltaLakeSink";
  /** SQL pre-copy script. Type: string (or Expression with resultType string). */
  preCopyScript?: Record<string, unknown>;
  /** Azure Databricks Delta Lake import settings. */
  importSettings?: AzureDatabricksDeltaLakeImportCommand;
}

/** A copy activity SAP Cloud for Customer sink. */
export interface SapCloudForCustomerSink extends CopySink {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "SapCloudForCustomerSink";
  /** The write behavior for the operation. Default is 'Insert'. */
  writeBehavior?: SapCloudForCustomerSinkWriteBehavior;
  /** The timeout (TimeSpan) to get an HTTP response. It is the timeout to get a response, not the timeout to read response data. Default value: 00:05:00. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
  httpRequestTimeout?: Record<string, unknown>;
}

/** A copy activity Azure Queue sink. */
export interface AzureQueueSink extends CopySink {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AzureQueueSink";
}

/** A copy activity Azure Table sink. */
export interface AzureTableSink extends CopySink {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AzureTableSink";
  /** Azure Table default partition key value. Type: string (or Expression with resultType string). */
  azureTableDefaultPartitionKeyValue?: Record<string, unknown>;
  /** Azure Table partition key name. Type: string (or Expression with resultType string). */
  azureTablePartitionKeyName?: Record<string, unknown>;
  /** Azure Table row key name. Type: string (or Expression with resultType string). */
  azureTableRowKeyName?: Record<string, unknown>;
  /** Azure Table insert type. Type: string (or Expression with resultType string). */
  azureTableInsertType?: Record<string, unknown>;
}

/** A copy activity Avro sink. */
export interface AvroSink extends CopySink {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AvroSink";
  /** Avro store settings. */
  storeSettings?: StoreWriteSettingsUnion;
  /** Avro format settings. */
  formatSettings?: AvroWriteSettings;
}

/** A copy activity Parquet sink. */
export interface ParquetSink extends CopySink {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "ParquetSink";
  /** Parquet store settings. */
  storeSettings?: StoreWriteSettingsUnion;
  /** Parquet format settings. */
  formatSettings?: ParquetWriteSettings;
}

/** A copy activity Binary sink. */
export interface BinarySink extends CopySink {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "BinarySink";
  /** Binary store settings. */
  storeSettings?: StoreWriteSettingsUnion;
}

/** A copy activity Azure Blob sink. */
export interface BlobSink extends CopySink {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "BlobSink";
  /** Blob writer overwrite files. Type: boolean (or Expression with resultType boolean). */
  blobWriterOverwriteFiles?: Record<string, unknown>;
  /** Blob writer date time format. Type: string (or Expression with resultType string). */
  blobWriterDateTimeFormat?: Record<string, unknown>;
  /** Blob writer add header. Type: boolean (or Expression with resultType boolean). */
  blobWriterAddHeader?: Record<string, unknown>;
  /** The type of copy behavior for copy sink. */
  copyBehavior?: Record<string, unknown>;
  /** Specify the custom metadata to be added to sink data. Type: array of objects (or Expression with resultType array of objects). */
  metadata?: MetadataItem[];
}

/** A copy activity file system sink. */
export interface FileSystemSink extends CopySink {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "FileSystemSink";
  /** The type of copy behavior for copy sink. */
  copyBehavior?: Record<string, unknown>;
}

/** A copy activity Document Database Collection sink. */
export interface DocumentDbCollectionSink extends CopySink {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "DocumentDbCollectionSink";
  /** Nested properties separator. Default is . (dot). Type: string (or Expression with resultType string). */
  nestingSeparator?: Record<string, unknown>;
  /** Describes how to write data to Azure Cosmos DB. Type: string (or Expression with resultType string). Allowed values: insert and upsert. */
  writeBehavior?: Record<string, unknown>;
}

/** A copy activity Azure CosmosDB (SQL API) Collection sink. */
export interface CosmosDbSqlApiSink extends CopySink {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "CosmosDbSqlApiSink";
  /** Describes how to write data to Azure Cosmos DB. Type: string (or Expression with resultType string). Allowed values: insert and upsert. */
  writeBehavior?: Record<string, unknown>;
}

/** A copy activity SQL sink. */
export interface SqlSink extends CopySink {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "SqlSink";
  /** SQL writer stored procedure name. Type: string (or Expression with resultType string). */
  sqlWriterStoredProcedureName?: Record<string, unknown>;
  /** SQL writer table type. Type: string (or Expression with resultType string). */
  sqlWriterTableType?: Record<string, unknown>;
  /** SQL pre-copy script. Type: string (or Expression with resultType string). */
  preCopyScript?: Record<string, unknown>;
  /** SQL stored procedure parameters. */
  storedProcedureParameters?: {
    [propertyName: string]: StoredProcedureParameter;
  };
  /** The stored procedure parameter name of the table type. Type: string (or Expression with resultType string). */
  storedProcedureTableTypeParameterName?: Record<string, unknown>;
  /** The option to handle sink table, such as autoCreate. For now only 'autoCreate' value is supported. Type: string (or Expression with resultType string). */
  tableOption?: Record<string, unknown>;
  /** Whether to use table lock during bulk copy. Type: boolean (or Expression with resultType boolean). */
  sqlWriterUseTableLock?: Record<string, unknown>;
  /** Write behavior when copying data into sql. Type: SqlWriteBehaviorEnum (or Expression with resultType SqlWriteBehaviorEnum) */
  writeBehavior?: Record<string, unknown>;
  /** SQL upsert settings. */
  upsertSettings?: SqlUpsertSettings;
}

/** A copy activity SQL server sink. */
export interface SqlServerSink extends CopySink {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "SqlServerSink";
  /** SQL writer stored procedure name. Type: string (or Expression with resultType string). */
  sqlWriterStoredProcedureName?: Record<string, unknown>;
  /** SQL writer table type. Type: string (or Expression with resultType string). */
  sqlWriterTableType?: Record<string, unknown>;
  /** SQL pre-copy script. Type: string (or Expression with resultType string). */
  preCopyScript?: Record<string, unknown>;
  /** SQL stored procedure parameters. */
  storedProcedureParameters?: {
    [propertyName: string]: StoredProcedureParameter;
  };
  /** The stored procedure parameter name of the table type. Type: string (or Expression with resultType string). */
  storedProcedureTableTypeParameterName?: Record<string, unknown>;
  /** The option to handle sink table, such as autoCreate. For now only 'autoCreate' value is supported. Type: string (or Expression with resultType string). */
  tableOption?: Record<string, unknown>;
  /** Whether to use table lock during bulk copy. Type: boolean (or Expression with resultType boolean). */
  sqlWriterUseTableLock?: Record<string, unknown>;
  /** Write behavior when copying data into sql server. Type: SqlWriteBehaviorEnum (or Expression with resultType SqlWriteBehaviorEnum) */
  writeBehavior?: Record<string, unknown>;
  /** SQL upsert settings. */
  upsertSettings?: SqlUpsertSettings;
}

/** A copy activity Azure SQL sink. */
export interface AzureSqlSink extends CopySink {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AzureSqlSink";
  /** SQL writer stored procedure name. Type: string (or Expression with resultType string). */
  sqlWriterStoredProcedureName?: Record<string, unknown>;
  /** SQL writer table type. Type: string (or Expression with resultType string). */
  sqlWriterTableType?: Record<string, unknown>;
  /** SQL pre-copy script. Type: string (or Expression with resultType string). */
  preCopyScript?: Record<string, unknown>;
  /** SQL stored procedure parameters. */
  storedProcedureParameters?: {
    [propertyName: string]: StoredProcedureParameter;
  };
  /** The stored procedure parameter name of the table type. Type: string (or Expression with resultType string). */
  storedProcedureTableTypeParameterName?: Record<string, unknown>;
  /** The option to handle sink table, such as autoCreate. For now only 'autoCreate' value is supported. Type: string (or Expression with resultType string). */
  tableOption?: Record<string, unknown>;
  /** Whether to use table lock during bulk copy. Type: boolean (or Expression with resultType boolean). */
  sqlWriterUseTableLock?: Record<string, unknown>;
  /** Write behavior when copying data into Azure SQL. Type: SqlWriteBehaviorEnum (or Expression with resultType SqlWriteBehaviorEnum) */
  writeBehavior?: Record<string, unknown>;
  /** SQL upsert settings. */
  upsertSettings?: SqlUpsertSettings;
}

/** A copy activity Azure SQL Managed Instance sink. */
export interface SqlMISink extends CopySink {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "SqlMISink";
  /** SQL writer stored procedure name. Type: string (or Expression with resultType string). */
  sqlWriterStoredProcedureName?: Record<string, unknown>;
  /** SQL writer table type. Type: string (or Expression with resultType string). */
  sqlWriterTableType?: Record<string, unknown>;
  /** SQL pre-copy script. Type: string (or Expression with resultType string). */
  preCopyScript?: Record<string, unknown>;
  /** SQL stored procedure parameters. */
  storedProcedureParameters?: {
    [propertyName: string]: StoredProcedureParameter;
  };
  /** The stored procedure parameter name of the table type. Type: string (or Expression with resultType string). */
  storedProcedureTableTypeParameterName?: Record<string, unknown>;
  /** The option to handle sink table, such as autoCreate. For now only 'autoCreate' value is supported. Type: string (or Expression with resultType string). */
  tableOption?: Record<string, unknown>;
  /** Whether to use table lock during bulk copy. Type: boolean (or Expression with resultType boolean). */
  sqlWriterUseTableLock?: Record<string, unknown>;
  /** White behavior when copying data into azure SQL MI. Type: SqlWriteBehaviorEnum (or Expression with resultType SqlWriteBehaviorEnum) */
  writeBehavior?: Record<string, unknown>;
  /** SQL upsert settings. */
  upsertSettings?: SqlUpsertSettings;
}

/** A copy activity SQL Data Warehouse sink. */
export interface SqlDWSink extends CopySink {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "SqlDWSink";
  /** SQL pre-copy script. Type: string (or Expression with resultType string). */
  preCopyScript?: Record<string, unknown>;
  /** Indicates to use PolyBase to copy data into SQL Data Warehouse when applicable. Type: boolean (or Expression with resultType boolean). */
  allowPolyBase?: Record<string, unknown>;
  /** Specifies PolyBase-related settings when allowPolyBase is true. */
  polyBaseSettings?: PolybaseSettings;
  /** Indicates to use Copy Command to copy data into SQL Data Warehouse. Type: boolean (or Expression with resultType boolean). */
  allowCopyCommand?: Record<string, unknown>;
  /** Specifies Copy Command related settings when allowCopyCommand is true. */
  copyCommandSettings?: DWCopyCommandSettings;
  /** The option to handle sink table, such as autoCreate. For now only 'autoCreate' value is supported. Type: string (or Expression with resultType string). */
  tableOption?: Record<string, unknown>;
  /** Whether to use table lock during bulk copy. Type: boolean (or Expression with resultType boolean). */
  sqlWriterUseTableLock?: Record<string, unknown>;
  /** Write behavior when copying data into azure SQL DW. Type: SqlDWWriteBehaviorEnum (or Expression with resultType SqlDWWriteBehaviorEnum) */
  writeBehavior?: Record<string, unknown>;
  /** SQL DW upsert settings. */
  upsertSettings?: SqlDWUpsertSettings;
}

/** A copy activity snowflake sink. */
export interface SnowflakeSink extends CopySink {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "SnowflakeSink";
  /** SQL pre-copy script. Type: string (or Expression with resultType string). */
  preCopyScript?: Record<string, unknown>;
  /** Snowflake import settings. */
  importSettings?: SnowflakeImportCopyCommand;
}

/** A copy activity Oracle sink. */
export interface OracleSink extends CopySink {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "OracleSink";
  /** SQL pre-copy script. Type: string (or Expression with resultType string). */
  preCopyScript?: Record<string, unknown>;
}

/** A copy activity Azure Data Lake Store sink. */
export interface AzureDataLakeStoreSink extends CopySink {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AzureDataLakeStoreSink";
  /** The type of copy behavior for copy sink. */
  copyBehavior?: Record<string, unknown>;
  /** Single File Parallel. */
  enableAdlsSingleFileParallel?: Record<string, unknown>;
}

/** A copy activity Azure Data Lake Storage Gen2 sink. */
export interface AzureBlobFSSink extends CopySink {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AzureBlobFSSink";
  /** The type of copy behavior for copy sink. */
  copyBehavior?: Record<string, unknown>;
  /** Specify the custom metadata to be added to sink data. Type: array of objects (or Expression with resultType array of objects). */
  metadata?: MetadataItem[];
}

/** A copy activity Azure Search Index sink. */
export interface AzureSearchIndexSink extends CopySink {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AzureSearchIndexSink";
  /** Specify the write behavior when upserting documents into Azure Search Index. */
  writeBehavior?: AzureSearchIndexWriteBehaviorType;
}

/** A copy activity ODBC sink. */
export interface OdbcSink extends CopySink {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "OdbcSink";
  /** A query to execute before starting the copy. Type: string (or Expression with resultType string). */
  preCopyScript?: Record<string, unknown>;
}

/** A copy activity Informix sink. */
export interface InformixSink extends CopySink {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "InformixSink";
  /** A query to execute before starting the copy. Type: string (or Expression with resultType string). */
  preCopyScript?: Record<string, unknown>;
}

/** A copy activity Microsoft Access sink. */
export interface MicrosoftAccessSink extends CopySink {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "MicrosoftAccessSink";
  /** A query to execute before starting the copy. Type: string (or Expression with resultType string). */
  preCopyScript?: Record<string, unknown>;
}

/** A copy activity Dynamics sink. */
export interface DynamicsSink extends CopySink {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "DynamicsSink";
  /** The write behavior for the operation. */
  writeBehavior: DynamicsSinkWriteBehavior;
  /** The flag indicating whether ignore null values from input dataset (except key fields) during write operation. Default is false. Type: boolean (or Expression with resultType boolean). */
  ignoreNullValues?: Record<string, unknown>;
  /** The logical name of the alternate key which will be used when upserting records. Type: string (or Expression with resultType string). */
  alternateKeyName?: Record<string, unknown>;
}

/** A copy activity Dynamics CRM sink. */
export interface DynamicsCrmSink extends CopySink {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "DynamicsCrmSink";
  /** The write behavior for the operation. */
  writeBehavior: DynamicsSinkWriteBehavior;
  /** The flag indicating whether to ignore null values from input dataset (except key fields) during write operation. Default is false. Type: boolean (or Expression with resultType boolean). */
  ignoreNullValues?: Record<string, unknown>;
  /** The logical name of the alternate key which will be used when upserting records. Type: string (or Expression with resultType string). */
  alternateKeyName?: Record<string, unknown>;
}

/** A copy activity Common Data Service for Apps sink. */
export interface CommonDataServiceForAppsSink extends CopySink {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "CommonDataServiceForAppsSink";
  /** The write behavior for the operation. */
  writeBehavior: DynamicsSinkWriteBehavior;
  /** The flag indicating whether to ignore null values from input dataset (except key fields) during write operation. Default is false. Type: boolean (or Expression with resultType boolean). */
  ignoreNullValues?: Record<string, unknown>;
  /** The logical name of the alternate key which will be used when upserting records. Type: string (or Expression with resultType string). */
  alternateKeyName?: Record<string, unknown>;
}

/** A copy activity Azure Data Explorer sink. */
export interface AzureDataExplorerSink extends CopySink {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AzureDataExplorerSink";
  /** A name of a pre-created csv mapping that was defined on the target Kusto table. Type: string. */
  ingestionMappingName?: Record<string, unknown>;
  /** An explicit column mapping description provided in a json format. Type: string. */
  ingestionMappingAsJson?: Record<string, unknown>;
  /** If set to true, any aggregation will be skipped. Default is false. Type: boolean. */
  flushImmediately?: Record<string, unknown>;
}

/** A copy activity Salesforce sink. */
export interface SalesforceSink extends CopySink {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "SalesforceSink";
  /** The write behavior for the operation. Default is Insert. */
  writeBehavior?: SalesforceSinkWriteBehavior;
  /** The name of the external ID field for upsert operation. Default value is 'Id' column. Type: string (or Expression with resultType string). */
  externalIdFieldName?: Record<string, unknown>;
  /** The flag indicating whether or not to ignore null values from input dataset (except key fields) during write operation. Default value is false. If set it to true, it means ADF will leave the data in the destination object unchanged when doing upsert/update operation and insert defined default value when doing insert operation, versus ADF will update the data in the destination object to NULL when doing upsert/update operation and insert NULL value when doing insert operation. Type: boolean (or Expression with resultType boolean). */
  ignoreNullValues?: Record<string, unknown>;
}

/** A copy activity Salesforce Service Cloud sink. */
export interface SalesforceServiceCloudSink extends CopySink {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "SalesforceServiceCloudSink";
  /** The write behavior for the operation. Default is Insert. */
  writeBehavior?: SalesforceSinkWriteBehavior;
  /** The name of the external ID field for upsert operation. Default value is 'Id' column. Type: string (or Expression with resultType string). */
  externalIdFieldName?: Record<string, unknown>;
  /** The flag indicating whether or not to ignore null values from input dataset (except key fields) during write operation. Default value is false. If set it to true, it means ADF will leave the data in the destination object unchanged when doing upsert/update operation and insert defined default value when doing insert operation, versus ADF will update the data in the destination object to NULL when doing upsert/update operation and insert NULL value when doing insert operation. Type: boolean (or Expression with resultType boolean). */
  ignoreNullValues?: Record<string, unknown>;
}

/** A copy activity MongoDB Atlas sink. */
export interface MongoDbAtlasSink extends CopySink {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "MongoDbAtlasSink";
  /** Specifies whether the document with same key to be overwritten (upsert) rather than throw exception (insert). The default value is "insert". Type: string (or Expression with resultType string). Type: string (or Expression with resultType string). */
  writeBehavior?: Record<string, unknown>;
}

/** A copy activity MongoDB sink. */
export interface MongoDbV2Sink extends CopySink {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "MongoDbV2Sink";
  /** Specifies whether the document with same key to be overwritten (upsert) rather than throw exception (insert). The default value is "insert". Type: string (or Expression with resultType string). Type: string (or Expression with resultType string). */
  writeBehavior?: Record<string, unknown>;
}

/** A copy activity sink for a CosmosDB (MongoDB API) database. */
export interface CosmosDbMongoDbApiSink extends CopySink {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "CosmosDbMongoDbApiSink";
  /** Specifies whether the document with same key to be overwritten (upsert) rather than throw exception (insert). The default value is "insert". Type: string (or Expression with resultType string). Type: string (or Expression with resultType string). */
  writeBehavior?: Record<string, unknown>;
}

/** Snowflake export command settings. */
export interface SnowflakeExportCopyCommand extends ExportSettings {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "SnowflakeExportCopyCommand";
  /** Additional copy options directly passed to snowflake Copy Command. Type: key value pairs (value should be string type) (or Expression with resultType object). Example: "additionalCopyOptions": { "DATE_FORMAT": "MM/DD/YYYY", "TIME_FORMAT": "'HH24:MI:SS.FF'" } */
  additionalCopyOptions?: { [propertyName: string]: Record<string, unknown> };
  /** Additional format options directly passed to snowflake Copy Command. Type: key value pairs (value should be string type) (or Expression with resultType object). Example: "additionalFormatOptions": { "OVERWRITE": "TRUE", "MAX_FILE_SIZE": "'FALSE'" } */
  additionalFormatOptions?: { [propertyName: string]: Record<string, unknown> };
}

/** Azure Databricks Delta Lake export command settings. */
export interface AzureDatabricksDeltaLakeExportCommand extends ExportSettings {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AzureDatabricksDeltaLakeExportCommand";
  /** Specify the date format for the csv in Azure Databricks Delta Lake Copy. Type: string (or Expression with resultType string). */
  dateFormat?: Record<string, unknown>;
  /** Specify the timestamp format for the csv in Azure Databricks Delta Lake Copy. Type: string (or Expression with resultType string). */
  timestampFormat?: Record<string, unknown>;
}

/** Azure Databricks Delta Lake import command settings. */
export interface AzureDatabricksDeltaLakeImportCommand extends ImportSettings {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AzureDatabricksDeltaLakeImportCommand";
  /** Specify the date format for csv in Azure Databricks Delta Lake Copy. Type: string (or Expression with resultType string). */
  dateFormat?: Record<string, unknown>;
  /** Specify the timestamp format for csv in Azure Databricks Delta Lake Copy. Type: string (or Expression with resultType string). */
  timestampFormat?: Record<string, unknown>;
}

/** Snowflake import command settings. */
export interface SnowflakeImportCopyCommand extends ImportSettings {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "SnowflakeImportCopyCommand";
  /** Additional copy options directly passed to snowflake Copy Command. Type: key value pairs (value should be string type) (or Expression with resultType object). Example: "additionalCopyOptions": { "DATE_FORMAT": "MM/DD/YYYY", "TIME_FORMAT": "'HH24:MI:SS.FF'" } */
  additionalCopyOptions?: { [propertyName: string]: Record<string, unknown> };
  /** Additional format options directly passed to snowflake Copy Command. Type: key value pairs (value should be string type) (or Expression with resultType object). Example: "additionalFormatOptions": { "FORCE": "TRUE", "LOAD_UNCERTAIN_FILES": "'FALSE'" } */
  additionalFormatOptions?: { [propertyName: string]: Record<string, unknown> };
}

/** A copy activity tabular translator. */
export interface TabularTranslator extends CopyTranslator {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "TabularTranslator";
  /** Column mappings. Example: "UserId: MyUserId, Group: MyGroup, Name: MyName" Type: string (or Expression with resultType string). This property will be retired. Please use mappings property. */
  columnMappings?: Record<string, unknown>;
  /** The schema mapping to map between tabular data and hierarchical data. Example: {"Column1": "$.Column1", "Column2": "$.Column2.Property1", "Column3": "$.Column2.Property2"}. Type: object (or Expression with resultType object). This property will be retired. Please use mappings property. */
  schemaMapping?: Record<string, unknown>;
  /** The JSON Path of the Nested Array that is going to do cross-apply. Type: object (or Expression with resultType object). */
  collectionReference?: Record<string, unknown>;
  /** Whether to map complex (array and object) values to simple strings in json format. Type: boolean (or Expression with resultType boolean). */
  mapComplexValuesToString?: Record<string, unknown>;
  /** Column mappings with logical types. Tabular->tabular example: [{"source":{"name":"CustomerName","type":"String"},"sink":{"name":"ClientName","type":"String"}},{"source":{"name":"CustomerAddress","type":"String"},"sink":{"name":"ClientAddress","type":"String"}}].  Hierarchical->tabular example: [{"source":{"path":"$.CustomerName","type":"String"},"sink":{"name":"ClientName","type":"String"}},{"source":{"path":"$.CustomerAddress","type":"String"},"sink":{"name":"ClientAddress","type":"String"}}]. Type: object (or Expression with resultType object). */
  mappings?: Record<string, unknown>;
  /** Whether to enable the advanced type conversion feature in the Copy activity. Type: boolean (or Expression with resultType boolean). */
  typeConversion?: Record<string, unknown>;
  /** Type conversion settings */
  typeConversionSettings?: TypeConversionSettings;
}

/** Execute power query data flow activity properties. */
export interface ExecutePowerQueryActivityTypeProperties
  extends ExecuteDataFlowActivityTypeProperties {
  /** (Deprecated. Please use Queries). List of Power Query activity sinks mapped to a queryName. */
  sinks?: { [propertyName: string]: PowerQuerySink };
  /** List of mapping for Power Query mashup query to sink dataset(s). */
  queries?: PowerQuerySinkMapping[];
}

/** Trigger referenced dependency. */
export interface TriggerDependencyReference extends DependencyReference {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type:
    | "TriggerDependencyReference"
    | "TumblingWindowTriggerDependencyReference";
  /** Referenced trigger. */
  referenceTrigger: TriggerReference;
}

/** Self referenced tumbling window trigger dependency. */
export interface SelfDependencyTumblingWindowTriggerReference
  extends DependencyReference {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "SelfDependencyTumblingWindowTriggerReference";
  /** Timespan applied to the start time of a tumbling window when evaluating dependency. */
  offset: string;
  /** The size of the window when evaluating the dependency. If undefined the frequency of the tumbling window will be used. */
  size?: string;
}

/** Execute pipeline activity. */
export interface ExecutePipelineActivity extends ControlActivity {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "ExecutePipeline";
  /** Pipeline reference. */
  pipeline: PipelineReference;
  /** Pipeline parameters. */
  parameters?: { [propertyName: string]: Record<string, unknown> };
  /** Defines whether activity execution will wait for the dependent pipeline execution to finish. Default is false. */
  waitOnCompletion?: boolean;
}

/** This activity evaluates a boolean expression and executes either the activities under the ifTrueActivities property or the ifFalseActivities property depending on the result of the expression. */
export interface IfConditionActivity extends ControlActivity {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "IfCondition";
  /** An expression that would evaluate to Boolean. This is used to determine the block of activities (ifTrueActivities or ifFalseActivities) that will be executed. */
  expression: Expression;
  /** List of activities to execute if expression is evaluated to true. This is an optional property and if not provided, the activity will exit without any action. */
  ifTrueActivities?: ActivityUnion[];
  /** List of activities to execute if expression is evaluated to false. This is an optional property and if not provided, the activity will exit without any action. */
  ifFalseActivities?: ActivityUnion[];
}

/** This activity evaluates an expression and executes activities under the cases property that correspond to the expression evaluation expected in the equals property. */
export interface SwitchActivity extends ControlActivity {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "Switch";
  /** An expression that would evaluate to a string or integer. This is used to determine the block of activities in cases that will be executed. */
  on: Expression;
  /** List of cases that correspond to expected values of the 'on' property. This is an optional property and if not provided, the activity will execute activities provided in defaultActivities. */
  cases?: SwitchCase[];
  /** List of activities to execute if no case condition is satisfied. This is an optional property and if not provided, the activity will exit without any action. */
  defaultActivities?: ActivityUnion[];
}

/** This activity is used for iterating over a collection and execute given activities. */
export interface ForEachActivity extends ControlActivity {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "ForEach";
  /** Should the loop be executed in sequence or in parallel (max 50) */
  isSequential?: boolean;
  /** Batch count to be used for controlling the number of parallel execution (when isSequential is set to false). */
  batchCount?: number;
  /** Collection to iterate. */
  items: Expression;
  /** List of activities to execute . */
  activities: ActivityUnion[];
}

/** This activity suspends pipeline execution for the specified interval. */
export interface WaitActivity extends ControlActivity {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "Wait";
  /** Duration in seconds. */
  waitTimeInSeconds: Record<string, unknown>;
}

/** This activity executes inner activities until the specified boolean expression results to true or timeout is reached, whichever is earlier. */
export interface UntilActivity extends ControlActivity {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "Until";
  /** An expression that would evaluate to Boolean. The loop will continue until this expression evaluates to true */
  expression: Expression;
  /** Specifies the timeout for the activity to run. If there is no value specified, it takes the value of TimeSpan.FromDays(7) which is 1 week as default. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
  timeout?: Record<string, unknown>;
  /** List of activities to execute. */
  activities: ActivityUnion[];
}

/** This activity verifies that an external resource exists. */
export interface ValidationActivity extends ControlActivity {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "Validation";
  /** Specifies the timeout for the activity to run. If there is no value specified, it takes the value of TimeSpan.FromDays(7) which is 1 week as default. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
  timeout?: Record<string, unknown>;
  /** A delay in seconds between validation attempts. If no value is specified, 10 seconds will be used as the default. Type: integer (or Expression with resultType integer). */
  sleep?: Record<string, unknown>;
  /** Can be used if dataset points to a file. The file must be greater than or equal in size to the value specified. Type: integer (or Expression with resultType integer). */
  minimumSize?: Record<string, unknown>;
  /** Can be used if dataset points to a folder. If set to true, the folder must have at least one file. If set to false, the folder must be empty. Type: boolean (or Expression with resultType boolean). */
  childItems?: Record<string, unknown>;
  /** Validation activity dataset reference. */
  dataset: DatasetReference;
}

/** Filter and return results from input array based on the conditions. */
export interface FilterActivity extends ControlActivity {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "Filter";
  /** Input array on which filter should be applied. */
  items: Expression;
  /** Condition to be used for filtering the input. */
  condition: Expression;
}

/** Set value for a Variable. */
export interface SetVariableActivity extends ControlActivity {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "SetVariable";
  /** Name of the variable whose value needs to be set. */
  variableName?: string;
  /** Value to be set. Could be a static value or Expression */
  value?: Record<string, unknown>;
}

/** Append value for a Variable of type Array. */
export interface AppendVariableActivity extends ControlActivity {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AppendVariable";
  /** Name of the variable whose value needs to be appended to. */
  variableName?: string;
  /** Value to be appended. Could be a static value or Expression */
  value?: Record<string, unknown>;
}

/** WebHook activity. */
export interface WebHookActivity extends ControlActivity {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "WebHook";
  /** Rest API method for target endpoint. */
  method: WebHookActivityMethod;
  /** WebHook activity target endpoint and path. Type: string (or Expression with resultType string). */
  url: Record<string, unknown>;
  /** The timeout within which the webhook should be called back. If there is no value specified, it defaults to 10 minutes. Type: string. Pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
  timeout?: string;
  /** Represents the headers that will be sent to the request. For example, to set the language and type on a request: "headers" : { "Accept-Language": "en-us", "Content-Type": "application/json" }. Type: string (or Expression with resultType string). */
  headers?: Record<string, unknown>;
  /** Represents the payload that will be sent to the endpoint. Required for POST/PUT method, not allowed for GET method Type: string (or Expression with resultType string). */
  body?: Record<string, unknown>;
  /** Authentication method used for calling the endpoint. */
  authentication?: WebActivityAuthentication;
  /** When set to true, statusCode, output and error in callback request body will be consumed by activity. The activity can be marked as failed by setting statusCode >= 400 in callback request. Default is false. Type: boolean (or Expression with resultType boolean). */
  reportStatusOnCallBack?: Record<string, unknown>;
}

/** Copy activity. */
export interface CopyActivity extends ExecutionActivity {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "Copy";
  /** List of inputs for the activity. */
  inputs?: DatasetReference[];
  /** List of outputs for the activity. */
  outputs?: DatasetReference[];
  /** Copy activity source. */
  source: CopySourceUnion;
  /** Copy activity sink. */
  sink: CopySinkUnion;
  /** Copy activity translator. If not specified, tabular translator is used. */
  translator?: Record<string, unknown>;
  /** Specifies whether to copy data via an interim staging. Default value is false. Type: boolean (or Expression with resultType boolean). */
  enableStaging?: Record<string, unknown>;
  /** Specifies interim staging settings when EnableStaging is true. */
  stagingSettings?: StagingSettings;
  /** Maximum number of concurrent sessions opened on the source or sink to avoid overloading the data store. Type: integer (or Expression with resultType integer), minimum: 0. */
  parallelCopies?: Record<string, unknown>;
  /** Maximum number of data integration units that can be used to perform this data movement. Type: integer (or Expression with resultType integer), minimum: 0. */
  dataIntegrationUnits?: Record<string, unknown>;
  /** Whether to skip incompatible row. Default value is false. Type: boolean (or Expression with resultType boolean). */
  enableSkipIncompatibleRow?: Record<string, unknown>;
  /** Redirect incompatible row settings when EnableSkipIncompatibleRow is true. */
  redirectIncompatibleRowSettings?: RedirectIncompatibleRowSettings;
  /** (Deprecated. Please use LogSettings) Log storage settings customer need to provide when enabling session log. */
  logStorageSettings?: LogStorageSettings;
  /** Log settings customer needs provide when enabling log. */
  logSettings?: LogSettings;
  /** Preserve Rules. */
  preserveRules?: Record<string, unknown>[];
  /** Preserve rules. */
  preserve?: Record<string, unknown>[];
  /** Whether to enable Data Consistency validation. Type: boolean (or Expression with resultType boolean). */
  validateDataConsistency?: Record<string, unknown>;
  /** Specify the fault tolerance for data consistency. */
  skipErrorFile?: SkipErrorFile;
}

/** HDInsight Hive activity type. */
export interface HDInsightHiveActivity extends ExecutionActivity {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "HDInsightHive";
  /** Storage linked service references. */
  storageLinkedServices?: LinkedServiceReference[];
  /** User specified arguments to HDInsightActivity. */
  arguments?: Record<string, unknown>[];
  /** Debug info option. */
  getDebugInfo?: HDInsightActivityDebugInfoOption;
  /** Script path. Type: string (or Expression with resultType string). */
  scriptPath?: Record<string, unknown>;
  /** Script linked service reference. */
  scriptLinkedService?: LinkedServiceReference;
  /** Allows user to specify defines for Hive job request. */
  defines?: { [propertyName: string]: Record<string, unknown> };
  /** User specified arguments under hivevar namespace. */
  variables?: Record<string, unknown>[];
  /** Query timeout value (in minutes).  Effective when the HDInsight cluster is with ESP (Enterprise Security Package) */
  queryTimeout?: number;
}

/** HDInsight Pig activity type. */
export interface HDInsightPigActivity extends ExecutionActivity {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "HDInsightPig";
  /** Storage linked service references. */
  storageLinkedServices?: LinkedServiceReference[];
  /** User specified arguments to HDInsightActivity. Type: array (or Expression with resultType array). */
  arguments?: Record<string, unknown>;
  /** Debug info option. */
  getDebugInfo?: HDInsightActivityDebugInfoOption;
  /** Script path. Type: string (or Expression with resultType string). */
  scriptPath?: Record<string, unknown>;
  /** Script linked service reference. */
  scriptLinkedService?: LinkedServiceReference;
  /** Allows user to specify defines for Pig job request. */
  defines?: { [propertyName: string]: Record<string, unknown> };
}

/** HDInsight MapReduce activity type. */
export interface HDInsightMapReduceActivity extends ExecutionActivity {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "HDInsightMapReduce";
  /** Storage linked service references. */
  storageLinkedServices?: LinkedServiceReference[];
  /** User specified arguments to HDInsightActivity. */
  arguments?: Record<string, unknown>[];
  /** Debug info option. */
  getDebugInfo?: HDInsightActivityDebugInfoOption;
  /** Class name. Type: string (or Expression with resultType string). */
  className: Record<string, unknown>;
  /** Jar path. Type: string (or Expression with resultType string). */
  jarFilePath: Record<string, unknown>;
  /** Jar linked service reference. */
  jarLinkedService?: LinkedServiceReference;
  /** Jar libs. */
  jarLibs?: Record<string, unknown>[];
  /** Allows user to specify defines for the MapReduce job request. */
  defines?: { [propertyName: string]: Record<string, unknown> };
}

/** HDInsight streaming activity type. */
export interface HDInsightStreamingActivity extends ExecutionActivity {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "HDInsightStreaming";
  /** Storage linked service references. */
  storageLinkedServices?: LinkedServiceReference[];
  /** User specified arguments to HDInsightActivity. */
  arguments?: Record<string, unknown>[];
  /** Debug info option. */
  getDebugInfo?: HDInsightActivityDebugInfoOption;
  /** Mapper executable name. Type: string (or Expression with resultType string). */
  mapper: Record<string, unknown>;
  /** Reducer executable name. Type: string (or Expression with resultType string). */
  reducer: Record<string, unknown>;
  /** Input blob path. Type: string (or Expression with resultType string). */
  input: Record<string, unknown>;
  /** Output blob path. Type: string (or Expression with resultType string). */
  output: Record<string, unknown>;
  /** Paths to streaming job files. Can be directories. */
  filePaths: Record<string, unknown>[];
  /** Linked service reference where the files are located. */
  fileLinkedService?: LinkedServiceReference;
  /** Combiner executable name. Type: string (or Expression with resultType string). */
  combiner?: Record<string, unknown>;
  /** Command line environment values. */
  commandEnvironment?: Record<string, unknown>[];
  /** Allows user to specify defines for streaming job request. */
  defines?: { [propertyName: string]: Record<string, unknown> };
}

/** HDInsight Spark activity. */
export interface HDInsightSparkActivity extends ExecutionActivity {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "HDInsightSpark";
  /** The root path in 'sparkJobLinkedService' for all the job’s files. Type: string (or Expression with resultType string). */
  rootPath: Record<string, unknown>;
  /** The relative path to the root folder of the code/package to be executed. Type: string (or Expression with resultType string). */
  entryFilePath: Record<string, unknown>;
  /** The user-specified arguments to HDInsightSparkActivity. */
  arguments?: Record<string, unknown>[];
  /** Debug info option. */
  getDebugInfo?: HDInsightActivityDebugInfoOption;
  /** The storage linked service for uploading the entry file and dependencies, and for receiving logs. */
  sparkJobLinkedService?: LinkedServiceReference;
  /** The application's Java/Spark main class. */
  className?: string;
  /** The user to impersonate that will execute the job. Type: string (or Expression with resultType string). */
  proxyUser?: Record<string, unknown>;
  /** Spark configuration property. */
  sparkConfig?: { [propertyName: string]: Record<string, unknown> };
}

/** Execute SSIS package activity. */
export interface ExecuteSsisPackageActivity extends ExecutionActivity {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "ExecuteSSISPackage";
  /** SSIS package location. */
  packageLocation: SsisPackageLocation;
  /** Specifies the runtime to execute SSIS package. The value should be "x86" or "x64". Type: string (or Expression with resultType string). */
  runtime?: Record<string, unknown>;
  /** The logging level of SSIS package execution. Type: string (or Expression with resultType string). */
  loggingLevel?: Record<string, unknown>;
  /** The environment path to execute the SSIS package. Type: string (or Expression with resultType string). */
  environmentPath?: Record<string, unknown>;
  /** The package execution credential. */
  executionCredential?: SsisExecutionCredential;
  /** The integration runtime reference. */
  connectVia: IntegrationRuntimeReference;
  /** The project level parameters to execute the SSIS package. */
  projectParameters?: { [propertyName: string]: SsisExecutionParameter };
  /** The package level parameters to execute the SSIS package. */
  packageParameters?: { [propertyName: string]: SsisExecutionParameter };
  /** The project level connection managers to execute the SSIS package. */
  projectConnectionManagers?: {
    [propertyName: string]: { [propertyName: string]: SsisExecutionParameter };
  };
  /** The package level connection managers to execute the SSIS package. */
  packageConnectionManagers?: {
    [propertyName: string]: { [propertyName: string]: SsisExecutionParameter };
  };
  /** The property overrides to execute the SSIS package. */
  propertyOverrides?: { [propertyName: string]: SsisPropertyOverride };
  /** SSIS package execution log location. */
  logLocation?: SsisLogLocation;
}

/** Custom activity type. */
export interface CustomActivity extends ExecutionActivity {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "Custom";
  /** Command for custom activity Type: string (or Expression with resultType string). */
  command: Record<string, unknown>;
  /** Resource linked service reference. */
  resourceLinkedService?: LinkedServiceReference;
  /** Folder path for resource files Type: string (or Expression with resultType string). */
  folderPath?: Record<string, unknown>;
  /** Reference objects */
  referenceObjects?: CustomActivityReferenceObject;
  /** User defined property bag. There is no restriction on the keys or values that can be used. The user specified custom activity has the full responsibility to consume and interpret the content defined. */
  extendedProperties?: { [propertyName: string]: Record<string, unknown> };
  /** The retention time for the files submitted for custom activity. Type: double (or Expression with resultType double). */
  retentionTimeInDays?: Record<string, unknown>;
  /** Elevation level and scope for the user, default is nonadmin task. Type: string (or Expression with resultType double). */
  autoUserSpecification?: Record<string, unknown>;
}

/** SQL stored procedure activity type. */
export interface SqlServerStoredProcedureActivity extends ExecutionActivity {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "SqlServerStoredProcedure";
  /** Stored procedure name. Type: string (or Expression with resultType string). */
  storedProcedureName: Record<string, unknown>;
  /** Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}". */
  storedProcedureParameters?: {
    [propertyName: string]: StoredProcedureParameter;
  };
}

/** Delete activity. */
export interface DeleteActivity extends ExecutionActivity {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "Delete";
  /** If true, files or sub-folders under current folder path will be deleted recursively. Default is false. Type: boolean (or Expression with resultType boolean). */
  recursive?: Record<string, unknown>;
  /** The max concurrent connections to connect data source at the same time. */
  maxConcurrentConnections?: number;
  /** Whether to record detailed logs of delete-activity execution. Default value is false. Type: boolean (or Expression with resultType boolean). */
  enableLogging?: Record<string, unknown>;
  /** Log storage settings customer need to provide when enableLogging is true. */
  logStorageSettings?: LogStorageSettings;
  /** Delete activity dataset reference. */
  dataset: DatasetReference;
  /** Delete activity store settings. */
  storeSettings?: StoreReadSettingsUnion;
}

/** Azure Data Explorer command activity. */
export interface AzureDataExplorerCommandActivity extends ExecutionActivity {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AzureDataExplorerCommand";
  /** A control command, according to the Azure Data Explorer command syntax. Type: string (or Expression with resultType string). */
  command: Record<string, unknown>;
  /** Control command timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9]))..) */
  commandTimeout?: Record<string, unknown>;
}

/** Lookup activity. */
export interface LookupActivity extends ExecutionActivity {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "Lookup";
  /** Dataset-specific source properties, same as copy activity source. */
  source: CopySourceUnion;
  /** Lookup activity dataset reference. */
  dataset: DatasetReference;
  /** Whether to return first row or all rows. Default value is true. Type: boolean (or Expression with resultType boolean). */
  firstRowOnly?: Record<string, unknown>;
}

/** Web activity. */
export interface WebActivity extends ExecutionActivity {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "WebActivity";
  /** Rest API method for target endpoint. */
  method: WebActivityMethod;
  /** Web activity target endpoint and path. Type: string (or Expression with resultType string). */
  url: Record<string, unknown>;
  /** Represents the headers that will be sent to the request. For example, to set the language and type on a request: "headers" : { "Accept-Language": "en-us", "Content-Type": "application/json" }. Type: string (or Expression with resultType string). */
  headers?: Record<string, unknown>;
  /** Represents the payload that will be sent to the endpoint. Required for POST/PUT method, not allowed for GET method Type: string (or Expression with resultType string). */
  body?: Record<string, unknown>;
  /** Authentication method used for calling the endpoint. */
  authentication?: WebActivityAuthentication;
  /** List of datasets passed to web endpoint. */
  datasets?: DatasetReference[];
  /** List of linked services passed to web endpoint. */
  linkedServices?: LinkedServiceReference[];
  /** The integration runtime reference. */
  connectVia?: IntegrationRuntimeReference;
}

/** Activity to get metadata of dataset */
export interface GetMetadataActivity extends ExecutionActivity {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "GetMetadata";
  /** GetMetadata activity dataset reference. */
  dataset: DatasetReference;
  /** Fields of metadata to get from dataset. */
  fieldList?: Record<string, unknown>[];
  /** GetMetadata activity store settings. */
  storeSettings?: StoreReadSettingsUnion;
  /** GetMetadata activity format settings. */
  formatSettings?: FormatReadSettingsUnion;
}

/** Azure ML Batch Execution activity. */
export interface AzureMLBatchExecutionActivity extends ExecutionActivity {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AzureMLBatchExecution";
  /** Key,Value pairs to be passed to the Azure ML Batch Execution Service endpoint. Keys must match the names of web service parameters defined in the published Azure ML web service. Values will be passed in the GlobalParameters property of the Azure ML batch execution request. */
  globalParameters?: { [propertyName: string]: Record<string, unknown> };
  /** Key,Value pairs, mapping the names of Azure ML endpoint's Web Service Outputs to AzureMLWebServiceFile objects specifying the output Blob locations. This information will be passed in the WebServiceOutputs property of the Azure ML batch execution request. */
  webServiceOutputs?: { [propertyName: string]: AzureMLWebServiceFile };
  /** Key,Value pairs, mapping the names of Azure ML endpoint's Web Service Inputs to AzureMLWebServiceFile objects specifying the input Blob locations.. This information will be passed in the WebServiceInputs property of the Azure ML batch execution request. */
  webServiceInputs?: { [propertyName: string]: AzureMLWebServiceFile };
}

/** Azure ML Update Resource management activity. */
export interface AzureMLUpdateResourceActivity extends ExecutionActivity {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AzureMLUpdateResource";
  /** Name of the Trained Model module in the Web Service experiment to be updated. Type: string (or Expression with resultType string). */
  trainedModelName: Record<string, unknown>;
  /** Name of Azure Storage linked service holding the .ilearner file that will be uploaded by the update operation. */
  trainedModelLinkedServiceName: LinkedServiceReference;
  /** The relative file path in trainedModelLinkedService to represent the .ilearner file that will be uploaded by the update operation.  Type: string (or Expression with resultType string). */
  trainedModelFilePath: Record<string, unknown>;
}

/** Azure ML Execute Pipeline activity. */
export interface AzureMLExecutePipelineActivity extends ExecutionActivity {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AzureMLExecutePipeline";
  /** ID of the published Azure ML pipeline. Type: string (or Expression with resultType string). */
  mlPipelineId?: Record<string, unknown>;
  /** ID of the published Azure ML pipeline endpoint. Type: string (or Expression with resultType string). */
  mlPipelineEndpointId?: Record<string, unknown>;
  /** Version of the published Azure ML pipeline endpoint. Type: string (or Expression with resultType string). */
  version?: Record<string, unknown>;
  /** Run history experiment name of the pipeline run. This information will be passed in the ExperimentName property of the published pipeline execution request. Type: string (or Expression with resultType string). */
  experimentName?: Record<string, unknown>;
  /** Key,Value pairs to be passed to the published Azure ML pipeline endpoint. Keys must match the names of pipeline parameters defined in the published pipeline. Values will be passed in the ParameterAssignments property of the published pipeline execution request. Type: object with key value pairs (or Expression with resultType object). */
  mlPipelineParameters?: Record<string, unknown>;
  /** Dictionary used for changing data path assignments without retraining. Values will be passed in the dataPathAssignments property of the published pipeline execution request. Type: object with key value pairs (or Expression with resultType object). */
  dataPathAssignments?: Record<string, unknown>;
  /** The parent Azure ML Service pipeline run id. This information will be passed in the ParentRunId property of the published pipeline execution request. Type: string (or Expression with resultType string). */
  mlParentRunId?: Record<string, unknown>;
  /** Whether to continue execution of other steps in the PipelineRun if a step fails. This information will be passed in the continueOnStepFailure property of the published pipeline execution request. Type: boolean (or Expression with resultType boolean). */
  continueOnStepFailure?: Record<string, unknown>;
}

/** Data Lake Analytics U-SQL activity. */
export interface DataLakeAnalyticsUsqlActivity extends ExecutionActivity {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "DataLakeAnalyticsU-SQL";
  /** Case-sensitive path to folder that contains the U-SQL script. Type: string (or Expression with resultType string). */
  scriptPath: Record<string, unknown>;
  /** Script linked service reference. */
  scriptLinkedService: LinkedServiceReference;
  /** The maximum number of nodes simultaneously used to run the job. Default value is 1. Type: integer (or Expression with resultType integer), minimum: 1. */
  degreeOfParallelism?: Record<string, unknown>;
  /** Determines which jobs out of all that are queued should be selected to run first. The lower the number, the higher the priority. Default value is 1000. Type: integer (or Expression with resultType integer), minimum: 1. */
  priority?: Record<string, unknown>;
  /** Parameters for U-SQL job request. */
  parameters?: { [propertyName: string]: Record<string, unknown> };
  /** Runtime version of the U-SQL engine to use. Type: string (or Expression with resultType string). */
  runtimeVersion?: Record<string, unknown>;
  /** Compilation mode of U-SQL. Must be one of these values : Semantic, Full and SingleBox. Type: string (or Expression with resultType string). */
  compilationMode?: Record<string, unknown>;
}

/** DatabricksNotebook activity. */
export interface DatabricksNotebookActivity extends ExecutionActivity {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "DatabricksNotebook";
  /** The absolute path of the notebook to be run in the Databricks Workspace. This path must begin with a slash. Type: string (or Expression with resultType string). */
  notebookPath: Record<string, unknown>;
  /** Base parameters to be used for each run of this job.If the notebook takes a parameter that is not specified, the default value from the notebook will be used. */
  baseParameters?: { [propertyName: string]: Record<string, unknown> };
  /** A list of libraries to be installed on the cluster that will execute the job. */
  libraries?: { [propertyName: string]: Record<string, unknown> }[];
}

/** DatabricksSparkJar activity. */
export interface DatabricksSparkJarActivity extends ExecutionActivity {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "DatabricksSparkJar";
  /** The full name of the class containing the main method to be executed. This class must be contained in a JAR provided as a library. Type: string (or Expression with resultType string). */
  mainClassName: Record<string, unknown>;
  /** Parameters that will be passed to the main method. */
  parameters?: Record<string, unknown>[];
  /** A list of libraries to be installed on the cluster that will execute the job. */
  libraries?: { [propertyName: string]: Record<string, unknown> }[];
}

/** DatabricksSparkPython activity. */
export interface DatabricksSparkPythonActivity extends ExecutionActivity {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "DatabricksSparkPython";
  /** The URI of the Python file to be executed. DBFS paths are supported. Type: string (or Expression with resultType string). */
  pythonFile: Record<string, unknown>;
  /** Command line parameters that will be passed to the Python file. */
  parameters?: Record<string, unknown>[];
  /** A list of libraries to be installed on the cluster that will execute the job. */
  libraries?: { [propertyName: string]: Record<string, unknown> }[];
}

/** Azure Function activity. */
export interface AzureFunctionActivity extends ExecutionActivity {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AzureFunctionActivity";
  /** Rest API method for target endpoint. */
  method: AzureFunctionActivityMethod;
  /** Name of the Function that the Azure Function Activity will call. Type: string (or Expression with resultType string) */
  functionName: Record<string, unknown>;
  /** Represents the headers that will be sent to the request. For example, to set the language and type on a request: "headers" : { "Accept-Language": "en-us", "Content-Type": "application/json" }. Type: string (or Expression with resultType string). */
  headers?: Record<string, unknown>;
  /** Represents the payload that will be sent to the endpoint. Required for POST/PUT method, not allowed for GET method Type: string (or Expression with resultType string). */
  body?: Record<string, unknown>;
}

/** Execute data flow activity. */
export interface ExecuteDataFlowActivity extends ExecutionActivity {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "ExecuteDataFlow";
  /** Data flow reference. */
  dataFlow: DataFlowReference;
  /** Staging info for execute data flow activity. */
  staging?: DataFlowStagingInfo;
  /** The integration runtime reference. */
  integrationRuntime?: IntegrationRuntimeReference;
  /** Compute properties for data flow activity. */
  compute?: ExecuteDataFlowActivityTypePropertiesCompute;
  /** Trace level setting used for data flow monitoring output. Supported values are: 'coarse', 'fine', and 'none'. Type: string (or Expression with resultType string) */
  traceLevel?: Record<string, unknown>;
  /** Continue on error setting used for data flow execution. Enables processing to continue if a sink fails. Type: boolean (or Expression with resultType boolean) */
  continueOnError?: Record<string, unknown>;
  /** Concurrent run setting used for data flow execution. Allows sinks with the same save order to be processed concurrently. Type: boolean (or Expression with resultType boolean) */
  runConcurrently?: Record<string, unknown>;
}

/** Trigger that creates pipeline runs periodically, on schedule. */
export interface ScheduleTrigger extends MultiplePipelineTrigger {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "ScheduleTrigger";
  /** Recurrence schedule configuration. */
  recurrence: ScheduleTriggerRecurrence;
}

/** Trigger that runs every time the selected Blob container changes. */
export interface BlobTrigger extends MultiplePipelineTrigger {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "BlobTrigger";
  /** The path of the container/folder that will trigger the pipeline. */
  folderPath: string;
  /** The max number of parallel files to handle when it is triggered. */
  maxConcurrency: number;
  /** The Azure Storage linked service reference. */
  linkedService: LinkedServiceReference;
}

/** Trigger that runs every time a Blob event occurs. */
export interface BlobEventsTrigger extends MultiplePipelineTrigger {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "BlobEventsTrigger";
  /** The blob path must begin with the pattern provided for trigger to fire. For example, '/records/blobs/december/' will only fire the trigger for blobs in the december folder under the records container. At least one of these must be provided: blobPathBeginsWith, blobPathEndsWith. */
  blobPathBeginsWith?: string;
  /** The blob path must end with the pattern provided for trigger to fire. For example, 'december/boxes.csv' will only fire the trigger for blobs named boxes in a december folder. At least one of these must be provided: blobPathBeginsWith, blobPathEndsWith. */
  blobPathEndsWith?: string;
  /** If set to true, blobs with zero bytes will be ignored. */
  ignoreEmptyBlobs?: boolean;
  /** The type of events that cause this trigger to fire. */
  events: BlobEventTypes[];
  /** The ARM resource ID of the Storage Account. */
  scope: string;
}

/** Trigger that runs every time a custom event is received. */
export interface CustomEventsTrigger extends MultiplePipelineTrigger {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "CustomEventsTrigger";
  /** The event subject must begin with the pattern provided for trigger to fire. At least one of these must be provided: subjectBeginsWith, subjectEndsWith. */
  subjectBeginsWith?: string;
  /** The event subject must end with the pattern provided for trigger to fire. At least one of these must be provided: subjectBeginsWith, subjectEndsWith. */
  subjectEndsWith?: string;
  /** The list of event types that cause this trigger to fire. */
  events: Record<string, unknown>[];
  /** The ARM resource ID of the Azure Event Grid Topic. */
  scope: string;
}

/** Power query source. */
export interface PowerQuerySource extends DataFlowSource {
  /** source script. */
  script?: string;
}

/** Power query sink. */
export interface PowerQuerySink extends DataFlowSink {
  /** sink script. */
  script?: string;
}

/** A copy activity Azure Table source. */
export interface AzureTableSource extends TabularSource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AzureTableSource";
  /** Azure Table source query. Type: string (or Expression with resultType string). */
  azureTableSourceQuery?: Record<string, unknown>;
  /** Azure Table source ignore table not found. Type: boolean (or Expression with resultType boolean). */
  azureTableSourceIgnoreTableNotFound?: Record<string, unknown>;
}

/** A copy activity source for Informix. */
export interface InformixSource extends TabularSource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "InformixSource";
  /** Database query. Type: string (or Expression with resultType string). */
  query?: Record<string, unknown>;
}

/** A copy activity source for Db2 databases. */
export interface Db2Source extends TabularSource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "Db2Source";
  /** Database query. Type: string (or Expression with resultType string). */
  query?: Record<string, unknown>;
}

/** A copy activity source for ODBC databases. */
export interface OdbcSource extends TabularSource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "OdbcSource";
  /** Database query. Type: string (or Expression with resultType string). */
  query?: Record<string, unknown>;
}

/** A copy activity source for MySQL databases. */
export interface MySqlSource extends TabularSource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "MySqlSource";
  /** Database query. Type: string (or Expression with resultType string). */
  query?: Record<string, unknown>;
}

/** A copy activity source for PostgreSQL databases. */
export interface PostgreSqlSource extends TabularSource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "PostgreSqlSource";
  /** Database query. Type: string (or Expression with resultType string). */
  query?: Record<string, unknown>;
}

/** A copy activity source for Sybase databases. */
export interface SybaseSource extends TabularSource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "SybaseSource";
  /** Database query. Type: string (or Expression with resultType string). */
  query?: Record<string, unknown>;
}

/** A copy activity source for SapBW server via MDX. */
export interface SapBwSource extends TabularSource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "SapBwSource";
  /** MDX query. Type: string (or Expression with resultType string). */
  query?: Record<string, unknown>;
}

/** A copy activity Salesforce source. */
export interface SalesforceSource extends TabularSource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "SalesforceSource";
  /** Database query. Type: string (or Expression with resultType string). */
  query?: Record<string, unknown>;
  /** The read behavior for the operation. Default is Query. */
  readBehavior?: SalesforceSourceReadBehavior;
}

/** A copy activity source for SAP Cloud for Customer source. */
export interface SapCloudForCustomerSource extends TabularSource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "SapCloudForCustomerSource";
  /** SAP Cloud for Customer OData query. For example, "$top=1". Type: string (or Expression with resultType string). */
  query?: Record<string, unknown>;
  /** The timeout (TimeSpan) to get an HTTP response. It is the timeout to get a response, not the timeout to read response data. Default value: 00:05:00. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
  httpRequestTimeout?: Record<string, unknown>;
}

/** A copy activity source for SAP ECC source. */
export interface SapEccSource extends TabularSource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "SapEccSource";
  /** SAP ECC OData query. For example, "$top=1". Type: string (or Expression with resultType string). */
  query?: Record<string, unknown>;
  /** The timeout (TimeSpan) to get an HTTP response. It is the timeout to get a response, not the timeout to read response data. Default value: 00:05:00. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
  httpRequestTimeout?: Record<string, unknown>;
}

/** A copy activity source for SAP HANA source. */
export interface SapHanaSource extends TabularSource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "SapHanaSource";
  /** SAP HANA Sql query. Type: string (or Expression with resultType string). */
  query?: Record<string, unknown>;
  /** The packet size of data read from SAP HANA. Type: integer(or Expression with resultType integer). */
  packetSize?: Record<string, unknown>;
  /** The partition mechanism that will be used for SAP HANA read in parallel. Possible values include: "None", "PhysicalPartitionsOfTable", "SapHanaDynamicRange". */
  partitionOption?: Record<string, unknown>;
  /** The settings that will be leveraged for SAP HANA source partitioning. */
  partitionSettings?: SapHanaPartitionSettings;
}

/** A copy activity source for SAP Business Warehouse Open Hub Destination source. */
export interface SapOpenHubSource extends TabularSource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "SapOpenHubSource";
  /** Whether to exclude the records of the last request. The default value is true. Type: boolean (or Expression with resultType boolean). */
  excludeLastRequest?: Record<string, unknown>;
  /** The ID of request for delta loading. Once it is set, only data with requestId larger than the value of this property will be retrieved. The default value is 0. Type: integer (or Expression with resultType integer ). */
  baseRequestId?: Record<string, unknown>;
  /** Specifies the custom RFC function module that will be used to read data from SAP Table. Type: string (or Expression with resultType string). */
  customRfcReadTableFunctionModule?: Record<string, unknown>;
  /** The single character that will be used as delimiter passed to SAP RFC as well as splitting the output data retrieved. Type: string (or Expression with resultType string). */
  sapDataColumnDelimiter?: Record<string, unknown>;
}

/** A copy activity source for SAP Table source. */
export interface SapTableSource extends TabularSource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "SapTableSource";
  /** The number of rows to be retrieved. Type: integer(or Expression with resultType integer). */
  rowCount?: Record<string, unknown>;
  /** The number of rows that will be skipped. Type: integer (or Expression with resultType integer). */
  rowSkips?: Record<string, unknown>;
  /** The fields of the SAP table that will be retrieved. For example, column0, column1. Type: string (or Expression with resultType string). */
  rfcTableFields?: Record<string, unknown>;
  /** The options for the filtering of the SAP Table. For example, COLUMN0 EQ SOME VALUE. Type: string (or Expression with resultType string). */
  rfcTableOptions?: Record<string, unknown>;
  /** Specifies the maximum number of rows that will be retrieved at a time when retrieving data from SAP Table. Type: integer (or Expression with resultType integer). */
  batchSize?: Record<string, unknown>;
  /** Specifies the custom RFC function module that will be used to read data from SAP Table. Type: string (or Expression with resultType string). */
  customRfcReadTableFunctionModule?: Record<string, unknown>;
  /** The single character that will be used as delimiter passed to SAP RFC as well as splitting the output data retrieved. Type: string (or Expression with resultType string). */
  sapDataColumnDelimiter?: Record<string, unknown>;
  /** The partition mechanism that will be used for SAP table read in parallel. Possible values include: "None", "PartitionOnInt", "PartitionOnCalendarYear", "PartitionOnCalendarMonth", "PartitionOnCalendarDate", "PartitionOnTime". */
  partitionOption?: Record<string, unknown>;
  /** The settings that will be leveraged for SAP table source partitioning. */
  partitionSettings?: SapTablePartitionSettings;
}

/** A copy activity SQL source. */
export interface SqlSource extends TabularSource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "SqlSource";
  /** SQL reader query. Type: string (or Expression with resultType string). */
  sqlReaderQuery?: Record<string, unknown>;
  /** Name of the stored procedure for a SQL Database source. This cannot be used at the same time as SqlReaderQuery. Type: string (or Expression with resultType string). */
  sqlReaderStoredProcedureName?: Record<string, unknown>;
  /** Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}". */
  storedProcedureParameters?: {
    [propertyName: string]: StoredProcedureParameter;
  };
  /** Specifies the transaction locking behavior for the SQL source. Allowed values: ReadCommitted/ReadUncommitted/RepeatableRead/Serializable/Snapshot. The default value is ReadCommitted. Type: string (or Expression with resultType string). */
  isolationLevel?: Record<string, unknown>;
  /** The partition mechanism that will be used for Sql read in parallel. Possible values include: "None", "PhysicalPartitionsOfTable", "DynamicRange". */
  partitionOption?: Record<string, unknown>;
  /** The settings that will be leveraged for Sql source partitioning. */
  partitionSettings?: SqlPartitionSettings;
}

/** A copy activity SQL server source. */
export interface SqlServerSource extends TabularSource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "SqlServerSource";
  /** SQL reader query. Type: string (or Expression with resultType string). */
  sqlReaderQuery?: Record<string, unknown>;
  /** Name of the stored procedure for a SQL Database source. This cannot be used at the same time as SqlReaderQuery. Type: string (or Expression with resultType string). */
  sqlReaderStoredProcedureName?: Record<string, unknown>;
  /** Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}". */
  storedProcedureParameters?: {
    [propertyName: string]: StoredProcedureParameter;
  };
  /** Which additional types to produce. */
  produceAdditionalTypes?: Record<string, unknown>;
  /** The partition mechanism that will be used for Sql read in parallel. Possible values include: "None", "PhysicalPartitionsOfTable", "DynamicRange". */
  partitionOption?: Record<string, unknown>;
  /** The settings that will be leveraged for Sql source partitioning. */
  partitionSettings?: SqlPartitionSettings;
}

/** A copy activity Amazon RDS for SQL Server source. */
export interface AmazonRdsForSqlServerSource extends TabularSource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AmazonRdsForSqlServerSource";
  /** SQL reader query. Type: string (or Expression with resultType string). */
  sqlReaderQuery?: Record<string, unknown>;
  /** Name of the stored procedure for a SQL Database source. This cannot be used at the same time as SqlReaderQuery. Type: string (or Expression with resultType string). */
  sqlReaderStoredProcedureName?: Record<string, unknown>;
  /** Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}". */
  storedProcedureParameters?: {
    [propertyName: string]: StoredProcedureParameter;
  };
  /** Which additional types to produce. */
  produceAdditionalTypes?: Record<string, unknown>;
  /** The partition mechanism that will be used for Sql read in parallel. Possible values include: "None", "PhysicalPartitionsOfTable", "DynamicRange". */
  partitionOption?: Record<string, unknown>;
  /** The settings that will be leveraged for Sql source partitioning. */
  partitionSettings?: SqlPartitionSettings;
}

/** A copy activity Azure SQL source. */
export interface AzureSqlSource extends TabularSource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AzureSqlSource";
  /** SQL reader query. Type: string (or Expression with resultType string). */
  sqlReaderQuery?: Record<string, unknown>;
  /** Name of the stored procedure for a SQL Database source. This cannot be used at the same time as SqlReaderQuery. Type: string (or Expression with resultType string). */
  sqlReaderStoredProcedureName?: Record<string, unknown>;
  /** Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}". */
  storedProcedureParameters?: {
    [propertyName: string]: StoredProcedureParameter;
  };
  /** Which additional types to produce. */
  produceAdditionalTypes?: Record<string, unknown>;
  /** The partition mechanism that will be used for Sql read in parallel. Possible values include: "None", "PhysicalPartitionsOfTable", "DynamicRange". */
  partitionOption?: Record<string, unknown>;
  /** The settings that will be leveraged for Sql source partitioning. */
  partitionSettings?: SqlPartitionSettings;
}

/** A copy activity Azure SQL Managed Instance source. */
export interface SqlMISource extends TabularSource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "SqlMISource";
  /** SQL reader query. Type: string (or Expression with resultType string). */
  sqlReaderQuery?: Record<string, unknown>;
  /** Name of the stored procedure for a Azure SQL Managed Instance source. This cannot be used at the same time as SqlReaderQuery. Type: string (or Expression with resultType string). */
  sqlReaderStoredProcedureName?: Record<string, unknown>;
  /** Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}". */
  storedProcedureParameters?: {
    [propertyName: string]: StoredProcedureParameter;
  };
  /** Which additional types to produce. */
  produceAdditionalTypes?: Record<string, unknown>;
  /** The partition mechanism that will be used for Sql read in parallel. Possible values include: "None", "PhysicalPartitionsOfTable", "DynamicRange". */
  partitionOption?: Record<string, unknown>;
  /** The settings that will be leveraged for Sql source partitioning. */
  partitionSettings?: SqlPartitionSettings;
}

/** A copy activity SQL Data Warehouse source. */
export interface SqlDWSource extends TabularSource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "SqlDWSource";
  /** SQL Data Warehouse reader query. Type: string (or Expression with resultType string). */
  sqlReaderQuery?: Record<string, unknown>;
  /** Name of the stored procedure for a SQL Data Warehouse source. This cannot be used at the same time as SqlReaderQuery. Type: string (or Expression with resultType string). */
  sqlReaderStoredProcedureName?: Record<string, unknown>;
  /** Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}". Type: object (or Expression with resultType object), itemType: StoredProcedureParameter. */
  storedProcedureParameters?: Record<string, unknown>;
  /** The partition mechanism that will be used for Sql read in parallel. Possible values include: "None", "PhysicalPartitionsOfTable", "DynamicRange". */
  partitionOption?: Record<string, unknown>;
  /** The settings that will be leveraged for Sql source partitioning. */
  partitionSettings?: SqlPartitionSettings;
}

/** A copy activity Azure MySQL source. */
export interface AzureMySqlSource extends TabularSource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AzureMySqlSource";
  /** Database query. Type: string (or Expression with resultType string). */
  query?: Record<string, unknown>;
}

/** A copy activity Teradata source. */
export interface TeradataSource extends TabularSource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "TeradataSource";
  /** Teradata query. Type: string (or Expression with resultType string). */
  query?: Record<string, unknown>;
  /** The partition mechanism that will be used for teradata read in parallel. Possible values include: "None", "Hash", "DynamicRange". */
  partitionOption?: Record<string, unknown>;
  /** The settings that will be leveraged for teradata source partitioning. */
  partitionSettings?: TeradataPartitionSettings;
}

/** A copy activity source for a Cassandra database. */
export interface CassandraSource extends TabularSource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "CassandraSource";
  /** Database query. Should be a SQL-92 query expression or Cassandra Query Language (CQL) command. Type: string (or Expression with resultType string). */
  query?: Record<string, unknown>;
  /** The consistency level specifies how many Cassandra servers must respond to a read request before returning data to the client application. Cassandra checks the specified number of Cassandra servers for data to satisfy the read request. Must be one of cassandraSourceReadConsistencyLevels. The default value is 'ONE'. It is case-insensitive. */
  consistencyLevel?: CassandraSourceReadConsistencyLevels;
}

/** A copy activity Amazon Marketplace Web Service source. */
export interface AmazonMWSSource extends TabularSource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AmazonMWSSource";
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: Record<string, unknown>;
}

/** A copy activity Azure PostgreSQL source. */
export interface AzurePostgreSqlSource extends TabularSource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AzurePostgreSqlSource";
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: Record<string, unknown>;
}

/** A copy activity Concur Service source. */
export interface ConcurSource extends TabularSource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "ConcurSource";
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: Record<string, unknown>;
}

/** A copy activity Couchbase server source. */
export interface CouchbaseSource extends TabularSource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "CouchbaseSource";
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: Record<string, unknown>;
}

/** A copy activity Drill server source. */
export interface DrillSource extends TabularSource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "DrillSource";
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: Record<string, unknown>;
}

/** A copy activity Eloqua server source. */
export interface EloquaSource extends TabularSource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "EloquaSource";
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: Record<string, unknown>;
}

/** A copy activity Google BigQuery service source. */
export interface GoogleBigQuerySource extends TabularSource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "GoogleBigQuerySource";
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: Record<string, unknown>;
}

/** A copy activity Greenplum Database source. */
export interface GreenplumSource extends TabularSource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "GreenplumSource";
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: Record<string, unknown>;
}

/** A copy activity HBase server source. */
export interface HBaseSource extends TabularSource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "HBaseSource";
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: Record<string, unknown>;
}

/** A copy activity Hive Server source. */
export interface HiveSource extends TabularSource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "HiveSource";
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: Record<string, unknown>;
}

/** A copy activity Hubspot Service source. */
export interface HubspotSource extends TabularSource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "HubspotSource";
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: Record<string, unknown>;
}

/** A copy activity Impala server source. */
export interface ImpalaSource extends TabularSource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "ImpalaSource";
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: Record<string, unknown>;
}

/** A copy activity Jira Service source. */
export interface JiraSource extends TabularSource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "JiraSource";
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: Record<string, unknown>;
}

/** A copy activity Magento server source. */
export interface MagentoSource extends TabularSource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "MagentoSource";
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: Record<string, unknown>;
}

/** A copy activity MariaDB server source. */
export interface MariaDBSource extends TabularSource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "MariaDBSource";
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: Record<string, unknown>;
}

/** A copy activity Azure MariaDB source. */
export interface AzureMariaDBSource extends TabularSource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AzureMariaDBSource";
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: Record<string, unknown>;
}

/** A copy activity Marketo server source. */
export interface MarketoSource extends TabularSource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "MarketoSource";
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: Record<string, unknown>;
}

/** A copy activity Paypal Service source. */
export interface PaypalSource extends TabularSource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "PaypalSource";
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: Record<string, unknown>;
}

/** A copy activity Phoenix server source. */
export interface PhoenixSource extends TabularSource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "PhoenixSource";
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: Record<string, unknown>;
}

/** A copy activity Presto server source. */
export interface PrestoSource extends TabularSource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "PrestoSource";
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: Record<string, unknown>;
}

/** A copy activity QuickBooks server source. */
export interface QuickBooksSource extends TabularSource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "QuickBooksSource";
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: Record<string, unknown>;
}

/** A copy activity ServiceNow server source. */
export interface ServiceNowSource extends TabularSource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "ServiceNowSource";
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: Record<string, unknown>;
}

/** A copy activity Shopify Service source. */
export interface ShopifySource extends TabularSource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "ShopifySource";
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: Record<string, unknown>;
}

/** A copy activity Spark Server source. */
export interface SparkSource extends TabularSource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "SparkSource";
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: Record<string, unknown>;
}

/** A copy activity Square Service source. */
export interface SquareSource extends TabularSource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "SquareSource";
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: Record<string, unknown>;
}

/** A copy activity Xero Service source. */
export interface XeroSource extends TabularSource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "XeroSource";
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: Record<string, unknown>;
}

/** A copy activity Zoho server source. */
export interface ZohoSource extends TabularSource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "ZohoSource";
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: Record<string, unknown>;
}

/** A copy activity Netezza source. */
export interface NetezzaSource extends TabularSource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "NetezzaSource";
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: Record<string, unknown>;
  /** The partition mechanism that will be used for Netezza read in parallel. Possible values include: "None", "DataSlice", "DynamicRange". */
  partitionOption?: Record<string, unknown>;
  /** The settings that will be leveraged for Netezza source partitioning. */
  partitionSettings?: NetezzaPartitionSettings;
}

/** A copy activity Vertica source. */
export interface VerticaSource extends TabularSource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "VerticaSource";
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: Record<string, unknown>;
}

/** A copy activity Salesforce Marketing Cloud source. */
export interface SalesforceMarketingCloudSource extends TabularSource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "SalesforceMarketingCloudSource";
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: Record<string, unknown>;
}

/** A copy activity Responsys source. */
export interface ResponsysSource extends TabularSource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "ResponsysSource";
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: Record<string, unknown>;
}

/** A copy activity Dynamics AX source. */
export interface DynamicsAXSource extends TabularSource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "DynamicsAXSource";
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: Record<string, unknown>;
  /** The timeout (TimeSpan) to get an HTTP response. It is the timeout to get a response, not the timeout to read response data. Default value: 00:05:00. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
  httpRequestTimeout?: Record<string, unknown>;
}

/** A copy activity Oracle Service Cloud source. */
export interface OracleServiceCloudSource extends TabularSource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "OracleServiceCloudSource";
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: Record<string, unknown>;
}

/** A copy activity Google AdWords service source. */
export interface GoogleAdWordsSource extends TabularSource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "GoogleAdWordsSource";
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: Record<string, unknown>;
}

/** A copy activity source for Amazon Redshift Source. */
export interface AmazonRedshiftSource extends TabularSource {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "AmazonRedshiftSource";
  /** Database query. Type: string (or Expression with resultType string). */
  query?: Record<string, unknown>;
  /** The Amazon S3 settings needed for the interim Amazon S3 when copying from Amazon Redshift with unload. With this, data from Amazon Redshift source will be unloaded into S3 first and then copied into the targeted sink from the interim S3. */
  redshiftUnloadSettings?: RedshiftUnloadSettings;
}

/** Referenced tumbling window trigger dependency. */
export interface TumblingWindowTriggerDependencyReference
  extends TriggerDependencyReference {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  type: "TumblingWindowTriggerDependencyReference";
  /** Timespan applied to the start time of a tumbling window when evaluating dependency. */
  offset?: string;
  /** The size of the window when evaluating the dependency. If undefined the frequency of the tumbling window will be used. */
  size?: string;
}

/** Defines headers for DataFlowDebugSession_create operation. */
export interface DataFlowDebugSessionCreateHeaders {
  /** URI to poll for asynchronous operation status. */
  location?: string;
}

/** Defines headers for DataFlowDebugSession_executeCommand operation. */
export interface DataFlowDebugSessionExecuteCommandHeaders {
  /** URI to poll for asynchronous operation status. */
  location?: string;
}

/** Known values of {@link FactoryIdentityType} that the service accepts. */
export enum KnownFactoryIdentityType {
  SystemAssigned = "SystemAssigned",
  UserAssigned = "UserAssigned",
  SystemAssignedUserAssigned = "SystemAssigned,UserAssigned"
}

/**
 * Defines values for FactoryIdentityType. \
 * {@link KnownFactoryIdentityType} can be used interchangeably with FactoryIdentityType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **SystemAssigned** \
 * **UserAssigned** \
 * **SystemAssigned,UserAssigned**
 */
export type FactoryIdentityType = string;

/** Known values of {@link GlobalParameterType} that the service accepts. */
export enum KnownGlobalParameterType {
  Object = "Object",
  String = "String",
  Int = "Int",
  Float = "Float",
  Bool = "Bool",
  Array = "Array"
}

/**
 * Defines values for GlobalParameterType. \
 * {@link KnownGlobalParameterType} can be used interchangeably with GlobalParameterType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Object** \
 * **String** \
 * **Int** \
 * **Float** \
 * **Bool** \
 * **Array**
 */
export type GlobalParameterType = string;

/** Known values of {@link PublicNetworkAccess} that the service accepts. */
export enum KnownPublicNetworkAccess {
  Enabled = "Enabled",
  Disabled = "Disabled"
}

/**
 * Defines values for PublicNetworkAccess. \
 * {@link KnownPublicNetworkAccess} can be used interchangeably with PublicNetworkAccess,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Enabled** \
 * **Disabled**
 */
export type PublicNetworkAccess = string;

/** Known values of {@link IntegrationRuntimeType} that the service accepts. */
export enum KnownIntegrationRuntimeType {
  Managed = "Managed",
  SelfHosted = "SelfHosted"
}

/**
 * Defines values for IntegrationRuntimeType. \
 * {@link KnownIntegrationRuntimeType} can be used interchangeably with IntegrationRuntimeType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Managed** \
 * **SelfHosted**
 */
export type IntegrationRuntimeType = string;

/** Known values of {@link IntegrationRuntimeAutoUpdate} that the service accepts. */
export enum KnownIntegrationRuntimeAutoUpdate {
  On = "On",
  Off = "Off"
}

/**
 * Defines values for IntegrationRuntimeAutoUpdate. \
 * {@link KnownIntegrationRuntimeAutoUpdate} can be used interchangeably with IntegrationRuntimeAutoUpdate,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **On** \
 * **Off**
 */
export type IntegrationRuntimeAutoUpdate = string;

/** Known values of {@link IntegrationRuntimeState} that the service accepts. */
export enum KnownIntegrationRuntimeState {
  Initial = "Initial",
  Stopped = "Stopped",
  Started = "Started",
  Starting = "Starting",
  Stopping = "Stopping",
  NeedRegistration = "NeedRegistration",
  Online = "Online",
  Limited = "Limited",
  Offline = "Offline",
  AccessDenied = "AccessDenied"
}

/**
 * Defines values for IntegrationRuntimeState. \
 * {@link KnownIntegrationRuntimeState} can be used interchangeably with IntegrationRuntimeState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Initial** \
 * **Stopped** \
 * **Started** \
 * **Starting** \
 * **Stopping** \
 * **NeedRegistration** \
 * **Online** \
 * **Limited** \
 * **Offline** \
 * **AccessDenied**
 */
export type IntegrationRuntimeState = string;

/** Known values of {@link IntegrationRuntimeAuthKeyName} that the service accepts. */
export enum KnownIntegrationRuntimeAuthKeyName {
  AuthKey1 = "authKey1",
  AuthKey2 = "authKey2"
}

/**
 * Defines values for IntegrationRuntimeAuthKeyName. \
 * {@link KnownIntegrationRuntimeAuthKeyName} can be used interchangeably with IntegrationRuntimeAuthKeyName,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **authKey1** \
 * **authKey2**
 */
export type IntegrationRuntimeAuthKeyName = string;

/** Known values of {@link SsisObjectMetadataType} that the service accepts. */
export enum KnownSsisObjectMetadataType {
  Folder = "Folder",
  Project = "Project",
  Package = "Package",
  Environment = "Environment"
}

/**
 * Defines values for SsisObjectMetadataType. \
 * {@link KnownSsisObjectMetadataType} can be used interchangeably with SsisObjectMetadataType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Folder** \
 * **Project** \
 * **Package** \
 * **Environment**
 */
export type SsisObjectMetadataType = string;

/** Known values of {@link SelfHostedIntegrationRuntimeNodeStatus} that the service accepts. */
export enum KnownSelfHostedIntegrationRuntimeNodeStatus {
  NeedRegistration = "NeedRegistration",
  Online = "Online",
  Limited = "Limited",
  Offline = "Offline",
  Upgrading = "Upgrading",
  Initializing = "Initializing",
  InitializeFailed = "InitializeFailed"
}

/**
 * Defines values for SelfHostedIntegrationRuntimeNodeStatus. \
 * {@link KnownSelfHostedIntegrationRuntimeNodeStatus} can be used interchangeably with SelfHostedIntegrationRuntimeNodeStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **NeedRegistration** \
 * **Online** \
 * **Limited** \
 * **Offline** \
 * **Upgrading** \
 * **Initializing** \
 * **InitializeFailed**
 */
export type SelfHostedIntegrationRuntimeNodeStatus = string;

/** Known values of {@link IntegrationRuntimeUpdateResult} that the service accepts. */
export enum KnownIntegrationRuntimeUpdateResult {
  None = "None",
  Succeed = "Succeed",
  Fail = "Fail"
}

/**
 * Defines values for IntegrationRuntimeUpdateResult. \
 * {@link KnownIntegrationRuntimeUpdateResult} can be used interchangeably with IntegrationRuntimeUpdateResult,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **None** \
 * **Succeed** \
 * **Fail**
 */
export type IntegrationRuntimeUpdateResult = string;

/** Known values of {@link ParameterType} that the service accepts. */
export enum KnownParameterType {
  Object = "Object",
  String = "String",
  Int = "Int",
  Float = "Float",
  Bool = "Bool",
  Array = "Array",
  SecureString = "SecureString"
}

/**
 * Defines values for ParameterType. \
 * {@link KnownParameterType} can be used interchangeably with ParameterType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Object** \
 * **String** \
 * **Int** \
 * **Float** \
 * **Bool** \
 * **Array** \
 * **SecureString**
 */
export type ParameterType = string;

/** Known values of {@link DependencyCondition} that the service accepts. */
export enum KnownDependencyCondition {
  Succeeded = "Succeeded",
  Failed = "Failed",
  Skipped = "Skipped",
  Completed = "Completed"
}

/**
 * Defines values for DependencyCondition. \
 * {@link KnownDependencyCondition} can be used interchangeably with DependencyCondition,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded** \
 * **Failed** \
 * **Skipped** \
 * **Completed**
 */
export type DependencyCondition = string;

/** Known values of {@link VariableType} that the service accepts. */
export enum KnownVariableType {
  String = "String",
  Bool = "Bool",
  Array = "Array"
}

/**
 * Defines values for VariableType. \
 * {@link KnownVariableType} can be used interchangeably with VariableType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **String** \
 * **Bool** \
 * **Array**
 */
export type VariableType = string;

/** Known values of {@link RunQueryFilterOperand} that the service accepts. */
export enum KnownRunQueryFilterOperand {
  PipelineName = "PipelineName",
  Status = "Status",
  RunStart = "RunStart",
  RunEnd = "RunEnd",
  ActivityName = "ActivityName",
  ActivityRunStart = "ActivityRunStart",
  ActivityRunEnd = "ActivityRunEnd",
  ActivityType = "ActivityType",
  TriggerName = "TriggerName",
  TriggerRunTimestamp = "TriggerRunTimestamp",
  RunGroupId = "RunGroupId",
  LatestOnly = "LatestOnly"
}

/**
 * Defines values for RunQueryFilterOperand. \
 * {@link KnownRunQueryFilterOperand} can be used interchangeably with RunQueryFilterOperand,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **PipelineName** \
 * **Status** \
 * **RunStart** \
 * **RunEnd** \
 * **ActivityName** \
 * **ActivityRunStart** \
 * **ActivityRunEnd** \
 * **ActivityType** \
 * **TriggerName** \
 * **TriggerRunTimestamp** \
 * **RunGroupId** \
 * **LatestOnly**
 */
export type RunQueryFilterOperand = string;

/** Known values of {@link RunQueryFilterOperator} that the service accepts. */
export enum KnownRunQueryFilterOperator {
  Equals = "Equals",
  NotEquals = "NotEquals",
  In = "In",
  NotIn = "NotIn"
}

/**
 * Defines values for RunQueryFilterOperator. \
 * {@link KnownRunQueryFilterOperator} can be used interchangeably with RunQueryFilterOperator,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Equals** \
 * **NotEquals** \
 * **In** \
 * **NotIn**
 */
export type RunQueryFilterOperator = string;

/** Known values of {@link RunQueryOrderByField} that the service accepts. */
export enum KnownRunQueryOrderByField {
  RunStart = "RunStart",
  RunEnd = "RunEnd",
  PipelineName = "PipelineName",
  Status = "Status",
  ActivityName = "ActivityName",
  ActivityRunStart = "ActivityRunStart",
  ActivityRunEnd = "ActivityRunEnd",
  TriggerName = "TriggerName",
  TriggerRunTimestamp = "TriggerRunTimestamp"
}

/**
 * Defines values for RunQueryOrderByField. \
 * {@link KnownRunQueryOrderByField} can be used interchangeably with RunQueryOrderByField,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **RunStart** \
 * **RunEnd** \
 * **PipelineName** \
 * **Status** \
 * **ActivityName** \
 * **ActivityRunStart** \
 * **ActivityRunEnd** \
 * **TriggerName** \
 * **TriggerRunTimestamp**
 */
export type RunQueryOrderByField = string;

/** Known values of {@link RunQueryOrder} that the service accepts. */
export enum KnownRunQueryOrder {
  ASC = "ASC",
  Desc = "DESC"
}

/**
 * Defines values for RunQueryOrder. \
 * {@link KnownRunQueryOrder} can be used interchangeably with RunQueryOrder,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **ASC** \
 * **DESC**
 */
export type RunQueryOrder = string;

/** Known values of {@link TriggerRuntimeState} that the service accepts. */
export enum KnownTriggerRuntimeState {
  Started = "Started",
  Stopped = "Stopped",
  Disabled = "Disabled"
}

/**
 * Defines values for TriggerRuntimeState. \
 * {@link KnownTriggerRuntimeState} can be used interchangeably with TriggerRuntimeState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Started** \
 * **Stopped** \
 * **Disabled**
 */
export type TriggerRuntimeState = string;

/** Known values of {@link EventSubscriptionStatus} that the service accepts. */
export enum KnownEventSubscriptionStatus {
  Enabled = "Enabled",
  Provisioning = "Provisioning",
  Deprovisioning = "Deprovisioning",
  Disabled = "Disabled",
  Unknown = "Unknown"
}

/**
 * Defines values for EventSubscriptionStatus. \
 * {@link KnownEventSubscriptionStatus} can be used interchangeably with EventSubscriptionStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Enabled** \
 * **Provisioning** \
 * **Deprovisioning** \
 * **Disabled** \
 * **Unknown**
 */
export type EventSubscriptionStatus = string;

/** Known values of {@link TriggerRunStatus} that the service accepts. */
export enum KnownTriggerRunStatus {
  Succeeded = "Succeeded",
  Failed = "Failed",
  Inprogress = "Inprogress"
}

/**
 * Defines values for TriggerRunStatus. \
 * {@link KnownTriggerRunStatus} can be used interchangeably with TriggerRunStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded** \
 * **Failed** \
 * **Inprogress**
 */
export type TriggerRunStatus = string;

/** Known values of {@link DataFlowDebugCommandType} that the service accepts. */
export enum KnownDataFlowDebugCommandType {
  ExecutePreviewQuery = "executePreviewQuery",
  ExecuteStatisticsQuery = "executeStatisticsQuery",
  ExecuteExpressionQuery = "executeExpressionQuery"
}

/**
 * Defines values for DataFlowDebugCommandType. \
 * {@link KnownDataFlowDebugCommandType} can be used interchangeably with DataFlowDebugCommandType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **executePreviewQuery** \
 * **executeStatisticsQuery** \
 * **executeExpressionQuery**
 */
export type DataFlowDebugCommandType = string;

/** Known values of {@link DataFlowComputeType} that the service accepts. */
export enum KnownDataFlowComputeType {
  General = "General",
  MemoryOptimized = "MemoryOptimized",
  ComputeOptimized = "ComputeOptimized"
}

/**
 * Defines values for DataFlowComputeType. \
 * {@link KnownDataFlowComputeType} can be used interchangeably with DataFlowComputeType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **General** \
 * **MemoryOptimized** \
 * **ComputeOptimized**
 */
export type DataFlowComputeType = string;

/** Known values of {@link IntegrationRuntimeSsisCatalogPricingTier} that the service accepts. */
export enum KnownIntegrationRuntimeSsisCatalogPricingTier {
  Basic = "Basic",
  Standard = "Standard",
  Premium = "Premium",
  PremiumRS = "PremiumRS"
}

/**
 * Defines values for IntegrationRuntimeSsisCatalogPricingTier. \
 * {@link KnownIntegrationRuntimeSsisCatalogPricingTier} can be used interchangeably with IntegrationRuntimeSsisCatalogPricingTier,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Basic** \
 * **Standard** \
 * **Premium** \
 * **PremiumRS**
 */
export type IntegrationRuntimeSsisCatalogPricingTier = string;

/** Known values of {@link IntegrationRuntimeLicenseType} that the service accepts. */
export enum KnownIntegrationRuntimeLicenseType {
  BasePrice = "BasePrice",
  LicenseIncluded = "LicenseIncluded"
}

/**
 * Defines values for IntegrationRuntimeLicenseType. \
 * {@link KnownIntegrationRuntimeLicenseType} can be used interchangeably with IntegrationRuntimeLicenseType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **BasePrice** \
 * **LicenseIncluded**
 */
export type IntegrationRuntimeLicenseType = string;

/** Known values of {@link IntegrationRuntimeEntityReferenceType} that the service accepts. */
export enum KnownIntegrationRuntimeEntityReferenceType {
  IntegrationRuntimeReference = "IntegrationRuntimeReference",
  LinkedServiceReference = "LinkedServiceReference"
}

/**
 * Defines values for IntegrationRuntimeEntityReferenceType. \
 * {@link KnownIntegrationRuntimeEntityReferenceType} can be used interchangeably with IntegrationRuntimeEntityReferenceType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **IntegrationRuntimeReference** \
 * **LinkedServiceReference**
 */
export type IntegrationRuntimeEntityReferenceType = string;

/** Known values of {@link IntegrationRuntimeEdition} that the service accepts. */
export enum KnownIntegrationRuntimeEdition {
  Standard = "Standard",
  Enterprise = "Enterprise"
}

/**
 * Defines values for IntegrationRuntimeEdition. \
 * {@link KnownIntegrationRuntimeEdition} can be used interchangeably with IntegrationRuntimeEdition,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Standard** \
 * **Enterprise**
 */
export type IntegrationRuntimeEdition = string;

/** Known values of {@link ManagedIntegrationRuntimeNodeStatus} that the service accepts. */
export enum KnownManagedIntegrationRuntimeNodeStatus {
  Starting = "Starting",
  Available = "Available",
  Recycling = "Recycling",
  Unavailable = "Unavailable"
}

/**
 * Defines values for ManagedIntegrationRuntimeNodeStatus. \
 * {@link KnownManagedIntegrationRuntimeNodeStatus} can be used interchangeably with ManagedIntegrationRuntimeNodeStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Starting** \
 * **Available** \
 * **Recycling** \
 * **Unavailable**
 */
export type ManagedIntegrationRuntimeNodeStatus = string;

/** Known values of {@link IntegrationRuntimeInternalChannelEncryptionMode} that the service accepts. */
export enum KnownIntegrationRuntimeInternalChannelEncryptionMode {
  NotSet = "NotSet",
  SslEncrypted = "SslEncrypted",
  NotEncrypted = "NotEncrypted"
}

/**
 * Defines values for IntegrationRuntimeInternalChannelEncryptionMode. \
 * {@link KnownIntegrationRuntimeInternalChannelEncryptionMode} can be used interchangeably with IntegrationRuntimeInternalChannelEncryptionMode,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **NotSet** \
 * **SslEncrypted** \
 * **NotEncrypted**
 */
export type IntegrationRuntimeInternalChannelEncryptionMode = string;

/** Known values of {@link SqlAlwaysEncryptedAkvAuthType} that the service accepts. */
export enum KnownSqlAlwaysEncryptedAkvAuthType {
  ServicePrincipal = "ServicePrincipal",
  ManagedIdentity = "ManagedIdentity",
  UserAssignedManagedIdentity = "UserAssignedManagedIdentity"
}

/**
 * Defines values for SqlAlwaysEncryptedAkvAuthType. \
 * {@link KnownSqlAlwaysEncryptedAkvAuthType} can be used interchangeably with SqlAlwaysEncryptedAkvAuthType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **ServicePrincipal** \
 * **ManagedIdentity** \
 * **UserAssignedManagedIdentity**
 */
export type SqlAlwaysEncryptedAkvAuthType = string;

/** Known values of {@link CosmosDbServicePrincipalCredentialType} that the service accepts. */
export enum KnownCosmosDbServicePrincipalCredentialType {
  ServicePrincipalKey = "ServicePrincipalKey",
  ServicePrincipalCert = "ServicePrincipalCert"
}

/**
 * Defines values for CosmosDbServicePrincipalCredentialType. \
 * {@link KnownCosmosDbServicePrincipalCredentialType} can be used interchangeably with CosmosDbServicePrincipalCredentialType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **ServicePrincipalKey** \
 * **ServicePrincipalCert**
 */
export type CosmosDbServicePrincipalCredentialType = string;

/** Known values of {@link CosmosDbConnectionMode} that the service accepts. */
export enum KnownCosmosDbConnectionMode {
  Gateway = "Gateway",
  Direct = "Direct"
}

/**
 * Defines values for CosmosDbConnectionMode. \
 * {@link KnownCosmosDbConnectionMode} can be used interchangeably with CosmosDbConnectionMode,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Gateway** \
 * **Direct**
 */
export type CosmosDbConnectionMode = string;

/** Known values of {@link SybaseAuthenticationType} that the service accepts. */
export enum KnownSybaseAuthenticationType {
  Basic = "Basic",
  Windows = "Windows"
}

/**
 * Defines values for SybaseAuthenticationType. \
 * {@link KnownSybaseAuthenticationType} can be used interchangeably with SybaseAuthenticationType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Basic** \
 * **Windows**
 */
export type SybaseAuthenticationType = string;

/** Known values of {@link Db2AuthenticationType} that the service accepts. */
export enum KnownDb2AuthenticationType {
  Basic = "Basic"
}

/**
 * Defines values for Db2AuthenticationType. \
 * {@link KnownDb2AuthenticationType} can be used interchangeably with Db2AuthenticationType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Basic**
 */
export type Db2AuthenticationType = string;

/** Known values of {@link TeradataAuthenticationType} that the service accepts. */
export enum KnownTeradataAuthenticationType {
  Basic = "Basic",
  Windows = "Windows"
}

/**
 * Defines values for TeradataAuthenticationType. \
 * {@link KnownTeradataAuthenticationType} can be used interchangeably with TeradataAuthenticationType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Basic** \
 * **Windows**
 */
export type TeradataAuthenticationType = string;

/** Known values of {@link ODataAuthenticationType} that the service accepts. */
export enum KnownODataAuthenticationType {
  Basic = "Basic",
  Anonymous = "Anonymous",
  Windows = "Windows",
  AadServicePrincipal = "AadServicePrincipal",
  ManagedServiceIdentity = "ManagedServiceIdentity"
}

/**
 * Defines values for ODataAuthenticationType. \
 * {@link KnownODataAuthenticationType} can be used interchangeably with ODataAuthenticationType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Basic** \
 * **Anonymous** \
 * **Windows** \
 * **AadServicePrincipal** \
 * **ManagedServiceIdentity**
 */
export type ODataAuthenticationType = string;

/** Known values of {@link ODataAadServicePrincipalCredentialType} that the service accepts. */
export enum KnownODataAadServicePrincipalCredentialType {
  ServicePrincipalKey = "ServicePrincipalKey",
  ServicePrincipalCert = "ServicePrincipalCert"
}

/**
 * Defines values for ODataAadServicePrincipalCredentialType. \
 * {@link KnownODataAadServicePrincipalCredentialType} can be used interchangeably with ODataAadServicePrincipalCredentialType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **ServicePrincipalKey** \
 * **ServicePrincipalCert**
 */
export type ODataAadServicePrincipalCredentialType = string;

/** Known values of {@link WebAuthenticationType} that the service accepts. */
export enum KnownWebAuthenticationType {
  Basic = "Basic",
  Anonymous = "Anonymous",
  ClientCertificate = "ClientCertificate"
}

/**
 * Defines values for WebAuthenticationType. \
 * {@link KnownWebAuthenticationType} can be used interchangeably with WebAuthenticationType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Basic** \
 * **Anonymous** \
 * **ClientCertificate**
 */
export type WebAuthenticationType = string;

/** Known values of {@link MongoDbAuthenticationType} that the service accepts. */
export enum KnownMongoDbAuthenticationType {
  Basic = "Basic",
  Anonymous = "Anonymous"
}

/**
 * Defines values for MongoDbAuthenticationType. \
 * {@link KnownMongoDbAuthenticationType} can be used interchangeably with MongoDbAuthenticationType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Basic** \
 * **Anonymous**
 */
export type MongoDbAuthenticationType = string;

/** Known values of {@link RestServiceAuthenticationType} that the service accepts. */
export enum KnownRestServiceAuthenticationType {
  Anonymous = "Anonymous",
  Basic = "Basic",
  AadServicePrincipal = "AadServicePrincipal",
  ManagedServiceIdentity = "ManagedServiceIdentity"
}

/**
 * Defines values for RestServiceAuthenticationType. \
 * {@link KnownRestServiceAuthenticationType} can be used interchangeably with RestServiceAuthenticationType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Anonymous** \
 * **Basic** \
 * **AadServicePrincipal** \
 * **ManagedServiceIdentity**
 */
export type RestServiceAuthenticationType = string;

/** Known values of {@link HttpAuthenticationType} that the service accepts. */
export enum KnownHttpAuthenticationType {
  Basic = "Basic",
  Anonymous = "Anonymous",
  Digest = "Digest",
  Windows = "Windows",
  ClientCertificate = "ClientCertificate"
}

/**
 * Defines values for HttpAuthenticationType. \
 * {@link KnownHttpAuthenticationType} can be used interchangeably with HttpAuthenticationType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Basic** \
 * **Anonymous** \
 * **Digest** \
 * **Windows** \
 * **ClientCertificate**
 */
export type HttpAuthenticationType = string;

/** Known values of {@link FtpAuthenticationType} that the service accepts. */
export enum KnownFtpAuthenticationType {
  Basic = "Basic",
  Anonymous = "Anonymous"
}

/**
 * Defines values for FtpAuthenticationType. \
 * {@link KnownFtpAuthenticationType} can be used interchangeably with FtpAuthenticationType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Basic** \
 * **Anonymous**
 */
export type FtpAuthenticationType = string;

/** Known values of {@link SftpAuthenticationType} that the service accepts. */
export enum KnownSftpAuthenticationType {
  Basic = "Basic",
  SshPublicKey = "SshPublicKey",
  MultiFactor = "MultiFactor"
}

/**
 * Defines values for SftpAuthenticationType. \
 * {@link KnownSftpAuthenticationType} can be used interchangeably with SftpAuthenticationType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Basic** \
 * **SshPublicKey** \
 * **MultiFactor**
 */
export type SftpAuthenticationType = string;

/** Known values of {@link SapHanaAuthenticationType} that the service accepts. */
export enum KnownSapHanaAuthenticationType {
  Basic = "Basic",
  Windows = "Windows"
}

/**
 * Defines values for SapHanaAuthenticationType. \
 * {@link KnownSapHanaAuthenticationType} can be used interchangeably with SapHanaAuthenticationType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Basic** \
 * **Windows**
 */
export type SapHanaAuthenticationType = string;

/** Known values of {@link GoogleBigQueryAuthenticationType} that the service accepts. */
export enum KnownGoogleBigQueryAuthenticationType {
  ServiceAuthentication = "ServiceAuthentication",
  UserAuthentication = "UserAuthentication"
}

/**
 * Defines values for GoogleBigQueryAuthenticationType. \
 * {@link KnownGoogleBigQueryAuthenticationType} can be used interchangeably with GoogleBigQueryAuthenticationType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **ServiceAuthentication** \
 * **UserAuthentication**
 */
export type GoogleBigQueryAuthenticationType = string;

/** Known values of {@link HBaseAuthenticationType} that the service accepts. */
export enum KnownHBaseAuthenticationType {
  Anonymous = "Anonymous",
  Basic = "Basic"
}

/**
 * Defines values for HBaseAuthenticationType. \
 * {@link KnownHBaseAuthenticationType} can be used interchangeably with HBaseAuthenticationType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Anonymous** \
 * **Basic**
 */
export type HBaseAuthenticationType = string;

/** Known values of {@link HiveServerType} that the service accepts. */
export enum KnownHiveServerType {
  HiveServer1 = "HiveServer1",
  HiveServer2 = "HiveServer2",
  HiveThriftServer = "HiveThriftServer"
}

/**
 * Defines values for HiveServerType. \
 * {@link KnownHiveServerType} can be used interchangeably with HiveServerType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **HiveServer1** \
 * **HiveServer2** \
 * **HiveThriftServer**
 */
export type HiveServerType = string;

/** Known values of {@link HiveThriftTransportProtocol} that the service accepts. */
export enum KnownHiveThriftTransportProtocol {
  Binary = "Binary",
  Sasl = "SASL",
  Http = "HTTP "
}

/**
 * Defines values for HiveThriftTransportProtocol. \
 * {@link KnownHiveThriftTransportProtocol} can be used interchangeably with HiveThriftTransportProtocol,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Binary** \
 * **SASL** \
 * **HTTP **
 */
export type HiveThriftTransportProtocol = string;

/** Known values of {@link HiveAuthenticationType} that the service accepts. */
export enum KnownHiveAuthenticationType {
  Anonymous = "Anonymous",
  Username = "Username",
  UsernameAndPassword = "UsernameAndPassword",
  WindowsAzureHDInsightService = "WindowsAzureHDInsightService"
}

/**
 * Defines values for HiveAuthenticationType. \
 * {@link KnownHiveAuthenticationType} can be used interchangeably with HiveAuthenticationType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Anonymous** \
 * **Username** \
 * **UsernameAndPassword** \
 * **WindowsAzureHDInsightService**
 */
export type HiveAuthenticationType = string;

/** Known values of {@link ImpalaAuthenticationType} that the service accepts. */
export enum KnownImpalaAuthenticationType {
  Anonymous = "Anonymous",
  SaslUsername = "SASLUsername",
  UsernameAndPassword = "UsernameAndPassword"
}

/**
 * Defines values for ImpalaAuthenticationType. \
 * {@link KnownImpalaAuthenticationType} can be used interchangeably with ImpalaAuthenticationType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Anonymous** \
 * **SASLUsername** \
 * **UsernameAndPassword**
 */
export type ImpalaAuthenticationType = string;

/** Known values of {@link PhoenixAuthenticationType} that the service accepts. */
export enum KnownPhoenixAuthenticationType {
  Anonymous = "Anonymous",
  UsernameAndPassword = "UsernameAndPassword",
  WindowsAzureHDInsightService = "WindowsAzureHDInsightService"
}

/**
 * Defines values for PhoenixAuthenticationType. \
 * {@link KnownPhoenixAuthenticationType} can be used interchangeably with PhoenixAuthenticationType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Anonymous** \
 * **UsernameAndPassword** \
 * **WindowsAzureHDInsightService**
 */
export type PhoenixAuthenticationType = string;

/** Known values of {@link PrestoAuthenticationType} that the service accepts. */
export enum KnownPrestoAuthenticationType {
  Anonymous = "Anonymous",
  Ldap = "LDAP"
}

/**
 * Defines values for PrestoAuthenticationType. \
 * {@link KnownPrestoAuthenticationType} can be used interchangeably with PrestoAuthenticationType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Anonymous** \
 * **LDAP**
 */
export type PrestoAuthenticationType = string;

/** Known values of {@link ServiceNowAuthenticationType} that the service accepts. */
export enum KnownServiceNowAuthenticationType {
  Basic = "Basic",
  OAuth2 = "OAuth2"
}

/**
 * Defines values for ServiceNowAuthenticationType. \
 * {@link KnownServiceNowAuthenticationType} can be used interchangeably with ServiceNowAuthenticationType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Basic** \
 * **OAuth2**
 */
export type ServiceNowAuthenticationType = string;

/** Known values of {@link SparkServerType} that the service accepts. */
export enum KnownSparkServerType {
  SharkServer = "SharkServer",
  SharkServer2 = "SharkServer2",
  SparkThriftServer = "SparkThriftServer"
}

/**
 * Defines values for SparkServerType. \
 * {@link KnownSparkServerType} can be used interchangeably with SparkServerType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **SharkServer** \
 * **SharkServer2** \
 * **SparkThriftServer**
 */
export type SparkServerType = string;

/** Known values of {@link SparkThriftTransportProtocol} that the service accepts. */
export enum KnownSparkThriftTransportProtocol {
  Binary = "Binary",
  Sasl = "SASL",
  Http = "HTTP "
}

/**
 * Defines values for SparkThriftTransportProtocol. \
 * {@link KnownSparkThriftTransportProtocol} can be used interchangeably with SparkThriftTransportProtocol,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Binary** \
 * **SASL** \
 * **HTTP **
 */
export type SparkThriftTransportProtocol = string;

/** Known values of {@link SparkAuthenticationType} that the service accepts. */
export enum KnownSparkAuthenticationType {
  Anonymous = "Anonymous",
  Username = "Username",
  UsernameAndPassword = "UsernameAndPassword",
  WindowsAzureHDInsightService = "WindowsAzureHDInsightService"
}

/**
 * Defines values for SparkAuthenticationType. \
 * {@link KnownSparkAuthenticationType} can be used interchangeably with SparkAuthenticationType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Anonymous** \
 * **Username** \
 * **UsernameAndPassword** \
 * **WindowsAzureHDInsightService**
 */
export type SparkAuthenticationType = string;

/** Known values of {@link GoogleAdWordsAuthenticationType} that the service accepts. */
export enum KnownGoogleAdWordsAuthenticationType {
  ServiceAuthentication = "ServiceAuthentication",
  UserAuthentication = "UserAuthentication"
}

/**
 * Defines values for GoogleAdWordsAuthenticationType. \
 * {@link KnownGoogleAdWordsAuthenticationType} can be used interchangeably with GoogleAdWordsAuthenticationType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **ServiceAuthentication** \
 * **UserAuthentication**
 */
export type GoogleAdWordsAuthenticationType = string;

/** Known values of {@link SalesforceSourceReadBehavior} that the service accepts. */
export enum KnownSalesforceSourceReadBehavior {
  Query = "Query",
  QueryAll = "QueryAll"
}

/**
 * Defines values for SalesforceSourceReadBehavior. \
 * {@link KnownSalesforceSourceReadBehavior} can be used interchangeably with SalesforceSourceReadBehavior,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Query** \
 * **QueryAll**
 */
export type SalesforceSourceReadBehavior = string;

/** Known values of {@link StoredProcedureParameterType} that the service accepts. */
export enum KnownStoredProcedureParameterType {
  String = "String",
  Int = "Int",
  Int64 = "Int64",
  Decimal = "Decimal",
  Guid = "Guid",
  Boolean = "Boolean",
  Date = "Date"
}

/**
 * Defines values for StoredProcedureParameterType. \
 * {@link KnownStoredProcedureParameterType} can be used interchangeably with StoredProcedureParameterType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **String** \
 * **Int** \
 * **Int64** \
 * **Decimal** \
 * **Guid** \
 * **Boolean** \
 * **Date**
 */
export type StoredProcedureParameterType = string;

/** Known values of {@link CassandraSourceReadConsistencyLevels} that the service accepts. */
export enum KnownCassandraSourceReadConsistencyLevels {
  ALL = "ALL",
  EachQuorum = "EACH_QUORUM",
  Quorum = "QUORUM",
  LocalQuorum = "LOCAL_QUORUM",
  ONE = "ONE",
  TWO = "TWO",
  Three = "THREE",
  LocalONE = "LOCAL_ONE",
  Serial = "SERIAL",
  LocalSerial = "LOCAL_SERIAL"
}

/**
 * Defines values for CassandraSourceReadConsistencyLevels. \
 * {@link KnownCassandraSourceReadConsistencyLevels} can be used interchangeably with CassandraSourceReadConsistencyLevels,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **ALL** \
 * **EACH_QUORUM** \
 * **QUORUM** \
 * **LOCAL_QUORUM** \
 * **ONE** \
 * **TWO** \
 * **THREE** \
 * **LOCAL_ONE** \
 * **SERIAL** \
 * **LOCAL_SERIAL**
 */
export type CassandraSourceReadConsistencyLevels = string;

/** Known values of {@link SapCloudForCustomerSinkWriteBehavior} that the service accepts. */
export enum KnownSapCloudForCustomerSinkWriteBehavior {
  Insert = "Insert",
  Update = "Update"
}

/**
 * Defines values for SapCloudForCustomerSinkWriteBehavior. \
 * {@link KnownSapCloudForCustomerSinkWriteBehavior} can be used interchangeably with SapCloudForCustomerSinkWriteBehavior,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Insert** \
 * **Update**
 */
export type SapCloudForCustomerSinkWriteBehavior = string;

/** Known values of {@link PolybaseSettingsRejectType} that the service accepts. */
export enum KnownPolybaseSettingsRejectType {
  Value = "value",
  Percentage = "percentage"
}

/**
 * Defines values for PolybaseSettingsRejectType. \
 * {@link KnownPolybaseSettingsRejectType} can be used interchangeably with PolybaseSettingsRejectType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **value** \
 * **percentage**
 */
export type PolybaseSettingsRejectType = string;

/** Known values of {@link AzureSearchIndexWriteBehaviorType} that the service accepts. */
export enum KnownAzureSearchIndexWriteBehaviorType {
  Merge = "Merge",
  Upload = "Upload"
}

/**
 * Defines values for AzureSearchIndexWriteBehaviorType. \
 * {@link KnownAzureSearchIndexWriteBehaviorType} can be used interchangeably with AzureSearchIndexWriteBehaviorType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Merge** \
 * **Upload**
 */
export type AzureSearchIndexWriteBehaviorType = string;

/** Known values of {@link DynamicsSinkWriteBehavior} that the service accepts. */
export enum KnownDynamicsSinkWriteBehavior {
  Upsert = "Upsert"
}

/**
 * Defines values for DynamicsSinkWriteBehavior. \
 * {@link KnownDynamicsSinkWriteBehavior} can be used interchangeably with DynamicsSinkWriteBehavior,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Upsert**
 */
export type DynamicsSinkWriteBehavior = string;

/** Known values of {@link SalesforceSinkWriteBehavior} that the service accepts. */
export enum KnownSalesforceSinkWriteBehavior {
  Insert = "Insert",
  Upsert = "Upsert"
}

/**
 * Defines values for SalesforceSinkWriteBehavior. \
 * {@link KnownSalesforceSinkWriteBehavior} can be used interchangeably with SalesforceSinkWriteBehavior,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Insert** \
 * **Upsert**
 */
export type SalesforceSinkWriteBehavior = string;

/** Known values of {@link HDInsightActivityDebugInfoOption} that the service accepts. */
export enum KnownHDInsightActivityDebugInfoOption {
  None = "None",
  Always = "Always",
  Failure = "Failure"
}

/**
 * Defines values for HDInsightActivityDebugInfoOption. \
 * {@link KnownHDInsightActivityDebugInfoOption} can be used interchangeably with HDInsightActivityDebugInfoOption,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **None** \
 * **Always** \
 * **Failure**
 */
export type HDInsightActivityDebugInfoOption = string;

/** Known values of {@link SsisPackageLocationType} that the service accepts. */
export enum KnownSsisPackageLocationType {
  Ssisdb = "SSISDB",
  File = "File",
  InlinePackage = "InlinePackage",
  PackageStore = "PackageStore"
}

/**
 * Defines values for SsisPackageLocationType. \
 * {@link KnownSsisPackageLocationType} can be used interchangeably with SsisPackageLocationType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **SSISDB** \
 * **File** \
 * **InlinePackage** \
 * **PackageStore**
 */
export type SsisPackageLocationType = string;

/** Known values of {@link SsisLogLocationType} that the service accepts. */
export enum KnownSsisLogLocationType {
  File = "File"
}

/**
 * Defines values for SsisLogLocationType. \
 * {@link KnownSsisLogLocationType} can be used interchangeably with SsisLogLocationType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **File**
 */
export type SsisLogLocationType = string;

/** Known values of {@link WebActivityMethod} that the service accepts. */
export enum KnownWebActivityMethod {
  GET = "GET",
  Post = "POST",
  PUT = "PUT",
  Delete = "DELETE"
}

/**
 * Defines values for WebActivityMethod. \
 * {@link KnownWebActivityMethod} can be used interchangeably with WebActivityMethod,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **GET** \
 * **POST** \
 * **PUT** \
 * **DELETE**
 */
export type WebActivityMethod = string;

/** Known values of {@link AzureFunctionActivityMethod} that the service accepts. */
export enum KnownAzureFunctionActivityMethod {
  GET = "GET",
  Post = "POST",
  PUT = "PUT",
  Delete = "DELETE",
  Options = "OPTIONS",
  Head = "HEAD",
  Trace = "TRACE"
}

/**
 * Defines values for AzureFunctionActivityMethod. \
 * {@link KnownAzureFunctionActivityMethod} can be used interchangeably with AzureFunctionActivityMethod,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **GET** \
 * **POST** \
 * **PUT** \
 * **DELETE** \
 * **OPTIONS** \
 * **HEAD** \
 * **TRACE**
 */
export type AzureFunctionActivityMethod = string;

/** Known values of {@link WebHookActivityMethod} that the service accepts. */
export enum KnownWebHookActivityMethod {
  Post = "POST"
}

/**
 * Defines values for WebHookActivityMethod. \
 * {@link KnownWebHookActivityMethod} can be used interchangeably with WebHookActivityMethod,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **POST**
 */
export type WebHookActivityMethod = string;

/** Known values of {@link RecurrenceFrequency} that the service accepts. */
export enum KnownRecurrenceFrequency {
  NotSpecified = "NotSpecified",
  Minute = "Minute",
  Hour = "Hour",
  Day = "Day",
  Week = "Week",
  Month = "Month",
  Year = "Year"
}

/**
 * Defines values for RecurrenceFrequency. \
 * {@link KnownRecurrenceFrequency} can be used interchangeably with RecurrenceFrequency,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **NotSpecified** \
 * **Minute** \
 * **Hour** \
 * **Day** \
 * **Week** \
 * **Month** \
 * **Year**
 */
export type RecurrenceFrequency = string;

/** Known values of {@link BlobEventTypes} that the service accepts. */
export enum KnownBlobEventTypes {
  MicrosoftStorageBlobCreated = "Microsoft.Storage.BlobCreated",
  MicrosoftStorageBlobDeleted = "Microsoft.Storage.BlobDeleted"
}

/**
 * Defines values for BlobEventTypes. \
 * {@link KnownBlobEventTypes} can be used interchangeably with BlobEventTypes,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Microsoft.Storage.BlobCreated** \
 * **Microsoft.Storage.BlobDeleted**
 */
export type BlobEventTypes = string;

/** Known values of {@link TumblingWindowFrequency} that the service accepts. */
export enum KnownTumblingWindowFrequency {
  Minute = "Minute",
  Hour = "Hour",
  Month = "Month"
}

/**
 * Defines values for TumblingWindowFrequency. \
 * {@link KnownTumblingWindowFrequency} can be used interchangeably with TumblingWindowFrequency,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Minute** \
 * **Hour** \
 * **Month**
 */
export type TumblingWindowFrequency = string;

/** Known values of {@link JsonFormatFilePattern} that the service accepts. */
export enum KnownJsonFormatFilePattern {
  SetOfObjects = "setOfObjects",
  ArrayOfObjects = "arrayOfObjects"
}

/**
 * Defines values for JsonFormatFilePattern. \
 * {@link KnownJsonFormatFilePattern} can be used interchangeably with JsonFormatFilePattern,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **setOfObjects** \
 * **arrayOfObjects**
 */
export type JsonFormatFilePattern = string;

/** Known values of {@link DatasetCompressionLevel} that the service accepts. */
export enum KnownDatasetCompressionLevel {
  Optimal = "Optimal",
  Fastest = "Fastest"
}

/**
 * Defines values for DatasetCompressionLevel. \
 * {@link KnownDatasetCompressionLevel} can be used interchangeably with DatasetCompressionLevel,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Optimal** \
 * **Fastest**
 */
export type DatasetCompressionLevel = string;

/** Known values of {@link AvroCompressionCodec} that the service accepts. */
export enum KnownAvroCompressionCodec {
  None = "none",
  Deflate = "deflate",
  Snappy = "snappy",
  Xz = "xz",
  Bzip2 = "bzip2"
}

/**
 * Defines values for AvroCompressionCodec. \
 * {@link KnownAvroCompressionCodec} can be used interchangeably with AvroCompressionCodec,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **none** \
 * **deflate** \
 * **snappy** \
 * **xz** \
 * **bzip2**
 */
export type AvroCompressionCodec = string;

/** Known values of {@link CompressionCodec} that the service accepts. */
export enum KnownCompressionCodec {
  None = "none",
  Lzo = "lzo",
  Bzip2 = "bzip2",
  Gzip = "gzip",
  Deflate = "deflate",
  ZipDeflate = "zipDeflate",
  Snappy = "snappy",
  Lz4 = "lz4",
  Tar = "tar",
  TarGZip = "tarGZip"
}

/**
 * Defines values for CompressionCodec. \
 * {@link KnownCompressionCodec} can be used interchangeably with CompressionCodec,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **none** \
 * **lzo** \
 * **bzip2** \
 * **gzip** \
 * **deflate** \
 * **zipDeflate** \
 * **snappy** \
 * **lz4** \
 * **tar** \
 * **tarGZip**
 */
export type CompressionCodec = string;

/** Known values of {@link OrcCompressionCodec} that the service accepts. */
export enum KnownOrcCompressionCodec {
  None = "none",
  Zlib = "zlib",
  Snappy = "snappy",
  Lzo = "lzo"
}

/**
 * Defines values for OrcCompressionCodec. \
 * {@link KnownOrcCompressionCodec} can be used interchangeably with OrcCompressionCodec,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **none** \
 * **zlib** \
 * **snappy** \
 * **lzo**
 */
export type OrcCompressionCodec = string;

/** Known values of {@link DynamicsDeploymentType} that the service accepts. */
export enum KnownDynamicsDeploymentType {
  Online = "Online",
  OnPremisesWithIfd = "OnPremisesWithIfd"
}

/**
 * Defines values for DynamicsDeploymentType. \
 * {@link KnownDynamicsDeploymentType} can be used interchangeably with DynamicsDeploymentType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Online** \
 * **OnPremisesWithIfd**
 */
export type DynamicsDeploymentType = string;

/** Known values of {@link DynamicsAuthenticationType} that the service accepts. */
export enum KnownDynamicsAuthenticationType {
  Office365 = "Office365",
  Ifd = "Ifd",
  AADServicePrincipal = "AADServicePrincipal"
}

/**
 * Defines values for DynamicsAuthenticationType. \
 * {@link KnownDynamicsAuthenticationType} can be used interchangeably with DynamicsAuthenticationType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Office365** \
 * **Ifd** \
 * **AADServicePrincipal**
 */
export type DynamicsAuthenticationType = string;

/** Known values of {@link ServicePrincipalCredentialType} that the service accepts. */
export enum KnownServicePrincipalCredentialType {
  ServicePrincipalKey = "ServicePrincipalKey",
  ServicePrincipalCert = "ServicePrincipalCert"
}

/**
 * Defines values for ServicePrincipalCredentialType. \
 * {@link KnownServicePrincipalCredentialType} can be used interchangeably with ServicePrincipalCredentialType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **ServicePrincipalKey** \
 * **ServicePrincipalCert**
 */
export type ServicePrincipalCredentialType = string;

/** Known values of {@link HdiNodeTypes} that the service accepts. */
export enum KnownHdiNodeTypes {
  Headnode = "Headnode",
  Workernode = "Workernode",
  Zookeeper = "Zookeeper"
}

/**
 * Defines values for HdiNodeTypes. \
 * {@link KnownHdiNodeTypes} can be used interchangeably with HdiNodeTypes,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Headnode** \
 * **Workernode** \
 * **Zookeeper**
 */
export type HdiNodeTypes = string;

/** Known values of {@link JsonWriteFilePattern} that the service accepts. */
export enum KnownJsonWriteFilePattern {
  SetOfObjects = "setOfObjects",
  ArrayOfObjects = "arrayOfObjects"
}

/**
 * Defines values for JsonWriteFilePattern. \
 * {@link KnownJsonWriteFilePattern} can be used interchangeably with JsonWriteFilePattern,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **setOfObjects** \
 * **arrayOfObjects**
 */
export type JsonWriteFilePattern = string;

/** Known values of {@link AmazonRdsForOraclePartitionOption} that the service accepts. */
export enum KnownAmazonRdsForOraclePartitionOption {
  None = "None",
  PhysicalPartitionsOfTable = "PhysicalPartitionsOfTable",
  DynamicRange = "DynamicRange"
}

/**
 * Defines values for AmazonRdsForOraclePartitionOption. \
 * {@link KnownAmazonRdsForOraclePartitionOption} can be used interchangeably with AmazonRdsForOraclePartitionOption,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **None** \
 * **PhysicalPartitionsOfTable** \
 * **DynamicRange**
 */
export type AmazonRdsForOraclePartitionOption = string;

/** Known values of {@link CopyBehaviorType} that the service accepts. */
export enum KnownCopyBehaviorType {
  PreserveHierarchy = "PreserveHierarchy",
  FlattenHierarchy = "FlattenHierarchy",
  MergeFiles = "MergeFiles"
}

/**
 * Defines values for CopyBehaviorType. \
 * {@link KnownCopyBehaviorType} can be used interchangeably with CopyBehaviorType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **PreserveHierarchy** \
 * **FlattenHierarchy** \
 * **MergeFiles**
 */
export type CopyBehaviorType = string;

/** Known values of {@link SqlWriteBehaviorEnum} that the service accepts. */
export enum KnownSqlWriteBehaviorEnum {
  Insert = "Insert",
  Upsert = "Upsert",
  StoredProcedure = "StoredProcedure"
}

/**
 * Defines values for SqlWriteBehaviorEnum. \
 * {@link KnownSqlWriteBehaviorEnum} can be used interchangeably with SqlWriteBehaviorEnum,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Insert** \
 * **Upsert** \
 * **StoredProcedure**
 */
export type SqlWriteBehaviorEnum = string;

/** Known values of {@link SqlDWWriteBehaviorEnum} that the service accepts. */
export enum KnownSqlDWWriteBehaviorEnum {
  Insert = "Insert",
  Upsert = "Upsert"
}

/**
 * Defines values for SqlDWWriteBehaviorEnum. \
 * {@link KnownSqlDWWriteBehaviorEnum} can be used interchangeably with SqlDWWriteBehaviorEnum,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Insert** \
 * **Upsert**
 */
export type SqlDWWriteBehaviorEnum = string;

/** Known values of {@link SqlPartitionOption} that the service accepts. */
export enum KnownSqlPartitionOption {
  None = "None",
  PhysicalPartitionsOfTable = "PhysicalPartitionsOfTable",
  DynamicRange = "DynamicRange"
}

/**
 * Defines values for SqlPartitionOption. \
 * {@link KnownSqlPartitionOption} can be used interchangeably with SqlPartitionOption,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **None** \
 * **PhysicalPartitionsOfTable** \
 * **DynamicRange**
 */
export type SqlPartitionOption = string;

/** Known values of {@link SapHanaPartitionOption} that the service accepts. */
export enum KnownSapHanaPartitionOption {
  None = "None",
  PhysicalPartitionsOfTable = "PhysicalPartitionsOfTable",
  SapHanaDynamicRange = "SapHanaDynamicRange"
}

/**
 * Defines values for SapHanaPartitionOption. \
 * {@link KnownSapHanaPartitionOption} can be used interchangeably with SapHanaPartitionOption,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **None** \
 * **PhysicalPartitionsOfTable** \
 * **SapHanaDynamicRange**
 */
export type SapHanaPartitionOption = string;

/** Known values of {@link SapTablePartitionOption} that the service accepts. */
export enum KnownSapTablePartitionOption {
  None = "None",
  PartitionOnInt = "PartitionOnInt",
  PartitionOnCalendarYear = "PartitionOnCalendarYear",
  PartitionOnCalendarMonth = "PartitionOnCalendarMonth",
  PartitionOnCalendarDate = "PartitionOnCalendarDate",
  PartitionOnTime = "PartitionOnTime"
}

/**
 * Defines values for SapTablePartitionOption. \
 * {@link KnownSapTablePartitionOption} can be used interchangeably with SapTablePartitionOption,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **None** \
 * **PartitionOnInt** \
 * **PartitionOnCalendarYear** \
 * **PartitionOnCalendarMonth** \
 * **PartitionOnCalendarDate** \
 * **PartitionOnTime**
 */
export type SapTablePartitionOption = string;

/** Known values of {@link OraclePartitionOption} that the service accepts. */
export enum KnownOraclePartitionOption {
  None = "None",
  PhysicalPartitionsOfTable = "PhysicalPartitionsOfTable",
  DynamicRange = "DynamicRange"
}

/**
 * Defines values for OraclePartitionOption. \
 * {@link KnownOraclePartitionOption} can be used interchangeably with OraclePartitionOption,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **None** \
 * **PhysicalPartitionsOfTable** \
 * **DynamicRange**
 */
export type OraclePartitionOption = string;

/** Known values of {@link TeradataPartitionOption} that the service accepts. */
export enum KnownTeradataPartitionOption {
  None = "None",
  Hash = "Hash",
  DynamicRange = "DynamicRange"
}

/**
 * Defines values for TeradataPartitionOption. \
 * {@link KnownTeradataPartitionOption} can be used interchangeably with TeradataPartitionOption,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **None** \
 * **Hash** \
 * **DynamicRange**
 */
export type TeradataPartitionOption = string;

/** Known values of {@link NetezzaPartitionOption} that the service accepts. */
export enum KnownNetezzaPartitionOption {
  None = "None",
  DataSlice = "DataSlice",
  DynamicRange = "DynamicRange"
}

/**
 * Defines values for NetezzaPartitionOption. \
 * {@link KnownNetezzaPartitionOption} can be used interchangeably with NetezzaPartitionOption,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **None** \
 * **DataSlice** \
 * **DynamicRange**
 */
export type NetezzaPartitionOption = string;
/** Defines values for DaysOfWeek. */
export type DaysOfWeek =
  | "Sunday"
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday";
/** Defines values for DayOfWeek. */
export type DayOfWeek =
  | "Sunday"
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday";

/** Optional parameters. */
export interface OperationsListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type OperationsListResponse = OperationListResponse;

/** Optional parameters. */
export interface OperationsListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type OperationsListNextResponse = OperationListResponse;

/** Optional parameters. */
export interface FactoriesListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type FactoriesListResponse = FactoryListResponse;

/** Optional parameters. */
export interface FactoriesConfigureFactoryRepoOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the configureFactoryRepo operation. */
export type FactoriesConfigureFactoryRepoResponse = Factory;

/** Optional parameters. */
export interface FactoriesListByResourceGroupOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroup operation. */
export type FactoriesListByResourceGroupResponse = FactoryListResponse;

/** Optional parameters. */
export interface FactoriesCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** ETag of the factory entity. Should only be specified for update, for which it should match existing entity or can be * for unconditional update. */
  ifMatch?: string;
}

/** Contains response data for the createOrUpdate operation. */
export type FactoriesCreateOrUpdateResponse = Factory;

/** Optional parameters. */
export interface FactoriesUpdateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the update operation. */
export type FactoriesUpdateResponse = Factory;

/** Optional parameters. */
export interface FactoriesGetOptionalParams
  extends coreClient.OperationOptions {
  /** ETag of the factory entity. Should only be specified for get. If the ETag matches the existing entity tag, or if * was provided, then no content will be returned. */
  ifNoneMatch?: string;
}

/** Contains response data for the get operation. */
export type FactoriesGetResponse = Factory;

/** Optional parameters. */
export interface FactoriesDeleteOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface FactoriesGetGitHubAccessTokenOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getGitHubAccessToken operation. */
export type FactoriesGetGitHubAccessTokenResponse = GitHubAccessTokenResponse;

/** Optional parameters. */
export interface FactoriesGetDataPlaneAccessOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getDataPlaneAccess operation. */
export type FactoriesGetDataPlaneAccessResponse = AccessPolicyResponse;

/** Optional parameters. */
export interface FactoriesListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type FactoriesListNextResponse = FactoryListResponse;

/** Optional parameters. */
export interface FactoriesListByResourceGroupNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByResourceGroupNext operation. */
export type FactoriesListByResourceGroupNextResponse = FactoryListResponse;

/** Optional parameters. */
export interface ExposureControlGetFeatureValueOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getFeatureValue operation. */
export type ExposureControlGetFeatureValueResponse = ExposureControlResponse;

/** Optional parameters. */
export interface ExposureControlGetFeatureValueByFactoryOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getFeatureValueByFactory operation. */
export type ExposureControlGetFeatureValueByFactoryResponse = ExposureControlResponse;

/** Optional parameters. */
export interface ExposureControlQueryFeatureValuesByFactoryOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the queryFeatureValuesByFactory operation. */
export type ExposureControlQueryFeatureValuesByFactoryResponse = ExposureControlBatchResponse;

/** Optional parameters. */
export interface IntegrationRuntimesListByFactoryOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByFactory operation. */
export type IntegrationRuntimesListByFactoryResponse = IntegrationRuntimeListResponse;

/** Optional parameters. */
export interface IntegrationRuntimesCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** ETag of the integration runtime entity. Should only be specified for update, for which it should match existing entity or can be * for unconditional update. */
  ifMatch?: string;
}

/** Contains response data for the createOrUpdate operation. */
export type IntegrationRuntimesCreateOrUpdateResponse = IntegrationRuntimeResource;

/** Optional parameters. */
export interface IntegrationRuntimesGetOptionalParams
  extends coreClient.OperationOptions {
  /** ETag of the integration runtime entity. Should only be specified for get. If the ETag matches the existing entity tag, or if * was provided, then no content will be returned. */
  ifNoneMatch?: string;
}

/** Contains response data for the get operation. */
export type IntegrationRuntimesGetResponse = IntegrationRuntimeResource;

/** Optional parameters. */
export interface IntegrationRuntimesUpdateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the update operation. */
export type IntegrationRuntimesUpdateResponse = IntegrationRuntimeResource;

/** Optional parameters. */
export interface IntegrationRuntimesDeleteOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface IntegrationRuntimesGetStatusOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getStatus operation. */
export type IntegrationRuntimesGetStatusResponse = IntegrationRuntimeStatusResponse;

/** Optional parameters. */
export interface IntegrationRuntimesListOutboundNetworkDependenciesEndpointsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listOutboundNetworkDependenciesEndpoints operation. */
export type IntegrationRuntimesListOutboundNetworkDependenciesEndpointsResponse = IntegrationRuntimeOutboundNetworkDependenciesEndpointsResponse;

/** Optional parameters. */
export interface IntegrationRuntimesGetConnectionInfoOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getConnectionInfo operation. */
export type IntegrationRuntimesGetConnectionInfoResponse = IntegrationRuntimeConnectionInfo;

/** Optional parameters. */
export interface IntegrationRuntimesRegenerateAuthKeyOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the regenerateAuthKey operation. */
export type IntegrationRuntimesRegenerateAuthKeyResponse = IntegrationRuntimeAuthKeys;

/** Optional parameters. */
export interface IntegrationRuntimesListAuthKeysOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listAuthKeys operation. */
export type IntegrationRuntimesListAuthKeysResponse = IntegrationRuntimeAuthKeys;

/** Optional parameters. */
export interface IntegrationRuntimesStartOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the start operation. */
export type IntegrationRuntimesStartResponse = IntegrationRuntimeStatusResponse;

/** Optional parameters. */
export interface IntegrationRuntimesStopOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Optional parameters. */
export interface IntegrationRuntimesSyncCredentialsOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface IntegrationRuntimesGetMonitoringDataOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getMonitoringData operation. */
export type IntegrationRuntimesGetMonitoringDataResponse = IntegrationRuntimeMonitoringData;

/** Optional parameters. */
export interface IntegrationRuntimesUpgradeOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface IntegrationRuntimesRemoveLinksOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface IntegrationRuntimesCreateLinkedIntegrationRuntimeOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the createLinkedIntegrationRuntime operation. */
export type IntegrationRuntimesCreateLinkedIntegrationRuntimeResponse = IntegrationRuntimeStatusResponse;

/** Optional parameters. */
export interface IntegrationRuntimesListByFactoryNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByFactoryNext operation. */
export type IntegrationRuntimesListByFactoryNextResponse = IntegrationRuntimeListResponse;

/** Optional parameters. */
export interface IntegrationRuntimeObjectMetadataRefreshOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the refresh operation. */
export type IntegrationRuntimeObjectMetadataRefreshResponse = SsisObjectMetadataStatusResponse;

/** Optional parameters. */
export interface IntegrationRuntimeObjectMetadataGetOptionalParams
  extends coreClient.OperationOptions {
  /** The parameters for getting a SSIS object metadata. */
  getMetadataRequest?: GetSsisObjectMetadataRequest;
}

/** Contains response data for the get operation. */
export type IntegrationRuntimeObjectMetadataGetResponse = SsisObjectMetadataListResponse;

/** Optional parameters. */
export interface IntegrationRuntimeNodesGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type IntegrationRuntimeNodesGetResponse = SelfHostedIntegrationRuntimeNode;

/** Optional parameters. */
export interface IntegrationRuntimeNodesDeleteOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface IntegrationRuntimeNodesUpdateOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the update operation. */
export type IntegrationRuntimeNodesUpdateResponse = SelfHostedIntegrationRuntimeNode;

/** Optional parameters. */
export interface IntegrationRuntimeNodesGetIpAddressOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getIpAddress operation. */
export type IntegrationRuntimeNodesGetIpAddressResponse = IntegrationRuntimeNodeIpAddress;

/** Optional parameters. */
export interface LinkedServicesListByFactoryOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByFactory operation. */
export type LinkedServicesListByFactoryResponse = LinkedServiceListResponse;

/** Optional parameters. */
export interface LinkedServicesCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** ETag of the linkedService entity.  Should only be specified for update, for which it should match existing entity or can be * for unconditional update. */
  ifMatch?: string;
}

/** Contains response data for the createOrUpdate operation. */
export type LinkedServicesCreateOrUpdateResponse = LinkedServiceResource;

/** Optional parameters. */
export interface LinkedServicesGetOptionalParams
  extends coreClient.OperationOptions {
  /** ETag of the linked service entity. Should only be specified for get. If the ETag matches the existing entity tag, or if * was provided, then no content will be returned. */
  ifNoneMatch?: string;
}

/** Contains response data for the get operation. */
export type LinkedServicesGetResponse = LinkedServiceResource;

/** Optional parameters. */
export interface LinkedServicesDeleteOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface LinkedServicesListByFactoryNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByFactoryNext operation. */
export type LinkedServicesListByFactoryNextResponse = LinkedServiceListResponse;

/** Optional parameters. */
export interface DatasetsListByFactoryOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByFactory operation. */
export type DatasetsListByFactoryResponse = DatasetListResponse;

/** Optional parameters. */
export interface DatasetsCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** ETag of the dataset entity.  Should only be specified for update, for which it should match existing entity or can be * for unconditional update. */
  ifMatch?: string;
}

/** Contains response data for the createOrUpdate operation. */
export type DatasetsCreateOrUpdateResponse = DatasetResource;

/** Optional parameters. */
export interface DatasetsGetOptionalParams extends coreClient.OperationOptions {
  /** ETag of the dataset entity. Should only be specified for get. If the ETag matches the existing entity tag, or if * was provided, then no content will be returned. */
  ifNoneMatch?: string;
}

/** Contains response data for the get operation. */
export type DatasetsGetResponse = DatasetResource;

/** Optional parameters. */
export interface DatasetsDeleteOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface DatasetsListByFactoryNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByFactoryNext operation. */
export type DatasetsListByFactoryNextResponse = DatasetListResponse;

/** Optional parameters. */
export interface PipelinesListByFactoryOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByFactory operation. */
export type PipelinesListByFactoryResponse = PipelineListResponse;

/** Optional parameters. */
export interface PipelinesCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** ETag of the pipeline entity.  Should only be specified for update, for which it should match existing entity or can be * for unconditional update. */
  ifMatch?: string;
}

/** Contains response data for the createOrUpdate operation. */
export type PipelinesCreateOrUpdateResponse = PipelineResource;

/** Optional parameters. */
export interface PipelinesGetOptionalParams
  extends coreClient.OperationOptions {
  /** ETag of the pipeline entity. Should only be specified for get. If the ETag matches the existing entity tag, or if * was provided, then no content will be returned. */
  ifNoneMatch?: string;
}

/** Contains response data for the get operation. */
export type PipelinesGetResponse = PipelineResource;

/** Optional parameters. */
export interface PipelinesDeleteOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface PipelinesCreateRunOptionalParams
  extends coreClient.OperationOptions {
  /** Parameters of the pipeline run. These parameters will be used only if the runId is not specified. */
  parameters?: { [propertyName: string]: Record<string, unknown> };
  /** The pipeline run identifier. If run ID is specified the parameters of the specified run will be used to create a new run. */
  referencePipelineRunId?: string;
  /** Recovery mode flag. If recovery mode is set to true, the specified referenced pipeline run and the new run will be grouped under the same groupId. */
  isRecovery?: boolean;
  /** In recovery mode, the rerun will start from this activity. If not specified, all activities will run. */
  startActivityName?: string;
  /** In recovery mode, if set to true, the rerun will start from failed activities. The property will be used only if startActivityName is not specified. */
  startFromFailure?: boolean;
}

/** Contains response data for the createRun operation. */
export type PipelinesCreateRunResponse = CreateRunResponse;

/** Optional parameters. */
export interface PipelinesListByFactoryNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByFactoryNext operation. */
export type PipelinesListByFactoryNextResponse = PipelineListResponse;

/** Optional parameters. */
export interface PipelineRunsQueryByFactoryOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the queryByFactory operation. */
export type PipelineRunsQueryByFactoryResponse = PipelineRunsQueryResponse;

/** Optional parameters. */
export interface PipelineRunsGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type PipelineRunsGetResponse = PipelineRun;

/** Optional parameters. */
export interface PipelineRunsCancelOptionalParams
  extends coreClient.OperationOptions {
  /** If true, cancel all the Child pipelines that are triggered by the current pipeline. */
  isRecursive?: boolean;
}

/** Optional parameters. */
export interface ActivityRunsQueryByPipelineRunOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the queryByPipelineRun operation. */
export type ActivityRunsQueryByPipelineRunResponse = ActivityRunsQueryResponse;

/** Optional parameters. */
export interface TriggersListByFactoryOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByFactory operation. */
export type TriggersListByFactoryResponse = TriggerListResponse;

/** Optional parameters. */
export interface TriggersQueryByFactoryOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the queryByFactory operation. */
export type TriggersQueryByFactoryResponse = TriggerQueryResponse;

/** Optional parameters. */
export interface TriggersCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** ETag of the trigger entity.  Should only be specified for update, for which it should match existing entity or can be * for unconditional update. */
  ifMatch?: string;
}

/** Contains response data for the createOrUpdate operation. */
export type TriggersCreateOrUpdateResponse = TriggerResource;

/** Optional parameters. */
export interface TriggersGetOptionalParams extends coreClient.OperationOptions {
  /** ETag of the trigger entity. Should only be specified for get. If the ETag matches the existing entity tag, or if * was provided, then no content will be returned. */
  ifNoneMatch?: string;
}

/** Contains response data for the get operation. */
export type TriggersGetResponse = TriggerResource;

/** Optional parameters. */
export interface TriggersDeleteOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface TriggersSubscribeToEventsOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the subscribeToEvents operation. */
export type TriggersSubscribeToEventsResponse = TriggerSubscriptionOperationStatus;

/** Optional parameters. */
export interface TriggersGetEventSubscriptionStatusOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the getEventSubscriptionStatus operation. */
export type TriggersGetEventSubscriptionStatusResponse = TriggerSubscriptionOperationStatus;

/** Optional parameters. */
export interface TriggersUnsubscribeFromEventsOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the unsubscribeFromEvents operation. */
export type TriggersUnsubscribeFromEventsResponse = TriggerSubscriptionOperationStatus;

/** Optional parameters. */
export interface TriggersStartOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Optional parameters. */
export interface TriggersStopOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Optional parameters. */
export interface TriggersListByFactoryNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByFactoryNext operation. */
export type TriggersListByFactoryNextResponse = TriggerListResponse;

/** Optional parameters. */
export interface TriggerRunsRerunOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface TriggerRunsCancelOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface TriggerRunsQueryByFactoryOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the queryByFactory operation. */
export type TriggerRunsQueryByFactoryResponse = TriggerRunsQueryResponse;

/** Optional parameters. */
export interface DataFlowsCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** ETag of the data flow entity. Should only be specified for update, for which it should match existing entity or can be * for unconditional update. */
  ifMatch?: string;
}

/** Contains response data for the createOrUpdate operation. */
export type DataFlowsCreateOrUpdateResponse = DataFlowResource;

/** Optional parameters. */
export interface DataFlowsGetOptionalParams
  extends coreClient.OperationOptions {
  /** ETag of the data flow entity. Should only be specified for get. If the ETag matches the existing entity tag, or if * was provided, then no content will be returned. */
  ifNoneMatch?: string;
}

/** Contains response data for the get operation. */
export type DataFlowsGetResponse = DataFlowResource;

/** Optional parameters. */
export interface DataFlowsDeleteOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface DataFlowsListByFactoryOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByFactory operation. */
export type DataFlowsListByFactoryResponse = DataFlowListResponse;

/** Optional parameters. */
export interface DataFlowsListByFactoryNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByFactoryNext operation. */
export type DataFlowsListByFactoryNextResponse = DataFlowListResponse;

/** Optional parameters. */
export interface DataFlowDebugSessionCreateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the create operation. */
export type DataFlowDebugSessionCreateResponse = CreateDataFlowDebugSessionResponse;

/** Optional parameters. */
export interface DataFlowDebugSessionQueryByFactoryOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the queryByFactory operation. */
export type DataFlowDebugSessionQueryByFactoryResponse = QueryDataFlowDebugSessionsResponse;

/** Optional parameters. */
export interface DataFlowDebugSessionAddDataFlowOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the addDataFlow operation. */
export type DataFlowDebugSessionAddDataFlowResponse = AddDataFlowToDebugSessionResponse;

/** Optional parameters. */
export interface DataFlowDebugSessionDeleteOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface DataFlowDebugSessionExecuteCommandOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the executeCommand operation. */
export type DataFlowDebugSessionExecuteCommandResponse = DataFlowDebugCommandResponse;

/** Optional parameters. */
export interface DataFlowDebugSessionQueryByFactoryNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the queryByFactoryNext operation. */
export type DataFlowDebugSessionQueryByFactoryNextResponse = QueryDataFlowDebugSessionsResponse;

/** Optional parameters. */
export interface ManagedVirtualNetworksListByFactoryOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByFactory operation. */
export type ManagedVirtualNetworksListByFactoryResponse = ManagedVirtualNetworkListResponse;

/** Optional parameters. */
export interface ManagedVirtualNetworksCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** ETag of the managed Virtual Network entity. Should only be specified for update, for which it should match existing entity or can be * for unconditional update. */
  ifMatch?: string;
}

/** Contains response data for the createOrUpdate operation. */
export type ManagedVirtualNetworksCreateOrUpdateResponse = ManagedVirtualNetworkResource;

/** Optional parameters. */
export interface ManagedVirtualNetworksGetOptionalParams
  extends coreClient.OperationOptions {
  /** ETag of the managed Virtual Network entity. Should only be specified for get. If the ETag matches the existing entity tag, or if * was provided, then no content will be returned. */
  ifNoneMatch?: string;
}

/** Contains response data for the get operation. */
export type ManagedVirtualNetworksGetResponse = ManagedVirtualNetworkResource;

/** Optional parameters. */
export interface ManagedVirtualNetworksListByFactoryNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByFactoryNext operation. */
export type ManagedVirtualNetworksListByFactoryNextResponse = ManagedVirtualNetworkListResponse;

/** Optional parameters. */
export interface ManagedPrivateEndpointsListByFactoryOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByFactory operation. */
export type ManagedPrivateEndpointsListByFactoryResponse = ManagedPrivateEndpointListResponse;

/** Optional parameters. */
export interface ManagedPrivateEndpointsCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** ETag of the managed private endpoint entity. Should only be specified for update, for which it should match existing entity or can be * for unconditional update. */
  ifMatch?: string;
}

/** Contains response data for the createOrUpdate operation. */
export type ManagedPrivateEndpointsCreateOrUpdateResponse = ManagedPrivateEndpointResource;

/** Optional parameters. */
export interface ManagedPrivateEndpointsGetOptionalParams
  extends coreClient.OperationOptions {
  /** ETag of the managed private endpoint entity. Should only be specified for get. If the ETag matches the existing entity tag, or if * was provided, then no content will be returned. */
  ifNoneMatch?: string;
}

/** Contains response data for the get operation. */
export type ManagedPrivateEndpointsGetResponse = ManagedPrivateEndpointResource;

/** Optional parameters. */
export interface ManagedPrivateEndpointsDeleteOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface ManagedPrivateEndpointsListByFactoryNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByFactoryNext operation. */
export type ManagedPrivateEndpointsListByFactoryNextResponse = ManagedPrivateEndpointListResponse;

/** Optional parameters. */
export interface PrivateEndPointConnectionsListByFactoryOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByFactory operation. */
export type PrivateEndPointConnectionsListByFactoryResponse = PrivateEndpointConnectionListResponse;

/** Optional parameters. */
export interface PrivateEndPointConnectionsListByFactoryNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listByFactoryNext operation. */
export type PrivateEndPointConnectionsListByFactoryNextResponse = PrivateEndpointConnectionListResponse;

/** Optional parameters. */
export interface PrivateEndpointConnectionCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** ETag of the private endpoint connection entity.  Should only be specified for update, for which it should match existing entity or can be * for unconditional update. */
  ifMatch?: string;
}

/** Contains response data for the createOrUpdate operation. */
export type PrivateEndpointConnectionCreateOrUpdateResponse = PrivateEndpointConnectionResource;

/** Optional parameters. */
export interface PrivateEndpointConnectionGetOptionalParams
  extends coreClient.OperationOptions {
  /** ETag of the private endpoint connection entity. Should only be specified for get. If the ETag matches the existing entity tag, or if * was provided, then no content will be returned. */
  ifNoneMatch?: string;
}

/** Contains response data for the get operation. */
export type PrivateEndpointConnectionGetResponse = PrivateEndpointConnectionResource;

/** Optional parameters. */
export interface PrivateEndpointConnectionDeleteOptionalParams
  extends coreClient.OperationOptions {}

/** Optional parameters. */
export interface PrivateLinkResourcesGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type PrivateLinkResourcesGetResponse = PrivateLinkResourcesWrapper;

/** Optional parameters. */
export interface DataFactoryClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
