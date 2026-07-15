import { useState, useEffect, useMemo } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import { Sun, Moon, RotateCcw, ArrowRight, Check, Info, X, Loader2, Mail } from 'lucide-react'
import { optionDetails } from '../../data/calculatorOptionsDetails'

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
  const [selectedDetailOption, setSelectedDetailOption] = useState(null)

  // Modal and Submission State
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setIsSuccess(false)
    setError('')
    setFormData({ name: '', email: '', phone: '' })
  }

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isModalOpen || selectedDetailOption) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isModalOpen, selectedDetailOption])

  // Escape key handler to close modals
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedDetailOption(null)
        setIsModalOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setError('Please fill in all fields.')
      setIsSubmitting(false)
      return
    }

    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      estimatedCost: formatCurrency(quote),
      projectType: PROJECT_TYPES.find(p => p.pts === projectType)?.label || '',
      designStyle: DESIGN_STYLES.find(d => d.pts === designStyle)?.label || '',
      pages: PAGE_RANGES.find(pr => pr.pts === pages)?.label || '',
      contentOwnership: CONTENT_OWNERSHIP_OPTIONS.find(c => c.pts === contentOwnership)?.label || '',
      seoScope: SEO_SCOPE_OPTIONS.find(s => s.pts === seoScope)?.label || '',
      deployment: DEPLOYMENT_OPTIONS.find(d => d.pts === deployment)?.label || '',
      selectedFeatures: features.map(fid => FEATURES_LIST.find(f => f.id === fid)?.label).filter(Boolean).join(', '),
      timeline: TIMELINES.find(t => t.pts === timeline)?.label || '',
      totalPoints,
      source: 'Pricing Calculator Quote Request'
    }

    try {
      const response = await fetch('https://formspree.io/f/mnjyewlo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })
      if (response.ok) {
        setIsSuccess(true)
      } else {
        setError('Something went wrong. Please try again.')
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

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

  const getOptionSelectionInfo = (label) => {
    // 1. Project Type
    const pt = PROJECT_TYPES.find(p => p.label === label)
    if (pt) {
      return {
        isSelected: projectType === pt.pts,
        onSelect: () => setProjectType(pt.pts),
        type: 'select'
      }
    }
    // 2. Design Style
    const ds = DESIGN_STYLES.find(d => d.label === label)
    if (ds) {
      return {
        isSelected: designStyle === ds.pts,
        onSelect: () => setDesignStyle(ds.pts),
        type: 'select'
      }
    }
    // 3. Pages
    const pg = PAGE_RANGES.find(p => p.label === label)
    if (pg) {
      return {
        isSelected: pages === pg.pts,
        onSelect: () => setPages(pg.pts),
        type: 'select'
      }
    }
    // 4. Content Ownership
    const co = CONTENT_OWNERSHIP_OPTIONS.find(c => c.label === label)
    if (co) {
      return {
        isSelected: contentOwnership === co.pts,
        onSelect: () => setContentOwnership(co.pts),
        type: 'select'
      }
    }
    // 5. SEO Scope
    const seo = SEO_SCOPE_OPTIONS.find(s => s.label === label)
    if (seo) {
      return {
        isSelected: seoScope === seo.pts,
        onSelect: () => setSeoScope(seo.pts),
        type: 'select'
      }
    }
    // 6. Deployment
    const dep = DEPLOYMENT_OPTIONS.find(d => d.label === label)
    if (dep) {
      return {
        isSelected: deployment === dep.pts,
        onSelect: () => setDeployment(dep.pts),
        type: 'select'
      }
    }
    // 7. Feature
    const feat = FEATURES_LIST.find(f => f.label === label)
    if (feat) {
      return {
        isSelected: features.includes(feat.id),
        onSelect: () => toggleFeature(feat.id),
        type: 'toggle'
      }
    }
    // 8. Timeline
    const tl = TIMELINES.find(t => t.label === label)
    if (tl) {
      return {
        isSelected: timeline === tl.pts,
        onSelect: () => setTimeline(tl.pts),
        type: 'select'
      }
    }
    return null
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

      {/* Main Content Area */}
      <div className="w-full">
        <div className="p-6 md:p-8 space-y-6">
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
                      <div className="font-bold text-[11px] mb-1 text-teal-400">
                        {type.label}
                      </div>
                      <p className="text-[10px] leading-relaxed text-brand-gray-300">{type.description}</p>
                      <div className={`absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent ${
                        isDark ? 'border-t-brand-gray-900' : 'border-t-brand-black'
                      }`} />
                    </div>

                    <div className="font-bold flex items-center justify-between w-full">
                      <span>{type.label}</span>
                      <span
                        onClick={(e) => {
                          e.stopPropagation()
                          setSelectedDetailOption(type.label)
                        }}
                        className="p-1 -mr-1 rounded-full hover:bg-teal-500/10 transition-colors flex items-center justify-center cursor-pointer"
                        title="Click for detailed description"
                      >
                        <Info size={13} className="text-teal-500 hover:text-teal-400" />
                      </span>
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
                      <div className="font-bold text-[11px] mb-1 text-teal-400">
                        {style.label}
                      </div>
                      <p className="text-[10px] leading-relaxed text-brand-gray-300">{style.description}</p>
                      <div className={`absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent ${
                        isDark ? 'border-t-brand-gray-900' : 'border-t-brand-black'
                      }`} />
                    </div>

                    <div className="font-bold flex items-center justify-between w-full">
                      <span>{style.label}</span>
                      <span
                        onClick={(e) => {
                          e.stopPropagation()
                          setSelectedDetailOption(style.label)
                        }}
                        className="p-1 -mr-1 rounded-full hover:bg-teal-500/10 transition-colors flex items-center justify-center cursor-pointer"
                        title="Click for detailed description"
                      >
                        <Info size={13} className="text-teal-500 hover:text-teal-400" />
                      </span>
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
                    className={`group relative px-4 py-2 rounded-full border text-xs font-medium transition-all flex items-center gap-1.5 ${
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
                      <div className="font-bold text-[11px] mb-1 text-teal-400">
                        {range.label}
                      </div>
                      <p className="text-[10px] leading-relaxed text-brand-gray-300">{range.description}</p>
                      <div className={`absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent ${
                        isDark ? 'border-t-brand-gray-900' : 'border-t-brand-black'
                      }`} />
                    </div>

                    <span>{range.label}</span>
                    <span
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelectedDetailOption(range.label)
                      }}
                      className="p-0.5 rounded-full hover:bg-teal-500/10 transition-colors flex items-center justify-center cursor-pointer"
                      title="Click for detailed description"
                    >
                      <Info size={11} className="text-teal-500" />
                    </span>
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
                      <div className="font-bold text-[11px] mb-1 text-teal-400">
                        {opt.label}
                      </div>
                      <p className="text-[10px] leading-relaxed text-brand-gray-300">{opt.description}</p>
                      <div className={`absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent ${
                        isDark ? 'border-t-brand-gray-900' : 'border-t-brand-black'
                      }`} />
                    </div>

                    <div className="font-bold flex items-center justify-between w-full">
                      <span>{opt.label}</span>
                      <span
                        onClick={(e) => {
                          e.stopPropagation()
                          setSelectedDetailOption(opt.label)
                        }}
                        className="p-1 -mr-1 rounded-full hover:bg-teal-500/10 transition-colors flex items-center justify-center cursor-pointer"
                        title="Click for detailed description"
                      >
                        <Info size={13} className="text-teal-500 hover:text-teal-400" />
                      </span>
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
                      <div className="font-bold text-[11px] mb-1 text-teal-400">
                        {opt.label}
                      </div>
                      <p className="text-[10px] leading-relaxed text-brand-gray-300">{opt.description}</p>
                      <div className={`absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent ${
                        isDark ? 'border-t-brand-gray-900' : 'border-t-brand-black'
                      }`} />
                    </div>

                    <div className="font-bold flex items-center justify-between w-full">
                      <span className="truncate pr-1">{opt.label}</span>
                      <span
                        onClick={(e) => {
                          e.stopPropagation()
                          setSelectedDetailOption(opt.label)
                        }}
                        className="p-1 -mr-1 rounded-full hover:bg-teal-500/10 transition-colors flex items-center justify-center cursor-pointer flex-shrink-0"
                        title="Click for detailed description"
                      >
                        <Info size={13} className="text-teal-500 hover:text-teal-400" />
                      </span>
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
                      <div className="font-bold text-[11px] mb-1 text-teal-400">
                        {opt.label}
                      </div>
                      <p className="text-[10px] leading-relaxed text-brand-gray-300">{opt.description}</p>
                      <div className={`absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent ${
                        isDark ? 'border-t-brand-gray-900' : 'border-t-brand-black'
                      }`} />
                    </div>

                    <div className="font-bold flex items-center justify-between w-full">
                      <span>{opt.label}</span>
                      <span
                        onClick={(e) => {
                          e.stopPropagation()
                          setSelectedDetailOption(opt.label)
                        }}
                        className="p-1 -mr-1 rounded-full hover:bg-teal-500/10 transition-colors flex items-center justify-center cursor-pointer"
                        title="Click for detailed description"
                      >
                        <Info size={13} className="text-teal-500 hover:text-teal-400" />
                      </span>
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
                      <div className="font-bold text-[11px] mb-1 text-teal-400">
                        {feat.label}
                      </div>
                      <p className="text-[10px] leading-relaxed text-brand-gray-300">{feat.description}</p>
                      <div className={`absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent ${
                        isDark ? 'border-t-brand-gray-900' : 'border-t-brand-black'
                      }`} />
                    </div>

                    <span className="truncate pr-1 flex items-center gap-1.5 w-full">
                      <span className="truncate">{feat.label}</span>
                      <span
                        onClick={(e) => {
                          e.stopPropagation()
                          setSelectedDetailOption(feat.label)
                        }}
                        className="p-1 -my-1 rounded-full hover:bg-teal-500/10 transition-colors flex items-center justify-center cursor-pointer flex-shrink-0"
                        title="Click for detailed description"
                      >
                        <Info size={11} className="text-teal-500 hover:text-teal-400" />
                      </span>
                    </span>
                    <div className="flex items-center gap-1.5 flex-shrink-0">
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
                      <div className="font-bold text-[11px] mb-1 text-teal-400">
                        {t.label}
                      </div>
                      <p className="text-[10px] leading-relaxed text-brand-gray-300">{t.description}</p>
                      <div className={`absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent ${
                        isDark ? 'border-t-brand-gray-900' : 'border-t-brand-black'
                      }`} />
                    </div>

                    <div className="font-bold flex items-center justify-between w-full">
                      <span>{t.label}</span>
                      <span
                        onClick={(e) => {
                          e.stopPropagation()
                          setSelectedDetailOption(t.label)
                        }}
                        className="p-1 -mr-1 rounded-full hover:bg-teal-500/10 transition-colors flex items-center justify-center cursor-pointer"
                        title="Click for detailed description"
                      >
                        <Info size={13} className="text-teal-500 hover:text-teal-400" />
                      </span>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Submit / CTA Footer */}
          <div className={`pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4 ${
            isDark ? 'border-brand-gray-800' : 'border-brand-gray-150'
          }`}>
            <div>
              <h4 className="text-sm font-bold">Ready to get your price estimate?</h4>
              <p className={`text-xs mt-0.5 ${isDark ? 'text-brand-gray-400' : 'text-brand-gray-500'}`}>
                We'll calculate the cost details and send them instantly to your inbox.
              </p>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={handleReset}
                className={`px-4.5 py-3 rounded-xl text-xs font-semibold border transition-all flex items-center gap-1.5 ${
                  isDark
                    ? 'border-brand-gray-800 hover:bg-brand-gray-900 text-brand-gray-400'
                    : 'border-brand-gray-200 hover:bg-brand-gray-100 text-brand-gray-650'
                }`}
              >
                <RotateCcw size={13} /> Reset Options
              </button>
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-500 text-white rounded-xl text-sm font-bold shadow-md active:scale-[0.98] transition-all"
              >
                Get Price Quote <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Dialog */}
      {isModalOpen && createPortal(
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-brand-black/75 backdrop-blur-sm transition-all duration-350">
          <div 
            className={`w-full max-w-md max-h-[85vh] overflow-y-auto scrollbar-thin p-6 rounded-2xl border shadow-2xl transition-all transform duration-300 scale-100 ${
              isDark 
                ? 'bg-brand-gray-950 border-brand-gray-850 text-white' 
                : 'bg-white border-brand-gray-200 text-brand-black'
            }`}
          >
            {isSuccess ? (
              <div className="text-center py-6">
                <div className="w-16 h-16 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check size={32} strokeWidth={3} />
                </div>
                <h3 className="text-lg font-bold mb-2">Quote Request Sent!</h3>
                <p className={`text-xs leading-relaxed mb-6 ${isDark ? 'text-brand-gray-400' : 'text-brand-gray-500'}`}>
                  Thank you, <span className="font-semibold text-teal-400">{formData.name}</span>. We've received your configuration details. 
                  A copy of your estimated quote (based on your options) has been prepared and sent to <span className="font-semibold text-teal-400">{formData.email}</span>. 
                  We'll get in touch with you shortly!
                </p>
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="w-full py-3 bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-xl text-sm transition-all"
                >
                  Done
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-brand-gray-150 dark:border-brand-gray-850">
                  <h3 className="font-bold text-base flex items-center gap-2">
                    <Mail size={18} className="text-teal-500" />
                    Get Your Price Estimate
                  </h3>
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className={`p-1.5 rounded-lg border transition-all ${
                      isDark 
                        ? 'border-brand-gray-800 hover:bg-brand-gray-800 text-brand-gray-400' 
                        : 'border-brand-gray-200 hover:bg-brand-gray-100 text-brand-gray-650'
                    }`}
                  >
                    <X size={16} />
                  </button>
                </div>
                
                <p className={`text-xs leading-relaxed ${isDark ? 'text-brand-gray-400' : 'text-brand-gray-500'}`}>
                  Please enter your details below. We'll send your customized estimate to your email immediately.
                </p>

                {error && (
                  <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-500 rounded-lg text-xs">
                    {error}
                  </div>
                )}

                <div className="space-y-3.5">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider mb-1.5 opacity-75">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs outline-none transition-all ${
                        isDark 
                          ? 'bg-brand-gray-900 border-brand-gray-850 focus:border-teal-500 text-white' 
                          : 'bg-white border-brand-gray-200 focus:border-teal-600 text-brand-black'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider mb-1.5 opacity-75">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. john@example.com"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs outline-none transition-all ${
                        isDark 
                          ? 'bg-brand-gray-900 border-brand-gray-850 focus:border-teal-500 text-white' 
                          : 'bg-white border-brand-gray-200 focus:border-teal-600 text-brand-black'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider mb-1.5 opacity-75">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 98765 43210"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs outline-none transition-all ${
                        isDark 
                          ? 'bg-brand-gray-900 border-brand-gray-850 focus:border-teal-500 text-white' 
                          : 'bg-white border-brand-gray-200 focus:border-teal-600 text-brand-black'
                      }`}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 bg-teal-600 hover:bg-teal-500 disabled:bg-teal-800 text-white rounded-xl text-sm font-bold shadow-md active:scale-[0.98] transition-all mt-4"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" size={16} /> Submitting...
                    </>
                  ) : (
                    'Send Estimate'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>,
        document.body
      )}

      {/* Detailed Info Modal */}
      {selectedDetailOption && (() => {
        const details = optionDetails[selectedDetailOption]
        if (!details) return null
        const selectionInfo = getOptionSelectionInfo(selectedDetailOption)
        
        return createPortal(
          <div 
            onClick={() => setSelectedDetailOption(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-brand-black/75 backdrop-blur-sm transition-all duration-350"
          >
            <div 
              onClick={(e) => e.stopPropagation()}
              className={`w-full max-w-xl max-h-[85vh] md:max-h-[80vh] flex flex-col p-6 md:p-8 rounded-2xl border shadow-2xl transition-all transform duration-300 scale-100 text-left ${
                isDark 
                  ? 'bg-brand-gray-950 border-brand-gray-850 text-white' 
                  : 'bg-white border-brand-gray-200 text-brand-black'
              }`}
            >
              {/* Header */}
              <div className="flex justify-between items-center pb-4 border-b border-brand-gray-150 dark:border-brand-gray-850 flex-shrink-0">
                <h3 className="font-bold text-lg md:text-xl text-teal-500">
                  {details.title}
                </h3>
                <button
                  type="button"
                  onClick={() => setSelectedDetailOption(null)}
                  className={`p-1.5 rounded-lg border transition-all ${
                    isDark 
                      ? 'border-brand-gray-800 hover:bg-brand-gray-850 text-brand-gray-400' 
                      : 'border-brand-gray-200 hover:bg-brand-gray-100 text-brand-gray-600'
                  }`}
                >
                  <X size={18} />
                </button>
              </div>

              {/* Body Content */}
              <div className="mt-6 space-y-6 text-sm overflow-y-auto pr-2 scrollbar-thin flex-1">
                {/* What is it? */}
                <div>
                  <h4 className="font-bold text-[11px] uppercase tracking-wider text-teal-500 mb-1.5">
                    What is it?
                  </h4>
                  <p className={isDark ? 'text-brand-gray-300 leading-relaxed' : 'text-brand-gray-600 leading-relaxed'}>
                    {details.whatIsIt}
                  </p>
                </div>

                {/* Why need it? */}
                {details.whyNeed && (
                  <div>
                    <h4 className="font-bold text-[11px] uppercase tracking-wider text-teal-500 mb-1.5">
                      Why does your site need this?
                    </h4>
                    <p className={isDark ? 'text-brand-gray-300 leading-relaxed' : 'text-brand-gray-600 leading-relaxed'}>
                      {details.whyNeed}
                    </p>
                  </div>
                )}

                {/* Examples */}
                {details.examples && details.examples.length > 0 && (
                  <div>
                    <h4 className="font-bold text-[11px] uppercase tracking-wider text-teal-500 mb-2">
                      Examples & Use Cases
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {details.examples.map((ex, idx) => (
                        <div key={idx} className={`p-3 rounded-xl border ${
                          isDark ? 'bg-brand-gray-900/50 border-brand-gray-800' : 'bg-brand-gray-50 border-brand-gray-150'
                        }`}>
                          <p className="font-semibold text-xs text-teal-500 mb-1">{ex.name}</p>
                          <p className={`text-[11px] leading-relaxed ${isDark ? 'text-brand-gray-400' : 'text-brand-gray-500'}`}>{ex.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* What you get */}
                {details.whatYouGet && details.whatYouGet.length > 0 && (
                  <div>
                    <h4 className="font-bold text-[11px] uppercase tracking-wider text-teal-500 mb-2">
                      What you get
                    </h4>
                    <ul className="space-y-2">
                      {details.whatYouGet.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-[12px] leading-relaxed">
                          <Check size={14} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span className={isDark ? 'text-brand-gray-350' : 'text-brand-gray-600'}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* FAQ */}
                {details.faq && details.faq.length > 0 && (
                  <div className="pt-4 border-t border-brand-gray-150 dark:border-brand-gray-850">
                    <h4 className="font-bold text-[11px] uppercase tracking-wider text-teal-500 mb-2">
                      FAQ
                    </h4>
                    {details.faq.map((f, idx) => (
                      <div key={idx} className="space-y-1">
                        <p className="font-semibold text-xs">{f.q}</p>
                        <p className={`text-[11px] leading-relaxed ${isDark ? 'text-brand-gray-400' : 'text-brand-gray-500'}`}>{f.a}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Footer */}
              {selectionInfo && (
                <div className="mt-6 pt-4 border-t border-brand-gray-150 dark:border-brand-gray-850 flex justify-end gap-3 flex-shrink-0">
                  <button
                    type="button"
                    onClick={() => setSelectedDetailOption(null)}
                    className={`px-4 py-2.5 rounded-xl text-xs font-semibold border transition-all ${
                      isDark
                        ? 'border-brand-gray-850 hover:bg-brand-gray-900 text-brand-gray-400'
                        : 'border-brand-gray-200 hover:bg-brand-gray-100 text-brand-gray-600'
                    }`}
                  >
                    Close
                  </button>
                  
                  {selectionInfo.type === 'toggle' ? (
                    <button
                      type="button"
                      onClick={() => {
                        selectionInfo.onSelect()
                        setSelectedDetailOption(null)
                      }}
                      className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                        selectionInfo.isSelected
                          ? 'bg-red-650 hover:bg-red-600 text-white shadow-md'
                          : 'bg-teal-600 hover:bg-teal-500 text-white shadow-md'
                      }`}
                    >
                      {selectionInfo.isSelected ? 'Remove Feature' : 'Add Feature'}
                    </button>
                  ) : (
                    <button
                      type="button"
                      disabled={selectionInfo.isSelected}
                      onClick={() => {
                        selectionInfo.onSelect()
                        setSelectedDetailOption(null)
                      }}
                      className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all shadow-md ${
                        selectionInfo.isSelected
                          ? 'bg-emerald-600 text-white cursor-default opacity-90'
                          : 'bg-teal-600 hover:bg-teal-500 text-white'
                      }`}
                    >
                      {selectionInfo.isSelected ? (
                        <span className="flex items-center gap-1.5">
                          <Check size={12} strokeWidth={3} /> Currently Selected
                        </span>
                      ) : (
                        'Select this Option'
                      )}
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>,
          document.body
        )
      })()}
    </div>
  )
}
