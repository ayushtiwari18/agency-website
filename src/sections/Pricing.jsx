import { Link } from 'react-router-dom'
import { Check, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Reveal } from '../components/ui/Reveal'
import { RevealText } from '../components/ui/RevealText'
import { pricing } from '../data/pricing'

export default function PricingSection() {
  return (
    <section className="section-pad bg-brand-gray-50">
      <div className="container-content">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
          <div>
            <Reveal><p className="eyebrow mb-4">Pricing</p></Reveal>
            <RevealText delay={80} className="text-display-lg font-extrabold text-brand-black tracking-tight">
              {'Transparent pricing,\nno surprises.'}
            </RevealText>
          </div>
          <Reveal delay={120} direction="left">
            <p className="text-sm text-brand-gray-500 max-w-[260px] leading-relaxed">
              Fixed-price packages. Every project is scoped before any work begins.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
          {pricing.map((plan, i) => (
            <Reveal key={plan.id} delay={i * 100}>
              {plan.popular ? (
                // Popular card — black, elevated, with badge
                <div className="relative">
                  {/* MOST POPULAR badge — outside the card, above it */}
                  <div className="absolute -top-4 left-0 right-0 flex justify-center z-20">
                    <motion.span
                      animate={{
                        boxShadow: [
                          '0 0 0px rgba(0,0,0,0.15)',
                          '0 0 14px rgba(0,0,0,0.22)',
                          '0 0 0px rgba(0,0,0,0.15)',
                        ],
                      }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                      className="inline-flex items-center px-3.5 py-1 bg-brand-black text-white text-[11px] font-bold rounded-full tracking-wide shadow-sm border border-white/10"
                    >
                      MOST POPULAR
                    </motion.span>
                  </div>

                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                    className="relative rounded-2xl bg-brand-black text-white p-8 pt-10 flex flex-col shadow-[0_8px_40px_-8px_rgba(0,0,0,0.4)] overflow-hidden"
                  >
                    {/* Top glow inside card */}
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0"
                      style={{
                        background: 'radial-gradient(ellipse 80% 40% at 50% 0%, rgba(255,255,255,0.08), transparent)',
                      }}
                    />

                    <div className="relative z-10 flex flex-col h-full">
                      <p className="text-xs font-medium uppercase tracking-[0.15em] mb-1 text-brand-gray-500">{plan.bestFor}</p>
                      <h3 className="text-[22px] font-extrabold tracking-tight mb-7 text-white">{plan.name}</h3>
                      <p className="text-[10px] uppercase tracking-widest mb-1 text-brand-gray-600">{plan.priceNote}</p>
                      <p className="text-[2.8rem] font-extrabold leading-none tracking-tight mb-8 text-white">{plan.price}</p>
                      <div className="h-px mb-7 bg-white/10" />
                      <ul className="space-y-3 flex-1 mb-8">
                        {plan.items.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <div className="mt-0.5 w-4 h-4 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                              <Check size={10} className="text-white" />
                            </div>
                            <span className="text-sm leading-snug text-brand-gray-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <Link
                        to="/contact"
                        className="group inline-flex items-center justify-center gap-2 w-full py-3 rounded-lg text-sm font-semibold bg-white text-brand-black hover:bg-brand-gray-100 active:scale-[0.97] transition-all duration-200"
                      >
                        Get started <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                      </Link>
                    </div>
                  </motion.div>
                </div>
              ) : (
                // Regular card — white
                <motion.div
                  whileHover={{ y: -6, boxShadow: '0 12px 36px -6px rgba(0,0,0,0.10)' }}
                  transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                  className="rounded-2xl bg-white border border-brand-gray-200 p-8 flex flex-col"
                >
                  <p className="text-xs font-medium uppercase tracking-[0.15em] mb-1 text-brand-gray-400">{plan.bestFor}</p>
                  <h3 className="text-[22px] font-extrabold tracking-tight mb-7 text-brand-black">{plan.name}</h3>
                  <p className="text-[10px] uppercase tracking-widest mb-1 text-brand-gray-400">{plan.priceNote}</p>
                  <p className="text-[2.8rem] font-extrabold leading-none tracking-tight mb-8 text-brand-black">{plan.price}</p>
                  <div className="h-px mb-7 bg-brand-gray-100" />
                  <ul className="space-y-3 flex-1 mb-8">
                    {plan.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="mt-0.5 w-4 h-4 rounded-full bg-brand-gray-100 flex items-center justify-center flex-shrink-0">
                          <Check size={10} className="text-brand-gray-600" />
                        </div>
                        <span className="text-sm leading-snug text-brand-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="group inline-flex items-center justify-center gap-2 w-full py-3 rounded-lg text-sm font-semibold border border-brand-gray-300 text-brand-black hover:border-brand-black active:scale-[0.97] transition-all duration-200"
                  >
                    Get started <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </motion.div>
              )}
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="text-center text-sm text-brand-gray-400 mt-8">
            All prices in INR. Need something custom?{' '}
            <Link to="/contact" className="text-brand-black font-medium underline underline-offset-2 hover:opacity-60 transition-opacity">
              Let&apos;s talk.
            </Link>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
