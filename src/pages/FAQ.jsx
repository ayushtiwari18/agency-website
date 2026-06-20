import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { FadeIn } from '../components/ui/FadeIn'
import { faqs } from '../data/faqs'
import SchemaOrg from '../components/seo/SchemaOrg'
import { faqSchema } from '../data/schema'

const SITE = 'https://tj-creates.vercel.app'

export default function FAQ() {
  const [open, setOpen] = useState(null)
  return (
    <>
      <Helmet>
        <title>FAQ — T&amp;J Creates</title>
        <meta name="description" content="Answers to common questions about working with T&J Creates — process, pricing, timelines, and more." />
        <meta property="og:title" content="FAQ — T&J Creates" />
        <meta property="og:url" content={`${SITE}/faq`} />
        <link rel="canonical" href={`${SITE}/faq`} />
      </Helmet>
      <SchemaOrg schema={faqSchema(faqs)} />

      <section className="section-pad pt-36 bg-white">
        <div className="container-content max-w-2xl">
          <FadeIn><p className="eyebrow mb-4">FAQ</p></FadeIn>
          <FadeIn delay={0.08}>
            <h1 className="text-display-xl font-extrabold text-brand-black tracking-tight mb-12">Common questions.</h1>
          </FadeIn>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FadeIn key={i} delay={i * 0.04}>
                <div className="card-base overflow-hidden">
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                    aria-expanded={open === i}
                  >
                    <span className="text-[15px] font-semibold text-brand-black">{faq.q}</span>
                    <ChevronDown size={16} className={`text-brand-gray-400 flex-shrink-0 transition-transform duration-200 ${ open === i ? 'rotate-180' : '' }`} />
                  </button>
                  {open === i && (
                    <div className="px-6 pb-5">
                      <p className="text-sm text-brand-gray-500 leading-relaxed">{faq.a}</p>
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
