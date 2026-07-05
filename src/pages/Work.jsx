import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ExternalLink, ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { FadeIn } from '../components/ui/FadeIn'
import { projects } from '../data/projects'

const SITE          = 'https://tnj-solutions.vercel.app'
const OG_IMAGE      = `${SITE}/og.png`
const TWITTER_IMAGE = `${SITE}/og-twitter.png`
const TAGS = ['All', ...new Set(projects.flatMap(p => p.tags ?? []))]

const COLOR_MAP = {
  emerald: { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200', dot: 'bg-emerald-400' },
  blue:    { bg: 'bg-blue-50',    text: 'text-blue-700',    border: 'border-blue-200',    dot: 'bg-blue-400'    },
  purple:  { bg: 'bg-purple-50',  text: 'text-purple-700',  border: 'border-purple-200',  dot: 'bg-purple-400'  },
  default: { bg: 'bg-brand-gray-50', text: 'text-brand-gray-600', border: 'border-brand-gray-200', dot: 'bg-brand-gray-400' },
}

function ProjectCard({ project }) {
  const c = COLOR_MAP[project.color] ?? COLOR_MAP.default
  const isLive    = project.status === 'live'
  const hasStory  = !!(project.context || project.solution)

  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: '0 16px 48px -8px rgba(0,0,0,0.12)' }}
      transition={{ type: 'spring', stiffness: 280, damping: 22 }}
      className="card-base overflow-hidden group text-left w-full h-full"
    >
      <Link
        to={`/work/${project.slug ?? project.id}`}
        className="block w-full h-full focus-visible:ring-2 focus-visible:ring-brand-black focus-visible:outline-none"
        aria-label={`Open ${project.client?.name ?? project.headline} case study`}
      >
        {/* Image / placeholder */}
        <div className="aspect-video bg-brand-gray-100 overflow-hidden relative">
          {project.image
            ? <img src={project.image} alt={project.client?.name ?? project.headline}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy" width="800" height="450" />
            : (
              <div className={`w-full h-full flex flex-col items-center justify-center gap-2 ${c.bg}`}>
                <span className={`text-3xl font-extrabold tracking-tight ${c.text} opacity-20 select-none`}>
                  {(project.client?.name ?? project.headline ?? 'Project').slice(0, 2).toUpperCase()}
                </span>
              </div>
            )
          }
          {/* Status badge */}
          <div className="absolute top-3 left-3 flex gap-2">
            {isLive && (
              <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 ${c.bg} ${c.text} border ${c.border} text-[11px] font-semibold rounded-full backdrop-blur-sm`}>
                <span className={`w-1.5 h-1.5 rounded-full ${c.dot} animate-pulse`} /> Live
              </span>
            )}
            {project.featured && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-white/90 backdrop-blur-sm text-[11px] font-semibold text-brand-black rounded-full border border-brand-gray-200">
                ★ Featured
              </span>
            )}
          </div>
          {/* Hover reveal */}
          <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/10 transition-colors duration-300 flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 inline-flex items-center gap-1.5 px-4 py-2 bg-white rounded-full text-[12px] font-bold text-brand-black shadow-lg">
              {hasStory ? 'Read case study' : 'View project'} <ArrowUpRight size={12} />
            </span>
          </div>
        </div>

        {/* Card body */}
        <div className="p-6">
          <div className="flex items-start justify-between gap-3 mb-2">
            <div className="flex-1 min-w-0">
              <p className="text-[11px] font-semibold text-brand-gray-400 uppercase tracking-widest mb-1">{project.type}</p>
              <h2 className="text-[15px] font-bold text-brand-black leading-snug">
                {project.client?.name ?? project.headline}
              </h2>
            </div>
            {project.live && (
              <a href={project.live} target="_blank" rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="shrink-0 p-1.5 rounded-lg text-brand-gray-300 hover:text-brand-black hover:bg-brand-gray-100 transition-colors"
                aria-label="View live site">
                <ExternalLink size={14} />
              </a>
            )}
          </div>

          <p className="text-sm text-brand-gray-500 leading-relaxed mb-4 line-clamp-2">
            {project.summary ?? project.description ?? (hasStory ? 'Click to read the full case study.' : 'Case study coming soon.')}
          </p>

          {/* Metrics row */}
          {project.metrics?.length > 0 && (
            <div className="flex gap-6 pt-4 border-t border-brand-gray-100 mb-4">
              {project.metrics.slice(0, 3).map((m) => (
                <div key={m.label} className="flex flex-col">
                  <span className="text-lg font-extrabold text-brand-black leading-none">{m.value}</span>
                  <span className="text-[10px] text-brand-gray-400 uppercase tracking-wide mt-0.5">{m.label}</span>
                </div>
              ))}
            </div>
          )}

          <div className="flex flex-wrap gap-1.5">
            {project.tags?.map(t => (
              <span key={t} className="px-2.5 py-0.5 bg-brand-gray-100 text-brand-gray-600 text-[11px] font-medium rounded-full">{t}</span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default function Work() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? projects
    : projects.filter(p => p.tags?.includes(active))

  return (
    <>
      <Helmet>
        <title>Work — TNJ Solutions</title>
        <meta name="description" content="Real case studies from TNJ Solutions — e-commerce, custom software, and web projects with outcomes and story." />
        <meta property="og:title" content="Work — TNJ Solutions" />
        <meta property="og:url" content={`${SITE}/work`} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={TWITTER_IMAGE} />
        <link rel="canonical" href={`${SITE}/work`} />
      </Helmet>

      <section className="section-pad pt-36 bg-white">
        <div className="container-content">

          {/* Header */}
          <div className="max-w-2xl mb-12">
            <FadeIn><p className="eyebrow mb-4">Our work</p></FadeIn>
            <FadeIn delay={0.08}>
              <h1 className="text-display-xl font-extrabold text-brand-black tracking-tight mb-5">
                Real projects.<br />Real results.
              </h1>
            </FadeIn>
            <FadeIn delay={0.14}>
              <p className="text-brand-gray-500 text-[16px] leading-relaxed">
                Every project has a story — a problem we solved, a challenge we pushed through, and a client that launched better for it. Click any project to read the full case study.
              </p>
            </FadeIn>
          </div>

          {/* Filter pills */}
          <FadeIn delay={0.1}>
            <div className="flex flex-wrap gap-2 mb-10">
              {TAGS.map(tag => (
                <button key={tag} onClick={() => setActive(tag)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                    active === tag
                      ? 'bg-brand-black text-white'
                      : 'bg-brand-gray-100 text-brand-gray-600 hover:bg-brand-gray-200'
                  }`}>
                  {tag}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Project grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((p, i) => (
              <FadeIn key={p.id} delay={i * 0.06}>
                <ProjectCard project={p} />
              </FadeIn>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="py-24 text-center">
              <p className="text-brand-gray-300 text-lg">No projects match this filter yet.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

