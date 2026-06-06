import "@dotenvx/dotenvx/config";
import { PORT } from "./utils/constants.js";
import app from "./app.js";

app.listen(PORT, () => {
  console.log(`Server running port http://localhost:${PORT}`);
})