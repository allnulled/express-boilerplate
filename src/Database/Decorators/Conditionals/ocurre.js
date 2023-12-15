module.exports = class {
    /**
     * 
     * @name src/Database/Decorators/Conditionals/ocurre.js#resolve
     * @type Función
     * @parameter `data` Los parámetros de la petición, petición inclusive.
     * @parameter  `...permisos:Array<String>` Permisos.
     * @description Devuelve `true` siempre.
     * @returns `true`
     * 
     */
    resolve(data, ...permisos) {
        this.api.Utilities.Trace("Database.Decorators.Conditionals.ocurre");
        return true;
    }
};