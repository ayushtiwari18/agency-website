import { Link } from 'react-router-dom'
import { Check, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Reveal } from '../components/ui/Reveal'
import { pricing } from '../data/pricing'

export default function PricingSection() {
  return (
    <section className="section-pad bg-brand-gray-50">
      <div className="container-content">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
          <div>
            <Reveal><p className="eyebrow mb-4">Pricing</p></Reveal>
            <Reveal delay={80}>
              <h2 className="text-display-lg font-extrabold text-brand-black tracking-tight">
                Transparent pricing,<br />no surprises.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={120} direction="left">
            <p className="text-sm text-brand-gray-500 max-w-[260px] leading-relaxed">
              Fixed-price packages. Every project is scoped before any work begins.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pricing.map((plan, i) => (
            <Reveal key={plan.id} delay={i * 90}>
              <motion.div
                whileHover={!plan.popular ? { y: -6, boxShadow: '0 12px 36px -6px rgba(0,0,0,0.10)' } : { y: -6 }}
                transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                className={`relative flex flex-col rounded-card p-8 ${
                  plan.popular
                    ? 'bg-brand-black text-white shadow-[0_8px_40px_-8px_rgba(0,0,0,0.3)]'
                    : 'bg-white border border-brand-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <motion.span
                      animate={{ boxShadow: ['0 0 0px rgba(0,0,0,0.15)', '0 0 12px rgba(0,0,0,0.2)', '0 0 0px rgba(0,0,0,0.15)'] }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                      className="inline-flex items-center px-3.5 py-1 bg-white text-brand-black text-[11px] font-bold rounded-full tracking-wide shadow-sm"
                    >
                      MOST POPULAR
                    </motion.span>
                  </div>
                )}
                <p className={`text-xs font-medium uppercase tracking-[0.15em] mb-1 ${plan.popular ? 'text-brand-gray-500' : 'text-brand-gray-400'}`}>{plan.bestFor}</p>
                <h3 className={`text-[22px] font-extrabold tracking-tight mb-7 ${plan.popular ? 'text-white' : 'text-brand-black'}`}>{plan.name}</h3>
                <p className={`text-[10px] uppercase tracking-widest mb-1 ${plan.popular ? 'text-brand-gray-600' : 'text-brand-gray-400'}`}>{plan.priceNote}</p>
                <p className={`text-[2.8rem] font-extrabold leading-none tracking-tight mb-8 ${plan.popular ? 'text-white' : 'text-brand-black'}`}>{plan.price}</p>
                <div className={`h-px mb-7 ${plan.popular ? 'bg-brand-gray-800' : 'bg-brand-gray-100'}`} />
                <ul className="space-y-3 flex-1 mb-8">
                  {plan.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${plan.popular ? 'bg-brand-gray-800' : 'bg-brand-gray-100'}`}>
                        <Check size={10} className={plan.popular ? 'text-white' : 'text-brand-gray-600'} />
                      </div>
                      <span className={`text-sm leading-snug ${plan.popular ? 'text-brand-gray-300' : 'text-brand-gray-600'}`}>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className={`group inline-flex items-center justify-center gap-2 w-full py-3 rounded-lg text-sm font-semibold transition-all duration-200 active:scale-[0.97] ${
                  plan.popular
                    ? 'bg-white text-brand-black hover:bg-brand-gray-100'
                    : 'border border-brand-gray-300 text-brand-black hover:border-brand-black'
                }`}>
                  Get started
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={180}>
          <p className="text-center text-sm text-brand-gray-400 mt-8">
            All prices in INR. Need something custom?{' '}
            <Link to="/contact" className="text-brand-black font-medium underline underline-offset-2 hover:opacity-60 transition-opacity">Let&apos;s talk.</Link>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
