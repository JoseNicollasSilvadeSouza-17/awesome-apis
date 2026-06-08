import "@dotenvx/dotenvx/config";
import { PORT } from "./config/constants.js";
import app from "./app.js";
import connectDB from "./database/mongodb.js";

async function init() {
	try {
		await connectDB();

		app.listen(PORT, () => {
			console.log(`Server running port http://localhost:${PORT}`);
		});
	} catch(error) {
		console.error(error);
		process.exit(1);
	}
}

init();