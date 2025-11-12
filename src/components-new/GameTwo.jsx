import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const symbols = ['💜', '🌙', '✨', '💖', '🌟', '💫']

const GameTwo = ({ onComplete }) => {
  const [cards, setCards] = useState([])
  const [flipped, setFlipped] = useState([])
  const [matched, setMatched] = useState([])
  const [canFlip, setCanFlip] = useState(true)

  useEffect(() => {
    // Create pairs and shuffle
    const pairs = [...symbols, ...symbols]
      .sort(() => Math.random() - 0.5)
      .map((symbol, i) => ({ id: i, symbol }))
    setCards(pairs)
  }, [])

  const handleCardClick = (id) => {
    if (!canFlip || flipped.includes(id) || matched.includes(id) || flipped.length >= 2) return

    const newFlipped = [...flipped, id]
    setFlipped(newFlipped)

    if (newFlipped.length === 2) {
      setCanFlip(false)
      const [first, second] = newFlipped
      const firstCard = cards.find(c => c.id === first)
      const secondCard = cards.find(c => c.id === second)

      if (firstCard.symbol === secondCard.symbol) {
        setMatched([...matched, first, second])
        setFlipped([])
        setCanFlip(true)
      } else {
        setTimeout(() => {
          setFlipped([])
          setCanFlip(true)
        }, 1000)
      }
    }
  }

  useEffect(() => {
    if (matched.length === cards.length && cards.length > 0) {
      setTimeout(() => onComplete(), 1500)
    }
  }, [matched, cards, onComplete])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col items-center justify-center p-8"
    >
      <div className="max-w-2xl text-center mb-12">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-5xl font-serif mb-4 text-gray-900"
        >
          Memory Match
        </motion.h2>

        <p className="text-gray-600">
          Find all the pairs • {matched.length / 2} / {symbols.length}
        </p>
      </div>

      <div className="grid grid-cols-4 gap-4 max-w-xl w-full">
        {cards.map((card) => (
          <motion.button
            key={card.id}
            onClick={() => handleCardClick(card.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`aspect-square rounded-2xl text-4xl md:text-5xl flex items-center justify-center transition-all ${
              flipped.includes(card.id) || matched.includes(card.id)
                ? 'bg-gradient-to-br from-pink-100 to-purple-100'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            {(flipped.includes(card.id) || matched.includes(card.id)) && card.symbol}
          </motion.button>
        ))}
      </div>

      {matched.length === cards.length && cards.length > 0 && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="mt-8 text-2xl text-gray-900 font-serif"
        >
          Matched! ✨
        </motion.div>
      )}
    </motion.div>
  )
}

export default GameTwo
