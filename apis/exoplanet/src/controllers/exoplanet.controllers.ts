import type { Request, Response } from "express";
import ExoplanetRepository from "../repositories/exoplanet.repositories.js";

const exoplanetRepository = new ExoplanetRepository();

export default class ExoplanetControllers {
  async getAll(req: Request, res: Response) {
    const exoplanets = await exoplanetRepository.getExoplanets();

    if (!exoplanets) return res.sendStatus(404);

    return res.json(exoplanets);
  }

  async getExoplanet(req: Request, res: Response) {
    const id = Number(req.params.id);
    const exoplanet = await exoplanetRepository.getExoplanet(id);

    if (!exoplanet) return res.sendStatus(404);

    return res.json(exoplanet);
  }

  async getExoplanetCount(req: Request, res: Response) {
    const count = await exoplanetRepository.getExoplanetCount();

    if (!count) return res.sendStatus(404);

    return res.json({ count });
  }

  async postExoplanet(req: Request, res: Response) {
    const exoplanet = req.body;
    const result = await exoplanetRepository.addExoplanet(exoplanet);

    if (!result) return res.sendStatus(404);

    return res.status(201).json(result);
  }

  async postUploadImage(req: Request, res: Response) {
    const id = Number(req.params.id);
    const file = req.file;

    if (!file) return res.sendStatus(400);

    const imgUrl = await exoplanetRepository.addExoplanetImage(id, file);

    return res.status(200).json(imgUrl);
  }

  async postUploadModel(req: Request, res: Response) {
    const id = Number(req.params.id);
    const file = req.file;

    if (!file) return res.sendStatus(400);

    const modelUrl = await exoplanetRepository.addExoplanetModel(id, file);

    return res.status(200).json(modelUrl);
  }

  async putExoplanet(req: Request, res: Response) {
    const id = Number(req.params.id);
    const exoplanet = req.body;
    const result = await exoplanetRepository.replaceExoplanet(id, exoplanet);

    if (!result) return res.sendStatus(404);

    return res.status(201).json(result);
  }

  async patchExoplanet(req: Request, res: Response) {
    const id = Number(req.params.id);
    const exoplanet = req.body;
    const result = await exoplanetRepository.updateExoplanet(id, exoplanet);

    if (!result) return res.sendStatus(404);

    return res.status(201).json(result);
  }

  async deleteExoplanet(req: Request, res: Response) {
    const id = Number(req.params.id);
    const result = await exoplanetRepository.deleteExoplanet(id);

    if (!result) return res.sendStatus(404);

    return res.status(204);
  }
}
