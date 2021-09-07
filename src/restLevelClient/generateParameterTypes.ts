import { CodeModel, Operation, Parameter, Property } from "@autorest/codemodel";
import {
  InterfaceDeclarationStructure,
  Project,
  SourceFile,
  StructureKind
} from "ts-morph";
import { getLanguageMetadata } from "../utils/languageHelpers";
import { NameType, normalizeName } from "../utils/nameUtils";
import { getDocs, getPropertySignature } from "./getPropertySignature";
import { primitiveSchemaToType } from "./schemaHelpers";
import { getOperationParameters } from "./helpers/getOperationParameters";

/**
 * Generates the interfaces describing each operation parameters
 */
export function generateParameterInterfaces(
  model: CodeModel,
  project: Project
) {
  const parametersFile = project.createSourceFile(
    `src/parameters.ts`,
    undefined,
    {
      overwrite: true
    }
  );

  // Tracks the models we need to import
  const importedModels = new Set<string>();
  // Tracks the generated parameter types

  const operations = getAllOperations(model);
  let hasHeaders = false;

  for (const operation of operations) {
    const internalReferences = new Set<string>();
    const operationName = normalizeName(
      getLanguageMetadata(operation.language).name,
      NameType.Interface
    );
    const parameterInterfaceName = `${operationName}Parameters`;
    const parameters = getOperationParameters(operation);
    // const requestProperties: PropertySignatureStructure[] = [];

    const headerParameterDefinition =  buildHeaderParameterDefinition(
      operationName,
      parameters,
      parametersFile,
      internalReferences,
    );


    const queryParameterDefinitions = buildQueryParameterDefinition(
      operationName,
      parameters,
      importedModels,
      internalReferences
    );

    const bodyParameterDefinition = buildBodyParametersDefinition(
      operationName,
      parameters,
      importedModels,
      internalReferences
    );

    // Add interfaces for body and query parameters
    parametersFile.addInterfaces([
      ...(bodyParameterDefinition ? [bodyParameterDefinition] : []),
      ...(queryParameterDefinitions ?? []),
      ...(headerParameterDefinition ? [headerParameterDefinition] : [])
    ]);

    if (headerParameterDefinition !== undefined) {
      hasHeaders = true;
    }

    // Add Operation parameters type alias which is composed of the types we generated above
    // plus the common type RequestParameters
    parametersFile.addTypeAlias({
      name: parameterInterfaceName,
      isExported: true,
      type: [...internalReferences, "RequestParameters"].join(" & ")
    });
  }

  if (hasHeaders) {
    parametersFile.addImportDeclarations([
      {
        namedImports: ["RawHttpHeadersInput"],
        moduleSpecifier: "@azure/core-rest-pipeline"
      }
    ]);
  }

  parametersFile.addImportDeclarations([
    {
      namedImports: ["RequestParameters"],
      moduleSpecifier: "@azure-rest/core-client"
    }
  ]);

  parametersFile.addImportDeclarations([
    {
      namedImports: [...importedModels],
      moduleSpecifier: "./models"
    }
  ]);
}

function getRequestHeaderInterfaceDefinition(
  parameters: Parameter[],
  baseName: string
): undefined | InterfaceDeclarationStructure {
  // Check if there are any required headers
  const headerParameters = parameters.filter(p => p.protocol.http?.in === "header");
  if (!headerParameters.length) {
    return undefined;
  }
  const headersInterfaceName = `${baseName}Headers`;
  return {
    kind: StructureKind.Interface,
    isExported: true,
    name: headersInterfaceName,
    properties: headerParameters.map((h: Parameter) => {
      const description = getLanguageMetadata(h.language).description;
      return {
        name: `"${getLanguageMetadata(h.language).name}"`,
        ...(description && { docs: [{ description }] }),
        type: primitiveSchemaToType(h.schema),
        hasQuestionToken: true
      };
    })
  }
}

