module.exports = class {
    /**
     * 
     * @name src/Database/Decorators/Consequencials/permitir.js#resolve
     * @type Función
     * @parameter `data:Object`
     * @description Deja pasar la acción, no hace nada.
     */
    resolve(data) {
        this.api.Utilities.Trace("Database.Decorators.Consequencials.permitir");
        const { _request: request, _response: response } = data;
        // @OK
    }
};