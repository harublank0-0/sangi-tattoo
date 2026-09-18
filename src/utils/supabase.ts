import { env } from "#/env";
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  env.VITTE_SUPABASE_URL,
  env.VITTE_SUPABASE_KEY,
);
