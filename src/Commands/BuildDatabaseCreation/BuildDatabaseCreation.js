const fs = require("fs");
const ejs = require("ejs");

module.exports = (async function() {
    try {
        const input_file = __dirname + "/../../Database/Scripts/creation.ejs.sql";
        const output_file = __dirname + "/../../Database/Scripts/creation.sql";
        const scripts_dir = __dirname + "/../../Database/Scripts";
        const hql_file = __dirname + "/../../Resources/hql.js";
        const template_contents = fs.readFileSync(input_file).toString();
        const template_output = ejs.render(template_contents, { scripts_dir });
        fs.writeFileSync(output_file, template_output, "utf8");
        const hql_parser = require(hql_file);
        hql_parser.parse(template_output);
    } catch (error) {
        console.log(error);
    }
})();

