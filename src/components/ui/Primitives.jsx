import React from 'react'
import { motion } from 'framer-motion'

/* ============================================================
   Shared building blocks used across the redesigned sections.
   Keeping these in one place avoids re-writing the same
   header / card / badge markup in every section file.
   ============================================================ */

export function SectionHeader({ eyebrow, title, highlight, subtitle, isInView, align = 'center' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{
        textAlign: align,
        marginBottom: '56px',
        maxWidth: '640px',
        marginLeft: align === 'center' ? 'auto' : 0,
        marginRight: align === 'center' ? 'auto' : 0,
      }}
    >
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '16px',
        justifyContent: align === 'center' ? 'center' : 'flex-start',
      }}>
        <div style={{ width: '32px', height: '2px', background: 'linear-gradient(90deg, #60A5FA, #A78BFA)' }} />
        <span style={{
          fontSize: '13px', fontWeight: 600, color: '#60A5FA',
          letterSpacing: '2px', textTransform: 'uppercase',
        }}>
          {eyebrow}
        </span>
        {align === 'center' && (
          <div style={{ width: '32px', height: '2px', background: 'linear-gradient(90deg, #A78BFA, #60A5FA)' }} />
        )}
      </div>

      <h2 style={{
        fontSize: 'clamp(2rem, 4vw, 3rem)',
        fontWeight: 700,
        color: '#0F172A',
        marginBottom: subtitle ? '12px' : 0,
        lineHeight: 1.15,
      }}>
        {title} {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {subtitle && (
        <p style={{ color: '#64748B', fontSize: '15px', lineHeight: 1.7 }}>{subtitle}</p>
      )}
    </motion.div>
  )
}

export function GlassCard({ children, style, hoverColor = '#60A5FA', className = '', ...rest }) {
  const [isHovered, setIsHovered] = React.useState(false)
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-hoverable
      className={className}
      style={{
        position: 'relative',
        borderRadius: '24px',
        background: isHovered ? 'rgba(255,255,255,0.72)' : 'rgba(255,255,255,0.55)',
        backdropFilter: 'blur(26px)',
        WebkitBackdropFilter: 'blur(26px)',
        border: `1px solid ${isHovered ? `${hoverColor}35` : 'rgba(255,255,255,0.35)'}`,
        boxShadow: isHovered
          ? `0 22px 60px ${hoverColor}18, inset 0 1px 0 rgba(255,255,255,0.7)`
          : '0 8px 32px rgba(96,165,250,0.06), inset 0 1px 0 rgba(255,255,255,0.6)',
        transition: 'all 0.5s cubic-bezier(0.16,1,0.3,1)',
        transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
        overflow: 'hidden',
        ...style,
      }}
      {...rest}
    >
      <div style={{
        position: 'absolute', top: 0, left: '18%', right: '18%', height: '2px',
        background: `linear-gradient(90deg, transparent, ${hoverColor}, transparent)`,
        opacity: isHovered ? 0.7 : 0.15,
        transition: 'opacity 0.4s ease',
      }} />
      {children}
    </div>
  )
}

export function IconBadge({ children, color = '#60A5FA', size = 48 }) {
  return (
    <div style={{
      width: size,
      height: size,
      borderRadius: size * 0.32,
      background: `linear-gradient(135deg, ${color}1c, ${color}0a)`,
      border: `1px solid ${color}28`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color,
      flexShrink: 0,
    }}>
      {children}
    </div>
  )
}

export function Pill({ children, color = '#64748B' }) {
  return (
    <span style={{
      padding: '5px 12px',
      borderRadius: '9px',
      fontSize: '12px',
      fontWeight: 500,
      color,
      background: 'rgba(255,255,255,0.65)',
      border: '1px solid rgba(255,255,255,0.4)',
      whiteSpace: 'nowrap',
    }}>
      {children}
    </span>
  )
}
