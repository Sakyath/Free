import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SectionHeader, GlassCard, IconBadge } from '../ui/Primitives'
import { Icon } from '../ui/Icons'

const reasons = [
  { title: 'Clean Code', desc: 'Readable, modular, well-documented code that\'s easy for any team to maintain.', icon: Icon.code, color: '#60A5FA' },
  { title: 'Responsive Design', desc: 'Every build looks and works great on mobile, tablet, and desktop.', icon: Icon.layout, color: '#6EE7F9' },
  { title: 'Fast Delivery', desc: 'Focused scoping and steady progress updates so nothing drags on.', icon: Icon.rocket, color: '#FBBF24' },
  { title: 'Quality Assurance', desc: 'A built-in testing mindset that catches bugs before your users do.', icon: Icon.shield, color: '#34D399' },
  { title: 'Communication', desc: 'Clear, responsive updates — you always know where the project stands.', icon: Icon.message, color: '#A78BFA' },
  { title: 'Long-term Support', desc: 'Available after launch for fixes, updates, and future improvements.', icon: Icon.headset, color: '#F87171' },
]

export default function WhyWorkWithMeSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="why-me" ref={ref} style={{ padding: '120px 5vw', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <SectionHeader
        eyebrow="Why Work With Me"
        title="A partner, not just a"
        highlight="freelancer"
        subtitle="Here's what clients consistently get when they bring me onto a project."
        isInView={isInView}
      />

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
        gap: '20px',
        width: '100%',
        maxWidth: '1100px',
      }}>
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
          >
            <GlassCard hoverColor={r.color} style={{ padding: '26px', height: '100%', textAlign: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <IconBadge color={r.color} size={48}>
                  {r.icon({ width: 22, height: 22 })}
                </IconBadge>
              </div>
              <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#0F172A', margin: '16px 0 8px', fontFamily: "'Space Grotesk', sans-serif" }}>
                {r.title}
              </h3>
              <p style={{ fontSize: '13.5px', lineHeight: 1.6, color: '#64748B' }}>
                {r.desc}
              </p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
