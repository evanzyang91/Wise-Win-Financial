"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { 
  type InsurancePlan, 
  calculatePremium,
  type InsuranceType
} from "@/lib/insurance-data"
import { useLanguage } from "@/lib/language-context"

interface ComparisonTableProps {
  plans: InsurancePlan[]
  age: number
  days: number
  coverageAmount: number
  insuranceType: InsuranceType
}

export function ComparisonTable({
  plans,
  age,
  days,
  coverageAmount,
  insuranceType,
}: ComparisonTableProps) {
  const { t, language } = useLanguage()
  
  const calculatedPlans = plans
    .filter((plan) => age >= plan.minAge && age <= plan.maxAge)
    .map((plan) => ({
      ...plan,
      pricing: calculatePremium(plan, age, days, coverageAmount),
    }))
    .sort((a, b) => a.pricing.totalPrice - b.pricing.totalPrice)

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-CA", {
      style: "currency",
      currency: "CAD",
    }).format(amount)
  }

  const getTypeLabel = (type: InsuranceType) => {
    switch (type) {
      case "travel-medical":
        return t.pricing.travelMedical
      case "travel":
        return t.pricing.travel
      case "life":
        return t.pricing.life
      case "serious-illness":
        return t.pricing.seriousIllness
    }
  }

  const getTierBadgeColor = (tier: string) => {
    switch (tier) {
      case "Basic":
        return "bg-muted text-muted-foreground"
      case "Standard":
        return "bg-primary/10 text-primary"
      case "Premium":
        return "bg-accent/20 text-accent-foreground border border-accent"
      case "Elite":
        return "bg-amber-100 text-amber-800 border border-amber-300"
      default:
        return "bg-secondary text-secondary-foreground"
    }
  }

  const getTierLabel = (tier: string) => {
    if (language === "en") return tier
    switch (tier) {
      case "Basic":
        return "基础"
      case "Standard":
        return "标准"
      case "Premium":
        return "高级"
      case "Elite":
        return "精英"
      default:
        return tier
    }
  }

  if (calculatedPlans.length === 0) {
    return (
      <div className="rounded-lg border border-border bg-card p-8 text-center">
        <p className="text-muted-foreground">
          {t.comparison.noPlans}
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium text-foreground">
          {calculatedPlans.length} {t.comparison.results}
        </h3>
        <Badge variant="secondary">{getTypeLabel(insuranceType)}</Badge>
      </div>

      {/* Card-based layout for all screen sizes */}
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {calculatedPlans.map((plan, index) => (
          <Card key={plan.id} className="overflow-hidden flex flex-col">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between gap-2">
                <div className="space-y-1 flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-semibold text-foreground text-lg">
                      {plan.company}
                    </span>
                    {index === 0 && (
                      <Badge className="bg-accent text-accent-foreground text-xs shrink-0">
                        {language === "en" ? "Best Value" : "最佳价值"}
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground font-medium">
                    {plan.planName}
                  </p>
                </div>
                <Badge className={`${getTierBadgeColor(plan.tier)} shrink-0`}>
                  {getTierLabel(plan.tier)}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col flex-1 pt-0">
              {/* Pricing Section - First */}
              <div className="bg-muted/50 rounded-lg p-4 mb-4">
                <div className="text-center mb-3">
                  <p className="text-xs text-muted-foreground mb-1">{t.comparison.totalPremium}</p>
                  <p className="text-3xl font-bold text-foreground">
                    {formatCurrency(plan.pricing.totalPrice)}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-border/50">
                  <div className="text-center">
                    <p className="text-xs text-muted-foreground mb-1">{t.comparison.basePrice}</p>
                    <p className="font-semibold text-foreground">
                      {formatCurrency(plan.pricing.basePrice)}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-muted-foreground mb-1">{t.comparison.dailyRate}</p>
                    <p className="font-semibold text-foreground">
                      {formatCurrency(plan.unitPricePerDay)}/{language === "en" ? "day" : "天"}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {days} {language === "en" ? "days" : "天"} = {formatCurrency(plan.pricing.dailyTotal)}
                    </p>
                  </div>
                </div>
              </div>

              {/* Description Section - Last */}
              <div className="flex-1">
                <p className="text-xs text-muted-foreground mb-1">{t.comparison.description}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {plan.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <p className="text-xs text-muted-foreground">
        {language === "en" 
          ? "* Prices are estimates based on provided information. Final premiums may vary based on medical history, pre-existing conditions, and underwriting requirements."
          : "* 价格是根据提供的信息估算的。最终保费可能因病史、既往疾病和承保要求而有所不同。"
        }
      </p>
    </div>
  )
}
