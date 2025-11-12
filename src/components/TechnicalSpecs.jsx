import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const TechnicalSpecs = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  // Live status simulation
  const [stats, setStats] = useState({
    activePortals: 247,
    transitsToday: 18429,
    uptime: 99.97,
    betaApplications: 142847
  })

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
        setStats(prev => ({
          activePortals: prev.activePortals + Math.floor(Math.random() * 3) - 1,
          transitsToday: prev.transitsToday + Math.floor(Math.random() * 5),
          uptime: 99.97,
          betaApplications: prev.betaApplications + Math.floor(Math.random() * 10)
        }))
      }, 2000)
      return () => clearInterval(interval)
    }
  }, [isVisible])

  const specifications = [
    {
      category: 'Portal Hardware',
      specs: [
        { label: 'Portal Diameter', value: '2.4 meters', detail: 'Accommodates 99.8% of humans' },
        { label: 'Frame Material', value: 'Quantum-stabilized graphene composite', detail: 'Tensile strength: 130 GPa' },
        { label: 'Mass', value: '847 kg', detail: 'Including containment systems' },
        { label: 'Power Input', value: '1.21 PW peak', detail: '340 MW steady state' },
      ]
    },
    {
      category: 'Quantum Systems',
      specs: [
        { label: 'Entanglement Density', value: '10²³ particles/m³', detail: 'Macroscopic coherence' },
        { label: 'Decoherence Time', value: '>1 hour', detail: 'At room temperature' },
        { label: 'Sync Precision', value: '<1 femtosecond', detail: '10⁻¹⁵ seconds' },
        { label: 'Fidelity', value: '99.94%', detail: 'Quantum state preservation' },
      ]
    },
    {
      category: 'Wormhole Geometry',
      specs: [
        { label: 'Throat Diameter', value: '2.2 meters', detail: 'Minimum traversable' },
        { label: 'Throat Length', value: '~0 meters', detail: 'Spatial shortcut' },
        { label: 'Exotic Matter Density', value: '-1.2×10⁻⁹ J/m³', detail: 'Casimir-effect derived' },
        { label: 'Spacetime Curvature', value: '8×10⁴ m⁻²', detail: 'Schwarzschild equivalent' },
      ]
    },
    {
      category: 'Fusion Reactor',
      specs: [
        { label: 'Fuel Type', value: 'Helium-3 + Boron-11', detail: 'Aneutronic fusion' },
        { label: 'Power Output', value: '1.21 PW peak', detail: 'Per portal pair' },
        { label: 'Plasma Temperature', value: '3.1×10⁹ K', detail: 'Magnetically confined' },
        { label: 'Fuel Efficiency', value: '99.4%', detail: 'Mass-energy conversion' },
      ]
    },
    {
      category: 'Transit Performance',
      specs: [
        { label: 'Transit Time', value: '87 milliseconds', detail: 'Portal to portal' },
        { label: 'Activation Time', value: '1.8 seconds', detail: 'Cold start' },
        { label: 'Energy per Transit', value: '2.4 GJ', detail: '~670 kWh equivalent' },
        { label: 'Max Distance', value: 'Unlimited', detail: 'Quantum entanglement' },
      ]
    },
    {
      category: 'Safety & Monitoring',
      specs: [
        { label: 'Sensor Arrays', value: '10,247 active', detail: 'Real-time monitoring' },
        { label: 'Redundancy', value: '10-fold', detail: 'Critical systems' },
        { label: 'Emergency Shutdown', value: '<10 milliseconds', detail: 'Full collapse time' },
        { label: 'Incident Rate', value: '0 per 10⁶ transits', detail: 'Since deployment' },
      ]
    },
  ]

  return (
    <section ref={sectionRef} className="min-h-screen flex items-center justify-center px-4 py-32 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Technical Specifications</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            The engineering behind the impossible
          </p>
        </motion.div>

        {/* Live Status Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16 p-8 rounded-2xl bg-gradient-to-br from-purple-600/20 to-indigo-600/20 border-2 border-purple-500/30 card-glow"
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-white">Live Network Status</h3>
            <div className="flex items-center gap-2">
              <motion.div
                className="w-3 h-3 rounded-full bg-green-400"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-green-400 font-semibold">OPERATIONAL</span>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { label: 'Active Portals', value: stats.activePortals, unit: '', trend: '+2' },
              { label: 'Transits Today', value: stats.transitsToday.toLocaleString(), unit: '', trend: '+142' },
              { label: 'System Uptime', value: stats.uptime, unit: '%', trend: 'stable' },
              { label: 'Beta Applications', value: stats.betaApplications.toLocaleString(), unit: '', trend: '+1.2k' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="p-6 rounded-xl bg-black/30 border border-purple-500/20"
              >
                <div className="text-sm text-gray-500 mb-2">{stat.label}</div>
                <div className="text-3xl font-bold text-gradient mb-2">
                  {stat.value}{stat.unit}
                </div>
                <div className="text-xs text-green-400">↑ {stat.trend}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Specifications Grid */}
        <div className="space-y-12">
          {specifications.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 + categoryIndex * 0.1 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-purple-400">//</span>
                {category.category}
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                {category.specs.map((spec, specIndex) => (
                  <motion.div
                    key={specIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.9 + categoryIndex * 0.1 + specIndex * 0.05 }}
                    className="p-6 rounded-xl bg-purple-900/10 border border-purple-500/20 hover:border-purple-500/40 transition-all group interactive"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="text-sm text-gray-500">{spec.label}</div>
                      <div className="text-xs text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">
                        ⓘ
                      </div>
                    </div>
                    <div className="text-xl font-bold text-white mb-1">{spec.value}</div>
                    <div className="text-xs text-gray-600">{spec.detail}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Download specifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="interactive px-8 py-4 border-2 border-purple-500 rounded-full font-semibold text-lg hover:bg-purple-500/10 transition-all"
          >
            Download Complete Technical Whitepaper →
          </motion.button>
          <p className="text-sm text-gray-500 mt-4">
            127 pages • Peer-reviewed • Published in Nature Physics
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default TechnicalSpecs
