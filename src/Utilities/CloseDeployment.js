module.exports = class {
    /**
     * 
     * @name api.Utilities.CloseDeployment
     * @type Función
     * @description Cierra conexiones a bases de datos, servidores, etc. para que termine el proceso de forma natural controlada.
     * 
     */
    action(...args) {
        this.api.Utilities.Trace("api.Utilities.CloseDeployment");
        try {
            this.api.Utilities.Trace("api.Utilities.CloseDeployment#Closing native connection");
            this.api.Database.Connection.NativeConnection.end();
        } catch (error) {
            
        }
        try {
            this.api.Utilities.Trace("api.Utilities.CloseDeployment#Closing sequelize connection");
            this.api.Database.SequelizeConnection.close();
        } catch (error) {
            
        }
        try {
            this.api.Utilities.Trace("api.Utilities.CloseDeployment#Closing app");
            this.api.app.close();
        } catch (error) {
            
        }
    }
};