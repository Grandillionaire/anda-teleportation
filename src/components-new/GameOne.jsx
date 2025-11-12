import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const GameOne = ({ onComplete }) => {
  const [hearts, setHearts] = useState([])
  const [caught, setCaught] = useState(0)
  const [nextId, setNextId] = useState(0)
  const target = 10

  useEffect(() => {
    const interval = setInterval(() => {
      const newHeart = {
        id: nextId,
        x: Math.random() * 80 + 10, // 10-90% of screen width
        delay: Math.random() * 0.5
      }
      setHearts(prev => [...prev, newHeart])
      setNextId(prev => prev + 1)
    }, 1200)

    return () => clearInterval(interval)
  }, [nextId])

  const handleCatch = (id) => {
    setHearts(prev => prev.filter(h => h.id !== id))
    setCaught(prev => prev + 1)
  }

  useEffect(() => {
    if (caught >= target) {
      setTimeout(() => onComplete(), 1000)
    }
  }, [caught, onComplete])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col items-center justify-center p-8 relative overflow-hidden"
    >
      <div className="max-w-4xl w-full text-center relative z-10">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-5xl font-serif mb-4 text-gray-900"
        >
          Catch the Hearts
        </motion.h2>

        <p className="text-gray-600 mb-8">
          Click the falling hearts • {caught} / {target}
        </p>

        <div className="h-2 bg-gray-100 rounded-full overflow-hidden mb-8">
          <motion.div
            className="h-full bg-gradient-to-r from-pink-400 to-red-400"
            initial={{ width: 0 }}
            animate={{ width: `${(caught / target) * 100}%` }}
          />
        </div>

        {caught >= target && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="text-2xl text-gray-900 font-serif"
          >
            Perfect! ✨
          </motion.div>
        )}
      </div>

      {/* Falling Hearts */}
      <AnimatePresence>
        {hearts.map(heart => (
          <motion.button
            key={heart.id}
            initial={{ y: -50, x: `${heart.x}vw`, opacity: 0 }}
            animate={{ y: '100vh', opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{
              y: { duration: 4, delay: heart.delay },
              opacity: { duration: 0.3 }
            }}
            onClick={() => handleCatch(heart.id)}
            className="fixed text-4xl md:text-5xl cursor-pointer hover:scale-125 transition-transform z-20"
            style={{ left: `${heart.x}vw` }}
          >
            ❤️
          </motion.button>
        ))}
      </AnimatePresence>
    </motion.div>
  )
}

export default GameOne
