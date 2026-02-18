import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="min-h-[100vh] flex items-center justify-center px-6">
      <div className="text-center max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <span className="inline-block bg-badge text-white text-sm font-medium px-6 py-2.5 rounded-full mb-8">
            QA Engineer
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-5xl sm:text-6xl md:text-[72px] font-bold text-txt-primary leading-[1.1] tracking-tight mb-6"
        >
          조성국
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.6 }}
          className="inline-block bg-white text-txt-primary text-xl md:text-2xl font-semibold tracking-tight px-6 py-3 rounded-full shadow-sm mb-6"
        >
          "결과는 꼼꼼하게, 과정은 효율적으로"
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="text-txt-secondary text-lg md:text-xl leading-relaxed mx-auto mb-12"
        >
          5년차 QA 엔지니어로서 글로벌 MMORPG 리니지W의 QA를 담당하고 있습니다.<br />
          QA, 테스트 자동화, 프로젝트 리딩을 통해 서비스 품질과 팀의 효율을 함께 높이고 있습니다.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3"
        >
          <a
            href="#competencies"
            className="bg-txt-primary text-white px-7 py-3 rounded-full text-sm font-medium hover:bg-badge transition-colors duration-200"
          >
            역량 보기
          </a>
          <a
            href="#contact"
            className="bg-white text-txt-primary px-7 py-3 rounded-full text-sm font-medium border border-border hover:bg-[#f9fafb] transition-colors duration-200"
          >
            연락하기
          </a>
        </motion.div>
      </div>
    </section>
  )
}
