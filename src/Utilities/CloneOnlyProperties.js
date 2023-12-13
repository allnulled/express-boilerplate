module.exports = class {
    action(object, properties = [], output = {}) {
        this.api.Utilities.Trace("api.Utilities.CloneOnlyProperties");
        for(let prop in properties) {
            output[prop] = object[prop] || undefined;
        }
        return output;
    }
};