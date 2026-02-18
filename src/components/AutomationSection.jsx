import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { MetricCard } from './AnimatedBar'

const automationAreas = [
  { title: 'BAT 자동화', desc: '매 빌드당 약 1시간 소요되던 기본 기능 점검 리소스 절감' },
  { title: '영역별 기본 기능 테스트', desc: '주 4시간 이상 반복되던 검증 리소스 절감' },
  { title: '리그레션 테스트 자동화', desc: '주 1시간 이상의 반복 작업을 대체하여 재발 가능성이 높은 이슈를 상시 검증하는 구조 마련' },
  { title: '확률 검수 자동화 시스템 구축', desc: '기획서 상 확률과 실제 인게임 확률을 비교 검증하는 데이터 기반 자동화 체계 구현' },
]

const efficiencyTools = [
  {
    title: '비정형 기획서 정형화 및 체크리스트 변환 툴',
    star: true,
    tech: 'Python · AI',
    description:
      '기존 BM 기획서는 정형화되지 않은 형태로 전달되어 자동화가 쉽지 않았습니다. 오랜 기간 수기로 체크리스트를 작성하고 테스트를 진행했습니다. 반복적이고 소모적인 작업 구조를 개선하기 위해, 비정형 기획서를 데이터프레임 형태로 변경하고 추출되는 JSON 파일을 기준으로 데이터 검수까지 진행하는 프로세스를 구축했습니다.',
    before: '주간 2명 × 2.5일',
    after: '주간 2명 × 1일',
    percent: 60,
  },
  {
    title: '반복 작업 자동화 툴',
    star: false,
    tech: 'AutoHotkey',
    description:
      'QA에 필요한 테스트 사전 환경을 셋업할 때 다수의 PC를 수동으로 조작하는 단순 반복적인 작업들이 많았습니다. 이를 자동화하여 세팅 시간을 줄이고 테스트 자체에 집중할 수 있는 환경을 만들어 팀에 배포했습니다.',
    before: 'N개 PC × 30분',
    after: '자동 실행',
    percent: 80,
  },
  {
    title: '리딩 일감 관리 자동화 툴',
    star: false,
    tech: 'Playwright · Excel VBA',
    description:
      '프로젝트 리딩 시 일감 관리와 팀 내 인력의 일정 페이지가 분리되어 있어 정보를 한 눈에 파악하기 어려운 이슈가 있었습니다. 하나의 엑셀 페이지에 웹 스크래핑을 통해 인력의 일정 정보를 노출시키고 수기로 진행하던 담당자 등록 업무를 자동화했습니다. VBA 버튼만 클릭하면 웹에 담당자가 자동으로 등록되도록 하였습니다.',
    before: '주 1~2시간 수기',
    after: '버튼 클릭',
    percent: 90,
  },
]

export default function AutomationSection() {
  const [ref, isInView] = useInView({ threshold: 0.05 })
  const [ref2, isInView2] = useInView({ threshold: 0.05 })

  return (
    <section id="automation" className="py-20 px-6">
      <div className="max-w-[1080px] mx-auto">
        {/* 자동 테스트 */}
        <div ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <span className="inline-block bg-badge text-white text-xs font-medium px-3 py-1 rounded-full mb-4">
              02 · Test Automation
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-txt-primary tracking-tight mb-3">
              자동 테스트
            </h2>
            <p className="text-txt-secondary">
              로우 레벨의 단순 반복 업무를 자동화하여 QA 리소스를 보다 중요한 검증 영역에 집중할 수 있도록 했습니다.
            </p>
          </motion.div>

          {/* 자동 테스트 개발 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="bg-white rounded-3xl p-7 md:p-8 mb-5"
          >
            <div className="flex items-start gap-3 mb-4">
              <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-txt-primary mt-2.5" />
              <h3 className="text-txt-primary font-bold text-xl">자동 테스트 개발</h3>
            </div>
            <div className="pl-[18px] space-y-3 mb-6">
              <p className="text-txt-secondary text-base leading-[1.8]">
                다음과 같은 영역을 자동화하여 인력 리소스를 절감했습니다.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {automationAreas.map((item, i) => (
                  <div key={i} className="bg-[#f9fafb] rounded-2xl p-5">
                    <h4 className="text-base text-txt-primary font-semibold mb-1">{item.title}</h4>
                    <p className="text-txt-secondary text-[15px] leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-txt-secondary text-base leading-[1.8]">
                또한 신규 개발 기능에 대해서도 자동화 범위를 확장했습니다.
                엘릭서, 스펠카드, 럭키백 등 인게임 신규 시스템에 대해 테스트 시나리오 작성, 설계, 스크립트 구현까지 전 과정을 담당했으며,
                라이브 이후에도 반복 검증이 가능하도록 자동화하여 신규 콘텐츠에 대한 테스트 커버리지를 지속적으로 확보했습니다.
              </p>
            </div>
          </motion.div>

          {/* 유지보수 및 안정화 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="bg-white rounded-3xl p-7 md:p-8 mb-5"
          >
            <div className="flex items-start gap-3 mb-3">
              <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-txt-primary mt-2.5" />
              <h3 className="text-txt-primary font-bold text-xl">자동 테스트 유지보수 및 안정화</h3>
            </div>
            <div className="pl-[18px] space-y-2">
              <p className="text-txt-secondary text-base leading-[1.8]">
                자동 테스트 결과를 지속적으로 모니터링하며, 인게임 이슈와 스크립트 이슈를 구분하여 대응했습니다.
                이슈의 원인에 따라 이슈를 등록하거나 스크립트를 주기적으로 개선하는 방향으로 대처했습니다.
              </p>
              <p className="text-txt-secondary text-base leading-[1.8]">
                인게임 이슈의 경우 빠른 이슈 등록과 전달을 통해 빌드 안정성을 확보했고,
                스크립트 이슈의 경우 빠른 이슈 대응 혹은 구조적 개선을 통해 자동 테스트의 안정성을 확보했습니다.
              </p>
            </div>
          </motion.div>
        </div>

        {/* 효율화 도구 */}
        <div ref={ref2} className="mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView2 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-5"
          >
            <div className="flex items-start gap-3 mb-2">
              <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-txt-primary mt-3" />
              <h3 className="text-txt-primary font-bold text-xl">QA 효율화 도구 개발</h3>
            </div>
            <p className="text-txt-secondary text-base pl-[18px] mb-8">
              업무 도중에서 발생할 수 있는 비효율적인 부분을 찾아내고 개선하기 위해 노력합니다.
              업무 전반에 대해 검토하고 비효율을 개선하는 도구를 직접 기획하고 개발했습니다.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {efficiencyTools.map((tool, i) => (
              <MetricCard
                key={i}
                before={tool.before}
                after={tool.after}
                percent={tool.percent}
                label={
                  <>
                    {tool.star && <span className="text-yellow-500 mr-1">★</span>}
                    {tool.title}
                  </>
                }
                description={
                  <>
                    <span className="inline-block text-xs text-txt-tertiary bg-[#f2f4f6] px-2 py-0.5 rounded-full mb-2 font-mono">
                      {tool.tech}
                    </span>
                    <br />
                    {tool.description}
                  </>
                }
                delay={0.12 * i}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
