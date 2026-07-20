import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SectionHeader, GlassCard, IconBadge } from '../ui/Primitives'

const skillCategories = [
  {
    title: 'Languages',
    icon: '⚡',
    color: '#60A5FA',
    skills: ['Java', 'JavaScript', 'Python', 'C'],
  },
  {
    title: 'Frontend Development',
    icon: '🎨',
    color: '#6EE7F9',
    skills: ['React.js', 'HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS', 'Framer Motion', 'Responsive UI'],
  },
  {
    title: 'Backend Development',
    icon: '⚙️',
    color: '#A78BFA',
    skills: ['Node.js', 'Express.js', 'Spring Boot', '.NET MVC', 'REST APIs', 'JWT'],
  },
  {
    title: 'Databases',
    icon: '🗄️',
    color: '#60A5FA',
    skills: ['MySQL', 'PostgreSQL', 'SQL Server', 'MongoDB', 'Firebase'],
  },
  {
    title: 'Testing & QA',
    icon: '🧪',
    color: '#6EE7F9',
    skills: ['Manual Testing', 'Functional Testing', 'Regression Testing', 'Smoke Testing', 'Sanity Testing', 'Exploratory Testing', 'UAT'],
  },
  {
    title: 'Automation & API Testing',
    icon: '⚙️',
    color: '#A78BFA',
    skills: ['Selenium', 'Cypress', 'Playwright', 'Postman', 'JMeter', 'REST Assured', 'Swagger', 'Appium'],
  },
  {
    title: 'Tools & Workflow',
    icon: '🔧',
    color: '#FBBF24',
    skills: ['Jira', 'TestRail', 'Zephyr', 'Git', 'GitHub', 'Docker', 'Vite', 'VS Code', 'CI/CD'],
  },
  {
    title: 'Professional Strengths',
    icon: '⭐',
    color: '#F87171',
    skills: ['Agile/Scrum', 'SDLC', 'STLC', 'Bug Tracking', 'Problem Solving', 'Cross-browser Testing', 'Freelance Delivery'],
  },
]

function SkillBar({ skill, color, isInView, delay }) {
  return (
    <div style={{ marginBottom: '16px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
        <span style={{ fontSize: '13px', fontWeight: 600, color: '#334155' }}>{skill.name}</span>
        <span style={{ fontSize: '12px', fontWeight: 600, color }}>{skill.level}%</span>
      </div>
      <div style={{
        width: '100%', height: '6px', borderRadius: '4px',
        background: 'rgba(100,116,139,0.12)', overflow: 'hidden',
      }}>
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] }}
          style={{
            height: '100%',
            borderRadius: '4px',
            background: `linear-gradient(90deg, ${color}, ${color}99)`,
            boxShadow: `0 0 12px ${color}55`,
          }}
        />
      </div>
    </div>
  )
}

export default function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" ref={ref} style={{ padding: '120px 5vw', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <SectionHeader
        eyebrow="Skills & Expertise"
        title="My"
        highlight="Tech Stack"
        subtitle="A balanced toolkit spanning modern frontend development, backend integration, and professional QA."
        isInView={isInView}
      />

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '20px',
        width: '100%',
        maxWidth: '1180px',
      }}>
        {categories.map((cat, ci) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: ci * 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <GlassCard hoverColor={cat.color} style={{ padding: '26px', height: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '22px' }}>
                <IconBadge color={cat.color} size={44}>
                  <span style={{ fontSize: '19px' }}>{cat.icon}</span>
                </IconBadge>
                <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#0F172A', fontFamily: "'Space Grotesk', sans-serif" }}>
                  {cat.title}
                </h3>
              </div>
              {cat.skills.map((s, si) => (
                <SkillBar key={s.name} skill={s} color={cat.color} isInView={isInView} delay={0.2 + ci * 0.05 + si * 0.08} />
              ))}
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
