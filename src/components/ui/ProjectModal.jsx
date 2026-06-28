import { useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { X, ExternalLink, CheckCircle, Zap, Database, Cpu, TrendingUp, Award, Globe } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const ICON_MAP = {
  'check-circle': CheckCircle,
  'zap': Zap,
  'database': Database,
  'cpu': Cpu,
  'trending-up': TrendingUp,
  'award': Award,
  'globe': Globe,
}

function MetricCard({ label, value, note, icon }) {
  const Icon = ICON_MAP[icon] ?? CheckCircle
  return (
    <div className="flex flex-col gap-1 p-4 rounded-xl bg-brand-gray-50 border border-brand-gray-100">
      <div className="flex items-center gap-1.5 text-brand-gray-400 mb-1">
        <Icon size={13} />
        <span className="text-[10px] uppercase tracking-widest font-semibold">{label}</span>
      </div>
      <span className="text-2xl font-extrabold text-brand-black leading-none">{value}</span>
      {note && <span className="text-[11px] text-brand-gray-400 mt-0.5">{note}</span>}
    </div>
  )
}

export function ProjectModal({ project, onClose }) {
  const handleKey = useCallback((e) => {
    if (e.key === 'Escape') onClose()
  }, [onClose])

  useEffect(() => {
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [handleKey])

  if (!project) return null

  const p = project

  return createPortal(
    <AnimatePresence>
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label={`${p.client?.name ?? p.headline} case study`}
      >
        {/* Scrim */}
        <div className="absolute inset-0 bg-brand-black/60 backdrop-blur-sm" />

        {/* Sheet */}
        <motion.div
          key="sheet"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="relative z-10 w-full max-w-3xl max-h-[92dvh] sm:max-h-[88dvh] bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-4 px-6 pt-6 pb-4 border-b border-brand-gray-100 shrink-0">
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap gap-1.5 mb-2">
                <span className="px-2.5 py-0.5 bg-brand-gray-100 text-brand-gray-600 text-[11px] font-semibold rounded-full">{p.type}</span>
                {p.tags?.slice(0, 3).map(t => (
                  <span key={t} className="px-2.5 py-0.5 bg-brand-gray-100 text-brand-gray-600 text-[11px] font-medium rounded-full">{t}</span>
                ))}
                {p.status === 'live' && (
                  <span className="px-2.5 py-0.5 bg-emerald-50 text-emerald-700 text-[11px] font-semibold rounded-full border border-emerald-200">● Live</span>
                )}
              </div>
              <h2 className="text-xl font-extrabold text-brand-black leading-snug">{p.client?.name ?? p.headline}</h2>
              {p.client && (
                <p className="text-sm text-brand-gray-400 mt-0.5">{p.client.industry} · {p.client.location}</p>
              )}
            </div>
            <div className="flex items-center gap-2 shrink-0">
              {p.live && (
                <a href={p.live} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-brand-gray-200 text-[12px] font-semibold text-brand-gray-700 hover:bg-brand-gray-50 transition-colors">
                  <ExternalLink size={12} /> View live
                </a>
              )}
              <button onClick={onClose}
                className="p-2 rounded-xl hover:bg-brand-gray-100 text-brand-gray-400 hover:text-brand-black transition-colors"
                aria-label="Close">
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Scrollable body */}
          <div className="overflow-y-auto flex-1 px-6 py-6 space-y-8">

            {/* Headline + summary */}
            {p.headline && p.headline !== 'Coming soon' && (
              <div>
                <p className="text-[15px] font-semibold text-brand-black leading-relaxed">{p.headline}</p>
                {p.summary && <p className="text-sm text-brand-gray-500 mt-2 leading-relaxed">{p.summary}</p>}
              </div>
            )}

            {/* Metrics */}
            {p.metrics?.length > 0 && (
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-brand-gray-400 mb-3">Results</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {p.metrics.map((m) => <MetricCard key={m.label} {...m} />)}
                </div>
              </div>
            )}

            {/* The story: Context → Brief → Solution → Outcome */}
            {p.context && (
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-brand-gray-400 mb-2">The Situation</h3>
                <p className="text-sm text-brand-gray-600 leading-relaxed">{p.context}</p>
              </div>
            )}

            {p.brief && (
              <div className="pl-4 border-l-2 border-brand-gray-200">
                <p className="text-sm text-brand-gray-500 leading-relaxed italic">"{p.brief}"</p>
                <span className="block mt-1.5 text-[11px] font-semibold text-brand-gray-400">— {p.client?.name ?? 'Client'}</span>
              </div>
            )}

            {p.solution && (
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-brand-gray-400 mb-2">What We Built</h3>
                <p className="text-sm text-brand-gray-600 leading-relaxed">{p.solution}</p>
              </div>
            )}

            {/* Challenges */}
            {p.challenges?.length > 0 && (
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-brand-gray-400 mb-3">Challenges We Solved</h3>
                <div className="space-y-3">
                  {p.challenges.map((c, i) => (
                    <div key={i} className="p-4 rounded-xl bg-brand-gray-50 border border-brand-gray-100">
                      <p className="text-sm font-bold text-brand-black mb-1">{c.title}</p>
                      <p className="text-[13px] text-brand-gray-500 leading-relaxed">{c.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {p.outcome && (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-100">
                <h3 className="text-xs font-bold uppercase tracking-widest text-emerald-700 mb-2">Outcome</h3>
                <p className="text-sm text-emerald-900 leading-relaxed">{p.outcome}</p>
              </div>
            )}

            {/* Features */}
            {p.features?.length > 0 && (
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-brand-gray-400 mb-3">What Was Built</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {p.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-[13px] text-brand-gray-600">
                      <span className="mt-0.5 text-emerald-500 shrink-0">✓</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Stack */}
            {p.stack?.length > 0 && (
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-brand-gray-400 mb-3">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="px-3 py-1 bg-brand-gray-100 text-brand-gray-700 text-[12px] font-semibold rounded-full">{s}</span>
                  ))}
                </div>
              </div>
            )}

            {/* Testimonial */}
            {p.testimonial?.quote && (
              <div className="p-5 rounded-xl bg-brand-black text-white">
                <p className="text-sm leading-relaxed italic mb-3">"{p.testimonial.quote}"</p>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-brand-gray-600 flex items-center justify-center text-[11px] font-bold">
                    {p.testimonial.author?.[0] ?? '?'}
                  </div>
                  <div>
                    <span className="text-[12px] font-semibold block">{p.testimonial.author}</span>
                    <span className="text-[11px] text-brand-gray-400">{p.testimonial.role}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Coming soon placeholder */}
            {(!p.context && !p.solution) && (
              <div className="py-12 text-center">
                <p className="text-4xl mb-3">🛠️</p>
                <p className="text-sm font-semibold text-brand-gray-400">Case study coming soon</p>
                <p className="text-[13px] text-brand-gray-300 mt-1">We're writing this one up. Check back shortly.</p>
              </div>
            )}
          </div>

          {/* Footer CTA */}
          <div className="px-6 py-4 border-t border-brand-gray-100 bg-white shrink-0">
            <a
              href="/contact"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-brand-black text-white text-sm font-semibold rounded-xl hover:bg-brand-gray-800 transition-colors"
            >
              Start a similar project →
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body
  )
}
