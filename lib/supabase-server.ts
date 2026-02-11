import { createClient } from "@supabase/supabase-js"

// Server-side client for user-scoped queries (RLS enforced)
// Uses the publishable key. Safe for server components and API routes.
export function createServerSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const pubKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
  return createClient(url, pubKey)
}
