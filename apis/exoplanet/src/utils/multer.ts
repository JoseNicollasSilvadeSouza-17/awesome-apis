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

const allowedMimeType = [...allowedImageMimeType, ...allowedModelMimeType];

function fileFilter(req: Request, file: Express.Multer.File, callback: FileFilterCallback) {
  const fileExtension = path.extname(file.originalname).toLocaleLowerCase();

  const isAllowed = allowedMimeType.includes(file.mimetype) || fileExtension === ".glb" || ".gltf";

  if (!isAllowed) return callback(new Error("Invalid file type!"));

  callback(null, true);
}

const multerConfig = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 50 * 1024 * 1024
  }
});

export default multerConfig;