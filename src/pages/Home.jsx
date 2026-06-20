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
import SchemaOrg from '../components/seo/SchemaOrg'
import { organizationSchema, websiteSchema } from '../data/schema'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>T&amp;J Creates — Web Development Studio in Jabalpur</title>
        <meta name="description" content="T&J Creates builds fast, conversion-focused websites for businesses and personal brands in India. Portfolio, business and growth websites that get you clients." />
        <meta name="keywords" content="web development studio Jabalpur, portfolio website, business website, growth website, SEO, React developer India" />
        <meta property="og:title" content="T&J Creates — Web Development Studio" />
        <meta property="og:description" content="Fast, transparent, conversion-focused websites for businesses and personal brands." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tjcreates.in/" />
        <meta property="og:site_name" content="T&J Creates" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="T&J Creates — Web Development Studio" />
        <meta name="twitter:description" content="Fast, transparent, conversion-focused websites for businesses and personal brands." />
        <link rel="canonical" href="https://tjcreates.in/" />
      </Helmet>

      <SchemaOrg schema={organizationSchema} />
      <SchemaOrg schema={websiteSchema} />

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
