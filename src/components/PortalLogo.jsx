import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const PortalLogo = () => {
  const [clickCount, setClickCount] = useState(0)
  const [showSecret, setShowSecret] = useState(false)

  const handleLogoClick = () => {
    const newCount = clickCount + 1
    setClickCount(newCount)

    if (newCount === 3) {
      setShowSecret(true)
      // Change document title
      document.title = '💜 For Anda Coste - I Love You 💜'
      setTimeout(() => {
        setShowSecret(false)
        setClickCount(0)
        document.title = 'Anda Industries | Quantum Teleportation'
      }, 8000)
    }
  }

  return (
    <div className="flex flex-col items-center gap-6 relative">
      {/* Secret love message */}
      <AnimatePresence>
        {showSecret && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: -20 }}
            className="absolute -top-28 md:-top-32 left-1/2 transform -translate-x-1/2 z-50 p-6 md:p-8 rounded-3xl bg-gradient-to-br from-pink-600/95 to-purple-600/95 border-2 border-pink-400 backdrop-blur-lg shadow-2xl shadow-pink-500/50 text-center min-w-[280px] md:min-w-[350px] max-w-[90vw]"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 10, 0] }}
              transition={{ duration: 0.5, repeat: 3 }}
              className="text-5xl md:text-6xl mb-3 md:mb-4"
            >
              💖
            </motion.div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">For Anda Coste</h3>
            <p className="text-base md:text-lg text-pink-100 mb-2">You are my moonlight 🌙</p>
            <p className="text-base md:text-lg text-pink-100 mb-2">You are worth every minute I spent coding this ✨</p>
            <p className="text-xl md:text-2xl font-bold text-white mt-3 md:mt-4">I love you ❤️</p>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-4xl mt-4"
            >
              💜
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        className="drop-shadow-2xl cursor-pointer interactive transition-transform hover:scale-105"
        onClick={handleLogoClick}
      >
        {/* Outer ring */}
        <motion.circle
          cx="100"
          cy="100"
          r="90"
          fill="none"
          stroke="url(#gradient1)"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        />

        {/* Middle ring */}
        <motion.circle
          cx="100"
          cy="100"
          r="70"
          fill="none"
          stroke="url(#gradient2)"
          strokeWidth="3"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.3, ease: 'easeInOut' }}
        />

        {/* Inner ring */}
        <motion.circle
          cx="100"
          cy="100"
          r="50"
          fill="none"
          stroke="url(#gradient3)"
          strokeWidth="4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.6, ease: 'easeInOut' }}
        />

        {/* Core ring */}
        <motion.circle
          cx="100"
          cy="100"
          r="30"
          fill="url(#coreGradient)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 1, ease: 'easeOut' }}
          className="portal-glow"
        />

        {/* Quantum wave lines */}
        {[0, 60, 120, 180, 240, 300].map((angle, i) => (
          <motion.line
            key={i}
            x1="100"
            y1="100"
            x2={100 + Math.cos((angle * Math.PI) / 180) * 90}
            y2={100 + Math.sin((angle * Math.PI) / 180) * 90}
            stroke="url(#gradient4)"
            strokeWidth="1"
            opacity="0.3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 1.2 + i * 0.1 }}
          />
        ))}

        {/* Connection points */}
        {[45, 135, 225, 315].map((angle, i) => (
          <motion.circle
            key={i}
            cx={100 + Math.cos((angle * Math.PI) / 180) * 70}
            cy={100 + Math.sin((angle * Math.PI) / 180) * 70}
            r="4"
            fill="#8b5cf6"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.2, 1] }}
            transition={{ duration: 0.6, delay: 1.8 + i * 0.1 }}
          />
        ))}

        {/* Gradients */}
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#6d28d9" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c4b5fd" />
            <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#6d28d9" />
          </linearGradient>
          <radialGradient id="coreGradient">
            <stop offset="0%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#6d28d9" />
          </radialGradient>
        </defs>
      </svg>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold text-gradient tracking-wider">
          ANDA INDUSTRIES
        </h2>
        <p className="text-sm text-gray-500 mt-1 tracking-widest">
          QUANTUM PORTAL TECHNOLOGY
        </p>
      </motion.div>
    </div>
  )
}

export default PortalLogo
