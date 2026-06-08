import dns from "node:dns/promises";
dns.setServers(["1.1.1.1", "8.8.8.8"]);

import mongoose from "mongoose";
import { MONGODB_URI } from "../config/constants.js";

async function connectDB() {
	await mongoose.connect(MONGODB_URI);
}

export default connectDB;
