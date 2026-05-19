import { Router } from "express";
import ExoplanetControllers from "../controllers/exoplanet.controllers.js";
import { uploadSingleModel } from "../middlewares/uploadSingleModel.js";
import { uploadSingleImage } from "../middlewares/uploadSingleImage.js";

const router = Router();
const exoplanetControllers = new ExoplanetControllers();

router.get("/", exoplanetControllers.getAll);

router.get("/count", exoplanetControllers.getExoplanetCount);

router.get("/:id", exoplanetControllers.getExoplanet);

router.post("/", exoplanetControllers.postExoplanet);

router.post("/:id/image", uploadSingleImage, exoplanetControllers.postUploadImage);

router.post("/:id/model", uploadSingleModel, exoplanetControllers.postUploadModel);

router.put("/:id", exoplanetControllers.putExoplanet);

router.patch("/:id", exoplanetControllers.patchExoplanet);

router.delete("/:id", exoplanetControllers.deleteExoplanet);

export default router;