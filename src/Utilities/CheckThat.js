module.exports = class {
    action(...args) {
        this.api.Utilities.Trace("api.Utilities.CheckThat");
        return require(__dirname + "/../Resources/check-that.js").that(...args);
    }
};