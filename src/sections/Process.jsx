import { motion } from 'framer-motion'
import { Reveal } from '../components/ui/Reveal'
import { process } from '../data/process'

export default function ProcessSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container-content">
        <Reveal><p className="eyebrow mb-4">How we work</p></Reveal>
        <Reveal delay={80}>
          <h2 className="text-display-lg font-extrabold text-brand-black tracking-tight mb-16">
            A process built on clarity.
          </h2>
        </Reveal>

        <div className="relative">
          <div className="hidden lg:block absolute top-[22px] left-[40px] right-[40px] h-px bg-brand-gray-100 z-0 overflow-hidden">
            <Reveal direction="none" delay={100} className="origin-left">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
                className="absolute inset-0 bg-brand-gray-300 origin-left"
              />
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 relative z-10">
            {process.map((step, i) => (
              <Reveal key={step.number} delay={i * 90}>
                <motion.div whileHover={{ y: -4 }} transition={{ type: 'spring', stiffness: 300, damping: 22 }} className="flex flex-col gap-5">
                  <motion.div
                    initial={{ scale: 0.85, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className="w-11 h-11 rounded-full border-2 border-brand-gray-200 bg-white flex items-center justify-center flex-shrink-0"
                  >
                    <span className="text-xs font-bold text-brand-gray-500 tracking-widest">{step.number}</span>
                  </motion.div>
                  <div>
                    <h3 className="text-[16px] font-bold text-brand-black mb-2">{step.title}</h3>
                    <p className="text-sm text-brand-gray-500 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={180}>
          <div className="mt-14 pt-10 border-t border-brand-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-sm text-brand-gray-500 max-w-sm">
              Every project starts with a free 30-minute discovery call. No pitch deck. No pressure.
            </p>
            <a href="/contact" className="text-sm font-semibold text-brand-black border-b border-brand-black pb-0.5 hover:opacity-60 transition-opacity">
              Start with a discovery call
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
