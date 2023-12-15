module.exports = class {
    /**
     * 
     * @name src/Database/Decorators/Conditionals/tiene_permiso.js#resolve
     * @type Función
     * @parameter `data:Object` Los parámetros de la petición, petición inclusive.
     * @parameter `...permisos:Array<String>` Permisos a comprobar.
     * @description Devuelve un booleano para permitir saber si tiene o no alguno de los permisos indicados (permisos).
     * @returns `tiene_permisos:Boolean` Si tiene o no alguno de los permisos.
     * 
     */
    resolve(data, ...permisos) {
        this.api.Utilities.Trace("Database.Decorators.Conditionals.tiene_permiso");
        const { _request: request, _response: response } = data;
        return request.$$authentication.permisos.filter(p => permisos.indexOf(p.nombre) !== -1).length !== 0;
    }
};