function buildHeaderParameterDefinition(
  operationName: string,
  parameters: Parameter[],
  parametersFile: SourceFile,
  internalReferences: Set<string>
): InterfaceDeclarationStructure | undefined {
  const headerParameters = parameters.filter(p => p.protocol.http?.in === "header");
  if (!headerParameters.length) {
    return undefined;
  }

  const headerParameterInterfaceName = `${operationName}HeaderParam`;

  const headersInterface = getRequestHeaderInterfaceDefinition(headerParameters, operationName);
  // const headerModels = new Parameter(`${operationName}Headers`, getDocs(), )

  if (headersInterface) {
    parametersFile.addInterface(headersInterface);
  }
  // const headerSignature = getPropertySignature(headerModels, importedModels);

  internalReferences.add(headerParameterInterfaceName);

  return {
    isExported: true,
    kind: StructureKind.Interface,
    name: headerParameterInterfaceName,
    properties: [
      {
        name: "headers",
        type: `RawHttpHeadersInput & ${operationName}Headers`,
        kind: StructureKind.PropertySignature
      }
    ]
  };
}

/**
 * Gets the interface definition for an operation bodyParameters
 */
function buildBodyParametersDefinition(
  operationName: string,
  parameters: Parameter[],
  importedModels: Set<string>,
  internalReferences: Set<string>
): InterfaceDeclarationStructure | undefined {
  const bodyParameters = parameters.filter(p => p.protocol.http?.in === "body");
  if (!bodyParameters.length) {
    return undefined;
  }

  const bodyParameterInterfaceName = `${operationName}BodyParam`;
  // There is only one body parameter can't be more than one so we can safely take the first
  const bodySignature = getPropertySignature(bodyParameters[0], importedModels);

  internalReferences.add(bodyParameterInterfaceName);

  return {
    isExported: true,
    kind: StructureKind.Interface,
    name: bodyParameterInterfaceName,
    properties: [
      {
        docs: bodySignature.docs,
        name: "body",
        type: bodySignature.type,
        hasQuestionToken: bodySignature.hasQuestionToken
      }
    ]
  };
}

/**
 * Gets the interface definition for an operation queryParameters
 */
function buildQueryParameterDefinition(
  operationName: string,
  parameters: Parameter[],
  importedModels: Set<string>,
  internalReferences: Set<string>
): InterfaceDeclarationStructure[] | undefined {
  const queryParameters = parameters.filter(
    p => p.protocol.http?.in === "query"
  );

  if (!queryParameters.length) {
    return undefined;
  }

  const queryParameterInterfaceName = `${operationName}QueryParam`;
  const queryParameterPropertiesName = `${operationName}QueryParamProperties`;

  // Get the property signature for each query parameter
  const propertiesDefinition = queryParameters.map(qp =>
    getPropertySignature(qp, importedModels)
  );

  const hasRequiredParameters = propertiesDefinition.some(
    p => !p.hasQuestionToken
  );

  const propertiesInterface: InterfaceDeclarationStructure = {
    kind: StructureKind.Interface,
    isExported: true,
    name: queryParameterPropertiesName,
    properties: propertiesDefinition
  };

  const parameterInterface: InterfaceDeclarationStructure = {
    kind: StructureKind.Interface,
    isExported: true,
    name: queryParameterInterfaceName,
    properties: [
      {
        name: "queryParameters",
        type: queryParameterPropertiesName,
        // Mark as optional if there are no required parameters
        hasQuestionToken: !hasRequiredParameters
      }
    ]
  };

  // Mark the queryParameter interface for importing
  internalReferences.add(queryParameterInterfaceName);

  return [propertiesInterface, parameterInterface];
}

/**
 * Flattens all operations from operationGroups
 */
function getAllOperations(model: CodeModel): Operation[] {
  const operations: Operation[] = [];
  for (const operationGroup of model.operationGroups) {
    operations.push(...operationGroup.operations);
  }

  return operations;
}
