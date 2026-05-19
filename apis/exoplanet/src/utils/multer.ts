import type { Request } from "express";
import multer, { type FileFilterCallback } from "multer";
import path from "node:path";

const storage = multer.memoryStorage();

const allowedImageMimeType = [
  "image/png",
  "image/jpg",
  "image/jpeg",
  "image/webp",
];

const allowedModelMimeType = [
  "model/gltf+json",
  "model/gltf-binary",
  "application/octet-stream",
  "application/json"
];

function fileFilterImage(req: Request, file: Express.Multer.File, callback: FileFilterCallback) {
  const isAllowed = allowedImageMimeType.includes(file.mimetype);

  if (!isAllowed) return callback(new Error("Invalid image type!"));

  callback(null, true);
}

function fileFilterModel(req: Request, file: Express.Multer.File, callback: FileFilterCallback) {
  const fileExtension = path.extname(file.originalname).toLocaleLowerCase();

  const isAllowed = allowedModelMimeType.includes(file.mimetype) || fileExtension === ".glb" || ".gltf";

  if (!isAllowed) return callback(new Error("Invalid model type!"));

  callback(null, true);
}

const multerImageConfig = multer({
  storage,
  fileFilter: fileFilterImage,
  limits: {
    fileSize: 5 * 1024 * 1024
  }
});

const multerModelConfig = multer({
  storage,
  fileFilter: fileFilterModel,
  limits: {
    fileSize: 50 * 1024 * 1024
  }
});

export {
  multerImageConfig,
  multerModelConfig
};