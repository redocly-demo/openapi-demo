const RemoveInternalOperations = require('./decorators/remove-internal-operations');
const id = 'demo';

/** @type {import('@redocly/openapi-cli').CustomRulesConfig} */
const decorators = {
  oas3: {
    'remove-internal-operations': RemoveInternalOperations,
  },
};

module.exports = {
  id,
  decorators,
};
