"use client"

import { useAuth } from "@/lib/auth-context"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import Link from "next/link"

export function UserNav() {
  const { user, signOut, loading } = useAuth()
  const { language } = useLanguage()

  if (loading) {
    return (
      <div className="h-8 w-20 rounded-md bg-muted animate-pulse" />
    )
  }

  if (!user) {
    return (
      <Link href="/signin">
        <Button variant="ghost" size="sm">
          {language === "en" ? "Sign In" : "登录"}
        </Button>
      </Link>
    )
  }

  const displayName = user.user_metadata?.full_name || user.email?.split("@")[0] || "User"

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-muted-foreground hidden sm:inline">
        {language === "en" ? "Hi" : "你好"}, {displayName}
      </span>
      <Button
        variant="outline"
        size="sm"
        onClick={() => signOut()}
      >
        {language === "en" ? "Sign out" : "退出"}
      </Button>
    </div>
  )
}
