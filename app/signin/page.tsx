"use client"

import Link from "next/link"
import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useLanguage } from "@/lib/language-context"
import { supabase } from "@/lib/supabase-browser"

export default function SignInPage() {
  const { t, language } = useLanguage()
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<string | null>(null)

  async function handleSignIn(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setMessage(null)
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/` },
    })
    setLoading(false)
  setMessage(error ? `Error: ${error.message}` : (language === "en" ? "Check your email for the sign-in link." : "请检查邮箱中的登录链接。"))
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <section className="flex min-h-screen items-center justify-center px-6 pt-16">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-light tracking-tight text-foreground">
              {t.signIn.title}
            </h1>
            <p className="mt-2 text-muted-foreground">
              {t.signIn.subtitle}
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-8">
            <form className="space-y-6" onSubmit={handleSignIn}>
              <div className="space-y-2">
                <Label htmlFor="email">{t.signIn.email}</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.signIn.emailPlaceholder}
                  autoComplete="email"
                  required
                />
              </div>

              {/* Password field retained visually, not used by magic link */}
              <div className="space-y-2">
                <Label htmlFor="password">{t.signIn.password}</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder={language === "en" ? "Enter your password" : "输入密码"}
                  autoComplete="current-password"
                  disabled
                />
                <p className="text-xs text-muted-foreground">
                  {language === "en" ? "Password is disabled; we use magic links." : "当前使用魔术链接登录。"}
                </p>
              </div>

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? (language === "en" ? "Sending..." : "发送中...") : (t.signIn.button || (language === "en" ? "Send magic link" : "发送魔术链接"))}
              </Button>
            </form>

            {message && (
              <p className="mt-4 text-center text-sm text-muted-foreground">{message}</p>
            )}

            <div className="mt-6 text-center text-sm text-muted-foreground">
              {t.signIn.noAccount}{" "}
              <Link href="/signup" className="font-medium text-foreground hover:underline">
                {t.signIn.createAccount}
              </Link>
            </div>
          </div>

          <p className="text-center text-xs text-muted-foreground">
            {language === "en"
              ? "By signing in, you agree to our Terms of Service and Privacy Policy."
              : "登录即表示您同意我们的服务条款和隐私政策。"}
          </p>
        </div>
      </section>
    </main>
  )
}
