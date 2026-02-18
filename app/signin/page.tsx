"use client"

import Link from "next/link"
import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useLanguage } from "@/lib/language-context"
import { useAuth } from "@/lib/auth-context"

export default function SignInPage() {
  const { t, language } = useLanguage()
  const { signInWithGoogle, signInWithEmail } = useAuth()
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [googleLoading, setGoogleLoading] = useState(false)
  const [message, setMessage] = useState<string | null>(null)

  async function handleEmailSignIn(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setMessage(null)
    
    const { error } = await signInWithEmail(email)
    
    setLoading(false)
    setMessage(error ? `Error: ${error.message}` : (language === "en" ? "Check your email for the sign-in link." : "请检查邮箱中的登录链接。"))
  }

  async function handleGoogleSignIn() {
    setGoogleLoading(true)
    setMessage(null)
    
    const { error } = await signInWithGoogle()
    
    if (error) {
      setMessage(`Error: ${error.message}`)
      setGoogleLoading(false)
    }
    // If successful, user will be redirected
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
            {/* Google Sign In Button */}
            <Button
              type="button"
              variant="outline"
              className="w-full mb-6"
              onClick={handleGoogleSignIn}
              disabled={googleLoading}
            >
              <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              {googleLoading 
                ? (language === "en" ? "Signing in..." : "登录中...") 
                : (language === "en" ? "Continue with Google" : "使用 Google 继续")}
            </Button>

            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-card px-2 text-muted-foreground">
                  {language === "en" ? "Or continue with email" : "或使用邮箱继续"}
                </span>
              </div>
            </div>

            <form className="space-y-6" onSubmit={handleEmailSignIn}>
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
