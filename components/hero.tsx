"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/language-context"

export function Hero() {
  const { language, t } = useLanguage()

  return (
    <section className="flex min-h-screen flex-col items-start justify-center px-6 pt-16 md:px-12 lg:px-24">
      <div className="mx-auto w-full max-w-4xl">
        {language === "en" ? (
          <>
            <p className="mb-4 text-lg font-medium tracking-wide text-muted-foreground">
              慧盈财富
            </p>
            <h1 className="text-balance text-5xl font-light leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl">
              Wise Win Financial.
            </h1>
          </>
        ) : (
          <>
            <p className="mb-4 text-lg font-medium tracking-wide text-muted-foreground">
              Wise Win Financial
            </p>
            <h1 className="text-balance text-5xl font-light leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl">
              慧盈财富
            </h1>
          </>
        )}

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {t.hero.description}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Button
            asChild
            variant="secondary"
            className="h-12 rounded-full px-8 text-sm font-medium"
          >
            <Link href="/about">{t.hero.aboutButton}</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-12 rounded-full border-foreground/20 px-8 text-sm font-medium bg-transparent"
          >
            <Link href="/pricing" className="flex items-center gap-2">
              {t.hero.pricingButton}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
