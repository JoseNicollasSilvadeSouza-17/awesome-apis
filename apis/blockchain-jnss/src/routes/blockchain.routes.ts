import { Router } from "express";
import BlockchainControllers from "../controllers/blockchain.controllers.js";

const blockchainControllers = new BlockchainControllers();

const router = Router();

router.get("/", blockchainControllers.getBlockchains);

router.get("/download", blockchainControllers.getBlockchainsDownload);

router.post("/", blockchainControllers.postMine);

export default router;