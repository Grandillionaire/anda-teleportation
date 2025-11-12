import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative px-4 py-20 border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Company */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Anda Industries</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Quantum portal technology eliminating distance in long-distance relationships.
            </p>
            <div className="flex gap-4">
              {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  className="interactive w-10 h-10 rounded-full bg-purple-900/20 border border-purple-500/20 flex items-center justify-center hover:border-purple-500/40 transition-all"
                >
                  <span className="text-xs text-gray-400">{social[0]}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider">
              Product
            </h4>
            <ul className="space-y-3">
              {['How It Works', 'Technology', 'Safety', 'Pricing', 'Beta Program'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="interactive text-gray-500 hover:text-purple-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-3">
              {['About Us', 'Team', 'Careers', 'Press', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="interactive text-gray-500 hover:text-purple-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Research */}
          <div>
            <h4 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wider">
              Research
            </h4>
            <ul className="space-y-3">
              {['Whitepaper', 'Publications', 'Patents', 'Partnerships', 'Blog'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="interactive text-gray-500 hover:text-purple-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-purple-900/20 to-indigo-900/20 border border-purple-500/20 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-3">Stay Updated</h3>
            <p className="text-gray-400 mb-6">
              Get the latest updates on portal installations, research breakthroughs, and beta program news.
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-black/50 border border-purple-500/20 text-white placeholder-gray-600 focus:border-purple-500 focus:outline-none transition-all"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="interactive px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-purple-500/10">
          <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-gray-500">
            <span>© {currentYear} Anda Industries. All rights reserved.</span>
            <div className="flex gap-6">
              <a href="#" className="interactive hover:text-purple-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="interactive hover:text-purple-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="interactive hover:text-purple-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-500 group relative">
            <span>Powered by quantum entanglement</span>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="w-4 h-4 border-2 border-purple-500 border-t-transparent rounded-full"
            />
            {/* Hidden love message */}
            <div className="absolute -top-16 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-r from-pink-600/90 to-purple-600/90 px-4 py-2 rounded-lg text-pink-100 text-xs whitespace-nowrap border border-pink-400/50">
              ...and by love for Anda Coste 💜
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
