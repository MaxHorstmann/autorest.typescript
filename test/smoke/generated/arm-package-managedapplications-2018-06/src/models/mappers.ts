/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";

export const Plan: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Plan",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      publisher: {
        serializedName: "publisher",
        required: true,
        type: {
          name: "String"
        }
      },
      product: {
        serializedName: "product",
        required: true,
        type: {
          name: "String"
        }
      },
      promotionCode: {
        serializedName: "promotionCode",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "version",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Sku: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Sku",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      tier: {
        serializedName: "tier",
        type: {
          name: "String"
        }
      },
      size: {
        serializedName: "size",
        type: {
          name: "String"
        }
      },
      family: {
        serializedName: "family",
        type: {
          name: "String"
        }
      },
      model: {
        serializedName: "model",
        type: {
          name: "String"
        }
      },
      capacity: {
        serializedName: "capacity",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const Identity: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Identity",
    modelProperties: {
      principalId: {
        serializedName: "principalId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      tenantId: {
        serializedName: "tenantId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        defaultValue: "SystemAssigned",
        isConstant: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Resource: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Resource",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      }
    }
  }
};

export const ErrorResponse: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorResponse",
    modelProperties: {
      httpStatus: {
        serializedName: "httpStatus",
        type: {
          name: "String"
        }
      },
      errorCode: {
        serializedName: "errorCode",
        type: {
          name: "String"
        }
      },
      errorMessage: {
        serializedName: "errorMessage",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ApplicationProviderAuthorization: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ApplicationProviderAuthorization",
    modelProperties: {
      principalId: {
        serializedName: "principalId",
        required: true,
        type: {
          name: "String"
        }
      },
      roleDefinitionId: {
        serializedName: "roleDefinitionId",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ApplicationArtifact: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ApplicationArtifact",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      uri: {
        serializedName: "uri",
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "Enum",
          allowedValues: ["Template", "Custom"]
        }
      }
    }
  }
};

export const ApplicationDefinitionListResult: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ApplicationDefinitionListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ApplicationDefinition"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ApplicationListResult: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ApplicationListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Application"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PlanPatchable: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PlanPatchable",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      publisher: {
        serializedName: "publisher",
        type: {
          name: "String"
        }
      },
      product: {
        serializedName: "product",
        type: {
          name: "String"
        }
      },
      promotionCode: {
        serializedName: "promotionCode",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "version",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GenericResource: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GenericResource",
    modelProperties: {
      ...Resource.type.modelProperties,
      managedBy: {
        serializedName: "managedBy",
        type: {
          name: "String"
        }
      },
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "Sku"
        }
      },
      identity: {
        serializedName: "identity",
        type: {
          name: "Composite",
          className: "Identity"
        }
      }
    }
  }
};

export const Application: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Application",
    modelProperties: {
      ...GenericResource.type.modelProperties,
      plan: {
        serializedName: "plan",
        type: {
          name: "Composite",
          className: "Plan"
        }
      },
      kind: {
        constraints: {
          Pattern: new RegExp("^[-\\w\\._,\\(\\)]+$")
        },
        serializedName: "kind",
        required: true,
        type: {
          name: "String"
        }
      },
      managedResourceGroupId: {
        serializedName: "properties.managedResourceGroupId",
        required: true,
        type: {
          name: "String"
        }
      },
      applicationDefinitionId: {
        serializedName: "properties.applicationDefinitionId",
        type: {
          name: "String"
        }
      },
      parameters: {
        serializedName: "properties.parameters",
        type: {
          name: "any"
        }
      },
      outputs: {
        serializedName: "properties.outputs",
        readOnly: true,
        type: {
          name: "any"
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ApplicationDefinition: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ApplicationDefinition",
    modelProperties: {
      ...GenericResource.type.modelProperties,
      lockLevel: {
        serializedName: "properties.lockLevel",
        required: true,
        type: {
          name: "Enum",
          allowedValues: ["CanNotDelete", "ReadOnly", "None"]
        }
      },
      displayName: {
        serializedName: "properties.displayName",
        type: {
          name: "String"
        }
      },
      isEnabled: {
        serializedName: "properties.isEnabled",
        type: {
          name: "String"
        }
      },
      authorizations: {
        serializedName: "properties.authorizations",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ApplicationProviderAuthorization"
            }
          }
        }
      },
      artifacts: {
        serializedName: "properties.artifacts",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ApplicationArtifact"
            }
          }
        }
      },
      description: {
        serializedName: "properties.description",
        type: {
          name: "String"
        }
      },
      packageFileUri: {
        serializedName: "properties.packageFileUri",
        type: {
          name: "String"
        }
      },
      mainTemplate: {
        serializedName: "properties.mainTemplate",
        type: {
          name: "any"
        }
      },
      createUiDefinition: {
        serializedName: "properties.createUiDefinition",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const ApplicationPatchable: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ApplicationPatchable",
    modelProperties: {
      ...GenericResource.type.modelProperties,
      plan: {
        serializedName: "plan",
        type: {
          name: "Composite",
          className: "PlanPatchable"
        }
      },
      kind: {
        constraints: {
          Pattern: new RegExp("^[-\\w\\._,\\(\\)]+$")
        },
        serializedName: "kind",
        type: {
          name: "String"
        }
      },
      managedResourceGroupId: {
        serializedName: "properties.managedResourceGroupId",
        type: {
          name: "String"
        }
      },
      applicationDefinitionId: {
        serializedName: "properties.applicationDefinitionId",
        type: {
          name: "String"
        }
      },
      parameters: {
        serializedName: "properties.parameters",
        type: {
          name: "any"
        }
      },
      outputs: {
        serializedName: "properties.outputs",
        readOnly: true,
        type: {
          name: "any"
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};
