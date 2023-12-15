module.exports = class {
    /**
     * 
     * @name api.Utilities.GetStringLeftPadded
     * @type Función
     * @parameter `text:String` Texto a espaciar.
     * @parameter `spaces:Number` Espacios totales que debe acabar teniendo como mínimo.
     * @parameter `padding:String` Texto a usar en el espaciamiento.
     * @descripcion Devuelve la copia de un texto (text) pero con tantos espacios como se indiquen (spaces) de los cuales los que falten serán rellenados con el texto indicado (padding), aplicado por la izquierda.
     * @returns `output:String` Texto resultante del espaciamiento.
     */
    action(text, spaces = 2, padding = "0") {
        this.api.Utilities.Trace("api.Utilities.GetStringLeftPadded");
        let output = "" + text;
        while(output.length < spaces) {
            output = padding + output;
        }
        return output;
    }
};