import Background from './components/Background'
import Header from './components/Header'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Problem from './components/Problem'
import ServicesSection from './components/ServicesSection'
import CaseStudy from './components/CaseStudy'
import WhySolvd from './components/WhySolvd'
import LocalStrip from './components/LocalStrip'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import StrandThread from './components/thread/StrandThread'

export default function App() {
  return (
    <div className="min-h-screen text-ink">
      <Background />
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Problem />
        {/* Services carries the thread as its delivery rail; the strand
            resumes down the left margin into the case study */}
        <ServicesSection />
        <StrandThread>
          <CaseStudy />
        </StrandThread>
        <WhySolvd />
        <LocalStrip />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
