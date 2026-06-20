import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import Work from './pages/Work'
import About from './pages/About'
import Contact from './pages/Contact'
import Pricing from './pages/Pricing'
import FAQ from './pages/FAQ'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="work" element={<Work />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="faq" element={<FAQ />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
