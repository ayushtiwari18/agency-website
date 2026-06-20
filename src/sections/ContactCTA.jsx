import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Reveal } from '../components/ui/Reveal'

export default function ContactCTA() {
  return (
    <section className="section-pad-sm bg-white">
      <div className="container-content">
        <Reveal>
          <motion.div
            whileHover={{ y: -3 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="bg-brand-black rounded-2xl px-10 py-16 md:px-16 md:py-20 text-center relative overflow-hidden"
          >
            <div aria-hidden className="pointer-events-none absolute inset-0 opacity-20"
              style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 0%, #ffffff20, transparent)' }}
            />

            <motion.div
              aria-hidden
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'linear', repeatDelay: 4 }}
              className="pointer-events-none absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/[0.04] to-transparent"
            />

            <div className="relative z-10">
              <Reveal><p className="eyebrow text-brand-gray-600 mb-5">Let&apos;s work together</p></Reveal>
              <Reveal delay={80}>
                <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold text-white leading-[1.08] tracking-tight mb-5 max-w-[640px] mx-auto">
                  Let&apos;s discuss the work that matters.
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="text-brand-gray-500 text-[15px] max-w-[400px] mx-auto mb-10 leading-relaxed">
                  A 30-minute discovery call to understand your goals and see if
                  we&apos;re the right partner. No pitch deck, no pressure.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <Link to="/contact" className="group inline-flex items-center gap-2 px-6 py-3 bg-white text-brand-black text-sm font-bold rounded-lg hover:bg-brand-gray-100 active:scale-[0.97] transition-all duration-200">
                    Book a discovery call
                    <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                  <Link to="/work" className="inline-flex items-center gap-2 px-6 py-3 border border-brand-gray-700 text-white text-sm font-semibold rounded-lg hover:border-brand-gray-500 active:scale-[0.97] transition-all duration-200">
                    See our work
                  </Link>
                </div>
              </Reveal>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  )
}
