import React from 'react'
import { motion } from 'framer-motion'

const PortalLogo = () => {
  return (
    <div className="flex flex-col items-center gap-6">
      <svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        className="drop-shadow-2xl"
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
