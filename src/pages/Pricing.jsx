import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Check, ArrowRight, HelpCircle } from 'lucide-react'
import { FadeIn } from '../components/ui/FadeIn'
import { pricing } from '../data/pricing'
import ContactCTA from '../sections/ContactCTA'
import SchemaOrg from '../components/seo/SchemaOrg'
import { breadcrumbSchema } from '../data/schema'

const pricingSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'T&J Creates Pricing Packages',
  description: 'Fixed-price web development packages. Starter, Business, and Growth plans.',
  url: 'https://tjcreates.in/pricing',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Starter Package — Portfolio Websites', description: 'Starting at ₹8,000. Up to 5 pages, mobile responsive, basic SEO setup, contact form.' },
    { '@type': 'ListItem', position: 2, name: 'Business Package — Business Websites', description: 'Starting at ₹18,000. Up to 10 pages, full SEO, CMS integration, analytics, lead capture.' },
    { '@type': 'ListItem', position: 3, name: 'Growth Package — Growth Websites', description: 'Starting at ₹35,000. Unlimited pages, advanced SEO, A/B testing ready, priority support.' },
  ],
}

export default function Pricing() {
  return (
    <>
      <Helmet>
        <title>Pricing — T&amp;J Creates | Web Development Packages</title>
        <meta name="description" content="Transparent web development pricing. Starter from ₹8,000, Business from ₹18,000, Growth from ₹35,000. Fixed-price packages with clear deliverables. No hidden fees." />
        <meta property="og:title" content="Pricing — T&J Creates" />
        <meta property="og:description" content="Transparent, fixed-price web development packages starting from ₹8,000." />
        <link rel="canonical" href="https://tjcreates.in/pricing" />
      </Helmet>

      <SchemaOrg schema={pricingSchema} />
      <SchemaOrg schema={breadcrumbSchema([
        { name: 'Home', url: 'https://tjcreates.in/' },
        { name: 'Pricing', url: 'https://tjcreates.in/pricing' },
      ])} />

      <section className="section-pad pt-36 bg-white">
        <div className="container-content text-center">
          <FadeIn><p className="eyebrow mb-4">Pricing</p></FadeIn>
          <FadeIn delay={0.08}>
            <h1 className="text-display-xl font-extrabold text-brand-black tracking-tight mb-5">Transparent pricing.</h1>
          </FadeIn>
          <FadeIn delay={0.14}>
            <p className="text-[17px] text-brand-gray-500 leading-relaxed max-w-[480px] mx-auto">
              Fixed-price packages with clear deliverables. Every project is scoped before
              any work begins. No hidden fees, no surprises.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-pad-sm bg-white" aria-label="Pricing packages">
        <div className="container-content">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
            {pricing.map((plan,i)=>(
              <FadeIn key={plan.id} delay={i*0.1}>
                <div className={`relative flex flex-col rounded-card p-8 transition-all duration-300 hover:-translate-y-1 ${
                  plan.popular
                    ? 'bg-brand-black text-white shadow-[0_8px_48px_-8px_rgba(0,0,0,0.35)]'
                    : 'bg-white border border-brand-gray-200 hover:shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08)]'
                }`}>
                  {plan.popular&&(
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center px-3.5 py-1 bg-white text-brand-black text-[11px] font-bold rounded-full tracking-wide shadow-sm">MOST POPULAR</span>
                    </div>
                  )}
                  <p className={`text-xs font-medium uppercase tracking-[0.15em] mb-1 ${plan.popular?'text-brand-gray-500':'text-brand-gray-400'}`}>{plan.bestFor}</p>
                  <h2 className={`text-[22px] font-extrabold tracking-tight mb-7 ${plan.popular?'text-white':'text-brand-black'}`}>{plan.name}</h2>
                  <p className={`text-[10px] uppercase tracking-widest mb-1 ${plan.popular?'text-brand-gray-600':'text-brand-gray-400'}`}>{plan.priceNote}</p>
                  <p className={`text-[3rem] font-extrabold leading-none tracking-tight mb-8 ${plan.popular?'text-white':'text-brand-black'}`}>{plan.price}</p>
                  <div className={`h-px mb-7 ${plan.popular?'bg-brand-gray-800':'bg-brand-gray-100'}`}/>
                  <ul className="space-y-3 mb-8" aria-label={`${plan.name} plan features`}>
                    {plan.items.map(item=>(
                      <li key={item} className="flex items-start gap-3">
                        <div className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${plan.popular?'bg-brand-gray-800':'bg-brand-gray-100'}`} aria-hidden="true">
                          <Check size={10} className={plan.popular?'text-white':'text-brand-gray-600'}/>
                        </div>
                        <span className={`text-sm leading-snug ${plan.popular?'text-brand-gray-300':'text-brand-gray-600'}`}>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact"
                    className={`inline-flex items-center justify-center gap-2 w-full py-3 rounded-lg text-sm font-semibold transition-all duration-200 active:scale-[0.97] mt-auto ${
                      plan.popular
                        ? 'bg-white text-brand-black hover:bg-brand-gray-100'
                        : 'border border-brand-gray-300 text-brand-black hover:border-brand-black'
                    }`}
                    aria-label={`Get started with the ${plan.name} plan`}>
                    Get started <ArrowRight size={14} aria-hidden="true"/>
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.35}>
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-brand-gray-500">
              <HelpCircle size={15} className="text-brand-gray-400" aria-hidden="true" />
              <span>Have questions about what&apos;s included?</span>
              <Link to="/faq" className="font-semibold text-brand-black underline underline-offset-2 hover:opacity-60 transition-opacity">Read our FAQ</Link>
              <span className="hidden sm:inline text-brand-gray-300">or</span>
              <Link to="/contact" className="font-semibold text-brand-black underline underline-offset-2 hover:opacity-60 transition-opacity">Book a free call</Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
