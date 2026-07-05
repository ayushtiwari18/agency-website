import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { 
  ArrowLeft, ExternalLink, CheckCircle, Zap, Database, Cpu, TrendingUp, Award, Globe, 
  ChevronLeft, ChevronRight, Maximize2, X, MessageCircle, Star, Clock, Layers, Layout, Briefcase, Users 
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '../data/projects'
import ContactCTA from '../sections/ContactCTA'

const ICON_MAP = {
  'check-circle': CheckCircle,
  'zap': Zap,
  'database': Database,
  'cpu': Cpu,
  'trending-up': TrendingUp,
  'award': Award,
  'globe': Globe,
  'users': Users,
  'message-circle': MessageCircle,
  'star': Star,
  'clock': Clock,
  'layers': Layers,
  'layout': Layout,
  'briefcase': Briefcase,
}

const COLOR_MAP = {
  emerald: { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200', dot: 'bg-emerald-400' },
  violet:  { bg: 'bg-purple-50',  text: 'text-purple-700',  border: 'border-purple-200',  dot: 'bg-purple-400'  },
  gold:    { bg: 'bg-amber-50',   text: 'text-amber-700',   border: 'border-amber-200',   dot: 'bg-amber-400'   },
  blue:    { bg: 'bg-blue-50',    text: 'text-blue-700',    border: 'border-blue-200',    dot: 'bg-blue-400'    },
  default: { bg: 'bg-brand-gray-50', text: 'text-brand-gray-600', border: 'border-brand-gray-200', dot: 'bg-brand-gray-400' },
}

function MetricCard({ label, value, note, icon }) {
  const Icon = ICON_MAP[icon] ?? CheckCircle
  return (
    <div className="flex flex-col gap-1 p-5 rounded-2xl bg-white border border-brand-gray-100 shadow-xs">
      <div className="flex items-center gap-1.5 text-brand-gray-400 mb-1">
        <Icon size={14} />
        <span className="text-[10px] uppercase tracking-widest font-semibold">{label}</span>
      </div>
      <span className="text-3xl font-extrabold text-brand-black leading-none">{value}</span>
      {note && <span className="text-xs text-brand-gray-400 mt-1">{note}</span>}
    </div>
  )
}

function ProjectGalleryCarousel({ images, title }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  if (!images || images.length === 0) return null

  const items = images.map(img => typeof img === 'string' ? { url: img, caption: title } : img)
  const current = items[currentIndex]

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % items.length)
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)

  // Automatic slideshow interval (3.5 seconds)
  useEffect(() => {
    if (items.length <= 1 || isFullscreen || isHovered) return
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length)
    }, 3500)
    return () => clearInterval(timer)
  }, [items.length, isFullscreen, isHovered])

  return (
    <div className="w-full mb-10">
      {/* Main Full-Width Carousel Frame */}
      <div 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative w-full rounded-3xl overflow-hidden bg-brand-black border border-brand-gray-200/20 shadow-2xl group"
      >
        <div className="relative w-full aspect-[16/9] min-h-[340px] sm:min-h-[460px] md:min-h-[540px] lg:min-h-[620px] flex items-center justify-center overflow-hidden bg-brand-black">
          <AnimatePresence mode="wait">
            <motion.img
              key={current.url}
              src={current.url}
              alt={current.caption || title}
              initial={{ opacity: 0, scale: 0.99 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.01 }}
              transition={{ duration: 0.4 }}
              className="w-full h-full object-cover object-top"
            />
          </AnimatePresence>

          {/* Top Info Bar */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
            <div className="flex items-center gap-2">
              <span className="px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-semibold border border-white/10 shadow-lg">
                {currentIndex + 1} / {items.length}
              </span>
              <span className="hidden sm:inline-flex px-3 py-1 rounded-full bg-emerald-500/80 backdrop-blur-md text-white text-[11px] font-semibold tracking-wider uppercase">
                Auto-Playing
              </span>
            </div>
            <button
              onClick={() => setIsFullscreen(true)}
              className="pointer-events-auto p-2.5 rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-black/80 transition-all border border-white/10 hover:scale-105"
              aria-label="Expand image to fullscreen"
            >
              <Maximize2 size={16} />
            </button>
          </div>

          {/* Navigation Controls */}
          {items.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3.5 rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-black/90 transition-all opacity-90 sm:opacity-0 group-hover:opacity-100 border border-white/15 hover:scale-105 shadow-xl"
                aria-label="Previous image"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3.5 rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-black/90 transition-all opacity-90 sm:opacity-0 group-hover:opacity-100 border border-white/15 hover:scale-105 shadow-xl"
                aria-label="Next image"
              >
                <ChevronRight size={22} />
              </button>
            </>
          )}

          {/* Bottom Caption Bar */}
          {current.caption && (
            <div className="absolute bottom-0 inset-x-0 p-5 sm:p-7 bg-gradient-to-t from-black/90 via-black/50 to-transparent text-white">
              <p className="text-sm sm:text-base font-semibold tracking-wide drop-shadow-md">{current.caption}</p>
            </div>
          )}
        </div>

        {/* Thumbnail Navigation Selector */}
        {items.length > 1 && (
          <div className="p-4 bg-brand-black/95 border-t border-white/10 flex items-center justify-center gap-3 overflow-x-auto">
            {items.map((img, idx) => (
              <button
                key={img.url + idx}
                onClick={() => setCurrentIndex(idx)}
                className={`relative shrink-0 w-20 sm:w-28 aspect-video rounded-xl overflow-hidden border-2 transition-all ${
                  idx === currentIndex 
                    ? 'border-white scale-105 shadow-lg ring-2 ring-white/30' 
                    : 'border-transparent opacity-40 hover:opacity-100'
                }`}
              >
                <img src={img.url} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setIsFullscreen(false)}
          >
            <button
              onClick={() => setIsFullscreen(false)}
              className="absolute top-6 right-6 p-3.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all"
              aria-label="Close fullscreen"
            >
              <X size={24} />
            </button>
            <img
              src={current.url}
              alt={current.caption || title}
              className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
            />
            {current.caption && (
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 rounded-full bg-black/80 border border-white/15 text-white text-sm font-medium shadow-2xl backdrop-blur-md">
                {current.caption}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug || p.id === slug)

  if (!project) {
    return (
      <div className="min-h-screen pt-36 pb-24 bg-white flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl font-extrabold text-brand-black mb-4">Project Not Found</h1>
        <p className="text-brand-gray-500 mb-8 max-w-md">The case study you are looking for does not exist or has been moved.</p>
        <Link
          to="/work"
          className="inline-flex items-center gap-2 px-6 py-3 bg-brand-black text-white text-sm font-semibold rounded-xl hover:bg-brand-gray-800 transition-colors"
        >
          <ArrowLeft size={16} /> Back to Work
        </Link>
      </div>
    )
  }

  const p = project
  const c = COLOR_MAP[p.color] ?? COLOR_MAP.default
  const SITE = 'https://tj-creates.vercel.app'

  // Prepare images array for carousel
  const galleryImages = p.images?.length > 0 ? p.images : (p.image ? [p.image] : [])

  return (
    <>
      <Helmet>
        <title>{`${p.client?.name ?? p.headline} Case Study — TNJ Solutions`}</title>
        <meta name="description" content={p.summary ?? p.headline} />
        <meta property="og:title" content={`${p.client?.name ?? p.headline} — Case Study`} />
        <meta property="og:description" content={p.summary ?? p.headline} />
        <meta property="og:url" content={`${SITE}/work/${p.slug}`} />
        <link rel="canonical" href={`${SITE}/work/${p.slug}`} />
      </Helmet>

      <div className="min-h-screen pt-28 pb-16 bg-brand-gray-50">
        <div className="container-content max-w-5xl">
          {/* Back Navigation */}
          <div className="mb-6">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-gray-500 hover:text-brand-black transition-colors"
            >
              <ArrowLeft size={14} /> Back to all work
            </Link>
          </div>

          {/* 1. FIRST SECTION: Full-Width Auto-Playing Image Carousel */}
          {galleryImages.length > 0 && (
            <ProjectGalleryCarousel images={galleryImages} title={p.client?.name ?? p.headline} />
          )}

          {/* 2. SECOND SECTION: Main Case Study Details Header Card */}
          <div className="bg-white rounded-3xl border border-brand-gray-100 p-8 md:p-12 shadow-sm mb-8">
            {/* Badges & Status */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="px-3 py-1 bg-brand-black text-white text-xs font-semibold rounded-full">
                {p.type}
              </span>
              {p.tags?.map(t => (
                <span key={t} className="px-3 py-1 bg-brand-gray-100 text-brand-gray-600 text-xs font-medium rounded-full">
                  {t}
                </span>
              ))}
              {p.status === 'live' && (
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 ${c.bg} ${c.text} border ${c.border} text-xs font-semibold rounded-full`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${c.dot} animate-pulse`} /> Live Project
                </span>
              )}
            </div>

            {/* Title & Headline */}
            <h1 className="text-3xl md:text-5xl font-extrabold text-brand-black leading-tight tracking-tight mb-4">
              {p.client?.name ?? p.headline}
            </h1>

            {p.client && (
              <p className="text-base text-brand-gray-400 font-medium mb-6">
                {p.client.industry} &middot; {p.client.location}
              </p>
            )}

            {p.headline && (
              <p className="text-lg md:text-xl font-semibold text-brand-gray-700 leading-relaxed mb-6">
                {p.headline}
              </p>
            )}

            {p.summary && (
              <p className="text-base text-brand-gray-500 leading-relaxed max-w-3xl mb-8">
                {p.summary}
              </p>
            )}

            {p.live && (
              <div className="pt-4 border-t border-brand-gray-100 flex flex-wrap items-center justify-between gap-4">
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-brand-black text-white text-sm font-semibold rounded-xl hover:bg-brand-gray-800 transition-colors"
                >
                  Visit Live Site <ExternalLink size={14} />
                </a>
              </div>
            )}
          </div>

          {/* 3. Metrics Section */}
          {p.metrics?.length > 0 && (
            <div className="mb-8">
              <h2 className="text-xs font-extrabold uppercase tracking-widest text-brand-gray-400 mb-4 px-2">Key Metrics &amp; Impact</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {p.metrics.map(m => (
                  <MetricCard key={m.label} {...m} />
                ))}
              </div>
            </div>
          )}

          {/* 4. The Story Container */}
          <div className="bg-white rounded-3xl border border-brand-gray-100 p-8 md:p-12 shadow-sm space-y-10 mb-12">
            {/* Situation */}
            {p.context && (
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-brand-gray-400 mb-3">The Situation & Background</h3>
                <p className="text-base text-brand-gray-600 leading-relaxed">{p.context}</p>
              </div>
            )}

            {/* Brief */}
            {p.brief && (
              <div className="p-6 rounded-2xl bg-brand-gray-50 border-l-4 border-brand-black">
                <p className="text-base text-brand-gray-700 leading-relaxed italic">"{p.brief}"</p>
                <span className="block mt-3 text-xs font-bold text-brand-gray-500 uppercase tracking-wider">— Client Request ({p.client?.name ?? 'Client'})</span>
              </div>
            )}

            {/* Solution */}
            {p.solution && (
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-brand-gray-400 mb-3">What We Built &amp; Solution</h3>
                <p className="text-base text-brand-gray-600 leading-relaxed">{p.solution}</p>
              </div>
            )}

            {/* Challenges Solved */}
            {p.challenges?.length > 0 && (
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-brand-gray-400 mb-4">Engineering Challenges Solved</h3>
                <div className="space-y-4">
                  {p.challenges.map((item, i) => (
                    <div key={i} className="p-6 rounded-2xl bg-brand-gray-50 border border-brand-gray-100">
                      <h4 className="text-base font-bold text-brand-black mb-2">{item.title}</h4>
                      <p className="text-sm text-brand-gray-600 leading-relaxed">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Outcome */}
            {p.outcome && (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200/80">
                <h3 className="text-xs font-bold uppercase tracking-widest text-emerald-800 mb-2">Final Outcome</h3>
                <p className="text-base text-emerald-950 font-medium leading-relaxed">{p.outcome}</p>
              </div>
            )}

            {/* Features List */}
            {p.features?.length > 0 && (
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-brand-gray-400 mb-4">Key Features &amp; Capabilities</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {p.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-brand-gray-50 border border-brand-gray-100/80 text-sm text-brand-gray-700 font-medium">
                      <CheckCircle size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack */}
            {p.stack?.length > 0 && (
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-brand-gray-400 mb-4">Technology Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map(tech => (
                    <span key={tech} className="px-4 py-2 bg-brand-gray-100 text-brand-black text-xs font-semibold rounded-xl">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Testimonial */}
            {p.testimonial?.quote && (
              <div className="p-8 rounded-3xl bg-brand-black text-white">
                <p className="text-lg leading-relaxed italic mb-6">"{p.testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-gray-700 flex items-center justify-center text-sm font-bold text-white">
                    {p.testimonial.author?.[0] ?? 'C'}
                  </div>
                  <div>
                    <span className="text-sm font-bold block">{p.testimonial.author}</span>
                    <span className="text-xs text-brand-gray-400">{p.testimonial.role}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <ContactCTA />
    </>
  )
}
