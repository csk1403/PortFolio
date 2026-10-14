import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const socials = [
  { icon: FiGithub, href: '#', label: 'GitHub' },
  { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:your@email.com', label: 'Email' },
]

export default function SocialSidebar() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.5 }}
      className="fixed bottom-0 left-6 lg:left-10 hidden md:flex flex-col items-center gap-4 after:content-[''] after:block after:w-px after:h-20 after:bg-[#d1d5db]"
    >
      {socials.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith('mailto') ? undefined : '_blank'}
          rel="noopener noreferrer"
          aria-label={label}
          className="text-txt-tertiary hover:text-txt-primary hover:-translate-y-0.5 transition-all duration-200"
        >
          <Icon size={18} />
        </a>
      ))}
    </motion.div>
  )
}
