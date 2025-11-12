import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const WormholeEngineering = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)
  const svgRef = useRef(null)

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

  return (
    <section ref={sectionRef} className="min-h-screen flex items-center justify-center px-4 py-32 bg-gradient-to-b from-transparent via-purple-950/5 to-transparent">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-sm font-semibold mb-6">
            THE SCIENCE • PART 2
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Wormhole Geometry</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Einstein-Rosen bridges stabilized for human transit
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                The Einstein-Rosen Bridge
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                In 1935, Einstein and Rosen discovered that general relativity
                allows for "bridges" through spacetime. These solutions to the
                field equations connect two distant points in space.
              </p>
              <p className="text-gray-400 leading-relaxed">
                The problem? Without exotic matter, these bridges collapse
                immediately—crushed by their own gravity before anything can
                pass through.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-indigo-900/20 border border-purple-500/20">
              <h4 className="text-lg font-semibold text-purple-300 mb-3">
                Our Solution: Exotic Matter
              </h4>
              <p className="text-gray-400 leading-relaxed mb-4">
                We generate exotic matter with negative energy density using a
                scaled-up Casimir effect. This counteracts the gravitational
                collapse, keeping the wormhole throat open and stable.
              </p>
              <div className="flex items-center gap-2 text-sm text-purple-400">
                <span className="inline-block w-2 h-2 bg-purple-400 rounded-full"></span>
                Negative energy density: -ρ ≈ 10⁻⁹ J/m³
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-purple-400 text-sm font-bold">1</span>
                </div>
                <div>
                  <div className="font-semibold text-white mb-1">Portal Frame Activation</div>
                  <div className="text-sm text-gray-500">
                    Quantum field generators establish entanglement between frames
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-purple-400 text-sm font-bold">2</span>
                </div>
                <div>
                  <div className="font-semibold text-white mb-1">Spacetime Curvature</div>
                  <div className="text-sm text-gray-500">
                    Massive energy input warps local spacetime geometry
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-purple-400 text-sm font-bold">3</span>
                </div>
                <div>
                  <div className="font-semibold text-white mb-1">Exotic Matter Injection</div>
                  <div className="text-sm text-gray-500">
                    Casimir generators flood the throat with negative energy
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-purple-400 text-sm font-bold">4</span>
                </div>
                <div>
                  <div className="font-semibold text-white mb-1">Traversable Wormhole</div>
                  <div className="text-sm text-gray-500">
                    Stable portal ready for transit in &lt;2 seconds
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            {/* Wormhole diagram */}
            <svg
              ref={svgRef}
              viewBox="0 0 400 500"
              className="w-full h-auto drop-shadow-2xl"
            >
              {/* Grid background */}
              <defs>
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(139, 92, 246, 0.1)" strokeWidth="0.5"/>
                </pattern>
                <radialGradient id="wormholeGradient">
                  <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8"/>
                  <stop offset="100%" stopColor="#6d28d9" stopOpacity="0.3"/>
                </radialGradient>
              </defs>

              {/* Top spacetime sheet */}
              <motion.path
                d="M 50 80 Q 200 120 350 80"
                fill="none"
                stroke="url(#wormholeGradient)"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isVisible ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 1.5, delay: 0.5 }}
              />

              {/* Wormhole throat */}
              <motion.ellipse
                cx="200"
                cy="250"
                rx="80"
                ry="150"
                fill="url(#wormholeGradient)"
                initial={{ scale: 0, opacity: 0 }}
                animate={isVisible ? { scale: 1, opacity: 0.3 } : {}}
                transition={{ duration: 1, delay: 1 }}
              />

              {/* Bottom spacetime sheet */}
              <motion.path
                d="M 50 420 Q 200 380 350 420"
                fill="none"
                stroke="url(#wormholeGradient)"
                strokeWidth="2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isVisible ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 1.5, delay: 0.7 }}
              />

              {/* Connection lines */}
              {[0, 1, 2, 3, 4].map((i) => {
                const x = 120 + i * 40
                return (
                  <motion.line
                    key={i}
                    x1={x}
                    y1="100"
                    x2={x}
                    y2="400"
                    stroke="#8b5cf6"
                    strokeWidth="1"
                    strokeDasharray="5,5"
                    opacity="0.3"
                    initial={{ pathLength: 0 }}
                    animate={isVisible ? { pathLength: 1 } : {}}
                    transition={{ duration: 1, delay: 1.2 + i * 0.1 }}
                  />
                )
              })}

              {/* Labels */}
              <motion.text
                x="200"
                y="60"
                textAnchor="middle"
                fill="#a78bfa"
                fontSize="14"
                fontWeight="600"
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : {}}
                transition={{ delay: 1.5 }}
              >
                Portal A (Location 1)
              </motion.text>

              <motion.text
                x="200"
                y="460"
                textAnchor="middle"
                fill="#a78bfa"
                fontSize="14"
                fontWeight="600"
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : {}}
                transition={{ delay: 1.5 }}
              >
                Portal B (Location 2)
              </motion.text>

              <motion.text
                x="200"
                y="250"
                textAnchor="middle"
                fill="#c4b5fd"
                fontSize="12"
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : {}}
                transition={{ delay: 2 }}
              >
                Exotic Matter Region
              </motion.text>

              {/* Arrows */}
              <motion.path
                d="M 200 120 L 200 230"
                stroke="#8b5cf6"
                strokeWidth="2"
                markerEnd="url(#arrowhead)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isVisible ? { pathLength: 1, opacity: 0.6 } : {}}
                transition={{ duration: 0.8, delay: 2.2 }}
              />

              <defs>
                <marker
                  id="arrowhead"
                  markerWidth="10"
                  markerHeight="10"
                  refX="5"
                  refY="5"
                  orient="auto"
                >
                  <polygon points="0 0, 10 5, 0 10" fill="#8b5cf6" />
                </marker>
              </defs>
            </svg>

            <p className="text-center text-sm text-gray-500 mt-6">
              Simplified 2D representation of a traversable wormhole
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="p-8 rounded-2xl bg-gradient-to-r from-indigo-900/20 to-purple-900/20 border border-purple-500/20"
        >
          <h4 className="text-xl font-semibold text-white mb-6">Technical Specifications</h4>
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold text-gradient mb-2">2.4m</div>
              <div className="text-sm text-gray-500">Portal diameter</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gradient mb-2">~0</div>
              <div className="text-sm text-gray-500">Throat length (spatial)</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gradient mb-2">99.97%</div>
              <div className="text-sm text-gray-500">Stability uptime</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gradient mb-2">∞</div>
              <div className="text-sm text-gray-500">Maximum distance</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WormholeEngineering
