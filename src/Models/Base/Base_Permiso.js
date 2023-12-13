

const Sequelize = require("sequelize");

module.exports = class BasePermiso{
    initialize() {
        return this.api.Database.SequelizeConnection.define("Permiso", {
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
            },
            descripcion: {
                type: Sequelize.STRING,
                allowNull: true,
                field: "descripcion"
            }
        });
    }
};