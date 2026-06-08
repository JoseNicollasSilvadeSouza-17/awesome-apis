import { SUPABASE_URL, SUPABASE_KEY } from "./constants.js";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl: string = SUPABASE_URL;
const supabaseKey: string = SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;