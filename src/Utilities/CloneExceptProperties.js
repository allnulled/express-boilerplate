module.exports = class {
    action(object, properties = [], output = {}) {
        this.api.Utilities.Trace("api.Utilities.CloneExceptProperties");
        for(let prop in output) {
            if(properties.indexOf(prop) === -1) {
                output[prop] = object[prop];
            }
        }
        return output;
    }
};