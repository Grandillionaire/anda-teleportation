import React, { useEffect, useState } from 'react'
import CustomCursor from './components/CustomCursor'
import Hero from './components/Hero'
import ProblemStatement from './components/ProblemStatement'
import PortalDemo from './components/PortalDemo'
import QuantumEntanglement from './components/QuantumEntanglement'
import WormholeEngineering from './components/WormholeEngineering'
import FusionPower from './components/FusionPower'
import SafetySystems from './components/SafetySystems'
import Experience from './components/Experience'
import TechnicalSpecs from './components/TechnicalSpecs'
import Vision from './components/Vision'
import BetaProgram from './components/BetaProgram'
import Footer from './components/Footer'

function App() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <CustomCursor />
      <div className="relative">
        {/* Background gradient effects */}
        <div className="fixed inset-0 pointer-events-none">
          <div
            className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          />
          <div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl"
            style={{ transform: `translateY(-${scrollY * 0.2}px)` }}
          />
        </div>

        {/* Main content */}
        <main className="relative z-10">
          <Hero />
          <ProblemStatement />
          <PortalDemo />
          <QuantumEntanglement />
          <WormholeEngineering />
          <FusionPower />
          <SafetySystems />
          <Experience />
          <TechnicalSpecs />
          <Vision />
          <BetaProgram />
          <Footer />
        </main>
      </div>
    </>
  )
}

export default App
