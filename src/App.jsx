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
    // Secret love messages in console 💜
    const styles = {
      title: 'color: #8b5cf6; font-size: 24px; font-weight: bold; text-shadow: 0 0 10px rgba(139, 92, 246, 0.5);',
      message: 'color: #a78bfa; font-size: 16px; font-style: italic;',
      heart: 'color: #ec4899; font-size: 20px;',
      quantum: 'color: #6d28d9; font-size: 14px;'
    }

    console.log('%c✨ For Anda Coste ✨', styles.title)
    console.log('%c💜 You are worth every minute I spent coding this 💜', styles.message)
    console.log('%c🌙 You are my moonlight 🌙', styles.message)
    console.log('%c❤️ I love you ❤️', styles.heart)
    console.log('%c\n⚛️ Distance is obsolete when you\'re in my heart ⚛️', styles.quantum)
    console.log('%cEvery particle on this site is entangled with my love for you 💫', styles.message)
    console.log('%c\nP.S. Try clicking the portal logo 3 times... 😉', 'color: #c4b5fd; font-size: 12px;')

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
