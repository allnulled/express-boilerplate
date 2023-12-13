

const Sequelize = require("sequelize");

module.exports = class BaseUsuario{
    initialize() {
        return this.api.Database.SequelizeConnection.define("Usuario", {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            nombre: {
                type: Sequelize.STRING,
                allowNull: true,
                unique: true,
                field: "nombre"
            },
            contrasenya: {
                type: Sequelize.STRING,
                allowNull: true,
                field: "contrasenya"
            },
            correo: {
                type: Sequelize.STRING,
                allowNull: true,
                field: "correo"
            }
        });
    }
};