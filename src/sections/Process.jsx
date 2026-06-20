import { motion } from 'framer-motion'
import { Reveal } from '../components/ui/Reveal'
import { RevealText } from '../components/ui/RevealText'
import { AnimatedDivider } from '../components/ui/AnimatedDivider'
import { process } from '../data/process'
import DevToolsMockup from '../components/ui/DevToolsMockup'

export default function ProcessSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container-content">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center mb-16">

          {/* LEFT — heading + steps + footer */}
          <div>
            <Reveal><p className="eyebrow mb-4">How we work</p></Reveal>
            <RevealText delay={80} className="text-display-lg font-extrabold text-brand-black tracking-tight mb-12">
              {'A process built\non clarity.'}
            </RevealText>

            <div className="relative">
              {/* Vertical connector line */}
              <div className="hidden sm:block absolute left-[19px] top-[40px] bottom-[40px] w-px bg-brand-gray-100 z-0" />

              <div className="flex flex-col gap-8 relative z-10">
                {process.map((step, i) => (
                  <Reveal key={step.number} delay={i * 100}>
                    <motion.div
                      whileHover={{ x: 4 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                      className="flex gap-5 items-start"
                    >
                      <div className="w-10 h-10 rounded-full border-2 border-brand-gray-200 bg-white flex items-center justify-center flex-shrink-0">
                        <span className="text-[11px] font-bold text-brand-gray-500 tracking-widest">{step.number}</span>
                      </div>
                      <div className="pt-1.5">
                        <h3 className="text-[16px] font-bold text-brand-black mb-1.5">{step.title}</h3>
                        <p className="text-sm text-brand-gray-500 leading-relaxed">{step.description}</p>
                      </div>
                    </motion.div>
                  </Reveal>
                ))}
              </div>
            </div>

            <Reveal delay={400}>
              <AnimatedDivider className="mt-12 mb-8" />
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="text-sm text-brand-gray-500 max-w-sm">
                  Every project starts with a free 30-minute discovery call. No pitch deck. No pressure.
                </p>
                <a
                  href="/contact"
                  className="text-sm font-semibold text-brand-black border-b border-brand-black pb-0.5 hover:opacity-60 transition-opacity whitespace-nowrap"
                >
                  Start with a discovery call
                </a>
              </div>
            </Reveal>
          </div>

          {/* RIGHT — DevTools mock, vertically centered */}
          <div className="hidden lg:flex items-center justify-end">
            <DevToolsMockup />
          </div>
        </div>

      </div>
    </section>
  )
}
