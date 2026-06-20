import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export function Button({ children, variant = 'primary', href, to, onClick, className = '', showIcon = true, ...props }) {
  const base = 'inline-flex items-center gap-1.5 font-medium transition-all duration-200 rounded-lg text-sm active:scale-[0.98]'
  const variants = {
    primary:      'px-5 py-2.5 bg-brand-black text-white hover:bg-brand-gray-800',
    secondary:    'px-5 py-2.5 border border-brand-gray-300 text-brand-black hover:border-brand-black',
    ghost:        'px-5 py-2.5 text-brand-gray-500 hover:text-brand-black',
    'primary-lg': 'px-6 py-3 bg-brand-black text-white hover:bg-brand-gray-800 text-base',
    'secondary-lg':'px-6 py-3 border border-brand-gray-300 text-brand-black hover:border-brand-black text-base',
  }
  const cls = `${base} ${variants[variant] ?? variants.primary} ${className}`
  const icon = showIcon && variant.includes('primary') ? <ArrowUpRight size={15} /> : null

  if (to)   return <Link to={to} className={cls} {...props}>{children}{icon}</Link>
  if (href) return <a href={href} target="_blank" rel="noreferrer" className={cls} {...props}>{children}{icon}</a>
  return <button onClick={onClick} className={cls} {...props}>{children}{icon}</button>
}
