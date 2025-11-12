import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Trophy = () => {
  const [showMessages, setShowMessages] = useState(false)

  useEffect(() => {
    setTimeout(() => setShowMessages(true), 2000)
    document.title = '💜 You Won! - For Anda Coste'
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50"
    >
      <div className="max-w-3xl text-center">
        {/* Trophy Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: 'spring' }}
          className="text-9xl mb-8"
        >
          🏆
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-5xl md:text-7xl font-serif mb-6 text-gray-900"
        >
          You Did It!
        </motion.h1>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-2xl md:text-3xl font-serif mb-12 text-gray-700"
        >
          You've unlocked the
          <br />
          <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent font-bold">
            Teleportation Trophy
          </span>
        </motion.div>

        {/* Love Messages */}
        {showMessages && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8 mb-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="p-8 bg-white rounded-3xl shadow-lg border-2 border-pink-200"
            >
              <p className="text-2xl font-serif text-gray-800 italic">
                "You are my moonlight"
              </p>
              <div className="text-4xl mt-4">🌙</div>
            </motion.div>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4 }}
              className="p-8 bg-white rounded-3xl shadow-lg border-2 border-purple-200"
            >
              <p className="text-2xl font-serif text-gray-800 italic">
                "You are worth every minute
                <br />I spent coding this"
              </p>
              <div className="text-4xl mt-4">✨</div>
            </motion.div>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6 }}
              className="p-8 bg-white rounded-3xl shadow-lg border-2 border-red-200"
            >
              <p className="text-3xl font-serif text-gray-800 font-bold">
                "I love you"
              </p>
              <div className="text-4xl mt-4">❤️</div>
            </motion.div>
          </motion.div>
        )}

        {showMessages && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="space-y-4"
          >
            <p className="text-lg text-gray-600 font-serif italic">
              Distance is just a number when you're in my heart
            </p>

            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="text-6xl"
            >
              💜
            </motion.div>

            <p className="text-sm text-gray-500">
              — For Anda Coste, with all my love
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

export default Trophy
