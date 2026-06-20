import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { CheckCircle } from 'lucide-react'
import { FadeIn } from '../components/ui/FadeIn'
import { pricing } from '../data/pricing'

const SITE          = 'https://tj-creates.vercel.app'
const OG_IMAGE      = `${SITE}/og.png`
const TWITTER_IMAGE = `${SITE}/og-tiwtter.png`

export default function Pricing() {
  return (
    <>
      <Helmet>
        <title>Pricing — T&amp;J Creates</title>
        <meta name="description" content="Clear, fixed prices for portfolio, business, and growth websites. No hidden fees, no lock-in contracts. Starting from ₹8,000." />
        <meta property="og:title" content="Pricing — T&J Creates" />
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
          <div className="max-w-2xl mb-16">
            <FadeIn><p className="eyebrow mb-4">Pricing</p></FadeIn>
            <FadeIn delay={0.08}>
              <h1 className="text-display-xl font-extrabold text-brand-black tracking-tight mb-5">
                Fixed prices. No surprises.
              </h1>
            </FadeIn>
            <FadeIn delay={0.14}>
              <p className="text-brand-gray-500 text-[16px] leading-relaxed">
                Every project is quoted upfront. You know the price before we start — and it doesn’t change.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricing.map(({ id, name, price, priceNote, bestFor, items, popular }, i) => (
              <FadeIn key={id} delay={i * 0.08}>
                <div className={`card-base p-8 flex flex-col h-full ${ popular ? 'ring-2 ring-brand-black' : '' }`}>
                  {popular && (
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white bg-brand-black px-3 py-1 rounded-full self-start mb-4">Most popular</p>
                  )}
                  <h2 className="text-xl font-extrabold text-brand-black mb-1">{name}</h2>
                  <p className="text-xs text-brand-gray-500 mb-2">{bestFor}</p>
                  <p className="text-xs text-brand-gray-400 mb-1">{priceNote}</p>
                  <p className="text-3xl font-extrabold text-brand-black mb-8">{price}</p>
                  <ul className="space-y-3 mb-8 flex-1">
                    {items.map(f => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-brand-gray-600">
                        <CheckCircle size={14} className="text-emerald-500 mt-0.5 flex-shrink-0" />{f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact"
                    className={`w-full text-center py-3 rounded-lg text-sm font-bold transition-all duration-200 ${
                      popular
                        ? 'bg-brand-black text-white hover:bg-brand-gray-800'
                        : 'border border-brand-gray-200 text-brand-black hover:border-brand-black'
                    }`}>
                    Get started
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
