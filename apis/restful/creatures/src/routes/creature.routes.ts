import { Router } from "express";
import CreatureControllers from "../controllers/creature.controller.js";
import optionsCreature from "../controllers/options.controller.js";

const creatureControllers = new CreatureControllers();

const router = Router();

router.get("/", creatureControllers.getCreatures);

router.get("/download", creatureControllers.getCreaturesDownload);

router.get("/count", creatureControllers.getCreatureCount);

router.get("/:id", creatureControllers.getCreature);

router.get("/:id/download", creatureControllers.getCreatureDownload);

router.post("/", creatureControllers.postCreature);

router.put("/:id", creatureControllers.putCreature);

router.patch("/:id", creatureControllers.patchCreature);

router.delete("/:id", creatureControllers.deleteCreature);

router.options("/", optionsCreature);

export default router;