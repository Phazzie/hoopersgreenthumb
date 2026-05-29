import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import Services from '@/components/Services'
import About from '@/components/About'
import Gallery from '@/components/Gallery'
import WhyUs from '@/components/WhyUs'
import CtaBand from '@/components/CtaBand'
import ServiceArea from '@/components/ServiceArea'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <TrustBar />
      <Services />
      <About />
      <Gallery />
      <WhyUs />
      <CtaBand />
      <ServiceArea />
      <ContactSection />
      <Footer />
    </main>
  )
}
