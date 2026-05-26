import type { Request, Response } from "express";
import geoMetadata from "../metadata/options.metadata.js";

export default function optionsGeo(req: Request, res: Response) {
  res.json(geoMetadata);
}