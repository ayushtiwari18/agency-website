import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { Reveal } from '../components/ui/Reveal'
import { CheckCircle, Send } from 'lucide-react'

const BUDGET_OPTIONS = [
  'Under ₹10,000',
  '₹10,000 – ₹20,000',
  '₹20,000 – ₹50,000',
  '₹50,000+',
  'Not sure yet',
]

const TIMELINE_OPTIONS = [
  'ASAP',
  '2–4 weeks',
  '1–2 months',
  '3+ months',
  'Just exploring',
]

const SERVICE_OPTIONS = [
  'Portfolio website',
  'Business website',
  'Growth website',
  'Something else',
]

export default function ContactFormSection() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm()

  const onSubmit = async (data) => {
    try {
      await fetch('https://formspree.io/f/mnjyewlo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      })
    } catch (_) {
      // silently fail
    }
    setSubmitted(true)
  }

  const inputCls = (hasError) =>
    `w-full px-4 py-3 rounded-lg border text-sm text-brand-black placeholder:text-brand-gray-400
     bg-white outline-none transition-colors duration-200
     focus:border-brand-black ${
       hasError ? 'border-red-400 bg-red-50' : 'border-brand-gray-200'
     }`

  return (
    <section className="section-pad bg-white" id="contact">
      <div className="container-content">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div>
            <Reveal>
              <p className="eyebrow mb-4">Get in touch</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="text-display-lg font-extrabold text-brand-black tracking-tight mb-5">
                Start your project.
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="text-brand-gray-500 text-sm leading-relaxed max-w-sm">
                Fill in the form and we&apos;ll get back to you within 24 hours
                with a clear next step. No obligations, no spam.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-10 space-y-3">
                {[
                  'Response within 24 hours',
                  'Free 30-min discovery call included',
                  'Fixed-price quotes — no hidden fees',
                  'No lock-in contracts',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle size={15} className="text-emerald-500 flex-shrink-0" />
                    <span className="text-sm text-brand-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right: form */}
          <Reveal delay={120} direction="left">
            {submitted ? (
              <div className="card-base p-10 flex flex-col items-center justify-center text-center min-h-[420px]">
                <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center mb-5">
                  <CheckCircle size={28} className="text-emerald-500" />
                </div>
                <h3 className="text-xl font-bold text-brand-black mb-2">Message received!</h3>
                <p className="text-sm text-brand-gray-500 max-w-xs leading-relaxed">
                  We&apos;ll review your project and get back to you within 24 hours
                  with a clear next step.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                className="card-base p-8 space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-brand-gray-600 mb-1.5">
                      Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      {...register('name', { required: 'Name is required' })}
                      placeholder="Your name"
                      className={inputCls(errors.name)}
                    />
                    {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-brand-gray-600 mb-1.5">
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email' },
                      })}
                      placeholder="you@company.com"
                      className={inputCls(errors.email)}
                    />
                    {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-brand-gray-600 mb-1.5">Business / Project name</label>
                  <input
                    {...register('business')}
                    placeholder="Your business or project name"
                    className={inputCls(false)}
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-brand-gray-600 mb-1.5">
                    What do you need? <span className="text-red-400">*</span>
                  </label>
                  <select
                    {...register('service', { required: 'Please select a service' })}
                    className={inputCls(errors.service)}
                  >
                    <option value="">Select a service…</option>
                    {SERVICE_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                  {errors.service && <p className="text-xs text-red-500 mt-1">{errors.service.message}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-brand-gray-600 mb-1.5">Budget range</label>
                    <select {...register('budget')} className={inputCls(false)}>
                      <option value="">Select budget…</option>
                      {BUDGET_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-brand-gray-600 mb-1.5">Timeline</label>
                    <select {...register('timeline')} className={inputCls(false)}>
                      <option value="">Select timeline…</option>
                      {TIMELINE_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-brand-gray-600 mb-1.5">Tell us more (optional)</label>
                  <textarea
                    {...register('message')}
                    rows={4}
                    placeholder="Brief description of your project, goals, or any questions…"
                    className={`${inputCls(false)} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-brand-black text-white text-sm font-bold rounded-lg hover:bg-brand-gray-800 active:scale-[0.98] disabled:opacity-50 transition-all duration-200"
                >
                  {isSubmitting ? 'Sending…' : <><Send size={14} /> Send message</>}
                </button>

                <p className="text-center text-xs text-brand-gray-400">
                  We respond within 24 hours &middot; No spam, ever.
                </p>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
