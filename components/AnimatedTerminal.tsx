'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface AnimatedTerminalProps {
  text: string
  className?: string
}

const AnimatedTerminal: React.FC<AnimatedTerminalProps> = ({ text, className = '' }) => {
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    let currentIndex = 0
    const typingSpeed = 100 // ms per character

    const typeText = () => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1))
        currentIndex++
        setTimeout(typeText, typingSpeed)
      } else {
        setIsTyping(false)
        // Blink cursor after typing is complete
        const cursorInterval = setInterval(() => {
          setShowCursor(prev => !prev)
        }, 500)
        
        return () => clearInterval(cursorInterval)
      }
    }

    // Reset and start typing
    setDisplayedText('')
    setIsTyping(true)
    setShowCursor(true)
    typeText()
  }, [text])

  return (
    <div className={`inline-block ${className}`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-slate-900/90 backdrop-blur-sm rounded-lg border border-slate-700/50 shadow-2xl overflow-hidden"
      >
        {/* Terminal Header */}
        <div className="bg-slate-800/80 px-4 py-2 flex items-center gap-2 border-b border-slate-700/50">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
          <div className="flex-1 text-center">
            <span className="text-slate-400 text-xs font-mono">terminal</span>
          </div>
        </div>

        {/* Terminal Content */}
        <div className="p-4 font-mono text-sm">
          <div className="flex items-center gap-1 mb-2">
            <span className="text-green-400">michcode</span>
            <span className="text-slate-500">:</span>
            <span className="text-blue-400">~</span>
            <span className="text-slate-500">$</span>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-slate-500">echo</span>
            <span className="text-cyan-400">
              "{displayedText}
              {isTyping && showCursor && (
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="text-cyan-400"
                >
                  |
                </motion.span>
              )}
              "
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default AnimatedTerminal
