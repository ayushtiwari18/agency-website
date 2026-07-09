import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { CheckCircle } from 'lucide-react'
import { FadeIn } from '../components/ui/FadeIn'
import { pricing } from '../data/pricing'
import { useCountdown } from '../hooks/useCountdown'

const SITE          = 'https://tj-creates.vercel.app'
const OG_IMAGE      = `${SITE}/og.png`
const TWITTER_IMAGE = `${SITE}/og-tiwtter.png`

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

export default function Pricing() {
  return (
    <>
      <Helmet>
        <title>Pricing — TNJ Solutions</title>
        <meta name="description" content="Simple, transparent packages for startups, growing businesses, and enterprise projects. Starting from ₹10,000. Custom scopes available — contact us." />
        <meta property="og:title" content="Pricing — TNJ Solutions" />
        <meta property="og:url" content={`${SITE}/pricing`} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={TWITTER_IMAGE} />
        <link rel="canonical" href={`${SITE}/pricing`} />
      </Helmet>

      <section className="section-pad pt-36 bg-white">
        <div className="container-content">
          <div className="max-w-2xl mb-12">
            <FadeIn><p className="eyebrow mb-4">Pricing</p></FadeIn>
            <FadeIn delay={0.08}>
              <h1 className="text-display-xl font-extrabold text-brand-black tracking-tight mb-5">
                Simple packages,&nbsp;clear pricing.
              </h1>
            </FadeIn>
            <FadeIn delay={0.14}>
              <p className="text-brand-gray-500 text-[16px] leading-relaxed">
                Every project starts with a conversation. Prices listed below are special discounted rates — final scope and costs are agreed upfront before any work begins.
              </p>
            </FadeIn>
          </div>

          {/* Countdown Timer */}
          <FadeIn delay={0.18}>
            <CountdownTimer />
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricing.map(({ id, name, price, discountedPrice, priceNote, bestFor, items, popular, cta }, i) => (
              <FadeIn key={id} delay={i * 0.08}>
                <div className={`card-base p-8 flex flex-col h-full justify-between ${ popular ? 'ring-2 ring-brand-black shadow-lg relative' : '' }`}>
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      {popular ? (
                        <p className="text-[10px] font-bold uppercase tracking-widest text-white bg-brand-black px-3 py-1 rounded-full">Most popular</p>
                      ) : <div />}
                      <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-600 text-[9px] font-bold tracking-wider uppercase rounded-md border border-emerald-500/20">
                        50% OFF
                      </span>
                    </div>
                    <h2 className="text-xl font-extrabold text-brand-black mb-1">{name}</h2>
                    <p className="text-xs text-brand-gray-500 mb-6">{bestFor}</p>
                    
                    <div className="mb-8">
                      <p className="text-xs text-brand-gray-400 mb-1">{priceNote}</p>
                      <div className="flex items-baseline gap-2.5">
                        <span className="text-3xl font-extrabold text-brand-black">{discountedPrice}</span>
                        <span className="text-sm font-semibold text-brand-gray-400 line-through">{price}</span>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-8 flex-1">
                      {items.map(f => (
                        <li key={f} className="flex items-start gap-2.5 text-sm text-brand-gray-600">
                          <CheckCircle size={14} className="text-emerald-500 mt-0.5 flex-shrink-0" />{f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link to="/contact"
                    className={`w-full text-center py-3 rounded-lg text-sm font-bold transition-all duration-200 mt-auto ${
                      popular
                        ? 'bg-brand-black text-white hover:bg-brand-gray-800'
                        : 'border border-brand-gray-200 text-brand-black hover:border-brand-black'
                    }`}>
                    {cta ?? 'Get started'}
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <div className="text-center max-w-2xl mx-auto mt-12 space-y-3">
              <p className="text-xs sm:text-sm font-medium text-emerald-600 bg-emerald-50 border border-emerald-200/60 rounded-xl px-4 py-2.5 leading-relaxed">
                💡 <strong>Note:</strong> These prices are starting prices. Final prices can be negotiated, and we are open for negotiation according to the specific services and custom requirements of your project.
              </p>
              <p className="text-xs text-brand-gray-400">
                Need something outside these packages?{' '}
                <Link to="/contact" className="text-brand-black font-semibold underline underline-offset-2 hover:opacity-75 transition-opacity">
                  Contact us and we&apos;ll build a custom quote around your needs.
                </Link>
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
