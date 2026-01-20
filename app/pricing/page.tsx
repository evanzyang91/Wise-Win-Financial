"use client"

import * as React from "react"
import { Navbar } from "@/components/navbar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { InsuranceForm } from "@/components/insurance-form"
import { ComparisonTable } from "@/components/comparison-table"
import { getPlansForType, type InsuranceType } from "@/lib/insurance-data"
import { useLanguage } from "@/lib/language-context"
import { Plane, Shield, Heart, Activity } from "lucide-react"

interface CalculationResult {
  dateOfBirth: Date
  startDate: Date
  endDate: Date
  coverageAmount: number
  age: number
  days: number
}

export default function PricingPage() {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = React.useState<InsuranceType>("travel-medical")
  const [calculationResult, setCalculationResult] = React.useState<CalculationResult | null>(null)

  const handleCalculate = (data: CalculationResult) => {
    setCalculationResult(data)
  }

  const handleTabChange = (value: string) => {
    setActiveTab(value as InsuranceType)
    setCalculationResult(null)
  }

  const tabs = [
    { value: "travel-medical", label: t.pricing.travelMedical, icon: Plane },
    { value: "travel", label: t.pricing.travel, icon: Shield },
    { value: "life", label: t.pricing.life, icon: Heart },
    { value: "serious-illness", label: t.pricing.seriousIllness, icon: Activity },
  ]

  const getInsuranceLabel = (tabValue: string) => {
    const tab = tabs.find(t => t.value === tabValue)
    return tab ? `${tab.label} ${t.pricing.insuranceSuffix}` : ""
  }

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
            {t.pricing.description}
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={handleTabChange} className="space-y-8">
          <TabsList className="grid h-auto w-full grid-cols-2 gap-2 bg-transparent p-0 lg:grid-cols-4">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-4 py-3 text-foreground transition-all hover:bg-secondary data-[state=active]:border-accent data-[state=active]:bg-accent data-[state=active]:text-accent-foreground"
              >
                <tab.icon className="h-4 w-4" />
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">{tab.label.split(" ")[0]}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {tabs.map((tab) => (
            <TabsContent key={tab.value} value={tab.value} className="space-y-8">
              <div className="rounded-xl border border-border bg-card p-6 md:p-8">
                <h2 className="mb-6 text-xl font-medium text-foreground">
                  {getInsuranceLabel(tab.value)}
                </h2>
                <InsuranceForm
                  insuranceType={tab.value as InsuranceType}
                  onCalculate={handleCalculate}
                />
              </div>

              {calculationResult && activeTab === tab.value && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <ComparisonTable
                    plans={getPlansForType(tab.value as InsuranceType)}
                    age={calculationResult.age}
                    days={calculationResult.days}
                    coverageAmount={calculationResult.coverageAmount}
                    insuranceType={tab.value as InsuranceType}
                  />
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>

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
