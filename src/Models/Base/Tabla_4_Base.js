const Sequelize = require("sequelize");

module.exports = class Tabla_4_Base {
    initialize() {
        return this.api.Database.SequelizeConnection.define("Tabla_4", {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            id_tabla_3: {
                type: Sequelize.INTEGER,
                allowNull: true,
                field: "id_tabla_3"
            },
            campo_unico: {
                type: Sequelize.STRING,
                allowNull: true,
                unique: true,
                field: "campo_unico"
            }
        }, {
          timestamps: false,
          freezeTableName: true
        });
    }
};