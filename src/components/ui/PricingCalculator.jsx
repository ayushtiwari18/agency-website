import { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Sun, Moon, RotateCcw, ArrowRight, Check, Info } from 'lucide-react'

const PROJECT_TYPES = [
  { label: 'Simple/Portfolio', pts: 10, description: 'Basic layouts, static sites, personal portfolios.' },
  { label: 'Modern SMB', pts: 22, description: 'Standard business sites, custom designs, lead generation.' },
  { label: 'Premium/E-commerce', pts: 40, description: 'Full-featured web apps, shops, or complex platforms.' },
]

const DESIGN_STYLES = [
  { label: 'Template-based', pts: 4, description: 'Tailored premium templates for speed.' },
  { label: 'Semi-Custom', pts: 9, description: 'Customized layout structures and assets.' },
  { label: 'Fully Custom', pts: 16, description: 'Bespoke designs built from scratch.' },
]

const PAGE_RANGES = [
  { label: '1–3 Pages', pts: 3, description: 'Ideal for landing pages, simple portfolios, or launch sites.' },
  { label: '4–6 Pages', pts: 6, description: 'Standard business profiles, services lists, and testimonials.' },
  { label: '7–12 Pages', pts: 11, description: 'Rich content, small blogs, or detailed service catalogs.' },
  { label: '13–20 Pages', pts: 18, description: 'Corporate sites with multiple service profiles or products.' },
  { label: '20+ Pages', pts: 26, description: 'Enterprise portals, extensive catalogs, or dynamic pages.' },
]

const CONTENT_OWNERSHIP_OPTIONS = [
  { label: 'Client Supplies Copy', pts: 0, description: 'You provide all text and assets.' },
  { label: 'We Edit & Structure', pts: 4, description: 'We refine and organize your draft copy.' },
  { label: 'We Write All Content', pts: 9, description: 'Bespoke copywriting from scratch.' },
]

const SEO_SCOPE_OPTIONS = [
  { label: 'No SEO', pts: 0, description: 'No SEO configuration requested.' },
  { label: 'Basic On-page SEO', pts: 5, description: 'Meta tags, heading structure, alt text, and sitemap.' },
  { label: 'On-page + Technical SEO', pts: 10, description: 'Core Web Vitals tuning, schema markup, performance.' },
  { label: 'Local + Technical SEO', pts: 13, description: 'Google Business Profile, local keyword tuning, schema.' },
]

const DEPLOYMENT_OPTIONS = [
  { label: 'Client Handles Hosting', pts: 0, description: 'You deploy the code to your own infrastructure.' },
  { label: 'We Set Up Hosting', pts: 4, description: 'Vercel, Netlify, or hosting account configuration.' },
  { label: 'Managed Infrastructure', pts: 9, description: 'Complete VPS setup, domains, SSL, database provisioning.' },
]

const FEATURES_LIST = [
  { id: 'auth', label: 'Login/Auth', pts: 9, description: 'Secure user registration, login, profile management, and sessions.' },
  { id: 'payments', label: 'Payments/Stripe', pts: 12, description: 'Stripe integration for credit cards, invoices, or subscriptions.' },
  { id: 'cms', label: 'CMS Panel', pts: 7, description: 'Admin panel (Sanity, Strapi, or Custom) to edit site content.' },
  { id: 'booking', label: 'Booking System', pts: 9, description: 'Scheduling integrations with Cal.com, Calendly, or custom booking forms.' },
  { id: 'animations', label: 'Rich Animations', pts: 5, description: 'Framer Motion animations, page transitions, and smooth scroll effects.' },
  { id: 'apis', label: '3rd-party APIs', pts: 7, description: 'Connect to external platforms like Salesforce, HubSpot, Mailchimp.' },
]

const TIMELINES = [
  { label: 'Flexible (4–6 wks)', pts: 0, description: 'Standard timeline with thorough design and reviews.' },
  { label: 'Rush (2–3 wks)', pts: 7, modifier: '+7 pts', description: 'Accelerated development sprint with priority scheduling.' },
  { label: 'Urgent (<2 wks)', pts: 15, modifier: '+15 pts', description: 'Express fast-track development. Dedicated resources for immediate launch.' },
]

