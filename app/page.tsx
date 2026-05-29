import Nav            from '@/components/Nav'
import SeasonalBanner from '@/components/SeasonalBanner'
import Hero           from '@/components/Hero'
import TrustBar       from '@/components/TrustBar'
import Services       from '@/components/Services'
import Pricing        from '@/components/Pricing'
import HowItWorks     from '@/components/HowItWorks'
import BeforeAfter    from '@/components/BeforeAfter'
import About          from '@/components/About'
import Gallery        from '@/components/Gallery'
import Testimonials   from '@/components/Testimonials'
import FAQ            from '@/components/FAQ'
import WhyUs          from '@/components/WhyUs'
import BlogPreview    from '@/components/BlogPreview'
import CtaBand        from '@/components/CtaBand'
import MapSection     from '@/components/MapSection'
import ContactSection from '@/components/ContactSection'
import Footer         from '@/components/Footer'
import FloatingCTA    from '@/components/FloatingCTA'

export default function Home() {
  return (
    <>
      <SeasonalBanner />
      <main>
        <Nav />
        <Hero />
        <TrustBar />
        <Services />
        <Pricing />
        <div id="how">
          <HowItWorks />
        </div>
        <BeforeAfter />
        <About />
        <Gallery />
        <Testimonials />
        <FAQ />
        <WhyUs />
        <BlogPreview />
        <CtaBand />
        <MapSection />
        <ContactSection />
        <Footer />
      </main>
      <FloatingCTA />
    </>
  )
}
