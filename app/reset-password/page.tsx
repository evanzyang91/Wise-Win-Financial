"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useLanguage } from "@/lib/language-context"
import { useAuth } from "@/lib/auth-context"

export default function ResetPasswordPage() {
  const { language } = useLanguage()
  const { updatePassword } = useAuth()
  const router = useRouter()
  
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isValidToken, setIsValidToken] = useState<boolean | null>(null) // ← CHANGED: null = checking, true = valid, false = invalid

  // ============================================
  // CHECK TOKEN ON PAGE LOAD
  // ============================================
  useEffect(() => {
    // Get URL hash (everything after #)
    const hash = window.location.hash.substring(1) // Remove the # symbol
    const hashParams = new URLSearchParams(hash)
    
    // Look for these parameters that Supabase adds
    const accessToken = hashParams.get('access_token')
    const type = hashParams.get('type')
    const errorParam = hashParams.get('error')
    const errorDescription = hashParams.get('error_description')
    
    // Check for errors first (expired/invalid token)
    if (errorParam || errorDescription) {
      setIsValidToken(false)
      setError(
        language === "en"
          ? "Invalid or expired reset link. Please request a new one."
          : "重置链接无效或已过期。请重新请求。"
      )
      return
    }
    
    // Check if we have the required parameters for password reset
    if (!accessToken || type !== 'recovery') {
      // No valid token found - user came here directly without clicking email link
      setIsValidToken(false)
      setError(
        language === "en"
          ? "No reset token found. Please request a password reset link from your email."
          : "未找到重置令牌。请从您的邮箱请求密码重置链接。"
      )
      return
    }
    
    // Token exists and looks valid!
    setIsValidToken(true)
  }, [language])

  async function handleUpdatePassword(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setMessage(null)
    setError(null)

    // VALIDATION 1: Check if passwords match
    if (password !== confirmPassword) {
      setError(language === "en" ? "Passwords do not match" : "密码不匹配")
      setLoading(false)
      return
    }

    // VALIDATION 2: Check password length
    if (password.length < 6) {
      setError(
        language === "en" 
          ? "Password must be at least 6 characters" 
          : "密码至少需要6个字符"
      )
      setLoading(false)
      return
    }

    // ALL VALIDATION PASSED - Update password!
    const { error } = await updatePassword(password)

    setLoading(false)

    if (error) {
      setError(`Error: ${error.message}`)
    } else {
      // Success! Show message and redirect
      setMessage(
        language === "en"
          ? "Password updated successfully! Redirecting to sign in..."
          : "密码更新成功！正在跳转到登录页面..."
      )
      
      // Clear form
      setPassword("")
      setConfirmPassword("")
      
      // Redirect to sign-in page after 2 seconds
      setTimeout(() => {
        router.push("/signin")
      }, 2000)
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <section className="flex min-h-screen items-center justify-center px-6 pt-12">
        <div className="w-full max-w-md space-y-6">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-3xl font-light tracking-tight text-foreground">
              {language === "en" ? "Set new password" : "设置新密码"}
            </h1>
            {isValidToken && (
              <p className="mt-2 text-muted-foreground">
                {language === "en"
                  ? "Enter your new password below."
                  : "在下方输入您的新密码。"}
              </p>
            )}
          </div>

          <div className="rounded-xl border border-border bg-card p-8">
            {/* ========== LOADING STATE (Checking token) ========== */}
            {isValidToken === null ? (
              <div className="flex flex-col items-center justify-center py-8 space-y-4">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                <p className="text-sm text-muted-foreground">
                  {language === "en" ? "Verifying reset link..." : "验证重置链接中..."}
                </p>
              </div>
            ) : !isValidToken ? (
              /* ========== INVALID TOKEN MESSAGE ========== */
              <div className="space-y-4">
                <div className="rounded-lg bg-red-50 dark:bg-red-950 p-3 border border-red-200 dark:border-red-800">
                  <p className="text-center text-sm text-red-800 dark:text-red-200">
                    {error}
                  </p>
                </div>
                
                <div className="text-center">
                  <Link 
                    href="/forgot-password"
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    {language === "en" ? "Request new reset link" : "请求新的重置链接"}
                  </Link>
                </div>
              </div>
            ) : (
              /* ========== VALID TOKEN - SHOW FORM ========== */
              <>
                <form className="space-y-6" onSubmit={handleUpdatePassword}>
                  {/* New Password Field */}
                  <div className="space-y-2">
                    <Label htmlFor="password">
                      {language === "en" ? "New Password" : "新密码"}
                    </Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder={language === "en" ? "Enter your new password" : "输入您的新密码"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      autoComplete="new-password"
                      required
                      disabled={loading}
                      minLength={6}
                    />
                    <p className="text-xs text-muted-foreground">
                      {language === "en"
                        ? "Must be at least 6 characters"
                        : "至少需要6个字符"}
                    </p>
                  </div>

                  {/* Confirm Password Field */}
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">
                      {language === "en" ? "Confirm New Password" : "确认新密码"}
                    </Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder={language === "en" ? "Confirm your new password" : "确认您的新密码"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      autoComplete="new-password"
                      required
                      disabled={loading}
                      minLength={6}
                    />
                  </div>

                  {/* Submit Button */}
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading
                      ? (language === "en" ? "Updating password..." : "更新密码中...")
                      : (language === "en" ? "Update password" : "更新密码")}
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

                {/* ========== FOOTER: Link to Sign In ========== */}
                <div className="mt-6 text-center text-sm text-muted-foreground">
                  {language === "en" ? "Remember your password?" : "记得密码？"}{" "}
                  <Link href="/signin" className="font-medium text-foreground hover:underline">
                    {language === "en" ? "Sign in" : "登录"}
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}