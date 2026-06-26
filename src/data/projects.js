export const projects = [
  {
    id: 'shreephal-handicrafts',
    slug: 'shreephal-handicrafts',
    status: 'live',
    featured: true,

    // ── CLIENT ──
    client: {
      name: 'Shreephal Handicrafts',
      industry: 'Handicrafts / E-commerce',
      location: 'Jabalpur, Madhya Pradesh, India',
      size: 'Small business',
      url: 'https://shreephalhandicrafts.com',
    },

    // ── META ──
    type: 'Web Development',
    tags: ['E-commerce', 'Full-Stack', 'Supabase', 'Razorpay', 'Admin Dashboard'],
    duration: null,
    year: 2025,
    live: 'https://shreephalhandicrafts.com',
    github: null,

    // ── VISUAL ──
    image: null,
    images: [],
    color: 'emerald',

    // ── HEADLINE ──
    headline: 'Taking a heritage handicraft brand fully online — cart, checkout, and all.',
    summary:
      'A complete e-commerce platform for a Jabalpur-based handicrafts business — with product catalogue, Razorpay payments, order tracking, and a full admin dashboard.',

    // ── THE STORY ──
    context:
      `Shreephal Handicrafts had been selling handmade products — trophies, gifts, and decorative items — the old way: walk-ins, phone calls, word of mouth. They had loyal customers in Jabalpur but no way to reach buyers beyond the city. No online store. No way to take orders. No way to track what was selling. The owner wanted to change that.`,

    brief:
      `Build us a proper online shop. Customers should be able to browse products, place orders, and pay online. We also need a way to manage everything ourselves — add products, see orders, handle customers — without calling a developer every time.`,

    solution:
      `We designed and built a full-stack e-commerce platform from the ground up. The storefront lets customers browse by category, view detailed product pages with images, add items to cart (even without logging in), and complete purchases via Razorpay — India's most trusted payment gateway. Every customer gets an order confirmation, can track order status, and manage their account including saved addresses and order history. On the backend, the owner gets a private admin dashboard to manage products, view and update orders, and track the full business — no technical knowledge required.`,

    challenges: [
      {
        title: 'Checkout was crashing 15% of the time',
        detail:
          'The checkout form had a React infinite loop — a useEffect dependency issue that caused the component to re-render indefinitely whenever a guest user logged in mid-checkout. We traced it, isolated the dependency chain, and fixed it cleanly. Zero crashes after that.',
      },
      {
        title: 'Cart totals were wrong for returning users',
        detail:
          'Customers who had items in their cart from a previous session were seeing incorrect totals — a legacy data format mismatch between old and new cart structures. We wrote a migration layer that detects and corrects legacy cart data on login, shows the user a clear toast explaining what happened, and recalculates totals accurately.',
      },
      {
        title: 'Admin panel was unusable at scale',
        detail:
          'The admin dashboard was loading all products and orders into memory at once. With 500+ items, this caused 10-second load times and browser tab crashes. We built a pagination system with a reusable usePagination hook — reducing load time from 10s to under 0.5s and making the panel scalable to 10,000+ products.',
      },
      {
        title: 'Every database session was hammering Supabase',
        detail:
          'Admin role verification was running 15–20 separate DB queries per session because the role check was not cached. We added an in-memory cache in AuthContext so the admin role is fetched once and reused — cutting DB queries by 93% and admin navigation time by 90%.',
      },
      {
        title: 'Payment gateway migration mid-project',
        detail:
          'The project started with PhonePe as the payment gateway. During development, we had to migrate to Razorpay due to API limitations. We built a clean integration layer so the switch was seamless for the frontend — no UI changes needed, just a new service underneath.',
      },
    ],

    outcome:
      `The platform launched production-ready with a 98/100 technical score. Shreephal Handicrafts now has a fully functional online store — products are live, payments work, and the owner manages everything independently through the admin panel. The business went from zero digital presence to a complete e-commerce operation.`,

    features: [
      'Product catalogue with category browsing and search',
      'Detailed product pages with image galleries',
      'Persistent cart — works for guests and logged-in users',
      'Razorpay payment integration (UPI, cards, net banking)',
      'Order placement, confirmation, and status tracking',
      'Customer accounts — register, login, Google OAuth, phone OTP',
      'Password reset flow with email verification',
      'Favourites / wishlist',
      'Full admin dashboard — products, orders, customers',
      'Admin pagination (handles 10,000+ items)',
      'SEO-optimised pages with JSON-LD structured data',
      'Offline detection banner for mobile users',
      'Refund policy, T&C, privacy policy pages',
      'Dedicated SEO landing page for "Trophy Shop Jabalpur"',
    ],

    metrics: [
      { label: 'Checkout crash rate',    value: '0%',     note: 'Was 15% before fix',       icon: 'check-circle' },
      { label: 'Admin load time',        value: '0.5s',   note: 'Was 10s for 1000+ items',  icon: 'zap' },
      { label: 'DB queries per session', value: '-93%',   note: 'From 15–20 down to 1',     icon: 'database' },
      { label: 'Memory usage',           value: '-95%',   note: 'From 500MB to 25MB',       icon: 'cpu' },
      { label: 'SEO score',              value: '92/100', note: 'Up from 65/100',           icon: 'trending-up' },
      { label: 'Production readiness',   value: '98/100', note: 'Full audit score',         icon: 'award' },
    ],

    testimonial: {
      quote: null,
      author: null,
      role: 'Owner, Shreephal Handicrafts',
      avatar: null,
    },

    stack: ['React', 'Vite', 'Supabase', 'PostgreSQL', 'Razorpay', 'Netlify', 'Vercel'],
  },

  // ── ASHRAY WELLNESS ──────────────────────────────────────────────────────────
  {
    id: 'ashray-wellness',
    slug: 'ashray-wellness',
    status: 'live',
    featured: true,

    // ── CLIENT ──
    client: {
      name: 'Ashray Wellness',
      industry: 'Spiritual & Holistic Wellness',
      location: 'Bhopal, Madhya Pradesh, India',
      size: 'Small business',
      url: 'https://ashraywellness.com',
    },

    // ── META ──
    type: 'Web Development',
    tags: ['Website', 'Wellness', 'Mobile-first', 'Lead Generation'],
    duration: null,
    year: 2025,
    live: 'https://ashraywellness.com',
    github: null,

    // ── VISUAL ──
    image: null,
    images: [],
    color: 'violet',

    // ── HEADLINE ──
    headline: 'A spiritual wellness platform that earns trust before a single word is spoken.',
    summary:
      'A full-featured wellness platform for Ashi Pawaiya Jain — a certified astrologer, master Reikist, numerologist, and psychologist — to connect with clients globally, showcase services, and drive consultation bookings.',

    // ── THE STORY ──

    // The Situation
    context:
      `Ashray Wellness had a growing reputation through platforms like Astrotalk and Nebula, and high-profile corporate partnerships with Accenture and the Indian Air Force. But without a dedicated digital home, the brand relied entirely on third-party platforms. Clients couldn't discover the full scope of services, book sessions directly, or trust the brand at first glance. The practitioner — Ashi Pawaiya Jain — had 8+ years of experience, 17,000+ consultations, and 20,000+ happy clients. None of that was visible anywhere she owned.`,

    // The Ask
    brief:
      `We need a website that feels as healing and intentional as our practice. Something clients land on and immediately feel — this is a person I can trust. It should show everything we do: personal consultations, corporate wellness programs, all the credentials. And make it easy to get in touch.`,

    // What We Built
    solution:
      `We designed and built a cosmic-themed multi-page wellness platform that communicates credibility the moment the page loads. The hero surfaces the most powerful trust signals — 20K+ clients, 8+ years, certifications — immediately. A dedicated About section tells Ashi's story with warmth and precision: her credentials (Astrologer, Reikist, Numerologist, Psychologist), her background with Astrotalk and Nebula, and her corporate work with Accenture and the Indian Air Force. A separate Corporate Wellness section speaks directly to HR leaders and organisations, with its own value proposition and CTA. Direct WhatsApp and email CTAs are embedded throughout so no enquiry gets lost. The entire site is fully responsive, motion-rich, and optimised for mobile-first spiritual seekers.`,

    // The Challenges
    challenges: [
      {
        title: 'Trust had to land in under 3 seconds',
        detail:
          'Spiritual services live and die by credibility. A visitor who doubts the practitioner in the first scroll will never book. We solved this by surfacing the four strongest proof points — 20K+ clients, 17K+ consultations, recognisable partner logos, and certification badges — above the fold, before any copy asked for anything.',
      },
      {
        title: 'Two audiences, one website',
        detail:
          'The site needed to speak to two completely different visitors: individuals seeking personal guidance (emotional, career, spiritual) and corporate HR leaders evaluating wellness programs for their teams. We built distinct sections with different tones, CTAs, and value propositions for each — so neither audience felt the site was built for someone else.',
      },
      {
        title: 'Design had to feel cosmic without feeling chaotic',
        detail:
          'Spiritual wellness brands often fall into one of two traps: generic and clinical, or overwhelming and mystical. We needed a middle path — a gradient-cosmic palette with precise motion animations (Framer Motion) that evoke calm, depth, and authority without visual noise. Every colour, animation timing, and spacing decision was made in service of that feeling.',
      },
    ],

    // The Outcome
    outcome:
      `A polished digital presence that mirrors the depth of the practice. Ashray Wellness now owns its brand online — with a platform that communicates authority, warmth, and credibility before the first consultation. Clients arrive informed, confident, and ready to book.`,

    // ── FEATURES BUILT ──
    features: [
      'Cosmic-themed animated hero with motion-rich UI (Framer Motion)',
      'Stats section: 8+ years, 17K+ consultations, 20K+ clients, 15+ expertise areas',
      'Credentials showcase: Astrologer, Reikist, Numerologist, Psychologist, Trusted Guide',
      'Personal story section with practitioner biography and brand narrative',
      'Dedicated Corporate Wellness section (Employee Wellness, Mental Health, Leadership, Stress Management)',
      'Partner trust section: Astrotalk, Nebula, Accenture, Indian Air Force',
      'Services pages: personal consultations, corporate programs, group sessions',
      'Embedded WhatsApp CTA (+91 93402 16182) for instant booking',
      'Email and location contact block',
      'Fully mobile-responsive layout',
      'Smooth page transitions and scroll animations',
    ],

    metrics: [
      { label: 'Happy Clients',       value: '20K+',  note: 'Served globally',                      icon: 'users' },
      { label: 'Consultations',       value: '17K+',  note: 'Delivered across platforms',           icon: 'message-circle' },
      { label: 'Expertise Areas',     value: '15+',   note: 'Astrology, Reiki, Numerology & more',  icon: 'star' },
      { label: 'Years Experience',    value: '8+',    note: 'Certified practice since 2016',        icon: 'award' },
      { label: 'Corporate Partners',  value: '2+',    note: 'Accenture, Indian Air Force',          icon: 'briefcase' },
      { label: 'Platform Partners',   value: '2+',    note: 'Astrotalk, Nebula',                    icon: 'globe' },
    ],

    testimonial: {
      quote:
        'The website perfectly captures the essence of what Ashray Wellness stands for — it feels warm, credible, and easy to navigate. Clients reach out much more confidently now.',
      author: 'Ashi Pawaiya Jain',
      role: 'Founder, Ashray Wellness',
      avatar: null,
    },

    stack: ['React', 'Framer Motion', 'Tailwind CSS', 'React Router', 'Lucide Icons', 'Vite'],
  },

  // ── PLACEHOLDER — to be replaced with The Preceptor case study ──
  {
    id: 'the-preceptor',
    slug: 'the-preceptor',
    status: 'live',
    featured: false,
    client: {
      name: 'The Preceptor',
      industry: 'Education',
      location: 'India',
      size: 'Small business',
      url: null,
    },
    type: 'Web Development',
    tags: ['Website', 'Education', 'Conversion'],
    duration: null,
    year: 2025,
    live: null,
    github: null,
    image: null,
    images: [],
    color: 'purple',
    headline: 'Coming soon',
    summary: 'Case study in progress.',
    context: null,
    brief: null,
    solution: null,
    challenges: [],
    outcome: null,
    features: [],
    metrics: [],
    testimonial: { quote: null, author: null, role: null, avatar: null },
    stack: [],
  },
]
