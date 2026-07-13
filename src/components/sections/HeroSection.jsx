import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Icon } from '../ui/Icons'

const taglines = [
  'so your product ships without surprises.',
  'so bugs get caught before your users find them.',
  'so your team can move fast, with confidence.',
]

const socials = [
  { label: 'GitHub', href: 'https://github.com/Sakyath', icon: Icon.github, color: '#0F172A' },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sakyathbonagiri',
    color: '#60A5FA',
    icon: (p) => (
      <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:bonagirisakyath@gmail.com',
    color: '#A78BFA',
    icon: (p) => (
      <svg {...p} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
]

export default function HeroSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [taglineIndex, setTaglineIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  // Typing effect for the rotating benefit line
  useEffect(() => {
    const current = taglines[taglineIndex]
    let timeout

    if (!isDeleting) {
      if (displayText.length < current.length) {
        timeout = setTimeout(() => {
          setDisplayText(current.slice(0, displayText.length + 1))
        }, 32 + Math.random() * 24)
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2200)
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 18)
      } else {
        setIsDeleting(false)
        setTaglineIndex((prev) => (prev + 1) % taglines.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, taglineIndex])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 32, filter: 'blur(8px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  }

  const scrollTo = (id) => (e) => {
    e.preventDefault()
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      ref={ref}
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '140px 5vw 80px',
        position: 'relative',
      }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        style={{ maxWidth: '720px', position: 'relative', zIndex: 2 }}
      >
        {/* Availability badge */}
        <motion.div variants={itemVariants}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 18px',
            borderRadius: '100px',
            background: 'rgba(52,211,153,0.10)',
            border: '1px solid rgba(52,211,153,0.25)',
            marginBottom: '28px',
            fontSize: '13px',
            fontWeight: 600,
            color: '#0F9D6E',
          }}>
            <span style={{
              width: '8px', height: '8px', borderRadius: '50%',
              background: '#34D399',
              boxShadow: '0 0 8px rgba(52,211,153,0.6)',
              animation: 'pulse-glow 2s ease-in-out infinite',
            }} />
            Available for freelance projects
          </div>
        </motion.div>

        {/* Headline — leads with the client problem being solved */}
        <motion.h1
          variants={itemVariants}
          style={{
            fontSize: 'clamp(2.4rem, 5.4vw, 4rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: '22px',
            color: '#0F172A',
            fontFamily: "'Space Grotesk', sans-serif",
          }}
        >
          I build web apps that work —
          <br />
          <span className="gradient-text">and prove they work.</span>
        </motion.h1>

        {/* Short description */}
        <motion.p
          variants={itemVariants}
          style={{
            fontSize: 'clamp(1rem, 1.6vw, 1.15rem)',
            color: '#475569',
            lineHeight: 1.75,
            marginBottom: '18px',
            maxWidth: '580px',
            fontWeight: 400,
          }}
        >
          I'm <strong style={{ color: '#0F172A', fontWeight: 700 }}>Sakyath Bonagiri</strong>, a full-stack
          developer and QA engineer for hire. I design, build, and rigorously test React
          applications, APIs, and landing pages for founders and businesses who can't afford launch-day bugs.
        </motion.p>

        {/* Typing benefit line */}
        <motion.div
          variants={itemVariants}
          style={{
            fontSize: 'clamp(0.95rem, 1.6vw, 1.05rem)',
            color: '#60A5FA',
            fontWeight: 600,
            marginBottom: '36px',
            minHeight: '28px',
          }}
        >
          <span>{displayText}</span>
          <span style={{
            display: 'inline-block', width: '2px', height: '1.1em',
            background: 'linear-gradient(180deg, #60A5FA, #A78BFA)',
            marginLeft: '2px', verticalAlign: 'text-bottom',
            animation: 'blink 1s step-end infinite',
          }} />
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="hero-buttons"
          style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '40px' }}
        >
          <a href="#contact" className="glow-btn" data-hoverable onClick={scrollTo('#contact')}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            Hire Me
          </a>
          <a href="#projects" className="glow-btn glow-btn-outline" data-hoverable onClick={scrollTo('#projects')}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m6 17 5-5-5-5" /><path d="m13 17 5-5-5-5" />
            </svg>
            View Projects
          </a>
        </motion.div>

        {/* Socials + tagline */}
        <motion.div
          variants={itemVariants}
          style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}
        >
          <div style={{ display: 'flex', gap: '10px' }}>
            {socials.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={s.label}
                data-hoverable
                whileHover={{ y: -3, scale: 1.06 }}
                style={{
                  width: '42px', height: '42px', borderRadius: '13px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'rgba(255,255,255,0.6)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255,255,255,0.4)',
                  boxShadow: '0 4px 16px rgba(96,165,250,0.08)',
                  color: s.color,
                }}
              >
                {s.icon({ width: 18, height: 18 })}
              </motion.a>
            ))}
          </div>
          <div style={{ width: '1px', height: '24px', background: 'rgba(100,116,139,0.2)' }} />
          <span style={{ fontSize: '13px', color: '#94A3B8' }}>
            Web Development &amp; Software Testing
          </span>
        </motion.div>
      </motion.div>

      <style>{`
        @keyframes blink { 50% { opacity: 0; } }
      `}</style>
    </section>
  )
}
