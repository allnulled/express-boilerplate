module.exports = class {
    /**
     * 
     * @name api.Utilities.Trace
     * @type Función
     * @parameter `msg:String`. Mensaje a imprimir por traceo.
     * @description Imprime un mensaje prependizando '[TRACE]' por la consola.
     * 
     */
    action(msg) {
        console.log("[TRACE] " + msg);
    }
};