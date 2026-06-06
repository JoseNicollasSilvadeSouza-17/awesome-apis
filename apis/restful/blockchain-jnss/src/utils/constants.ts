import z from "zod";

const PORT: number = z.string().default("3000").transform(Number).parse(process.env.PORT);

export {
  PORT
};