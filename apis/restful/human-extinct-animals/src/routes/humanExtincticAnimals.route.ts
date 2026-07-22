import { Router } from "express";
import HumanExtincticAnimalsController from "../controllers/humanExtencticAnimals.controller.js";

const router = Router();

const humanExtincticAnimalsController = new HumanExtincticAnimalsController();

router.get("/", humanExtincticAnimalsController.getHumanExtincticAnimals);

export default router;