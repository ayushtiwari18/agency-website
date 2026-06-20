import { motion } from 'framer-motion'
import { FadeIn } from '../components/ui/FadeIn'
import { process } from '../data/process'

export default function ProcessSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container-content">
        <FadeIn><p className="eyebrow mb-4">How we work</p></FadeIn>
        <FadeIn delay={0.08}>
          <h2 className="text-display-lg font-extrabold text-brand-black tracking-tight mb-16">
            A process built on clarity.
          </h2>
        </FadeIn>

        <div className="relative">
          {/* Connector line — draws itself */}
          <div className="hidden lg:block absolute top-[22px] left-[40px] right-[40px] h-px bg-brand-gray-100 z-0">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
              className="absolute inset-0 bg-brand-gray-300 origin-left"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 relative z-10">
            {process.map((step, i) => (
              <FadeIn key={step.number} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                  className="flex flex-col gap-5"
                >
                  <motion.div
                    initial={{ scale: 0.7, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.55, delay: 0.1 + i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="w-11 h-11 rounded-full border-2 border-brand-gray-200 bg-white flex items-center justify-center flex-shrink-0"
                  >
                    <span className="text-xs font-bold text-brand-gray-500 tracking-widest">{step.number}</span>
                  </motion.div>
                  <div>
                    <h3 className="text-[16px] font-bold text-brand-black mb-2">{step.title}</h3>
                    <p className="text-sm text-brand-gray-500 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-14 pt-10 border-t border-brand-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-sm text-brand-gray-500 max-w-sm">
              Every project starts with a free 30-minute discovery call. No pitch deck. No pressure.
            </p>
            <a href="/contact"
              className="text-sm font-semibold text-brand-black border-b border-brand-black pb-0.5 hover:opacity-60 transition-opacity">
              Start with a discovery call
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
