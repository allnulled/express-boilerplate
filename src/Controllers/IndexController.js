module.exports = class {
    method = "use";
    route = "/";
    getMiddleware() { return []; }
    async dispatch(request, response, next) {
        this.api.Utilities.Trace("api.Controllers.IndexController");
        const db = this.api.Utilities.GetDatabaseConnection();
        const [result] = await db.Execute("SELECT 100;");
        response.json({ message: "OK!", result });
    }
}