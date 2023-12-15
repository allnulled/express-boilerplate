module.exports = class {
    /**
     * 
     * @name api.Utilities.CheckThat
     * @type Función
     * @parameter `...args:Array`
     * @description Este método sirve como puente con la API de check-that, otro proyecto del autor que sirve para hacer comprobaciones de tipos y tener un reporte de errores uniforme y más o menos asistido.
     * @returns Devuelve un `check.that(...args)` de la libería `check-that`. Para saber más de cómo se utiliza `check-that`, puedes ir a [https://github.com/allnulled/check-that](https://github.com/allnulled/check-that).
     * 
     */
    action(...args) {
        this.api.Utilities.Trace("api.Utilities.CheckThat");
        return require(__dirname + "/../Resources/check-that.js").that(...args);
    }
};