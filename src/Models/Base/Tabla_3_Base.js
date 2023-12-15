const Sequelize = require("sequelize");

module.exports = class Tabla_3_Base {
    initialize() {
        return this.api.Database.SequelizeConnection.define("Tabla_3", {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            id_usuario: {
                type: Sequelize.INTEGER,
                allowNull: true,
                field: "id_usuario"
            },
            creado_en: {
                type: Sequelize.DATE,
                allowNull: true,
                field: "creado_en"
            },
            creado_por: {
                type: Sequelize.INTEGER,
                allowNull: true,
                field: "creado_por"
            },
            actualizado_en: {
                type: Sequelize.DATE,
                allowNull: true,
                field: "actualizado_en"
            },
            actualizado_por: {
                type: Sequelize.INTEGER,
                allowNull: true,
                field: "actualizado_por"
            },
            campo_preferido: {
                type: Sequelize.STRING,
                allowNull: true,
                field: "campo_preferido"
            },
            campo_libre: {
                type: Sequelize.STRING,
                allowNull: true,
                field: "campo_libre"
            },
            campo_de_estado: {
                type: Sequelize.STRING,
                allowNull: true,
                field: "campo_de_estado"
            }
        }, {
          timestamps: false,
          freezeTableName: true
        });
    }
};