import { Helmet } from 'react-helmet-async'
import Hero from '../sections/Hero'
import Marquee from '../sections/Marquee'

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

      {/* Remaining sections — Rounds 3–8 */}
      <div className="container-content py-20">
        <p className="text-brand-gray-300 text-sm">More sections coming in Rounds 3–8.</p>
      </div>
    </>
  )
}
