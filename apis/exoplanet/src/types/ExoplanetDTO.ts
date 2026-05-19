import type IExoplanet from "./IExoplanet.js";

export type DTOExoplanet = Omit<IExoplanet, "id" | "imgUrl" | "modelUrl">;

export type DTOPartialExoplanet = Partial<DTOExoplanet>;