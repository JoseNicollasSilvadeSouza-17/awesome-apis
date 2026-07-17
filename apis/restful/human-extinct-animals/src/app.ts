import express, {
	type Application,
	type Request,
	type Response,
	type NextFunction,
} from "express";
import { morganLogger } from "./middleware/morganLogger.js";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import { prometheusMetrics } from "./config/prometheusMetrics.js";
import { ZodError } from "zod";
import router from "./routes/humanExtincticAnimals.route.js";

const app: Application = express();

app.use(morganLogger);

app.use(cors());

app.use(helmet());

app.use(compression());

app.use(express.json());

app.use("/api/v1/human-extinctic-animals/", router);

app.get("/", (req: Request, res: Response) => {
	const responseData = {
		message: "Welcome Human Extinct Animals API!",
		timestamp: new Date().toISOString(),
		uptime: process.uptime(),
	};

	res.status(200).json(responseData);
});

app.get("/health", (req: Request, res: Response) => {
	res.sendStatus(200);
});

app.get("/version", (req: Request, res: Response) => {
	res.status(200).json({ version: "1.0.0" });
});

app.get("/metrics", prometheusMetrics);

app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
	if (error instanceof ZodError) {
		console.error(error);
		res.sendStatus(400);
	}

	console.error(error);
	res.sendStatus(500);
});

export default app;
