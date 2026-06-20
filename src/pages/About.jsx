import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRight, Users, Target, Zap, Shield } from 'lucide-react'
import { FadeIn } from '../components/ui/FadeIn'
import ContactCTA from '../sections/ContactCTA'

const values = [
  {
    icon: Target,
    title: 'Outcome ownership',
    desc: 'We are measured on your results, not on hours billed or tickets closed.',
  },
  {
    icon: Users,
    title: 'Direct access',
    desc: 'You talk directly to the person doing the work. No account managers.',
  },
  {
    icon: Shield,
    title: 'Built to last',
    desc: 'Every decision is made for the next five years, not just the launch date.',
  },
  {
    icon: Zap,
    title: 'Speed & clarity',
    desc: 'Fast iterations, weekly updates, and full visibility into progress at all times.',
  },
]

export default function About() {
  return (
    <>
      <Helmet>
        <title>About — T&amp;J Creates</title>
        <meta name="description" content="T&J Creates is a web development studio based in Jabalpur, India. We build fast, conversion-focused websites for businesses and personal brands." />
        <link rel="canonical" href="https://tjcreates.in/about" />
      </Helmet>

      {/* Hero */}
      <section className="section-pad pt-36 bg-white">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <FadeIn><p className="eyebrow mb-4">Who we are</p></FadeIn>
              <FadeIn delay={0.08}>
                <h1 className="text-display-xl font-extrabold text-brand-black tracking-tight mb-6">
                  The discipline of a consultancy.
                  The craft of a studio.
                </h1>
              </FadeIn>
              <FadeIn delay={0.14}>
                <p className="text-[17px] text-brand-gray-500 leading-relaxed mb-6">
                  T&amp;J Creates is a web development studio based in Jabalpur, India.
                  We work with a deliberately small number of clients at a time. Every
                  engagement is led personally — meaning you get the real work, not a
                  junior handoff.
                </p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-[17px] text-brand-gray-500 leading-relaxed">
                  We don&apos;t sell hours. We take ownership of outcomes. From the first
                  discovery call to launch and beyond, we&apos;re accountable for the
                  result we promised.
                </p>
              </FadeIn>
            </div>

            {/* Stats */}
            <FadeIn delay={0.18} direction="left">
              <div className="grid grid-cols-2 gap-5">
                {[
                  { value: '10+',  label: 'Projects delivered' },
                  { value: '3+',   label: 'Live products' },
                  { value: '100%', label: 'On-time launches' },
                  { value: '24h',  label: 'Response time' },
                ].map(({ value, label }) => (
                  <div key={label} className="card-base p-6">
                    <p className="text-[2.4rem] font-extrabold text-brand-black leading-none tracking-tight mb-1.5">{value}</p>
                    <p className="text-xs text-brand-gray-500 uppercase tracking-wide">{label}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-brand-gray-50">
        <div className="container-content">
          <FadeIn><p className="eyebrow mb-4">Why T&amp;J Creates</p></FadeIn>
          <FadeIn delay={0.08}>
            <h2 className="text-display-lg font-extrabold text-brand-black tracking-tight mb-12">
              How we are different.
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <FadeIn key={title} delay={i * 0.1}>
                <div className="card-base p-7 hover:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.07)] hover:-translate-y-0.5 transition-all duration-300">
                  <div className="w-10 h-10 bg-brand-gray-100 rounded-xl flex items-center justify-center mb-5">
                    <Icon size={18} className="text-brand-gray-700" />
                  </div>
                  <h3 className="text-[16px] font-bold text-brand-black mb-2">{title}</h3>
                  <p className="text-sm text-brand-gray-500 leading-relaxed">{desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
