import type { Request, Response } from "express";
import ExoplanetRepository from "../repositories/exoplanet.repositories.js";
import z from "zod";
import { createPdfMultiple, createPdfSingle } from "../utils/pdf.js";

const exoplanetRepository = new ExoplanetRepository();

export default class ExoplanetControllers {
  async getExoplanets(req: Request, res: Response) {
    const exoplanets = await exoplanetRepository.getExoplanets();

    if (!exoplanets) return res.sendStatus(404);

    return res.json(exoplanets);
  }

  async getExoplanetsDownloadJson(req: Request, res: Response) {
    const exoplanets = await exoplanetRepository.getExoplanets();

    if (!exoplanets) return res.sendStatus(404);

    const jsonString = JSON.stringify(exoplanets, null, 2);

    res.setHeader(
      "Content-Disposition",
      "attachment; filename=exoplanets.json",
    );
    res.setHeader("Content-Type", "application/json");

    return res.send(jsonString);
  }

  async getExoplanetsDownloadPdf(req: Request, res: Response) {
    const exoplanets = await exoplanetRepository.getExoplanets();

    if (!exoplanets) return res.sendStatus(404);

    const pdf = await createPdfMultiple(exoplanets);
    
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=exoplanets.pdf",
    );
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Length", pdf.length);
    
    return res.send(Buffer.from(pdf));
  }

  async getExoplanet(req: Request, res: Response) {
    const id = z.unknown().transform(Number).parse(req.params.id);
    const exoplanet = await exoplanetRepository.getExoplanet(id);

    if (!exoplanet) return res.sendStatus(404);

    return res.json(exoplanet);
  }

  async getExoplanetCount(req: Request, res: Response) {
    const count = await exoplanetRepository.getExoplanetCount();

    if (!count) return res.sendStatus(404);

    return res.json({ count });
  }

  async getExoplanetDownloadJson(req: Request, res: Response) {
    const id = z.unknown().transform(Number).parse(req.params.id);
    const exoplanet = await exoplanetRepository.getExoplanet(id);

    if (!exoplanet) return res.sendStatus(404);

    const jsonString = JSON.stringify(exoplanet, null, 2);

    res.setHeader(
      "Content-Disposition",
      `attachment; filename=exoplanet_${id}.json`,
    );
    res.setHeader("Content-Type", "application/json");

    return res.send(jsonString);
  }

  async getExoplanetDownloadPdf(req: Request, res: Response) {
    const id = z.unknown().transform(Number).parse(req.params.id);
    const exoplanet = await exoplanetRepository.getExoplanet(id);

    if (!exoplanet) return res.sendStatus(404);

    const pdf = await createPdfSingle(exoplanet);
    
    res.setHeader(
      "Content-Disposition",
      `attachment; filename=exoplanet_${id}.pdf`,
    );
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Length", pdf.length);
    
    return res.send(Buffer.from(pdf));
  }

  async postExoplanet(req: Request, res: Response) {
    const exoplanet = req.body;
    const result = await exoplanetRepository.addExoplanet(exoplanet);

    if (!result) return res.sendStatus(404);

    return res.status(201).json(result);
  }

  async postUploadImage(req: Request, res: Response) {
    const id = z.unknown().transform(Number).parse(req.params.id);
    const file = req.file;

    if (!file) return res.sendStatus(400);

    const imgUrl = await exoplanetRepository.addExoplanetImage(id, file);

    return res.status(200).json(imgUrl);
  }

  async postUploadModel(req: Request, res: Response) {
    const id = z.unknown().transform(Number).parse(req.params.id);
    const file = req.file;

    if (!file) return res.sendStatus(400);

    const modelUrl = await exoplanetRepository.addExoplanetModel(id, file);

    return res.status(200).json(modelUrl);
  }

  async putExoplanet(req: Request, res: Response) {
    const id = z.unknown().transform(Number).parse(req.params.id);
    const exoplanet = req.body;
    const result = await exoplanetRepository.replaceExoplanet(id, exoplanet);

    if (!result) return res.sendStatus(404);

    return res.status(201).json(result);
  }

  async patchExoplanet(req: Request, res: Response) {
    const id = z.unknown().transform(Number).parse(req.params.id);
    const exoplanet = req.body;
    const result = await exoplanetRepository.updateExoplanet(id, exoplanet);

    if (!result) return res.sendStatus(404);

    return res.status(201).json(result);
  }

  async deleteExoplanet(req: Request, res: Response) {
    const id = z.unknown().transform(Number).parse(req.params.id);
    const result = await exoplanetRepository.deleteExoplanet(id);

    if (!result) return res.sendStatus(404);

    return res.status(204);
  }
}
