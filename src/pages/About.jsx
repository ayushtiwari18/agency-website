import { Helmet } from 'react-helmet-async'
import { FadeIn } from '../components/ui/FadeIn'
import { CheckCircle, Zap, Shield, Heart } from 'lucide-react'

const SITE = 'https://tj-creates.vercel.app'

const VALUES = [
  { icon: Zap,         title: 'Speed first',        body: 'Every site we build targets sub-2s load times. Performance is a feature, not an afterthought.' },
  { icon: Shield,      title: 'Fixed prices',        body: 'You get a clear quote before we write a single line of code. No scope creep, no surprise invoices.' },
  { icon: CheckCircle, title: 'Full visibility',     body: 'Weekly updates, shared task boards, and a direct line to the people doing the work.' },
  { icon: Heart,       title: 'Long-term thinking',  body: 'We build sites that are easy to hand off, maintain, and grow — not ones that lock you in.' },
]

export default function About() {
  return (
    <>
      <Helmet>
        <title>About — T&amp;J Creates</title>
        <meta name="description" content="Learn about T&J Creates, a web development studio based in Jabalpur, India. We build fast, focused websites with fixed prices and full transparency." />
        <meta property="og:title" content="About — T&J Creates" />
        <meta property="og:url" content={`${SITE}/about`} />
        <link rel="canonical" href={`${SITE}/about`} />
      </Helmet>

      <section className="section-pad pt-36 bg-white">
        <div className="container-content">
          <div className="max-w-2xl">
            <FadeIn><p className="eyebrow mb-4">About us</p></FadeIn>
            <FadeIn delay={0.08}>
              <h1 className="text-display-xl font-extrabold text-brand-black tracking-tight mb-6">
                Built for people who care about their website.
              </h1>
            </FadeIn>
            <FadeIn delay={0.14}>
              <p className="text-brand-gray-500 text-[16px] leading-relaxed mb-6">
                T&amp;J Creates is a two-person studio from Jabalpur, India. We design and build websites
                that are fast, honest, and built to get results — not just to look good in a screenshot.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-brand-gray-500 text-[16px] leading-relaxed">
                We work with a small number of clients at a time so every project gets the attention it deserves.
                No outsourcing, no juniors shipping your work — just two people who genuinely care.
              </p>
            </FadeIn>
          </div>

          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {VALUES.map(({ icon: Icon, title, body }, i) => (
              <FadeIn key={title} delay={i * 0.07}>
                <div className="card-base p-7">
                  <div className="w-10 h-10 bg-brand-gray-100 rounded-lg flex items-center justify-center mb-5">
                    <Icon size={18} className="text-brand-black" />
                  </div>
                  <h3 className="text-[15px] font-bold text-brand-black mb-2">{title}</h3>
                  <p className="text-sm text-brand-gray-500 leading-relaxed">{body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
