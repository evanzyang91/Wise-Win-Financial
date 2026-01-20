"use client"

import * as React from "react"

type Language = "en" | "zh"

interface Translations {
  nav: {
    about: string
    explorePricing: string
    signIn: string
  }
  hero: {
    description: string
    aboutButton: string
    pricingButton: string
  }
  about: {
    label: string
    description1: string
    description2: string
    servicesTitle: string
    travelMedical: string
    travelMedicalDesc: string
    travel: string
    travelDesc: string
    life: string
    lifeDesc: string
    seriousIllness: string
    seriousIllnessDesc: string
    mission: string
  }
  pricing: {
    label: string
    title: string
    description: string
    travelMedical: string
    travel: string
    life: string
    seriousIllness: string
    insuranceSuffix: string
    dateOfBirth: string
    selectBirthDate: string
    coverageStart: string
    selectStartDate: string
    coverageEnd: string
    selectEndDate: string
    coveragePeriod: string
    days: string
    comparePrices: string
    medicalCoverage: string
    tripCost: string
    lifeCoverage: string
    criticalCoverage: string
    aboutComparisons: string
    trustedPartners: string
    trustedPartnersDesc: string
    accurateEstimates: string
    accurateEstimatesDesc: string
  }
  comparison: {
    title: string
    results: string
    plan: string
    tier: string
    basePrice: string
    dailyRate: string
    totalPremium: string
    description: string
    getQuote: string
    noPlans: string
  }
  signIn: {
    title: string
    subtitle: string
    email: string
    emailPlaceholder: string
    password: string
    button: string
    noAccount: string
    createAccount: string
  }
  calendar: {
    months: string[]
  }
}

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      about: "About",
      explorePricing: "Explore Pricing",
      signIn: "Sign In",
    },
    hero: {
      description: "Compare insurance premiums from all major Canadian insurance companies. Find the best rates for travel medical, travel, life, and serious illness insurance.",
      aboutButton: "About",
      pricingButton: "Explore Pricing",
    },
    about: {
      label: "About Us",
      description1: "At Wise Win Financial, we believe that finding the right insurance should be simple, transparent, and empowering. Our platform connects you with comprehensive insurance comparisons across all major Canadian insurance providers.",
      description2: "Whether you're planning a trip abroad, protecting your family's future, or preparing for life's uncertainties, we provide the tools to make informed decisions. Our comparison engine analyzes premiums from dozens of trusted insurers to find you the best coverage at competitive rates.",
      servicesTitle: "Our Services",
      travelMedical: "Travel Medical Insurance",
      travelMedicalDesc: "Protection for medical emergencies while traveling abroad",
      travel: "Travel Insurance",
      travelDesc: "Comprehensive coverage for trip cancellation, delays, and lost baggage",
      life: "Life Insurance",
      lifeDesc: "Secure your family's financial future with term and permanent life options",
      seriousIllness: "Serious Illness Insurance",
      seriousIllnessDesc: "Financial protection when facing critical health conditions",
      mission: "Our mission is to provide wisdom and clarity in financial protection, helping Canadian families navigate the complex world of insurance with confidence and ease.",
    },
    pricing: {
      label: "Compare & Save",
      title: "Explore Insurance Pricing",
      description: "Compare premiums from all major Canadian insurance companies. Select your insurance type and enter your details to see personalized quotes.",
      travelMedical: "Travel Medical",
      travel: "Travel",
      life: "Life",
      seriousIllness: "Serious Illness",
      insuranceSuffix: "Insurance",
      dateOfBirth: "Date of Birth",
      selectBirthDate: "Select your birth date",
      coverageStart: "Coverage Start Date",
      selectStartDate: "Select start date",
      coverageEnd: "Coverage End Date",
      selectEndDate: "Select end date",
      coveragePeriod: "Coverage period:",
      days: "days",
      comparePrices: "Compare Prices",
      medicalCoverage: "Medical Coverage Amount ($)",
      tripCost: "Trip Cost ($)",
      lifeCoverage: "Life Coverage Amount ($)",
      criticalCoverage: "Critical Illness Coverage ($)",
      aboutComparisons: "About Our Comparisons",
      trustedPartners: "Trusted Partners",
      trustedPartnersDesc: "We compare rates from Canada's most trusted insurance providers including Manulife, Sun Life, Blue Cross, Canada Life, and more.",
      accurateEstimates: "Accurate Estimates",
      accurateEstimatesDesc: "Our quotes are calculated using real pricing data. Final premiums may vary based on your complete profile and medical history.",
    },
    comparison: {
      title: "Insurance Comparison Results",
      results: "results found",
      plan: "Plan",
      tier: "Tier",
      basePrice: "Base Price",
      dailyRate: "Daily Rate",
      totalPremium: "Total Premium",
      description: "Description",
      getQuote: "Get Quote",
      noPlans: "No plans available for this insurance type.",
    },
    signIn: {
      title: "Sign In",
      subtitle: "Welcome back to Wise Win Financial",
      email: "Email",
      emailPlaceholder: "Enter your email",
      password: "Password",
      button: "Sign In",
      noAccount: "Don't have an account?",
      createAccount: "Create one",
    },
    calendar: {
      months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    },
  },
  zh: {
    nav: {
      about: "关于我们",
      explorePricing: "探索价格",
      signIn: "登录",
    },
    hero: {
      description: "比较加拿大所有主要保险公司的保费。为旅行医疗、旅行、人寿和重大疾病保险找到最优惠的价格。",
      aboutButton: "关于我们",
      pricingButton: "探索价格",
    },
    about: {
      label: "关于我们",
      description1: "在慧盈财富，我们相信找到合适的保险应该是简单、透明和赋能的。我们的平台为您提供加拿大所有主要保险提供商的全面保险比较。",
      description2: "无论您是计划出国旅行、保护家人的未来，还是为生活的不确定性做准备，我们都提供工具帮助您做出明智的决定。我们的比较引擎分析数十家可信赖保险公司的保费，为您找到最具竞争力的保障。",
      servicesTitle: "我们的服务",
      travelMedical: "旅行医疗保险",
      travelMedicalDesc: "出国旅行时的医疗紧急情况保障",
      travel: "旅行保险",
      travelDesc: "行程取消、延误和行李丢失的全面保障",
      life: "人寿保险",
      lifeDesc: "通过定期和终身寿险选择保障家人的财务未来",
      seriousIllness: "重大疾病保险",
      seriousIllnessDesc: "面对重大健康状况时的财务保障",
      mission: "我们的使命是在财务保障方面提供智慧和清晰度，帮助加拿大家庭自信、轻松地驾驭复杂的保险世界。",
    },
    pricing: {
      label: "比较与节省",
      title: "探索保险价格",
      description: "比较加拿大所有主要保险公司的保费。选择您的保险类型并输入您的详细信息以查看个性化报价。",
      travelMedical: "旅行医疗",
      travel: "旅行",
      life: "人寿",
      seriousIllness: "重大疾病",
      insuranceSuffix: "保险",
      dateOfBirth: "出生日期",
      selectBirthDate: "选择您的出生日期",
      coverageStart: "保障开始日期",
      selectStartDate: "选择开始日期",
      coverageEnd: "保障结束日期",
      selectEndDate: "选择结束日期",
      coveragePeriod: "保障期限：",
      days: "天",
      comparePrices: "比较价格",
      medicalCoverage: "医疗保障金额 ($)",
      tripCost: "旅行费用 ($)",
      lifeCoverage: "人寿保障金额 ($)",
      criticalCoverage: "重疾保障金额 ($)",
      aboutComparisons: "关于我们的比较",
      trustedPartners: "可信赖的合作伙伴",
      trustedPartnersDesc: "我们比较加拿大最受信赖的保险提供商的费率，包括宏利、永明、蓝十字、加拿大人寿等。",
      accurateEstimates: "准确估算",
      accurateEstimatesDesc: "我们的报价使用真实定价数据计算。最终保费可能因您的完整资料和病史而有所不同。",
    },
    comparison: {
      title: "保险比较结果",
      results: "个结果",
      plan: "计划",
      tier: "等级",
      basePrice: "基础价格",
      dailyRate: "日费率",
      totalPremium: "总保费",
      description: "描述",
      getQuote: "获取报价",
      noPlans: "此保险类型没有可用的计划。",
    },
    signIn: {
      title: "登录",
      subtitle: "欢迎回到慧盈财富",
      email: "电子邮件",
      emailPlaceholder: "输入您的电子邮件",
      password: "密码",
      button: "登录",
      noAccount: "没有账户？",
      createAccount: "创建一个",
    },
    calendar: {
      months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    },
  },
}

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
}

const LanguageContext = React.createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = React.useState<Language>("en")
  const [isHydrated, setIsHydrated] = React.useState(false)

  // Load language from localStorage on mount
  React.useEffect(() => {
    const savedLanguage = localStorage.getItem("wisewin-language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "zh")) {
      setLanguageState(savedLanguage)
    }
    setIsHydrated(true)
  }, [])

  // Save language to localStorage when it changes
  const setLanguage = React.useCallback((lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("wisewin-language", lang)
  }, [])

  const value = React.useMemo(() => ({
    language,
    setLanguage,
    t: translations[language],
  }), [language, setLanguage])

  // Prevent hydration mismatch by rendering children only after hydration
  if (!isHydrated) {
    return (
      <LanguageContext.Provider value={{ language: "en", setLanguage, t: translations.en }}>
        {children}
      </LanguageContext.Provider>
    )
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = React.useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
