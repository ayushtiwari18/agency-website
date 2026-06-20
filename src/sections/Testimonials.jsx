import { motion } from 'framer-motion'
import { Reveal } from '../components/ui/Reveal'
import { testimonials } from '../data/testimonials'

function Avatar({ name }) {
  const initials = name.split(' ').map(n => n[0]).join('')
  return (
    <div className="w-9 h-9 rounded-full bg-brand-gray-200 flex items-center justify-center flex-shrink-0">
      <span className="text-xs font-bold text-brand-gray-600">{initials}</span>
    </div>
  )
}

export default function TestimonialsSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container-content">
        <Reveal><p className="eyebrow mb-4">What clients say</p></Reveal>
        <Reveal delay={80}>
          <h2 className="text-display-md font-extrabold text-brand-black tracking-tight mb-12">Built for real outcomes.</h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <Reveal key={t.id} delay={i * 90}>
              <motion.div
                whileHover={{ y: -5, boxShadow: '0 12px 36px -6px rgba(0,0,0,0.09)' }}
                transition={{ type: 'spring', stiffness: 280, damping: 20 }}
                className="card-base p-8 flex flex-col justify-between h-full"
              >
                <div>
                  <span aria-hidden className="block text-[4rem] font-serif leading-none text-brand-gray-200 mb-4 select-none">&ldquo;</span>
                  <p className="text-[16px] text-brand-gray-700 leading-[1.75] font-medium">{t.quote}</p>
                </div>
                <div className="flex items-center gap-3 mt-8 pt-6 border-t border-brand-gray-100">
                  <Avatar name={t.name} />
                  <div>
                    <p className="text-sm font-semibold text-brand-black">{t.name}</p>
                    <p className="text-xs text-brand-gray-500">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
