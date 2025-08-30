import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zbqlgerwrssewqtwtcmq.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpicWxnZXJ3cnNzZXdxdHd0Y21xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY1MzU1MjQsImV4cCI6MjA3MjExMTUyNH0.7ndjCK-pWW9iFxSh35qxVwxM7OqGGlLZXiGM0mN6ZvQ";
export const supabase = createClient(supabaseUrl, supabaseKey);