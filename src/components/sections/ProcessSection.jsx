import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SectionHeader } from '../ui/Primitives'
import { Icon } from '../ui/Icons'

const steps = [
  { title: 'Requirement Discussion', desc: 'We align on goals, scope, timeline, and success criteria before a line of code is written.', icon: Icon.message, color: '#60A5FA' },
  { title: 'Design', desc: 'Wireframes and UI direction so you can see and approve the plan early.', icon: Icon.pencil, color: '#6EE7F9' },
  { title: 'Development', desc: 'Clean, modular code built in focused, reviewable increments.', icon: Icon.code, color: '#A78BFA' },
  { title: 'Testing', desc: 'Manual and automated test passes to catch issues before they reach users.', icon: Icon.clipboardCheck, color: '#34D399' },
  { title: 'Deployment', desc: 'A smooth, verified release to production with zero-surprise launches.', icon: Icon.rocket, color: '#FBBF24' },
  { title: 'Support', desc: 'Post-launch monitoring and fixes so the product keeps running well.', icon: Icon.headset, color: '#F87171' },
]

function StepNode({ step, index, isInView, isLast }) {
  return (
    <div style={{ display: 'flex', gap: 'clamp(20px, 4vw, 40px)', position: 'relative', paddingBottom: isLast ? 0 : '40px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: '44px' }}>
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 + index * 0.12, type: 'spring' }}
          style={{
            width: '44px', height: '44px', borderRadius: '14px',
            background: `linear-gradient(135deg, ${step.color}22, ${step.color}0a)`,
            border: `1.5px solid ${step.color}40`,
            boxShadow: `0 0 20px ${step.color}25`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: step.color, flexShrink: 0, zIndex: 2,
          }}
        >
          {step.icon({ width: 20, height: 20 })}
        </motion.div>
        {!isLast && (
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: '100%' } : {}}
            transition={{ duration: 0.8, delay: 0.4 + index * 0.12 }}
            style={{ width: '2px', background: `linear-gradient(180deg, ${step.color}40, transparent)`, flex: 1, marginTop: '6px' }}
          />
        )}
      </div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.25 + index * 0.12 }}
        style={{ paddingTop: '4px', paddingBottom: '4px' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
          <span style={{ fontSize: '12px', fontWeight: 700, color: step.color }}>0{index + 1}</span>
          <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#0F172A', fontFamily: "'Space Grotesk', sans-serif" }}>
            {step.title}
          </h3>
        </div>
        <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#64748B', maxWidth: '460px' }}>
          {step.desc}
        </p>
      </motion.div>
    </div>
  )
}

export default function ProcessSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="process" ref={ref} style={{ padding: '120px 5vw', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <SectionHeader
        eyebrow="How I Work"
        title="My"
        highlight="Process"
        subtitle="A clear, predictable path from idea to a tested, deployed product."
        isInView={isInView}
      />

      <div style={{ maxWidth: '640px', width: '100%' }}>
        {steps.map((step, i) => (
          <StepNode key={step.title} step={step} index={i} isInView={isInView} isLast={i === steps.length - 1} />
        ))}
      </div>
    </section>
  )
}
