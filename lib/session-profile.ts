import { createServerSupabase } from "./supabase-server"

export async function getSessionAndProfile() {
  const supabase = createServerSupabase()

  const {
    data: { session },
    error: sessionError,
  } = await supabase.auth.getSession()
  if (sessionError) return { session: null, profile: null }
  if (!session) return { session: null, profile: null }

  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("id, username, role")
    .eq("id", session.user.id)
    .single()

  return { session, profile: profileError ? null : profile }
}
