import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white">
      <div className="container-content py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-brand-black text-[10px] font-bold">T&amp;J</span>
              </div>
              <span className="font-semibold text-[15px] tracking-tight">T&amp;J Creates</span>
            </div>
            {/* contrast fix: gray-500 (#737373) on #0d0d0d = 4.09 ✗ → gray-300 (#d4d4d4) = 10.7 ✓ */}
            <p className="text-gray-300 text-sm leading-relaxed max-w-[220px]">
              A web development studio for businesses that take their online presence seriously.
            </p>
          </div>

          <div className="space-y-4">
            {/* contrast fix: eyebrow text-brand-gray-600 (#525252) on #0d0d0d = 2.48 ✗ → text-gray-400 (#9ca3af) = 5.74 ✓ */}
            <p className="eyebrow text-gray-400">Company</p>
            <nav className="flex flex-col gap-2">
              {[['Work','/work'],['Services','/services'],['Pricing','/pricing'],['About','/about']].map(([l,t]) => (
                // contrast fix: gray-500 on #0d0d0d = 4.09 ✗ → gray-300 = 10.7 ✓
                <Link key={t} to={t} className="text-sm text-gray-300 hover:text-white transition-colors">{l}</Link>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <p className="eyebrow text-gray-400">Connect</p>
            <nav className="flex flex-col gap-2">
              <Link to="/contact" className="text-sm text-gray-300 hover:text-white transition-colors">Contact</Link>
              <a href="https://linkedin.com/in/tiwariaayush" target="_blank" rel="noreferrer" className="text-sm text-gray-300 hover:text-white transition-colors">LinkedIn</a>
              {/* email updated to gmail */}
              <a href="mailto:ayushtiwari102003@gmail.com" className="text-sm text-gray-300 hover:text-white transition-colors">ayushtiwari102003@gmail.com</a>
            </nav>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-brand-gray-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-gray-500 text-xs">© 2025 T&amp;J Creates. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/faq" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">FAQ</Link>
            <span className="text-xs text-gray-500">Privacy</span>
            <span className="text-xs text-gray-500">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
