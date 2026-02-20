import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

export function MetricCard({ before, after, percent, label, description, delay = 0 }) {
  const [ref, isInView] = useInView({ threshold: 0.3 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
      className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7"
    >
      <p className="text-txt-primary font-bold text-[15px] mb-1">{label}</p>
      <div className="text-txt-secondary text-[15px] mb-5 leading-relaxed">{description}</div>

      <div className="space-y-3 mb-5">
        <div>
          <div className="flex justify-between text-xs mb-1.5">
            <span className="text-txt-tertiary">Before</span>
            <span className="text-txt-secondary font-mono">{before}</span>
          </div>
          <div className="w-full h-2 bg-[#f2f4f6] rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: '100%' } : {}}
              transition={{ delay: delay + 0.3, duration: 0.8, ease: 'easeOut' }}
              className="h-full bg-[#d1d5db] rounded-full"
            />
          </div>
        </div>
        <div>
          <div className="flex justify-between text-xs mb-1.5">
            <span className="text-txt-primary font-medium">After</span>
            <span className="text-txt-primary font-mono font-medium">{after}</span>
          </div>
          <div className="w-full h-2 bg-[#f2f4f6] rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: `${100 - percent}%` } : {}}
              transition={{ delay: delay + 0.5, duration: 0.8, ease: 'easeOut' }}
              className="h-full bg-txt-primary rounded-full"
            />
          </div>
        </div>
      </div>

      <div className="flex items-end gap-1.5">
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: delay + 0.8, duration: 0.4 }}
          className="text-3xl font-bold text-txt-primary font-mono tracking-tight"
        >
          {percent}%
        </motion.span>
        <span className="text-txt-tertiary text-[15px] mb-1">절감</span>
      </div>
    </motion.div>
  )
}
