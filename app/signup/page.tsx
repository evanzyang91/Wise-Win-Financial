"use client"

import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useLanguage } from "@/lib/language-context"
import { useAuth } from "@/lib/auth-context"
import { set } from "date-fns"
import { Nav } from "react-day-picker"

export default function SignUpPage() {
    const { language } = useLanguage()
    const { signUpWithEmail, signInWithGoogle } = useAuth()
    const router = useRouter()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [googleLoading, setGoogleLoading] = useState(false)
    const [message, setMessage] = useState<string | null>(null)
    const [error, setError] = useState<string | null>(null)

    async function handleEmailSignUp(e: React.FormEvent) {
        e.preventDefault()
        setLoading(true)
        setMessage(null)
        setError(null)

        if (password !== confirmPassword) {
            setError(language === "en" ? "Passwords do not match" : "密码不匹配")
            setLoading(false)
            return
        }

        if (password.length < 6) {
            setError(language === "en" ? "Password must be at least 6 characters" : "密码必须至少6个字符")
            setLoading(false)
            return
        }

        const { error } = await signUpWithEmail(email, password)

        setLoading(false)

        if (error) {
            setError(`Error: ${error.message}`)
        } else {
            setMessage(language === "en" ? "Success! Check your email to verify your account." : "成功！请检查您的电子邮件以验证您的帐户。")

            setEmail("")
            setPassword("")
            setConfirmPassword("")
        }
    }

    async function handleGoogleSignUp() {
        setGoogleLoading(true)
        setMessage(null)
        setError(null)

        const { error } = await signInWithGoogle()

        if (error) {
            setError(`Error: ${error.message}`)
            setGoogleLoading(false)
        } 
    }

    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <section className="flex min-h-screen items-center justify-center px-6 pt-22">
                <div className="w-full max-w-md space-y-4">
                    {/* Header */}
                    <div className="text-center">
                        <h1 className="text-3xl font-light tracking-tight text-foreground">
                            {language === "en" ? "Create an account" : "创建账户"}
                        </h1>
                        <p className="mt-2 text-muted-foreground">
                            {language === "en"
                            ? "Enter your details to create your account"
                            : "输入您的详细信息以创建账户"}
                        </p>
                    </div>

                    <div className="rounded-xl border border-border bg-card p-8">
                        {/* ========== GOOGLE SIGN UP BUTTON ========== */}
                        <Button
                            type="button"
                            variant="outline"
                            className="w-full mb-6"
                            onClick={handleGoogleSignUp}
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
                    ? (language === "en" ? "Signing up..." : "注册中...")
                    : (language === "en" ? "Continue with Google" : "使用 Google 继续")}
                </Button>

                {/* ========== DIVIDER ========== */}
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

                {/* ========== EMAIL/PASSWORD FORM ========== */}
                <form className="space-y-6" onSubmit={handleEmailSignUp}>
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

                {/* Password Field */}
                <div className="space-y-2">
                    <Label htmlFor="password">
                    {language === "en" ? "Password" : "密码"}
                    </Label>
                    <Input
                    id="password"
                    type="password"
                    placeholder={language === "en" ? "Enter your password" : "输入您的密码"}
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
                    {language === "en" ? "Confirm Password" : "确认密码"}
                    </Label>
                    <Input
                    id="confirmPassword"
                    type="password"
                    placeholder={language === "en" ? "Confirm your password" : "确认您的密码"}
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
                    ? (language === "en" ? "Creating account..." : "创建账户中...")
                    : (language === "en" ? "Create account" : "创建账户")}
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
                {language === "en" ? "Already have an account?" : "已有账户？"}{" "}
                <Link href="/signin" className="font-medium text-foreground hover:underline">
                    {language === "en" ? "Sign in" : "登录"}
                </Link>
                </div>
            </div>

            {/* ========== TERMS & PRIVACY ========== */}
            <p className="text-center text-xs text-muted-foreground">
                {language === "en"
                ? "By creating an account, you agree to our Terms of Service and Privacy Policy."
                : "创建账户即表示您同意我们的服务条款和隐私政策。"}
            </p>
            </div>
        </section>
        </main>
    )
}