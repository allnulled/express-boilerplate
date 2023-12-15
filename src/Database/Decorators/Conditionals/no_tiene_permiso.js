module.exports = class {
    /**
     * 
     * @name src/Database/Decorator/Conditionals/no_tiene_permiso.js#resolve
     * @type Función
     * @parameter `data:Object` Los parámetros de la petición, petición inclusive.
     * @parameter  `permisos:Array<String>` Los permisos a comprobar.
     * @description Devuelve un booleano indicando si tiene alguno de los permisos indicados (permisos).
     * @returns `no_tiene_permisos:Boolean`
     */
    resolve(data, ...permisos) {
        this.api.Utilities.Trace("Database.Decorators.Conditionals.no_tiene_permiso");
        const { _request: request, _response: response } = data;
        return request.$$authentication.permisos.filter(p => permisos.indexOf(p.nombre) !== -1).length === 0;
    }
};