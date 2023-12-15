module.exports = class {
    
    /**
     * 
     * @name api.Middlewares.BodyParserUrlEncoded
     * @type Función
     * @details `return require("body-parser").json({ extended: true });`
     * 
     */
    factory() {
        return require("body-parser").json({ extended: true });
    }

};