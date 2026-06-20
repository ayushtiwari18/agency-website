import { Helmet } from 'react-helmet-async'
import { Disclosure, Transition } from '@headlessui/react'
import { Plus, Minus } from 'lucide-react'
import { FadeIn } from '../components/ui/FadeIn'
import { faqs } from '../data/faqs'
import ContactCTA from '../sections/ContactCTA'

export default function FAQ() {
  return (
    <>
      <Helmet>
        <title>FAQ — T&amp;J Creates</title>
        <meta name="description" content="Frequently asked questions about T&J Creates web development services, timelines, pricing, and process." />
        <link rel="canonical" href="https://tjcreates.in/faq" />
      </Helmet>

      <section className="section-pad pt-36 bg-white">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left */}
            <div className="lg:sticky lg:top-28">
              <FadeIn><p className="eyebrow mb-4">FAQ</p></FadeIn>
              <FadeIn delay={0.08}>
                <h1 className="text-display-xl font-extrabold text-brand-black tracking-tight mb-6">
                  Questions we hear most.
                </h1>
              </FadeIn>
              <FadeIn delay={0.14}>
                <p className="text-brand-gray-500 text-sm leading-relaxed mb-8 max-w-sm">
                  Still have questions? A 30-minute call answers everything
                  faster than any FAQ ever could.
                </p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <a href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-black text-white text-sm font-semibold rounded-lg hover:bg-brand-gray-800 active:scale-[0.97] transition-all">
                  Book a free call
                </a>
              </FadeIn>
            </div>

            {/* Right */}
            <FadeIn delay={0.1} direction="left">
              <div className="space-y-2">
                {faqs.map((faq) => (
                  <Disclosure key={faq.id} as="div">
                    {({ open }) => (
                      <div className={`rounded-xl border transition-all duration-200 ${
                        open ? 'border-brand-gray-300 bg-white shadow-sm' : 'border-brand-gray-200 bg-white hover:border-brand-gray-300'
                      }`}>
                        <Disclosure.Button className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left">
                          <span className="text-[15px] font-semibold text-brand-black leading-snug">{faq.q}</span>
                          <span className="flex-shrink-0 w-6 h-6 rounded-full border border-brand-gray-200 flex items-center justify-center">
                            {open ? <Minus size={12} className="text-brand-black" /> : <Plus size={12} className="text-brand-gray-500" />}
                          </span>
                        </Disclosure.Button>
                        <Transition
                          enter="transition duration-200 ease-out"
                          enterFrom="opacity-0 -translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition duration-150 ease-in"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 -translate-y-1"
                        >
                          <Disclosure.Panel className="px-6 pb-5">
                            <p className="text-sm text-brand-gray-500 leading-relaxed border-t border-brand-gray-100 pt-4">{faq.a}</p>
                          </Disclosure.Panel>
                        </Transition>
                      </div>
                    )}
                  </Disclosure>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
