import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink, Github } from 'lucide-react'
import { motion } from 'framer-motion'
import { Reveal } from '../components/ui/Reveal'
import { RevealText } from '../components/ui/RevealText'
import { Badge } from '../components/ui/Badge'
import { projects } from '../data/projects'
import ContactCTA from '../sections/ContactCTA'
import SchemaOrg from '../components/seo/SchemaOrg'
import { breadcrumbSchema } from '../data/schema'

const workItemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'T&J Creates — Portfolio of Work',
  description: 'Case studies showing real web development projects, outcomes, and results.',
  url: 'https://tjcreates.in/work',
  itemListElement: projects.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: p.title,
    description: p.result,
    url: `https://tjcreates.in/work#${p.id}`,
  })),
}

const PROJECT_IMAGES = {
  'Portfolio Website': 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=900&q=85&auto=format&fit=crop',
  'Business Website':  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=85&auto=format&fit=crop',
  'Growth Website':    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=85&auto=format&fit=crop',
}

function ProjectImage({ type, alt }) {
  return (
    <div className="relative w-full h-full overflow-hidden min-h-[260px]">
      <img
        src={PROJECT_IMAGES[type] ?? PROJECT_IMAGES['Business Website']}
        alt={alt || `${type} project`}
        className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-brand-black/15" />
    </div>
  )
}

export default function Work() {
  return (
    <>
      <Helmet>
        <title>Work &amp; Case Studies — T&amp;J Creates</title>
        <meta name="description" content="Real web development projects with measurable outcomes. See how T&J Creates builds websites that help businesses get clients." />
        <meta property="og:title" content="Work & Case Studies — T&J Creates" />
        <meta property="og:description" content="Real projects, real outcomes. Case studies from T&J Creates." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://tjcreates.in/work" />
      </Helmet>

      <SchemaOrg schema={workItemListSchema} />
      <SchemaOrg schema={breadcrumbSchema([
        { name: 'Home', url: 'https://tjcreates.in/' },
        { name: 'Work', url: 'https://tjcreates.in/work' },
      ])} />

      {/* Page header */}
      <section className="section-pad pt-36 bg-white">
        <div className="container-content">
          <Reveal><p className="eyebrow mb-4">Selected work</p></Reveal>
          <RevealText delay={80} as="h1" className="text-display-xl font-extrabold text-brand-black tracking-tight max-w-[640px] mb-6">
            {'Case studies,\nnot screenshots.'}
          </RevealText>
          <Reveal delay={140}>
            <p className="text-[17px] text-brand-gray-500 leading-relaxed max-w-[480px]">
              Every project below led with a clear problem and measured against a real outcome.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Project cards */}
      <section className="section-pad-sm bg-brand-gray-50" aria-label="Project case studies">
        <div className="container-content space-y-6">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 80}>
              <motion.article
                id={project.id}
                whileHover={{ y: -4, boxShadow: '0 16px 48px -8px rgba(0,0,0,0.11)' }}
                transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                className="card-base overflow-hidden group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="h-[260px] lg:h-auto">
                    <ProjectImage
                      type={project.type}
                      alt={`${project.title} — ${project.type} built by T&J Creates`}
                    />
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
                      <dl className="space-y-3 mb-6">
                        <div>
                          <dt className="inline font-semibold text-sm text-brand-gray-700">Problem: </dt>
                          <dd className="inline text-sm text-brand-gray-500 leading-relaxed">{project.problem}</dd>
                        </div>
                        <div>
                          <dt className="inline font-semibold text-sm text-brand-gray-700">Solution: </dt>
                          <dd className="inline text-sm text-brand-gray-500 leading-relaxed">{project.solution}</dd>
                        </div>
                        <div>
                          <dt className="inline font-semibold text-sm text-brand-gray-700">Result: </dt>
                          <dd className="inline text-sm text-brand-gray-600 leading-relaxed">{project.result}</dd>
                        </div>
                      </dl>
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
                      <div className="flex items-center gap-5">
                        {project.live && (
                          <a href={project.live} target="_blank" rel="noreferrer noopener"
                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-black hover:opacity-60 transition-opacity">
                            Live site <ExternalLink size={13} />
                          </a>
                        )}
                        {project.github && (
                          <a href={project.github} target="_blank" rel="noreferrer noopener"
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
              </motion.article>
            </Reveal>
          ))}
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
