import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import HeroMockup from '../components/ui/HeroMockup'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

const stats = [
  { value: '10+',  label: 'Projects delivered' },
  { value: '3+',   label: 'Live products' },
  { value: '100%', label: 'On-time launches' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-white">
      {/* subtle grid bg */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(to right, #E8E8E8 1px, transparent 1px), linear-gradient(to bottom, #E8E8E8 1px, transparent 1px)',
          backgroundSize: '72px 72px',
          opacity: 0.35,
        }}
      />
      {/* fade-out bottom edge */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 inset-x-0 h-48"
        style={{ background: 'linear-gradient(to bottom, transparent, #ffffff)' }}
      />

      <div className="container-content relative z-10 pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* LEFT COPY */}
          <div className="max-w-[580px]">

            {/* Eyebrow pill */}
            <motion.div {...fadeUp(0)}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-brand-gray-200 bg-brand-gray-50 mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                <span className="text-xs font-medium text-brand-gray-600 tracking-wide">
                  Web development studio &middot; Jabalpur, India
                </span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              {...fadeUp(0.08)}
              className="text-[clamp(2.6rem,6vw,5.25rem)] font-extrabold leading-[1.04] tracking-[-0.03em] text-brand-black mb-6"
            >
              We build websites that help businesses{' '}
              <span className="relative inline-block">
                get clients.
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  style={{ originX: 0 }}
                  className="absolute -bottom-1 left-0 right-0 h-[3px] bg-brand-black rounded-full block"
                />
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              {...fadeUp(0.18)}
              className="text-[17px] text-brand-gray-500 leading-[1.7] mb-10 max-w-[460px]"
            >
              Fast, transparent, conversion-focused websites for businesses
              and personal brands. Built to rank, load fast, and convert visitors
              into leads.
            </motion.p>

            {/* CTAs */}
            <motion.div {...fadeUp(0.26)} className="flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-black text-white text-sm font-semibold rounded-lg hover:bg-brand-gray-800 active:scale-[0.97] transition-all duration-200"
              >
                Get Estimate <ArrowUpRight size={15} />
              </Link>
              <Link
                to="/work"
                className="inline-flex items-center gap-2 px-6 py-3 border border-brand-gray-300 text-brand-black text-sm font-semibold rounded-lg hover:border-brand-black active:scale-[0.97] transition-all duration-200"
              >
                See Work <ArrowRight size={15} />
              </Link>
            </motion.div>
          </div>

          {/* RIGHT MOCKUP */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex justify-end items-center"
          >
            <HeroMockup />
          </motion.div>
        </div>

        {/* STATS STRIP */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 lg:mt-20 pt-8 border-t border-brand-gray-200"
        >
          <div className="flex flex-wrap gap-10 md:gap-16">
            {stats.map((s, i) => (
              <div key={i} className="flex flex-col gap-0.5">
                <span className="text-[2rem] font-extrabold tracking-tight text-brand-black leading-none">
                  {s.value}
                </span>
                <span className="text-xs font-medium tracking-[0.1em] uppercase text-brand-gray-500">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
