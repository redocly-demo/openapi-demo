const RemoveInternalOperations = require('./decorators/remove-internal-operations');
const RemoveInternalSchemaProperties = require('./decorators/remove-internal-schema-properties');
const id = 'demo';

/** @type {import('@redocly/openapi-cli').CustomRulesConfig} */
const decorators = {
  oas3: {
    'remove-internal-operations': RemoveInternalOperations,
    'remove-internal-schema-properties': RemoveInternalSchemaProperties,
  },
};

module.exports = {
  id,
  decorators,
};
