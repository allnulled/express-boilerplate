const Sequelize = require("sequelize");

module.exports = class Tabla_1_Base {
    initialize() {
        return this.api.Database.SequelizeConnection.define("Tabla_1", {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            nombre: {
                type: Sequelize.STRING,
                allowNull: true,
                field: "nombre"
            }
        }, {
          timestamps: false,
          freezeTableName: true
        });
    }
};