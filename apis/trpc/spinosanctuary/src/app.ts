import express, {
	type Application,
	type Request,
	type Response,
	type NextFunction,
} from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import type { ErrorServer } from "./shared/types/Error.js";
import { ZodError } from "zod";
import * as trpcExpress from "@trpc/server/adapters/express";
import { appRouter } from "./routes/spino.routes.js";

const app: Application = express();

app.use(morgan("dev"));

app.use(helmet());

app.use(cors());

app.use(express.json());

app.use(
	"/trpc",
	trpcExpress.createExpressMiddleware({
		router: appRouter,
		createContext: () => ({}),
	}),
);

app.get("/", (req: Request, res: Response) => {
	const response = {
		message: "Welcome SpinoSanctuary API!",
		timestamp: new Date().toISOString(),
		uptime: process.uptime(),
	};

	res.status(200).json(response);
});

app.get("/health", (req: Request, res: Response) => {
	res.sendStatus(200);
});

app.get("/version", (req: Request, res: Response) => {
	res.status(200).json({ version: "1.0.0" });
});

app.use(
	(error: ErrorServer, req: Request, res: Response, next: NextFunction) => {
		if (error instanceof ZodError) {
			console.error(error.issues);
			res.status(400);
		}

		console.error(error);
		res.sendStatus(500);
		next();
	},
);

export default app;
