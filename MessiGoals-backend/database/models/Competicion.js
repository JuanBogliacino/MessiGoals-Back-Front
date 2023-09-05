module.exports = function(sequelize, datatypes) {
    let alias = "Competicion";

    let cols = {
        id: {
            type: datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: datatypes.STRING
        }
    }

    let config = {
        tableName: "competicion",
        timestamps: false
    }

    let Competicion = sequelize.define(alias, cols, config);

    Competicion.associate = function(models) {
        Competicion.hasMany(models.Gol, {
           as: "goles",
           foreignKey: "competicion_id"
        });
    }

    return Competicion;
}