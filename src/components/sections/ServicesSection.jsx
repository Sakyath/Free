import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SectionHeader, GlassCard, IconBadge } from '../ui/Primitives'
import { Icon } from '../ui/Icons'

const services = [
  { title: 'Website Development', desc: 'Custom, responsive websites built with clean, maintainable code from the ground up.', icon: Icon.code, color: '#60A5FA' },
  { title: 'React Development', desc: 'Fast, interactive UIs and single-page apps built with modern React best practices.', icon: Icon.atom, color: '#6EE7F9' },
  { title: 'Landing Pages', desc: 'Conversion-focused landing pages designed to turn visitors into customers.', icon: Icon.layout, color: '#A78BFA' },
  { title: 'API Integration', desc: 'Seamless integration with third-party services, payment gateways, and internal APIs.', icon: Icon.plug, color: '#60A5FA' },
  { title: 'Bug Fixing', desc: 'Fast, reliable fixes for tricky bugs in existing codebases — with root-cause analysis.', icon: Icon.bug, color: '#F87171' },
  { title: 'Website Maintenance', desc: 'Ongoing updates, monitoring, and support to keep your site running smoothly.', icon: Icon.wrench, color: '#FBBF24' },
  { title: 'Manual Testing', desc: 'Thorough exploratory and functional test coverage to catch issues before launch.', icon: Icon.clipboardCheck, color: '#34D399' },
  { title: 'Selenium Automation', desc: 'Automated regression test suites built with Selenium WebDriver for web apps.', icon: Icon.gear, color: '#A78BFA' },
  { title: 'Playwright Automation', desc: 'Modern, fast, and reliable end-to-end testing with Playwright.', icon: Icon.zap, color: '#6EE7F9' },
  { title: 'API Testing', desc: 'Robust API validation and test suites using Postman, REST Assured, and Newman.', icon: Icon.repeat, color: '#60A5FA' },
  { title: 'Performance Optimization', desc: 'Speed and performance tuning for faster load times and a smoother experience.', icon: Icon.gauge, color: '#FBBF24' },
  { title: 'Deployment', desc: 'Reliable CI/CD pipelines and deployment support to get your product live with confidence.', icon: Icon.cloudUpload, color: '#34D399' },
]

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="services" ref={ref} style={{ padding: '120px 5vw', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <SectionHeader
        eyebrow="What I Do"
        title="Services built around"
        highlight="your product's success"
        subtitle="From first line of code to final release checklist — development and quality assurance under one roof."
        isInView={isInView}
      />

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '20px',
        width: '100%',
        maxWidth: '1180px',
      }}>
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
          >
            <GlassCard hoverColor={s.color} style={{ padding: '26px', height: '100%' }}>
              <IconBadge color={s.color} size={46}>
                {s.icon({ width: 22, height: 22 })}
              </IconBadge>
              <h3 style={{
                fontSize: '16px', fontWeight: 700, color: '#0F172A',
                margin: '18px 0 8px', fontFamily: "'Space Grotesk', sans-serif",
              }}>
                {s.title}
              </h3>
              <p style={{ fontSize: '13.5px', lineHeight: 1.65, color: '#64748B' }}>
                {s.desc}
              </p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
