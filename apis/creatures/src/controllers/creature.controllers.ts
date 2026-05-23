import type { Request, Response } from "express";
import CreatureRepositories from "../repositories/creature.repositories.js";
import z from "zod";

const creatureRepositories = new CreatureRepositories();

export default class CreatureControllers {
  async getCreatures(req: Request, res: Response) {
    const creatures = await creatureRepositories.getCreatures();
    return res.json(creatures);
  }

  async getCreaturesDownload(req: Request, res: Response) {
    const creatures = await creatureRepositories.getCreatures();

    if (!creatures) return res.sendStatus(404);

    const jsonString = JSON.stringify(creatures, null, 2);

    res.setHeader("Content-Disposition", "attachment; filename=creatures.json");
    res.setHeader("Content-Type", "application/json");

    return res.json(jsonString);
  }

  async getCreature(req: Request, res: Response) {
    const id = z.unknown().transform(String).parse(req.params.id);
    const creature = await creatureRepositories.getCreature(id);
    return res.json(creature);
  }

  async getCreatureCount(req: Request, res: Response) {
    const result = await creatureRepositories.getCreatureCount();

    if (!result) return res.sendStatus(404);

    return res.status(200).json({ count: result });
  }

  async getCreatureDownload(req: Request, res: Response) {
    const id = z.unknown().transform(String).parse(req.params.id);
    const creature = await creatureRepositories.getCreature(id);

    if (!creature) return res.sendStatus(404);

    const jsonString = JSON.stringify(creature, null, 2);

    res.setHeader(
      "Content-Disposition",
      `attachment; filename=creature_${id}.json`,
    );
    res.setHeader("Content-Type", "application/json");

    return res.json(jsonString);
  }

  async postCreature(req: Request, res: Response) {
    const creature = req.body;
    const result = await creatureRepositories.addCreature(creature);

    if (!result) return res.sendStatus(404);

    return res.status(201).json(result);
  }

  async putCreature(req: Request, res: Response) {
    const id = z.unknown().transform(String).parse(req.params.id);
    const creature = req.body;
    const result = await creatureRepositories.replaceCreature(id, creature);

    if (!result) return res.sendStatus(404);

    return res.status(200).json(result);
  }

  async patchCreature(req: Request, res: Response) {
    const id = z.unknown().transform(String).parse(req.params.id);
    const creature = req.body;
    const result = await creatureRepositories.updateCreature(id, creature);

    if (!result) return res.sendStatus(404);

    return res.status(200).json(result);
  }

  async deleteCreature(req: Request, res: Response) {
    const id = z.unknown().transform(String).parse(req.params.id);
    const result = await creatureRepositories.deleteCreature(id);

    if (!result) return res.sendStatus(404);

    return res.sendStatus(204);
  }
}
