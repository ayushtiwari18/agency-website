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

const SITE          = 'https://tnj-solutions.vercel.app'
const OG_IMAGE      = `${SITE}/og.png`
const TWITTER_IMAGE = `${SITE}/og-twitter.png`

export default function Home() {
  return (
    <>
      <Helmet>
        <title>TNJ Solutions — Custom Software, AI &amp; Web Development Studio</title>
        <meta name="description" content="TNJ Solutions builds custom software, AI solutions, and modern websites for growing businesses. Streamline operations, automate workflows, and accelerate growth." />
        <meta name="keywords" content="custom software development, AI solutions, web development, CRM systems, business automation, Jabalpur, India" />
        <meta property="og:title" content="TNJ Solutions — Custom Software, AI &amp; Web Development" />
        <meta property="og:description" content="We help businesses streamline operations and accelerate growth through tailored software, AI, and web solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE}/`} />
        <meta property="og:site_name" content="TNJ Solutions" />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="TNJ Solutions — Custom Software, AI &amp; Web Development" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TNJ Solutions — Custom Software, AI &amp; Web Development" />
        <meta name="twitter:description" content="We help businesses streamline operations and accelerate growth through tailored software, AI, and web solutions." />
        <meta name="twitter:image" content={TWITTER_IMAGE} />
        <link rel="canonical" href={`${SITE}/`} />
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
