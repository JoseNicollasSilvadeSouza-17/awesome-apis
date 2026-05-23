import supabase from "../utils/supabase.js";
import Exoplanet from "../models/Exoplanet.class.js";
import type IExoplanet from "../types/IExoplanet.js";
import type {
  DTOExoplanet,
  DTOPartialExoplanet,
} from "../types/ExoplanetDTO.js";

export default class ExoplanetRepository {
  async getExoplanets(): Promise<Exoplanet[]> {
    const { data, error } = await supabase.from("Exoplanet").select("*");

    if (error) throw error;

    return data.map((exoplanetData) => new Exoplanet(exoplanetData));
  }

  async getExoplanet(id: number): Promise<IExoplanet> {
    const { data, error } = await supabase
      .from("Exoplanet")
      .select("*")
      .eq("id", id)
      .single();

    if (error) throw error;

    return data;
  }

  async getExoplanetCount(): Promise<number> {
    const { count, error } = await supabase
      .from("Exoplanet")
      .select("*", { count: "exact", head: true });

    if (error) throw error;

    return typeof count === "number" ? count : 0;
  }

  async addExoplanet(exoplanet: DTOExoplanet): Promise<IExoplanet> {
    const { data, error } = await supabase
      .from("Exoplanet")
      .insert(exoplanet)
      .select()
      .single();

    if (error) throw error;

    return data;
  }

  async addExoplanetImage(
    id: number,
    file: Express.Multer.File,
  ): Promise<string> {
    const filePath = `${id}/image/exoplanet.webp`;
    const { error } = await supabase.storage
      .from("exoplanets")
      .upload(filePath, file.buffer, {
        contentType: file.mimetype,
        upsert: true,
      });

    if (error) throw error;

    const { data } = supabase.storage.from("exoplanets").getPublicUrl(filePath);

    const imgUrl = data.publicUrl;

    const { error: updateError } = await supabase
      .from("Exoplanet")
      .update({ imgUrl })
      .eq("id", id);

    if (updateError) throw updateError;

    return imgUrl;
  }

  async addExoplanetModel(
    id: number,
    file: Express.Multer.File,
  ): Promise<string> {
    const filePath = `${id}/model/exoplanet.glb`;

    const contentType =
      file.mimetype === "application/octet-stream"
        ? "model/gltf-binary"
        : file.mimetype;

    const { error } = await supabase.storage
      .from("exoplanets")
      .upload(filePath, file.buffer, {
        contentType,
        upsert: true,
      });

    if (error) throw error;

    const { data } = supabase.storage.from("exoplanets").getPublicUrl(filePath);

    const modelUrl = data.publicUrl;

    const { error: updateError } = await supabase
      .from("Exoplanet")
      .update({ modelUrl })
      .eq("id", id);

    if (updateError) throw updateError;

    return modelUrl;
  }

  async replaceExoplanet(
    id: number,
    exoplanetData: DTOExoplanet,
  ): Promise<IExoplanet> {
    const { data, error } = await supabase
      .from("Exoplanet")
      .update(exoplanetData)
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;

    return data;
  }

  async updateExoplanet(
    id: number,
    exoplanetData: DTOPartialExoplanet,
  ): Promise<IExoplanet> {
    const { data, error } = await supabase
      .from("Exoplanet")
      .update(exoplanetData)
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;

    return data;
  }

  async deleteExoplanet(id: number): Promise<IExoplanet> {
    const { data, error } = await supabase
      .from("Exoplanet")
      .delete()
      .eq("id", id)
      .select()
      .single();

    if (error) throw error;

    return data;
  }
}
