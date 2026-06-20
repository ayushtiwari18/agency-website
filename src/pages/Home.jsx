import { Helmet } from 'react-helmet-async'
import Hero from '../sections/Hero'
import Marquee from '../sections/Marquee'
import ServicesSection from '../sections/Services'
import WorkSection from '../sections/Work'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>T&amp;J Creates — Web Development Studio</title>
        <meta name="description" content="T&J Creates builds fast, conversion-focused websites for businesses and personal brands. Portfolio, business and growth websites built to get you clients." />
        <meta property="og:title" content="T&J Creates — Web Development Studio" />
        <meta property="og:description" content="Fast, transparent, conversion-focused websites for businesses and personal brands." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://tjcreates.in/" />
      </Helmet>

      <Hero />
      <Marquee />
      <ServicesSection />
      <WorkSection />

      {/* Remaining sections — Rounds 4–7 */}
      <div className="container-content py-16">
        <p className="text-brand-gray-300 text-sm">Process, Pricing, Testimonials, FAQ, Contact — coming in Rounds 4–7.</p>
      </div>
    </>
  )
}
