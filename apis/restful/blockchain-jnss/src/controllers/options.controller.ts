import type { Request, Response } from "express";
import blockchainMetadata from "../metadata/options.metadata.js";

export default function optionsBlockchain(req: Request, res: Response) {
  res.json(blockchainMetadata);
}