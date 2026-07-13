import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SectionHeader, GlassCard, IconBadge, Pill } from '../ui/Primitives'
import { Icon } from '../ui/Icons'

const development = ['React', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'Node.js', 'REST APIs']
const testing = ['Selenium', 'Playwright', 'Postman', 'API Testing', 'Manual Testing', 'SQL', 'Bug Reporting']

export default function ExpertiseSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="expertise" ref={ref} style={{ padding: '120px 5vw', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <SectionHeader
        eyebrow="Dual Expertise"
        title="I don't just build it —"
        highlight="I break it, then fix it"
        subtitle="Most developers hand off untested code. I ship features and the test coverage that proves they work."
        isInView={isInView}
      />

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '28px',
        width: '100%',
        maxWidth: '920px',
      }}>
        {[
          { title: 'Development', desc: 'Building fast, responsive, production-ready interfaces and services.', icon: Icon.code, color: '#60A5FA', list: development },
          { title: 'Testing', desc: 'Making sure what gets built actually works, every release.', icon: Icon.clipboardCheck, color: '#34D399', list: testing },
        ].map((block, i) => (
          <motion.div
            key={block.title}
            initial={{ opacity: 0, y: 40, x: i === 0 ? -10 : 10 }}
            animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <GlassCard hoverColor={block.color} style={{ padding: 'clamp(28px, 4vw, 40px)', height: '100%' }}>
              <IconBadge color={block.color} size={56}>
                {block.icon({ width: 26, height: 26 })}
              </IconBadge>
              <h3 style={{
                fontSize: '22px', fontWeight: 700, color: '#0F172A',
                margin: '20px 0 8px', fontFamily: "'Space Grotesk', sans-serif",
              }}>
                {block.title}
              </h3>
              <p style={{ fontSize: '14px', color: '#64748B', lineHeight: 1.7, marginBottom: '22px' }}>
                {block.desc}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {block.list.map((item) => (
                  <Pill key={item} color={block.color}>{item}</Pill>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
