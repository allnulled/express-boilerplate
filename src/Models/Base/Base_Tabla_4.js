

const Sequelize = require("sequelize");

module.exports = class BaseTabla_4{
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
        });
    }
};