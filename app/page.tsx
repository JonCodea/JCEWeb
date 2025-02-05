import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Services from "../components/Services"
import AboutUs from "../components/AboutUs"
import FAQ from "../components/FAQ"
import ContactForm from "../components/ContactForm"
import CallToAction from "../components/CallToAction"
import Footer from "../components/Footer"
import LiveBackground from "../components/LiveBackground"

export default function Home() {
  return (
    <main className="relative">
      <LiveBackground />
      <Navbar />
      <Hero id="home" />
      <Services id="services" />
      <AboutUs id="about" />
      <FAQ id="faq" />
      <CallToAction />
      <ContactForm id="contact" />
      <Footer />
    </main>
  )
}

