import React, { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'

const GameThree = ({ onComplete }) => {
  const [playerY, setPlayerY] = useState(70) // percentage from top
  const [isJumping, setIsJumping] = useState(false)
  const [position, setPosition] = useState(10) // horizontal position
  const [obstacles, setObstacles] = useState([30, 50, 70])
  const [won, setWon] = useState(false)

  const jump = useCallback(() => {
    if (!isJumping && !won) {
      setIsJumping(true)
      setPlayerY(40)
      setTimeout(() => {
        setPlayerY(70)
        setIsJumping(false)
      }, 600)
    }
  }, [isJumping, won])

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.code === 'Space' || e.code === 'ArrowUp') {
        e.preventDefault()
        jump()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [jump])

  useEffect(() => {
    if (!won) {
      const interval = setInterval(() => {
        setPosition(prev => {
          const newPos = prev + 2
          if (newPos >= 95) {
            setWon(true)
            setTimeout(() => onComplete(), 1500)
            return 95
          }
          return newPos
        })
      }, 50)

      return () => clearInterval(interval)
    }
  }, [won, onComplete])

  // Check collision
  useEffect(() => {
    obstacles.forEach(obstacleX => {
      if (Math.abs(position - obstacleX) < 3 && playerY > 65) {
        // Hit obstacle - reset
        setPosition(10)
      }
    })
  }, [position, playerY, obstacles])

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
          The Impossible Jump
        </motion.h2>

        <p className="text-gray-600 mb-4">
          Tap/Click or press Space to jump • Reach the end!
        </p>

        {won && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="text-2xl text-gray-900 font-serif mb-4"
          >
            You made it! 🌟
          </motion.div>
        )}
      </div>

      {/* Game Area */}
      <div className="relative w-full max-w-4xl h-64 bg-gradient-to-b from-gray-50 to-gray-100 rounded-3xl overflow-hidden border-4 border-gray-200" onClick={jump}>
        {/* Ground */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gray-800" />

        {/* Goal */}
        <motion.div
          className="absolute right-4 bottom-16 text-4xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          🏆
        </motion.div>

        {/* Obstacles */}
        {obstacles.map((obstacleX, i) => (
          <div
            key={i}
            className="absolute bottom-16 w-8 h-12 bg-red-400 rounded"
            style={{ left: `${obstacleX}%` }}
          />
        ))}

        {/* Player */}
        <motion.div
          className="absolute w-12 h-12 text-4xl flex items-center justify-center"
          style={{ left: `${position}%` }}
          animate={{ bottom: `${100 - playerY}%` }}
          transition={{ duration: 0.3 }}
        >
          💜
        </motion.div>

        {/* Progress line */}
        <div className="absolute bottom-0 left-0 h-1 bg-purple-400" style={{ width: `${position}%` }} />
      </div>

      <p className="mt-6 text-sm text-gray-500">
        Jump over the red obstacles to reach the trophy
      </p>
    </motion.div>
  )
}

export default GameThree
