import z from "zod";

const urlSchema = z
	.string()
	.trim()
	.min(2, "URL is required!")
	.pipe(z.url("Invalid URL!"));

export default urlSchema;
