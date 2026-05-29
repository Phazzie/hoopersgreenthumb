import Nav           from '@/components/Nav'
import Hero          from '@/components/Hero'
import TrustBar      from '@/components/TrustBar'
import Services      from '@/components/Services'
import HowItWorks    from '@/components/HowItWorks'
import BeforeAfter   from '@/components/BeforeAfter'
import About         from '@/components/About'
import Gallery       from '@/components/Gallery'
import Testimonials  from '@/components/Testimonials'
import WhyUs         from '@/components/WhyUs'
import CtaBand       from '@/components/CtaBand'
import MapSection    from '@/components/MapSection'
import ContactSection from '@/components/ContactSection'
import Footer        from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <TrustBar />
      <Services />
      <div id="how">
        <HowItWorks />
      </div>
      <BeforeAfter />
      <About />
      <Gallery />
      <Testimonials />
      <WhyUs />
      <CtaBand />
      <MapSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
