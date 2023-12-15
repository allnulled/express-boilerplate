module.exports = class {
    /**
     * 
     * @name src/Database/Decorators/Consequencials/columna_solo_actualizable_a.js#resolve
     * @type Función
     * @parameter `data:Object` Los parámetros de la petición, petición inclusive. Requerido.
     * @parameter `columna_id:String` El nombre de la columna. Requerido.
     * @parameter `controlador:Object` El controlador que enchufa este decorador. Requerido.
     * @parameter `valores:String` Los valores posibles, separados. Requerido.
     * @parameter `separador:String` El separador de los valores posibles. Por defecto: "," (coma).
     * @description Si es un Update comprueba que el valor en la columna indicada (id_columna) sea uno de los valores indicados (valores)
     * 
     */
    resolve(data, columna_id, controlador, valores, separador = ",") {
        this.api.Utilities.Trace("Database.Decorators.Consequencials.columna_solo_actualizable_a");
        const { item, _request: request, _response: response } = data;
        if(controlador.name === "Update") {
            const valores_separados = valores.split(separador);
            const valor_destino = item[columna_id];
            const es_valido = valores_separados.indexOf(valor_destino) !== -1;
            if(!es_valido) {
                throw new Error("Se requiere valor controlado en el campo «" + columna_id + "» en el decorador de base de datos tipo consecuencial «solo_actualizable_a»");
            }
        }
    }
};