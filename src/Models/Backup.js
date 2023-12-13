module.exports = class {
    initialize() {
        const { Model, DataTypes } = require("sequelize");
        const { SequelizeConnection: sequelize } = this.api.Database;
        const Usuario = class extends Model {};
        return Usuario.init({
            nombre: {
                type: DataTypes.STRING,
                allowNull: false
            },
            contrasenya: {
                type: DataTypes.STRING,
                allowNull: false
            },
            correo: {
                type: DataTypes.STRING,
                allowNull: false
            }
        }, {
            sequelize,
            modelName: "Usuario",
            freezeTableName: true,
            createdAt: false,
            updatedAt: false
        });
    }
}