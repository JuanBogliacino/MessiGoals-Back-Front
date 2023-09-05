const express = require('express');
const router = express.Router()
const golesAPIController = require('../../controller/api/golesAPIController')

//Listado de goles
router.get('/', golesAPIController.list);

//Listado de equipos
router.get("/equipos", golesAPIController.equiposList);

//Filtrar por equipo
router.get("/equipo/:id", golesAPIController.equipoDetail);

//Listado de rivales
router.get("/rivales", golesAPIController.rivalesList);

//Filtrar por rival
router.get("/rival/:id", golesAPIController.rivalDetail);

//Listado de competiciones
router.get("/competiciones", golesAPIController.competicionesList);

//Filtrar por competicion
router.get("/competicion/:id", golesAPIController.competicionDetail);

//Listado de años
router.get("/anios", golesAPIController.aniosList);

//Filtrar por año
router.get("/anio/:id", golesAPIController.anioDetail);

//Listado de tipo de gol
router.get("/tipoDeGoles", golesAPIController.tipoDeGolList);

//Filtrar por tipo de gol
router.get("/tipoDeGol/:id", golesAPIController.tipoDeGolDetail);

module.exports = router;