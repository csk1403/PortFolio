import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const qaItems = [
  {
    "title": "요구사항 기반 테스트 설계",
    "content": [
      "기획 검수 단계에서 요구사항과 변경사항을 분석하고, 기능 간 연관관계와 영향 범위를 파악하여 테스트 범위와 우선순위를 정의했습니다.",
      "정상 시나리오뿐 아니라 입력값, 상태값, 경계 조건, 예외 상황을 고려하여 테스트 시나리오와 테스트 케이스를 설계했습니다."
    ]
  },
  {
    "title": "주 1회 업데이트 환경의 품질 검증",
    "content": [
      "리니지W의 주간 업데이트에 맞춰 기획 검토, 테스트 범위 정의, 기능 테스트, 결함 등록, 수정사항 재검증, 리그레션 테스트, 배포 전 품질 점검까지 수행했습니다.",
      "변경사항의 영향도와 테스트 소요 시간을 기준으로 우선순위를 정하고, 제한된 일정 안에서 핵심 기능과 예외 상황을 검증했습니다."
    ]
  },
  {
    "title": "JIRA 기반 결함 관리 및 재검증",
    "tags": [
      "JIRA",
      "Expected / Actual",
      "리그레션 테스트"
    ],
    "content": [
      "재현 환경, 재현 절차, 기대 결과(Expected), 실제 결과(Actual)를 구체적으로 문서화하고, 확인된 원인과 영향 범위를 함께 정리했습니다.",
      "결함을 지속적으로 추적하며 심각도와 영향도를 기준으로 우선순위를 조정했습니다. 수정사항은 동일 조건에서 재검증하고, 관련 기능까지 범위를 확장하여 리그레션 테스트를 수행했습니다."
    ]
  },
  {
    "title": "멀티 플랫폼 및 다국어 환경 검증",
    "tags": [
      "PC",
      "iOS",
      "Android",
      "다국어"
    ],
    "content": [
      "PC, iOS, Android 환경에서 플랫폼별 기능 차이와 UI, 해상도, 텍스트, 번역 이슈를 검증했습니다.",
      "플랫폼 특성과 다국어 노출 조건을 고려하여 테스트를 설계하고, 글로벌 서비스 환경의 품질 리스크를 사전에 확인했습니다."
    ]
  },
  {
    "title": "거래소·BM 시스템의 통합 및 연계 검증",
    "content": [
      "거래소와 BM 시스템에서 상품 판매·구매, 검색·정렬·필터, 상품 정보 노출 등 주요 기능을 검증했습니다.",
      "결제 타이밍, 네트워크 단절, 거래 실패 등 예외 상황을 포함하여 통합 및 연계 검증을 수행했습니다."
    ]
  },
  {
    "title": "유관부서 협업 및 고객 이슈 분석",
    "content": [
      "QA 진행 상황과 주요 결함을 PM 및 개발팀과 공유하고, 일정과 품질 리스크를 기준으로 수정 우선순위를 조율했습니다.",
      "서비스 부서를 통해 인입되는 고객 이슈와 커뮤니티 제보의 발생 환경과 재현 조건을 분석했습니다. 결함 여부를 판단한 뒤 관련 부서에 전달하고, 수정부터 재검증까지 관리했습니다."
    ]
  }
]

export default function QASection() {
  const [ref, isInView] = useInView({ threshold: 0.05 })

  return (
    <section id="qa" className="py-20 px-6" ref={ref}>
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
          <h2 className="text-3xl md:text-4xl font-bold text-txt-primary tracking-tight mb-3">
            QA 역량
          </h2>
          <p className="text-txt-secondary leading-relaxed">
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
