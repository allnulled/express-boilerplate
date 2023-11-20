module.exports = class {
    action(response, contents) {
        this.api.Utilities.Trace("api.Utilities.DispatchSuccessAsHtml");
        response.status(200).header("Content-type", "text/html; charset=utf-8");
        return response.send(contents);
    }
};