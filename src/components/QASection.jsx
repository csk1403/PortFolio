import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const qaItems = [
  {
    title: '자기주도적 QA 프로세스 수립',
    content: [
      '기획 검토부터 배포까지, 애자일 환경 내에서 최적화된 테스트 전략을 설계하고 실행합니다.',
      '페어로 업무를 진행하는 경우에는 선임 역할을 맡아 테스트 설계 및 방향성을 주도하고, 개발팀과의 커뮤니케이션을 통해 QA를 주도했습니다.',
    ],
  },
  {
    title: '애자일/스크럼 환경에서의 테스트 전략 수립 및 실행 경험',
    content: [
      '주 단위의 빠른 업데이트 환경에서는 정확한 프로세스를 통한 일정 관리가 필수라고 생각합니다.',
      '기획 검수 단계에서부터 QA 관점으로 리뷰를 진행하고, 예외 케이스를 선제적으로 도출하여 초기 단계에서 발생할 수 있는 리스크를 줄였습니다.',
      '이후 테스트 설계 시 기획서를 기반으로 전체 소요 시간을 예측하고, 우선순위와 시간을 분배하여 핵심 기능 검수에 집중할 수 있도록 운영했습니다. 일정 내에 기본 기능부터 예외사항까지 최대한 많은 커버리지를 확보하여 라이브 환경에서 이슈가 발생하지 않도록 했습니다.',
    ],
  },
  {
    title: '테스트 케이스 작성 역량',
    content: [
      '테스트 케이스 작성 시 명세에 맞는 작성을 최우선으로 합니다. 또한 각 검증 단계에서 예외사항을 최대한 고려하여 테스트 케이스를 작성합니다.',
      '테스트 커버리지를 최대한 확보하여 라이브 서비스 시 이슈가 발생하지 않도록 노력하며, 위에서 아래로 진행했을 때 테스트 흐름이 매끄럽게 이어지도록 구성하여 시간 리소스도 효율적으로 운영할 수 있도록 합니다.',
    ],
  },
  {
    title: '버그 리포팅 역량',
    content: [
      '누가 읽더라도 이해할 수 있도록 간결하고 명확하게 이슈를 작성합니다. 필요한 정보를 빠짐없이 기입하고, 재현 스텝을 단계별로 명시하여 그대로 따라하기만 하면 될 수준으로 작성합니다.',
      '또한 확인한 원인과 추측 가능한 이슈의 원인까지 함께 기입하여 문제 파악 시간을 단축합니다. 이슈를 읽는 사람의 입장에서 작성하여, 빠르게 이슈가 처리될 수 있도록 합니다.',
    ],
  },
  {
    title: '다양한 플랫폼 QA 경험 및 구조 이해도',
    tags: ['PC', 'iOS', 'Android'],
    content: [
      'PC, iOS, AOS 기반 애플리케이션에 대해 다년간 QA를 진행했습니다. 플랫폼 차이로 인해 발생할 수 있는 이슈를 항상 고려합니다.',
      '예를 들어, PC에서는 정상이지만 모바일 환경에서는 UI, 해상도, 텍스트 깨짐, 번역 이슈 등의 문제가 발생하기 쉽습니다. 기본 기능은 PC에 중점을 두고 테스트를 하며 UI와 관련된 이슈는 모바일 환경에 더욱 집중하여 테스트를 진행했습니다.',
      '이와 같이 플랫폼 특성에 맞는 리스크를 파악하여 테스트를 설계하고 진행하는 역량을 가지고 있습니다.',
    ],
  },
  {
    title: '거래 시스템 QA 경험',
    content: [
      '글로벌 MMORPG의 경제 시스템(거래소, BM) 검증 경험을 통해 거래 시스템 전반에 대한 QA 경험을 보유하고 있습니다.',
      '거래 시스템 QA를 수행하며 상품 판매/구매, 상품 정보 노출, 검색·정렬·필터 기능 등 기본 기능에 대해 높은 커버리지로 검증을 진행했습니다.',
      '또한 결제 타이밍 이슈, 네트워크 단절, 거래 중 실패 상황 등 발생할 수 있는 예외적인 케이스를 고려하여 테스트했으며, 초기 단계에서 높은 커버리지로 시스템을 검증하여 이후 다년간의 라이브 서비스 중 거래소, BM 시스템이 안정적으로 운영될 수 있도록 했습니다.',
    ],
  },
]

export default function QASection() {
  const [ref, isInView] = useInView({ threshold: 0.05 })

  return (
    <section id="qa" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6" ref={ref}>
      <div className="max-w-[1080px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="inline-block bg-badge text-white text-xs font-medium px-3 py-1 rounded-full mb-4">
            01 · QA
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-txt-primary tracking-tight mb-3">
            QA 역량
          </h2>
          <p className="text-txt-secondary">
            5년간 글로벌 서비스 리니지W의 QA를 담당하며, 일주일 단위의 빠른 업데이트 주기 속에서 테스트 설계부터 배포까지 전반적인 QA 업무를 수행했습니다.
          </p>
        </motion.div>

        <div className="space-y-5">
          {qaItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.08 * i, duration: 0.4 }}
              className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-txt-primary mt-2.5" />
                <h3 className="text-txt-primary font-bold text-lg sm:text-xl">{item.title}</h3>
              </div>
              <div className="pl-[18px] space-y-2">
                {item.content.map((p, j) => (
                  <p key={j} className="text-txt-secondary text-base leading-[1.8]">{p}</p>
                ))}
              </div>
              {item.tags && (
                <div className="flex gap-2 mt-4 pl-[18px]">
                  {item.tags.map((t) => (
                    <span key={t} className="text-xs text-txt-tertiary bg-[#f2f4f6] px-3 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
