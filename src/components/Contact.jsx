import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

export default function Contact() {
  const [ref, isInView] = useInView({ threshold: 0.2 })

  return (
    <section id="contact" className="py-24 px-6" ref={ref}>
      <div className="max-w-[1080px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-10 md:p-16 text-center"
        >
          <span className="inline-block bg-badge text-white text-xs font-medium px-3 py-1 rounded-full mb-6">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-txt-primary tracking-tight mb-4">
            연락하기
          </h2>
        </motion.div>
      </div>
    </section>
  )
}
