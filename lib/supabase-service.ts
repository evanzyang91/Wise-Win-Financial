import { createClient } from "@supabase/supabase-js"

// Privileged server-only client (bypasses RLS). Use for admin tasks and maintenance.
// Never expose SUPABASE_SECRET_KEY to the browser.
export function createServiceSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const secretKey = process.env.SUPABASE_SECRET_KEY!
  return createClient(url, secretKey)
}
