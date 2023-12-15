module.exports = class {
    /**
     * 
     * @name api.Utilities.CloneOnlyProperties
     * @type Función
     * @parameter `object:Object`
     * @parameter `properties:Array<String>`
     * @parameter `output:Object`
     * @returns `output:Object` Objeto indicado (output) pero extendido con propiedades indicadas (propierties) del objeto indicado (object).
     */
    action(object, properties = [], output = {}) {
        this.api.Utilities.Trace("api.Utilities.CloneOnlyProperties");
        for(let prop in properties) {
            output[prop] = object[prop] || undefined;
        }
        return output;
    }
};