import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Welcome from './components-new/Welcome'
import GameOne from './components-new/GameOne'
import GameTwo from './components-new/GameTwo'
import GameThree from './components-new/GameThree'
import GameFour from './components-new/GameFour'
import Trophy from './components-new/Trophy'

function App() {
  const [currentStage, setCurrentStage] = useState(0) // 0=welcome, 1-4=games, 5=trophy
  const [completedGames, setCompletedGames] = useState([])

  useEffect(() => {
    // Secret console message
    console.log('%c💜 For Anda Coste 💜', 'color: #ec4899; font-size: 24px; font-weight: bold; font-family: serif;')
    console.log('%cA journey of mini-games awaits... ✨', 'color: #666; font-size: 14px; font-style: italic;')
  }, [])

  const handleGameComplete = (gameNumber) => {
    if (!completedGames.includes(gameNumber)) {
      setCompletedGames([...completedGames, gameNumber])
    }
    setCurrentStage(gameNumber + 1)
  }

  const handleStart = () => {
    setCurrentStage(1)
  }

  const progress = (completedGames.length / 4) * 100

  return (
    <div className="min-h-screen bg-white">
      {/* Progress Bar */}
      {currentStage > 0 && currentStage < 5 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed top-0 left-0 right-0 h-1 bg-gray-100 z-50"
        >
          <motion.div
            className="h-full bg-gradient-to-r from-pink-400 to-purple-400"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      )}

      {/* Game Stages */}
      <AnimatePresence mode="wait">
        {currentStage === 0 && <Welcome key="welcome" onStart={handleStart} />}
        {currentStage === 1 && <GameOne key="game1" onComplete={() => handleGameComplete(1)} />}
        {currentStage === 2 && <GameTwo key="game2" onComplete={() => handleGameComplete(2)} />}
        {currentStage === 3 && <GameThree key="game3" onComplete={() => handleGameComplete(3)} />}
        {currentStage === 4 && <GameFour key="game4" onComplete={() => handleGameComplete(4)} />}
        {currentStage === 5 && <Trophy key="trophy" />}
      </AnimatePresence>
    </div>
  )
}

export default App
