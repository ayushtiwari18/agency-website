import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { useLenis } from './hooks/useLenis'
import { ScrollToTop } from './components/ui/ScrollToTop'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import NotFound from './pages/NotFound'

// Route-based code splitting — each page becomes its own JS chunk
const Home     = lazy(() => import('./pages/Home'))
const Services = lazy(() => import('./pages/Services'))
const Work     = lazy(() => import('./pages/Work'))
const About    = lazy(() => import('./pages/About'))
const Pricing  = lazy(() => import('./pages/Pricing'))
const FAQ      = lazy(() => import('./pages/FAQ'))
const Contact  = lazy(() => import('./pages/Contact'))

function PageSkeleton() {
  return <div aria-hidden="true" style={{ minHeight: '100vh', background: '#ffffff' }} />
}

function AppShell() {
  useLenis()
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Suspense fallback={<PageSkeleton />}>
          <Routes>
            <Route path="/"         element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/work"     element={<Work />} />
            <Route path="/about"    element={<About />} />
            <Route path="/pricing"  element={<Pricing />} />
            <Route path="/faq"      element={<FAQ />} />
            <Route path="/contact"  element={<Contact />} />
            {/* 404 catch-all — NotFound is tiny, no need to lazy-load */}
            <Route path="*"         element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AppShell />
      </BrowserRouter>
    </HelmetProvider>
  )
}
