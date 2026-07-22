import winston from "winston";
import path from "node:path";

const __dirname = import.meta.dirname;

const logFormat = winston.format.combine(
	winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
	winston.format.json(),
);

export const logger = winston.createLogger({
	level: "info",
	format: logFormat,
	defaultMeta: { service: "user-service" },
	transports: [
		new winston.transports.Console({
			format: winston.format.combine(
				winston.format.colorize(),
				winston.format.simple(),
			),
		}),
		new winston.transports.File({
			filename: "error.log",
			dirname: path.resolve(__dirname, "../log"),
			level: "error",
		}),
		new winston.transports.File({
			filename: "combined.log",
			dirname: path.resolve(__dirname, "../log"),
		}),
	],
});
