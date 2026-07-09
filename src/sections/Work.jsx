import { Link, useNavigate } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Reveal } from '../components/ui/Reveal'
import { RevealText } from '../components/ui/RevealText'
import { Badge } from '../components/ui/Badge'
import { projects } from '../data/projects'

const COLOR_MAP = {
  emerald: { bg: 'bg-emerald-50', text: 'text-emerald-700', dot: 'bg-emerald-400' },
  blue:    { bg: 'bg-blue-50',    text: 'text-blue-700',    dot: 'bg-blue-400'    },
  purple:  { bg: 'bg-purple-50',  text: 'text-purple-700',  dot: 'bg-purple-400'  },
  violet:  { bg: 'bg-purple-50',  text: 'text-purple-700',  dot: 'bg-purple-400'  },
  gold:    { bg: 'bg-amber-50',   text: 'text-amber-700',   dot: 'bg-amber-400'   },
  default: { bg: 'bg-brand-gray-50', text: 'text-brand-gray-500', dot: 'bg-brand-gray-400' },
}

function MetricPill({ label, value }) {
  return (
    <div className="flex flex-col">
      <span className="text-[1.6rem] font-extrabold text-brand-black leading-none tracking-tight">{value}</span>
      <span className="text-[11px] text-brand-gray-500 mt-0.5 uppercase tracking-wide">{label}</span>
    </div>
  )
}

function ProjectImage({ project, featured = false }) {
  const c = COLOR_MAP[project.color] ?? COLOR_MAP.default
  const height = featured ? 'h-[360px] lg:h-full lg:min-h-[380px]' : 'h-[240px]'
  return (
    <div className={`relative w-full overflow-hidden ${height}`}>
      {project.image
        ? (
          <img src={project.image} alt={project.client?.name ?? project.headline}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            loading="lazy" width="800" height="450" />
        ) : (
          <div className={`w-full h-full flex items-center justify-center ${c.bg}`}>
            <span className={`text-5xl font-extrabold tracking-tight ${c.text} opacity-20 select-none`}>
              {(project.client?.name ?? project.headline ?? 'P').slice(0, 2).toUpperCase()}
            </span>
          </div>
        )
      }
      {project.status === 'live' && (
        <div className="absolute top-3 left-3">
          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/90 backdrop-blur-sm text-[11px] font-semibold text-brand-black rounded-full border border-brand-gray-200`}>
            <span className={`w-1.5 h-1.5 rounded-full ${c.dot} animate-pulse`} /> Live
          </span>
        </div>
      )}
    </div>
  )
}

export default function WorkSection() {
  const navigate = useNavigate()

  const goToWork = (project) => {
    navigate(`/work/${project.slug ?? project.id}`)
  }

  return (
    <section className="section-pad bg-brand-gray-50">
      <div className="container-content">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <Reveal><p className="eyebrow mb-4">Selected Work</p></Reveal>
            <RevealText delay={80} className="text-display-lg font-extrabold text-brand-black tracking-tight">
              {'Case studies,\nnot screenshots.'}
            </RevealText>
          </div>
          <Reveal delay={120} direction="left">
            <Link to="/work" className="group inline-flex items-center gap-1.5 text-sm font-semibold text-brand-black">
              All case studies <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </Reveal>
        </div>

        {/* 2x2 grid of case studies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={120 + i * 90}>
              <motion.button
                onClick={() => goToWork(project)}
                whileHover={{ y: -5, boxShadow: '0 16px 40px -8px rgba(0,0,0,0.10)' }}
                transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                className="card-base overflow-hidden group w-full text-left cursor-pointer focus-visible:ring-2 focus-visible:ring-brand-black focus-visible:outline-none flex flex-col h-full"
                aria-label={`View ${project.client?.name ?? project.headline} case study`}
              >
                <ProjectImage project={project} />
                <div className="p-6 md:p-8 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      <Badge>{project.type}</Badge>
                      {project.tags?.slice(0, 2).map((t) => <Badge key={t}>{t}</Badge>)}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-brand-black mb-2 leading-snug tracking-tight">
                      {project.client?.name ?? project.headline}
                    </h3>
                    <p className="text-sm text-brand-gray-500 leading-relaxed mb-6 line-clamp-3">
                      {project.summary ?? project.brief ?? project.context?.slice(0, 120) + '…'}
                    </p>
                  </div>
                  <div>
                    {project.metrics?.length > 0 && (
                      <div className="flex gap-6 pt-5 border-t border-brand-gray-100 mb-5">
                        {project.metrics.slice(0, 3).map((m) => (
                          <div key={m.label} className="flex flex-col">
                            <span className="text-lg font-extrabold text-brand-black leading-none">{m.value}</span>
                            <span className="text-[10px] text-brand-gray-500 uppercase tracking-wide mt-1">{m.label}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    <span className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-brand-black">
                      View case study <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
                    </span>
                  </div>
                </div>
              </motion.button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
