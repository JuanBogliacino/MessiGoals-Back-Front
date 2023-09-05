let db = require('../database/models');
let Op = db.Sequelize.Op;

let golesController = {
    crear: function(req, res) {
        let pedidoEquipos = db.Equipo.findAll()
        let pedidoRivales = db.Rival.findAll()
        let pedidoCompeticiones = db.Competicion.findAll()
        let pedidoAnios = db.Anio.findAll()
        let pedidoTipoDeGoles = db.TipoDeGol.findAll()
        
        Promise.all([pedidoEquipos, pedidoRivales, pedidoCompeticiones, pedidoAnios, pedidoTipoDeGoles])
        .then(function([equipos, rivales, competiciones ,anios, tipoDeGoles]) {
            let rivalesOrder = rivales.sort((a, b) => a.name.localeCompare(b.name));

            res.render("creacionGoles", {equipos:equipos, rivales:rivalesOrder, competiciones:competiciones, anios:anios, tipoDeGoles:tipoDeGoles});
        })
    },
    guardado: function(req, res) {
        db.Gol.create({
            num: req.body.num,
            rival_id: req.body.rival,
            competicion_id: req.body.competicion,
            anio_id: req.body.anio,
            equipo_id: req.body.equipo,
            tipoDeGol_id: req.body.tipoDeGol,
            link: req.body.link,
        })

        res.redirect("/goles/create")
    },
    equipos: function(req, res) {
        let pedidoGoles = db.Gol.findAll({ include: [{association: "equipo"}, {association: "rival"}, {association: "anio"},  {association: "competicion"}, {association: "tipoDeGol"}] })
        let pedidoEquipos = db.Equipo.findAll()
        let pedidoCompeticiones = db.Competicion.findAll()
        let pedidoAnios = db.Anio.findAll()
        let pedidoRivales = db.Rival.findAll()
        let pedidoTipoDeGoles = db.TipoDeGol.findAll()

        Promise.all([pedidoGoles, pedidoEquipos, pedidoCompeticiones, pedidoAnios, pedidoRivales, pedidoTipoDeGoles])
        .then(function([goles, equipos, competiciones, anios, rivales, tipoDeGoles]) {
            let equipoId = equipos.find(equipoId => equipoId.id == req.params.id);

            if (equipoId != undefined) {
                let golesEquipo = goles.filter(golesEquipo => golesEquipo.equipo_id == equipoId.id)

                console.log(equipoId.equipo);

                res.render("equipos", { golesEquipo:golesEquipo, equipos:equipos, competiciones:competiciones, anios:anios, rivales:rivales, tipoDeGoles:tipoDeGoles, equipoId:equipoId });
            }
        })
    },
    rivales: function(req, res) {
        let pedidoGoles = db.Gol.findAll({ include: [{association: "equipo"}, {association: "rival"}, {association: "anio"},  {association: "competicion"}, {association: "tipoDeGol"}] })
        let pedidoEquipos = db.Equipo.findAll()
        let pedidoCompeticiones = db.Competicion.findAll()
        let pedidoAnios = db.Anio.findAll()
        let pedidoRivales = db.Rival.findAll()
        let pedidoTipoDeGoles = db.TipoDeGol.findAll()

        Promise.all([pedidoGoles, pedidoEquipos, pedidoCompeticiones, pedidoAnios, pedidoRivales, pedidoTipoDeGoles])
        .then(function([goles, equipos, competiciones, anios, rivales, tipoDeGoles]) {
            let rivalId = rivales.find(rivalId => rivalId.id == req.params.id);

            if (rivalId != undefined) {
                let golesRival = goles.filter(golesRival => golesRival.rival_id == rivalId.id)

                res.render("rivales", { golesRival:golesRival, equipos:equipos, competiciones:competiciones, anios:anios, rivales:rivales, tipoDeGoles:tipoDeGoles });
            }
        })
    },
    competicion: function(req, res) {
        let pedidoGoles = db.Gol.findAll({ include: [{association: "equipo"}, {association: "rival"}, {association: "anio"},  {association: "competicion"}, {association: "tipoDeGol"}] })
        let pedidoEquipos = db.Equipo.findAll()
        let pedidoCompeticiones = db.Competicion.findAll()
        let pedidoAnios = db.Anio.findAll()
        let pedidoRivales = db.Rival.findAll()
        let pedidoTipoDeGoles = db.TipoDeGol.findAll()

        Promise.all([pedidoGoles, pedidoEquipos, pedidoCompeticiones, pedidoAnios, pedidoRivales, pedidoTipoDeGoles])
        .then(function([goles, equipos, competiciones, anios, rivales, tipoDeGoles]) {
            let competicionId = competiciones.find(competicionId => competicionId.id == req.params.id);

            if (competicionId != undefined) {
                let golesCompeticion = goles.filter(golesCompeticion => golesCompeticion.competicion_id == competicionId.id)

                res.render("competiciones", { golesCompeticion:golesCompeticion, equipos:equipos, competiciones:competiciones, anios:anios, rivales:rivales, tipoDeGoles:tipoDeGoles, competicionId:competicionId });
            }
        })
    },
    anio: function(req, res) {
        let pedidoGoles = db.Gol.findAll({ include: [{association: "equipo"}, {association: "rival"}, {association: "anio"},  {association: "competicion"}, {association: "tipoDeGol"}] })
        let pedidoEquipos = db.Equipo.findAll()
        let pedidoCompeticiones = db.Competicion.findAll()
        let pedidoAnios = db.Anio.findAll()
        let pedidoRivales = db.Rival.findAll()
        let pedidoTipoDeGoles = db.TipoDeGol.findAll()

        Promise.all([pedidoGoles, pedidoEquipos, pedidoCompeticiones, pedidoAnios, pedidoRivales, pedidoTipoDeGoles])
        .then(function([goles, equipos, competiciones, anios, rivales, tipoDeGoles]) {
            let anioId = anios.find(anioId => anioId.id == req.params.id);

            if (anioId != undefined) {
                let golesAnio = goles.filter(golesAnio => golesAnio.anio_id == anioId.id)

                res.render("anios", { golesAnio:golesAnio, equipos:equipos, competiciones:competiciones, anios:anios, rivales:rivales, tipoDeGoles:tipoDeGoles });
            }
        })
    },
    tipoDeGol: function(req, res) {
        let pedidoGoles = db.Gol.findAll({ include: [{association: "equipo"}, {association: "rival"}, {association: "anio"},  {association: "competicion"}, {association: "tipoDeGol"}] })
        let pedidoEquipos = db.Equipo.findAll()
        let pedidoCompeticiones = db.Competicion.findAll()
        let pedidoAnios = db.Anio.findAll()
        let pedidoRivales = db.Rival.findAll()
        let pedidoTipoDeGoles = db.TipoDeGol.findAll()

        Promise.all([pedidoGoles, pedidoEquipos, pedidoCompeticiones, pedidoAnios, pedidoRivales, pedidoTipoDeGoles])
        .then(function([goles, equipos, competiciones, anios, rivales, tipoDeGoles]) {
            let tipoDeGolId = tipoDeGoles.find(tipoDeGolId => tipoDeGolId.id == req.params.id);

            if (tipoDeGolId != undefined) {
                let golesTipoDeGol = goles.filter(golesTipoDeGol => golesTipoDeGol.tipoDeGol_id == tipoDeGolId.id)

                res.render("tipoDeGoles", { golesTipoDeGol:golesTipoDeGol, equipos:equipos, competiciones:competiciones, anios:anios, rivales:rivales, tipoDeGoles:tipoDeGoles, tipoDeGolId:tipoDeGolId });
            }
        })
    },
    mobileCompeticion: function(req, res) {
        let pedidoEquipos = db.Equipo.findAll()
        let pedidoRivales = db.Rival.findAll()
        let pedidoCompeticiones = db.Competicion.findAll()
        let pedidoAnios = db.Anio.findAll()
        let pedidoTipoDeGoles = db.TipoDeGol.findAll()

        Promise.all([pedidoEquipos, pedidoRivales, pedidoCompeticiones, pedidoAnios, pedidoTipoDeGoles])
        .then(function([equipos, rivales, competiciones, anios, tipoDeGoles]) {
            res.render("mobile/mobileCompeticion", {equipos:equipos, rivales:rivales, competiciones:competiciones, anios:anios, tipoDeGoles:tipoDeGoles})
        })
    },
    mobileAnio: function(req, res) {
        let pedidoEquipos = db.Equipo.findAll()
        let pedidoRivales = db.Rival.findAll()
        let pedidoCompeticiones = db.Competicion.findAll()
        let pedidoAnios = db.Anio.findAll()
        let pedidoTipoDeGoles = db.TipoDeGol.findAll()

        Promise.all([pedidoEquipos, pedidoRivales, pedidoCompeticiones, pedidoAnios, pedidoTipoDeGoles])
        .then(function([equipos, rivales, competiciones, anios, tipoDeGoles]) {
            res.render("mobile/mobileAnio", {equipos:equipos, rivales:rivales, competiciones:competiciones, anios:anios, tipoDeGoles:tipoDeGoles})
        })
    },
    mobileRival: function(req, res) {
        let pedidoEquipos = db.Equipo.findAll()
        let pedidoRivales = db.Rival.findAll()
        let pedidoCompeticiones = db.Competicion.findAll()
        let pedidoAnios = db.Anio.findAll()
        let pedidoTipoDeGoles = db.TipoDeGol.findAll()

        Promise.all([pedidoEquipos, pedidoRivales, pedidoCompeticiones, pedidoAnios, pedidoTipoDeGoles])
        .then(function([equipos, rivales, competiciones, anios, tipoDeGoles]) {
            res.render("mobile/mobileRival", {equipos:equipos, rivales:rivales, competiciones:competiciones, anios:anios, tipoDeGoles:tipoDeGoles})
        })
    }
}

module.exports = golesController;