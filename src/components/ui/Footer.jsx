import React from 'react'
import { Icon } from './Icons'

const links = [
  { label: 'GitHub', href: 'https://github.com/Sakyath' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sakyathbonagiri' },
  { label: 'Email', href: 'mailto:bonagirisakyath@gmail.com' },
]

export default function Footer() {
  return (
    <footer style={{ padding: '40px 5vw 32px', position: 'relative' }}>
      <div
        className="glass-light"
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '24px clamp(20px, 4vw, 36px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
        }}
      >
        <span style={{ fontSize: '13px', color: '#64748B' }}>
          © {new Date().getFullYear()}{' '}
          <span className="gradient-text" style={{ fontWeight: 600 }}>Sakyath Bonagiri</span>
          . All rights reserved.
        </span>

        <div style={{ display: 'flex', gap: '10px' }}>
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith('http') ? '_blank' : undefined}
              rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={l.label}
              data-hoverable
              style={{
                width: '36px', height: '36px', borderRadius: '11px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: 'rgba(255,255,255,0.55)',
                border: '1px solid rgba(255,255,255,0.4)',
                color: '#64748B',
                transition: 'all 0.3s ease',
              }}
            >
              {l.label === 'GitHub' && Icon.github({ width: 16, height: 16 })}
              {l.label === 'LinkedIn' && (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
                </svg>
              )}
              {l.label === 'Email' && (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              )}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
