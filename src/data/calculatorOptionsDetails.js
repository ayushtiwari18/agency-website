export const optionDetails = {
  // Project Types
  'Simple/Portfolio': {
    title: 'Simple/Portfolio',
    whatIsIt: 'Basic layouts, static sites, personal portfolios, or simple landing pages designed to establish a sleek online presence quickly.',
    whyNeed: 'Ideal for showcasing your work, resume, or event details without the complexity of database systems. It loads instantly and requires minimal maintenance.',
    examples: [
      { name: 'Developer/Designer Portfolio', desc: 'A clean showcase of projects, skills, and contact details.' },
      { name: 'Product/Event Landing Page', desc: 'A highly optimized single page with direct call-to-actions.' }
    ],
    whatYouGet: [
      'Up to 3 high-impact sections or pages',
      'Mobile-responsive layout optimized for all screens',
      'Direct contact form linked to your email',
      'Social media and external profile integrations'
    ],
    faq: [
      { q: 'Can I add blog features later?', a: 'Yes! The codebase is built modularly, allowing us to upgrade it to a SMB or CMS setup whenever you are ready.' }
    ]
  },
  'Modern SMB': {
    title: 'Modern SMB',
    whatIsIt: 'A standard professional business website structured to establish authority, describe services, build trust, and capture customer inquiries.',
    whyNeed: 'Essential for any growing business. It goes beyond templates to provide customized layouts, integrated analytics, and strategic structures designed for conversion.',
    examples: [
      { name: 'Agency/Consultancy Website', desc: 'Displaying services, case studies, team profiles, and client reviews.' },
      { name: 'Local Services (e.g. Clinic, Law Firm)', desc: 'Service details, map integration, and request/booking options.' }
    ],
    whatYouGet: [
      'Fully custom pages (Home, About, Services, Contact, etc.)',
      'Advanced contact forms and interactive elements',
      'Analytics setup to monitor visitor behavior and traffic source',
      'Custom animations and styling aligned with your brand guides'
    ],
    faq: [
      { q: 'Can my team update the text or images?', a: 'Yes, we can plug in a Content Management System (CMS) so your team can make updates without writing code.' }
    ]
  },
  'Premium/E-commerce': {
    title: 'Premium/E-commerce',
    whatIsIt: 'A robust web application or online shop with dynamic database operations, secure checkout pathways, or user dashboards.',
    whyNeed: 'Required when you need to sell products online, manage user profiles, host members-only portals, or launch custom digital products (SaaS).',
    examples: [
      { name: 'SaaS Platform Front-end & App', desc: 'Marketing pages leading to a secure user dashboard.' },
      { name: 'E-commerce Brand Store', desc: 'Multi-category catalog, cart system, and payment checkout flow.' }
    ],
    whatYouGet: [
      'Database integration for dynamic content and user data',
      'Secure payment processing with stripe/payment gateways',
      'User sign-up, login, and dashboard systems',
      'Admin dashboard to manage orders, inventory, or users'
    ],
    faq: [
      { q: 'Are transaction fees included in the price?', a: 'No, transaction fees are charged directly by your payment processor (e.g. Stripe, usually 2-3% per transaction).' }
    ]
  },

  // Design Styles
  'Template-based': {
    title: 'Template-based Design',
    whatIsIt: 'We pick a high-quality, professionally designed template and adapt it to your brand — your logo, colours, and content dropped in. No design from scratch.',
    whyNeed: 'Fastest and most affordable path to a polished website. Great templates from Framer or Webflow look sharp out of the box.',
    examples: [
      { name: 'Framer Templates', desc: 'Premium templates used by thousands of startups.' },
      { name: 'Webflow Showcase', desc: 'Template-based sites that look completely original.' }
    ],
    whatYouGet: [
      'Professional design from day one',
      'Branded with your logo and colours',
      'Mobile-responsive layout included',
      'Faster delivery — days not weeks',
      'Building from scratch takes significantly more time and budget — a template gives you 80% of the result at 40% of the cost.'
    ],
    faq: [
      { q: "Will my site look like everyone else's?", a: 'We heavily customise the template colors, typography, and sections — most clients cannot tell it started as one.' }
    ]
  },
  'Semi-Custom': {
    title: 'Semi-Custom Design',
    whatIsIt: 'We use a library of established wireframes and layout structures, but customize sections, interactive items, and branding components to match your precise preferences.',
    whyNeed: 'The perfect middle-ground. You avoid starting from an empty canvas (saving design budget) but aren\'t restricted by a rigid pre-made template block layout.',
    examples: [
      { name: 'Hybrid Business Sites', desc: 'Using template foundations but redesigning the service list & interactive calculator.' },
      { name: 'Tailored Landing Pages', desc: 'Bespoke hero section and conversion flows combined with modular layouts.' }
    ],
    whatYouGet: [
      'Customized page configurations adapted to your content',
      'Brand style guide integration with unique UI assets',
      'Enhanced flexibility for interactive components',
      'Fast turnaround times with a personalized feel'
    ],
    faq: [
      { q: 'Can I request specific layout changes?', a: 'Yes! Unlike a strict template, we can restructure elements and build custom blocks in the Semi-Custom package.' }
    ]
  },
  'Fully Custom': {
    title: 'Fully Custom Design',
    whatIsIt: 'We design your website 100% from scratch in Figma based on deep branding research, then develop it into high-fidelity React code. Zero templates.',
    whyNeed: 'Essential for companies that want to build a truly unique brand identity, optimize conversion paths meticulously, or launch innovative products.',
    examples: [
      { name: 'Bespoke SaaS Landings', desc: 'Unique visual flows and storytelling layouts designed for high conversions.' },
      { name: 'Award-Winning Showcases', desc: 'Immersive layouts with unique scroll paths, graphics, and custom identities.' }
    ],
    whatYouGet: [
      'Tailor-made Figma prototypes for your approval before development',
      '100% original layout grids and custom interface elements',
      'High-performance codebase optimized for search and speed',
      'Complete creative freedom with no technical layout restrictions'
    ],
    faq: [
      { q: 'How does the design phase work?', a: 'We present mockups in Figma, iterate based on your feedback, and only start writing code once you are completely happy with the design.' }
    ]
  },

  // Page Ranges
  '1–3 Pages': {
    title: '1–3 Pages',
    whatIsIt: 'A lean, highly focused setup, typically consisting of a primary landing page or a small collection of essential links.',
    whyNeed: 'Best for launching waitlists, single-product campaigns, or simple personal resume sites where the goal is direct user action.',
    examples: [
      { name: 'Campaign Landing Page', desc: 'Focused on lead generation or signup forms.' },
      { name: 'Personal Profile Page', desc: 'Simple links, short bio, and portfolio link list.' }
    ],
    whatYouGet: [
      'High-converting landing page structure',
      'Essential utility pages (Privacy Policy, Terms)',
      'Clear, singular call-to-actions'
    ],
    faq: [
      { q: 'Can I add more pages later?', a: 'Yes, adding new pages is easy. We design the menu and codebase to support scaling up easily.' }
    ]
  },
  '4–6 Pages': {
    title: '4–6 Pages',
    whatIsIt: 'The standard footprint for most professional businesses and startups.',
    whyNeed: 'Gives you enough room to describe your business history, separate your services into distinct pages, and show a clear contact form.',
    examples: [
      { name: 'Corporate Business Site', desc: 'Home, About Us, Services, Blog, and Contact pages.' }
    ],
    whatYouGet: [
      'Full site navigation hierarchy',
      'Dedicated pages for core offerings',
      'Better internal linking options for search engines'
    ],
    faq: [
      { q: 'Is a blog included in these pages?', a: 'Yes, one page can be a blog/article archive, and we can configure a CMS to manage the individual posts.' }
    ]
  },
  '7–12 Pages': {
    title: '7–12 Pages',
    whatIsIt: 'A comprehensive multi-page layout designed for rich service lists, portfolio categories, or multi-topic information hubs.',
    whyNeed: 'Allows you to target search traffic for distinct, specific service keywords (e.g. having separate landing pages for each service).',
    examples: [
      { name: 'Service Provider Portal', desc: 'Separate pages for 5+ services, case study catalog, and details.' }
    ],
    whatYouGet: [
      'Scalable header navigation and search-friendly architecture',
      'Individual service and project landing pages',
      'Advanced content categorization structures'
    ],
    faq: [
      { q: 'Is it hard to manage this many pages?', a: 'We recommend integrating a Headless CMS (like Sanity) to make content changes easy and centralized.' }
    ]
  },
  '13–20 Pages': {
    title: '13–20 Pages',
    whatIsIt: 'A large-scale corporate website representing deep structures, division portfolios, or localized landing pages.',
    whyNeed: 'Required for established organizations that need to publish extensive career boards, service details, and investor reviews.',
    examples: [
      { name: 'Enterprise Corporate Site', desc: 'Multiple divisions, careers page, newsrooms, and detailed service portals.' }
    ],
    whatYouGet: [
      'Multi-level drop-down navigation or mega-menus',
      'Advanced site search engine setup',
      'Modular layout templates for clean visual consistency'
    ],
    faq: [
      { q: 'Will this scale slow down the load speeds?', a: 'No, we build modern compiled static pages that ensure every page loads instantly, regardless of count.' }
    ]
  },
  '20+ Pages': {
    title: '20+ Pages',
    whatIsIt: 'An extensive website platform designed to house massive content catalogs, directories, or hundreds of dynamic articles.',
    whyNeed: 'Crucial for directory sites, major educational resources, large-scale e-commerce stores, or franchise networks.',
    examples: [
      { name: 'SaaS Resource Hub', desc: 'Huge directory of articles, guides, tool recommendations, and templates.' }
    ],
    whatYouGet: [
      'Database-driven dynamic routing and templates',
      'Automated site map updates',
      'Custom content-creation panels'
    ],
    faq: [
      { q: 'Can pages be added automatically?', a: 'Yes! We configure a CMS or database so that adding a new record automatically creates its respective page on the fly.' }
    ]
  },

  // Content Ownership
  'Client Supplies Copy': {
    title: 'Client Supplies Copy',
    whatIsIt: 'You write and supply all website text, headlines, graphics, logos, and images. We focus entirely on design and development.',
    whyNeed: 'The most cost-efficient choice if you have ready-to-use copy or an internal team handling content strategy.',
    examples: [
      { name: 'Redesign Projects', desc: 'Porting pre-approved content from an old website onto a brand new layout.' }
    ],
    whatYouGet: [
      'Direct layout implementation of your draft files',
      'Optimization and compression of all your image files',
      'Clear guide on the required dimensions and character limits'
    ],
    faq: [
      { q: 'What happens if we need small edits?', a: 'We always do minor grammar checks and adjustment passes to make sure the text flows beautifully in the layout.' }
    ]
  },
  'We Edit & Structure': {
    title: 'We Edit & Structure',
    whatIsIt: 'You send us rough outlines, bullet points, or old drafts, and we refine, format, and structure them for search optimization and readability.',
    whyNeed: 'Saves you the tedious work of writing final polish. We ensure the tone is professional, headlines align with layout structures, and CTAs stand out.',
    examples: [
      { name: 'Draft Enhancement', desc: 'Converting notes about your service features into customer-centric headlines.' }
    ],
    whatYouGet: [
      'Restructured website copy optimized for readability and scan-patterns',
      'Strong value statements and headings that capture user interest',
      'Clear, conversion-focused call-to-actions'
    ],
    faq: [
      { q: 'Do we get to approve the final edits?', a: 'Absolutely. We submit all copy drafts to you for review before developing the live site.' }
    ]
  },
  'We Write All Content': {
    title: 'We Write All Content',
    whatIsIt: 'Complete, professional copywriting from scratch based on a short discovery questionnaire, competitor research, and SEO standards.',
    whyNeed: 'The ultimate hands-off approach. It delivers the best marketing results because we write copy optimized specifically for SEO search intent and conversions.',
    examples: [
      { name: 'Ground-Up Copywriting', desc: 'Creating your brand voice, headlines, body text, and testimonials from scratch.' }
    ],
    whatYouGet: [
      '100% original copy designed to rank and sell',
      'Targeted keyword placement based on SEO opportunities',
      'Consistent, engaging brand voice across all pages'
    ],
    faq: [
      { q: 'How do you learn about our services?', a: 'We host a brief discovery interview to extract your business details, target audience preferences, and unique strengths.' }
    ]
  },

  // SEO Scope
  'No SEO': {
    title: 'No SEO Configuration',
    whatIsIt: 'The website is developed with standard semantic HTML, but without custom keyword targets, meta description tuning, or index console submissions.',
    whyNeed: 'Best for internal portals, private launch campaigns, or companies that already have an in-house SEO agency managing the website.',
    whatYouGet: [
      'Valid, accessible semantic HTML structure',
      'Crawlable page layouts'
    ],
    faq: [
      { q: 'Will my site still appear on search results?', a: 'Yes, search engines will index it over time, but it won\'t be specifically target-optimized for your customer search phrases.' }
    ]
  },
  'Basic On-page SEO': {
    title: 'Basic On-page SEO',
    whatIsIt: 'Essential optimization settings configured during setup: page titles, description tags, search engine page tags, and accessibility alt text.',
    whyNeed: 'The minimum requirement to ensure your business ranks clearly when customers search for your brand name or primary service directly.',
    whatYouGet: [
      'Custom title tags and meta descriptions for every page',
      'Optimized header tags (H1, H2) for readability and search bots',
      'Alt tags applied to images for accessibility rankings',
      'XML sitemap and Robots.txt generated automatically'
    ],
    faq: [
      { q: 'Is this a recurring fee?', a: 'No, this is a one-time optimization configured during the building phase.' }
    ]
  },
  'On-page + Technical SEO': {
    title: 'On-page + Technical SEO',
    whatIsIt: 'Deep technical configuration including schema markup, speed tuning, asset compression, and search engine console submissions.',
    whyNeed: 'Gives you a competitive advantage on Google. It targets fast load times (a major ranking factor) and helps search engines understand your content structure.',
    whatYouGet: [
      'Structured JSON-LD schema markup (Local Business, Product, etc.)',
      'Performance tuning to achieve excellent Core Web Vitals grades',
      'Google Search Console setup and index request submission',
      'Clean URL routing structures and redirects check'
    ],
    faq: [
      { q: 'What PageSpeed score do you aim for?', a: 'We target 90+ performance scores on Google PageSpeed Insights for both desktop and mobile platforms.' }
    ]
  },
  'Local + Technical SEO': {
    title: 'Local + Technical SEO',
    whatIsIt: 'All technical SEO features plus targeting localized keyword queries and optimizing map registry details.',
    whyNeed: 'Critical for physical locations, regional services, clinics, or local shops looking to dominate map listings and regional search results.',
    whatYouGet: [
      'Geographical keyword optimizations (City, Region target pages)',
      'Google Business Profile integration and schema address setup',
      'Map embeddings and local citation structure'
    ],
    faq: [
      { q: 'When will I start seeing local search traffic?', a: 'Local maps and search engines typically update indices within 2 to 6 weeks after launch.' }
    ]
  },

  // Deployment
  'Client Handles Hosting': {
    title: 'Client Handles Hosting',
    whatIsIt: 'We deliver a production-ready codebase zip or push the code to your GitHub repository. Your team handles the deployment and server maintenance.',
    whyNeed: 'Ideal if you already have dedicated servers, a hosting account, or a technical team in-house.',
    whatYouGet: [
      'Clean, fully build-tested production folder or GitHub repo link',
      'Deployment guide detailing environment setup',
      '30-minute handover call to explain the code structure'
    ],
    faq: [
      { q: 'What servers do I need?', a: 'Since we build high-speed static/compiled code, you can use any standard web host, including Vercel, Netlify, or standard Apache servers.' }
    ]
  },
  'We Set Up Hosting': {
    title: 'We Set Up Hosting',
    whatIsIt: 'We configure and link your website to modern, global hosting networks (Vercel, Netlify, or similar cloud CDNs) on your account.',
    whyNeed: 'Zero-stress setup. Your website launches on highly secure, global servers that load your assets from the data center closest to the visitor.',
    whatYouGet: [
      'Domain integration and automatic SSL security certificate generation (HTTPS)',
      'Continuous deployment: updates on Git push go live automatically',
      'Global Content Delivery Network (CDN) hosting'
    ],
    faq: [
      { q: 'How much does this hosting cost?', a: 'Hosting static websites is free or extremely low cost (usually $0 for standard volumes) on platforms like Vercel.' }
    ]
  },
  'Managed Infrastructure': {
    title: 'Managed Infrastructure',
    whatIsIt: 'Setting up dedicated virtual servers, database storage instances, server environment security, and monitoring portals.',
    whyNeed: 'Required for complex web applications, dynamic membership portals, or applications handling private user data.',
    whatYouGet: [
      'Dedicated VPS configuration (AWS, DigitalOcean, or Google Cloud)',
      'Automated daily database backups and restore routines',
      'Server security firewalls and downtime alert monitors'
    ],
    faq: [
      { q: 'Who pays the server costs?', a: 'We link your direct payment details to the cloud provider, ensuring you pay raw server cost without markup fees.' }
    ]
  },

  // Features
  'Login/Auth': {
    title: 'Login & Authentication',
    whatIsIt: 'A secure gateway allowing visitors to create accounts, sign in, manage profiles, and access premium dashboard areas.',
    whyNeed: 'Necessary for web apps, member portals, subscription platforms, or custom SaaS applications.',
    whatYouGet: [
      'Secure password encryption and session token systems',
      'Clean Sign Up, Login, and Password Reset screens',
      'Protected client routes and profile page panels'
    ],
    faq: [
      { q: 'Is user data secure?', a: 'Yes, we use industry-standard encryption protocols (like NextAuth or custom JWT) to ensure complete data security.' }
    ]
  },
  'Payments/Stripe': {
    title: 'Payments & Subscriptions',
    whatIsIt: 'Integration of payment gateway checkout pipelines to accept credit cards, manage invoices, or charge recurring fees.',
    whyNeed: 'Required to charge customers online, sell products directly, or set up monthly subscription plans.',
    whatYouGet: [
      'Stripe checkout pages or custom input gateways',
      'Secure webhooks to process payments and update user access',
      'Customer billing portal integration to manage cards/receipts'
    ],
    faq: [
      { q: 'Does this handle local tax compliance?', a: 'We recommend utilizing Stripe Tax within the dashboard to calculate regional taxes automatically.' }
    ]
  },
  'CMS Panel': {
    title: 'Content Management System (CMS)',
    whatIsIt: 'A visual control dashboard (Sanity, Strapi, etc.) that allows your team to edit text, publish articles, or change images without writing code.',
    whyNeed: 'Empowers your marketing or content team to keep the website active without paying developers for minor text changes.',
    whatYouGet: [
      'Visual admin editor custom-structured to match your page sections',
      'Draft previews and easy image-cropping tools',
      'Rich-text support for blogs, team lists, and reviews'
    ],
    faq: [
      { q: 'Is there a CMS subscription cost?', a: 'We build using headless CMS options that offer generous free tiers, which are typically free for standard business sites.' }
    ]
  },
  'Booking System': {
    title: 'Booking & Scheduling System',
    whatIsIt: 'Integrating booking calendars directly into your website so clients can schedule calls or book sessions.',
    whyNeed: 'Automates scheduling. Eliminates endless back-and-forth emails by syncing directly with your Google or Outlook calendar.',
    whatYouGet: [
      'Cal.com, Calendly, or custom booking forms styled to match your site',
      'Automatic email reminders and Zoom/Google Meet links creation',
      'Timezone detection for international client accuracy'
    ],
    faq: [
      { q: 'Can we accept payments during booking?', a: 'Yes, we can link Stripe to your booking engine to collect booking fees before slot validation.' }
    ]
  },
  'Rich Animations': {
    title: 'Rich Animations & Motion Design',
    whatIsIt: 'Enhancing the website with smooth custom transitions, scroll-triggered visual reveals, and premium interactive hover designs.',
    whyNeed: 'Creates an immediate "wow" factor, reinforcing brand premiumness and significantly improving user engagement metrics.',
    whatYouGet: [
      'Custom scroll reveals using Framer Motion or GSAP',
      'Sleek page-to-page navigation animations',
      'Optimized, GPU-accelerated motion paths that run at a smooth 60fps'
    ],
    faq: [
      { q: 'Will this affect mobile loading speeds?', a: 'Not at all. We write clean, lightweight animations that avoid bloating pages or slowing down performance.' }
    ]
  },
  '3rd-party APIs': {
    title: '3rd-party API Integrations',
    whatIsIt: 'Connecting your website forms and databases to external software tools like CRM systems, email lists, or messaging platforms.',
    whyNeed: 'Automates manual tasks. Leads can automatically flow to HubSpot, customer lists populate in Mailchimp, or teams get notified on Slack.',
    whatYouGet: [
      'Secure connection scripts and credentials configuration',
      'Real-time data mapping from contact forms to external apps',
      'Error handling and API health reporting'
    ],
    faq: [
      { q: 'Can you connect to custom proprietary APIs?', a: 'Yes, as long as your proprietary system provides a standard secure API endpoint, we can connect to it.' }
    ]
  },

  // Timelines
  'Flexible (4–6 wks)': {
    title: 'Flexible Timeline (4–6 weeks)',
    whatIsIt: 'Our standard design and development pace, structured for detailed research, design, coding, testing, and alignment sessions.',
    whyNeed: 'Recommended for most projects. It allows for the most thorough exploration of designs and iterative reviews without rush fees.',
    whatYouGet: [
      'Full brand discovery and prototyping phases',
      'Multiple feedback loops to align concepts',
      'Thorough quality assurance and cross-device testing'
    ],
    faq: [
      { q: 'What happens if we finish early?', a: 'If mockups are approved quickly, we frequently deliver the final product ahead of the standard 6-week window.' }
    ]
  },
  'Rush (2–3 wks)': {
    title: 'Rush Timeline (2–3 weeks)',
    whatIsIt: 'An accelerated project run where we prioritize your project in our development queue to hit urgent deadlines.',
    whyNeed: 'Ideal for upcoming marketing campaigns, startup pitch deadlines, or urgent product launches.',
    whatYouGet: [
      'Priority engineering queue assignment',
      'Daily updates and rapid revision turnaround cycles',
      'Complete production launch in under 3 weeks'
    ],
    faq: [
      { q: 'Is the quality compromised?', a: 'No. We allocate additional developer resources to work in parallel, ensuring no shortcuts are taken on code or design quality.' }
    ]
  },
  'Urgent (<2 wks)': {
    title: 'Urgent Timeline (<2 weeks)',
    whatIsIt: 'Express, fast-track development. We dedicate a focused team to work exclusively on your build to deliver a prompt, secure launch.',
    whyNeed: 'Best for emergency project launches or hard marketing deadlines.',
    whatYouGet: [
      'Dedicated engineering squad assigned solely to your website',
      'Instant chat support channels for immediate design approvals',
      'Fully functioning production deployment in 10-14 days'
    ],
    faq: [
      { q: 'Are all features possible in 2 weeks?', a: 'For highly complex operations, we may suggest launching an MVP (Minimum Viable Product) first, then adding advanced features post-launch.' }
    ]
  }
};
