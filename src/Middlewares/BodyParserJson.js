module.exports = class {
    
    factory() {
        return require("body-parser").json({ extended: true });
    }

};