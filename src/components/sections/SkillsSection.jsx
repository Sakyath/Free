import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SectionHeader, GlassCard, IconBadge } from '../ui/Primitives'

<<<<<<< HEAD
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
=======
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
>>>>>>> a7cd96b (Update portfolio sections)
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
<<<<<<< HEAD
    </div>
=======
    </motion.div>
  )
}

/* ---- Neural Network Visualization ---- */
function NeuralNetwork({ isInView }) {
  const nodes = [
    // Input layer
    { x: 80, y: 60, label: 'QA', color: '#60A5FA' },
    { x: 80, y: 130, label: 'React', color: '#6EE7F9' },
    { x: 80, y: 200, label: 'Node.js', color: '#A78BFA' },
    { x: 80, y: 270, label: 'Automation', color: '#60A5FA' },
    // Hidden layer
    { x: 250, y: 95, label: 'Testing', color: '#6EE7F9' },
    { x: 250, y: 165, label: 'Development', color: '#A78BFA' },
    { x: 250, y: 235, label: 'APIs', color: '#60A5FA' },
    // Output
    { x: 420, y: 150, label: 'Quality', color: '#A78BFA' },
  ]

  const connections = [
    [0,4],[0,5],[0,6],
    [1,4],[1,5],
    [2,5],[2,6],
    [3,4],[3,5],[3,6],
    [4,7],[5,7],[6,7],
  ]

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 1, delay: 0.3 }}
      style={{
        width: '100%',
        maxWidth: '500px',
        margin: '0 auto 48px',
        padding: '20px',
      }}
    >
      <svg viewBox="0 0 500 320" style={{ width: '100%', height: 'auto' }}>
        {/* Connections */}
        {connections.map(([from, to], i) => (
          <motion.line
            key={i}
            x1={nodes[from].x}
            y1={nodes[from].y}
            x2={nodes[to].x}
            y2={nodes[to].y}
            stroke="url(#lineGrad)"
            strokeWidth="1"
            opacity="0.2"
            initial={{ pathLength: 0 }}
            animate={isInView ? { pathLength: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.5 + i * 0.05 }}
          />
        ))}

        {/* Animated pulse along connections */}
        {connections.map(([from, to], i) => (
          <motion.circle
            key={`pulse-${i}`}
            r="2"
            fill={nodes[from].color}
            opacity="0.5"
            initial={{ cx: nodes[from].x, cy: nodes[from].y }}
            animate={isInView ? {
              cx: [nodes[from].x, nodes[to].x],
              cy: [nodes[from].y, nodes[to].y],
              opacity: [0, 0.6, 0],
            } : {}}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Nodes */}
        {nodes.map((node, i) => (
          <g key={i}>
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="24"
              fill={`${node.color}10`}
              stroke={node.color}
              strokeWidth="1.5"
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
            />
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="28"
              fill="none"
              stroke={node.color}
              strokeWidth="0.5"
              opacity="0.2"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: [1, 1.3, 1] } : {}}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
            />
            <text
              x={node.x}
              y={node.y + 1}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#475569"
              fontSize="9"
              fontWeight="600"
              fontFamily="'Inter', sans-serif"
            >
              {node.label}
            </text>
          </g>
        ))}

        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="100%" stopColor="#A78BFA" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
>>>>>>> a7cd96b (Update portfolio sections)
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
