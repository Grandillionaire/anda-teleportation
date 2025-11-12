import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const FusionPower = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [powerLevel, setPowerLevel] = useState(0)
  const sectionRef = useRef(null)

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
    if (isVisible && powerLevel < 1.21) {
      const interval = setInterval(() => {
        setPowerLevel(prev => Math.min(1.21, prev + 0.03))
      }, 50)
      return () => clearInterval(interval)
    }
  }, [isVisible, powerLevel])

  return (
    <section ref={sectionRef} className="min-h-screen flex items-center justify-center px-4 py-32">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-sm font-semibold mb-6">
            THE SCIENCE • PART 3
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Aneutronic Fusion</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Clean, powerful energy to warp spacetime itself
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Helium-3 + Boron Fusion
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Opening a wormhole requires enormous energy to curve spacetime.
                We use aneutronic fusion—specifically ³He + ¹¹B reactions—to
                generate the 1.21 petawatts needed per portal.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Unlike deuterium-tritium fusion, this reaction produces no
                neutrons. Zero radioactive waste. Zero radiation shielding
                needed. Just pure, clean power.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-indigo-900/20 border border-purple-500/20">
              <h4 className="text-lg font-semibold text-purple-300 mb-3">
                The Reaction
              </h4>
              <div className="font-mono text-sm text-gray-300 mb-3 p-3 bg-black/30 rounded">
                ³He + ¹¹B → ¹²C + ⁴He + 8.7 MeV
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Helium-3 and Boron-11 fuse to produce Carbon-12 and Helium-4,
                releasing 8.7 MeV per reaction with zero neutron emission.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 rounded-lg bg-purple-900/10 border border-purple-500/10">
                <span className="text-gray-400">Fuel efficiency</span>
                <span className="font-bold text-purple-300">99.4%</span>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg bg-purple-900/10 border border-purple-500/10">
                <span className="text-gray-400">Reaction temperature</span>
                <span className="font-bold text-purple-300">~3 billion K</span>
              </div>
              <div className="flex items-center justify-between p-4 rounded-lg bg-purple-900/10 border border-purple-500/10">
                <span className="text-gray-400">Confinement time</span>
                <span className="font-bold text-purple-300">4.2 seconds</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-6"
          >
            {/* Power output display */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-600/20 to-indigo-600/20 border-2 border-purple-500/30 card-glow">
              <div className="text-center mb-6">
                <div className="text-sm text-gray-400 mb-2">CURRENT OUTPUT</div>
                <motion.div
                  className="text-7xl font-bold text-gradient mb-2"
                  initial={{ scale: 0.8 }}
                  animate={isVisible ? { scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  {powerLevel.toFixed(2)}
                </motion.div>
                <div className="text-2xl text-gray-400">Petawatts</div>
              </div>

              <div className="w-full bg-gray-800 rounded-full h-4 overflow-hidden mb-4">
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600"
                  initial={{ width: 0 }}
                  animate={{ width: `${(powerLevel / 1.21) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">99.97%</div>
                  <div className="text-xs text-gray-500">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">0</div>
                  <div className="text-xs text-gray-500">Emissions (g CO₂)</div>
                </div>
              </div>
            </div>

            {/* Reactor diagram */}
            <div className="p-6 rounded-xl border border-purple-500/20 bg-black/30">
              <svg viewBox="0 0 300 300" className="w-full h-auto">
                {/* Reactor chamber */}
                <motion.circle
                  cx="150"
                  cy="150"
                  r="100"
                  fill="none"
                  stroke="url(#reactorGradient)"
                  strokeWidth="3"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isVisible ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{ duration: 2, delay: 0.6 }}
                />

                {/* Inner containment */}
                <motion.circle
                  cx="150"
                  cy="150"
                  r="70"
                  fill="url(#plasmaGradient)"
                  opacity="0.4"
                  initial={{ scale: 0 }}
                  animate={isVisible ? { scale: 1 } : {}}
                  transition={{ duration: 1.5, delay: 1 }}
                />

                {/* Magnetic field lines */}
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
                  const rad = (angle * Math.PI) / 180
                  const x1 = 150 + Math.cos(rad) * 75
                  const y1 = 150 + Math.sin(rad) * 75
                  const x2 = 150 + Math.cos(rad) * 95
                  const y2 = 150 + Math.sin(rad) * 95
                  return (
                    <motion.line
                      key={i}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="#8b5cf6"
                      strokeWidth="2"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={isVisible ? { pathLength: 1, opacity: 0.6 } : {}}
                      transition={{ duration: 0.8, delay: 1.2 + i * 0.1 }}
                    />
                  )
                })}

                {/* Core */}
                <motion.circle
                  cx="150"
                  cy="150"
                  r="25"
                  fill="#a78bfa"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isVisible ? {
                    scale: [1, 1.2, 1],
                    opacity: [0.8, 1, 0.8]
                  } : {}}
                  transition={{
                    duration: 2,
                    delay: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />

                <defs>
                  <linearGradient id="reactorGradient">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                  <radialGradient id="plasmaGradient">
                    <stop offset="0%" stopColor="#ec4899" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </radialGradient>
                </defs>

                {/* Labels */}
                <motion.text
                  x="150"
                  y="30"
                  textAnchor="middle"
                  fill="#a78bfa"
                  fontSize="12"
                  fontWeight="600"
                  initial={{ opacity: 0 }}
                  animate={isVisible ? { opacity: 1 } : {}}
                  transition={{ delay: 2 }}
                >
                  Magnetic Confinement
                </motion.text>
                <motion.text
                  x="150"
                  y="150"
                  textAnchor="middle"
                  fill="#ffffff"
                  fontSize="10"
                  fontWeight="600"
                  initial={{ opacity: 0 }}
                  animate={isVisible ? { opacity: 1 } : {}}
                  transition={{ delay: 2.2 }}
                >
                  Plasma Core
                </motion.text>
                <motion.text
                  x="150"
                  y="165"
                  textAnchor="middle"
                  fill="#a78bfa"
                  fontSize="8"
                  initial={{ opacity: 0 }}
                  animate={isVisible ? { opacity: 1 } : {}}
                  transition={{ delay: 2.2 }}
                >
                  3 billion K
                </motion.text>
              </svg>
              <p className="text-center text-xs text-gray-500 mt-3">
                Tokamak-style magnetic confinement reactor
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="p-8 rounded-2xl bg-gradient-to-r from-purple-900/10 via-pink-900/10 to-indigo-900/10 border border-purple-500/20"
        >
          <h4 className="text-xl font-semibold text-white mb-6">Why Aneutronic?</h4>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-purple-400 font-semibold mb-2">☢️ Zero Neutrons</div>
              <p className="text-gray-500 text-sm">
                No neutron radiation means no material degradation, no tritium breeding, no radioactive waste.
              </p>
            </div>
            <div>
              <div className="text-purple-400 font-semibold mb-2">🛡️ No Shielding</div>
              <p className="text-gray-500 text-sm">
                Charged particle products can be contained electromagnetically. Portals can be human-adjacent.
              </p>
            </div>
            <div>
              <div className="text-purple-400 font-semibold mb-2">♻️ Clean Energy</div>
              <p className="text-gray-500 text-sm">
                Environmental impact: zero. Carbon footprint: zero. This is the future of power generation.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FusionPower
