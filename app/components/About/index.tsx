'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1] as const;

const ventures = [
  { year: '2013', name: 'Food Talk India',    role: "Co-Founder" },
  { year: '2018', name: 'Jade Forest',         role: "Founder" },
  { year: '2019', name: 'Gin Explorers Club',  role: "Co-Creator" },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="about"
      ref={ref}
      style={{
        background: '#0E0E0E',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* ── Section header strip ─────────────────────────────── */}
      <div
        style={{
          borderBottom: '1px solid rgba(200,161,90,0.1)',
          padding: '1.25rem clamp(1.5rem, 5vw, 5rem)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span style={{ width: '2rem', height: '1px', background: '#C8A15A', flexShrink: 0 }} />
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="font-body"
            style={{ fontSize: '0.65rem', letterSpacing: '0.22em', color: '#C8A15A', textTransform: 'uppercase' }}
          >
            About
          </motion.span>
        </div>
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-body"
          style={{ fontSize: '0.65rem', letterSpacing: '0.15em', color: '#333', textTransform: 'uppercase' }}
        >
          New Delhi, India
        </motion.span>
      </div>

      {/* ── Main two-column body ─────────────────────────────── */}
      <div className="site-container" style={{ paddingTop: '3rem', paddingBottom: '5rem' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem 4rem',
        }}
        className="about-body"
      >

        {/* ── LEFT: Portrait ── */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease, delay: 0.15 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '2rem',
          }}
        >
          {/* Portrait card */}
          <div
            style={{
              flex: 1,
              background: 'linear-gradient(160deg, #191919 0%, #111 100%)',
              border: '1px solid rgba(200,161,90,0.1)',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              minHeight: '340px',
            }}
          >
            {/* Corner accents */}
            <div style={{ position: 'absolute', top: '14px', right: '14px', width: '36px', height: '36px', borderTop: '1.5px solid #C8A15A', borderRight: '1.5px solid #C8A15A', opacity: 0.6 }} />
            <div style={{ position: 'absolute', bottom: '14px', left: '14px', width: '36px', height: '36px', borderBottom: '1.5px solid #C8A15A', borderLeft: '1.5px solid #C8A15A', opacity: 0.6 }} />

            {/* Monogram */}
            <div
              style={{
                width: '90px',
                height: '90px',
                borderRadius: '50%',
                background: '#1e1e1e',
                border: '1px solid rgba(200,161,90,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span className="font-heading text-gradient" style={{ fontSize: '2rem', fontWeight: 700 }}>SS</span>
            </div>
            <p className="font-body" style={{ color: '#2a2a2a', fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase' }}>
              Photo Placeholder
            </p>
          </div>

          {/* Caption row */}
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
            <div>
              <p className="font-heading" style={{ fontSize: '1.1rem', fontStyle: 'italic', color: '#C8A15A', opacity: 0.75, marginBottom: '0.2rem' }}>
                Shuchir Suri
              </p>
              <p className="font-body" style={{ fontSize: '0.7rem', color: '#3a3a3a', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Entrepreneur · Delhi
              </p>
            </div>
            <p className="font-body" style={{ fontSize: '0.7rem', color: '#2a2a2a', letterSpacing: '0.06em' }}>
              Est. 2013
            </p>
          </div>
        </motion.div>

        {/* ── RIGHT: Content ── */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease, delay: 0.25 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '2.5rem',
          }}
        >
          {/* Heading */}
          <div>
            <div style={{ overflow: 'hidden', marginBottom: '0.15rem' }}>
              <motion.h2
                initial={{ y: '100%' }}
                animate={inView ? { y: 0 } : {}}
                transition={{ duration: 0.85, ease, delay: 0.3 }}
                className="font-heading"
                style={{
                  fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                  fontWeight: 700,
                  color: '#F5F5F5',
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                  margin: 0,
                }}
              >
                Building experiences
              </motion.h2>
            </div>
            <div style={{ overflow: 'hidden' }}>
              <motion.h2
                initial={{ y: '100%' }}
                animate={inView ? { y: 0 } : {}}
                transition={{ duration: 0.85, ease, delay: 0.42 }}
                className="font-heading text-gradient"
                style={{
                  fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                  fontWeight: 700,
                  fontStyle: 'italic',
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                  margin: 0,
                }}
              >
                people remember.
              </motion.h2>
            </div>
          </div>

          {/* Bio */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
            <p className="font-body" style={{ color: '#A1A1A1', fontSize: '0.9375rem', lineHeight: 1.85 }}>
              Shuchir Suri is a Delhi-based entrepreneur working at the intersection of food,
              beverage, and experiential lifestyle. Over more than a decade he has co-founded
              brands that have shifted how urban India eats, drinks, and gathers.
            </p>
            <p className="font-body" style={{ color: '#A1A1A1', fontSize: '0.9375rem', lineHeight: 1.85 }}>
              Starting with <span style={{ color: '#F5F5F5' }}>Food Talk India</span> in 2013 —
              an invite-only community that became one of India&apos;s largest food networks — he went
              on to launch <span style={{ color: '#F5F5F5' }}>Jade Forest</span> (premium mixers,
              seed funded) and co-create the{' '}
              <span style={{ color: '#F5F5F5' }}>Gin Explorers Club</span>, India&apos;s largest gin festival.
            </p>
          </div>

          {/* Ventures list */}
          <div>
            <p
              className="font-body"
              style={{
                fontSize: '0.62rem',
                letterSpacing: '0.2em',
                color: '#444',
                textTransform: 'uppercase',
                marginBottom: '1rem',
              }}
            >
              Ventures
            </p>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {ventures.map(({ year, name, role }, i) => (
                <div
                  key={name}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.875rem 0',
                    borderTop: '1px solid rgba(200,161,90,0.08)',
                    borderBottom: i === ventures.length - 1 ? '1px solid rgba(200,161,90,0.08)' : 'none',
                    gap: '1rem',
                  }}
                >
                  <span className="font-body" style={{ fontSize: '0.7rem', color: '#444', flexShrink: 0, width: '3rem' }}>
                    {year}
                  </span>
                  <span className="font-body" style={{ fontSize: '0.9375rem', color: '#F5F5F5', flex: 1 }}>
                    {name}
                  </span>
                  <span
                    className="font-body"
                    style={{
                      fontSize: '0.65rem',
                      color: '#C8A15A',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      flexShrink: 0,
                      border: '1px solid rgba(200,161,90,0.2)',
                      padding: '0.2rem 0.6rem',
                    }}
                  >
                    {role}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {['Food & Beverage', 'Community', 'Brand Strategy'].map((tag) => (
              <span
                key={tag}
                className="font-body"
                style={{
                  fontSize: '0.65rem',
                  padding: '0.25rem 0.7rem',
                  border: '1px solid rgba(200,161,90,0.15)',
                  color: '#444',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-body { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  );
}
