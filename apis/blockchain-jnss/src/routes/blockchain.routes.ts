import { Router } from "express";
import BlockchainControllers from "../controllers/blockchain.controller.js";
import optionsBlockchain from "../controllers/options.controller.js";

const blockchainControllers = new BlockchainControllers();

const router = Router();

router.get("/", blockchainControllers.getBlockchains);

router.get("/download", blockchainControllers.getBlockchainsDownload);

router.post("/", blockchainControllers.postMine);

router.options("/", optionsBlockchain);

export default router;