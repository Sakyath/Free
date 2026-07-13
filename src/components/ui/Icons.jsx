import React from 'react'

const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export const Icon = {
  code: (p) => (
    <svg {...base} {...p}><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
  ),
  atom: (p) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
      <ellipse cx="12" cy="12" rx="9" ry="3.6" />
      <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(120 12 12)" />
    </svg>
  ),
  layout: (p) => (
    <svg {...base} {...p}><rect x="3" y="4" width="18" height="16" rx="2" /><line x1="3" y1="10" x2="21" y2="10" /><line x1="9" y1="10" x2="9" y2="20" /></svg>
  ),
  plug: (p) => (
    <svg {...base} {...p}><path d="M9 2v4" /><path d="M15 2v4" /><path d="M6 8h12v3a6 6 0 0 1-12 0z" /><path d="M12 17v5" /></svg>
  ),
  bug: (p) => (
    <svg {...base} {...p}>
      <rect x="8" y="8" width="8" height="10" rx="4" />
      <path d="M12 8V5" /><path d="M9 5 7 3" /><path d="M15 5l2-2" />
      <path d="M4 11h4" /><path d="M16 11h4" /><path d="M4 15h4" /><path d="M16 15h4" />
      <path d="M6 19l3-2" /><path d="M18 19l-3-2" />
    </svg>
  ),
  wrench: (p) => (
    <svg {...base} {...p}><path d="M14.7 6.3a4 4 0 0 0-5.66 4.9L3 17.24V21h3.76l6.04-6.04a4 4 0 0 0 4.9-5.66l-2.83 2.83-2.12-2.12z" /></svg>
  ),
  clipboardCheck: (p) => (
    <svg {...base} {...p}>
      <rect x="6" y="4" width="12" height="17" rx="2" />
      <path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1" />
      <path d="M9 13l2 2 4-4" />
    </svg>
  ),
  gear: (p) => (
    <svg {...base} {...p}>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-1.87-.34 1.7 1.7 0 0 0-1.04 1.56V21a2 2 0 0 1-4 0v-.09A1.7 1.7 0 0 0 9 19.35a1.7 1.7 0 0 0-1.87.34l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.65 15a1.7 1.7 0 0 0-1.56-1.04H3a2 2 0 0 1 0-4h.09A1.7 1.7 0 0 0 4.65 9a1.7 1.7 0 0 0-.34-1.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 9 4.65a1.7 1.7 0 0 0 1.04-1.56V3a2 2 0 0 1 4 0v.09A1.7 1.7 0 0 0 15 4.65a1.7 1.7 0 0 0 1.87-.34l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.7 1.7 0 0 0 19.35 9a1.7 1.7 0 0 0 1.56 1.04H21a2 2 0 0 1 0 4h-.09A1.7 1.7 0 0 0 19.4 15z" />
    </svg>
  ),
  zap: (p) => (
    <svg {...base} {...p}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
  ),
  repeat: (p) => (
    <svg {...base} {...p}><path d="M17 2l4 4-4 4" /><path d="M3 11V9a4 4 0 0 1 4-4h14" /><path d="M7 22l-4-4 4-4" /><path d="M21 13v2a4 4 0 0 1-4 4H3" /></svg>
  ),
  gauge: (p) => (
    <svg {...base} {...p}><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" /><path d="M12 15l3-4" /><path d="M4.6 19a9 9 0 1 1 14.8 0" /></svg>
  ),
  cloudUpload: (p) => (
    <svg {...base} {...p}><path d="M7 18a4.6 4.4 0 0 1 0-9 5 4.5 0 0 1 9.6-1.8A4 4 0 0 1 18 15" /><path d="M12 12v9" /><path d="M9 15l3-3 3 3" /></svg>
  ),
  check: (p) => (
    <svg {...base} {...p}><polyline points="20 6 9 17 4 12" /></svg>
  ),
  users: (p) => (
    <svg {...base} {...p}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
  ),
  shield: (p) => (
    <svg {...base} {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
  ),
  message: (p) => (
    <svg {...base} {...p}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
  ),
  clock: (p) => (
    <svg {...base} {...p}><circle cx="12" cy="12" r="9" /><polyline points="12 7 12 12 15 15" /></svg>
  ),
  compass: (p) => (
    <svg {...base} {...p}><circle cx="12" cy="12" r="9" /><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" /></svg>
  ),
  pencil: (p) => (
    <svg {...base} {...p}><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" /></svg>
  ),
  rocket: (p) => (
    <svg {...base} {...p}><path d="M4.5 16.5c-1.5 1.5-2 5-2 5s3.5-.5 5-2c.8-.8.8-2.2 0-3-.8-.8-2.2-.8-3 0z" /><path d="M12 15l-3-3a22 22 0 0 1 6-9.5c3-3 8-3 8-3s0 5-3 8a22 22 0 0 1-9.5 6z" /><circle cx="15" cy="9" r="1.5" /></svg>
  ),
  headset: (p) => (
    <svg {...base} {...p}><path d="M3 14v-2a9 9 0 0 1 18 0v2" /><rect x="3" y="14" width="5" height="7" rx="2" /><rect x="16" y="14" width="5" height="7" rx="2" /></svg>
  ),
  external: (p) => (
    <svg {...base} {...p}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
  ),
  github: (p) => (
    <svg {...base} {...p}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
  ),
  folder: (p) => (
    <svg {...base} {...p}><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
  ),
  language: (p) => (
    <svg {...base} {...p}><path d="M4 5h11" /><path d="M9 3v2" /><path d="M6 13c1-3 3-6 5-8 2 2 4 5 5 8" /><path d="M5 13h8" /><path d="M14 21l4-9 4 9" /><path d="M15.5 18h5" /></svg>
  ),
}
