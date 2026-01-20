"use client"

import { Navbar } from "@/components/navbar"
import { useLanguage } from "@/lib/language-context"

export default function AboutPage() {
  const { language, t } = useLanguage()

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <section className="mx-auto max-w-4xl px-6 pt-32 pb-16">
        <p className="mb-4 text-sm font-medium tracking-wide text-muted-foreground">
          {t.about.label}
        </p>
        
        {language === "en" ? (
          <>
            <h1 className="text-balance text-4xl font-light tracking-tight text-foreground md:text-5xl">
              慧盈财富
            </h1>
            <h2 className="mt-2 text-2xl font-light text-muted-foreground md:text-3xl">
              Wise Win Financial
            </h2>
          </>
        ) : (
          <>
            <h1 className="text-balance text-4xl font-light tracking-tight text-foreground md:text-5xl">
              Wise Win Financial
            </h1>
            <h2 className="mt-2 text-2xl font-light text-muted-foreground md:text-3xl">
              慧盈财富
            </h2>
          </>
        )}

        <div className="mt-12 space-y-8 text-lg leading-relaxed text-muted-foreground">
          <p>
            {t.about.description1}
          </p>

          <p>
            {t.about.description2}
          </p>

          <div className="rounded-2xl border border-border bg-card p-8">
            <h3 className="mb-6 text-xl font-medium text-foreground">
              {t.about.servicesTitle}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                <span>
                  <strong className="text-foreground">{t.about.travelMedical}</strong> — 
                  {t.about.travelMedicalDesc}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                <span>
                  <strong className="text-foreground">{t.about.travel}</strong> — 
                  {t.about.travelDesc}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                <span>
                  <strong className="text-foreground">{t.about.life}</strong> — 
                  {t.about.lifeDesc}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                <span>
                  <strong className="text-foreground">{t.about.seriousIllness}</strong> — 
                  {t.about.seriousIllnessDesc}
                </span>
              </li>
            </ul>
          </div>

          <p>
            {t.about.mission}
          </p>
        </div>
      </section>
    </main>
  )
}
