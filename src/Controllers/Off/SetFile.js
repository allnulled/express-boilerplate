const path = require("path");
const multer = require("multer");
const sqlstring = require("sqlstring");
const BasicController = require(__dirname + "/BasicController.js");

module.exports = class extends BasicController {

  name = "SetFile";

  method = "use";

  route = "^/SetFile";

  priority = 5000;

  getMiddleware() {
    return [this.api.Middlewares.AuthenticateRequest];
  }

  allowedTables = [];

  forbiddenTables = [];
  
  hiddenColumns = [];

  constructor() {
    super();
  }

  async saveFile(request, response) {
    let nuevo_fichero = undefined;
    const storage = multer.diskStorage({
        destination: __dirname + "/../../Files/uploads",
        filename: (request, file, done) => {
            nuevo_fichero = file.originalname + "." + this.api.Utilities.GetDateToString(new Date(), "YYYY-MM-DD-HH-mm-ss-xxx") + path.extname(file.originalname);
            done(null, nuevo_fichero);
        }
    });
    const uploader = multer({ storage })
    const upload = uploader.fields([{
        name: "file",
        maxCount: 1
    }]);
    return await new Promise(function (ok, fail) {
        const next_replacement = (error) => {
            if(error) {
                return fail(error);
            }
            return ok(nuevo_fichero);
        };
        return upload(request, response, next_replacement);
    });
  }

  async dispatch(request, response, next) {
    try {
        const nuevo_fichero = await this.saveFile(request, response);
        const CheckThat = this.api.Utilities.CheckThat;
        const table = await this.api.Utilities.GetRequestParameter(request, "table", false);
        const id = await this.api.Utilities.GetRequestParameter(request, "id", false);
        const column = await this.api.Utilities.GetRequestParameter(request, "column", false);
        const schema = this.api.Database.CompactedSchema;
        CheckThat(table, "table").isString();
        CheckThat(table, "table").can(it => it in schema, "be listed in schema as table");
        CheckThat(id, "id").isString();
        CheckThat(id, "id").differs("1");
        CheckThat(column, "column").isString();
        CheckThat(column, "column in schema").can(it => it in schema[table].composicion, "be listed in table schema as column");
        CheckThat(schema[table].composicion[column].atributos.es_tipo, "column in schema").isNotUndefined("be a file-based column");
        CheckThat(schema[table].composicion[column].atributos.es_tipo, "column in schema").equals("fichero");
        let sql = "";
        sql += "UPDATE ";
        sql += sqlstring.escapeId(table);
        sql += " SET\n  ";
        sql += sqlstring.escapeId(column);
        sql += " = ";
        sql += sqlstring.escape(nuevo_fichero);
        sql += "\nWHERE id = ";
        sql += sqlstring.escape(id);
        sql += ";";
        await this.api.Utilities.QueryDatabase(sql);
        return this.api.Utilities.DispatchSuccess(response, {
            message: "File uploaded successfully"
        });
    } catch (error) {
        return this.api.Utilities.DispatchError(response, error);
    }
  }

};