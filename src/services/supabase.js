import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://edjqjtbuyiecuvkurkuy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVkanFqdGJ1eWllY3V2a3Vya3V5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk0NzAyNzksImV4cCI6MjAxNTA0NjI3OX0.oBSxeRbiHq2_6d_oCYkOqPranUrlp8kjNmfMzkaOuNA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
