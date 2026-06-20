import { Link } from 'react-router-dom'
import { User, Briefcase, TrendingUp, ArrowRight } from 'lucide-react'
import { FadeIn } from '../components/ui/FadeIn'
import { Badge } from '../components/ui/Badge'
import { services } from '../data/services'

const ICONS = { User, Briefcase, TrendingUp }

export default function ServicesSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container-content">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <FadeIn>
              <p className="eyebrow mb-4">Capabilities</p>
            </FadeIn>
            <FadeIn delay={0.08}>
              <h2 className="text-display-lg font-extrabold text-brand-black tracking-tight max-w-[520px]">
                Outcomes we are engaged to deliver.
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.14} direction="left">
            <p className="text-sm text-brand-gray-500 max-w-[280px] leading-relaxed">
              We don&apos;t sell hours. We take ownership of measurable business results.
            </p>
          </FadeIn>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((svc, i) => {
            const Icon = ICONS[svc.icon]
            return (
              <FadeIn key={svc.id} delay={i * 0.1}>
                <div className="group card-base p-7 flex flex-col h-full hover:shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">

                  {/* Top row: icon + number */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-11 h-11 bg-brand-gray-100 rounded-xl flex items-center justify-center">
                      {Icon && <Icon size={18} className="text-brand-gray-700" />}
                    </div>
                    <span className="text-xs font-semibold text-brand-gray-300 tracking-widest">
                      {svc.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-[18px] font-bold text-brand-black mb-2 leading-snug">
                    {svc.title}
                  </h3>

                  {/* For who */}
                  <p className="text-xs text-brand-gray-500 mb-3">{svc.forWho}</p>

                  {/* Outcome */}
                  <p className="text-sm text-brand-gray-600 leading-relaxed mb-5 flex-1">
                    {svc.outcome}
                  </p>

                  {/* Deliverables */}
                  <ul className="space-y-1.5 mb-6">
                    {svc.deliverables.map((d) => (
                      <li key={d} className="flex items-center gap-2 text-sm text-brand-gray-600">
                        <span className="w-1 h-1 rounded-full bg-brand-gray-400 flex-shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {svc.tags.map((t) => <Badge key={t}>{t}</Badge>)}
                  </div>

                  {/* Explore link */}
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-black group-hover:gap-2.5 transition-all duration-200"
                  >
                    Explore <ArrowRight size={14} />
                  </Link>
                </div>
              </FadeIn>
            )
          })}
        </div>

        {/* Bottom CTA strip */}
        <FadeIn delay={0.3}>
          <div className="mt-10 rounded-2xl bg-brand-black px-8 py-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-white font-semibold text-[16px]">Not sure which fits your project?</p>
              <p className="text-brand-gray-500 text-sm mt-0.5">A 30-minute discovery call to scope the right approach. No pitch deck, no pressure.</p>
            </div>
            <Link
              to="/contact"
              className="flex-shrink-0 inline-flex items-center gap-1.5 px-5 py-2.5 bg-white text-brand-black text-sm font-semibold rounded-lg hover:bg-brand-gray-100 active:scale-[0.97] transition-all duration-200"
            >
              Book a discovery call <ArrowRight size={14} />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
