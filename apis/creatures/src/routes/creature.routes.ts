import { Router } from "express";
import CreatureControllers from "../controllers/creature.controllers.js";

const creatureControllers = new CreatureControllers();

const router = Router();

router.get("/", creatureControllers.getAll);

router.get("/count", creatureControllers.getCreatureCount);

router.get("/:id", creatureControllers.getCreature);

router.post("/", creatureControllers.postCreature);

router.put("/:id", creatureControllers.putCreature);

router.patch("/:id", creatureControllers.patchCreature);

router.delete("/:id", creatureControllers.deleteCreature);

export default router;