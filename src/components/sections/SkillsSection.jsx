import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SectionHeader, GlassCard, IconBadge } from '../ui/Primitives'

const categories = [
  {
    title: 'Frontend',
    color: '#60A5FA',
    icon: '🎨',
    skills: [
      { name: 'React.js', level: 92 },
      { name: 'JavaScript (ES6+)', level: 90 },
      { name: 'HTML5 / CSS3', level: 95 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'Bootstrap', level: 82 },
    ],
  },
  {
    title: 'Backend',
    color: '#A78BFA',
    icon: '⚙️',
    skills: [
      { name: 'Node.js', level: 82 },
      { name: 'Express.js', level: 80 },
      { name: 'REST APIs', level: 88 },
      { name: 'Spring Boot', level: 70 },
      { name: '.NET MVC', level: 68 },
    ],
  },
  {
    title: 'Testing',
    color: '#34D399',
    icon: '🧪',
    skills: [
      { name: 'Manual Testing', level: 92 },
      { name: 'Selenium', level: 86 },
      { name: 'Playwright', level: 85 },
      { name: 'API Testing', level: 88 },
      { name: 'SQL', level: 78 },
    ],
  },
  {
    title: 'Tools',
    color: '#FBBF24',
    icon: '🔧',
    skills: [
      { name: 'Git / GitHub', level: 92 },
      { name: 'Postman', level: 88 },
      { name: 'Jira', level: 80 },
      { name: 'VS Code', level: 95 },
      { name: 'CI/CD', level: 70 },
    ],
  },
  {
    title: 'Cloud',
    color: '#6EE7F9',
    icon: '☁️',
    skills: [
      { name: 'Azure', level: 72 },
      { name: 'Firebase', level: 80 },
      { name: 'Vercel', level: 88 },
      { name: 'MongoDB Atlas', level: 72 },
    ],
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
