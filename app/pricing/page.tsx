"use client"

import * as React from "react"
import { Navbar } from "@/components/navbar"
import { useLanguage } from "@/lib/language-context"
import { Heart, Plane, ChevronDown, ChevronRight } from "lucide-react"
import { InsuranceForm } from "@/components/insurance-form"
import { ComparisonTable } from "@/components/comparison-table"
import { insuranceCompanies, type InsuranceType } from "@/lib/insurance-data"
import { cn } from "@/lib/utils"

interface Subcategory {
  id: string
  label: string
  labelZh: string
  description: string
  descriptionZh: string
  insuranceType: InsuranceType
}

interface InsuranceCategory {
  id: string
  label: string
  labelZh: string
  icon: React.ElementType
  subcategories: Subcategory[]
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
        insuranceType: "life",
      },
      {
        id: "participating-whole-life",
        label: "Participating Whole Life Insurance",
        labelZh: "分红终身人寿保险",
        description: "Permanent coverage with potential dividends and cash value growth",
        descriptionZh: "具有潜在分红和现金价值增长的终身保障",
        insuranceType: "life",
      },
      {
        id: "universal-life",
        label: "Universal Life Insurance",
        labelZh: "万能人寿保险",
        description: "Flexible premiums and death benefits with investment component",
        descriptionZh: "灵活保费和身故赔偿，附带投资功能",
        insuranceType: "life",
      },
      {
        id: "term-100",
        label: "Term 100",
        labelZh: "百年定期保险",
        description: "Permanent coverage with level premiums payable to age 100",
        descriptionZh: "保费固定至100岁的终身保障",
        insuranceType: "life",
      },
      {
        id: "critical-illness",
        label: "Critical Illness Insurance (CI)",
        labelZh: "重大疾病保险",
        description: "Lump sum payment upon diagnosis of covered critical illnesses",
        descriptionZh: "确诊承保重大疾病时一次性赔付",
        insuranceType: "serious-illness",
      },
      {
        id: "disability",
        label: "Disability Insurance (DI)",
        labelZh: "伤残保险",
        description: "Income replacement if you're unable to work due to disability",
        descriptionZh: "因伤残无法工作时的收入替代保障",
        insuranceType: "life",
      },
      {
        id: "accidental-death",
        label: "Accidental Death & Dismemberment (AD&D)",
        labelZh: "意外死亡及伤残保险",
        description: "Coverage for death or serious injury resulting from accidents",
        descriptionZh: "因意外事故导致死亡或严重伤害的保障",
        insuranceType: "life",
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
        insuranceType: "travel-medical",
      },
      {
        id: "travelling-canadians-trip",
        label: "Travelling Canadians - Trip Cancellation & Interruption",
        labelZh: "加拿大旅客 - 行程取消与中断",
        description: "Protection for trip cancellation, delays, and interruptions",
        descriptionZh: "行程取消、延误和中断的保障",
        insuranceType: "travel",
      },
      {
        id: "visitors-emergency",
        label: "Visitors to Canada - Emergency Medical",
        labelZh: "访加游客 - 紧急医疗",
        description: "Medical coverage for visitors travelling to Canada",
        descriptionZh: "来加拿大访问者的医疗保障",
        insuranceType: "travel-medical",
      },
      {
        id: "super-visa",
        label: "Visitors to Canada - Super Visa Applicants",
        labelZh: "访加游客 - 超级签证申请人",
        description: "Required medical insurance for Super Visa applications",
        descriptionZh: "超级签证申请所需的医疗保险",
        insuranceType: "travel-medical",
      },
      {
        id: "international-students",
        label: "International Students to Canada",
        labelZh: "国际留学生",
        description: "Comprehensive health coverage for international students",
        descriptionZh: "国际留学生的全面健康保障",
        insuranceType: "travel-medical",
      },
    ],
  },
]

