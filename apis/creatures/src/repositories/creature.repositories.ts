import { ObjectId } from "mongodb";
import type { DTOCreature, DTOPartialCreature } from "../types/CreatureDTO.js";
import { getDb } from "../utils/mongodb.js";

export default class CreatureRepositories {
  private getCollection() {
    return getDb().collection("Creature");
  }

  async getCreatures() {
    return await this.getCollection().find({}).toArray();
  }

  async getCreature(id: string) {
    if (!ObjectId.isValid(id)) throw new Error("Invalid ID");

    return await this.getCollection().findOne({ _id: new ObjectId(id) });
  }

  async getCreatureCount() {
    return await this.getCollection().countDocuments();
  }

  async addCreature(creatureData: DTOCreature) {
    const result = await this.getCollection().insertOne(creatureData);

    return { _id: result.insertedId, ...creatureData };
  }

  async replaceCreature(id: string, creatureData: DTOCreature) {
    if (!ObjectId.isValid(id)) throw new Error("Invalid ID");

    const result = await this.getCollection().replaceOne(
      { _id: new ObjectId(id) },
      creatureData,
    );

    return result;
  }

  async updateCreature(id: string, creatureData: DTOPartialCreature) {
    if (!ObjectId.isValid(id)) throw new Error("Invalid ID");

    const result = await this.getCollection().updateOne(
      { _id: new ObjectId(id) },
      { $set: creatureData },
    );

    return result;
  }

  async deleteCreature(id: string) {
    if (!ObjectId.isValid(id)) throw new Error("Invalid ID");

    const result = await this.getCollection().deleteOne({
      _id: new ObjectId(id),
    });

    return result;
  }
}
