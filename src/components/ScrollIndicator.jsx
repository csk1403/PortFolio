import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ScrollIndicator() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 100
      setVisible(!atBottom)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollDown = () => {
    window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          onClick={scrollDown}
          aria-label="Scroll down"
          className="fixed bottom-6 right-4 sm:bottom-8 sm:right-6 lg:right-10 z-30 flex flex-col items-center gap-1.5 sm:gap-2 group cursor-pointer"
        >
          <span className="text-sm font-semibold tracking-widest text-badge group-hover:text-txt-primary transition-colors">
            SCROLL
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-badge/10 border-2 border-badge flex items-center justify-center group-hover:bg-badge group-hover:border-badge transition-all duration-300"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="text-badge group-hover:text-white transition-colors duration-300"
            >
              <path
                d="M12 5v14m0 0l-5-5m5 5l5-5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
