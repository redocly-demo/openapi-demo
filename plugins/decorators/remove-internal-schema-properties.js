module.exports = RemoveInternalSchemaProperties;

/** @type {import('@redocly/openapi-cli').OasDecorator} */
function RemoveInternalSchemaProperties() {
  return {
    SchemaProperties: {
      leave(schemaProperties) {
        for (const schemaPropertyName of Object.keys(schemaProperties)) {
          if (schemaProperties[schemaPropertyName]['x-internal']) {
            delete schemaProperties[schemaPropertyName];
          }  
        }  
      }
    }    
  }
};
