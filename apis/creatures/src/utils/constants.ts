import z from "zod";

const PORT: number = z.string().default("3000").transform(Number).parse(process.env.PORT);

const MONGODB_URI: string = z.string().min(1, "The MongoDB URI is required!").parse(process.env.MONGODB_URI);

export {
  PORT,
  MONGODB_URI
};