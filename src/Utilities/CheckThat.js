module.exports = class {
    action(...args) {
        this.api.Utilities.Trace("api.Utilities.CheckThat");
        return require("@allnulled/check-that").that(...args);
    }
};