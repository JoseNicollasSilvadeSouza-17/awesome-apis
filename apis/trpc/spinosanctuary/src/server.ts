import "@dotenvx/dotenvx/config";
import { PORT } from "./config/constants.js";
import app from "./app.js";

app.listen(PORT, () => {
	console.log(`Server running on port http://localhost:${PORT}`);
});
