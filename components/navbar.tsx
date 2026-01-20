"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"
import { Languages } from "lucide-react"

export function Navbar() {
  const { language, setLanguage, t } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "zh" : "en")
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-semibold tracking-tight text-foreground">
            {language === "en" ? "慧盈财富" : "Wise Win"}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/about"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {t.nav.about}
          </Link>
          <Link
            href="/pricing"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {t.nav.explorePricing}
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className="flex items-center gap-2"
          >
            <Languages className="h-4 w-4" />
            <span className="hidden sm:inline">{language === "en" ? "中文" : "EN"}</span>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/signin">{t.nav.signIn}</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
