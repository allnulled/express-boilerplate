/**
 * 
 * @name Decorators.js
 * @type Función
 * @parameter `api` Objeto principal de la API del proyecto.
 * @description Devuelve cargados los condicionales, consecuenciales, interceptores de tabla e interceptores de columna, juntos, cargados por este mismo orden. Este fichero se llama, teóricamente, desde el main para cargar los decoradores de la base de datos.
 * @returns `{ Conditionals, Consequencials, Interceptors: { Tables, Columns } }`
 * 
 */
module.exports = function (api) {
    const fs = require("fs");
    const path = require("path");
    const Conditionals = {};
    const conditionals_files = fs.readdirSync(__dirname + "/Conditionals");
    for (let index = 0; index < conditionals_files.length; index++) {
        const conditional_file = conditionals_files[index];
        const conditional_name = conditional_file.replace(/\.js$/g, "");
        const conditional_path = path.resolve(__dirname + "/Conditionals/" + conditional_file);
        const conditional_class = require(conditional_path);
        const conditional_instance = new conditional_class(api);
        conditional_instance.api = api;
        console.log("[*] Decorador condicional nº " + index);
        console.log("    - Nombre:    " + conditional_name);
        console.log("    - Fichero:   " + conditional_file);
        Conditionals[conditional_name] = conditional_instance.resolve.bind(conditional_instance);
    }
    const Consequencials = {};
    const consequencials_files = fs.readdirSync(__dirname + "/Consequencials");
    for (let index = 0; index < consequencials_files.length; index++) {
        const consequencial_file = consequencials_files[index];
        const consequencial_name = consequencial_file.replace(/\.js$/g, "");
        const consequencial_path = path.resolve(__dirname + "/Consequencials/" + consequencial_file);
        const consequencial_class = require(consequencial_path);
        const consequencial_instance = new consequencial_class(api);
        consequencial_instance.api = api;
        console.log("[*] Decorador consecuencial nº " + index);
        console.log("    - Nombre:    " + consequencial_name);
        console.log("    - Fichero:   " + consequencial_file);
        Consequencials[consequencial_name] = consequencial_instance.resolve.bind(consequencial_instance);
    }
    const Tables = {};
    const tables_files = fs.readdirSync(__dirname + "/Interceptors/Tables");
    for (let index = 0; index < tables_files.length; index++) {
        const table_file = tables_files[index];
        const table_name = table_file.replace(/\.js$/g, "");
        const table_path = path.resolve(__dirname + "/Interceptors/Tables/" + table_file);
        const table_class = require(table_path);
        const table_instance = new table_class(api);
        table_instance.api = api;
        console.log("[*] Decorador de tabla nº " + index);
        console.log("    - Nombre:    " + table_name);
        console.log("    - Fichero:   " + table_file);
        Tables[table_name] = table_instance.resolve.bind(table_instance);
    }
    const Columns = {};
    const columns_files = fs.readdirSync(__dirname + "/Interceptors/Columns");
    for (let index = 0; index < columns_files.length; index++) {
        const column_file = columns_files[index];
        const column_name = column_file.replace(/\.js$/g, "");
        const column_path = path.resolve(__dirname + "/Interceptors/Columns/" + column_file);
        const column_class = require(column_path);
        const column_instance = new column_class(api);
        column_instance.api = api;
        console.log("[*] Decorador de columna nº " + index);
        console.log("    - Nombre:    " + column_name);
        console.log("    - Fichero:   " + column_file);
        Columns[column_name] = column_instance.resolve.bind(column_instance);
    }
    const Formatters = {};
    const formatters_files = fs.readdirSync(__dirname + "/Formatters");
    for (let index = 0; index < formatters_files.length; index++) {
        const formatter_file = formatters_files[index];
        const formatter_name = formatter_file.replace(/\.js$/g, "");
        const formatter_path = path.resolve(__dirname + "/Formatters/" + formatter_file);
        const formatter_class = require(formatter_path);
        const formatter_instance = new formatter_class(api);
        formatter_instance.api = api;
        console.log("[*] Decorador de formateador nº " + index);
        console.log("    - Nombre:    " + formatter_name);
        console.log("    - Fichero:   " + formatter_file);
        Formatters[formatter_name] = formatter_instance.resolve.bind(column_instance);
    }
    return { Conditionals, Consequencials, Interceptors: { Tables, Columns }, Formatters };

}