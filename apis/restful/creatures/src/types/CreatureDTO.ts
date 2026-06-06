import type Creature from "../models/Creature.class.js";

export type DTOCreature = Omit<Creature, "id" | "imgUrl" | "videoUrl" | "modelUrl">;

export type DTOPartialCreature = Partial<DTOCreature>;