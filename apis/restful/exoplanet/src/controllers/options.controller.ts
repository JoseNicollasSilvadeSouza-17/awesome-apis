import type { Request, Response } from "express";
import exoplanetMetadata from "../docs/exoplanet.metadata.js";

export default function optionsExoplanet(req: Request, res: Response) {
  res.json(exoplanetMetadata);
}