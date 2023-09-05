module.exports = function(sequelize, datatypes) {
    let alias = "Equipo";

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
        tableName: "equipo",
        timestamps: false
    }

    let Equipo = sequelize.define(alias, cols, config);

    Equipo.associate = function(models) {
        Equipo.hasMany(models.Gol, {
           as: "goles",
           foreignKey: "equipo_id"
        });
    }

    return Equipo;
}