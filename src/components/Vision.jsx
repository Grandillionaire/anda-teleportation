import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const Vision = () => {
  const [isVisible, setIsVisible] = useState(false)
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

  return (
    <section ref={sectionRef} className="min-h-screen flex items-center justify-center px-4 py-32">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1 }}
          className="mb-16"
        >
          <h2 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            Love shouldn't
            <br />
            <span className="text-gradient">wait for flights</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="space-y-8 text-xl md:text-2xl text-gray-300 leading-relaxed mb-16"
        >
          <p>
            For decades, technology has promised to connect us.
            <br />
            Video calls. Instant messages. Virtual reality.
          </p>

          <p>
            But none of it can replace <span className="text-white font-semibold">being there</span>.
          </p>

          <p>
            The weight of their hand in yours.
            <br />
            The sound of their laugh—not through speakers, but <span className="text-white font-semibold">in the air</span>.
            <br />
            The way they make coffee in the morning.
          </p>

          <p className="text-2xl md:text-3xl font-semibold text-white">
            Distance was the final barrier.
          </p>

          <p className="text-3xl md:text-4xl font-bold text-gradient">
            We just eliminated it.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {[
            {
              icon: '🌍',
              title: 'Global Access',
              description: '500 cities by 2026. Every continent. Every time zone. One step away.'
            },
            {
              icon: '💚',
              title: 'Sustainable',
              description: 'Zero carbon. Zero emissions. Cleaner than any form of transport ever created.'
            },
            {
              icon: '⚡',
              title: 'Instant',
              description: 'No airports. No delays. No "I\'ll see you in 18 hours." Just now.'
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-purple-900/20 to-indigo-900/20 border border-purple-500/20"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="p-12 rounded-3xl bg-gradient-to-br from-purple-600/20 to-indigo-600/20 border-2 border-purple-500/30 backdrop-blur-sm"
        >
          <p className="text-3xl md:text-4xl font-light leading-relaxed mb-6">
            "This isn't just technology."
          </p>
          <p className="text-3xl md:text-4xl font-light leading-relaxed mb-8">
            "This is <span className="text-gradient font-semibold">humanity</span>, unchained from geography."
          </p>
          <p className="text-gray-400 text-lg">
            — Dr. Anda Kovács, Founder & Chief Physicist
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 2.2 }}
          className="mt-16"
        >
          <p className="text-gray-500 text-lg mb-4">The future of connection starts now.</p>
          <p className="text-2xl font-semibold text-white">Are you ready?</p>
        </motion.div>
      </div>
    </section>
  )
}

export default Vision
