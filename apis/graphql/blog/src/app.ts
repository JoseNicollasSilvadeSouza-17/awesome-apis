import express, {
	type Application,
	type Request,
	type Response,
	type NextFunction,
} from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import { ruruHTML } from "ruru/server";
import graphqlHandler from "./graphql/schema.js";
import { ZodError } from "zod";

const app: Application = express();

app.use(morgan("dev"));

app.use(
	helmet({
		contentSecurityPolicy: false,
	}),
);

app.use(cors());

app.use(express.json());

app.all("/graphql", (req: Request, res: Response, next: NextFunction) => {
	graphqlHandler(req, res, next);
});

app.get("/", (req: Request, res: Response) => {
	const responseData = {
		message: "Welcome Blog API!",
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

app.get("/graphiql", (req: Request, res: Response) => {
	res.type("html");
	res.end(ruruHTML({ endpoint: "/graphql" }));
});

app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
	if (error instanceof ZodError) return res.status(400).json(error.issues);

	console.error(error);
	res.sendStatus(500);
});

export default app;
