module.exports = class {
    /**
     * 
     * @name api.Utilities.CloneExceptProperties
     * @type Función
     * @parameter `object:Object`
     * @parameter `properties:Array<String>`
     * @parameter `output:Object`
     * @returns 
     * 
     */
    action(object, properties = [], output = {}) {
        this.api.Utilities.Trace("api.Utilities.CloneExceptProperties");
        for(let prop in output) {
            if(properties.indexOf(prop) === -1) {
                output[prop] = object[prop];
            }
        }
        return output;
    }
};