import { Helmet } from 'react-helmet-async'
import { FadeIn } from '../components/ui/FadeIn'
import { services } from '../data/services'
import SchemaOrg from '../components/seo/SchemaOrg'
import { servicesSchema, breadcrumbSchema } from '../data/schema'

const SITE = 'https://tj-creates.vercel.app'
const OG_IMAGE = `${SITE}/og-image.jpg`

export default function Services() {
  const crumbs = breadcrumbSchema([
    { name: 'Home', url: SITE },
    { name: 'Services', url: `${SITE}/services` },
  ])

  return (
    <>
      <Helmet>
        <title>Services — T&amp;J Creates</title>
        <meta name="description" content="Portfolio websites, business websites, and growth websites — built fast, priced fairly, and focused on results." />
        <meta property="og:title" content="Services — T&J Creates" />
        <meta property="og:url" content={`${SITE}/services`} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={OG_IMAGE} />
        <link rel="canonical" href={`${SITE}/services`} />
      </Helmet>
      <SchemaOrg schema={servicesSchema} />
      <SchemaOrg schema={crumbs} />

      <section className="section-pad pt-36 bg-white">
        <div className="container-content">
          <div className="max-w-2xl mb-16">
            <FadeIn><p className="eyebrow mb-4">What we do</p></FadeIn>
            <FadeIn delay={0.08}>
              <h1 className="text-display-xl font-extrabold text-brand-black tracking-tight mb-5">Three types of websites. One standard of quality.</h1>
            </FadeIn>
            <FadeIn delay={0.14}>
              <p className="text-brand-gray-500 text-[16px] leading-relaxed">
                Every project starts with a discovery call, a fixed price, and a clear brief —
                so you know exactly what you’re getting before we start.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map(({ id, icon: Icon, name, tagline, description, features, price }, i) => (
              <FadeIn key={id} delay={i * 0.08}>
                <div id={id} className="card-base p-8 flex flex-col h-full">
                  <div className="w-11 h-11 bg-brand-gray-100 rounded-xl flex items-center justify-center mb-6">
                    <Icon size={20} className="text-brand-black" />
                  </div>
                  <p className="text-xs font-semibold text-brand-gray-500 uppercase tracking-widest mb-2">{tagline}</p>
                  <h2 className="text-xl font-extrabold text-brand-black mb-3">{name}</h2>
                  <p className="text-sm text-brand-gray-500 leading-relaxed mb-6">{description}</p>
                  <ul className="space-y-2 mt-auto mb-6">
                    {features.map(f => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-brand-gray-600">
                        <span className="mt-0.5 text-emerald-500 flex-shrink-0">✓</span>{f}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-brand-gray-400">From <span className="font-bold text-brand-black text-sm">{price}</span></p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
