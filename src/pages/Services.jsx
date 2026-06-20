import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { User, Briefcase, TrendingUp, ArrowRight, ArrowUpRight } from 'lucide-react'
import { FadeIn } from '../components/ui/FadeIn'
import { Badge } from '../components/ui/Badge'
import { services } from '../data/services'
import ContactCTA from '../sections/ContactCTA'

const ICONS = { User, Briefcase, TrendingUp }

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services — T&amp;J Creates</title>
        <meta name="description" content="Portfolio websites, business websites, and growth websites. Every engagement is led by a senior developer and measured against business outcomes." />
        <link rel="canonical" href="https://tjcreates.in/services" />
      </Helmet>

      {/* Hero */}
      <section className="section-pad pt-36 bg-white">
        <div className="container-content">
          <FadeIn>
            <p className="eyebrow mb-4">What we engineer</p>
          </FadeIn>
          <FadeIn delay={0.08}>
            <h1 className="text-display-xl font-extrabold text-brand-black tracking-tight max-w-[700px] mb-6">
              Services built for results that cannot fail.
            </h1>
          </FadeIn>
          <FadeIn delay={0.14}>
            <p className="text-[17px] text-brand-gray-500 leading-relaxed max-w-[520px]">
              Three disciplines, one standard. Every engagement is outcome-focused
              and measured against real business results — not deliverables.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Cards */}
      <section className="section-pad-sm bg-white">
        <div className="container-content">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {services.map((svc, i) => {
              const Icon = ICONS[svc.icon]
              return (
                <FadeIn key={svc.id} delay={i * 0.1}>
                  <div className="group card-base p-8 flex flex-col h-full hover:shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-start justify-between mb-7">
                      <div className="w-12 h-12 bg-brand-gray-100 rounded-xl flex items-center justify-center">
                        {Icon && <Icon size={20} className="text-brand-gray-700" />}
                      </div>
                      <span className="text-xs font-bold text-brand-gray-300 tracking-widest">{svc.number}</span>
                    </div>
                    <h2 className="text-[20px] font-extrabold text-brand-black mb-2 leading-snug">{svc.title}</h2>
                    <p className="text-xs text-brand-gray-500 mb-3">{svc.forWho}</p>
                    <p className="text-sm text-brand-gray-600 leading-relaxed mb-5 flex-1">{svc.outcome}</p>
                    <ul className="space-y-2 mb-6">
                      {svc.deliverables.map((d) => (
                        <li key={d} className="flex items-center gap-2 text-sm text-brand-gray-600">
                          <span className="w-1 h-1 rounded-full bg-brand-gray-400 flex-shrink-0" />{d}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {svc.tags.map(t => <Badge key={t}>{t}</Badge>)}
                    </div>
                    <Link to="/contact"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-black group-hover:gap-2.5 transition-all duration-200">
                      Start this project <ArrowRight size={14} />
                    </Link>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
