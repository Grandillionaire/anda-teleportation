import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const QuantumEntanglement = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)
  const canvasRef = useRef(null)

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
    if (!canvasRef.current || !isVisible) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationId

    canvas.width = canvas.offsetWidth * 2
    canvas.height = canvas.offsetHeight * 2
    ctx.scale(2, 2)

    const particles = []
    const particleCount = 100

    class Particle {
      constructor(x, side) {
        this.x = x
        this.y = Math.random() * canvas.height / 2
        this.side = side
        this.speed = 0.5 + Math.random() * 1
        this.opacity = Math.random()
        this.size = 2 + Math.random() * 2
      }

      update() {
        this.y += this.speed
        if (this.y > canvas.height / 2) {
          this.y = 0
        }
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(139, 92, 246, ${this.opacity})`
        ctx.fill()
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle(canvas.width / 4 / 2, 'left'))
      particles.push(new Particle((canvas.width * 3 / 4) / 2, 'right'))
    }

    function animate() {
      ctx.fillStyle = 'rgba(10, 10, 15, 0.1)'
      ctx.fillRect(0, 0, canvas.width / 2, canvas.height / 2)

      particles.forEach((particle, i) => {
        particle.update()
        particle.draw()

        // Draw connections between entangled pairs
        if (i < particleCount) {
          const partner = particles[i + particleCount]
          if (Math.abs(particle.y - partner.y) < 50) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(partner.x, partner.y)
            ctx.strokeStyle = `rgba(139, 92, 246, ${0.3 * particle.opacity})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => cancelAnimationFrame(animationId)
  }, [isVisible])

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
            THE SCIENCE • PART 1
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Quantum Entanglement</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            The instant connection that makes distance meaningless
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <canvas
              ref={canvasRef}
              className="w-full h-96 rounded-2xl border border-purple-500/30 bg-black/50"
            />
            <p className="text-center text-sm text-gray-500 mt-4">
              Real-time visualization of entangled quantum particles
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                The Einstein-Podolsky-Rosen Effect
              </h3>
              <p className="text-gray-400 leading-relaxed">
                When two particles become entangled, they share a quantum state.
                Measure one, and you instantly know the state of the other—
                regardless of distance. Einstein called it "spooky action at a distance."
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-900/20 to-indigo-900/20 border border-purple-500/20">
              <h4 className="text-lg font-semibold text-purple-300 mb-3">
                Our Innovation
              </h4>
              <p className="text-gray-400 leading-relaxed">
                We've scaled this quantum phenomenon to macroscopic levels.
                Using engineered quantum field generators, we create sustained
                entanglement between two portal frames—maintaining coherence
                across any distance.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-purple-900/10 border border-purple-500/10">
                <div className="text-3xl font-bold text-gradient mb-1">10²³</div>
                <div className="text-sm text-gray-500">Entangled particles</div>
              </div>
              <div className="p-4 rounded-lg bg-purple-900/10 border border-purple-500/10">
                <div className="text-3xl font-bold text-gradient mb-1">&lt;1fs</div>
                <div className="text-sm text-gray-500">Sync precision</div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="p-8 rounded-2xl bg-gradient-to-r from-purple-900/10 via-indigo-900/10 to-purple-900/10 border border-purple-500/20"
        >
          <h4 className="text-xl font-semibold text-white mb-4">Key Technical Points</h4>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-purple-400 font-semibold mb-2">↔ Bidirectional Link</div>
              <p className="text-gray-500 text-sm">
                Information flows both ways instantly, enabling real-time spatial coordination.
              </p>
            </div>
            <div>
              <div className="text-purple-400 font-semibold mb-2">⚡ Zero Latency</div>
              <p className="text-gray-500 text-sm">
                Quantum correlations occur instantaneously, limited only by measurement speed.
              </p>
            </div>
            <div>
              <div className="text-purple-400 font-semibold mb-2">🔒 Quantum Security</div>
              <p className="text-gray-500 text-sm">
                Entangled states are impossible to intercept or duplicate without detection.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default QuantumEntanglement
