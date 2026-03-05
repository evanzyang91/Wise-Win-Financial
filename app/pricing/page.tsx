"use client"

import * as React from "react"
import { Navbar } from "@/components/navbar"
import { useLanguage } from "@/lib/language-context"
import { Heart, Plane, ChevronRight } from "lucide-react"
import Link from "next/link"

interface InsuranceCategory {
  id: string
  label: string
  labelZh: string
  icon: React.ElementType
  subcategories: {
    id: string
    label: string
    labelZh: string
    description: string
    descriptionZh: string
  }[]
}

const insuranceCategories: InsuranceCategory[] = [
  {
    id: "life",
    label: "Life Insurance",
    labelZh: "人寿保险",
    icon: Heart,
    subcategories: [
      {
        id: "term-life",
        label: "Term Life Insurance",
        labelZh: "定期人寿保险",
        description: "Affordable coverage for a specific period with guaranteed premiums",
        descriptionZh: "特定期限内保费固定的经济实惠保障",
      },
      {
        id: "participating-whole-life",
        label: "Participating Whole Life Insurance",
        labelZh: "分红终身人寿保险",
        description: "Permanent coverage with potential dividends and cash value growth",
        descriptionZh: "具有潜在分红和现金价值增长的终身保障",
      },
      {
        id: "universal-life",
        label: "Universal Life Insurance",
        labelZh: "万能人寿保险",
        description: "Flexible premiums and death benefits with investment component",
        descriptionZh: "灵活保费和身故赔偿，附带投资功能",
      },
      {
        id: "term-100",
        label: "Term 100",
        labelZh: "百年定期保险",
        description: "Permanent coverage with level premiums payable to age 100",
        descriptionZh: "保费固定至100岁的终身保障",
      },
      {
        id: "critical-illness",
        label: "Critical Illness Insurance (CI)",
        labelZh: "重大疾病保险",
        description: "Lump sum payment upon diagnosis of covered critical illnesses",
        descriptionZh: "确诊承保重大疾病时一次性赔付",
      },
      {
        id: "disability",
        label: "Disability Insurance (DI)",
        labelZh: "伤残保险",
        description: "Income replacement if you're unable to work due to disability",
        descriptionZh: "因伤残无法工作时的收入替代保障",
      },
      {
        id: "accidental-death",
        label: "Accidental Death & Dismemberment (AD&D)",
        labelZh: "意外死亡及伤残保险",
        description: "Coverage for death or serious injury resulting from accidents",
        descriptionZh: "因意外事故导致死亡或严重伤害的保障",
      },
    ],
  },
  {
    id: "travel",
    label: "Travel Insurance",
    labelZh: "旅行保险",
    icon: Plane,
    subcategories: [
      {
        id: "travelling-canadians-emergency",
        label: "Travelling Canadians - Emergency Medical",
        labelZh: "加拿大旅客 - 紧急医疗",
        description: "Medical emergency coverage for Canadians travelling abroad",
        descriptionZh: "加拿大人出国旅行的紧急医疗保障",
      },
      {
        id: "travelling-canadians-trip",
        label: "Travelling Canadians - Trip Cancellation & Interruption",
        labelZh: "加拿大旅客 - 行程取消与中断",
        description: "Protection for trip cancellation, delays, and interruptions",
        descriptionZh: "行程取消、延误和中断的保障",
      },
      {
        id: "visitors-emergency",
        label: "Visitors to Canada - Emergency Medical",
        labelZh: "访加游客 - 紧急医疗",
        description: "Medical coverage for visitors travelling to Canada",
        descriptionZh: "来加拿大访问者的医疗保障",
      },
      {
        id: "super-visa",
        label: "Visitors to Canada - Super Visa Applicants",
        labelZh: "访加游客 - 超级签证申请人",
        description: "Required medical insurance for Super Visa applications",
        descriptionZh: "超级签证申请所需的医疗保险",
      },
      {
        id: "international-students",
        label: "International Students to Canada",
        labelZh: "国际留学生",
        description: "Comprehensive health coverage for international students",
        descriptionZh: "国际留学生的全面健康保障",
      },
    ],
  },
]

export default function PricingPage() {
  const { language, t } = useLanguage()

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <section className="mx-auto max-w-6xl px-6 pt-32 pb-16">
        <div className="mb-12">
          <p className="mb-4 text-sm font-medium tracking-wide text-muted-foreground">
            {t.pricing.label}
          </p>
          <h1 className="text-balance text-4xl font-light tracking-tight text-foreground md:text-5xl">
            {t.pricing.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            {language === "en"
              ? "Select an insurance category below to explore coverage options and compare quotes from leading Canadian insurers."
              : "选择以下保险类别，探索保障选项并比较加拿大领先保险公司的报价。"}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {insuranceCategories.map((category) => (
            <div
              key={category.id}
              className="rounded-xl border border-border bg-card overflow-hidden"
            >
              <div className="flex items-center gap-3 border-b border-border bg-muted/30 px-6 py-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <category.icon className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">
                  {language === "en" ? category.label : category.labelZh}
                </h2>
              </div>
              <div className="divide-y divide-border">
                {category.subcategories.map((sub) => (
                  <Link
                    key={sub.id}
                    href={`/pricing/${category.id}/${sub.id}`}
                    className="flex items-center justify-between gap-4 px-6 py-4 transition-colors hover:bg-muted/50"
                  >
                    <div className="min-w-0 flex-1">
                      <h3 className="font-medium text-foreground">
                        {language === "en" ? sub.label : sub.labelZh}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                        {language === "en" ? sub.description : sub.descriptionZh}
                      </p>
                    </div>
                    <ChevronRight className="h-5 w-5 shrink-0 text-muted-foreground" />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-xl border border-border bg-card p-6 md:p-8">
          <h3 className="mb-4 text-lg font-medium text-foreground">
            {t.pricing.aboutComparisons}
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="mb-2 font-medium text-foreground">{t.pricing.trustedPartners}</h4>
              <p className="text-sm text-muted-foreground">
                {t.pricing.trustedPartnersDesc}
              </p>
            </div>
            <div>
              <h4 className="mb-2 font-medium text-foreground">{t.pricing.accurateEstimates}</h4>
              <p className="text-sm text-muted-foreground">
                {t.pricing.accurateEstimatesDesc}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
