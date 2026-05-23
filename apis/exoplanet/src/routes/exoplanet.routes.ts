import { Router } from "express";
import ExoplanetControllers from "../controllers/exoplanet.controllers.js";
import { uploadSingleModel } from "../middlewares/uploadSingleModel.js";
import { uploadSingleImage } from "../middlewares/uploadSingleImage.js";
import validityNsfw from "../middlewares/validityNsfw.js";

const router = Router();
const exoplanetControllers = new ExoplanetControllers();

router.get("/", exoplanetControllers.getExoplanets);

router.get("/download", exoplanetControllers.getExoplanetsDownload);

router.get("/count", exoplanetControllers.getExoplanetCount);

router.get("/:id", exoplanetControllers.getExoplanet);

router.get("/:id/download", exoplanetControllers.getExoplanetDownload);

router.post("/", exoplanetControllers.postExoplanet);

router.post("/:id/image", uploadSingleImage, validityNsfw, exoplanetControllers.postUploadImage);

router.post("/:id/model", uploadSingleModel, exoplanetControllers.postUploadModel);

router.put("/:id", exoplanetControllers.putExoplanet);

router.patch("/:id", exoplanetControllers.patchExoplanet);

router.delete("/:id", exoplanetControllers.deleteExoplanet);

export default router;