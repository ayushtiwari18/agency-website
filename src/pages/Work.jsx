import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { ExternalLink } from 'lucide-react'
import { FadeIn } from '../components/ui/FadeIn'
import { projects } from '../data/projects'

const SITE = 'https://tj-creates.vercel.app'
const TAGS = ['All', ...new Set(projects.flatMap(p => p.tags))]

export default function Work() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? projects : projects.filter(p => p.tags.includes(active))

  return (
    <>
      <Helmet>
        <title>Work — T&amp;J Creates</title>
        <meta name="description" content="Browse websites built by T&J Creates — portfolio, business, and growth projects across a range of industries." />
        <meta property="og:title" content="Work — T&J Creates" />
        <meta property="og:url" content={`${SITE}/work`} />
        <link rel="canonical" href={`${SITE}/work`} />
      </Helmet>

      <section className="section-pad pt-36 bg-white">
        <div className="container-content">
          <div className="max-w-2xl mb-12">
            <FadeIn><p className="eyebrow mb-4">Our work</p></FadeIn>
            <FadeIn delay={0.08}>
              <h1 className="text-display-xl font-extrabold text-brand-black tracking-tight mb-5">Built for results.</h1>
            </FadeIn>
            <FadeIn delay={0.14}>
              <p className="text-brand-gray-500 text-[16px] leading-relaxed">
                Every project ships on time, on budget, and with a clear measure of success.
              </p>
            </FadeIn>
          </div>

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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((p, i) => (
              <FadeIn key={p.id} delay={i * 0.06}>
                <div className="card-base overflow-hidden group">
                  <div className="aspect-video bg-brand-gray-100 overflow-hidden">
                    {p.image
                      ? <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      : <div className="w-full h-full flex items-center justify-center"><span className="text-brand-gray-300 text-sm">{p.title}</span></div>
                    }
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h2 className="text-[15px] font-bold text-brand-black">{p.title}</h2>
                      {p.url && (
                        <a href={p.url} target="_blank" rel="noreferrer" className="text-brand-gray-400 hover:text-brand-black transition-colors">
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                    <p className="text-sm text-brand-gray-500 mb-4 leading-relaxed">{p.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {p.tags.map(t => (
                        <span key={t} className="px-2.5 py-0.5 bg-brand-gray-100 text-brand-gray-600 text-[11px] font-medium rounded-full">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
