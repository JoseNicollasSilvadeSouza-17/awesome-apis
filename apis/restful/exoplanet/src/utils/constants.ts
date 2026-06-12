import z from "zod";

const PORT: number = z
	.string()
	.default("3000")
	.transform(Number)
	.parse(process.env.PORT);

const SUPABASE_URL: string = z.url().parse(process.env.SUPABASE_URL);
const SUPABASE_KEY: string = z.string().parse(process.env.SUPABASE_KEY);

const REDIS_URL: string = z.url().parse(process.env.UPSTASH_REDIS_REST_URL);
const REDIS_TOKEN: string = z
	.string()
	.parse(process.env.UPSTASH_REDIS_REST_TOKEN);

export { PORT, SUPABASE_URL, SUPABASE_KEY, REDIS_URL, REDIS_TOKEN };
