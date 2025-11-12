import React from 'react'
import { motion } from 'framer-motion'

const Welcome = ({ onStart }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center p-8"
    >
      <div className="max-w-2xl text-center">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-6xl md:text-8xl font-serif mb-6 text-gray-900"
        >
          For Anda
        </motion.h1>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <p className="text-xl md:text-2xl text-gray-600 font-serif italic mb-4">
            A journey of four mini-games
          </p>
          <p className="text-gray-500">
            Complete each challenge to unlock the ultimate prize
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="space-y-4"
        >
          <motion.button
            onClick={onStart}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 bg-gray-900 text-white rounded-full text-lg font-serif hover:bg-gray-800 transition-colors"
          >
            Begin Journey
          </motion.button>

          <p className="text-sm text-gray-400">
            Made with love 💜
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 flex justify-center gap-3"
        >
          {[1, 2, 3, 4].map((num) => (
            <div
              key={num}
              className="w-3 h-3 rounded-full bg-gray-200"
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Welcome
