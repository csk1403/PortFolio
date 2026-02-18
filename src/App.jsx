import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Competencies from './components/Competencies'
import Career from './components/Career'
import QASection from './components/QASection'
import AutomationSection from './components/AutomationSection'
import LeadingSection from './components/LeadingSection'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Competencies />
        <Career />
        <QASection />
        <AutomationSection />
        <LeadingSection />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
