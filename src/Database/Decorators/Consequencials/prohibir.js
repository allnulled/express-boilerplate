module.exports = class {
    /**
     * 
     * @name src/Database/Decorators/Consequencials/prohibir.js#resolve
     * @type Función
     * @parameter `data:Object` Los parámetros de la petición, petición inclusive.
     * @parameter `error:String` Mensaje de error.
     * @description Se lanza un error, o el indicado (error) o uno estándar.
     * 
     */
    resolve(data, error) {
        this.api.Utilities.Trace("Database.Decorators.Consequencials.prohibir");
        const { _request: request, _response: response } = data;
        if(error) {
            throw new Error(error);
        }
        throw new Error("Se requieren permisos específicos para esta operación");
    }
};