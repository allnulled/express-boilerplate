

const Sequelize = require("sequelize");

module.exports = class BaseHistorial_de_Tabla_3{
    initialize() {
        return this.api.Database.SequelizeConnection.define("Historial_de_Tabla_3", {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            tabla: {
                type: Sequelize.STRING,
                allowNull: true,
                field: "tabla"
            },
            operacion: {
                type: Sequelize.STRING,
                allowNull: true,
                field: "operacion"
            },
            identificador: {
                type: Sequelize.INTEGER,
                allowNull: true,
                field: "identificador"
            },
            parametros: {
                type: Sequelize.TEXT,
                allowNull: true,
                field: "parametros"
            },
            autentificacion: {
                type: Sequelize.TEXT,
                allowNull: true,
                field: "autentificacion"
            },
            creado_en: {
                type: Sequelize.DATE,
                allowNull: true,
                field: "creado_en"
            }
        });
    }
};