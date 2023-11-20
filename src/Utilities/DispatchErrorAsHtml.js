const ejs = require("ejs");

module.exports = class {
    async action(response, error) {
        this.api.Utilities.Trace("api.Utilities.DispatchErrorAsHtml");
        try {
            const contents = await new Promise((ok, fail) => {
                ejs.renderFile(__dirname + "/../Interface/ejs/error.html", { error }, function(error, text) {
                    if(error) {
                        return fail(error);
                    }
                    return ok(text);
                });
                return undefined;
            });
            return response.status(500).header("Content-type", "text/html; charset=utf-8").send(contents);
        } catch (error) {
            console.log(error);
            return response.status(500).header("Content-type", "text/html; charset=utf-8").send(error.message);
        }
    }
};