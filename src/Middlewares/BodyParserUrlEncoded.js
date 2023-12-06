module.exports = class {
    
    factory() {
        return require("body-parser").urlencoded({ extended: true });
    }

};