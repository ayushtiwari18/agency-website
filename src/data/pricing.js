// Pricing packages — no fixed prices, all custom quoted.
// The CTA on every package directs to contact / consultation booking.
export const pricing = [
  {
    id: 'essential',
    name: 'Essential',
    bestFor: 'Startups, portfolios & landing pages',
    price: null,
    priceNote: 'Custom quote',
    priceSubNote: 'Scoped to your project',
    popular: false,
    cta: 'Get a Quote',
    ctaHref: '/contact',
    items: [
      'Business website (up to 6 pages)',
      'Mobile-first, fully responsive',
      'On-page SEO setup',
      'Contact & lead capture form',
      'Google Analytics integration',
      '2 rounds of revisions',
      '30-day post-launch support',
    ],
  },
  {
    id: 'professional',
    name: 'Professional',
    bestFor: 'Growing businesses & product companies',
    price: null,
    priceNote: 'Custom quote',
    priceSubNote: 'Scoped to your project',
    popular: true,
    cta: 'Get a Quote',
    ctaHref: '/contact',
    items: [
      'Everything in Essential',
      'Custom web application or CRM',
      'Admin dashboard & user management',
      'Third-party integrations (CRM, payments, APIs)',
      'Performance & Core Web Vitals optimisation',
      'CMS integration (editable without a developer)',
      '3 rounds of revisions',
      '60-day post-launch support',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    bestFor: 'Complex platforms, AI & automation',
    price: null,
    priceNote: 'Custom quote',
    priceSubNote: 'Scoped to your project',
    popular: false,
    cta: 'Let\'s Talk',
    ctaHref: '/contact',
    items: [
      'Everything in Professional',
      'AI integrations & automation workflows',
      'ERP / multi-module business platforms',
      'Custom booking, billing & reporting systems',
      'Dedicated project manager',
      'Unlimited revisions during development',
      '90-day post-launch support',
      'Priority response SLA',
    ],
  },
]

// Shown below the pricing cards — encourages custom scoping
export const pricingNote = {
  heading: 'Not sure which fits?',
  body:
    'Every project is different. Tell us what you need and we\'ll scope it honestly — no inflated quotes, no hidden costs. You\'ll get a clear breakdown before anything is agreed.',
  cta: 'Start the Conversation',
  ctaHref: '/contact',
}
