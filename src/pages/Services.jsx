import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowUpRight, CheckCircle2, ArrowRight } from 'lucide-react'
import { FadeIn } from '../components/ui/FadeIn'
import { services } from '../data/services'
import SchemaOrg from '../components/seo/SchemaOrg'
import { breadcrumbSchema } from '../data/schema'
import { useCal } from '../hooks/useCal'

const SITE = 'https://tnj-solutions.vercel.app'
const OG_IMAGE = `${SITE}/og.png`
const TWITTER_IMAGE = `${SITE}/og-twitter.png`

const colorMap = {
  emerald: {
    bg: 'bg-emerald-50',
    icon: 'bg-emerald-100 text-emerald-700',
    badge: 'bg-emerald-100 text-emerald-700',
    check: 'text-emerald-500',
    border: 'hover:border-emerald-200',
    dot: 'bg-emerald-400',
  },
  blue: {
    bg: 'bg-blue-50',
    icon: 'bg-blue-100 text-blue-700',
    badge: 'bg-blue-100 text-blue-700',
    check: 'text-blue-500',
    border: 'hover:border-blue-200',
    dot: 'bg-blue-400',
  },
  purple: {
    bg: 'bg-purple-50',
    icon: 'bg-purple-100 text-purple-700',
    badge: 'bg-purple-100 text-purple-700',
    check: 'text-purple-500',
    border: 'hover:border-purple-200',
    dot: 'bg-purple-400',
  },
  orange: {
    bg: 'bg-orange-50',
    icon: 'bg-orange-100 text-orange-700',
    badge: 'bg-orange-100 text-orange-700',
    check: 'text-orange-500',
    border: 'hover:border-orange-200',
    dot: 'bg-orange-400',
  },
}

