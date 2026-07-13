import React, { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const projects = [
  {
    title: 'QA Automation Framework for Web Applications',
    description: 'Built and maintained an end-to-end automation framework for modern web applications with regression suites, detailed defect reporting, and reliable quality assurance coverage.',
    image: '/images/project1.png',
    technologies: ['Selenium', 'Cypress', 'Playwright', 'JavaScript', 'Jira', 'TestRail'],
    color: '#60A5FA',
    category: 'QA & Testing',
    demoUrl: '',
    githubUrl: 'https://github.com/Sakyath',
  },
  {
    title: 'API & Performance Testing Suite',
    description: 'Designed comprehensive API validation, load testing, and performance monitoring workflows to improve service stability, reliability, and business confidence.',
    image: '/images/project2.png',
    technologies: ['Postman', 'JMeter', 'REST Assured', 'Swagger', 'Newman'],
    color: '#A78BFA',
    category: 'Software Testing',
    demoUrl: '',
    githubUrl: 'https://github.com/Sakyath',
  },
  {
    title: 'Civic Development & Governance Portal',
    description: 'Developed a professional portal focused on public-sector development initiatives, policy updates, citizen feedback, and project tracking with a secure and scalable interface.',
    image: '/images/project3.png',
    technologies: ['React.js', 'Node.js', 'Express', 'MySQL', 'REST APIs', 'JWT'],
    color: '#34D399',
    category: 'Development',
    demoUrl: '',
    githubUrl: 'https://github.com/Sakyath',
  },
  {
    title: 'Freelance Web & App Development Projects',
    description: 'Delivered client-focused web and app solutions with responsive interfaces, reusable components, database integration, and deployment support for businesses and startups.',
    image: '/images/project4.png',
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Firebase', 'GitHub', 'Vercel'],
    color: '#FBBF24',
    category: 'Freelance Development',
    demoUrl: '',
    githubUrl: 'https://github.com/Sakyath',
  },
]

function ProjectCard({ project, index, isInView, onSelect }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.92 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.8,
        delay: 0.2 + index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onSelect(project)}
      data-hoverable
      style={{
        position: 'relative',
        borderRadius: '28px',
        background: 'rgba(255,255,255,0.55)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        border: `1px solid ${isHovered ? `${project.color}30` : 'rgba(255,255,255,0.35)'}`,
        boxShadow: isHovered
          ? `0 24px 80px ${project.color}18, 0 0 0 1px rgba(255,255,255,0.2), inset 0 1px 0 rgba(255,255,255,0.6)`
          : '0 8px 32px rgba(96,165,250,0.06), inset 0 1px 0 rgba(255,255,255,0.6)',
        overflow: 'hidden',
        transition: 'all 0.5s cubic-bezier(0.16,1,0.3,1)',
        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
      }}
    >
      {/* Image area */}
      <div style={{
        position: 'relative',
        height: '240px',
        overflow: 'hidden',
        background: `linear-gradient(135deg, ${project.color}08, ${project.color}15)`,
      }}>
        {/* Placeholder pattern */}
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: '12px',
        }}>
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '20px',
            background: `linear-gradient(135deg, ${project.color}20, ${project.color}08)`,
            border: `1px solid ${project.color}25`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '28px',
            transition: 'all 0.4s ease',
            transform: isHovered ? 'scale(1.1) rotate(5deg)' : 'scale(1)',
          }}>
            {index === 0 ? '🏠' : index === 1 ? '🎓' : index === 2 ? '🛒' : index === 3 ? '✅' : index === 4 ? '👥' : index === 5 ? '💪' : index === 6 ? '🏘️' : '📚'}
          </div>
          <span style={{
            fontSize: '12px',
            fontWeight: 500,
            color: '#94A3B8',
            letterSpacing: '1px',
            textTransform: 'uppercase',
          }}>
            {project.category}
          </span>
        </div>

        {/* Hover overlay */}
        <motion.div
          animate={{ opacity: isHovered ? 1 : 0 }}
          style={{
            position: 'absolute',
            inset: 0,
            background: `linear-gradient(135deg, ${project.color}10, transparent)`,
            transition: 'opacity 0.4s ease',
          }}
        />

        {/* Category badge */}
        <div style={{
          position: 'absolute',
          top: '16px',
          left: '16px',
          padding: '6px 14px',
          borderRadius: '10px',
          background: 'rgba(255,255,255,0.8)',
          backdropFilter: 'blur(12px)',
          fontSize: '11px',
          fontWeight: 600,
          color: project.color,
          border: '1px solid rgba(255,255,255,0.5)',
        }}>
          {project.category}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '28px' }}>
        <h3 style={{
          fontSize: 'clamp(1.15rem, 2vw, 1.35rem)',
          fontWeight: 700,
          color: '#0F172A',
          marginBottom: '10px',
          fontFamily: "'Space Grotesk', sans-serif",
          lineHeight: 1.3,
        }}>
          {project.title}
        </h3>

        <p style={{
          fontSize: '14px',
          lineHeight: 1.7,
          color: '#64748B',
          marginBottom: '20px',
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}>
          {project.description}
        </p>

        {/* Tech tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
          {project.technologies.map((tech) => (
            <span
              key={tech}
              style={{
                padding: '4px 10px',
                borderRadius: '8px',
                fontSize: '11px',
                fontWeight: 500,
                color: '#64748B',
                background: 'rgba(255,255,255,0.6)',
                border: '1px solid rgba(255,255,255,0.4)',
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div style={{ display: 'flex', gap: '10px' }}>
          <motion.a
            href={project.demoUrl || '#'}
            target={project.demoUrl ? '_blank' : undefined}
            rel={project.demoUrl ? 'noopener noreferrer' : undefined}
            onClick={(e) => { e.stopPropagation(); if (!project.demoUrl) e.preventDefault() }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            data-hoverable
            style={{
              flex: 1,
              padding: '11px',
              borderRadius: '14px',
              border: 'none',
              background: `linear-gradient(135deg, ${project.color}, ${project.color}cc)`,
              color: '#fff',
              fontSize: '13px',
              fontWeight: 600,
              fontFamily: "'Inter', sans-serif",
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              textDecoration: 'none',
              boxShadow: `0 6px 20px ${project.color}30`,
              opacity: project.demoUrl ? 1 : 0.65,
              cursor: project.demoUrl ? 'pointer' : 'default',
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            Live Demo
          </motion.a>

          <motion.a
            href={project.githubUrl || '#'}
            target={project.githubUrl ? '_blank' : undefined}
            rel={project.githubUrl ? 'noopener noreferrer' : undefined}
            onClick={(e) => e.stopPropagation()}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            data-hoverable
            style={{
              flex: 1,
              padding: '11px',
              borderRadius: '14px',
              border: `1px solid ${project.color}25`,
              background: `${project.color}08`,
              color: project.color,
              fontSize: '13px',
              fontWeight: 600,
              fontFamily: "'Inter', sans-serif",
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              textDecoration: 'none',
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>
            </svg>
            GitHub
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}

/* ---- Project Modal ---- */
function ProjectModal({ project, onClose }) {
  if (!project) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(15,23,42,0.3)',
        backdropFilter: 'blur(12px)',
        padding: 'clamp(12px, 3vw, 20px)',
        overflowY: 'auto',
      }}
    >
      <motion.div
        initial={{ scale: 0.85, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.85, opacity: 0, y: 30 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: 'clamp(320px, 90vw, 640px)',
          width: '100%',
          maxHeight: '90vh',
          overflow: 'auto',
          borderRadius: '28px',
          background: 'rgba(255,255,255,0.85)',
          backdropFilter: 'blur(40px)',
          border: '1px solid rgba(255,255,255,0.5)',
          boxShadow: `0 32px 100px ${project.color}20, 0 0 0 1px rgba(255,255,255,0.3)`,
          padding: 'clamp(20px, 5vw, 36px)',
          position: 'relative',
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          data-hoverable
          style={{
            position: 'absolute',
            top: 'clamp(12px, 3vw, 16px)',
            right: 'clamp(12px, 3vw, 16px)',
            width: '36px',
            height: '36px',
            borderRadius: '12px',
            background: 'rgba(255,255,255,0.7)',
            border: '1px solid rgba(255,255,255,0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '18px',
            color: '#64748B',
            zIndex: 10,
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
        >
          ✕
        </button>

        {/* Project image area */}
        <div style={{
          height: 'clamp(140px, 25vw, 180px)',
          borderRadius: '20px',
          background: `linear-gradient(135deg, ${project.color}10, ${project.color}20)`,
          marginBottom: 'clamp(20px, 4vw, 28px)',
          marginTop: 'clamp(8px, 2vw, 16px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: '12px',
        }}>
          <div style={{
            width: 'clamp(60px, 12vw, 80px)', height: 'clamp(60px, 12vw, 80px)', borderRadius: '24px',
            background: `linear-gradient(135deg, ${project.color}25, ${project.color}10)`,
            border: `1px solid ${project.color}30`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 'clamp(24px, 8vw, 36px)',
          }}>
            {project.title.includes('Housing') ? '🏠' : project.title.includes('College') ? '🎓' : project.title.includes('E-Commerce') ? '🛒' : project.title.includes('Task') ? '✅' : project.title.includes('Social') ? '👥' : project.title.includes('Fitness') ? '💪' : project.title.includes('Real Estate') ? '🏘️' : '📚'}
          </div>
        </div>

        <span style={{
          display: 'inline-block',
          padding: '4px 12px',
          borderRadius: '8px',
          background: `${project.color}10`,
          border: `1px solid ${project.color}20`,
          fontSize: 'clamp(11px, 2vw, 12px)',
          fontWeight: 600,
          color: project.color,
          marginBottom: 'clamp(8px, 2vw, 12px)',
        }}>
          {project.category}
        </span>

        <h2 style={{
          fontSize: 'clamp(1.3rem, 4vw, 1.8rem)',
          fontWeight: 700,
          color: '#0F172A',
          marginBottom: 'clamp(12px, 2vw, 16px)',
          fontFamily: "'Space Grotesk', sans-serif",
          lineHeight: 1.3,
        }}>
          {project.title}
        </h2>

        <p style={{
          fontSize: 'clamp(13px, 2.5vw, 15px)',
          lineHeight: 1.8,
          color: '#475569',
          marginBottom: 'clamp(16px, 3vw, 24px)',
        }}>
          {project.description}
        </p>

        <h4 style={{
          fontSize: 'clamp(11px, 2vw, 13px)',
          fontWeight: 600,
          color: '#94A3B8',
          letterSpacing: '0.5px',
          textTransform: 'uppercase',
          marginBottom: 'clamp(8px, 2vw, 12px)',
        }}>
          Technologies Used
        </h4>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(6px, 2vw, 8px)' }}>
          {project.technologies.map((tech) => (
            <span
              key={tech}
              style={{
                padding: 'clamp(4px, 1vw, 6px) clamp(10px, 2vw, 14px)',
                borderRadius: '10px',
                fontSize: 'clamp(11px, 2vw, 13px)',
                fontWeight: 500,
                color: '#475569',
                background: 'rgba(255,255,255,0.7)',
                border: '1px solid rgba(255,255,255,0.4)',
                whiteSpace: 'nowrap',
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <>
      <section
        id="projects"
        ref={ref}
        style={{
          minHeight: '100vh',
          padding: '120px 5vw',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '56px', maxWidth: '600px' }}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '16px',
          }}>
            <div style={{
              width: '32px', height: '2px',
              background: 'linear-gradient(90deg, #60A5FA, #A78BFA)',
            }} />
            <span style={{
              fontSize: '13px', fontWeight: 600, color: '#60A5FA',
              letterSpacing: '2px', textTransform: 'uppercase',
            }}>
              Showroom
            </span>
            <div style={{
              width: '32px', height: '2px',
              background: 'linear-gradient(90deg, #A78BFA, #60A5FA)',
            }} />
          </div>

          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700,
            color: '#0F172A',
            marginBottom: '12px',
          }}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p style={{ color: '#64748B', fontSize: '15px', lineHeight: 1.6 }}>
            A showcase of applications built with passion and precision
          </p>
        </motion.div>

        {/* Project grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '28px',
          width: '100%',
          maxWidth: '1000px',
        }}>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              isInView={isInView}
              onSelect={setSelectedProject}
            />
          ))}
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  )
}
