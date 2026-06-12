import express, {
  type Application,
  type Request,
  type Response,
  type NextFunction,
} from "express";
import helmet from "helmet";
import morgan from "morgan";
import { ZodError } from "zod";
import router from "./routes/exoplanet.routes.js";
import promMetrics from "./utils/metrics.js";
import * as swaggerUi from "swagger-ui-express"; "swagger-ui-express";
import swaggerDocs from "./docs/swagger.json" with { type: "json" };
import redis from "./utils/redis.js";

const app: Application = express();

app.use(morgan("dev"));

app.use(helmet());

app.use(express.json());

app.use("/api/v1/exoplanets", router);

app.get("/", async (req: Request, res: Response) => {
  const reply = await redis.get("welcome");

	if (reply) return res.json(reply);
	
	const responseData = {
    message: "Welcome to the Exoplanet API!",
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  };

	const saveResult: string | null = await redis.set("welcome", JSON.stringify(responseData));
	console.log(saveResult);

  return res.status(200).json(responseData);
});

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.get("/health", (req: Request, res: Response) => {
  res.sendStatus(200);
});

app.get("/version", (req: Request, res: Response) => {
  res.json({ version: "1.0.0" });
});

app.get("/metrics", promMetrics);

app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof ZodError)
    return res.status(400).json({ errors: error.issues });

  console.error(error);
  res.sendStatus(500);
});

export default app;
