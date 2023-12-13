module.exports = class {
    action(...args) {
        this.api.Utilities.Trace("api.Utilities.Die");
        console.log(...args);
        process.exit(0);
    }
};