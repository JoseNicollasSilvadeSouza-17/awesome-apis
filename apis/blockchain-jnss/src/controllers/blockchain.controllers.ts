import z from "zod";
import Blockchain from "../models/Blockchain.class.js";
import type { Request, Response } from "express";

const blockchain = new Blockchain();

export default class BlockchainControllers {
  getBlockchains(req: Request, res: Response) {
    const blockchains = blockchain.getBlocks();

    if (blockchains.length === 0) return res.sendStatus(404);

    return res.status(200).json(blockchains);
  }

  getBlockchainsDownload(req: Request, res: Response) {
    const blockchains = blockchain.getBlocks();

    if (blockchains.length === 0) return res.sendStatus(404);

    const jsonString = JSON.stringify(blockchains, null, 2);

    res.setHeader(
      "Content-Disposition",
      "attachment; filename=blockchains.json",
    );
    res.setHeader("Content-Type", "application/json");

    return res.send(jsonString);
  }

  postMine(req: Request, res: Response) {
    const data: string = z.unknown().transform(String).parse(req.body.data);

    const block = blockchain.addBlock(data);

    if (!block) return res.sendStatus(404);

    return res.status(201).json(block);
  }
}