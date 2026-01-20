export type InsuranceType = 
  | "travel-medical" 
  | "travel" 
  | "life" 
  | "serious-illness"

export type InsuranceTier = "Basic" | "Standard" | "Premium" | "Elite"

export interface InsurancePlan {
  id: string
  company: string
  planName: string
  tier: InsuranceTier
  description: string
  basePrice: number
  unitPricePerDay: number
  coverageMultiplier: number
  minAge: number
  maxAge: number
  insuranceType: InsuranceType
}

export const insuranceCompanies: InsurancePlan[] = [
  // ==========================================
  // TRAVEL MEDICAL INSURANCE
  // ==========================================
  
  // Manulife Travel Medical Tiers
  {
    id: "manulife-tm-basic",
    company: "Manulife",
    planName: "CoverMe Travel Medical Basic",
    tier: "Basic",
    description: "Essential emergency medical coverage for Canadian travelers abroad. Includes hospital stays, physician services, and emergency transportation. Coverage up to $1M with 24/7 assistance hotline. Ideal for short trips and budget-conscious travelers.",
    basePrice: 18,
    unitPricePerDay: 2.50,
    coverageMultiplier: 0.00003,
    minAge: 0,
    maxAge: 85,
    insuranceType: "travel-medical"
  },
  {
    id: "manulife-tm-standard",
    company: "Manulife",
    planName: "CoverMe Travel Medical Standard",
    tier: "Standard",
    description: "Comprehensive emergency medical coverage with enhanced benefits. Includes all basic coverage plus prescription drugs, diagnostic services, and bedside family member benefit. Coverage up to $5M with trip interruption protection.",
    basePrice: 25,
    unitPricePerDay: 3.50,
    coverageMultiplier: 0.00005,
    minAge: 0,
    maxAge: 85,
    insuranceType: "travel-medical"
  },
  {
    id: "manulife-tm-premium",
    company: "Manulife",
    planName: "CoverMe Travel Medical Premium",
    tier: "Premium",
    description: "Top-tier medical coverage with unlimited emergency medical expenses. Includes all standard benefits plus dental emergencies, pre-existing condition coverage (with stability period), and accidental death benefits. Concierge medical assistance included.",
    basePrice: 40,
    unitPricePerDay: 5.25,
    coverageMultiplier: 0.00008,
    minAge: 0,
    maxAge: 80,
    insuranceType: "travel-medical"
  },

  // Sun Life Travel Medical Tiers
  {
    id: "sunlife-tm-basic",
    company: "Sun Life",
    planName: "Travel Medical Essential",
    tier: "Basic",
    description: "Reliable emergency medical protection from one of Canada's most trusted insurers. Covers hospital admission, emergency surgery, and ambulance services. Up to $2M coverage with straightforward claims process.",
    basePrice: 20,
    unitPricePerDay: 2.75,
    coverageMultiplier: 0.000035,
    minAge: 0,
    maxAge: 80,
    insuranceType: "travel-medical"
  },
  {
    id: "sunlife-tm-standard",
    company: "Sun Life",
    planName: "Travel Medical Protection",
    tier: "Standard",
    description: "Over 150 years of insurance expertise backing comprehensive travel medical coverage. Includes emergency medical, prescription drugs, medical evacuation, and 24/7 global assistance. Worldwide coverage with flexible deductible options.",
    basePrice: 30,
    unitPricePerDay: 3.25,
    coverageMultiplier: 0.000045,
    minAge: 0,
    maxAge: 80,
    insuranceType: "travel-medical"
  },
  {
    id: "sunlife-tm-premium",
    company: "Sun Life",
    planName: "Travel Medical Complete",
    tier: "Premium",
    description: "Maximum protection for peace of mind abroad. Unlimited medical coverage, comprehensive pre-existing condition coverage, adventure sports coverage, and premium concierge services. Includes coverage for COVID-19 related medical expenses.",
    basePrice: 45,
    unitPricePerDay: 5.50,
    coverageMultiplier: 0.00007,
    minAge: 0,
    maxAge: 75,
    insuranceType: "travel-medical"
  },

  // Blue Cross Travel Medical Tiers
  {
    id: "bluecross-tm-basic",
    company: "Blue Cross",
    planName: "Out-of-Province Basic",
    tier: "Basic",
    description: "Affordable travel medical coverage from Canada's leading non-profit health insurer. Essential emergency care, hospital coverage, and medical evacuation. Simple online application with instant coverage confirmation.",
    basePrice: 15,
    unitPricePerDay: 2.25,
    coverageMultiplier: 0.000028,
    minAge: 0,
    maxAge: 89,
    insuranceType: "travel-medical"
  },
  {
    id: "bluecross-tm-standard",
    company: "Blue Cross",
    planName: "Out-of-Province Standard",
    tier: "Standard",
    description: "Non-profit insurer providing excellent value with 24/7 emergency assistance. Covers emergency medical treatment, prescription medications, ground and air ambulance, and return of remains. Flexible coverage periods available.",
    basePrice: 20,
    unitPricePerDay: 2.95,
    coverageMultiplier: 0.00004,
    minAge: 0,
    maxAge: 89,
    insuranceType: "travel-medical"
  },
  {
    id: "bluecross-tm-premium",
    company: "Blue Cross",
    planName: "Out-of-Province Premier",
    tier: "Premium",
    description: "Comprehensive coverage at competitive non-profit rates. All standard benefits plus trip interruption, baggage delay, dental emergencies, and enhanced limits. Pre-existing condition coverage available with 90-day stability period.",
    basePrice: 32,
    unitPricePerDay: 4.25,
    coverageMultiplier: 0.00006,
    minAge: 0,
    maxAge: 85,
    insuranceType: "travel-medical"
  },

  // Allianz Travel Medical Tiers
  {
    id: "allianz-tm-standard",
    company: "Allianz Global",
    planName: "Single Trip Medical",
    tier: "Standard",
    description: "Global insurance leader with extensive network of healthcare providers worldwide. Emergency medical coverage, hospital stays, medical evacuation, and repatriation. Multi-language support available 24/7.",
    basePrice: 35,
    unitPricePerDay: 4.00,
    coverageMultiplier: 0.00006,
    minAge: 0,
    maxAge: 75,
    insuranceType: "travel-medical"
  },
  {
    id: "allianz-tm-premium",
    company: "Allianz Global",
    planName: "Premium Medical Coverage",
    tier: "Premium",
    description: "World-class medical coverage backed by global insurance giant. Unlimited medical expenses, direct billing at partner hospitals, adventure activities coverage, and premium travel assistance. Includes terrorism coverage.",
    basePrice: 55,
    unitPricePerDay: 6.50,
    coverageMultiplier: 0.00009,
    minAge: 0,
    maxAge: 70,
    insuranceType: "travel-medical"
  },

  // TuGo Travel Medical Tiers
  {
    id: "tugo-tm-basic",
    company: "TuGo",
    planName: "Emergency Medical Basic",
    tier: "Basic",
    description: "Canadian travel insurance specialist with award-winning customer service. Essential emergency medical coverage, ambulance services, and medical referrals. Fast claims processing with no upfront payment required at network hospitals.",
    basePrice: 16,
    unitPricePerDay: 2.40,
    coverageMultiplier: 0.000032,
    minAge: 0,
    maxAge: 84,
    insuranceType: "travel-medical"
  },
  {
    id: "tugo-tm-standard",
    company: "TuGo",
    planName: "Emergency Medical Insurance",
    tier: "Standard",
    description: "Award-winning claims service with comprehensive medical coverage. Includes emergency treatment, hospital care, prescription drugs, and medical evacuation. Covers COVID-19 and offers stability period options for pre-existing conditions.",
    basePrice: 22,
    unitPricePerDay: 3.10,
    coverageMultiplier: 0.000048,
    minAge: 0,
    maxAge: 84,
    insuranceType: "travel-medical"
  },
  {
    id: "tugo-tm-premium",
    company: "TuGo",
    planName: "Emergency Medical Premier",
    tier: "Premium",
    description: "Premium protection from Canada's travel insurance experts. Enhanced medical limits, comprehensive pre-existing coverage, trip interruption, and premium concierge services. Includes sports and adventure activities up to $10M coverage.",
    basePrice: 38,
    unitPricePerDay: 4.80,
    coverageMultiplier: 0.00007,
    minAge: 0,
    maxAge: 79,
    insuranceType: "travel-medical"
  },

  // ==========================================
  // TRAVEL INSURANCE (All-inclusive)
  // ==========================================

  // Manulife Travel Insurance Tiers
  {
    id: "manulife-t-basic",
    company: "Manulife",
    planName: "Travel Package Basic",
    tier: "Basic",
    description: "Essential trip protection covering cancellation, interruption, and basic medical emergencies. Includes baggage loss coverage up to $1,000 and 24/7 travel assistance. Perfect for domestic trips and short getaways.",
    basePrice: 30,
    unitPricePerDay: 3.50,
    coverageMultiplier: 0.00005,
    minAge: 0,
    maxAge: 85,
    insuranceType: "travel"
  },
  {
    id: "manulife-t-standard",
    company: "Manulife",
    planName: "All-Inclusive Travel Package",
    tier: "Standard",
    description: "Complete travel protection including trip cancellation up to $10,000, trip interruption, baggage loss up to $2,500, and comprehensive emergency medical. Flight delay and missed connection coverage included.",
    basePrice: 45,
    unitPricePerDay: 5.50,
    coverageMultiplier: 0.00008,
    minAge: 0,
    maxAge: 85,
    insuranceType: "travel"
  },
  {
    id: "manulife-t-premium",
    company: "Manulife",
    planName: "Premium Travel Protection",
    tier: "Premium",
    description: "Maximum trip investment protection with cancel-for-any-reason option. Covers trip cancellation up to $25,000, comprehensive medical, baggage up to $5,000, and premium concierge services. Includes rental car coverage.",
    basePrice: 75,
    unitPricePerDay: 8.50,
    coverageMultiplier: 0.00012,
    minAge: 0,
    maxAge: 80,
    insuranceType: "travel"
  },

  // Sun Life Travel Insurance Tiers
  {
    id: "sunlife-t-basic",
    company: "Sun Life",
    planName: "Journey Travel Basic",
    tier: "Basic",
    description: "Reliable trip protection from Canada's trusted insurer. Trip cancellation and interruption coverage, basic medical emergencies, and baggage protection. Simple claims process with dedicated support team.",
    basePrice: 32,
    unitPricePerDay: 3.75,
    coverageMultiplier: 0.000055,
    minAge: 0,
    maxAge: 80,
    insuranceType: "travel"
  },
  {
    id: "sunlife-t-standard",
    company: "Sun Life",
    planName: "Journey Travel Insurance",
    tier: "Standard",
    description: "Comprehensive travel coverage with 150+ years of insurance expertise. Trip cancellation, delay protection, worldwide emergency assistance, and robust medical coverage. Covers pre-departure cancellation for any covered reason.",
    basePrice: 50,
    unitPricePerDay: 5.25,
    coverageMultiplier: 0.000075,
    minAge: 0,
    maxAge: 80,
    insuranceType: "travel"
  },
  {
    id: "sunlife-t-premium",
    company: "Sun Life",
    planName: "Journey Travel Elite",
    tier: "Elite",
    description: "Our most comprehensive travel package with cancel-for-any-reason coverage. Unlimited trip cancellation, premium medical coverage, luxury baggage protection, and VIP concierge services. Includes adventure sports and COVID-19 coverage.",
    basePrice: 85,
    unitPricePerDay: 9.00,
    coverageMultiplier: 0.00013,
    minAge: 0,
    maxAge: 75,
    insuranceType: "travel"
  },

  // RBC Travel Insurance Tiers
  {
    id: "rbc-t-basic",
    company: "RBC Insurance",
    planName: "Trip Protection Basic",
    tier: "Basic",
    description: "Bank-backed travel protection with easy integration for RBC customers. Essential trip cancellation, basic medical coverage, and baggage protection. Seamless claims through RBC banking app.",
    basePrice: 28,
    unitPricePerDay: 3.25,
    coverageMultiplier: 0.00005,
    minAge: 18,
    maxAge: 79,
    insuranceType: "travel"
  },
  {
    id: "rbc-t-standard",
    company: "RBC Insurance",
    planName: "Trip Protection Plan",
    tier: "Standard",
    description: "Comprehensive trip protection from one of Canada's largest banks. Includes trip cancellation, interruption, baggage coverage, and emergency medical. Special rates for RBC credit card holders.",
    basePrice: 40,
    unitPricePerDay: 4.80,
    coverageMultiplier: 0.00007,
    minAge: 18,
    maxAge: 79,
    insuranceType: "travel"
  },
  {
    id: "rbc-t-premium",
    company: "RBC Insurance",
    planName: "Trip Protection Premium",
    tier: "Premium",
    description: "Premium travel coverage with enhanced limits and exclusive RBC benefits. High-limit trip cancellation, comprehensive medical, premium baggage coverage, and dedicated claims concierge. Rental car and pet care coverage included.",
    basePrice: 65,
    unitPricePerDay: 7.50,
    coverageMultiplier: 0.0001,
    minAge: 18,
    maxAge: 75,
    insuranceType: "travel"
  },

  // TD Travel Insurance Tiers
  {
    id: "td-t-basic",
    company: "TD Insurance",
    planName: "Travel Insurance Basic",
    tier: "Basic",
    description: "Simple, affordable trip protection from TD. Essential coverage for trip cancellation, basic emergencies, and baggage. Easy online purchase and claims submission through TD app.",
    basePrice: 30,
    unitPricePerDay: 3.50,
    coverageMultiplier: 0.000052,
    minAge: 18,
    maxAge: 80,
    insuranceType: "travel"
  },
  {
    id: "td-t-standard",
    company: "TD Insurance",
    planName: "Travel Insurance Package",
    tier: "Standard",
    description: "Flexible travel coverage from one of Canada's largest banks. Options for single trips or annual coverage, comprehensive medical, and generous cancellation benefits. Complements TD credit card travel benefits.",
    basePrice: 42,
    unitPricePerDay: 5.00,
    coverageMultiplier: 0.000072,
    minAge: 18,
    maxAge: 80,
    insuranceType: "travel"
  },
  {
    id: "td-t-premium",
    company: "TD Insurance",
    planName: "Travel Insurance Complete",
    tier: "Premium",
    description: "TD's most comprehensive travel package. Maximum trip investment protection, premium medical coverage worldwide, enhanced baggage limits, and exclusive TD benefits. Includes annual multi-trip option.",
    basePrice: 68,
    unitPricePerDay: 7.75,
    coverageMultiplier: 0.000105,
    minAge: 18,
    maxAge: 75,
    insuranceType: "travel"
  },

  // TuGo Travel Insurance Tiers
  {
    id: "tugo-t-basic",
    company: "TuGo",
    planName: "Trip Cancellation Basic",
    tier: "Basic",
    description: "Specialist trip cancellation coverage with generous covered reasons. Basic trip cost protection, essential medical, and baggage coverage. Award-winning customer service and fast claims.",
    basePrice: 25,
    unitPricePerDay: 3.00,
    coverageMultiplier: 0.000045,
    minAge: 0,
    maxAge: 84,
    insuranceType: "travel"
  },
  {
    id: "tugo-t-standard",
    company: "TuGo",
    planName: "Trip Cancellation Plus",
    tier: "Standard",
    description: "Specialized trip cancellation with high coverage limits. Generous cancellation reasons, comprehensive trip interruption, baggage protection, and robust medical coverage. No deductibles on most claims.",
    basePrice: 38,
    unitPricePerDay: 4.50,
    coverageMultiplier: 0.00006,
    minAge: 0,
    maxAge: 84,
    insuranceType: "travel"
  },
  {
    id: "tugo-t-premium",
    company: "TuGo",
    planName: "Trip Cancellation Premier",
    tier: "Premium",
    description: "TuGo's premium trip protection with cancel-for-any-reason option. Maximum trip investment coverage, comprehensive medical, and premium travel assistance. Covers adventure travel and special events.",
    basePrice: 58,
    unitPricePerDay: 6.75,
    coverageMultiplier: 0.00009,
    minAge: 0,
    maxAge: 79,
    insuranceType: "travel"
  },

  // ==========================================
  // LIFE INSURANCE
  // ==========================================

  // Manulife Life Insurance Tiers
  {
    id: "manulife-l-basic",
    company: "Manulife",
    planName: "Term Life Basic",
    tier: "Basic",
    description: "Affordable term life protection from Canada's largest life insurer. 10-year term with guaranteed level premiums. Coverage from $100,000 with simple application process and quick approval.",
    basePrice: 100,
    unitPricePerDay: 0.18,
    coverageMultiplier: 0.00002,
    minAge: 18,
    maxAge: 70,
    insuranceType: "life"
  },
  {
    id: "manulife-l-standard",
    company: "Manulife",
    planName: "Term Life Coverage",
    tier: "Standard",
    description: "Flexible term life policies with competitive premiums from Canada's largest insurer. 10, 20, or 30-year terms available. Includes conversion privilege and living benefits option. Coverage up to $5M.",
    basePrice: 150,
    unitPricePerDay: 0.25,
    coverageMultiplier: 0.00003,
    minAge: 18,
    maxAge: 70,
    insuranceType: "life"
  },
  {
    id: "manulife-l-premium",
    company: "Manulife",
    planName: "Term Life Premium",
    tier: "Premium",
    description: "Comprehensive term life with enhanced features. Includes accelerated death benefit, child rider option, and premium waiver for disability. Preferred rates for healthy individuals. Coverage up to $10M.",
    basePrice: 200,
    unitPricePerDay: 0.35,
    coverageMultiplier: 0.00004,
    minAge: 18,
    maxAge: 65,
    insuranceType: "life"
  },

  // Sun Life Life Insurance Tiers
  {
    id: "sunlife-l-basic",
    company: "Sun Life",
    planName: "SunTerm Basic",
    tier: "Basic",
    description: "Simple term life protection with 150+ years of Sun Life stability. 10-year term with guaranteed premiums. Easy application with quick decisions for qualified applicants.",
    basePrice: 95,
    unitPricePerDay: 0.17,
    coverageMultiplier: 0.000019,
    minAge: 18,
    maxAge: 65,
    insuranceType: "life"
  },
  {
    id: "sunlife-l-standard",
    company: "Sun Life",
    planName: "SunTerm Life",
    tier: "Standard",
    description: "Affordable term life insurance with optional living benefits and guaranteed renewal. Multiple term options with conversion privilege. Includes waiver of premium and child term rider options.",
    basePrice: 145,
    unitPricePerDay: 0.24,
    coverageMultiplier: 0.000028,
    minAge: 18,
    maxAge: 65,
    insuranceType: "life"
  },
  {
    id: "sunlife-l-premium",
    company: "Sun Life",
    planName: "SunTerm Elite",
    tier: "Premium",
    description: "Premium term life with comprehensive benefits package. Accelerated death benefit, enhanced conversion options, and preferred plus rates. Includes family protection riders and guaranteed insurability option.",
    basePrice: 195,
    unitPricePerDay: 0.33,
    coverageMultiplier: 0.000038,
    minAge: 18,
    maxAge: 60,
    insuranceType: "life"
  },

  // Canada Life Life Insurance Tiers
  {
    id: "canadalife-l-basic",
    company: "Canada Life",
    planName: "My Term Basic",
    tier: "Basic",
    description: "Straightforward term life coverage from a leading Canadian insurer. 10-year guaranteed term with simple pricing. Online application with instant decision for many applicants.",
    basePrice: 90,
    unitPricePerDay: 0.16,
    coverageMultiplier: 0.000022,
    minAge: 18,
    maxAge: 75,
    insuranceType: "life"
  },
  {
    id: "canadalife-l-standard",
    company: "Canada Life",
    planName: "My Term Life",
    tier: "Standard",
    description: "Simplified application process with flexible coverage options from a leading insurer. 10, 20, or 30-year terms. Includes conversion to permanent insurance and disability waiver options.",
    basePrice: 140,
    unitPricePerDay: 0.23,
    coverageMultiplier: 0.000032,
    minAge: 18,
    maxAge: 75,
    insuranceType: "life"
  },
  {
    id: "canadalife-l-premium",
    company: "Canada Life",
    planName: "My Term Premium",
    tier: "Premium",
    description: "Enhanced term life with additional riders and benefits. Critical illness conversion, children's term rider, and guaranteed insurability. Elite rates for preferred health status.",
    basePrice: 185,
    unitPricePerDay: 0.31,
    coverageMultiplier: 0.000042,
    minAge: 18,
    maxAge: 70,
    insuranceType: "life"
  },

  // Desjardins Life Insurance Tiers
  {
    id: "desjardins-l-basic",
    company: "Desjardins Insurance",
    planName: "Momentum Term Basic",
    tier: "Basic",
    description: "Competitive term rates from Quebec's trusted cooperative insurer. Simple 10-year term with level premiums. Member dividends may apply for cooperative members.",
    basePrice: 85,
    unitPricePerDay: 0.15,
    coverageMultiplier: 0.00002,
    minAge: 18,
    maxAge: 70,
    insuranceType: "life"
  },
  {
    id: "desjardins-l-standard",
    company: "Desjardins Insurance",
    planName: "Momentum Term",
    tier: "Standard",
    description: "Quebec-based cooperative insurer with strong customer service and competitive rates. Flexible terms with conversion privilege. Includes accidental death benefit and waiver of premium.",
    basePrice: 135,
    unitPricePerDay: 0.22,
    coverageMultiplier: 0.000029,
    minAge: 18,
    maxAge: 70,
    insuranceType: "life"
  },
  {
    id: "desjardins-l-premium",
    company: "Desjardins Insurance",
    planName: "Momentum Term Plus",
    tier: "Premium",
    description: "Enhanced term life with cooperative benefits. Includes critical illness rider, child protection, and return of premium option. Competitive rates with potential member dividends.",
    basePrice: 175,
    unitPricePerDay: 0.29,
    coverageMultiplier: 0.000038,
    minAge: 18,
    maxAge: 65,
    insuranceType: "life"
  },

  // Empire Life Life Insurance Tiers
  {
    id: "empire-l-basic",
    company: "Empire Life",
    planName: "E-Term Basic",
    tier: "Basic",
    description: "Canadian-owned insurer offering simplified underwriting. Quick approval term life with competitive rates. Online application with minimal health questions for qualified applicants.",
    basePrice: 88,
    unitPricePerDay: 0.15,
    coverageMultiplier: 0.000021,
    minAge: 18,
    maxAge: 65,
    insuranceType: "life"
  },
  {
    id: "empire-l-standard",
    company: "Empire Life",
    planName: "E-Term Life",
    tier: "Standard",
    description: "Quick approval process with simplified underwriting from Canadian-owned Empire Life. Multiple term lengths available with guaranteed conversion. Includes living benefit option.",
    basePrice: 130,
    unitPricePerDay: 0.21,
    coverageMultiplier: 0.000031,
    minAge: 18,
    maxAge: 65,
    insuranceType: "life"
  },
  {
    id: "empire-l-premium",
    company: "Empire Life",
    planName: "E-Term Premium",
    tier: "Premium",
    description: "Comprehensive term life with enhanced underwriting for best rates. Includes child term rider, disability waiver, and accelerated death benefit. Competitive rates for healthy Canadians.",
    basePrice: 170,
    unitPricePerDay: 0.28,
    coverageMultiplier: 0.00004,
    minAge: 18,
    maxAge: 60,
    insuranceType: "life"
  },

  // ==========================================
  // SERIOUS ILLNESS INSURANCE
  // ==========================================

  // Manulife Serious Illness Tiers
  {
    id: "manulife-si-basic",
    company: "Manulife",
    planName: "Critical Illness Basic",
    tier: "Basic",
    description: "Essential critical illness protection covering the 4 most common conditions: heart attack, stroke, cancer, and coronary bypass surgery. Tax-free lump sum payment upon diagnosis. Simple application process.",
    basePrice: 140,
    unitPricePerDay: 0.32,
    coverageMultiplier: 0.000028,
    minAge: 18,
    maxAge: 65,
    insuranceType: "serious-illness"
  },
  {
    id: "manulife-si-standard",
    company: "Manulife",
    planName: "Critical Illness Essential",
    tier: "Standard",
    description: "Comprehensive critical illness coverage with tax-free lump sum payment upon diagnosis. Covers 25+ conditions including cancer, heart attack, and stroke. Includes survival period flexibility and return of premium option.",
    basePrice: 200,
    unitPricePerDay: 0.45,
    coverageMultiplier: 0.00004,
    minAge: 18,
    maxAge: 65,
    insuranceType: "serious-illness"
  },
  {
    id: "manulife-si-premium",
    company: "Manulife",
    planName: "Critical Illness Complete",
    tier: "Premium",
    description: "Maximum critical illness protection covering 26+ conditions with enhanced benefits. Includes partial payouts for less severe conditions, best doctors service, and guaranteed return of premium at age 75.",
    basePrice: 280,
    unitPricePerDay: 0.62,
    coverageMultiplier: 0.000055,
    minAge: 18,
    maxAge: 60,
    insuranceType: "serious-illness"
  },

  // Sun Life Serious Illness Tiers
  {
    id: "sunlife-si-basic",
    company: "Sun Life",
    planName: "Critical Illness Basic",
    tier: "Basic",
    description: "Essential protection for life's major health events. Covers cancer, heart attack, stroke, and coronary artery bypass. Quick payout upon diagnosis with simple claims process.",
    basePrice: 145,
    unitPricePerDay: 0.33,
    coverageMultiplier: 0.00003,
    minAge: 18,
    maxAge: 64,
    insuranceType: "serious-illness"
  },
  {
    id: "sunlife-si-standard",
    company: "Sun Life",
    planName: "Critical Illness Plus",
    tier: "Standard",
    description: "Coverage for 26 critical conditions with return of premium option and survival period flexibility. Includes partial benefit for early-stage conditions and recovery benefit for covered illnesses.",
    basePrice: 210,
    unitPricePerDay: 0.48,
    coverageMultiplier: 0.000042,
    minAge: 18,
    maxAge: 64,
    insuranceType: "serious-illness"
  },
  {
    id: "sunlife-si-elite",
    company: "Sun Life",
    planName: "Critical Illness Elite",
    tier: "Elite",
    description: "Sun Life's most comprehensive critical illness coverage. 26+ conditions with enhanced early-stage benefits, multiple payout options, and guaranteed return of premium. Includes best doctors second opinion service.",
    basePrice: 295,
    unitPricePerDay: 0.65,
    coverageMultiplier: 0.000058,
    minAge: 18,
    maxAge: 60,
    insuranceType: "serious-illness"
  },

  // Canada Life Serious Illness Tiers
  {
    id: "canadalife-si-basic",
    company: "Canada Life",
    planName: "CI Protection Basic",
    tier: "Basic",
    description: "Straightforward critical illness coverage for major conditions. Covers heart attack, stroke, cancer, and bypass surgery. Tax-free benefit paid directly to you upon diagnosis.",
    basePrice: 135,
    unitPricePerDay: 0.30,
    coverageMultiplier: 0.000027,
    minAge: 18,
    maxAge: 70,
    insuranceType: "serious-illness"
  },
  {
    id: "canadalife-si-standard",
    company: "Canada Life",
    planName: "CI Protection",
    tier: "Standard",
    description: "Critical illness protection with coverage for heart attack, stroke, cancer, and 20+ other serious conditions. Includes partial payout for less severe conditions and conversion to permanent coverage option.",
    basePrice: 195,
    unitPricePerDay: 0.43,
    coverageMultiplier: 0.000038,
    minAge: 18,
    maxAge: 70,
    insuranceType: "serious-illness"
  },
  {
    id: "canadalife-si-premium",
    company: "Canada Life",
    planName: "CI Protection Plus",
    tier: "Premium",
    description: "Enhanced critical illness with comprehensive condition coverage. Includes early intervention benefit, recovery benefit, and return of premium guarantee. Best doctors service included.",
    basePrice: 265,
    unitPricePerDay: 0.58,
    coverageMultiplier: 0.000052,
    minAge: 18,
    maxAge: 65,
    insuranceType: "serious-illness"
  },

  // Desjardins Serious Illness Tiers
  {
    id: "desjardins-si-basic",
    company: "Desjardins Insurance",
    planName: "Access Critical Basic",
    tier: "Basic",
    description: "Simplified issue critical illness with no medical exam for basic coverage. Covers 4 major conditions with quick approval. Ideal for those seeking straightforward protection.",
    basePrice: 120,
    unitPricePerDay: 0.27,
    coverageMultiplier: 0.000024,
    minAge: 18,
    maxAge: 60,
    insuranceType: "serious-illness"
  },
  {
    id: "desjardins-si-standard",
    company: "Desjardins Insurance",
    planName: "Access Critical Illness",
    tier: "Standard",
    description: "Simplified issue critical illness insurance with no medical exam required. Quick approval process with coverage for 18+ conditions. Cooperative benefits may apply for members.",
    basePrice: 180,
    unitPricePerDay: 0.40,
    coverageMultiplier: 0.000035,
    minAge: 18,
    maxAge: 60,
    insuranceType: "serious-illness"
  },
  {
    id: "desjardins-si-premium",
    company: "Desjardins Insurance",
    planName: "Access Critical Plus",
    tier: "Premium",
    description: "Comprehensive critical illness with cooperative benefits. Covers 25+ conditions with partial early-stage payouts. Return of premium option and conversion privilege included.",
    basePrice: 245,
    unitPricePerDay: 0.54,
    coverageMultiplier: 0.000048,
    minAge: 18,
    maxAge: 55,
    insuranceType: "serious-illness"
  },

  // Industrial Alliance Serious Illness Tiers
  {
    id: "industrial-si-basic",
    company: "Industrial Alliance",
    planName: "Transition CI Basic",
    tier: "Basic",
    description: "Affordable critical illness from Quebec's Industrial Alliance. Essential 4-condition coverage with flexible payment options. Simple application with quick decisions.",
    basePrice: 115,
    unitPricePerDay: 0.26,
    coverageMultiplier: 0.000025,
    minAge: 18,
    maxAge: 65,
    insuranceType: "serious-illness"
  },
  {
    id: "industrial-si-standard",
    company: "Industrial Alliance",
    planName: "Transition Critical Illness",
    tier: "Standard",
    description: "Quebec-based insurer offering competitive critical illness rates with flexible payment options. Covers 24 conditions with survival period options and return of premium available.",
    basePrice: 175,
    unitPricePerDay: 0.38,
    coverageMultiplier: 0.000036,
    minAge: 18,
    maxAge: 65,
    insuranceType: "serious-illness"
  },
  {
    id: "industrial-si-premium",
    company: "Industrial Alliance",
    planName: "Transition CI Enhanced",
    tier: "Premium",
    description: "Enhanced critical illness with comprehensive coverage. 26+ conditions with partial early-stage benefits, recovery bonus, and guaranteed return of premium. Competitive rates for all ages.",
    basePrice: 240,
    unitPricePerDay: 0.52,
    coverageMultiplier: 0.00005,
    minAge: 18,
    maxAge: 60,
    insuranceType: "serious-illness"
  }
]

export function calculatePremium(
  plan: InsurancePlan,
  age: number,
  days: number,
  coverageAmount: number
): { basePrice: number; dailyTotal: number; coverageTotal: number; totalPrice: number } {
  const ageFactor = 1 + (Math.max(0, age - 30) * 0.02)
  const basePrice = plan.basePrice * ageFactor
  const dailyTotal = plan.unitPricePerDay * days * ageFactor
  const coverageTotal = coverageAmount * plan.coverageMultiplier * ageFactor
  const totalPrice = basePrice + dailyTotal + coverageTotal

  return {
    basePrice: Math.round(basePrice * 100) / 100,
    dailyTotal: Math.round(dailyTotal * 100) / 100,
    coverageTotal: Math.round(coverageTotal * 100) / 100,
    totalPrice: Math.round(totalPrice * 100) / 100
  }
}

export function getPlansForType(type: InsuranceType): InsurancePlan[] {
  return insuranceCompanies.filter(plan => plan.insuranceType === type)
}
