module.exports = class {
    /**
     * 
     * @name api.Utilities.QueryDatabase
     * @type Función
     * @parameter `query:String` Consulta SQL a ejecutar.
     * @returns `any` Resultado de la consulta ejecutada.
     * 
     */
    action(query, ...args) {
        this.api.Utilities.Trace("api.Utilities.QueryDatabase");
        if(typeof query === "string") {
            return this.api.Database.Connection.Execute(query);
        } else if(typeof query === "object") {
            const value = query.query(...args);
            if(value instanceof Promise) {
                return value.then(q => {
                    return this.api.Database.Connection.Execute(q);
                });
            }
            return this.api.Database.Connection.Execute(value);
        } else {
            throw new Error("Required argument 1 to be a string or an object on utility «QueryDatabase»");
        }
    }
}