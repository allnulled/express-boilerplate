const Sequelize = require("sequelize");

module.exports = class Usuario_no_confirmado_Base {
    initialize() {
        return this.api.Database.SequelizeConnection.define("Usuario_no_confirmado", {
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
                unique: true,
                field: "correo"
            },
            token_de_confirmacion: {
                type: Sequelize.STRING,
                allowNull: true,
                unique: true,
                field: "token_de_confirmacion"
            }
        }, {
            timestamps: false,
            freezeTableName: true
        });
    }
};