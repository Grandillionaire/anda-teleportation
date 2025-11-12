import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const GameOne = ({ onComplete }) => {
  const [hearts, setHearts] = useState([])
  const [caught, setCaught] = useState(0)
  const [nextId, setNextId] = useState(0)
  const target = 10
  const maxHeartsOnScreen = 3
  const gameActive = useRef(true)

  // Spawn hearts with limit
  useEffect(() => {
    if (caught >= target) {
      gameActive.current = false
      return
    }

    const spawnInterval = setInterval(() => {
      if (gameActive.current && hearts.length < maxHeartsOnScreen) {
        const newHeart = {
          id: nextId,
          x: Math.random() * 70 + 15, // 15-85% of screen width (safer margins)
        }
        setHearts(prev => [...prev, newHeart])
        setNextId(prev => prev + 1)
      }
    }, 1500) // Slower spawn rate

    return () => clearInterval(spawnInterval)
  }, [hearts.length, caught, nextId, target])

  // Auto-remove hearts that fall off screen
  useEffect(() => {
    const cleanupInterval = setInterval(() => {
      setHearts(prev => {
        // Keep only the first 5 hearts (in case of any backup)
        return prev.slice(0, 5)
      })
    }, 6000) // Clean up every 6 seconds (after hearts would have fallen)

    return () => clearInterval(cleanupInterval)
  }, [])

  const handleCatch = (id) => {
    setHearts(prev => prev.filter(h => h.id !== id))
    setCaught(prev => prev + 1)
  }

  useEffect(() => {
    if (caught >= target) {
      gameActive.current = false
      setHearts([]) // Clear all hearts
      setTimeout(() => onComplete(), 1500)
    }
  }, [caught, onComplete, target])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 relative overflow-hidden"
    >
      <div className="max-w-4xl w-full text-center relative z-10 mb-8">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-3xl md:text-5xl font-serif mb-4 text-gray-900"
        >
          Catch the Hearts
        </motion.h2>

        <p className="text-gray-600 mb-6 text-lg">
          Click the falling hearts • {caught} / {target}
        </p>

        <div className="h-3 bg-gray-100 rounded-full overflow-hidden mb-6 max-w-md mx-auto">
          <motion.div
            className="h-full bg-gradient-to-r from-pink-400 to-red-400"
            initial={{ width: 0 }}
            animate={{ width: `${(caught / target) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {caught >= target && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="text-3xl text-gray-900 font-serif"
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
            initial={{
              y: -100,
              opacity: 0,
              scale: 0.8
            }}
            animate={{
              y: window.innerHeight + 100,
              opacity: 1,
              scale: 1
            }}
            exit={{
              scale: 1.5,
              opacity: 0,
              rotate: 20
            }}
            transition={{
              y: {
                duration: 5,
                ease: "linear"
              },
              opacity: {
                duration: 0.5
              },
              scale: {
                duration: 0.3
              }
            }}
            onAnimationComplete={() => {
              // Remove heart if it reached bottom
              setHearts(prev => prev.filter(h => h.id !== heart.id))
            }}
            onClick={() => handleCatch(heart.id)}
            className="fixed text-5xl md:text-6xl cursor-pointer z-20 touch-none"
            style={{
              left: `${heart.x}%`,
              transform: 'translateX(-50%)', // Center the heart
              WebkitTapHighlightColor: 'transparent',
              userSelect: 'none'
            }}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 1.5 }}
          >
            ❤️
          </motion.button>
        ))}
      </AnimatePresence>

      {caught < target && (
        <p className="fixed bottom-8 left-0 right-0 text-center text-sm text-gray-400 z-10">
          Tap the hearts as they fall
        </p>
      )}
    </motion.div>
  )
}

export default GameOne
