"use client"

import Link from "next/link"
import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useLanguage } from "@/lib/language-context"
import { useAuth } from "@/lib/auth-context"

export default function ForgotPasswordPage() {
  const { language } = useLanguage()
  const { resetPassword } = useAuth()
  
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  async function handleResetPassword(e: React.FormEvent) {
    e.preventDefault() // Stop page from refreshing
    setLoading(true)
    setMessage(null)
    setError(null)

    // Call resetPassword with user's email
    const { error } = await resetPassword(email)

    setLoading(false)

    if (error) {
      setError(`Error: ${error.message}`)
    } else {
      // Success! Show message
      setMessage(
        language === "en"
          ? "Check your email for a password reset link."
          : "请检查您的邮箱以获取密码重置链接。"
      )
      // Clear email field
      setEmail("")
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <section className="flex min-h-screen items-center justify-center px-6 pt-12">
        <div className="w-full max-w-md space-y-8">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-3xl font-light tracking-tight text-foreground">
              {language === "en" ? "Reset your password" : "重置密码"}
            </h1>
            <p className="mt-2 text-muted-foreground">
              {language === "en"
                ? "Enter your email address and we'll send you a link to reset your password."
                : "输入您的邮箱地址，我们将向您发送重置密码的链接。"}
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-8">
            {/* ========== EMAIL FORM ========== */}
            <form className="space-y-6" onSubmit={handleResetPassword}>
              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email">
                  {language === "en" ? "Email" : "邮箱"}
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder={language === "en" ? "name@example.com" : "name@example.com"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  required
                  disabled={loading}
                />
              </div>

              {/* Submit Button */}
              <Button type="submit" className="w-full" disabled={loading}>
                {loading
                  ? (language === "en" ? "Sending..." : "发送中...")
                  : (language === "en" ? "Send reset link" : "发送重置链接")}
              </Button>
            </form>

            {/* ========== SUCCESS MESSAGE ========== */}
            {message && (
              <div className="mt-4 rounded-lg bg-green-50 dark:bg-green-950 p-3 border border-green-200 dark:border-green-800">
                <p className="text-center text-sm text-green-800 dark:text-green-200">
                  {message}
                </p>
              </div>
            )}

            {/* ========== ERROR MESSAGE ========== */}
            {error && (
              <div className="mt-4 rounded-lg bg-red-50 dark:bg-red-950 p-3 border border-red-200 dark:border-red-800">
                <p className="text-center text-sm text-red-800 dark:text-red-200">
                  {error}
                </p>
              </div>
            )}

            {/* ========== FOOTER: Links ========== */}
            <div className="mt-6 flex flex-col space-y-2 text-center text-sm text-muted-foreground">
              <div>
                {language === "en" ? "Remember your password?" : "记得密码？"}{" "}
                <Link href="/signin" className="font-medium text-foreground hover:underline">
                  {language === "en" ? "Sign in" : "登录"}
                </Link>
              </div>
              <div>
                {language === "en" ? "Don't have an account?" : "没有账户？"}{" "}
                <Link href="/signup" className="font-medium text-foreground hover:underline">
                  {language === "en" ? "Sign up" : "注册"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}