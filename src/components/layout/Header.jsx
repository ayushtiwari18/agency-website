import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const NAV = [
  { label: 'Work',     to: '/work' },
  { label: 'Services', to: '/services' },
  { label: 'About',    to: '/about' },
  { label: 'Pricing',  to: '/pricing' },
  { label: 'Contact',  to: '/contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md border-b border-brand-gray-200' : 'bg-transparent'
    }`}>
      <div className="container-content">
        <div className="flex items-center justify-between h-[64px]">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-brand-black rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-white text-[10px] font-bold tracking-tight">T&amp;J</span>
            </div>
            <span className="font-semibold text-brand-black text-[15px] tracking-tight">T&amp;J Creates</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {NAV.map(({ label, to }) => (
              <NavLink key={to} to={to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive ? 'text-brand-black' : 'text-brand-gray-500 hover:text-brand-black'
                  }`
                }
              >{label}</NavLink>
            ))}
          </nav>

          {/* CTA */}
          <Link to="/contact"
            className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 bg-brand-black text-white text-sm font-medium rounded-lg hover:bg-brand-gray-800 transition-colors"
          >
            Book a call <ArrowUpRight size={14} />
          </Link>

          {/* Mobile toggle */}
          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-brand-gray-200 px-6 py-5 flex flex-col gap-4">
          {NAV.map(({ label, to }) => (
            <NavLink key={to} to={to} onClick={() => setOpen(false)}
              className="text-sm font-medium text-brand-gray-600 hover:text-brand-black transition-colors"
            >{label}</NavLink>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-brand-black text-white text-sm font-medium rounded-lg w-fit mt-1"
          >
            Book a call <ArrowUpRight size={14} />
          </Link>
        </div>
      )}
    </header>
  )
}
