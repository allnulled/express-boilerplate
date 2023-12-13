<%

const aplicar_unique = function(columna) {
  const is_unique = columna.detalles.toUpperCase().indexOf("UNIQUE") !== -1;
  if(is_unique) {
    __append(",\n                ");
    __append("unique: true");
  }
};

const aplicar_field = function(columna) {
  __append(",\n                ");
  __append("field: ");
  __append(JSON.stringify(columna.columna));
};

%>const Sequelize = require("sequelize");

module.exports = class Base<%-table_id%>{
    initialize() {
        return this.api.Database.SequelizeConnection.define(<%-JSON.stringify(table_id)%>, {
            <%
            Iterating_tables:
            for(let index_table = 0; index_table < schema.length; index_table++) {
              const table = schema[index_table];
              const table_id_schema = table.tabla;
              if(table_id !== table_id_schema) {
                  continue Iterating_tables;
              }
              Iterating_columns:
              for(let index_column=0; index_column<table.composicion.length; index_column++) {
                const columna = table.composicion[index_column];
                if(columna.sentencia !== "columna") {
                  continue Iterating_columns;
                }
                const column_id = columna.columna;
                if(index_column !== 0) {
                  __append(",\n            ");
                }
                if(columna.columna === "id") {
                  __append(column_id);
                  __append(": {");
                  __append("\n                ");
                  __append("type: Sequelize.INTEGER");
                  __append(",\n                ");
                  __append("primaryKey: true");
                  __append(",\n                ");
                  __append("autoIncrement: true");
                  __append(",\n                ");
                  __append("allowNull: false");
                  __append("\n            ");
                  __append("}");
                } else if(columna.tipo === "VARCHAR") {
                  __append(column_id);
                  __append(": {");
                  __append("\n                ");
                  __append("type: Sequelize.STRING");
                  __append(",\n                ");
                  __append("allowNull: " + (columna.detalles.toUpperCase().indexOf("NOT NULL") !== -1 ? "false" : "true"));
                  aplicar_unique(columna);
                  aplicar_field(columna);
                  __append("\n            ");
                  __append("}");
                } else if(columna.tipo === "INTEGER") {
                  __append(column_id);
                  __append(": {");
                  __append("\n                ");
                  __append("type: Sequelize.INTEGER");
                  __append(",\n                ");
                  __append("allowNull: " + (columna.detalles.toUpperCase().indexOf("NOT NULL") !== -1 ? "false" : "true"));
                  aplicar_unique(columna);
                  aplicar_field(columna);
                  __append("\n            ");
                  __append("}");
                } else if(columna.tipo === "FLOAT") {
                  __append(column_id);
                  __append(": {");
                  __append("\n                ");
                  __append("type: Sequelize.FLOAT");
                  __append(",\n                ");
                  __append("allowNull: " + (columna.detalles.toUpperCase().indexOf("NOT NULL") !== -1 ? "false" : "true"));
                  aplicar_unique(columna);
                  aplicar_field(columna);
                  __append("\n            ");
                  __append("}");
                } else if(columna.tipo === "TEXT") {
                  __append(column_id);
                  __append(": {");
                  __append("\n                ");
                  __append("type: Sequelize.TEXT");
                  __append(",\n                ");
                  __append("allowNull: " + (columna.detalles.toUpperCase().indexOf("NOT NULL") !== -1 ? "false" : "true"));
                  aplicar_unique(columna);
                  aplicar_field(columna);
                  __append("\n            ");
                  __append("}");
                } else if(columna.tipo === "DATETIME") {
                  __append(column_id);
                  __append(": {");
                  __append("\n                ");
                  __append("type: Sequelize.DATE");
                  __append(",\n                ");
                  __append("allowNull: " + (columna.detalles.toUpperCase().indexOf("NOT NULL") !== -1 ? "false" : "true"));
                  aplicar_unique(columna);
                  aplicar_field(columna);
                  __append("\n            ");
                  __append("}");
                } else if(columna.tipo === "DATE") {
                  __append(column_id);
                  __append(": {");
                  __append("\n                ");
                  __append("type: Sequelize.DATEONLY");
                  __append(",\n                ");
                  __append("allowNull: " + (columna.detalles.toUpperCase().indexOf("NOT NULL") !== -1 ? "false" : "true"));
                  aplicar_unique(columna);
                  aplicar_field(columna);
                  __append("\n            ");
                  __append("}");
                }
              }
            }
            %>
        }, {
          timestamps: false,
          freezeTableName: true
        });
    }
};