export default function PricingPage() {
  const { language, t } = useLanguage()
  const [expandedCategory, setExpandedCategory] = React.useState<string | null>(null)
  const [selectedSubcategory, setSelectedSubcategory] = React.useState<Subcategory | null>(null)
  const [calculationData, setCalculationData] = React.useState<{
    age: number
    days: number
    coverageAmount: number
  } | null>(null)

  const handleCategoryClick = (categoryId: string) => {
    if (expandedCategory === categoryId) {
      setExpandedCategory(null)
      setSelectedSubcategory(null)
      setCalculationData(null)
    } else {
      setExpandedCategory(categoryId)
      setSelectedSubcategory(null)
      setCalculationData(null)
    }
  }

  const handleSubcategoryClick = (subcategory: Subcategory) => {
    if (selectedSubcategory?.id === subcategory.id) {
      setSelectedSubcategory(null)
      setCalculationData(null)
    } else {
      setSelectedSubcategory(subcategory)
      setCalculationData(null)
    }
  }

  const handleCalculate = (data: {
    dateOfBirth: Date
    startDate: Date
    endDate: Date
    coverageAmount: number
    age: number
    days: number
  }) => {
    setCalculationData({
      age: data.age,
      days: data.days,
      coverageAmount: data.coverageAmount,
    })
  }

  const filteredPlans = selectedSubcategory
    ? insuranceCompanies.filter(
        (plan) => plan.insuranceType === selectedSubcategory.insuranceType
      )
    : []

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <section className="mx-auto max-w-4xl px-6 pt-32 pb-16">
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

        <div className="space-y-4">
          {insuranceCategories.map((category) => {
            const isExpanded = expandedCategory === category.id
            const Icon = category.icon

            return (
              <div
                key={category.id}
                className="rounded-xl border border-border bg-card overflow-hidden"
              >
                {/* Category Header - Dropdown Toggle */}
                <button
                  onClick={() => handleCategoryClick(category.id)}
                  className="flex w-full items-center justify-between gap-3 px-6 py-5 text-left transition-colors hover:bg-muted/50"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-foreground">
                        {language === "en" ? category.label : category.labelZh}
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        {language === "en"
                          ? `${category.subcategories.length} coverage options`
                          : `${category.subcategories.length} 种保障选项`}
                      </p>
                    </div>
                  </div>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 text-muted-foreground transition-transform duration-200",
                      isExpanded && "rotate-180"
                    )}
                  />
                </button>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="border-t border-border">
                    {/* Subcategories List */}
                    <div className="divide-y divide-border">
                      {category.subcategories.map((sub) => {
                        const isSelected = selectedSubcategory?.id === sub.id

                        return (
                          <div key={sub.id}>
                            <button
                              onClick={() => handleSubcategoryClick(sub)}
                              className={cn(
                                "flex w-full items-center justify-between gap-4 px-6 py-4 text-left transition-colors",
                                isSelected
                                  ? "bg-primary/5"
                                  : "hover:bg-muted/50"
                              )}
                            >
                              <div className="min-w-0 flex-1">
                                <h3
                                  className={cn(
                                    "font-medium",
                                    isSelected
                                      ? "text-primary"
                                      : "text-foreground"
                                  )}
                                >
                                  {language === "en" ? sub.label : sub.labelZh}
                                </h3>
                                <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                                  {language === "en"
                                    ? sub.description
                                    : sub.descriptionZh}
                                </p>
                              </div>
                              <ChevronRight
                                className={cn(
                                  "h-5 w-5 shrink-0 transition-transform duration-200",
                                  isSelected
                                    ? "rotate-90 text-primary"
                                    : "text-muted-foreground"
                                )}
                              />
                            </button>

                            {/* Form and Results for Selected Subcategory */}
                            {isSelected && (
                              <div className="border-t border-border bg-muted/30 px-6 py-6">
                                <div className="mb-6">
                                  <h4 className="text-lg font-medium text-foreground mb-2">
                                    {language === "en"
                                      ? "Get Your Quote"
                                      : "获取报价"}
                                  </h4>
                                  <p className="text-sm text-muted-foreground">
                                    {language === "en"
                                      ? "Enter your details below to compare prices from top Canadian insurers."
                                      : "在下方输入您的信息，比较加拿大顶级保险公司的价格。"}
                                  </p>
                                </div>

                                <InsuranceForm
                                  insuranceType={sub.insuranceType}
                                  onCalculate={handleCalculate}
                                />

                                {calculationData && (
                                  <div className="mt-8">
                                    <ComparisonTable
                                      plans={filteredPlans}
                                      age={calculationData.age}
                                      days={calculationData.days}
                                      coverageAmount={calculationData.coverageAmount}
                                      insuranceType={sub.insuranceType}
                                    />
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="mt-16 rounded-xl border border-border bg-card p-6 md:p-8">
          <h3 className="mb-4 text-lg font-medium text-foreground">
            {t.pricing.aboutComparisons}
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="mb-2 font-medium text-foreground">
                {t.pricing.trustedPartners}
              </h4>
              <p className="text-sm text-muted-foreground">
                {t.pricing.trustedPartnersDesc}
              </p>
            </div>
            <div>
              <h4 className="mb-2 font-medium text-foreground">
                {t.pricing.accurateEstimates}
              </h4>
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
