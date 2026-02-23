"use client"

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/auth-context'
import { useLanguage } from '@/lib/language-context'

export function AdminRoute({ children }: { children: React.ReactNode }) {
  const { user, loading, isAdmin } = useAuth()
  const { language } = useLanguage()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      // Not logged in - redirect to sign in
      router.push('/signin')
    } else if (!loading && user && !isAdmin) {
      // Logged in but not admin - redirect to home
      router.push('/')
    }
  }, [user, loading, isAdmin, router])

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center space-y-4">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent mx-auto" />
          <p className="text-sm text-muted-foreground">
            {language === "en" ? "Verifying permissions..." : "验证权限中..."}
          </p>
        </div>
      </div>
    )
  }

  if (!user || !isAdmin) {
    return (
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="text-center space-y-4 max-w-md">
          <div className="text-6xl">🔒</div>
          <h1 className="text-2xl font-bold">
            {language === "en" ? "Access Denied" : "访问被拒绝"}
          </h1>
          <p className="text-muted-foreground">
            {language === "en" 
              ? "You don't have permission to access this page. Admin access required." 
              : "您没有权限访问此页面。需要管理员权限。"}
          </p>
        </div>
      </div>
    )
  }

  return <>{children}</>
}
