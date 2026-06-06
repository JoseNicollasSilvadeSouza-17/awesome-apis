import type { Request, Response, NextFunction } from "express";
import * as tf from "@tensorflow/tfjs";
import sharp from "sharp";
import type { NSFWJS, PredictionType } from "nsfwjs";
import loadModel from "../utils/nsfw.js";

async function validityNsfw(req: Request, res: Response, next: NextFunction) {
  if (!req.file) return res.sendStatus(400);

  const nsfwModel: NSFWJS = await loadModel();

  const { data, info } = await sharp(req.file.buffer)
    .resize(224, 224, { fit: "cover" })
    .flatten({ background: { r: 255, g: 255, b: 255 } })
    .raw()
    .toBuffer({ resolveWithObject: true });

  const imgTensor = tf.tensor3d(
    new Uint8Array(data),
    [info.height, info.width, 3],
    "int32",
  );

  const predictions = await nsfwModel.classify(imgTensor);

  imgTensor.dispose();

  const nsfwTag = ["porn", "hentai", "sexy"];

  const isNSFW = predictions.some(
    (prediction: PredictionType) =>
      nsfwTag.includes(prediction.className.toLowerCase()) && prediction.probability >= 0.6,
  );

  if (isNSFW) return res.status(400);
  next();
}

export default validityNsfw;
