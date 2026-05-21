export default interface ICreature {
  id?: string;
  name: string;
  scientificName?: string;
  description: string;
  habitat: string;
  category: string;
  author?: string;
  imgUrl?: string;
  videoUrl?: string;
  modelUrl?: string;
}