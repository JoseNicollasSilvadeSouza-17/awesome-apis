import { multerImageConfig } from "../utils/multer.js";

export const uploadSingleImage = multerImageConfig.single("exoplanet");