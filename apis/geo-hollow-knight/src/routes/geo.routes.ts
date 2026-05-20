import { Router } from "express";
import GeoControllers from "../controllers/geo.controllers.js";

const router = Router();

const geoControllers = new GeoControllers();

router.get("/geo", geoControllers.converterGeo);

router.get("/brl", geoControllers.converterBrl);

router.get("/usd", geoControllers.converterUsd);

export default router;