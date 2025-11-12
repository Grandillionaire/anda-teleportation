import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const GameFour = ({ onComplete }) => {
  const [items, setItems] = useState([])
  const [found, setFound] = useState([])
  const totalMoons = 5

  useEffect(() => {
    // Generate random positions for stars and moons
    const generated = []

    // Add 5 moons
    for (let i = 0; i < totalMoons; i++) {
      generated.push({
        id: `moon-${i}`,
        type: 'moon',
        x: Math.random() * 80 + 10,
        y: Math.random() * 70 + 10
      })
    }

    // Add 15 stars as distractors
    for (let i = 0; i < 15; i++) {
      generated.push({
        id: `star-${i}`,
        type: 'star',
        x: Math.random() * 80 + 10,
        y: Math.random() * 70 + 10
      })
    }

    setItems(generated)
  }, [])

  const handleClick = (item) => {
    if (item.type === 'moon' && !found.includes(item.id)) {
      setFound([...found, item.id])
    }
  }

  useEffect(() => {
    if (found.length === totalMoons) {
      setTimeout(() => onComplete(), 1500)
    }
  }, [found, onComplete])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col items-center justify-center p-8"
    >
      <div className="max-w-4xl w-full text-center mb-8">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-5xl font-serif mb-4 text-gray-900"
        >
          Find the Moonlight
        </motion.h2>

        <p className="text-gray-600 mb-4">
          Find all 5 moons hidden among the stars
        </p>

        <div className="flex justify-center gap-2 mb-4">
          {[...Array(totalMoons)].map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full ${
                i < found.length ? 'bg-purple-400' : 'bg-gray-200'
              }`}
            />
          ))}
        </div>

        {found.length === totalMoons && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="text-2xl text-gray-900 font-serif"
          >
            All found! 🌙
          </motion.div>
        )}
      </div>

      {/* Game Area */}
      <div className="relative w-full max-w-4xl h-96 bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-900 rounded-3xl overflow-hidden border-4 border-gray-200">
        {items.map((item) => {
          const isFound = found.includes(item.id)
          const isMoon = item.type === 'moon'

          return (
            <motion.button
              key={item.id}
              onClick={() => handleClick(item)}
              className={`absolute text-3xl cursor-pointer transition-all ${
                isFound ? 'scale-150 opacity-100' : 'opacity-70 hover:opacity-100 hover:scale-125'
              }`}
              style={{
                left: `${item.x}%`,
                top: `${item.y}%`,
              }}
              whileHover={{ scale: isFound ? 1.5 : 1.3 }}
              whileTap={{ scale: 1.1 }}
            >
              {isMoon ? '🌙' : '⭐'}
            </motion.button>
          )
        })}
      </div>

      <p className="mt-6 text-sm text-gray-500 italic font-serif">
        "You are my moonlight" 🌙
      </p>
    </motion.div>
  )
}

export default GameFour
