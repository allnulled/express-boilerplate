module.exports = class {
    
    /**
     * 
     * @name api.Middlewares.BodyParserUrlEncoded
     * @type Función
     * @details `return require("body-parser").urlencoded({ extended: true });`
     * 
     */
    factory() {
        return require("body-parser").urlencoded({ extended: true });
    }

};