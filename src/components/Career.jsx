import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const timeline = [
  { period: '2025.01 ~ 현재', role: '팀 주간 리딩', company: '엔씨소프트 (현 엔씨큐에이)' },
  { period: '2023.01 ~ 현재', role: '자동테스트 담당', company: '엔씨소프트 (현 엔씨큐에이)' },
  { period: '2021.06 ~ 현재', role: '리니지W QA', company: '엔씨소프트 (현 엔씨큐에이)' },
  { period: '2021.02 ~ 2021.05', role: 'TL QA', company: '엔씨소프트' },
  { period: '2020.04 ~ 2020.12', role: '고객사 서버 관리 / 신규 웹 서비스 QA', company: '후지제록스' },
]

const skills = [
  { name: 'Python', color: 'bg-blue-50 text-blue-600' },
  { name: 'Selenium', color: 'bg-emerald-50 text-emerald-600' },
  { name: 'Appium', color: 'bg-purple-50 text-purple-600' },
  { name: 'Playwright', color: 'bg-orange-50 text-orange-600' },
  { name: 'Jira', color: 'bg-sky-50 text-sky-600' },
  { name: 'GitLab', color: 'bg-rose-50 text-rose-600' },
  { name: 'ChatGPT', color: 'bg-teal-50 text-teal-600' },
  { name: 'Cursor AI', color: 'bg-violet-50 text-violet-600' },
]

const awards = [
  { title: '대상', org: 'KB세종창의나눔 봉사단', date: '2017.02' },
  { title: '대상', org: '창의융합 프로젝트 경진대회', date: '2016.10' },
]

export default function Career() {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  return (
    <section id="career" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6" ref={ref}>
      <div className="max-w-[1080px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="inline-block bg-badge text-white text-xs font-medium px-3 py-1 rounded-full mb-4">
            Career Summary
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-txt-primary tracking-tight">
            경력 요약
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-5 sm:gap-6">
          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7"
          >
            <h3 className="text-xl font-bold text-txt-primary mb-6">경력 사항</h3>
            <div className="space-y-0">
              {timeline.map((item, i) => (
                <div key={i} className="relative pl-7 pb-6 last:pb-0">
                  <div className="absolute left-0 top-[6px] w-[10px] h-[10px] rounded-full bg-txt-primary" />
                  {i < timeline.length - 1 && (
                    <div className="absolute left-[4px] top-[18px] w-[2px] h-[calc(100%-12px)] bg-[#e5e8eb]" />
                  )}
                  <p className="text-[15px] text-txt-secondary font-mono mb-0.5">{item.period}</p>
                  <p className="text-base text-txt-primary font-semibold">{item.role}</p>
                  <p className="text-[15px] text-txt-secondary">{item.company}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-[#f2f4f6]">
              <h4 className="text-base font-bold text-txt-primary mb-3">학력</h4>
              <div className="pl-7 relative">
                <div className="absolute left-0 top-[6px] w-[10px] h-[10px] rounded-full bg-[#e5e8eb]" />
                <p className="text-[15px] text-txt-secondary font-mono mb-0.5">2012.03 ~ 2019.02</p>
                <p className="text-base text-txt-primary font-semibold">세종대학교</p>
                <p className="text-[15px] text-txt-secondary">정보통신공학과 / 학사 졸업</p>
              </div>
            </div>
          </motion.div>

          {/* Skills & Awards */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7"
            >
              <h3 className="text-xl font-bold text-txt-primary mb-5">사용 기술</h3>
              <div className="flex flex-wrap gap-2.5">
                {skills.map((skill) => (
                  <span key={skill.name} className={`px-4 py-2 rounded-full text-sm font-medium ${skill.color}`}>
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7"
            >
              <h3 className="text-xl font-bold text-txt-primary mb-5">수상 경력</h3>
              <div className="space-y-4">
                {awards.map((award, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-2xl bg-[#fff8e1] flex items-center justify-center text-lg">
                      🏆
                    </div>
                    <div>
                      <p className="text-base text-txt-primary font-semibold">{award.title}</p>
                      <p className="text-[15px] text-txt-secondary">{award.org} · {award.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
