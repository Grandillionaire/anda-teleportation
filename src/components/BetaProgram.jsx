import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const BetaProgram = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location1: '',
    location2: '',
    distance: '',
    frequency: '',
  })
  const [submitted, setSubmitted] = useState(false)
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

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    // In a real app, this would send data to a backend
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section ref={sectionRef} className="min-h-screen flex items-center justify-center px-4 py-32 bg-gradient-to-b from-transparent via-indigo-950/5 to-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-sm font-semibold mb-6">
            LIMITED BETA PROGRAM
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">Join the Beta</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We're accepting 500 beta testers for our first portal installations.
            <br />
            Be among the first to eliminate distance.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-900/20 to-indigo-900/20 border border-purple-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">Beta Benefits</h3>
              <div className="space-y-4">
                {[
                  'Priority portal installation',
                  'Unlimited transits during beta',
                  'Direct line to engineering team',
                  'Lifetime discount (60% off)',
                  'Shape the future of the product',
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-purple-400 text-sm">✓</span>
                    </div>
                    <span className="text-gray-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-xl bg-yellow-900/10 border border-yellow-500/20">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚠️</span>
                <div>
                  <div className="font-semibold text-yellow-400 mb-2">Selection Criteria</div>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    We're prioritizing long-distance relationships with frequent travel.
                    Installation requires both locations to have suitable power infrastructure.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Application Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="lg:col-span-3"
          >
            {!submitted ? (
              <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-gradient-to-br from-purple-600/10 to-indigo-600/10 border border-purple-500/30 backdrop-blur-sm">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-400 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-purple-500/20 text-white placeholder-gray-600 focus:border-purple-500 focus:outline-none transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-400 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-purple-500/20 text-white placeholder-gray-600 focus:border-purple-500 focus:outline-none transition-all"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-400 mb-2">
                        Location 1
                      </label>
                      <input
                        type="text"
                        name="location1"
                        value={formData.location1}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-purple-500/20 text-white placeholder-gray-600 focus:border-purple-500 focus:outline-none transition-all"
                        placeholder="City, Country"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-400 mb-2">
                        Location 2
                      </label>
                      <input
                        type="text"
                        name="location2"
                        value={formData.location2}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-purple-500/20 text-white placeholder-gray-600 focus:border-purple-500 focus:outline-none transition-all"
                        placeholder="City, Country"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-400 mb-2">
                      Current Distance (km)
                    </label>
                    <input
                      type="number"
                      name="distance"
                      value={formData.distance}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-purple-500/20 text-white placeholder-gray-600 focus:border-purple-500 focus:outline-none transition-all"
                      placeholder="e.g., 8784"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-400 mb-2">
                      How often do you currently travel?
                    </label>
                    <select
                      name="frequency"
                      value={formData.frequency}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-purple-500/20 text-white focus:border-purple-500 focus:outline-none transition-all"
                    >
                      <option value="">Select frequency...</option>
                      <option value="weekly">Weekly</option>
                      <option value="monthly">Monthly</option>
                      <option value="quarterly">Quarterly</option>
                      <option value="rarely">Rarely</option>
                    </select>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="interactive w-full py-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl font-semibold text-lg shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 transition-all"
                  >
                    Submit Application
                  </motion.button>

                  <p className="text-xs text-gray-500 text-center leading-relaxed">
                    By applying, you agree to participate in beta testing and provide feedback.
                    We'll review your application and contact you within 2 weeks.
                  </p>
                </div>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-12 rounded-2xl bg-gradient-to-br from-green-600/20 to-emerald-600/20 border-2 border-green-500/30 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                  className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6"
                >
                  <span className="text-4xl">✓</span>
                </motion.div>

                <h3 className="text-3xl font-bold text-white mb-4">
                  Application Received!
                </h3>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Thank you for applying to our beta program. We're reviewing applications
                  and will contact you within 2 weeks.
                </p>
                <div className="p-6 rounded-xl bg-black/30 border border-green-500/20">
                  <div className="text-sm text-gray-400 mb-2">Your Application ID</div>
                  <div className="font-mono text-2xl text-green-400">
                    ANDA-{Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Application stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          {[
            { value: '142,847', label: 'Total Applications' },
            { value: '247', label: 'Beta Participants' },
            { value: '253', label: 'Spots Remaining' },
          ].map((stat, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-purple-900/10 border border-purple-500/20 text-center"
            >
              <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default BetaProgram
