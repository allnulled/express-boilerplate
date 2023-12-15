module.exports = class {
    /**
     * 
     * @name api.Utilities.GetStringFromString
     * @type Función
     * @parameter `dateString:String` Fecha en formato texto.
     * @description Devuelve una fecha (tipo Date) a partir de una fecha tipo texto indicada (`dateString`)
     * @returns `date:Date` Fecha en formato Date.
     * 
     */
    action(dateString) {
        this.api.Utilities.Trace("api.Utilities.GetStringFromString");
        const date = new Date(dateString);
        if(isNaN(date)) {
            throw new Error("Required valid date format in «api.Utilities.GetStringFromString»");
        }
        return date;
    }
};