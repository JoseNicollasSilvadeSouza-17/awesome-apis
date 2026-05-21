import type ICreature from "../types/ICreature.js";

export default class Creature {
  private id: string | undefined;
  private name: string;
  private scientificName?: string | undefined;
  private description: string;
  private habitat: string;
  private category: string;
  private author?: string | undefined;
  private imgUrl?: string | undefined;
  private videoUrl?: string | undefined;
  private modelUrl?: string | undefined;

  constructor({
    id,
    name,
    scientificName,
    description,
    habitat,
    category,
    author,
    imgUrl,
    videoUrl,
    modelUrl,
  }: ICreature) {
    this.id = id;
    this.name = name;
    this.scientificName = scientificName;
    this.description =description;
    this.habitat = habitat;
    this.category = category;
    this.author = author;
    this.imgUrl = imgUrl;
    this.videoUrl = videoUrl;
    this.modelUrl = modelUrl;
  }
}
