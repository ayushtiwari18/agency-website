// ─── Reusable schema fragments ───────────────────────────────────────────────

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'T&J Creates',
  description:
    'T&J Creates is a web development studio in Jabalpur, India. We build fast, conversion-focused websites for businesses and personal brands.',
  url: 'https://tjcreates.in',
  email: 'ayushtiwari102003@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Jabalpur',
    addressRegion: 'Madhya Pradesh',
    addressCountry: 'IN',
  },
  areaServed: 'IN',
  priceRange: '₹8,000 – ₹50,000+',
  serviceType: [
    'Portfolio Website Development',
    'Business Website Development',
    'Growth Website Development',
    'SEO Optimization',
    'Web Performance Optimization',
  ],
  sameAs: [
    'https://www.linkedin.com/in/tiwariaayush',
    'https://github.com/ayushtiwari18',
  ],
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'T&J Creates',
  url: 'https://tjcreates.in',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://tjcreates.in/work?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}

export const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'T&J Creates Web Development Services',
  description: 'Portfolio websites, business websites, and growth websites built for conversion and SEO.',
  url: 'https://tjcreates.in/services',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Portfolio Websites',
      description: 'Custom portfolio websites for developers, designers, and freelancers.',
      url: 'https://tjcreates.in/services#portfolio',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Business Websites',
      description: 'Conversion-focused websites for startups, local businesses, and service providers.',
      url: 'https://tjcreates.in/services#business',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Growth Websites',
      description: 'SEO-optimized, performance-first websites for brands focused on scaling.',
      url: 'https://tjcreates.in/services#growth',
    },
  ],
}

export const faqSchema = (faqs) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
})

export const breadcrumbSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    item: item.url,
  })),
})
