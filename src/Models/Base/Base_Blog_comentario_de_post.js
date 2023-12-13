

const Sequelize = require("sequelize");

module.exports = class BaseBlog_comentario_de_post{
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
            fecha_de_creacion: {
                type: Sequelize.DATE,
                allowNull: true,
                field: "fecha_de_creacion"
            }
        });
    }
};