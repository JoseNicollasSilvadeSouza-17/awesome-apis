import dns from "node:dns/promises";
dns.setServers(["1.1.1.1", "8.8.8.8"]);

import { Db, MongoClient } from "mongodb";
import { MONGODB_URI } from "./constants.js";

const uri: string = MONGODB_URI;

const client = new MongoClient(uri);

let dbInstance: Db | null = null;

async function connect(): Promise<Db> {
  if (dbInstance) return dbInstance;

  await client.connect();

  dbInstance = client.db();

  return dbInstance;
}

connect();

function getDb(): Db {
  if (!dbInstance) throw new Error("Not connect database!");
  return dbInstance;
}

export { connect, getDb };
