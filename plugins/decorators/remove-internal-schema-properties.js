module.exports = RemoveInternalSchemaProperties;

/** @type {import('@redocly/openapi-cli').OasDecorator} */
function RemoveInternalSchemaProperties() {
  return {
    SchemaProperties: {
      leave(properties) {
        for (const propertyName of Object.keys(properties)) {
          if (properties[propertyName]['x-internal']) {
            delete properties[propertyName];
          }  
        }  
      }
    }    
  }
};
