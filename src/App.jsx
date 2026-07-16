import Background from './components/Background'
import Header from './components/Header'
import Hero from './components/Hero'
import Problem from './components/Problem'
import ServicesSection from './components/ServicesSection'
import CaseStudy from './components/CaseStudy'
import WhySolvd from './components/WhySolvd'
import TrustBar from './components/TrustBar'
import LocalStrip from './components/LocalStrip'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen text-ink">
      <Background />
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Problem />
        <ServicesSection />
        <CaseStudy />
        <WhySolvd />
        <LocalStrip />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
