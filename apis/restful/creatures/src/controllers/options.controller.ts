import type { Request, Response } from "express";
import creaturesMetadata from "../metadata/options.metadata.js";

export default function optionsCreature(req: Request, res: Response) {
  res.json(creaturesMetadata);
}