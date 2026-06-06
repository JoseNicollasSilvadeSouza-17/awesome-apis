const PORT: number = Number(process.env.PORT) || 3000;

const SUPABASE_URL: string = String(process.env.SUPABASE_URL);
const SUPABASE_KEY: string = String(process.env.SUPABASE_KEY);

export { PORT, SUPABASE_URL, SUPABASE_KEY };
