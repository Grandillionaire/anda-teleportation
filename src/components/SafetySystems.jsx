import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const SafetySystems = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeSystem, setActiveSystem] = useState(0)
  const sectionRef = useRef(null)

  const systems = [
    {
      name: 'Spacetime Curvature Monitoring',
      description: 'Quantum sensors measure local spacetime geometry in real-time, detecting any deviations from nominal values.',
      metrics: [
        { label: 'Sensor Array', value: '10,000+' },
        { label: 'Scan Rate', value: '1 MHz' },
        { label: 'Precision', value: '10⁻¹⁸ m' },
      ],
      icon: '📡'
    },
    {
      name: 'Exotic Matter Density Control',
      description: 'Maintains precise negative energy density in the wormhole throat. Automatic adjustment prevents collapse.',
      metrics: [
        { label: 'Control Loops', value: '50' },
        { label: 'Response Time', value: '1 ns' },
        { label: 'Stability', value: '99.99%' },
      ],
      icon: '⚛️'
    },
    {
      name: 'Quantum Coherence Verification',
      description: 'Continuous verification of entanglement between portal pairs. Loss of coherence triggers immediate shutdown.',
      metrics: [
        { label: 'Verification Rate', value: '100 kHz' },
        { label: 'Fidelity', value: '99.9%' },
        { label: 'Sync Precision', value: '<1 fs' },
      ],
      icon: '🔬'
    },
    {
      name: 'Emergency Shutdown Protocol',
      description: 'Multiple redundant systems can instantly collapse the wormhole if any parameter exceeds safety thresholds.',
      metrics: [
        { label: 'Shutdown Time', value: '<10 ms' },
        { label: 'Redundancy', value: '10x' },
        { label: 'Fail-safe', value: '100%' },
      ],
      icon: '🛑'
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
        setActiveSystem((prev) => (prev + 1) % systems.length)
      }, 4000)
      return () => clearInterval(interval)
    }
  }, [isVisible, systems.length])

  return (
    <section ref={sectionRef} className="min-h-screen flex items-center justify-center px-4 py-32 bg-gradient-to-b from-transparent via-indigo-950/5 to-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-sm font-semibold mb-6">
            THE SCIENCE • PART 4
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Safety & Redundancy</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Every portal has more backup systems than a spacecraft
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* System selector */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-4"
          >
            {systems.map((system, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveSystem(index)}
                className={`interactive w-full text-left p-6 rounded-xl transition-all ${
                  activeSystem === index
                    ? 'bg-gradient-to-r from-purple-600/30 to-indigo-600/30 border-2 border-purple-500 card-glow'
                    : 'bg-purple-900/10 border border-purple-500/20 hover:border-purple-500/40'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{system.icon}</div>
                  <div className="flex-1">
                    <h3 className={`text-lg font-semibold mb-2 ${
                      activeSystem === index ? 'text-white' : 'text-gray-300'
                    }`}>
                      {system.name}
                    </h3>
                    <p className={`text-sm ${
                      activeSystem === index ? 'text-gray-300' : 'text-gray-500'
                    }`}>
                      {system.description}
                    </p>
                  </div>
                  {activeSystem === index && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="w-2 h-2 rounded-full bg-purple-400"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                    />
                  )}
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* System details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSystem}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                {/* System visualization */}
                <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-600/20 to-indigo-600/20 border-2 border-purple-500/30 card-glow">
                  <div className="text-center mb-8">
                    <div className="text-7xl mb-4">{systems[activeSystem].icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {systems[activeSystem].name}
                    </h3>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {systems[activeSystem].metrics.map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-2xl font-bold text-gradient mb-1">
                          {metric.value}
                        </div>
                        <div className="text-xs text-gray-400">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Status indicators */}
                  <div className="space-y-2">
                    {['Primary System', 'Backup System', 'Tertiary Backup'].map((label, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 rounded-lg bg-black/30">
                        <span className="text-sm text-gray-400">{label}</span>
                        <div className="flex items-center gap-2">
                          <motion.div
                            className="w-2 h-2 rounded-full bg-green-400"
                            animate={{ opacity: [1, 0.5, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: idx * 0.3 }}
                          />
                          <span className="text-sm text-green-400 font-semibold">ACTIVE</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical details */}
                <div className="p-6 rounded-xl bg-purple-900/10 border border-purple-500/20">
                  <h4 className="text-lg font-semibold text-purple-300 mb-3">
                    How It Works
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {systems[activeSystem].description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Safety statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid md:grid-cols-4 gap-6"
        >
          {[
            { value: '0', label: 'Safety incidents', sublabel: 'in 1.2M transits' },
            { value: '10⁻⁹', label: 'Failure probability', sublabel: 'per transit' },
            { value: '24/7', label: 'Monitoring', sublabel: 'human + AI oversight' },
            { value: '100%', label: 'Reversible', sublabel: 'instant shutdown' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-indigo-900/20 border border-purple-500/20 text-center"
            >
              <div className="text-4xl font-bold text-gradient mb-2">{stat.value}</div>
              <div className="text-white font-semibold mb-1">{stat.label}</div>
              <div className="text-xs text-gray-500">{stat.sublabel}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-green-900/10 to-emerald-900/10 border border-green-500/20 text-center"
        >
          <p className="text-xl text-gray-300 mb-2">
            <span className="text-green-400 font-semibold">✓ Certified safe</span> by the International Quantum Transit Authority
          </p>
          <p className="text-sm text-gray-500">
            Exceeds all safety standards for human spacetime transit
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default SafetySystems
