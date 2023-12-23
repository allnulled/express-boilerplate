const Sequelize = require("sequelize");

module.exports = class Blog_comentario_de_post_Base {
    initialize() {
        return this.api.Database.SequelizeConnection.define("Blog_comentario_de_post", {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            contenido: {
                type: Sequelize.TEXT,
                allowNull: true,
                field: "contenido"
            },
            detalles: {
                type: Sequelize.TEXT,
                allowNull: true,
                field: "detalles"
            },
            fecha_de_creacion: {
                type: Sequelize.DATE,
                allowNull: true,
                field: "fecha_de_creacion"
            }
        }, {
          timestamps: false,
          freezeTableName: true
        });
    }
};