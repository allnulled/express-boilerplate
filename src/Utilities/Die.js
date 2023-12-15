module.exports = class {
    /**
     * 
     * @name api.Utilities.Die
     * @type Función
     * @parameter  `...args:Array<any>` Lista de textos o cosas que se quieren imprimir por consola antes de matar el proceso.
     * @description Imprime por consola cualquier cosa y luego termina el proceso actual. Solo se usa para propósitos de debug.
     * 
     */
    action(...args) {
        this.api.Utilities.Trace("api.Utilities.Die");
        console.log(...args);
        process.exit(0);
    }
};