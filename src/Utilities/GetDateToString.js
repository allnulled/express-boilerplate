module.exports = class {
    /**
     * 
     * @name api.Utilities.GetDateToString
     * @type Función
     * @parameter `date:Date` Fecha a formatear.
     * @parameter `format:String` Formato a usar. Por defecto: `"YYYY-MM-DD HH:mm:ss.xxx"`.
     * @description Transforma una fecha (o Date) indicado (date) en texto (o String) con el formato indicado (format).
     * @returns `output:String` La fecha formateada a texto.
     * 
     */
    action(date, format = "YYYY-MM-DD HH:mm:ss.xxx") {
        this.api.Utilities.Trace("api.Utilities.GetDateToString");
        const year = date.getFullYear();
        const month = date.getMonth();
        const day = date.getDate();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        const milliseconds = date.getMilliseconds();
        const paddedYear = this.api.Utilities.GetStringLeftPadded(year, 4, "0");
        const paddedMonth = this.api.Utilities.GetStringLeftPadded(month, 2, "0");
        const paddedDay = this.api.Utilities.GetStringLeftPadded(day, 2, "0");
        const paddedHours = this.api.Utilities.GetStringLeftPadded(hours, 2, "0");
        const paddedMinutes = this.api.Utilities.GetStringLeftPadded(minutes, 2, "0");
        const paddedSeconds = this.api.Utilities.GetStringLeftPadded(seconds, 2, "0");
        const paddedMilliseconds = this.api.Utilities.GetStringLeftPadded(milliseconds, 3, "0");
        return format
            .replace("YYYY", paddedYear)
            .replace("MM", paddedMonth)
            .replace("DD", paddedDay)
            .replace("HH", paddedHours)
            .replace("mm", paddedMinutes)
            .replace("ss", paddedSeconds)
            .replace("xxx", paddedMilliseconds);
    }
};