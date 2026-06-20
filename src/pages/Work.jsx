import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, ExternalLink, Github } from 'lucide-react'
import { FadeIn } from '../components/ui/FadeIn'
import { Badge } from '../components/ui/Badge'
import { projects } from '../data/projects'
import ContactCTA from '../sections/ContactCTA'

function ProjectPlaceholder({ type }) {
  const styles = {
    'Portfolio Website': 'from-brand-gray-100 to-brand-gray-200',
    'Business Website':  'from-brand-gray-800 to-brand-black',
    'Growth Website':    'from-brand-gray-700 to-brand-gray-900',
  }
  return (
    <div className={`w-full h-full bg-gradient-to-br ${styles[type] ?? 'from-brand-gray-100 to-brand-gray-200'} flex items-center justify-center`}>
      <p className="text-xs font-medium uppercase tracking-widest opacity-30 text-brand-gray-500">{type}</p>
    </div>
  )
}

export default function Work() {
  return (
    <>
      <Helmet>
        <title>Work — T&amp;J Creates</title>
        <meta name="description" content="Case studies from T&J Creates. Real projects, real outcomes. See how we build websites that help businesses get clients." />
        <link rel="canonical" href="https://tjcreates.in/work" />
      </Helmet>

      {/* Hero */}
      <section className="section-pad pt-36 bg-white">
        <div className="container-content">
          <FadeIn><p className="eyebrow mb-4">Selected work</p></FadeIn>
          <FadeIn delay={0.08}>
            <h1 className="text-display-xl font-extrabold text-brand-black tracking-tight max-w-[640px] mb-6">
              Case studies, not screenshots.
            </h1>
          </FadeIn>
          <FadeIn delay={0.14}>
            <p className="text-[17px] text-brand-gray-500 leading-relaxed max-w-[480px]">
              Every project below led with a clear problem and measured against a real outcome.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Projects */}
      <section className="section-pad-sm bg-brand-gray-50">
        <div className="container-content space-y-6">
          {projects.map((project, i) => (
            <FadeIn key={project.id} delay={i * 0.1}>
              <div className="card-base overflow-hidden hover:shadow-[0_8px_40px_-8px_rgba(0,0,0,0.10)] hover:-translate-y-1 transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="h-[260px] lg:h-auto min-h-[260px]">
                    <ProjectPlaceholder type={project.type} />
                  </div>
                  <div className="p-8 lg:p-10 flex flex-col justify-between">
                    <div>
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        <Badge>{project.type}</Badge>
                        {project.tags.map(t => <Badge key={t}>{t}</Badge>)}
                      </div>
                      <h2 className="text-[1.5rem] font-extrabold text-brand-black leading-snug tracking-tight mb-4">
                        {project.title}
                      </h2>
                      <div className="space-y-3 mb-6">
                        <p className="text-sm text-brand-gray-500 leading-relaxed">
                          <span className="font-semibold text-brand-gray-700">Problem: </span>{project.problem}
                        </p>
                        <p className="text-sm text-brand-gray-500 leading-relaxed">
                          <span className="font-semibold text-brand-gray-700">Solution: </span>{project.solution}
                        </p>
                        <p className="text-sm text-brand-gray-600 leading-relaxed">
                          <span className="font-semibold text-brand-gray-700">Result: </span>{project.result}
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className="flex gap-8 pt-6 border-t border-brand-gray-100 mb-6">
                        {project.metrics.map(m => (
                          <div key={m.label} className="flex flex-col">
                            <span className="text-[1.8rem] font-extrabold text-brand-black leading-none tracking-tight">{m.value}</span>
                            <span className="text-[11px] text-brand-gray-500 uppercase tracking-wide mt-0.5">{m.label}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center gap-4">
                        {project.live && (
                          <a href={project.live} target="_blank" rel="noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-black hover:opacity-60 transition-opacity">
                            Live site <ExternalLink size={13} />
                          </a>
                        )}
                        {project.github && (
                          <a href={project.github} target="_blank" rel="noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-gray-500 hover:text-brand-black transition-colors">
                            GitHub <Github size={13} />
                          </a>
                        )}
                        {!project.live && !project.github && (
                          <Link to="/contact"
                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-black hover:gap-2.5 transition-all duration-200">
                            Start a similar project <ArrowRight size={14} />
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
