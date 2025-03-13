import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://uvqxzodnhkqbzavvzcix.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV2cXh6b2RuaGtxYnphdnZ6Y2l4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEwOTU5MjMsImV4cCI6MjA1NjY3MTkyM30.Cv3KTpWw2jKdhkWJw1nggA35OwlK6TfcQo5cFLbI5VI";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
