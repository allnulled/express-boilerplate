const fs = require("fs");
const path = require("path");
const express = require("express");

module.exports = class {
    
    method = "use";
    
    route = "^/uploads";
    
    priority = 3000;

    getMiddleware() {
        return [];
    }
    
    dispatch = express.static(path.resolve(__dirname + "/../Files/uploads"));

};