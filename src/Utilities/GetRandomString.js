const DEFAULT_ALPHABET = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("");

module.exports = class {
    /**
     * 
     * @name api.Utilities.GetRandomString
     * @type Función
     * @parameter `len:Integer` Número de caracteres.
     * @parameter `alphabet:Array<String>` Alfabeto de caracteres válidos.
     * @description Genera un texto aleatorio de longitud indicada (len) con el alfabeto indicado (alphabet).
     * @returns Devuelve el texto aleatorio generado.
     * 
     */
    action(len = 100, alphabet = DEFAULT_ALPHABET) {
        this.api.Utilities.Trace("api.Utilities.GetRandomString");
        let output = "";
        while(output.length < len) {
            output += alphabet[Math.floor(Math.random()*alphabet.length)];;
        }
        return output;
    }
};