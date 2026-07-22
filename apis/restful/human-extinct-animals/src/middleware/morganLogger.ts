import morgan from "morgan";
import { logger } from "../config/winston.js";

export const morganLogger = morgan(
	":method :url :status :res[content-length] - :response-time ms",
	{
		stream: {
			write: (message) => logger.info(message.trim()),
		},
	},
);
