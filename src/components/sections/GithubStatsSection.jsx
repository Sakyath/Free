import React, { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { SectionHeader, GlassCard, IconBadge } from '../ui/Primitives'
import { Icon } from '../ui/Icons'

const GITHUB_USER = 'Sakyath'

const quickStats = [
  { label: 'Public Repositories', value: '15+', icon: Icon.folder, color: '#60A5FA' },
  { label: 'Projects Delivered', value: '10+', icon: Icon.check, color: '#34D399' },
  { label: 'Languages Used', value: '6+', icon: Icon.language, color: '#A78BFA' },
]

function StatImage({ src, alt, tall }) {
  const [failed, setFailed] = useState(false)
  if (failed) {
    return (
      <div style={{
        height: tall ? '200px' : '150px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: '#94A3B8', fontSize: '13px', textAlign: 'center', padding: '20px',
      }}>
        Live GitHub stats unavailable right now — view the profile directly on GitHub.
      </div>
    )
  }
  return (
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '14px' }}
      loading="lazy"
    />
  )
}

export default function GithubStatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="github" ref={ref} style={{ padding: '120px 5vw', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <SectionHeader
        eyebrow="Open Source Activity"
        title="Consistency shows up"
        highlight="in the commits"
        subtitle="A live look at my GitHub activity — day in, day out."
        isInView={isInView}
      />

      {/* Quick stat chips */}
      <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '32px', width: '100%', maxWidth: '900px' }}>
        {quickStats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
            style={{ flex: '1 1 220px' }}
          >
            <GlassCard hoverColor={s.color} style={{ padding: '20px 24px', display: 'flex', alignItems: 'center', gap: '14px' }}>
              <IconBadge color={s.color} size={42}>{s.icon({ width: 20, height: 20 })}</IconBadge>
              <div>
                <div style={{ fontSize: '20px', fontWeight: 800, color: '#0F172A', fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1 }}>
                  {s.value}
                </div>
                <div style={{ fontSize: '12px', color: '#64748B', marginTop: '4px' }}>{s.label}</div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '20px', width: '100%', maxWidth: '1000px' }}>
        {/* Contribution graph */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ gridColumn: '1 / -1' }}
        >
          <GlassCard hoverColor="#60A5FA" style={{ padding: '24px' }}>
            <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#334155', marginBottom: '14px' }}>Contribution Activity</h3>
            <StatImage
              src={`https://ghchart.rshah.org/60A5FA/${GITHUB_USER}`}
              alt={`${GITHUB_USER}'s GitHub contribution graph`}
              tall
            />
          </GlassCard>
        </motion.div>

        {/* Stats card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <GlassCard hoverColor="#A78BFA" style={{ padding: '24px' }}>
            <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#334155', marginBottom: '14px' }}>GitHub Stats</h3>
            <StatImage
              src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USER}&show_icons=true&theme=transparent&hide_border=true&text_color=475569&icon_color=60A5FA&title_color=0F172A`}
              alt={`${GITHUB_USER}'s GitHub stats`}
            />
          </GlassCard>
        </motion.div>

        {/* Top languages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <GlassCard hoverColor="#34D399" style={{ padding: '24px' }}>
            <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#334155', marginBottom: '14px' }}>Top Languages</h3>
            <StatImage
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USER}&layout=compact&theme=transparent&hide_border=true&text_color=475569&title_color=0F172A`}
              alt={`${GITHUB_USER}'s most used languages`}
            />
          </GlassCard>
        </motion.div>
      </div>

      <motion.a
        href={`https://github.com/${GITHUB_USER}`}
        target="_blank"
        rel="noopener noreferrer"
        data-hoverable
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.6 }}
        whileHover={{ y: -2 }}
        className="glow-btn glow-btn-outline"
        style={{ marginTop: '32px' }}
      >
        {Icon.github({ width: 18, height: 18 })}
        View Full Profile on GitHub
      </motion.a>
    </section>
  )
}
