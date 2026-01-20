"use client"

import * as React from "react"
import { differenceInDays } from "date-fns"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { DatePicker } from "@/components/date-picker"
import { useLanguage } from "@/lib/language-context"
import type { InsuranceType } from "@/lib/insurance-data"

interface InsuranceFormProps {
  insuranceType: InsuranceType
  onCalculate: (data: {
    dateOfBirth: Date
    startDate: Date
    endDate: Date
    coverageAmount: number
    age: number
    days: number
  }) => void
}

export function InsuranceForm({ insuranceType, onCalculate }: InsuranceFormProps) {
  const { t } = useLanguage()
  const [dateOfBirth, setDateOfBirth] = React.useState<Date | undefined>()
  const [startDate, setStartDate] = React.useState<Date | undefined>()
  const [endDate, setEndDate] = React.useState<Date | undefined>()
  const [coverageAmount, setCoverageAmount] = React.useState<string>("")

  const getCoverageLabel = () => {
    switch (insuranceType) {
      case "travel-medical":
        return t.pricing.medicalCoverage
      case "travel":
        return t.pricing.tripCost
      case "life":
        return t.pricing.lifeCoverage
      case "serious-illness":
        return t.pricing.criticalCoverage
      default:
        return t.pricing.medicalCoverage
    }
  }

  const getCoveragePlaceholder = () => {
    switch (insuranceType) {
      case "travel-medical":
        return "e.g., 100000"
      case "travel":
        return "e.g., 5000"
      case "life":
        return "e.g., 500000"
      case "serious-illness":
        return "e.g., 100000"
      default:
        return "Enter amount"
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!dateOfBirth || !startDate || !endDate || !coverageAmount) {
      return
    }

    const today = new Date()
    const age = today.getFullYear() - dateOfBirth.getFullYear()
    const days = differenceInDays(endDate, startDate) + 1

    onCalculate({
      dateOfBirth,
      startDate,
      endDate,
      coverageAmount: parseFloat(coverageAmount),
      age,
      days,
    })
  }

  const isFormValid = dateOfBirth && startDate && endDate && coverageAmount && parseFloat(coverageAmount) > 0

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="dob">{t.pricing.dateOfBirth}</Label>
          <DatePicker
            date={dateOfBirth}
            onSelect={setDateOfBirth}
            placeholder={t.pricing.selectBirthDate}
            toDate={new Date()}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="coverage">{getCoverageLabel()}</Label>
          <Input
            id="coverage"
            type="number"
            placeholder={getCoveragePlaceholder()}
            value={coverageAmount}
            onChange={(e) => setCoverageAmount(e.target.value)}
            min="0"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="start">{t.pricing.coverageStart}</Label>
          <DatePicker
            date={startDate}
            onSelect={setStartDate}
            placeholder={t.pricing.selectStartDate}
            fromDate={new Date()}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="end">{t.pricing.coverageEnd}</Label>
          <DatePicker
            date={endDate}
            onSelect={setEndDate}
            placeholder={t.pricing.selectEndDate}
            fromDate={startDate || new Date()}
            disabled={!startDate}
          />
        </div>
      </div>

      {startDate && endDate && (
        <p className="text-sm text-muted-foreground">
          {t.pricing.coveragePeriod} {differenceInDays(endDate, startDate) + 1} {t.pricing.days}
        </p>
      )}

      <Button type="submit" className="w-full md:w-auto" disabled={!isFormValid}>
        {t.pricing.comparePrices}
      </Button>
    </form>
  )
}
