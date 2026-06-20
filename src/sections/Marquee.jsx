const clients = [
  'Northwind',
  'VAULT',
  'Lumen',
  'ORBIT',
  'Atelier',
  'Stride.',
  'Meridian',
  'Solace',
  'Praxis',
  'Forge',
]

export default function Marquee() {
  const doubled = [...clients, ...clients]

  return (
    <section className="border-y border-brand-gray-200 bg-brand-gray-50 py-6 overflow-hidden">
      <p className="text-center eyebrow text-brand-gray-400 mb-5">
        Trusted by businesses that demand results
      </p>
      <div className="relative flex overflow-hidden">
        {/* Fade masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10"
          style={{ background: 'linear-gradient(to right, #F9F9F9, transparent)' }} />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10"
          style={{ background: 'linear-gradient(to left, #F9F9F9, transparent)' }} />

        <div className="flex animate-marquee whitespace-nowrap">
          {doubled.map((name, i) => (
            <span
              key={i}
              className="mx-10 text-[15px] font-semibold text-brand-gray-400 tracking-tight select-none"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
