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
    duration: null, // fill from project records
    year: 2025,
    live: 'https://shreephalhandicrafts.com',
    github: null, // private client repo

    // ── VISUAL ──
    image: null,   // add cover screenshot
    images: [],    // add gallery screenshots
    color: 'emerald',

    // ── HEADLINE ──
    headline: 'Taking a heritage handicraft brand fully online — cart, checkout, and all.',
    summary:
      'A complete e-commerce platform for a Jabalpur-based handicrafts business — with product catalogue, Razorpay payments, order tracking, and a full admin dashboard.',

    // ── THE STORY ──

    // The Situation
    context:
      `Shreephal Handicrafts had been selling handmade products — trophies, gifts, and decorative items — the old way: walk-ins, phone calls, word of mouth. They had loyal customers in Jabalpur but no way to reach buyers beyond the city. No online store. No way to take orders. No way to track what was selling. The owner wanted to change that.`,

    // The Ask
    brief:
      `Build us a proper online shop. Customers should be able to browse products, place orders, and pay online. We also need a way to manage everything ourselves — add products, see orders, handle customers — without calling a developer every time.`,

    // What We Built
    solution:
      `We designed and built a full-stack e-commerce platform from the ground up. The storefront lets customers browse by category, view detailed product pages with images, add items to cart (even without logging in), and complete purchases via Razorpay — India's most trusted payment gateway. Every customer gets an order confirmation, can track order status, and manage their account including saved addresses and order history. On the backend, the owner gets a private admin dashboard to manage products, view and update orders, and track the full business — no technical knowledge required.`,

    // The Challenges
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

    // The Outcome
    outcome:
      `The platform launched production-ready with a 98/100 technical score. Shreephal Handicrafts now has a fully functional online store — products are live, payments work, and the owner manages everything independently through the admin panel. The business went from zero digital presence to a complete e-commerce operation.`,

    // ── FEATURES BUILT ──
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

    // ── PROOF ──
    metrics: [
      { label: 'Checkout crash rate',    value: '0%',     note: 'Was 15% before fix',       icon: 'check-circle' },
      { label: 'Admin load time',        value: '0.5s',   note: 'Was 10s for 1000+ items',  icon: 'zap' },
      { label: 'DB queries per session', value: '-93%',   note: 'From 15–20 down to 1',     icon: 'database' },
      { label: 'Memory usage',           value: '-95%',   note: 'From 500MB to 25MB',       icon: 'cpu' },
      { label: 'SEO score',              value: '92/100', note: 'Up from 65/100',           icon: 'trending-up' },
      { label: 'Production readiness',   value: '98/100', note: 'Full audit score',         icon: 'award' },
    ],

    testimonial: {
      quote: null,  // request from client
      author: null,
      role: 'Owner, Shreephal Handicrafts',
      avatar: null,
    },

    // ── STACK ──
    stack: ['React', 'Vite', 'Supabase', 'PostgreSQL', 'Razorpay', 'Netlify', 'Vercel'],
  },

  // ── PLACEHOLDER — to be replaced with Ashray Wellness case study ──
  {
    id: 'ashray-wellness',
    slug: 'ashray-wellness',
    status: 'live',
    featured: false,
    client: {
      name: 'Ashray Wellness',
      industry: 'Healthcare / Wellness',
      location: 'India',
      size: 'Small business',
      url: null,
    },
    type: 'Web Development',
    tags: ['Website', 'Healthcare', 'Lead Generation'],
    duration: null,
    year: 2025,
    live: null,
    github: null,
    image: null,
    images: [],
    color: 'blue',
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