export default function PricingCalculator() {
  const [isDark, setIsDark] = useState(false)
  const [projectType, setProjectType] = useState(10)
  const [designStyle, setDesignStyle] = useState(4)
  const [pages, setPages] = useState(3)
  const [contentOwnership, setContentOwnership] = useState(0)
  const [seoScope, setSeoScope] = useState(0)
  const [deployment, setDeployment] = useState(0)
  const [features, setFeatures] = useState([])
  const [timeline, setTimeline] = useState(0)
  const [rate] = useState(550)
  const [isFlashing, setIsFlashing] = useState(false)

  const toggleFeature = (id) => {
    if (features.includes(id)) {
      setFeatures(features.filter((f) => f !== id))
    } else {
      setFeatures([...features, id])
    }
  }

  const handleReset = () => {
    setProjectType(10)
    setDesignStyle(4)
    setPages(3)
    setContentOwnership(0)
    setSeoScope(0)
    setDeployment(0)
    setFeatures([])
    setTimeline(0)
  }

  // Points and Price Calculations
  const totalPoints = useMemo(() => {
    const featuresPoints = FEATURES_LIST.filter(f => features.includes(f.id)).reduce((sum, f) => sum + f.pts, 0)
    return projectType + designStyle + pages + contentOwnership + seoScope + deployment + featuresPoints + timeline
  }, [projectType, designStyle, pages, contentOwnership, seoScope, deployment, features, timeline])

  const basePrice = totalPoints * rate
  const quote = Math.round(basePrice / 100) * 100
  const rangeLow = Math.round((quote * 0.8) / 100) * 100
  const rangeHigh = Math.round((quote * 1.2) / 100) * 100

  // Trigger flash animation on quote update
  useEffect(() => {
    setIsFlashing(true)
    const t = setTimeout(() => setIsFlashing(false), 300)
    return () => clearTimeout(t)
  }, [quote])

  // Helper to compile state summary for the contact form
  const getCalculatorSummary = () => {
    const pType = PROJECT_TYPES.find(t => t.pts === projectType)?.label
    const dStyle = DESIGN_STYLES.find(s => s.pts === designStyle)?.label
    const pRange = PAGE_RANGES.find(p => p.pts === pages)?.label
    const cOwnership = CONTENT_OWNERSHIP_OPTIONS.find(o => o.pts === contentOwnership)?.label
    const seo = SEO_SCOPE_OPTIONS.find(s => s.pts === seoScope)?.label
    const dep = DEPLOYMENT_OPTIONS.find(d => d.pts === deployment)?.label
    const selectedFeatures = FEATURES_LIST.filter(f => features.includes(f.id)).map(f => f.label).join(', ') || 'None'
    const tLine = TIMELINES.find(t => t.pts === timeline)?.label

    return `Estimated Quote: ₹${quote.toLocaleString('en-IN')}\n\nProject Configuration:\n- Project Type: ${pType}\n- Design Style: ${dStyle}\n- Pages: ${pRange}\n- Content Ownership: ${cOwnership}\n- SEO Scope: ${seo}\n- Deployment & Hosting: ${dep}\n- Selected Features: ${selectedFeatures}\n- Timeline: ${tLine}\n- Points: ${totalPoints}\n- Rate: ₹${rate}/pt`
  }

  const formatCurrency = (val) => {
    return '₹' + val.toLocaleString('en-IN')
  }

  return (
    <div className={`transition-colors duration-300 w-full mx-auto rounded-3xl border shadow-xl ${
      isDark 
        ? 'bg-brand-black text-white border-brand-gray-800' 
        : 'bg-white text-brand-black border-brand-gray-200'
    }`}>
      {/* Header */}
      <div className={`px-6 py-5 flex items-center justify-between border-b rounded-t-[22px] ${
        isDark ? 'border-brand-gray-800 bg-brand-gray-900/30' : 'border-brand-gray-100 bg-brand-gray-50/50'
      }`}>
        <div>
          <span className="text-[10px] font-bold tracking-widest uppercase text-teal-500">T&amp;J Creates</span>
          <h2 className="text-xl font-bold tracking-tight mt-0.5">Calculate your own price</h2>
          <p className={`text-xs mt-0.5 ${isDark ? 'text-brand-gray-400' : 'text-brand-gray-500'}`}>
            Get your prices according to the requirement
          </p>
        </div>
        <button
          onClick={() => setIsDark(!isDark)}
          className={`p-2.5 rounded-full border transition-all hover:scale-105 active:scale-95 ${
            isDark 
              ? 'border-brand-gray-800 hover:bg-brand-gray-900 text-teal-400' 
              : 'border-brand-gray-200 hover:bg-brand-gray-100 text-brand-gray-600'
          }`}
          aria-label="Toggle dark mode"
        >
          {isDark ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
        {/* Left Side: Selectors */}
        <div className={`p-6 md:p-8 lg:col-span-3 space-y-6 ${
          isDark ? 'border-b lg:border-b-0 lg:border-r border-brand-gray-800' : 'border-b lg:border-b-0 lg:border-r border-brand-gray-100'
        }`}>
          {/* 1. Project Type */}
          <div>
            <label className={`block text-xs font-semibold uppercase tracking-wider mb-2.5 ${
              isDark ? 'text-brand-gray-400' : 'text-brand-gray-500'
            }`}>
              Project Type
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {PROJECT_TYPES.map((type) => {
                const active = projectType === type.pts
                return (
                  <button
                    key={type.label}
                    onClick={() => setProjectType(type.pts)}
                    className={`group relative text-left p-3.5 rounded-xl border text-xs transition-all ${
                      active
                        ? isDark
                          ? 'border-teal-500 bg-teal-950/20 text-teal-300 ring-1 ring-teal-500/20'
                          : 'border-teal-600 bg-teal-50/60 text-teal-800 ring-1 ring-teal-600/20'
                        : isDark
                          ? 'border-brand-gray-800 bg-brand-gray-900/20 text-brand-gray-300 hover:border-brand-gray-700'
                          : 'border-brand-gray-200 bg-white text-brand-gray-600 hover:border-brand-gray-300'
                    }`}
                  >
                    {/* Tooltip */}
                    <div className={`absolute z-30 bottom-full left-1/2 -translate-x-1/2 mb-2.5 w-60 p-3 rounded-xl shadow-xl border pointer-events-none opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-200 transform translate-y-1 group-hover:translate-y-0 text-left font-normal normal-case tracking-normal ${
                      isDark 
                        ? 'bg-brand-gray-900 text-brand-gray-200 border-brand-gray-700 shadow-brand-black/50' 
                        : 'bg-brand-black text-brand-gray-100 border-brand-gray-800 shadow-brand-black/10'
                    }`}>
                      <div className="font-bold text-[11px] mb-1 text-teal-400 flex justify-between items-center">
                        <span>{type.label}</span>
                        <span className="text-[9px] font-mono text-brand-gray-400">{type.pts} pts</span>
                      </div>
                      <p className="text-[10px] leading-relaxed text-brand-gray-300">{type.description}</p>
                      <div className={`absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent ${
                        isDark ? 'border-t-brand-gray-900' : 'border-t-brand-black'
                      }`} />
                    </div>

                    <div className="font-bold flex items-center justify-between">
                      <span>{type.label}</span>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                        active 
                          ? 'bg-teal-500/10 text-teal-400' 
                          : isDark ? 'bg-brand-gray-800 text-brand-gray-400' : 'bg-brand-gray-100 text-brand-gray-500'
                      }`}>{type.pts} pts</span>
                    </div>
                    <p className={`mt-1.5 leading-snug font-normal ${
                      isDark ? 'text-brand-gray-400' : 'text-brand-gray-500'
                    }`}>{type.description}</p>
                  </button>
                )
              })}
            </div>
          </div>

          {/* 2. Design Style */}
          <div>
            <label className={`block text-xs font-semibold uppercase tracking-wider mb-2.5 ${
              isDark ? 'text-brand-gray-400' : 'text-brand-gray-500'
            }`}>
              Design Style
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {DESIGN_STYLES.map((style) => {
                const active = designStyle === style.pts
                return (
                  <button
                    key={style.label}
                    onClick={() => setDesignStyle(style.pts)}
                    className={`group relative text-left p-3.5 rounded-xl border text-xs transition-all ${
                      active
                        ? isDark
                          ? 'border-teal-500 bg-teal-950/20 text-teal-300 ring-1 ring-teal-500/20'
                          : 'border-teal-600 bg-teal-50/60 text-teal-800 ring-1 ring-teal-600/20'
                        : isDark
                          ? 'border-brand-gray-800 bg-brand-gray-900/20 text-brand-gray-300 hover:border-brand-gray-700'
                          : 'border-brand-gray-200 bg-white text-brand-gray-600 hover:border-brand-gray-300'
                    }`}
                  >
                    {/* Tooltip */}
                    <div className={`absolute z-30 bottom-full left-1/2 -translate-x-1/2 mb-2.5 w-60 p-3 rounded-xl shadow-xl border pointer-events-none opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-200 transform translate-y-1 group-hover:translate-y-0 text-left font-normal normal-case tracking-normal ${
                      isDark 
                        ? 'bg-brand-gray-900 text-brand-gray-200 border-brand-gray-700 shadow-brand-black/50' 
                        : 'bg-brand-black text-brand-gray-100 border-brand-gray-800 shadow-brand-black/10'
                    }`}>
                      <div className="font-bold text-[11px] mb-1 text-teal-400 flex justify-between items-center">
                        <span>{style.label}</span>
                        <span className="text-[9px] font-mono text-brand-gray-400">+{style.pts} pts</span>
                      </div>
                      <p className="text-[10px] leading-relaxed text-brand-gray-300">{style.description}</p>
                      <div className={`absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent ${
                        isDark ? 'border-t-brand-gray-900' : 'border-t-brand-black'
                      }`} />
                    </div>

                    <div className="font-bold flex items-center justify-between">
                      <span>{style.label}</span>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                        active 
                          ? 'bg-teal-500/10 text-teal-400' 
                          : isDark ? 'bg-brand-gray-800 text-brand-gray-400' : 'bg-brand-gray-100 text-brand-gray-500'
                      }`}>{style.pts} pts</span>
                    </div>
                    <p className={`mt-1.5 leading-snug font-normal ${
                      isDark ? 'text-brand-gray-400' : 'text-brand-gray-500'
                    }`}>{style.description}</p>
                  </button>
                )
              })}
            </div>
          </div>

          {/* 3. Number of Pages */}
          <div>
            <label className={`block text-xs font-semibold uppercase tracking-wider mb-2.5 ${
              isDark ? 'text-brand-gray-400' : 'text-brand-gray-500'
            }`}>
              Number of Pages
            </label>
            <div className="flex flex-wrap gap-2">
              {PAGE_RANGES.map((range) => {
                const active = pages === range.pts
                return (
                  <button
                    key={range.label}
                    onClick={() => setPages(range.pts)}
                    className={`group relative px-4 py-2 rounded-full border text-xs font-medium transition-all ${
                      active
                        ? isDark
                          ? 'border-teal-500 bg-teal-950/30 text-teal-300'
                          : 'border-teal-600 bg-teal-50 text-teal-700'
                        : isDark
                          ? 'border-brand-gray-800 bg-brand-gray-900/30 text-brand-gray-300 hover:border-brand-gray-700'
                          : 'border-brand-gray-200 bg-white text-brand-gray-600 hover:border-brand-gray-300'
                    }`}
                  >
                    {/* Tooltip */}
                    <div className={`absolute z-30 bottom-full left-1/2 -translate-x-1/2 mb-2.5 w-60 p-3 rounded-xl shadow-xl border pointer-events-none opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-200 transform translate-y-1 group-hover:translate-y-0 text-left font-normal normal-case tracking-normal ${
                      isDark 
                        ? 'bg-brand-gray-900 text-brand-gray-200 border-brand-gray-700 shadow-brand-black/50' 
                        : 'bg-brand-black text-brand-gray-100 border-brand-gray-800 shadow-brand-black/10'
                    }`}>
                      <div className="font-bold text-[11px] mb-1 text-teal-400 flex justify-between items-center">
                        <span>{range.label}</span>
                        <span className="text-[9px] font-mono text-brand-gray-400">+{range.pts} pts</span>
                      </div>
                      <p className="text-[10px] leading-relaxed text-brand-gray-300">{range.description}</p>
                      <div className={`absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent ${
                        isDark ? 'border-t-brand-gray-900' : 'border-t-brand-black'
                      }`} />
                    </div>

                    {range.label} <span className="text-[10px] opacity-75 font-mono ml-0.5">({range.pts} pts)</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Content Ownership */}
          <div>
            <label className={`block text-xs font-semibold uppercase tracking-wider mb-2.5 ${
              isDark ? 'text-brand-gray-400' : 'text-brand-gray-500'
            }`}>
              Content Ownership
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {CONTENT_OWNERSHIP_OPTIONS.map((opt) => {
                const active = contentOwnership === opt.pts
                return (
                  <button
                    key={opt.label}
                    onClick={() => setContentOwnership(opt.pts)}
                    className={`group relative text-left p-3.5 rounded-xl border text-xs transition-all relative ${
                      active
                        ? isDark
                          ? 'border-teal-500 bg-teal-950/20 text-teal-300 ring-1 ring-teal-500/20'
                          : 'border-teal-600 bg-teal-50/60 text-teal-800 ring-1 ring-teal-600/20'
                        : isDark
                          ? 'border-brand-gray-800 bg-brand-gray-900/20 text-brand-gray-300 hover:border-brand-gray-700'
                          : 'border-brand-gray-200 bg-white text-brand-gray-600 hover:border-brand-gray-300'
                    }`}
                  >
                    {/* Tooltip */}
                    <div className={`absolute z-30 bottom-full left-1/2 -translate-x-1/2 mb-2.5 w-60 p-3 rounded-xl shadow-xl border pointer-events-none opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-200 transform translate-y-1 group-hover:translate-y-0 text-left font-normal normal-case tracking-normal ${
                      isDark 
                        ? 'bg-brand-gray-900 text-brand-gray-200 border-brand-gray-700 shadow-brand-black/50' 
                        : 'bg-brand-black text-brand-gray-100 border-brand-gray-800 shadow-brand-black/10'
                    }`}>
                      <div className="font-bold text-[11px] mb-1 text-teal-400 flex justify-between items-center">
                        <span>{opt.label}</span>
                        <span className="text-[9px] font-mono text-brand-gray-400">+{opt.pts} pts</span>
                      </div>
                      <p className="text-[10px] leading-relaxed text-brand-gray-300">{opt.description}</p>
                      <div className={`absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent ${
                        isDark ? 'border-t-brand-gray-900' : 'border-t-brand-black'
                      }`} />
                    </div>

                    <div className="font-bold flex items-center justify-between">
                      <span>{opt.label}</span>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                        active 
                          ? 'bg-teal-500/10 text-teal-400' 
                          : isDark ? 'bg-brand-gray-800 text-brand-gray-400' : 'bg-brand-gray-100 text-brand-gray-500'
                      }`}>{opt.pts} pts</span>
                    </div>
                    <p className={`mt-1.5 leading-snug font-normal ${
                      isDark ? 'text-brand-gray-400' : 'text-brand-gray-500'
                    }`}>{opt.description}</p>
                  </button>
                )
              })}
            </div>
          </div>

          {/* SEO Scope */}
          <div>
            <label className={`block text-xs font-semibold uppercase tracking-wider mb-2.5 ${
              isDark ? 'text-brand-gray-400' : 'text-brand-gray-500'
            }`}>
              SEO Scope
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
              {SEO_SCOPE_OPTIONS.map((opt) => {
                const active = seoScope === opt.pts
                return (
                  <button
                    key={opt.label}
                    onClick={() => setSeoScope(opt.pts)}
                    className={`group relative text-left p-3 rounded-xl border text-xs transition-all relative flex flex-col justify-between ${
                      active
                        ? isDark
                          ? 'border-teal-500 bg-teal-950/20 text-teal-300 ring-1 ring-teal-500/20'
                          : 'border-teal-600 bg-teal-50/60 text-teal-800 ring-1 ring-teal-600/20'
                        : isDark
                          ? 'border-brand-gray-800 bg-brand-gray-900/20 text-brand-gray-300 hover:border-brand-gray-700'
                          : 'border-brand-gray-200 bg-white text-brand-gray-600 hover:border-brand-gray-300'
                    }`}
                  >
                    {/* Tooltip */}
                    <div className={`absolute z-30 bottom-full left-1/2 -translate-x-1/2 mb-2.5 w-60 p-3 rounded-xl shadow-xl border pointer-events-none opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-200 transform translate-y-1 group-hover:translate-y-0 text-left font-normal normal-case tracking-normal ${
                      isDark 
                        ? 'bg-brand-gray-900 text-brand-gray-200 border-brand-gray-700 shadow-brand-black/50' 
                        : 'bg-brand-black text-brand-gray-100 border-brand-gray-800 shadow-brand-black/10'
                    }`}>
                      <div className="font-bold text-[11px] mb-1 text-teal-400 flex justify-between items-center">
                        <span>{opt.label}</span>
                        <span className="text-[9px] font-mono text-brand-gray-400">+{opt.pts} pts</span>
                      </div>
                      <p className="text-[10px] leading-relaxed text-brand-gray-300">{opt.description}</p>
                      <div className={`absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent ${
                        isDark ? 'border-t-brand-gray-900' : 'border-t-brand-black'
                      }`} />
                    </div>

                    <div className="font-bold flex items-center justify-between w-full">
                      <span className="truncate pr-1">{opt.label}</span>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono flex-shrink-0 ${
                        active 
                          ? 'bg-teal-500/10 text-teal-400' 
                          : isDark ? 'bg-brand-gray-800 text-brand-gray-400' : 'bg-brand-gray-100 text-brand-gray-500'
                      }`}>{opt.pts} pts</span>
                    </div>
                    <p className={`mt-1.5 leading-snug font-normal text-[10px] ${
                      isDark ? 'text-brand-gray-400' : 'text-brand-gray-500'
                    }`}>{opt.description}</p>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Deployment & Infrastructure */}
          <div>
            <label className={`block text-xs font-semibold uppercase tracking-wider mb-2.5 ${
              isDark ? 'text-brand-gray-400' : 'text-brand-gray-500'
            }`}>
              Deployment & Infrastructure
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {DEPLOYMENT_OPTIONS.map((opt) => {
                const active = deployment === opt.pts
                return (
                  <button
                    key={opt.label}
                    onClick={() => setDeployment(opt.pts)}
                    className={`group relative text-left p-3.5 rounded-xl border text-xs transition-all relative ${
                      active
                        ? isDark
                          ? 'border-teal-500 bg-teal-950/20 text-teal-300 ring-1 ring-teal-500/20'
                          : 'border-teal-600 bg-teal-50/60 text-teal-800 ring-1 ring-teal-600/20'
                        : isDark
                          ? 'border-brand-gray-800 bg-brand-gray-900/20 text-brand-gray-300 hover:border-brand-gray-700'
                          : 'border-brand-gray-200 bg-white text-brand-gray-600 hover:border-brand-gray-300'
                    }`}
                  >
                    {/* Tooltip */}
                    <div className={`absolute z-30 bottom-full left-1/2 -translate-x-1/2 mb-2.5 w-60 p-3 rounded-xl shadow-xl border pointer-events-none opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-200 transform translate-y-1 group-hover:translate-y-0 text-left font-normal normal-case tracking-normal ${
                      isDark 
                        ? 'bg-brand-gray-900 text-brand-gray-200 border-brand-gray-700 shadow-brand-black/50' 
                        : 'bg-brand-black text-brand-gray-100 border-brand-gray-800 shadow-brand-black/10'
                    }`}>
                      <div className="font-bold text-[11px] mb-1 text-teal-400 flex justify-between items-center">
                        <span>{opt.label}</span>
                        <span className="text-[9px] font-mono text-brand-gray-400">+{opt.pts} pts</span>
                      </div>
                      <p className="text-[10px] leading-relaxed text-brand-gray-300">{opt.description}</p>
                      <div className={`absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent ${
                        isDark ? 'border-t-brand-gray-900' : 'border-t-brand-black'
                      }`} />
                    </div>

                    <div className="font-bold flex items-center justify-between">
                      <span>{opt.label}</span>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono ${
                        active 
                          ? 'bg-teal-500/10 text-teal-400' 
                          : isDark ? 'bg-brand-gray-800 text-brand-gray-400' : 'bg-brand-gray-100 text-brand-gray-500'
                      }`}>{opt.pts} pts</span>
                    </div>
                    <p className={`mt-1.5 leading-snug font-normal ${
                      isDark ? 'text-brand-gray-400' : 'text-brand-gray-500'
                    }`}>{opt.description}</p>
                  </button>
                )
              })}
            </div>
          </div>

          {/* 4. Features */}
          <div>
            <label className={`block text-xs font-semibold uppercase tracking-wider mb-2.5 ${
              isDark ? 'text-brand-gray-400' : 'text-brand-gray-500'
            }`}>
              Features (Multi-select)
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {FEATURES_LIST.map((feat) => {
                const active = features.includes(feat.id)
                return (
                  <button
                    key={feat.id}
                    onClick={() => toggleFeature(feat.id)}
                    className={`group relative flex items-center justify-between p-3 rounded-xl border text-xs font-medium transition-all ${
                      active
                        ? isDark
                          ? 'border-teal-500 bg-teal-950/20 text-teal-300'
                          : 'border-teal-600 bg-teal-50 text-teal-800'
                        : isDark
                          ? 'border-brand-gray-800 bg-brand-gray-900/20 text-brand-gray-400 hover:border-brand-gray-700'
                          : 'border-brand-gray-200 bg-white text-brand-gray-600 hover:border-brand-gray-300'
                    }`}
                  >
                    {/* Tooltip */}
                    <div className={`absolute z-30 bottom-full left-1/2 -translate-x-1/2 mb-2.5 w-60 p-3 rounded-xl shadow-xl border pointer-events-none opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-200 transform translate-y-1 group-hover:translate-y-0 text-left font-normal normal-case tracking-normal ${
                      isDark 
                        ? 'bg-brand-gray-900 text-brand-gray-200 border-brand-gray-700 shadow-brand-black/50' 
                        : 'bg-brand-black text-brand-gray-100 border-brand-gray-800 shadow-brand-black/10'
                    }`}>
                      <div className="font-bold text-[11px] mb-1 text-teal-400 flex justify-between items-center">
                        <span>{feat.label}</span>
                        <span className="text-[9px] font-mono text-brand-gray-400">+{feat.pts} pts</span>
                      </div>
                      <p className="text-[10px] leading-relaxed text-brand-gray-300">{feat.description}</p>
                      <div className={`absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent ${
                        isDark ? 'border-t-brand-gray-900' : 'border-t-brand-black'
                      }`} />
                    </div>

                    <span className="truncate pr-1">{feat.label}</span>
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <span className={`text-[10px] font-mono ${
                        active ? 'text-teal-400' : isDark ? 'text-brand-gray-500' : 'text-brand-gray-400'
                      }`}>+{feat.pts}</span>
                      <div className={`w-3.5 h-3.5 rounded flex items-center justify-center border transition-all ${
                        active 
                          ? 'bg-teal-500 border-teal-500 text-white' 
                          : isDark ? 'border-brand-gray-700' : 'border-brand-gray-300'
                      }`}>
                        {active && <Check size={8} strokeWidth={4} />}
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* 5. Timeline */}
          <div>
            <label className={`block text-xs font-semibold uppercase tracking-wider mb-2.5 ${
              isDark ? 'text-brand-gray-400' : 'text-brand-gray-500'
            }`}>
              Timeline
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {TIMELINES.map((t) => {
                const active = timeline === t.pts
                return (
                  <button
                    key={t.label}
                    onClick={() => setTimeline(t.pts)}
                    className={`group relative px-4 py-3 rounded-xl border text-xs font-medium text-left transition-all flex items-center justify-between ${
                      active
                        ? isDark
                          ? 'border-teal-500 bg-teal-950/20 text-teal-300'
                          : 'border-teal-600 bg-teal-50 text-teal-800'
                        : isDark
                          ? 'border-brand-gray-800 bg-brand-gray-900/20 text-brand-gray-400 hover:border-brand-gray-700'
                          : 'border-brand-gray-200 bg-white text-brand-gray-600 hover:border-brand-gray-300'
                    }`}
                  >
                    {/* Tooltip */}
                    <div className={`absolute z-30 bottom-full left-1/2 -translate-x-1/2 mb-2.5 w-60 p-3 rounded-xl shadow-xl border pointer-events-none opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-all duration-200 transform translate-y-1 group-hover:translate-y-0 text-left font-normal normal-case tracking-normal ${
                      isDark 
                        ? 'bg-brand-gray-900 text-brand-gray-200 border-brand-gray-700 shadow-brand-black/50' 
                        : 'bg-brand-black text-brand-gray-100 border-brand-gray-800 shadow-brand-black/10'
                    }`}>
                      <div className="font-bold text-[11px] mb-1 text-teal-400 flex justify-between items-center">
                        <span>{t.label}</span>
                        <span className="text-[9px] font-mono text-brand-gray-400">{t.pts === 0 ? '0 pts' : `+${t.pts} pts`}</span>
                      </div>
                      <p className="text-[10px] leading-relaxed text-brand-gray-300">{t.description}</p>
                      <div className={`absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent ${
                        isDark ? 'border-t-brand-gray-900' : 'border-t-brand-black'
                      }`} />
                    </div>

                    <span>{t.label}</span>
                    {t.modifier && (
                      <span className={`text-[10px] font-mono px-1 rounded ${
                        active ? 'bg-teal-500/10 text-teal-400' : isDark ? 'bg-brand-gray-800 text-brand-gray-400' : 'bg-brand-gray-100 text-brand-gray-500'
                      }`}>{t.modifier}</span>
                    )}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Rate Display */}
          <div className={`p-4 rounded-xl border flex items-center justify-between ${
            isDark 
              ? 'bg-brand-gray-900/30 border-brand-gray-800' 
              : 'bg-brand-gray-50/50 border-brand-gray-100'
          }`}>
            <div>
              <span className={`block text-xs font-semibold uppercase tracking-wider ${
                isDark ? 'text-brand-gray-400' : 'text-brand-gray-500'
              }`}>
                Rate per Point
              </span>
              <p className={`text-[10px] mt-0.5 ${isDark ? 'text-brand-gray-500' : 'text-brand-gray-400'}`}>
                Fixed standard pricing rate
              </p>
            </div>
            <span className="text-base font-extrabold text-teal-500 font-mono">
              {formatCurrency(rate)}
            </span>
          </div>
        </div>

        {/* Right Side: Results Panel */}
        <div className={`p-6 md:p-8 lg:col-span-2 flex flex-col justify-between rounded-b-[22px] lg:rounded-b-none lg:rounded-br-[22px] ${
          isDark ? 'bg-brand-gray-900/40' : 'bg-brand-gray-50/50'
        }`}>
          <div className="space-y-6">
            <h3 className={`text-xs font-bold uppercase tracking-wider ${
              isDark ? 'text-brand-gray-400' : 'text-brand-gray-500'
            }`}>
              Estimated Pricing
            </h3>

            {/* Calculations Breakdown */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className={isDark ? 'text-brand-gray-400' : 'text-brand-gray-500'}>Total Points</span>
                <span className="font-bold font-mono">{totalPoints} pts</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className={isDark ? 'text-brand-gray-400' : 'text-brand-gray-500'}>Rate per Point</span>
                <span className="font-bold font-mono">{formatCurrency(rate)}</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className={isDark ? 'text-brand-gray-400' : 'text-brand-gray-500'}>Base Price</span>
                <span className="font-bold font-mono">{formatCurrency(basePrice)}</span>
              </div>
            </div>

            <div className={`h-px ${isDark ? 'bg-brand-gray-800' : 'bg-brand-gray-200'}`} />

            {/* Final Quote display with color flash */}
            <div className="text-center py-4">
              <p className={`text-[10px] font-bold uppercase tracking-widest ${
                isDark ? 'text-brand-gray-400' : 'text-brand-gray-500'
              }`}>
                Your Estimated Quote
              </p>
              <div className={`text-3xl md:text-4xl font-extrabold tracking-tight mt-1 transition-all duration-300 font-mono ${
                isFlashing 
                  ? 'text-teal-400 scale-105' 
                  : isDark ? 'text-white' : 'text-brand-black'
              }`}>
                {formatCurrency(quote)}
              </div>
              <p className={`text-[10px] mt-1.5 italic ${isDark ? 'text-brand-gray-500' : 'text-brand-gray-400'}`}>
                (rounded to the nearest ₹100)
              </p>
            </div>

            {/* Negotiation Range Slider / Bar */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-[10px] uppercase font-bold tracking-wider">
                <span className={isDark ? 'text-brand-gray-500' : 'text-brand-gray-400'}>Negotiation Range (±20%)</span>
              </div>
              
              {/* Visual Range bar */}
              <div className="relative pt-1">
                <div className={`h-2 rounded-full relative w-full ${isDark ? 'bg-brand-gray-800' : 'bg-brand-gray-200'}`}>
                  {/* Central highlighted range */}
                  <div 
                    className="absolute h-full rounded-full bg-teal-500/80 left-[20%] right-[20%]" 
                  />
                  {/* Highlight indicator for actual quote */}
                  <div 
                    className="absolute w-3 h-3 rounded-full bg-teal-400 border border-white -top-0.5 left-[50%] -translate-x-1/2 shadow-sm"
                  />
                </div>
              </div>

              <div className="flex justify-between text-[11px] font-bold font-mono">
                <div className="text-left">
                  <span className={`block text-[8px] uppercase font-bold tracking-wider ${isDark ? 'text-brand-gray-500' : 'text-brand-gray-400'}`}>Low (-20%)</span>
                  <span className={isDark ? 'text-brand-gray-300' : 'text-brand-gray-600'}>{formatCurrency(rangeLow)}</span>
                </div>
                <div className="text-center">
                  <span className={`block text-[8px] uppercase font-bold tracking-wider ${isDark ? 'text-brand-gray-500' : 'text-brand-gray-400'}`}>Quote</span>
                  <span className="text-teal-500">{formatCurrency(quote)}</span>
                </div>
                <div className="text-right">
                  <span className={`block text-[8px] uppercase font-bold tracking-wider ${isDark ? 'text-brand-gray-500' : 'text-brand-gray-400'}`}>High (+20%)</span>
                  <span className={isDark ? 'text-brand-gray-300' : 'text-brand-gray-600'}>{formatCurrency(rangeHigh)}</span>
                </div>
              </div>
            </div>

            {/* Negotiation Note */}
            <div className={`p-3 rounded-xl border flex items-start gap-2.5 text-[11px] leading-relaxed ${
              isDark 
                ? 'bg-teal-950/10 border-teal-500/20 text-brand-gray-300' 
                : 'bg-teal-50/40 border-teal-100 text-brand-gray-600'
            }`}>
              <Info size={14} className="text-teal-500 flex-shrink-0 mt-0.5" />
              <span>
                Final quotes depend on exact features. We offer flexible budgets and ranges are negotiable.
              </span>
            </div>
          </div>

          {/* Bottom Action buttons */}
          <div className="pt-6 sm:pt-4 space-y-3">
            <Link
              to="/contact"
              state={{ calculatorSummary: getCalculatorSummary() }}
              className="w-full inline-flex items-center justify-center gap-2 py-3 bg-teal-600 text-white rounded-xl text-sm font-bold shadow-md hover:bg-teal-500 active:scale-[0.98] transition-all"
            >
              Get Full Quote <ArrowRight size={15} />
            </Link>

            <button
              onClick={handleReset}
              className={`w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold border transition-all ${
                isDark
                  ? 'border-brand-gray-800 hover:bg-brand-gray-900 text-brand-gray-400'
                  : 'border-brand-gray-200 hover:bg-brand-gray-100 text-brand-gray-600'
              }`}
            >
              <RotateCcw size={13} /> Reset Calculator
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
