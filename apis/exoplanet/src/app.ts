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

const app: Application = express();

app.use(morgan("dev"));

app.use(helmet());

app.use(express.json());

app.use("/api/v1/exoplanets", router);

app.get("/", (req: Request, res: Response) => {
  const responseData = {
    message: "Welcome to the Exoplanet API!",
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  };

  return res.status(200).json(responseData);
});

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
