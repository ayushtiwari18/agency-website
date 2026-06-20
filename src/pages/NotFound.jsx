import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 — Page Not Found — T&amp;J Creates</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <section
        style={{ minHeight: 'calc(100vh - 80px)' }}
        className="flex flex-col items-center justify-center text-center px-6 bg-white"
      >
        <p className="text-[80px] font-extrabold text-brand-black leading-none mb-4">404</p>
        <h1 className="text-2xl font-bold text-brand-black mb-3">Page not found</h1>
        <p className="text-brand-gray-500 text-sm max-w-xs leading-relaxed mb-8">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-brand-black text-white text-sm font-bold rounded-lg hover:bg-brand-gray-800 transition-colors"
        >
          ← Back to home
        </Link>
      </section>
    </>
  )
}
