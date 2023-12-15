const fs = require("fs");
const path = require("path");
const ejs = require("ejs");

module.exports = (async function () {
    try {
        let ast = undefined;
        Load_api: {
            const load = require(__dirname + "/../../load.js");
            const { api } = await load({}, { skip_database_creation: true });
            // Puedes usar esto para simular las plantillas más básicas en lugar de tener que cargar todo el entorno:
            break Load_api;
            process.env.DATABASE_DRIVER= "mysql";
        }
        Creation_file: {
            const input_file = __dirname + "/../../Database/Scripts/creation.ejs.sql";
            const output_file = __dirname + "/../../Database/Scripts/creation.sql";
            const scripts_dir = __dirname + "/../../Database/Scripts";
            const hql_file = __dirname + "/../../Resources/hql.js";
            const template_contents = fs.readFileSync(input_file).toString();
            const template_output = ejs.render(template_contents, { scripts_dir });
            const hql_parser = require(hql_file);
            ast = hql_parser.parse(template_output);
            fs.writeFileSync(output_file, template_output, "utf8");
        }
        Migration_file: {
            const input_file = __dirname + "/../../Database/Scripts/migration.ejs.sql";
            const output_file = __dirname + "/../../Database/Scripts/migration.sql";
            const scripts_dir = __dirname + "/../../Database/Scripts";
            const template_contents = fs.readFileSync(input_file).toString();
            const template_output = ejs.render(template_contents, { scripts_dir });
            fs.writeFileSync(output_file, template_output, "utf8");
        }
        Model_files: {
            Iterating_tables:
            for (let index_table = 0; index_table < ast.length; index_table++) {
                const table = ast[index_table];
                const table_id = table.tabla;
                const template_for_base_model = fs.readFileSync(__dirname + "/../../Models/Base/Templates/Model_Base.ejs.js").toString();
                const output_for_base_model = ejs.render(template_for_base_model, {
                    table_id,
                    schema: ast,
                });
                const output_file_for_base_model = path.resolve(__dirname + "/../../Models/Base/" + table_id + "_Base.js");
                fs.writeFileSync(output_file_for_base_model, output_for_base_model, "utf8");
                const template_for_model = fs.readFileSync(__dirname + "/../../Models/Base/Templates/Model.ejs.js").toString();
                const output_for_model = ejs.render(template_for_model, {
                    table_id,
                    schema: ast,
                });
                const output_file_for_model = path.resolve(__dirname + "/../../Models/" + table_id + ".js");
                const already_exists_model = fs.existsSync(output_file_for_model);
                if(!already_exists_model) {
                    fs.writeFileSync(output_file_for_model, output_for_model, "utf8");
                }
            }
        }
    } catch (error) {
        console.log(error);
    }
})();

