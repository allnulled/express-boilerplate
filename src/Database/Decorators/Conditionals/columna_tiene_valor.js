const sqlstring = require("sqlstring");

module.exports = class {
    /**
     * 
     * @name src/Database/Decorator/Conditionals/columna_tiene_valor.js#resolve
     * @type Función
     * @parameter `data:Object` Los parámetros de la petición, petición inclusive.
     * @parameter `columna_id:String` El nombre de la columna.
     * @parameter `controlador:Object` El controlador que enchufa esto.
     * @parameter `valores_string:String` Valores posibles, separados.
     * @parameter `valores_separador:String` Separador de los valores posibles.
     * @description Comprueba, con una query si es necesario, que el item tiene uno de los valores indicados (valores_string).
     * @returns `tiene_valor:Booleano` Si tiene o no alguno de los valores indicados (valores_string).
     * 
     */
    async resolve(data, columna_id, controlador, valores_string, valores_separador = ",") {
        this.api.Utilities.Trace("Database.Decorators.Conditionals.columna_tiene_valor");
        const { _request: request, _response: response } = data;
        const { table, id } = data;
        let { item_recuperated } = data;
        if (!item_recuperated) {
            let sql = "";
            sql += "SELECT * FROM ";
            sql += sqlstring.escapeId(table);
            sql += "\n WHERE id = ";
            sql += sqlstring.escape(id);
            sql += ";";
            const resultado = await this.api.Utilities.QueryDatabase(sql);
            if (resultado.length === 0) {
                throw new Error("No se encontró coincidencia con «id» proporcionado para tabla «" + table + "» en el decorador de base de datos tipo condicional «columna_tiene_valor»");
            }
            data.item_recuperated = resultado[0];
            item_recuperated = resultado[0];
        }
        const valores_separados = valores_string.split(valores_separador);
        if (valores_separados.indexOf(item_recuperated[columna_id]) === -1) {
            return false;
        }
        return true;
    }
};