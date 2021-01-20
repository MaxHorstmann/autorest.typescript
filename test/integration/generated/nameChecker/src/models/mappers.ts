import * as coreHttp from "@azure/core-http";

export const SearchError: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SearchError",
    modelProperties: {
      code: {
        serializedName: "code",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        required: true,
        readOnly: true,
        type: {
          name: "String"
        }
      },
      details: {
        serializedName: "details",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SearchError"
            }
          }
        }
      }
    }
  }
};

export const SearchDocumentsResult: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SearchDocumentsResult",
    modelProperties: {
      count: {
        serializedName: "@odata\\.count",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      coverage: {
        serializedName: "@search\\.coverage",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      facets: {
        serializedName: "@search\\.facets",
        readOnly: true,
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "Sequence",
              element: { type: { name: "Composite", className: "FacetResult" } }
            }
          }
        }
      },
      nextPageParameters: {
        serializedName: "@search\\.nextPageParameters",
        type: {
          name: "Composite",
          className: "SearchRequest"
        }
      },
      results: {
        serializedName: "value",
        required: true,
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SearchResult"
            }
          }
        }
      },
      nextLink: {
        serializedName: "@odata\\.nextLink",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const FacetResult: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "FacetResult",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      count: {
        serializedName: "count",
        readOnly: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const SearchRequest: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SearchRequest",
    modelProperties: {
      includeTotalResultCount: {
        serializedName: "count",
        type: {
          name: "Boolean"
        }
      },
      facets: {
        serializedName: "facets",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      filter: {
        serializedName: "filter",
        type: {
          name: "String"
        }
      },
      highlightFields: {
        serializedName: "highlight",
        type: {
          name: "String"
        }
      },
      highlightPostTag: {
        serializedName: "highlightPostTag",
        type: {
          name: "String"
        }
      },
      highlightPreTag: {
        serializedName: "highlightPreTag",
        type: {
          name: "String"
        }
      },
      minimumCoverage: {
        serializedName: "minimumCoverage",
        type: {
          name: "Number"
        }
      },
      orderBy: {
        serializedName: "orderby",
        type: {
          name: "String"
        }
      },
      queryType: {
        serializedName: "queryType",
        type: {
          name: "Enum",
          allowedValues: ["simple", "full"]
        }
      },
      scoringStatistics: {
        serializedName: "scoringStatistics",
        type: {
          name: "Enum",
          allowedValues: ["local", "global"]
        }
      },
      sessionId: {
        serializedName: "sessionId",
        type: {
          name: "String"
        }
      },
      scoringParameters: {
        serializedName: "scoringParameters",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      scoringProfile: {
        serializedName: "scoringProfile",
        type: {
          name: "String"
        }
      },
      searchText: {
        serializedName: "search",
        type: {
          name: "String"
        }
      },
      searchFields: {
        serializedName: "searchFields",
        type: {
          name: "String"
        }
      },
      searchMode: {
        serializedName: "searchMode",
        type: {
          name: "Enum",
          allowedValues: ["any", "all"]
        }
      },
      select: {
        serializedName: "select",
        type: {
          name: "String"
        }
      },
      skip: {
        serializedName: "skip",
        type: {
          name: "Number"
        }
      },
      top: {
        serializedName: "top",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const SearchResult: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SearchResult",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      _score: {
        serializedName: "@search\\.score",
        required: true,
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      _highlights: {
        serializedName: "@search\\.highlights",
        readOnly: true,
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Sequence", element: { type: { name: "String" } } }
          }
        }
      }
    }
  }
};

export const SuggestDocumentsResult: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SuggestDocumentsResult",
    modelProperties: {
      results: {
        serializedName: "value",
        required: true,
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SuggestResult"
            }
          }
        }
      },
      coverage: {
        serializedName: "@search\\.coverage",
        readOnly: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const SuggestResult: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SuggestResult",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      _text: {
        serializedName: "@search\\.text",
        required: true,
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SuggestRequest: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SuggestRequest",
    modelProperties: {
      filter: {
        serializedName: "filter",
        type: {
          name: "String"
        }
      },
      useFuzzyMatching: {
        serializedName: "fuzzy",
        type: {
          name: "Boolean"
        }
      },
      highlightPostTag: {
        serializedName: "highlightPostTag",
        type: {
          name: "String"
        }
      },
      highlightPreTag: {
        serializedName: "highlightPreTag",
        type: {
          name: "String"
        }
      },
      minimumCoverage: {
        serializedName: "minimumCoverage",
        type: {
          name: "Number"
        }
      },
      orderBy: {
        serializedName: "orderby",
        type: {
          name: "String"
        }
      },
      searchText: {
        serializedName: "search",
        required: true,
        type: {
          name: "String"
        }
      },
      searchFields: {
        serializedName: "searchFields",
        type: {
          name: "String"
        }
      },
      select: {
        serializedName: "select",
        type: {
          name: "String"
        }
      },
      suggesterName: {
        serializedName: "suggesterName",
        required: true,
        type: {
          name: "String"
        }
      },
      top: {
        serializedName: "top",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const IndexBatch: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "IndexBatch",
    modelProperties: {
      actions: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "IndexAction"
            }
          }
        }
      }
    }
  }
};

