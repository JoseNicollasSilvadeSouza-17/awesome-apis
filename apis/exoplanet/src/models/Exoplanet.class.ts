import type { TagExoplanet } from "../types/ExoplanetTypes.js";
import type IExoplanet from "../types/IExoplanet.js";

export default class Exoplanet {
  private id: number | undefined;
  private name: string;
  private description: string;
  private tag: TagExoplanet;
  private imgUrl?: string | undefined;
  private modelUrl?: string | undefined;

  constructor({ id, name, description, tag, imgUrl, modelUrl }: IExoplanet) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.tag = tag;
    this.imgUrl = imgUrl;
    this.modelUrl = modelUrl;
  }
}
