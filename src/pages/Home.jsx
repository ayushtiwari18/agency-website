import { Helmet } from 'react-helmet-async'
import Hero from '../sections/Hero'
import Marquee from '../sections/Marquee'
import ServicesSection from '../sections/Services'
import WorkSection from '../sections/Work'
import ProcessSection from '../sections/Process'
import PricingSection from '../sections/Pricing'
import TestimonialsSection from '../sections/Testimonials'
import FAQSection from '../sections/FAQ'
import ContactCTA from '../sections/ContactCTA'
import ContactFormSection from '../sections/ContactForm'

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
      <ProcessSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactCTA />
      <ContactFormSection />
    </>
  )
}