export default function Services() {
  const openBooking = useCal()
  const crumbs = breadcrumbSchema([
    { name: 'Home', url: SITE },
    { name: 'Services', url: `${SITE}/services` },
  ])

  return (
    <>
      <Helmet>
        <title>Services — TNJ Solutions</title>
        <meta name="description" content="Custom software, AI solutions, web development & business automation for growing businesses. Fixed prices, transparent timelines." />
        <meta property="og:title" content="Services — TNJ Solutions" />
        <meta property="og:url" content={`${SITE}/services`} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={TWITTER_IMAGE} />
        <link rel="canonical" href={`${SITE}/services`} />
      </Helmet>
      <SchemaOrg schema={crumbs} />

      {/* ── HERO ── */}
      <section className="pt-36 pb-16 bg-white">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* LEFT — copy */}
            <div>
              <FadeIn>
                <p className="eyebrow mb-4">What we build</p>
              </FadeIn>
              <FadeIn delay={0.08}>
                <h1 className="text-[clamp(1.75rem,3vw,2.5rem)] font-extrabold text-brand-black tracking-tight leading-[1.1] mb-5">
                  Solutions tailored to your business — not the other way round.
                </h1>
              </FadeIn>
              <FadeIn delay={0.14}>
                <p className="text-brand-gray-500 text-[15px] leading-relaxed max-w-md mb-8">
                  Every engagement starts with a discovery call, a clear scope, and a fixed price.
                  No surprises. No scope creep. Just results.
                </p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <button
                  onClick={openBooking}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-brand-black text-white text-sm font-semibold rounded-lg hover:bg-brand-gray-800 active:scale-[0.97] transition-all duration-200"
                >
                  Book a Free Consultation <ArrowUpRight size={14} />
                </button>
              </FadeIn>
            </div>

            {/* RIGHT — service nav cards */}
            <FadeIn delay={0.1}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {services.map((s) => {
                  const Icon = s.icon
                  const c = colorMap[s.color]
                  return (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className={`group flex items-start gap-3 p-4 rounded-xl border border-brand-gray-100 bg-white hover:shadow-md ${c.border} transition-all duration-200`}
                    >
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${c.icon}`}>
                        <Icon size={16} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-brand-black leading-tight">{s.name}</p>
                        <p className="text-xs text-brand-gray-400 mt-0.5">{s.tagline}</p>
                      </div>
                      <ArrowRight size={14} className="ml-auto mt-0.5 text-brand-gray-300 group-hover:text-brand-black group-hover:translate-x-1 transition-all duration-200 flex-shrink-0" />
                    </a>
                  )
                })}
              </div>

              {/* Mini stats row */}
              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-brand-gray-100">
                {[
                  { value: '10+', label: 'Projects delivered' },
                  { value: '100%', label: 'On-time launches' },
                  { value: '3+', label: 'Live products' },
                ].map(({ value, label }) => (
                  <div key={label} className="text-center">
                    <p className="text-xl font-extrabold text-brand-black">{value}</p>
                    <p className="text-xs text-brand-gray-400 mt-0.5">{label}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── SERVICE DETAIL CARDS ── */}
      <section className="pb-20 bg-white">
        <div className="container-content">
          <div className="flex flex-col gap-10">
            {services.map((service, i) => {
              const { icon: Icon, id, name, tagline, description, features, deliverables, price, color } = service
              const c = colorMap[color]
              const isEven = i % 2 === 0

              return (
                <FadeIn key={id} delay={0.06}>
                  <div
                    id={id}
                    className={`rounded-2xl border border-brand-gray-100 overflow-hidden transition-all duration-300 ${c.border} hover:shadow-lg`}
                  >
                    <div className={`grid grid-cols-1 lg:grid-cols-2 ${!isEven ? 'lg:grid-flow-dense' : ''}`}>

                      {/* INFO PANEL */}
                      <div className={`p-8 lg:p-10 flex flex-col justify-center ${!isEven ? 'lg:col-start-2' : ''}`}>
                        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold ${c.badge} mb-5 w-fit`}>
                          <Icon size={13} />
                          {tagline}
                        </div>
                        <h2 className="text-xl font-extrabold text-brand-black mb-3 tracking-tight">{name}</h2>
                        <p className="text-brand-gray-500 text-[14px] leading-relaxed mb-7">{description}</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-7">
                          <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-brand-gray-400 mb-3">What’s included</p>
                            <ul className="space-y-2">
                              {features.map((f) => (
                                <li key={f} className="flex items-start gap-2 text-sm text-brand-gray-600">
                                  <CheckCircle2 size={13} className={`mt-0.5 flex-shrink-0 ${c.check}`} />
                                  {f}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-brand-gray-400 mb-3">You receive</p>
                            <ul className="space-y-2">
                              {deliverables.map((d) => (
                                <li key={d} className="flex items-start gap-2 text-sm text-brand-gray-600">
                                  <ArrowRight size={12} className={`mt-0.5 flex-shrink-0 ${c.check}`} />
                                  {d}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-4 pt-5 border-t border-brand-gray-100">
                          <div>
                            <p className="text-xs text-brand-gray-400 mb-0.5">Starting from</p>
                            <p className="text-xl font-extrabold text-brand-black tracking-tight">{price}</p>
                          </div>
                          <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-black text-white text-sm font-semibold rounded-lg hover:bg-brand-gray-800 active:scale-[0.97] transition-all duration-200 ml-auto"
                          >
                            Get a quote <ArrowUpRight size={14} />
                          </Link>
                        </div>
                      </div>

                      {/* VISUAL PANEL */}
                      <div className={`${c.bg} p-8 lg:p-10 flex flex-col justify-center items-start gap-5 ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${c.icon}`}>
                          <Icon size={22} />
                        </div>
                        <div className="space-y-2.5 w-full">
                          {features.slice(0, 4).map((f) => (
                            <div key={f} className="flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-xl px-4 py-2.5 shadow-sm">
                              <span className={`w-2 h-2 rounded-full flex-shrink-0 ${c.dot}`} />
                              <span className="text-sm font-medium text-brand-gray-700">{f}</span>
                            </div>
                          ))}
                        </div>
                        <p className="text-xs text-brand-gray-400">+ {features.length - 4} more included</p>
                      </div>

                    </div>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── PROCESS STRIP ── */}
      <section className="section-pad bg-brand-gray-50">
        <div className="container-content">
          <FadeIn>
            <div className="text-center max-w-xl mx-auto mb-12">
              <p className="eyebrow mb-3">How it works</p>
              <h2 className="text-2xl font-extrabold text-brand-black tracking-tight">From first call to live product</h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
            {[
              { step: '01', label: 'Discovery' },
              { step: '02', label: 'Planning' },
              { step: '03', label: 'Design' },
              { step: '04', label: 'Development' },
              { step: '05', label: 'Testing' },
              { step: '06', label: 'Launch' },
              { step: '07', label: 'Support' },
            ].map(({ step, label }, i) => (
              <FadeIn key={step} delay={i * 0.05}>
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-brand-black text-white text-xs font-bold flex items-center justify-center">{step}</div>
                  <p className="text-sm font-semibold text-brand-gray-700">{label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-pad bg-white">
        <div className="container-content">
          <FadeIn>
            <div className="rounded-2xl bg-brand-black text-white p-10 lg:p-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="max-w-lg">
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-gray-400 mb-3">Let’s build together</p>
                <h2 className="text-2xl font-extrabold tracking-tight mb-3">Ready to Build Your Next Digital Solution?</h2>
                <p className="text-brand-gray-400 text-[15px] leading-relaxed">Book a free 30-minute consultation. We’ll understand your goals and propose the right solution.</p>
              </div>
              <button
                onClick={openBooking}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-brand-black text-sm font-bold rounded-lg hover:bg-brand-gray-100 active:scale-[0.97] transition-all duration-200 flex-shrink-0"
              >
                Schedule a Free Consultation <ArrowUpRight size={15} />
              </button>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
