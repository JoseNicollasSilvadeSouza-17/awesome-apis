import type { Request, Response } from "express";
import Geo from "../models/Geo.class.js";
import z from "zod";

export default class GeoControllers {
  converterGeo(req: Request, res: Response) {
    const amount = z.unknown().transform(Number).parse(req.query.amount);

    if (isNaN(amount) || amount <= 0) return res.sendStatus(400);

    const result = Geo.converterGeoToOther(amount);
    return res.json(result);
  }

  converterBrl(req: Request, res: Response) {
    const value = z.unknown().transform(Number).parse(req.query.value);

    if (isNaN(value) || value <= 0) return res.sendStatus(400);

    const result = Geo.converterBrlToGeo(value);
    return res.json(result);
  }

  converterUsd(req: Request, res: Response) {
    const value = z.unknown().transform(Number).parse(req.query.value);

    if (isNaN(value) || value <= 0) return res.sendStatus(400);

    const result = Geo.converterUsdToGeo(value);
    return res.json(result);
  }
}