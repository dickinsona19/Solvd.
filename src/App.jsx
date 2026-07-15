import Background from './components/Background'
import Header from './components/Header'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Leaks from './components/Leaks'
import ServicesSection from './components/ServicesSection'
import FounderStory from './components/FounderStory'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import SectionDivider from './components/SectionDivider'

export default function App() {
  return (
    <div className="min-h-screen text-ink">
      <Background />
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <SectionDivider />
        <Leaks />
        <SectionDivider />
        <ServicesSection />
        <SectionDivider />
        <FounderStory />
        <SectionDivider />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
