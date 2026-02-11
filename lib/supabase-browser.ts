import { createClient } from "@supabase/supabase-js"

// Public values exposed to the browser via NEXT_PUBLIC_*
const url = process.env.NEXT_PUBLIC_SUPABASE_URL!
const pubKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!

// Single shared client for browser-side usage (Client Components)
export const supabase = createClient(url, pubKey, {
	auth: {
		// Persist session in local storage/cookies so user stays logged in
		persistSession: true,
		// Detect the OAuth/magic-link callback in the URL and store the session
		detectSessionInUrl: true,
	},
})
