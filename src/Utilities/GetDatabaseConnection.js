module.exports = class {
    /**
     * 
     * @name api.Utilities.GetDatabaseConnection
     * @type Función
     * @description Devuelve `this.api.Database.Connection`.
     * @returns `connection:Object` Objeto conexión neta.
     * 
     */
    action() {
        this.api.Utilities.Trace("api.Utilities.GetDatabaseConnection");
        return this.api.Database.Connection;
    }
};