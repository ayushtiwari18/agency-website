import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { CheckCircle, Send, MapPin, Mail, Clock } from 'lucide-react'
import { FadeIn } from '../components/ui/FadeIn'
import ContactMockup from '../components/ui/ContactMockup'

const SITE          = 'https://tj-creates.vercel.app'
const OG_IMAGE      = `${SITE}/og.png`
const TWITTER_IMAGE = `${SITE}/og-tiwtter.png`

const BUDGET_OPTIONS   = ['Under ₹10,000','₹10,000 – ₹20,000','₹20,000 – ₹50,000','₹50,000+','Not sure yet']
const TIMELINE_OPTIONS = ['ASAP','2–4 weeks','1–2 months','3+ months','Just exploring']
const SERVICE_OPTIONS  = ['Portfolio website','Business website','Growth website','Something else']

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const location = useLocation()
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    defaultValues: {
      message: location.state?.calculatorSummary || ''
    }
  })

  const onSubmit = async (data) => {
    try {
      await fetch('https://formspree.io/f/mnjyewlo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      })
    } catch (_) {}
    setSubmitted(true)
  }

  const inputCls = (err) =>
    `w-full px-4 py-3 rounded-lg border text-sm text-brand-black placeholder:text-brand-gray-400 bg-white outline-none transition-colors duration-200 focus:border-brand-black ${
      err ? 'border-red-400 bg-red-50' : 'border-brand-gray-200'
    }`

  return (
    <>
      <Helmet>
        <title>Contact — T&amp;J Creates</title>
        <meta name="description" content="Start your web development project with T&J Creates. Get a free estimate, book a discovery call, or ask us anything." />
        <meta property="og:title" content="Contact — T&J Creates" />
        <meta property="og:url" content={`${SITE}/contact`} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={TWITTER_IMAGE} />
        <link rel="canonical" href={`${SITE}/contact`} />
      </Helmet>

      <section className="section-pad pt-36 bg-white">
        <div className="container-content">
          <div className="mb-12">
            <FadeIn><p className="eyebrow mb-4">Get in touch</p></FadeIn>
            <FadeIn delay={0.08}>
              <h1 className="text-display-xl font-extrabold text-brand-black tracking-tight mb-5">
                Start your project.
              </h1>
            </FadeIn>
            <FadeIn delay={0.14}>
              <p className="text-brand-gray-500 text-[16px] leading-relaxed max-w-xl mb-8">
                Fill in the form and we'll get back to you within 24 hours
                with a clear next step. No obligations, no spam.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <ContactMockup />
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <FadeIn delay={0.1}>
                <div className="space-y-4 mb-8">
                  {[
                    { icon: Mail,   text: 'ayushtiwari102003@gmail.com' },
                    { icon: MapPin, text: 'Jabalpur, Madhya Pradesh, India' },
                    { icon: Clock,  text: 'Response within 24 hours' },
                  ].map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-brand-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon size={15} className="text-brand-gray-600" />
                      </div>
                      <span className="text-sm text-brand-gray-600">{text}</span>
                    </div>
                  ))}
                </div>
              </FadeIn>
              <FadeIn delay={0.18}>
                <div className="space-y-3">
                  {['Response within 24 hours','Free 30-min discovery call','Fixed-price quotes — no hidden fees','No lock-in contracts'].map(item => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle size={15} className="text-emerald-500 flex-shrink-0" />
                      <span className="text-sm text-brand-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.12} direction="left">
              {submitted ? (
                <div className="card-base p-10 flex flex-col items-center text-center min-h-[400px] justify-center">
                  <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center mb-5">
                    <CheckCircle size={28} className="text-emerald-500" />
                  </div>
                  <h2 className="text-xl font-bold text-brand-black mb-2">Message received!</h2>
                  <p className="text-sm text-brand-gray-500 max-w-xs leading-relaxed">
                    We'll review your project and get back to you within 24 hours with a clear next step.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} noValidate className="card-base p-8 space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-brand-gray-600 mb-1.5">Name <span className="text-red-400">*</span></label>
                      <input {...register('name',{required:'Name is required'})} placeholder="Your name" className={inputCls(errors.name)} />
                      {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-brand-gray-600 mb-1.5">Email <span className="text-red-400">*</span></label>
                      <input type="email" {...register('email',{required:'Email is required',pattern:{value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,message:'Enter a valid email'}})} placeholder="you@company.com" className={inputCls(errors.email)} />
                      {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-brand-gray-600 mb-1.5">Business / Project name</label>
                    <input {...register('business')} placeholder="Your business or project" className={inputCls(false)} />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-brand-gray-600 mb-1.5">What do you need? <span className="text-red-400">*</span></label>
                    <select {...register('service',{required:'Please select a service'})} className={inputCls(errors.service)}>
                      <option value="">Select a service…</option>
                      {SERVICE_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
                    </select>
                    {errors.service && <p className="text-xs text-red-500 mt-1">{errors.service.message}</p>}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-brand-gray-600 mb-1.5">Budget range</label>
                      <select {...register('budget')} className={inputCls(false)}>
                        <option value="">Select budget…</option>
                        {BUDGET_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-brand-gray-600 mb-1.5">Timeline</label>
                      <select {...register('timeline')} className={inputCls(false)}>
                        <option value="">Select timeline…</option>
                        {TIMELINE_OPTIONS.map(o => <option key={o} value={o}>{o}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-brand-gray-600 mb-1.5">Tell us more (optional)</label>
                    <textarea {...register('message')} rows={4} placeholder="Brief description of your project, goals, or any questions…" className={`${inputCls(false)} resize-none`} />
                  </div>
                  <button type="submit" disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-brand-black text-white text-sm font-bold rounded-lg hover:bg-brand-gray-800 active:scale-[0.98] disabled:opacity-50 transition-all duration-200">
                    {isSubmitting ? 'Sending…' : <><Send size={14} /> Send message</>}
                  </button>
                  <p className="text-center text-xs text-brand-gray-400">We respond within 24 hours · No spam, ever.</p>
                </form>
              )}
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  )
}
