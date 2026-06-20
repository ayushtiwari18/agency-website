import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { ArrowRight, Zap, Star, Clock } from 'lucide-react'
import { AnimatedWord } from '../components/ui/AnimatedWord'
import { MagneticButton } from '../components/ui/MagneticButton'
import { useAnimatedCounter } from '../hooks/useAnimatedCounter'

const STATS = [
  { end: 10,  suffix: '+',  label: 'Projects delivered' },
  { end: 3,   suffix: '+',  label: 'Live products' },
  { end: 100, suffix: '%',  label: 'On-time launches' },
]

function StatCounter({ end, suffix, label }) {
  const { ref, display } = useAnimatedCounter(end, 2000, suffix)
  return (
    <div ref={ref} className="flex flex-col">
      <span className="text-[2.2rem] font-extrabold text-brand-black leading-none tracking-tight tabular-nums">
        {display}
      </span>
      <span className="text-xs text-brand-gray-500 mt-1 uppercase tracking-wider">{label}</span>
    </div>
  )
}

function MockupCard({ delay, className, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`bg-white rounded-2xl border border-brand-gray-200 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08)] p-4 ${className}`}
    >
      {children}
    </motion.div>
  )
}

export default function Hero() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  // Spring-smoothed parallax — eliminates jerk on scroll
  const rawBgY = useTransform(scrollYProgress, [0, 1], [0, 80])
  const bgY    = useSpring(rawBgY, { stiffness: 60, damping: 20, restDelta: 0.001 })

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-white pt-24 pb-16"
    >
      {/* Spring-parallax grid bg */}
      <motion.div
        aria-hidden
        style={{ y: bgY }}
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'linear-gradient(#000 1px,transparent 1px),linear-gradient(90deg,#000 1px,transparent 1px)',
            backgroundSize: '72px 72px',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 40%, white 100%)',
          }}
        />
      </motion.div>

      <div className="container-content relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* LEFT */}
          <div>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-8 rounded-full border border-brand-gray-200 bg-brand-gray-50"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[12px] font-medium text-brand-gray-600">
                Web development studio · Jabalpur, India
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-[clamp(2.6rem,5.5vw,5rem)] font-extrabold text-brand-black leading-[1.05] tracking-tight mb-6">
              <AnimatedWord text="We build websites" delay={0.1} />
              <br />
              <AnimatedWord
                text="that get you clients."
                delay={0.28}
                className="text-brand-gray-400"
              />
            </h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-[17px] text-brand-gray-500 leading-relaxed max-w-[440px] mb-10"
            >
              Fast, transparent, and conversion-focused. Portfolio, business,
              and growth websites built for one thing — results.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex flex-wrap items-center gap-3"
            >
              <MagneticButton>
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 px-6 py-3.5 bg-brand-black text-white text-sm font-bold rounded-lg hover:bg-brand-gray-800 active:scale-[0.97] transition-colors duration-200"
                >
                  Start a project
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link
                  to="/work"
                  className="inline-flex items-center gap-2 px-6 py-3.5 border border-brand-gray-300 text-brand-black text-sm font-semibold rounded-lg hover:border-brand-gray-600 active:scale-[0.97] transition-colors duration-200"
                >
                  See our work
                </Link>
              </MagneticButton>
            </motion.div>
          </div>

          {/* RIGHT — floating mockup cards */}
          <div className="relative hidden lg:block h-[480px]">
            <MockupCard delay={0.45} className="absolute top-4 left-4 right-4">
              <div className="flex items-center gap-1.5 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                <div className="flex-1 ml-2 h-5 bg-brand-gray-100 rounded-md" />
              </div>
              <div className="space-y-2">
                <div className="h-8 bg-brand-gray-100 rounded-lg w-2/3" />
                <div className="h-4 bg-brand-gray-100 rounded w-full" />
                <div className="h-4 bg-brand-gray-100 rounded w-4/5" />
                <div className="h-10 bg-brand-black rounded-lg w-1/3 mt-4" />
              </div>
            </MockupCard>

            <MockupCard delay={0.65} className="absolute bottom-28 left-0 w-52">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <Zap size={13} className="text-emerald-600" />
                </div>
                <span className="text-xs font-semibold text-brand-black">Performance</span>
              </div>
              <p className="text-2xl font-extrabold text-brand-black">100</p>
              <p className="text-[10px] text-brand-gray-500 uppercase tracking-widest">Lighthouse score</p>
            </MockupCard>

            <MockupCard delay={0.82} className="absolute bottom-8 right-0 w-56">
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={11} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-xs font-semibold text-brand-black mb-1">"Launched in 3 weeks."</p>
              <p className="text-[10px] text-brand-gray-500">— Rahul M., Founder</p>
            </MockupCard>

            <MockupCard delay={0.96} className="absolute top-8 right-0 w-44">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 bg-brand-gray-100 rounded-lg flex items-center justify-center">
                  <Clock size={13} className="text-brand-gray-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-brand-black">2–4 weeks</p>
                  <p className="text-[10px] text-brand-gray-500">avg. delivery</p>
                </div>
              </div>
            </MockupCard>

            {/* Gentle float — whole card group */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
                repeatType: 'loop',
              }}
              className="absolute inset-0 pointer-events-none"
            />
          </div>
        </div>

        {/* Stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-16 pt-10 border-t border-brand-gray-100 flex flex-wrap gap-8 md:gap-16"
        >
          {STATS.map((s) => <StatCounter key={s.label} {...s} />)}
        </motion.div>
      </div>
    </section>
  )
}
