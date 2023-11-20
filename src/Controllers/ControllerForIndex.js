module.exports = class {

    method = "use";
    
    route = "^/$";

    priority = 5000;
    
    getMiddleware() {
        return [];
    }
    
    async dispatch(request, response, next) {
        return response.redirect("/index.html");
    }

};