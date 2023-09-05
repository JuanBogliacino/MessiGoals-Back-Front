var express = require('express');
var router = express.Router();
var golesController = require('../controller/golesController')

//Creacion
router.get("/create", golesController.crear);

router.post("/create", golesController.guardado);

//Filtrar por Equipo
router.get("/equipo/:id", golesController.equipos);

//Filtrar por Rivales
router.get("/rival/:id", golesController.rivales);

//Filtrar por Competicion
router.get("/competicion/:id", golesController.competicion);

//Filtrar por Anio
router.get("/anio/:id", golesController.anio);

//Filtrar por tipo de gol
router.get("/tipoDeGol/:id", golesController.tipoDeGol);

//Mobile
router.get("/mobile/competicion", golesController.mobileCompeticion);

router.get("/mobile/anio", golesController.mobileAnio);

router.get("/mobile/rival", golesController.mobileRival);

module.exports = router;