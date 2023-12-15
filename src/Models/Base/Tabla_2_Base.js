const Sequelize = require("sequelize");

module.exports = class Tabla_2_Base {
    initialize() {
        return this.api.Database.SequelizeConnection.define("Tabla_2", {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            nombre_privado: {
                type: Sequelize.STRING,
                allowNull: true,
                field: "nombre_privado"
            },
            nombre_publico: {
                type: Sequelize.STRING,
                allowNull: true,
                field: "nombre_publico"
            },
            nombre_no_filtrable: {
                type: Sequelize.STRING,
                allowNull: true,
                field: "nombre_no_filtrable"
            },
            nombre_no_ordenable: {
                type: Sequelize.STRING,
                allowNull: true,
                field: "nombre_no_ordenable"
            },
            nombre_no_insertable: {
                type: Sequelize.STRING,
                allowNull: true,
                field: "nombre_no_insertable"
            },
            nombre_no_actualizable: {
                type: Sequelize.STRING,
                allowNull: true,
                field: "nombre_no_actualizable"
            }
        }, {
          timestamps: false,
          freezeTableName: true
        });
    }
};