let db = require('../database/models');

let homePageController = {
    listado: function(req, res) {
        let pedidoGoles = db.Gol.findAll({ include: [{association: "equipo"}, {association: "rival"}, {association: "anio"},  {association: "competicion"}, {association: "tipoDeGol"}] })
        let pedidoEquipos = db.Equipo.findAll()
        let pedidoRivales = db.Rival.findAll()
        let pedidoCompeticiones = db.Competicion.findAll()
        let pedidoAnios = db.Anio.findAll()
        let pedidoTipoDeGoles = db.TipoDeGol.findAll()

        Promise.all([pedidoGoles, pedidoEquipos, pedidoRivales, pedidoCompeticiones, pedidoAnios, pedidoTipoDeGoles])
        .then(function([goles, equipos, rivales, competiciones, anios, tipoDeGoles]) {
            res.render("homePage", {goles:goles, equipos:equipos, rivales:rivales, competiciones:competiciones, anios:anios, tipoDeGoles:tipoDeGoles})
        })
    }
}

module.exports = homePageController