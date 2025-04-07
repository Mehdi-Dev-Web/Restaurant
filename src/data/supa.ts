import { createClient } from "@supabase/supabase-js";

//? this is the supabase client that is used to connect to the database


const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;


const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
