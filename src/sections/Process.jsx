import { motion } from 'framer-motion'
import { Reveal } from '../components/ui/Reveal'
import { RevealText } from '../components/ui/RevealText'
import { AnimatedDivider } from '../components/ui/AnimatedDivider'
import { process } from '../data/process'

export default function ProcessSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container-content">
        <Reveal><p className="eyebrow mb-4">How we work</p></Reveal>
        <RevealText delay={80} className="text-display-lg font-extrabold text-brand-black tracking-tight mb-16">
          {'A process built\non clarity.'}
        </RevealText>

        <div className="relative">
          <div className="hidden lg:block absolute top-[22px] left-[40px] right-[40px] z-0">
            <AnimatedDivider delay={200} className="text-brand-gray-400" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 relative z-10">
            {process.map((step, i) => (
              <Reveal key={step.number} delay={i * 100}>
                <motion.div whileHover={{ y: -4 }} transition={{ type: 'spring', stiffness: 300, damping: 22 }} className="flex flex-col gap-5">
                  <div className="w-11 h-11 rounded-full border-2 border-brand-gray-200 bg-white flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-brand-gray-500 tracking-widest">{step.number}</span>
                  </div>
                  <div>
                    <h3 className="text-[16px] font-bold text-brand-black mb-2">{step.title}</h3>
                    <p className="text-sm text-brand-gray-500 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={300}>
          <AnimatedDivider delay={100} className="text-brand-gray-200 mt-14 mb-10" />
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-sm text-brand-gray-500 max-w-sm">Every project starts with a free 30-minute discovery call. No pitch deck. No pressure.</p>
            <a href="/contact" className="text-sm font-semibold text-brand-black border-b border-brand-black pb-0.5 hover:opacity-60 transition-opacity">Start with a discovery call</a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
