import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Reveal } from '../components/ui/Reveal'
import { RevealText } from '../components/ui/RevealText'
import { Badge } from '../components/ui/Badge'
import { projects } from '../data/projects'

/**
 * Dribbble-style UI mockup images — landscape, design-focused
 * Portfolio — clean design workspace / UI screens
 * Business — laptop showing a professional website
 * Growth    — analytics / dashboard / growth chart
 */
const PROJECT_IMAGES = {
  'Portfolio Website': {
    src: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=900&q=85&auto=format&fit=crop',
    position: 'object-center',
  },
  'Business Website': {
    src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=85&auto=format&fit=crop',
    position: 'object-center',
  },
  'Growth Website': {
    src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=85&auto=format&fit=crop',
    position: 'object-center',
  },
}

const OVERLAY = {
  'Portfolio Website': 'bg-brand-black/10',
  'Business Website':  'bg-brand-black/20',
  'Growth Website':    'bg-brand-black/15',
}

function ProjectImage({ type, featured = false }) {
  const img = PROJECT_IMAGES[type] ?? PROJECT_IMAGES['Business Website']
  const height = featured ? 'h-[360px] lg:h-full lg:min-h-[380px]' : 'h-[240px]'
  return (
    <div className={`relative w-full overflow-hidden ${height}`}>
      <img
        src={img.src}
        alt={type}
        className={`w-full h-full object-cover ${img.position} transition-transform duration-700 ease-out group-hover:scale-[1.04]`}
        loading="lazy"
      />
      <div className={`absolute inset-0 ${OVERLAY[type] ?? 'bg-brand-black/10'}`} />
    </div>
  )
}

function MetricPill({ label, value }) {
  return (
    <div className="flex flex-col">
      <span className="text-[1.6rem] font-extrabold text-brand-black leading-none tracking-tight">{value}</span>
      <span className="text-[11px] text-brand-gray-500 mt-0.5 uppercase tracking-wide">{label}</span>
    </div>
  )
}

export default function WorkSection() {
  const [featured, ...rest] = projects
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

        {/* Featured card */}
        <Reveal delay={80}>
          <motion.div
            whileHover={{ y: -5, boxShadow: '0 16px 48px -8px rgba(0,0,0,0.12)' }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            className="card-base overflow-hidden mb-5 group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative">
                <ProjectImage type={featured.type} featured />
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/90 backdrop-blur-sm text-[11px] font-semibold text-brand-black rounded-full border border-brand-gray-200">
                    &#9733; Featured
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    <Badge>{featured.type}</Badge>
                    {featured.tags.slice(0, 2).map((t) => <Badge key={t}>{t}</Badge>)}
                  </div>
                  <h3 className="text-[1.5rem] font-extrabold text-brand-black leading-snug tracking-tight mb-3">{featured.title}</h3>
                  <p className="text-sm text-brand-gray-500 leading-relaxed mb-2"><strong className="text-brand-gray-700">Problem:</strong> {featured.problem}</p>
                  <p className="text-sm text-brand-gray-600 leading-relaxed"><strong className="text-brand-gray-700">Result:</strong> {featured.result}</p>
                </div>
                <div>
                  <div className="flex gap-8 mt-7 pt-7 border-t border-brand-gray-100 mb-6">
                    {featured.metrics.map((m) => <MetricPill key={m.label} {...m} />)}
                  </div>
                  <Link to="/work" className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-brand-black">
                    Read the case study <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </Reveal>

        {/* Other cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {rest.map((project, i) => (
            <Reveal key={project.id} delay={120 + i * 90}>
              <motion.div
                whileHover={{ y: -5, boxShadow: '0 12px 36px -6px rgba(0,0,0,0.10)' }}
                transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                className="card-base overflow-hidden group"
              >
                <ProjectImage type={project.type} />
                <div className="p-6">
                  <div className="flex flex-wrap gap-1.5 mb-3"><Badge>{project.type}</Badge></div>
                  <h3 className="text-[16px] font-bold text-brand-black mb-1.5 leading-snug">{project.title}</h3>
                  <p className="text-sm text-brand-gray-500 leading-relaxed mb-4">{project.problem}</p>
                  <div className="flex gap-6 pt-4 border-t border-brand-gray-100 mb-4">
                    {project.metrics.map((m) => (
                      <div key={m.label} className="flex flex-col">
                        <span className="text-lg font-extrabold text-brand-black leading-none">{m.value}</span>
                        <span className="text-[10px] text-brand-gray-500 uppercase tracking-wide mt-0.5">{m.label}</span>
                      </div>
                    ))}
                  </div>
                  <Link to="/work" className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-brand-black">
                    View project <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
                  </Link>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
