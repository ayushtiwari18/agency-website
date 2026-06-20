import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { FadeIn } from '../components/ui/FadeIn'
import { Badge } from '../components/ui/Badge'
import { projects } from '../data/projects'

function MetricPill({ label, value }) {
  return (
    <div className="flex flex-col">
      <span className="text-[1.6rem] font-extrabold text-brand-black leading-none tracking-tight">{value}</span>
      <span className="text-[11px] text-brand-gray-500 mt-0.5 uppercase tracking-wide">{label}</span>
    </div>
  )
}

function ProjectPlaceholder({ type }) {
  const colors = {
    'Portfolio Website': 'from-brand-gray-100 to-brand-gray-200',
    'Business Website':  'from-brand-gray-800 to-brand-black',
    'Growth Website':    'from-brand-gray-700 to-brand-gray-900',
  }
  const textColors = {
    'Portfolio Website': 'text-brand-gray-400',
    'Business Website':  'text-brand-gray-600',
    'Growth Website':    'text-brand-gray-500',
  }
  return (
    <div className={`w-full h-full bg-gradient-to-br ${colors[type] ?? 'from-brand-gray-100 to-brand-gray-200'} flex items-center justify-center`}>
      <div className="text-center px-6">
        <div className="w-12 h-12 mx-auto mb-3 border-2 border-current rounded-xl opacity-20" />
        <p className={`text-xs font-medium uppercase tracking-widest opacity-40 ${textColors[type] ?? 'text-brand-gray-400'}`}>{type}</p>
      </div>
    </div>
  )
}

export default function WorkSection() {
  const [featured, ...rest] = projects

  return (
    <section className="section-pad bg-brand-gray-50">
      <div className="container-content">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <FadeIn>
              <p className="eyebrow mb-4">Selected Work</p>
            </FadeIn>
            <FadeIn delay={0.08}>
              <h2 className="text-display-lg font-extrabold text-brand-black tracking-tight">
                Case studies, not screenshots.
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.14} direction="left">
            <Link
              to="/work"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-black hover:gap-3 transition-all duration-200"
            >
              All case studies <ArrowRight size={14} />
            </Link>
          </FadeIn>
        </div>

        {/* Featured card */}
        <FadeIn delay={0.1}>
          <div className="group card-base overflow-hidden mb-5 hover:shadow-[0_8px_40px_-8px_rgba(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2">

              {/* Image */}
              <div className="relative h-[280px] lg:h-auto min-h-[280px] overflow-hidden bg-brand-gray-100">
                <ProjectPlaceholder type={featured.type} />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/90 backdrop-blur-sm text-[11px] font-semibold text-brand-black rounded-full border border-brand-gray-200">
                    ★ Featured
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    <Badge>{featured.type}</Badge>
                    {featured.tags.slice(0,2).map(t => <Badge key={t}>{t}</Badge>)}
                  </div>

                  <h3 className="text-[1.5rem] font-extrabold text-brand-black leading-snug tracking-tight mb-3">
                    {featured.title}
                  </h3>
                  <p className="text-sm text-brand-gray-500 leading-relaxed mb-4">
                    <strong className="text-brand-gray-700">Problem:</strong> {featured.problem}
                  </p>
                  <p className="text-sm text-brand-gray-600 leading-relaxed">
                    <strong className="text-brand-gray-700">Result:</strong> {featured.result}
                  </p>
                </div>

                {/* Metrics + CTA */}
                <div>
                  <div className="flex gap-8 mt-7 pt-7 border-t border-brand-gray-100 mb-6">
                    {featured.metrics.map((m) => (
                      <MetricPill key={m.label} {...m} />
                    ))}
                  </div>
                  <Link
                    to="/work"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-black group-hover:gap-2.5 transition-all duration-200"
                  >
                    Read the case study <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Two smaller cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {rest.map((project, i) => (
            <FadeIn key={project.id} delay={0.15 + i * 0.1}>
              <div className="group card-base overflow-hidden hover:shadow-[0_4px_24px_-4px_rgba(0,0,0,0.10)] hover:-translate-y-1 transition-all duration-300">

                {/* Image */}
                <div className="h-[200px] overflow-hidden">
                  <ProjectPlaceholder type={project.type} />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    <Badge>{project.type}</Badge>
                  </div>
                  <h3 className="text-[16px] font-bold text-brand-black mb-1.5 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-sm text-brand-gray-500 leading-relaxed mb-4">
                    {project.problem}
                  </p>

                  {/* Metrics */}
                  <div className="flex gap-6 pt-4 border-t border-brand-gray-100 mb-4">
                    {project.metrics.map((m) => (
                      <div key={m.label} className="flex flex-col">
                        <span className="text-lg font-extrabold text-brand-black leading-none">{m.value}</span>
                        <span className="text-[10px] text-brand-gray-500 uppercase tracking-wide mt-0.5">{m.label}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/work"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-black group-hover:gap-2.5 transition-all duration-200"
                  >
                    View project <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
