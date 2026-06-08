import { Router } from "express";
import GeoControllers from "../controllers/geo.controller.js";
import optionsGeo from "../controllers/options.controller.js";

const router = Router();

const geoControllers = new GeoControllers();

router.get("/geo", geoControllers.converterGeo);

router.get("/brl", geoControllers.converterBrl);

router.get("/usd", geoControllers.converterUsd);

router.options("/", optionsGeo);

export default router;