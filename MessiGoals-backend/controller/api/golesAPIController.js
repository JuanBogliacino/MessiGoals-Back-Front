const db = require("../../database/models")

let golesAPIController = {
    list: (req, res) => {
        db.Gol.findAll({ include: [{association: "equipo"}, {association: "rival"}, {association: "anio"},  {association: "competicion"}, {association: "tipoDeGol"}] })
        .then(goles => {
            let respuesta = {
                meta: {
                    status : 200,
                    total: goles.length,
                    url: 'api/goles'
                },
                data: goles
            }
            res.json(respuesta)
        })
    },
    equiposList: (req, res) => {
        db.Equipo.findAll()
        .then(equipos => {
            let respuesta = {
                meta: {
                    status : 200,
                    total: equipos.length,
                    url: 'api/goles/equipos'
                },
                data: equipos
            }
            res.json(respuesta)
        })
    },
    equipoDetail: (req, res) => {
        let pedidoGoles = db.Gol.findAll({ include: [{association: "equipo"}, {association: "rival"}, {association: "anio"},  {association: "competicion"}, {association: "tipoDeGol"}] })
        let pedidoEquipos = db.Equipo.findAll()

        Promise.all([pedidoGoles, pedidoEquipos])
            .then(function([goles, equipos]) {
                let equipoId = equipos.find(equipo => equipo.id == req.params.id);

                if (equipoId != undefined) {
                    let golesEquipo = goles.filter(gol => gol.equipo_id == equipoId.id)
    
                    let respuesta = {
                        meta: {
                            status : 200,
                            total: golesEquipo.length,
                            url: `api/goles/equipo/${req.params.id}`
                        },
                        data: golesEquipo
                    }
                    res.json(respuesta)
                }

            })
    },
    rivalesList: (req, res) => {
        db.Rival.findAll()
        .then(rivales => {
            let rivalesOrder = rivales.sort((a, b) => a.name.localeCompare(b.name));

            let respuesta = {
                meta: {
                    status : 200,
                    total: rivalesOrder.length,
                    url: 'api/goles/rivales'
                },
                data: rivalesOrder
            }
            res.json(respuesta)
        })
    },
    rivalDetail: (req, res) => {
        let pedidoGoles = db.Gol.findAll({ include: [{association: "equipo"}, {association: "rival"}, {association: "anio"},  {association: "competicion"}, {association: "tipoDeGol"}] })
        let pedidoRivales = db.Rival.findAll()

        Promise.all([pedidoGoles, pedidoRivales])
            .then(function([goles, rivales]) {
                let rivalId = rivales.find(rival => rival.id == req.params.id);

                if (rivalId != undefined) {
                    let golesRival = goles.filter(gol => gol.rival_id == rivalId.id)
    
                    let respuesta = {
                        meta: {
                            status : 200,
                            total: golesRival.length,
                            url: `api/goles/equipo/${req.params.id}`
                        },
                        data: golesRival
                    }
                    res.json(respuesta)
                }

            })
    },
    competicionesList: (req, res) => {
        db.Competicion.findAll()
        .then(competiciones => {
            let respuesta = {
                meta: {
                    status : 200,
                    total: competiciones.length,
                    url: 'api/goles/competiciones'
                },
                data: competiciones
            }
            res.json(respuesta)
        })
    },
    competicionDetail: (req, res) => {
        let pedidoGoles = db.Gol.findAll({ include: [{association: "equipo"}, {association: "rival"}, {association: "anio"},  {association: "competicion"}, {association: "tipoDeGol"}] })
        let pedidoCompeticiones = db.Competicion.findAll()

        Promise.all([pedidoGoles, pedidoCompeticiones])
            .then(function([goles, competiciones]) {
                let competicionId = competiciones.find(competicion => competicion.id == req.params.id);

                if (competicionId != undefined) {
                    let golesCompeticion = goles.filter(gol => gol.competicion_id == competicionId.id)
    
                    let respuesta = {
                        meta: {
                            status : 200,
                            total: golesCompeticion.length,
                            url: `api/goles/equipo/${req.params.id}`
                        },
                        data: golesCompeticion
                    }
                    res.json(respuesta)
                }

            })
    },
    aniosList: (req, res) => {
        db.Anio.findAll()
        .then(anios => {
            let respuesta = {
                meta: {
                    status : 200,
                    total: anios.length,
                    url: 'api/goles/anios'
                },
                data: anios
            }
            res.json(respuesta)
        })
    },
    anioDetail: (req, res) => {
        let pedidoGoles = db.Gol.findAll({ include: [{association: "equipo"}, {association: "rival"}, {association: "anio"},  {association: "competicion"}, {association: "tipoDeGol"}] })
        let pedidoAnios = db.Anio.findAll()

        Promise.all([pedidoGoles, pedidoAnios])
            .then(function([goles, anios]) {
                let anioId = anios.find(anio => anio.id == req.params.id);

                if (anioId != undefined) {
                    let golesAnio = goles.filter(gol => gol.anio_id == anioId.id)
    
                    let respuesta = {
                        meta: {
                            status : 200,
                            total: golesAnio.length,
                            url: `api/goles/equipo/${req.params.id}`
                        },
                        data: golesAnio
                    }
                    res.json(respuesta)
                }

            })
    },
    tipoDeGolList: (req, res) => {
        db.TipoDeGol.findAll()
        .then(tipoDeGol => {
            let tipoDeGolOrder = tipoDeGol.slice(1)

            let respuesta = {
                meta: {
                    status : 200,
                    total: tipoDeGolOrder.length,
                    url: 'api/goles/tipoDeGoles'
                },
                data: tipoDeGolOrder
            }
            res.json(respuesta)
        })
    },
    tipoDeGolDetail: (req, res) => {
        let pedidoGoles = db.Gol.findAll({ include: [{association: "equipo"}, {association: "rival"}, {association: "anio"},  {association: "competicion"}, {association: "tipoDeGol"}] })
        let pedidoTipoDeGoles = db.TipoDeGol.findAll()

        Promise.all([pedidoGoles, pedidoTipoDeGoles])
            .then(function([goles, tipoDeGoles]) {
                let tipoDeGolId = tipoDeGoles.find(tipoDeGol => tipoDeGol.id == req.params.id);

                if (tipoDeGolId != undefined) {
                    let golesTipoDeGol = goles.filter(gol => gol.tipoDeGol_id == tipoDeGolId.id)
    
                    let respuesta = {
                        meta: {
                            status : 200,
                            total: golesTipoDeGol.length,
                            url: `api/goles/tipoDeGol/${req.params.id}`
                        },
                        data: golesTipoDeGol
                    }
                    res.json(respuesta)
                }

            })
    },
}

module.exports = golesAPIController;