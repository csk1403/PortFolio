import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const competencies = [
  {
    id: 'qa',
    title: 'QA',
    href: '#qa',
    emoji: '🔍',
    description:
      '글로벌 MMORPG 리니지W에서 5년간 QA를 담당하며, 테스트 설계·기획 검수·버그 리포팅·멀티 플랫폼 검증 등 전반적인 QA 프로세스를 주도했습니다.',
    keywords: ['테스트 전략', '멀티 플랫폼', '버그 리포팅', '거래 시스템'],
  },
  {
    id: 'automation',
    title: 'Test Automation',
    href: '#automation',
    emoji: '⚙️',
    description:
      'Python 기반 자동 테스트 개발과 AI 활용 효율화 도구를 직접 설계·구현하여, 반복 업무를 자동화하고 QA 리소스를 핵심 검증에 집중시켰습니다.',
    keywords: ['Python', 'Selenium·Appium', 'AI 활용', '최대 80% 절감'],
  },
  {
    id: 'leading',
    title: 'Project Leading',
    href: '#leading',
    emoji: '👥',
    description:
      '12명 규모의 팀을 리딩하며 인력 분배, 일정·리스크 관리, 개발팀 커뮤니케이션을 담당했습니다. 매 배포마다 빌드 품질을 책임졌습니다.',
    keywords: ['12명 리딩', '일정 관리', '리스크 관리', '커뮤니케이션'],
  },
  {
    id: 'finance',
    title: 'Finance Domain',
    href: '#finance',
    emoji: '📈',
    description:
      '국내외 주요 증권 앱(MTS·HTS)을 직접 사용하며 시세·주문·차트·자산 관리 기능을 비교 분석합니다. 거시 경제와 금융 시장에 대한 이해를 바탕으로, 도메인 관점에서의 UX·기능 검증이 가능합니다.',
    keywords: ['MTS·HTS 활용', '경제·금융 지식', '주문/체결 이해', '도메인 QA'],
  },
]

export default function Competencies() {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  return (
    <section id="competencies" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6" ref={ref}>
      <div className="max-w-[1080px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="inline-block bg-badge text-white text-xs font-medium px-3 py-1 rounded-full mb-4">
            Core Competencies
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-txt-primary tracking-tight">
            네 가지 핵심 역량
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {competencies.map((comp, i) => (
            <motion.a
              key={comp.id}
              href={comp.href}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              className="group bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <span className="text-3xl mb-5 block">{comp.emoji}</span>
              <h3 className="text-xl font-bold text-txt-primary mb-3 group-hover:text-badge transition-colors">
                {comp.title}
              </h3>
              <p className="text-txt-secondary text-base leading-relaxed mb-5">
                {comp.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {comp.keywords.map((kw) => (
                  <span
                    key={kw}
                    className="text-xs text-txt-tertiary bg-[#f2f4f6] px-3 py-1 rounded-full"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
