const { col } = require("sequelize");
const sqlstring = require("sqlstring");

module.exports = class {
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