import type { TagExoplanet } from "./ExoplanetTypes.js";

export default interface IExoplanet {
  id?: number;
  name: string;
  description: string;
  tag: TagExoplanet;
  imgUrl?: string;
  modelUrl?: string;
}