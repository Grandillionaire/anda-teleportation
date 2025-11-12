import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const sectionRef = useRef(null)

  const steps = [
    {
      title: 'Approach',
      description: 'You stand before the portal. A gentle hum. Purple light dancing across the frame.',
      emotion: 'Anticipation',
      time: '0s'
    },
    {
      title: 'Activation',
      description: 'The portal recognizes you. Quantum fields align. The air shimmers.',
      emotion: 'Wonder',
      time: '+2s'
    },
    {
      title: 'Step Through',
      description: 'One step. That\'s all it takes. A tingling sensation—like walking through a waterfall of light.',
      emotion: 'Exhilaration',
      time: '+4s'
    },
    {
      title: 'Transit',
      description: 'For 87 milliseconds, you exist in both places at once. Quantum superposition.',
      emotion: 'Transcendence',
      time: '+4.087s'
    },
    {
      title: 'Arrival',
      description: 'You\'re there. Fully. Completely. As if you\'d always been there.',
      emotion: 'Joy',
      time: '+4.1s'
    },
    {
      title: 'Reunion',
      description: 'Arms around you. Their smile. Their voice. Not through a screen. Here. Now. Real.',
      emotion: 'Love',
      time: '+5s'
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setCurrentStep((prev) => (prev + 1) % steps.length)
      }, 3500)
      return () => clearInterval(interval)
    }
  }, [isVisible, steps.length])

  return (
    <section ref={sectionRef} className="min-h-screen flex items-center justify-center px-4 py-32">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">The Experience</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            What it feels like to step through spacetime
          </p>
        </motion.div>

        {/* Journey visualization */}
        <div className="max-w-5xl mx-auto mb-20">
          {/* Progress bar */}
          <div className="relative mb-16">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-800 -translate-y-1/2" />
            <motion.div
              className="absolute top-1/2 left-0 h-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 -translate-y-1/2"
              initial={{ width: 0 }}
              animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              transition={{ duration: 0.8 }}
            />

            <div className="relative flex justify-between">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <motion.div
                    className={`w-4 h-4 rounded-full mb-4 ${
                      index <= currentStep
                        ? 'bg-gradient-to-r from-purple-600 to-indigo-600 scale-125 shadow-lg shadow-purple-500/50'
                        : 'bg-gray-700'
                    }`}
                    animate={index === currentStep ? {
                      scale: [1.25, 1.5, 1.25],
                    } : {}}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                    }}
                  />
                  <div className="text-xs text-gray-500 font-mono">{step.time}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Current step display */}
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8 }}
            className="p-12 rounded-3xl bg-gradient-to-br from-purple-600/20 to-indigo-600/20 border-2 border-purple-500/30 card-glow text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="inline-block px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/40 text-purple-300 text-sm font-semibold mb-6"
            >
              {steps[currentStep].emotion}
            </motion.div>

            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {steps[currentStep].title}
            </h3>

            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              {steps[currentStep].description}
            </p>
          </motion.div>

          {/* Step indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentStep(index)}
                className={`interactive w-2 h-2 rounded-full transition-all ${
                  index === currentStep
                    ? 'bg-purple-500 w-8'
                    : 'bg-gray-700 hover:bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            {
              quote: "I cried. Not because it was scary—because it was beautiful. I was home in 5 seconds.",
              author: "Sarah Chen",
              location: "New York ↔ Tokyo",
              transits: "142 transits"
            },
            {
              quote: "We have dinner together every night now. Distance isn\'t a thing anymore.",
              author: "Marcus Williams",
              location: "London ↔ Sydney",
              transits: "287 transits"
            },
            {
              quote: "It\'s like the universe finally understood what \'I miss you\' really means.",
              author: "Priya Sharma",
              location: "Mumbai ↔ San Francisco",
              transits: "203 transits"
            },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-purple-900/20 to-indigo-900/20 border border-purple-500/20"
            >
              <p className="text-lg text-gray-300 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-gray-700 pt-4">
                <div className="font-semibold text-white mb-1">{testimonial.author}</div>
                <div className="text-sm text-gray-500 mb-2">{testimonial.location}</div>
                <div className="text-xs text-purple-400">{testimonial.transits}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
