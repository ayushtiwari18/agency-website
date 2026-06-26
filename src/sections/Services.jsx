import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Reveal } from '../components/ui/Reveal'
import { RevealText } from '../components/ui/RevealText'
import { services } from '../data/services'
import ServicesMockup from '../components/ui/ServicesMockup'

const colorDot = {
  emerald: 'bg-emerald-400',
  blue:    'bg-blue-400',
  purple:  'bg-purple-400',
  orange:  'bg-orange-400',
}

export default function ServicesSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container-content">

        {/* ── HEADER: left copy + right mockup ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center mb-16">

          {/* Left */}
          <div>
            <Reveal><p className="eyebrow mb-4">Capabilities</p></Reveal>
            <RevealText
              delay={80}
              className="text-display-lg font-extrabold text-brand-black tracking-tight max-w-[480px] mb-5"
            >
              {'Outcomes we are\nengaged to deliver.'}
            </RevealText>
            <Reveal delay={180}>
              <p className="text-sm text-brand-gray-500 max-w-[360px] leading-relaxed">
                We don&apos;t sell hours. We take ownership of measurable business results.
              </p>
            </Reveal>
          </div>

          {/* Right — mockup */}
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex justify-end items-center"
          >
            <ServicesMockup />
          </motion.div>
        </div>

        {/* ── SERVICE CARDS ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((svc, i) => {
            const Icon = svc.icon
            return (
              <Reveal key={svc.id} delay={i * 100}>
                <motion.div
                  whileHover={{ y: -6, boxShadow: '0 16px 40px -8px rgba(0,0,0,0.10)' }}
                  transition={{ type: 'spring', stiffness: 320, damping: 24 }}
                  className="card-base p-7 flex flex-col h-full"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-11 h-11 bg-brand-gray-100 rounded-xl flex items-center justify-center">
                      <Icon size={18} className="text-brand-gray-700" />
                    </div>
                    <span className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${colorDot[svc.color]}`} />
                  </div>
                  <h3 className="text-[17px] font-bold text-brand-black mb-2 leading-snug">{svc.name}</h3>
                  <p className="text-xs font-medium text-brand-gray-400 uppercase tracking-widest mb-3">{svc.tagline}</p>
                  <p className="text-sm text-brand-gray-600 leading-relaxed mb-5 flex-1">{svc.description}</p>
                  <ul className="space-y-1.5 mb-6">
                    {svc.features.slice(0, 4).map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-brand-gray-600">
                        <span className="w-1 h-1 rounded-full bg-brand-gray-400 flex-shrink-0" />{f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={`/services#${svc.id}`}
                    className="group inline-flex items-center gap-1.5 text-sm font-semibold text-brand-black"
                  >
                    Learn more <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </motion.div>
              </Reveal>
            )
          })}
        </div>

        {/* ── BOTTOM CTA STRIP ── */}
        <Reveal delay={200}>
          <div className="mt-10 rounded-2xl bg-brand-black px-8 py-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-white font-semibold text-[16px]">Not sure which fits your project?</p>
              <p className="text-brand-gray-500 text-sm mt-0.5">A 30-minute discovery call. No pitch deck, no pressure.</p>
            </div>
            <Link
              to="/contact"
              className="group flex-shrink-0 inline-flex items-center gap-1.5 px-5 py-2.5 bg-white text-brand-black text-sm font-semibold rounded-lg hover:bg-brand-gray-100 active:scale-[0.97] transition-all duration-200"
            >
              Book a discovery call <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
