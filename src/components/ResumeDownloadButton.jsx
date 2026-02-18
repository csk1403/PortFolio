import { motion } from 'framer-motion'

export default function ResumeDownloadButton() {
  const handleClick = () => {
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <motion.button
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.4, duration: 0.4 }}
      onClick={handleClick}
      className="fixed top-1/2 right-6 lg:right-10 z-30 -translate-y-1/2 flex items-center gap-2 rounded-full bg-white shadow-lg border border-border px-4 py-2 text-sm font-medium text-txt-primary hover:bg-badge hover:text-white hover:border-badge transition-all duration-200"
    >
      <span className="text-xs tracking-widest uppercase">PDF</span>
      <span>이력서 다운로드</span>
    </motion.button>
  )
}

