"use client"

import * as React from "react"
import { format, setMonth, setYear, getMonth, getYear, isSameMonth } from "date-fns"
import { CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useLanguage } from "@/lib/language-context"

interface DatePickerProps {
  date: Date | undefined
  onSelect: (date: Date | undefined) => void
  placeholder?: string
  disabled?: boolean
  fromDate?: Date
  toDate?: Date
}

export function DatePicker({
  date,
  onSelect,
  placeholder = "Pick a date",
  disabled,
  fromDate,
  toDate,
}: DatePickerProps) {
  const { t } = useLanguage()
  const [calendarDate, setCalendarDate] = React.useState<Date>(date || new Date())
  const [showMonthPicker, setShowMonthPicker] = React.useState(false)
  const [showYearPicker, setShowYearPicker] = React.useState(false)
  
  const monthScrollRef = React.useRef<HTMLDivElement>(null)
  const yearScrollRef = React.useRef<HTMLDivElement>(null)
  
  const currentYear = new Date().getFullYear()
  const years = React.useMemo(() => {
    const startYear = fromDate ? getYear(fromDate) : currentYear - 100
    const endYear = toDate ? getYear(toDate) : currentYear + 10
    const yearsArray = []
    for (let year = endYear; year >= startYear; year--) {
      yearsArray.push(year)
    }
    return yearsArray
  }, [fromDate, toDate, currentYear])

  // Scroll to selected month/year when picker opens
  React.useEffect(() => {
    if (showMonthPicker && monthScrollRef.current) {
      const selectedMonth = monthScrollRef.current.querySelector('[data-selected="true"]')
      if (selectedMonth) {
        selectedMonth.scrollIntoView({ block: "center" })
      }
    }
  }, [showMonthPicker])

  React.useEffect(() => {
    if (showYearPicker && yearScrollRef.current) {
      const selectedYear = yearScrollRef.current.querySelector('[data-selected="true"]')
      if (selectedYear) {
        selectedYear.scrollIntoView({ block: "center" })
      }
    }
  }, [showYearPicker])

  const handleMonthSelect = (monthIndex: number) => {
    const newDate = setMonth(calendarDate, monthIndex)
    setCalendarDate(newDate)
    setShowMonthPicker(false)
  }

  const handleYearSelect = (year: number) => {
    const newDate = setYear(calendarDate, year)
    setCalendarDate(newDate)
    setShowYearPicker(false)
  }

  const handlePrevMonth = () => {
    const newDate = new Date(calendarDate)
    newDate.setMonth(newDate.getMonth() - 1)
    setCalendarDate(newDate)
  }

  const handleNextMonth = () => {
    const newDate = new Date(calendarDate)
    newDate.setMonth(newDate.getMonth() + 1)
    setCalendarDate(newDate)
  }

  const handleMonthClick = () => {
    setShowMonthPicker(true)
    setShowYearPicker(false)
  }

  const handleYearClick = () => {
    setShowYearPicker(true)
    setShowMonthPicker(false)
  }

  const currentMonthName = t.calendar.months[getMonth(calendarDate)]
  const currentYearValue = getYear(calendarDate)

  // Fixed width for consistent sizing
  const CALENDAR_WIDTH = 280

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-full justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
          disabled={disabled}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>{placeholder}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start" style={{ width: CALENDAR_WIDTH }}>
        <div className="p-3">
          <div className="flex items-center justify-between gap-1">
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7 shrink-0"
              onClick={handlePrevMonth}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handleMonthClick}
                className={cn(
                  "rounded-md px-2 py-1 text-sm font-medium transition-colors hover:bg-secondary",
                  showMonthPicker && "bg-secondary"
                )}
              >
                {currentMonthName}
              </button>
              <button
                type="button"
                onClick={handleYearClick}
                className={cn(
                  "rounded-md px-2 py-1 text-sm font-medium transition-colors hover:bg-secondary",
                  showYearPicker && "bg-secondary"
                )}
              >
                {currentYearValue}
              </button>
            </div>
            
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7 shrink-0"
              onClick={handleNextMonth}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div style={{ width: CALENDAR_WIDTH, minHeight: 240 }}>
          {showMonthPicker ? (
            <div 
              ref={monthScrollRef}
              className="max-h-[240px] overflow-y-auto border-t border-border"
            >
              <div className="grid grid-cols-3 gap-1 p-2">
                {t.calendar.months.map((month, index) => (
                  <button
                    key={month}
                    type="button"
                    data-selected={index === getMonth(calendarDate)}
                    onClick={() => handleMonthSelect(index)}
                    className={cn(
                      "rounded-md px-3 py-2 text-sm transition-colors hover:bg-secondary",
                      index === getMonth(calendarDate) && "bg-accent text-accent-foreground font-medium"
                    )}
                  >
                    {month}
                  </button>
                ))}
              </div>
            </div>
          ) : showYearPicker ? (
            <div 
              ref={yearScrollRef}
              className="max-h-[240px] overflow-y-auto border-t border-border"
            >
              <div className="grid grid-cols-4 gap-1 p-2">
                {years.map((year) => (
                  <button
                    key={year}
                    type="button"
                    data-selected={year === getYear(calendarDate)}
                    onClick={() => handleYearSelect(year)}
                    className={cn(
                      "rounded-md px-3 py-2 text-sm transition-colors hover:bg-secondary",
                      year === getYear(calendarDate) && "bg-accent text-accent-foreground font-medium"
                    )}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <Calendar
              mode="single"
              selected={date}
              onSelect={onSelect}
              month={calendarDate}
              onMonthChange={setCalendarDate}
              fixedWeeks
              disabled={(dateToCheck) => {
                if (!isSameMonth(dateToCheck, calendarDate)) return true
                if (fromDate && dateToCheck < fromDate) return true
                if (toDate && dateToCheck > toDate) return true
                return false
              }}
              classNames={{
                month_caption: "hidden",
                nav: "hidden",
                root: "w-full flex justify-center",
              }}
              className="pt-0"
            />
          )}
        </div>
      </PopoverContent>
    </Popover>
  )
}
