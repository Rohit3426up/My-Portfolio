import { useState } from 'react'
import './index.css'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import CustomCursor from './components/CustomCursor'

export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      {loading && <Loader onComplete={() => setLoading(false)} />}
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Process />
        <Services />
        <Portfolio />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
      <CustomCursor />
    </>
  )
}
