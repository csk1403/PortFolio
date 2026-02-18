import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const stats = [
  { value: '12', unit: '명', label: '팀 규모' },
  { value: '주 1', unit: '회', label: '릴리즈 주기' },
  { value: '2025~', unit: '', label: '리딩 시작' },
]

const leadingItems = [
  {
    title: '인력 분배 최적화',
    content: [
      '각 인원의 숙련도와 업무 난이도를 고려하여 일감을 배분하고, 병목이 발생하지 않도록 일정과 리소스를 조율했습니다.',
      '담당자의 일정, 숙련도, 테스트 역량, 일감의 난이도 등 업무에 영향을 끼칠 수 있는 다양한 분야를 고려하여 일감을 분배 및 관리했습니다.',
    ],
  },
  {
    title: '이슈 우선순위 판단 및 일정 관리',
    content: [
      '등록된 이슈를 지속적으로 체크하여 중요도를 판단하여 이슈 우선순위를 재정렬했습니다. PM과 빠르게 소통하여, 심각도 높은 이슈는 다른 이슈보다 빠르게 대응되도록 돕고 영향도가 낮은 이슈는 릴리즈 일정에 맞춰 수정 일자를 조정하도록 했습니다.',
    ],
    example:
      '재현 빈도가 높거나 라이브에서 발생 시 리스크가 큰 이슈의 경우 빠르게 전달, 단순 텍스트 혹은 노출이 쉽지 않은 이슈의 경우 일정 변경을 고려하도록 소통',
  },
  {
    title: '리스크 관리',
    content: [
      '담당 빌드에서 발생 가능성이 높은 리스크를 사전에 식별하고, 테스트 인원에게 공유하여 QA 시 해당 항목이 우선 검증되도록 가이드했습니다.',
      '이를 통해 배포마다 달라지는 리스크를 관리하여 커버리지의 하방을 높이는 역할을 담당했습니다.',
    ],
    example:
      '설날 연휴로 인해 릴리즈 일정이 기존 수요일이 아닌 목요일인 경우 상품, 콘텐츠, 아이템의 종료일이 릴리즈에 맞게 목요일로 설정됐는지 확인하도록 가이드',
  },
]

export default function LeadingSection() {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  return (
    <section id="leading" className="py-20 px-6" ref={ref}>
      <div className="max-w-[1080px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="inline-block bg-badge text-white text-xs font-medium px-3 py-1 rounded-full mb-4">
            03 · Project Leading
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-txt-primary tracking-tight mb-3">
            프로젝트 리딩
          </h2>
          <p className="text-txt-secondary whitespace-nowrap">
            프로젝트 리딩을 담당하며, 12명의 인원의 일정을 고려한 일감 분배, 일감 관리, 리스크 관리, 테스트 계획 수립, 개발팀과의 의사소통을 담당했습니다.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="bg-white rounded-3xl p-7 mb-6"
        >
          <div className="grid grid-cols-3 divide-x divide-[#f2f4f6]">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.2 + 0.1 * i, duration: 0.4 }}
                className="text-center py-2"
              >
                <div className="flex items-baseline justify-center gap-0.5">
                  <span className="text-3xl md:text-4xl font-bold text-txt-primary tracking-tight">{stat.value}</span>
                  {stat.unit && <span className="text-lg text-txt-tertiary">{stat.unit}</span>}
                </div>
                <p className="text-sm text-txt-tertiary mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Items */}
        <div className="space-y-5">
          {leadingItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + 0.12 * i, duration: 0.5 }}
              className="bg-white rounded-3xl p-7 md:p-8 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-txt-primary mt-2.5" />
                <h3 className="text-txt-primary font-bold text-xl">{item.title}</h3>
              </div>
              <div className="pl-[18px] space-y-2">
                {item.content.map((p, j) => (
                  <p key={j} className="text-txt-secondary text-base leading-[1.8]">{p}</p>
                ))}
              </div>
              {item.example && (
                <div className="ml-[18px] mt-4 bg-[#f9fafb] rounded-2xl px-5 py-4">
                  <p className="text-txt-secondary text-[15px] leading-[1.8]">
                    <span className="font-semibold text-txt-primary">ex)</span> {item.example}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