export const IndexAction: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "IndexAction",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      __actionType: {
        serializedName: "@search\\.action",
        required: true,
        type: {
          name: "Enum",
          allowedValues: ["upload", "merge", "mergeOrUpload", "delete"]
        }
      }
    }
  }
};

export const IndexDocumentsResult: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "IndexDocumentsResult",
    modelProperties: {
      results: {
        serializedName: "value",
        required: true,
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "IndexingResult"
            }
          }
        }
      }
    }
  }
};

export const IndexingResult: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "IndexingResult",
    modelProperties: {
      key: {
        serializedName: "key",
        required: true,
        readOnly: true,
        type: {
          name: "String"
        }
      },
      errorMessage: {
        serializedName: "errorMessage",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      succeeded: {
        serializedName: "status",
        required: true,
        readOnly: true,
        type: {
          name: "Boolean"
        }
      },
      statusCode: {
        serializedName: "statusCode",
        required: true,
        readOnly: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const AutocompleteResult: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AutocompleteResult",
    modelProperties: {
      coverage: {
        serializedName: "@search\\.coverage",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      results: {
        serializedName: "value",
        required: true,
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "AutocompleteItem"
            }
          }
        }
      }
    }
  }
};

export const AutocompleteItem: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AutocompleteItem",
    modelProperties: {
      text: {
        serializedName: "text",
        required: true,
        readOnly: true,
        type: {
          name: "String"
        }
      },
      queryPlusText: {
        serializedName: "queryPlusText",
        required: true,
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AutocompleteRequest: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AutocompleteRequest",
    modelProperties: {
      searchText: {
        serializedName: "search",
        required: true,
        type: {
          name: "String"
        }
      },
      autocompleteMode: {
        serializedName: "autocompleteMode",
        type: {
          name: "Enum",
          allowedValues: ["oneTerm", "twoTerms", "oneTermWithContext"]
        }
      },
      filter: {
        serializedName: "filter",
        type: {
          name: "String"
        }
      },
      useFuzzyMatching: {
        serializedName: "fuzzy",
        type: {
          name: "Boolean"
        }
      },
      highlightPostTag: {
        serializedName: "highlightPostTag",
        type: {
          name: "String"
        }
      },
      highlightPreTag: {
        serializedName: "highlightPreTag",
        type: {
          name: "String"
        }
      },
      minimumCoverage: {
        serializedName: "minimumCoverage",
        type: {
          name: "Number"
        }
      },
      searchFields: {
        serializedName: "searchFields",
        type: {
          name: "String"
        }
      },
      suggesterName: {
        serializedName: "suggesterName",
        required: true,
        type: {
          name: "String"
        }
      },
      top: {
        serializedName: "top",
        type: {
          name: "Number"
        }
      }
    }
  }
};
