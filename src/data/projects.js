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
    image: '/projects/mockups/Shreefal.png',
    images: [
      { url: '/projects/mockups/Shreefal.png', caption: 'Hero Banner — Celebrate Your Achievements in Style' },
      { url: '/projects/shreephal/shreephal-2.png', caption: 'Product Categories — Custom Awards, Medals, Trophies & Memorials' },
      { url: '/projects/shreephal/shreephal-3.png', caption: 'Interactive Shopping Cart & Real-time Order Summary' },
      { url: '/projects/shreephal/shreephal-4.png', caption: 'Checkout Integration — Secured by Razorpay' },
      { url: '/projects/shreephal/shreephal-5.png', caption: 'Payment Options — UPI, Cards, Netbanking & Wallets' },
    ],
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
      { label: 'Checkout crash rate', value: '0%', note: 'Was 15% before fix', icon: 'check-circle' },
      { label: 'Admin load time', value: '0.5s', note: 'Was 10s for 1000+ items', icon: 'zap' },
      { label: 'DB queries per session', value: '-93%', note: 'From 15–20 down to 1', icon: 'database' },
      { label: 'Memory usage', value: '-95%', note: 'From 500MB to 25MB', icon: 'cpu' },
      { label: 'SEO score', value: '92/100', note: 'Up from 65/100', icon: 'trending-up' },
      { label: 'Production readiness', value: '98/100', note: 'Full audit score', icon: 'award' },
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

    client: {
      name: 'Ashray Wellness',
      industry: 'Spiritual & Holistic Wellness',
      location: 'Bhopal, Madhya Pradesh, India',
      size: 'Small business',
      url: 'https://ashray-wellness.com',
    },

    type: 'Web Development',
    tags: ['Website', 'Wellness', 'Mobile-first', 'Lead Generation'],
    duration: null,
    year: 2025,
    live: 'https://ashray-wellness.com',
    github: null,

    image: null,
    images: [],
    color: 'violet',

    headline: 'A spiritual wellness platform that earns trust before a single word is spoken.',
    summary:
      'A full-featured wellness platform for Ashi Pawaiya Jain — a certified astrologer, master Reikist, numerologist, and psychologist — to connect with clients globally, showcase services, and drive consultation bookings.',

    context:
      `Ashray Wellness had a growing reputation through platforms like Astrotalk and Nebula, and high-profile corporate partnerships with Accenture and the Indian Air Force. But without a dedicated digital home, the brand relied entirely on third-party platforms. Clients couldn't discover the full scope of services, book sessions directly, or trust the brand at first glance. The practitioner — Ashi Pawaiya Jain — had 8+ years of experience, 17,000+ consultations, and 20,000+ happy clients. None of that was visible anywhere she owned.`,

    brief:
      `We need a website that feels as healing and intentional as our practice. Something clients land on and immediately feel — this is a person I can trust. It should show everything we do: personal consultations, corporate wellness programs, all the credentials. And make it easy to get in touch.`,

    solution:
      `We designed and built a cosmic-themed multi-page wellness platform that communicates credibility the moment the page loads. The hero surfaces the most powerful trust signals — 20K+ clients, 8+ years, certifications — immediately. A dedicated About section tells Ashi's story with warmth and precision: her credentials (Astrologer, Reikist, Numerologist, Psychologist), her background with Astrotalk and Nebula, and her corporate work with Accenture and the Indian Air Force. A separate Corporate Wellness section speaks directly to HR leaders and organisations, with its own value proposition and CTA. Direct WhatsApp and email CTAs are embedded throughout so no enquiry gets lost. The entire site is fully responsive, motion-rich, and optimised for mobile-first spiritual seekers.`,

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

    outcome:
      `A polished digital presence that mirrors the depth of the practice. Ashray Wellness now owns its brand online — with a platform that communicates authority, warmth, and credibility before the first consultation. Clients arrive informed, confident, and ready to book.`,

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
      { label: 'Happy Clients', value: '20K+', note: 'Served globally', icon: 'users' },
      { label: 'Consultations', value: '17K+', note: 'Delivered across platforms', icon: 'message-circle' },
      { label: 'Expertise Areas', value: '15+', note: 'Astrology, Reiki, Numerology & more', icon: 'star' },
      { label: 'Years Experience', value: '8+', note: 'Certified practice since 2016', icon: 'award' },
      { label: 'Corporate Partners', value: '2+', note: 'Accenture, Indian Air Force', icon: 'briefcase' },
      { label: 'Platform Partners', value: '2+', note: 'Astrotalk, Nebula', icon: 'globe' },
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

  // ── THE PRECEPTOR ────────────────────────────────────────────────────────────
  {
    id: 'the-preceptor',
    slug: 'the-preceptor',
    status: 'live',
    featured: true,

    // ── CLIENT ──
    client: {
      name: 'The Preceptor',
      industry: 'Vedic Astrology / Spiritual Consultation',
      location: 'Worldwide · Online',
      size: 'Solo practitioner',
      url: 'https://thepreceptorglobal.com',
    },

    // ── META ──
    type: 'Web Development',
    tags: ['Consultation Platform', 'Booking System', 'CMS Integration', 'Full-Stack', 'Cinematic UI'],
    duration: null,
    year: 2025,
    live: 'https://thepreceptorglobal.com',
    github: 'https://github.com/thepreceptor1111/the-prceptor',

    image: '/projects/mockups/preceptor.png',
    images: [
      { url: '/projects/mockups/preceptor.png', caption: 'Hero Landing page — A modern astrologer for a modern world' },
      { url: '/projects/the-preceptor/preceptor-2.png', caption: 'Cosmic Astrological Wheel Showcase & Statistics' },
      { url: '/projects/the-preceptor/preceptor-3.png', caption: 'Vedic Consultation Bookings with Live Countdowns & Offers' },
      { url: '/projects/the-preceptor/preceptor-4.png', caption: 'Cal.com Interactive Scheduling & Timezone Integration' },
      { url: '/projects/the-preceptor/preceptor-5.png', caption: 'Cinematic About The Preceptor Founder Biography' },
    ],
    color: 'gold',

    // ── HEADLINE ──
    headline: 'A cinematic astrology platform built for high-intention seekers — and the practitioner who guides them.',
    summary:
      'A premium, multi-page consultation platform for The Preceptor — a Vedic astrologer with 7+ years of practice, serving clients across 47 countries. Built with a cinematic design system, a 4-step booking wizard, Sanity CMS, Cal.com integration, and a full e-commerce shop.',

    // ── THE STORY ──
    context:
      `The Preceptor had been practising Vedic astrology since 2019, beginning as a personal search for answers after years of personal loss and difficulty. Over seven years, the practice grew from free readings for friends into a global consultation studio serving founders, artists, healers, and high-intention seekers across 47 countries — 8,400+ sessions delivered, a 4.98 average rating. But the digital presence didn't reflect the depth of the practice. There was no owned platform. No way for clients to self-serve, browse sessions, book a time, or buy digital products — without going through third-party platforms.`,

    brief:
      `Build something that feels like the practice itself — cinematic, quiet, unhurried. It should communicate who I am and what I do within seconds. Clients should be able to browse all sessions, understand what each one covers, book a time without friction, and eventually buy from a shop. It needs to work globally — different timezones, international clients, live content I can update myself without touching code.`,

    solution:
      `We designed and built a full multi-page consultation platform from the ground up — with a bespoke dark cosmic design system using CSS variables and OKLCH colour tokens, cinematic Framer Motion animations throughout, and a architecture built for long-term content ownership. The homepage presents the practice with immediate authority: a star-field hero, trust metrics (8,400+ sessions, 47 countries, 4.98 rating), and five featured sessions. A dedicated Services page lists all 10 consultation types — General Birth Chart, Detailed Birth Chart, Relationship Guidance, Partner Compatibility, Marriage Consultation, Career Consultation, Saturn's Seven and a Half, Later Life Reading, Mahadasha Guidance, and Current Situation Guidance — with tier-based filtering (Quick / Mid-Level / In-Depth). A 4-step Booking Wizard handles the full session intake: service selection, date & time, client details, and confirmation. A Sanity CMS integration keeps all live content — services, testimonials, settings — editable without a developer. A Cal.com embed (Phase 2) handles real calendar booking. The About page carries the full founder story — written in the first person, deeply personal, from loss and searching to becoming The Preceptor. A Testimonials page, a Q&A page, a Shop (Phase 1 Sanity-powered), Contact, Privacy, and Terms pages complete the platform. SEO metadata, JSON-LD structured data, and open graph tags are set on every route.`,

    challenges: [
      {
        title: 'A design system that earns trust without saying a word',
        detail:
          'Spiritual consultation platforms suffer from two failure modes: cold and clinical (stock photos, generic layouts) or noisy and mystical (every element animated, every surface glowing). We needed a third path — quiet luxury. We built a bespoke dark design system using CSS custom properties and OKLCH color tokens: deep cosmic surfaces, gold as the single accent, Cormorant Garamond as the display serif, and motion that is deliberate and slow. The aesthetic communicates the practitioner\'s voice before any copy is read.',
      },
      {
        title: 'A booking wizard that handles complexity without friction',
        detail:
          'Session booking requires collecting: which service, preferred date and time, full birth details (date, time, place), relationship status, what the client wants to focus on, and timezone. Putting all of this in a single form would feel like a bureaucratic intake process. We designed a 4-step wizard — service selection, scheduling, birth details, confirmation — with animated step transitions, clear progress indicators, and validation at each step. The client always knows where they are and what comes next.',
      },
      {
        title: 'Live content without a developer in the loop',
        detail:
          'The practitioner needed to update session prices, toggle sold-out status, change the offer timer end date, and update testimonials — without filing a support request. We integrated Sanity CMS as the content layer, with GROQ queries for services, testimonials, and site settings. The frontend falls back to static constants if the CMS is unreachable, so the site is never broken. Every editable string in the UI has a corresponding Sanity field.',
      },
      {
        title: 'A limited-time offer timer that actually works',
        detail:
          'The services page needed a countdown timer for a live pricing offer — showing the original price struck through while the offer was active, and hiding the struck price after expiry. A naive implementation (always show the timer) creates urgency theatre that erodes trust when the offer never actually ends. We built a useOfferActive hook driven by a single OFFER_END_DATE constant — the timer is real, the countdown is accurate to the second, and after expiry the original price disappears automatically.',
      },
      {
        title: 'Global scheduling across 47 countries and dozens of timezones',
        detail:
          'Clients booking from Tokyo, Toronto, Berlin, and Mumbai all need to see available slots in their local time and confirm sessions without mental timezone arithmetic. We implemented timezone-aware scheduling in the booking wizard with automatic local time detection, clear timezone display, and a Cal.com integration in Phase 2 to handle the real calendar layer — so the practitioner\'s availability is always accurate regardless of where the client is.',
      },
    ],

    outcome:
      `The Preceptor now has a digital home that matches the depth and quality of the practice. Clients across 47 countries can discover all 10 session types, understand what each one covers, and book a private consultation without leaving the platform. The practitioner updates content, prices, and testimonials independently through Sanity CMS — no developer calls required. The platform is built to grow: Phase 2 (Cal.com live booking), Phase 3 (Resend email + analytics), and Phase 4 (full SEO + structured data) are already architected.`,

    features: [
      'Dark cosmic design system — OKLCH tokens, Cormorant Garamond serif, gold accent',
      'Cinematic Framer Motion animations — hero, scroll reveals, page transitions',
      'Star-field animated hero with trust metrics above the fold',
      '10 consultation sessions across 4 tier filters (Quick / Mid-Level / In-Depth)',
      'Live offer countdown timer (useOfferActive hook, real expiry date)',
      '4-step booking wizard — service, schedule, birth details, confirmation',
      'Sanity CMS integration — services, testimonials, site settings via GROQ',
      'Static fallback constants — site never breaks if CMS is unreachable',
      'Cal.com embed (Phase 2) for real calendar availability',
      'Full About page with first-person founder story',
      'Testimonials page with client reviews (18+ countries represented)',
      'Q&A page — 6+ common questions answered',
      'Shop page (Phase 1 scaffold, Sanity-powered in Phase 2)',
      'Contact page with mailto form + social links',
      'Privacy Policy and Terms & Conditions pages',
      'SEO metadata + Open Graph tags on every route',
      'TanStack Router (file-based) for type-safe routing',
      'Vite 6 build — sub-second HMR, optimised production bundle',
      'Fully mobile-responsive, timezone-aware scheduling',
    ],

    metrics: [
      { label: 'Sessions Delivered', value: '8,400+', note: 'Across all consultation types', icon: 'star' },
      { label: 'Countries Served', value: '47', note: 'Global client base', icon: 'globe' },
      { label: 'Average Rating', value: '4.98', note: 'Across all client reviews', icon: 'award' },
      { label: 'Years of Practice', value: '7+', note: 'Since August 2019', icon: 'clock' },
      { label: 'Session Types', value: '10', note: 'From quick reads to deep dives', icon: 'layers' },
      { label: 'Content Areas', value: '9+', note: 'Home, About, Services, Book, Q&A…', icon: 'layout' },
    ],

    testimonial: {
      quote:
        'Calm, confident, and breathtakingly accurate. The Preceptor gave me a map I didn\'t know I needed.',
      author: 'Daniel K.',
      role: 'Client, London, UK',
      avatar: null,
    },

    stack: [
      'React 19',
      'Vite 6',
      'TanStack Router',
      'Framer Motion',
      'Sanity CMS',
      'Cal.com',
      'CSS Variables',
      'Cormorant Garamond',
      'Vercel',
    ],
  },

  // ── AYUSH DEVFOLIO ───────────────────────────────────────────────────────────
  {
    id: 'ayush-devfolio',
    slug: 'ayush-devfolio',
    status: 'live',
    featured: true,

    // ── CLIENT ──
    client: {
      name: 'Ayush Tiwari',
      industry: 'Developer Portfolio & Personal Brand Platform',
      location: 'India',
      size: 'Solo developer',
      url: 'https://www.ayushtiwari.dev/',
    },

    // ── META ──
    type: 'Web Development',
    tags: ['Portfolio', 'Next.js 15', 'Tailwind CSS', 'Supabase', 'SEO-first', 'Mobile-first'],
    duration: null,
    year: 2026,
    live: 'https://www.ayushtiwari.dev/',
    github: 'https://github.com/ayushtiwari-dev/devfolio',

    // ── VISUAL ──
    image: '/projects/mockups/Portfolio.png',
    images: [
      { url: '/projects/mockups/Portfolio.png', caption: 'Ayush DevFolio — Developer Portfolio & Personal Brand Platform' },
    ],
    color: 'violet',

    // ── HEADLINE ──
    headline: 'A portfolio platform that turns projects, writing, and achievements into a single credible digital presence.',
    summary:
      'A full-featured developer portfolio for Ayush Tiwari to showcase projects, technical content, certifications, hackathons, and contact workflows through a polished, production-ready personal brand website.',

    // ── THE STORY ──
    context:
      `Ayush needed more than a simple resume website. The goal was to create a personal platform that could present technical work, support long-form content, and grow over time as new projects, articles, and achievements were added. The portfolio had to feel modern and distinctive, while still staying fast, responsive, and SEO-friendly.`,

    brief:
      `We need a portfolio that feels modern and professional, highlights real work clearly, and gives projects, blogs, certifications, and achievements a proper home — not just a single scrolling page.`,

    solution:
      `We designed and structured a modern portfolio platform with a strong visual identity, mobile-first layouts, dedicated project pages, blog support, certification and hackathon sections, and a Supabase-backed contact workflow. The stack uses Next.js 15 for performance and SEO, Tailwind CSS for a scalable UI system, and a content architecture built to grow without redesigning the entire website later.`,

    challenges: [
      {
        title: 'The site had to feel premium without becoming noisy',
        detail:
          'Portfolio websites often overuse motion and effects. This project balanced a dark purple theme, glassmorphism, hover glows, and smooth animations with strong layout hierarchy so the interface stays impressive without distracting from the work.',
      },
      {
        title: 'Multiple credibility signals had to coexist cleanly',
        detail:
          'The site needed room for projects, blog content, certifications, hackathons, and contact flows. We solved this by treating each as a distinct proof layer, so visitors can quickly understand depth without the experience feeling cluttered.',
      },
      {
        title: 'Performance and discoverability had to stay strong',
        detail:
          'Because the site includes multiple dynamic sections, SEO and structure had to be built in from the start. Next.js rendering, dynamic metadata, sitemap generation, robots support, and image optimization make the platform easier to discover and scale.',
      },
    ],

    outcome:
      `Ayush DevFolio becomes a polished digital home for personal branding — one place to present technical depth, proof of work, achievements, and written content in a cohesive experience. Instead of sending scattered links, the developer now has a single platform that communicates capability and credibility clearly.`,

    features: [
      'Next.js 15 portfolio architecture with SEO-focused rendering',
      'Dedicated project pages with slug-based routing',
      'Blog listing and blog post support',
      'Certifications showcase',
      'Hackathons section for achievements and participation',
      'Supabase-backed contact form workflow',
      'Responsive mobile-first design',
      'Dynamic metadata, sitemap, and robots.txt support',
      'Modern visual system with dark theme, glows, animations, and Three.js background',
    ],

    metrics: [
      { label: 'Core Sections', value: '8+', note: 'Projects, blog, certifications, hackathons, contact, and more', icon: 'layers' },
      { label: 'Content Types', value: '5+', note: 'Projects, blog posts, certifications, hackathons, contact', icon: 'star' },
      { label: 'Tech Foundation', value: '3', note: 'Next.js 15, Tailwind CSS, Supabase', icon: 'cpu' },
      { label: 'SEO Readiness', value: 'Built-in', note: 'Dynamic metadata, sitemap, robots.txt', icon: 'trending-up' },
    ],

    testimonial: {
      quote: null,
      author: null,
      role: 'Client & Software Developer',
      avatar: null,
    },

    stack: ['Next.js 15', 'Tailwind CSS', 'Supabase', 'Framer Motion', 'Three.js'],
  },
]

