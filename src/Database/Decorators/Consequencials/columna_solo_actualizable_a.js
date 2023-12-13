module.exports = class {
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