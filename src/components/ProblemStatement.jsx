import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const ProblemStatement = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
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
    <section ref={sectionRef} className="min-h-screen flex items-center justify-center px-4 py-32">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="text-gradient">8,784 kilometers.</span>
          </h2>
          <p className="text-2xl md:text-3xl text-gray-400 leading-relaxed">
            The average distance in long-distance relationships.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            { value: '18h', label: 'Average flight time', delay: 0.2 },
            { value: '$2,400', label: 'Average flight cost', delay: 0.4 },
            { value: '1.2 tons', label: 'CO₂ per round trip', delay: 0.6 },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: stat.delay }}
              className="p-8 rounded-2xl bg-gradient-to-br from-purple-900/20 to-indigo-900/20 border border-purple-500/20 card-glow"
            >
              <div className="text-5xl font-bold text-gradient mb-4">
                {stat.value}
              </div>
              <div className="text-gray-400 text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
            Every video call. Every text message. Every "I wish you were here."
          </p>
          <p className="text-2xl md:text-3xl font-semibold text-white leading-relaxed">
            What if distance wasn't a barrier anymore?
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-20 p-12 rounded-3xl bg-gradient-to-br from-purple-600/10 to-indigo-600/10 border border-purple-500/30 backdrop-blur-sm"
        >
          <p className="text-3xl md:text-4xl font-light text-center leading-relaxed">
            "The moment I step through, I'm <span className="text-gradient font-semibold">home</span>."
          </p>
          <p className="text-gray-500 text-center mt-6 text-lg">
            — Test pilot, Portal Beta Program
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default ProblemStatement
