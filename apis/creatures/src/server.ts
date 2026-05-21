import "@dotenvx/dotenvx/config";
import { PORT } from "./utils/constants.js";
import app from "./app.js";
import { connect } from "./utils/mongodb.js";

async function init() {
  try {
    await connect();
    app.listen(PORT, () => {
      console.log(`Server running port http://localhost:${PORT}`);
    });
  } catch(error) {
    console.error(error);
    process.exit(1);
  }
}

init();
