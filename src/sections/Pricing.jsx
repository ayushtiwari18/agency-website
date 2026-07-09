import { Link } from 'react-router-dom'
import { Check, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Reveal } from '../components/ui/Reveal'
import { RevealText } from '../components/ui/RevealText'
import { pricing } from '../data/pricing'
import { useCountdown } from '../hooks/useCountdown'

function CountdownTimer() {
  const { days, hours, minutes, seconds } = useCountdown(50)
  const pad = (num) => String(num).padStart(2, '0')

  return (
    <div className="flex flex-col items-center justify-center text-center p-6 bg-brand-black text-white rounded-3xl border border-white/10 shadow-xl mb-12 max-w-xl mx-auto overflow-hidden relative">
      <div 
        className="absolute inset-0 pointer-events-none" 
        style={{
          background: 'radial-gradient(circle 120px at 50% 50%, rgba(16,185,129,0.12), transparent)'
        }}
      />
      <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-[10px] font-bold tracking-widest uppercase rounded-full border border-emerald-500/20 mb-3 animate-pulse">
        ⚡ 50% Launch Discount Active
      </span>
      <h3 className="text-sm md:text-base font-semibold tracking-wide text-brand-gray-300 mb-4">
        Special Introductory Pricing Ends In:
      </h3>
      <div className="flex items-center gap-2 sm:gap-4">
        {[
          { label: 'Days', value: days },
          { label: 'Hours', value: hours },
          { label: 'Mins', value: minutes },
          { label: 'Secs', value: seconds },
        ].map((unit, idx, arr) => (
          <div key={unit.label} className="flex items-center">
            <div className="flex flex-col items-center">
              <div className="w-12 sm:w-14 h-12 sm:h-14 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center shadow-inner">
                <span className="text-xl sm:text-2xl font-bold tracking-tight tabular-nums text-white">
                  {pad(unit.value)}
                </span>
              </div>
              <span className="text-[9px] text-brand-gray-400 uppercase tracking-widest mt-1.5 font-semibold">{unit.label}</span>
            </div>
            {idx < arr.length - 1 && (
              <span className="text-lg sm:text-xl font-semibold text-white/20 ml-2 sm:ml-4 -mt-5">:</span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function PricingSection() {
  return (
    <section className="section-pad bg-brand-gray-50">
      <div className="container-content">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <Reveal><p className="eyebrow mb-4">Pricing</p></Reveal>
            <RevealText delay={80} className="text-display-lg font-extrabold text-brand-black tracking-tight">
              {'Simple packages,\nclear pricing.'}
            </RevealText>
          </div>
        </div>

        {/* Countdown Timer */}
        <Reveal delay={120}>
          <CountdownTimer />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
          {pricing.map((plan, i) => (
            <Reveal key={plan.id} delay={i * 100}>
              {plan.popular ? (
                // Popular card — black, elevated, with badge
                <div className="relative">
                  {/* MOST POPULAR badge */}
                  <div className="absolute -top-4 left-0 right-0 flex justify-center z-20">
                    <motion.span
                      animate={{
                        boxShadow: [
                          '0 0 0px rgba(0,0,0,0.15)',
                          '0 0 14px rgba(16,185,129,0.3)',
                          '0 0 0px rgba(0,0,0,0.15)',
                        ],
                      }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                      className="inline-flex items-center px-3.5 py-1 bg-brand-black text-white text-[11px] font-bold rounded-full tracking-wide shadow-sm border border-white/10"
                    >
                      ★ MOST POPULAR (50% OFF)
                    </motion.span>
                  </div>

                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                    className="relative rounded-2xl bg-brand-black text-white p-8 pt-10 flex flex-col shadow-[0_8px_40px_-8px_rgba(0,0,0,0.4)] overflow-hidden"
                  >
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
                      
                      <div className="mb-8">
                        <p className="text-[10px] uppercase tracking-widest mb-1 text-brand-gray-500">{plan.priceNote}</p>
                        <div className="flex items-baseline gap-2.5">
                          <span className="text-[2.8rem] font-extrabold leading-none tracking-tight text-white">{plan.discountedPrice}</span>
                          <span className="text-lg font-semibold text-brand-gray-500 line-through">{plan.price}</span>
                        </div>
                      </div>

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
                        {plan.cta} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                      </Link>
                    </div>
                  </motion.div>
                </div>
              ) : (
                // Regular card — white
                <motion.div
                  whileHover={{ y: -6, boxShadow: '0 12px 36px -6px rgba(0,0,0,0.10)' }}
                  transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                  className="rounded-2xl bg-white border border-brand-gray-200 p-8 flex flex-col h-full justify-between"
                >
                  <div>
                    <div className="flex justify-between items-start mb-1">
                      <p className="text-xs font-medium uppercase tracking-[0.15em] text-brand-gray-400">{plan.bestFor}</p>
                      <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-600 text-[9px] font-bold tracking-wider uppercase rounded-md border border-emerald-500/20">
                        50% OFF
                      </span>
                    </div>
                    <h3 className="text-[22px] font-extrabold tracking-tight mb-7 text-brand-black">{plan.name}</h3>
                    
                    <div className="mb-8">
                      <p className="text-[10px] uppercase tracking-widest mb-1 text-brand-gray-400">{plan.priceNote}</p>
                      <div className="flex items-baseline gap-2.5">
                        <span className="text-[2.8rem] font-extrabold leading-none tracking-tight text-brand-black">{plan.discountedPrice}</span>
                        <span className="text-lg font-semibold text-brand-gray-400 line-through">{plan.price}</span>
                      </div>
                    </div>

                    <div className="h-px mb-7 bg-brand-gray-100" />
                    <ul className="space-y-3 mb-8">
                      {plan.items.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <div className="mt-0.5 w-4 h-4 rounded-full bg-brand-gray-100 flex items-center justify-center flex-shrink-0">
                            <Check size={10} className="text-brand-gray-600" />
                          </div>
                          <span className="text-sm leading-snug text-brand-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    to="/contact"
                    className="group inline-flex items-center justify-center gap-2 w-full py-3 rounded-lg text-sm font-semibold border border-brand-gray-300 text-brand-black hover:border-brand-black active:scale-[0.97] transition-all duration-200 mt-auto"
                  >
                    {plan.cta} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </motion.div>
              )}
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="text-center max-w-2xl mx-auto mt-10 space-y-2">
            <p className="text-xs sm:text-sm font-medium text-emerald-600 bg-emerald-50 border border-emerald-200/60 rounded-xl px-4 py-2.5 leading-relaxed">
              💡 <strong>Note:</strong> These prices are starting prices. Final prices can be negotiated, and we are open for negotiation according to the specific services and custom requirements of your project.
            </p>
            <p className="text-xs text-brand-gray-400">
              Need something completely custom?{' '}
              <Link to="/contact" className="text-brand-black font-semibold underline underline-offset-2 hover:opacity-75 transition-opacity">
                Contact us and we&apos;ll build a customized package around your budget.
              </Link>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
