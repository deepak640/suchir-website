'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { timelineItems } from '@/lib/data';

function TimelineEntry({
  item,
  index,
  isLast,
}: {
  item: (typeof timelineItems)[0];
  index: number;
  isLast: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <div
      ref={ref}
      style={{
        display: 'grid',
        gridTemplateColumns: '10rem 1px 1fr',
        gap: '0 3rem',
        position: 'relative',
      }}
      className="timeline-entry"
    >
      {/* ── Year column ── */}
      <div className="timeline-year" style={{ paddingTop: '0.15rem', textAlign: 'right' }}>
        <motion.span
          initial={{ opacity: 0, x: -24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
          className="font-heading"
          style={{
            fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
            fontWeight: 700,
            color: '#C8A15A',
            display: 'block',
            lineHeight: 1,
          }}
        >
          {item.year}
        </motion.span>
      </div>

      {/* ── Spine ── */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* dot */}
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.35, delay: index * 0.08 + 0.1 }}
          style={{
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            background: '#C8A15A',
            flexShrink: 0,
            marginTop: '0.3rem',
            boxShadow: '0 0 12px rgba(200,161,90,0.45)',
          }}
        />
        {/* line */}
        {!isLast && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 + 0.25 }}
            style={{
              flex: 1,
              width: '1px',
              background: 'linear-gradient(to bottom, rgba(200,161,90,0.5), rgba(200,161,90,0.05))',
              transformOrigin: 'top',
              minHeight: '80px',
              marginTop: '6px',
            }}
          />
        )}
      </div>

      {/* ── Content ── */}
      <motion.div
        initial={{ opacity: 0, x: 28 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 + 0.1 }}
        style={{ paddingBottom: isLast ? '0' : 'clamp(2rem, 5vw, 4rem)' }}
      >
        <p
          className="font-body"
          style={{
            fontSize: '0.65rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#C8A15A',
            marginBottom: '0.4rem',
          }}
        >
          {item.subtitle}
        </p>
        <h3
          className="font-heading"
          style={{
            fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
            fontWeight: 700,
            color: '#F5F5F5',
            lineHeight: 1.15,
            marginBottom: '0.85rem',
          }}
        >
          {item.title}
        </h3>
        <p
          className="font-body"
          style={{
            color: '#A1A1A1',
            fontSize: '0.9375rem',
            lineHeight: 1.8,
            maxWidth: '580px',
          }}
        >
          {item.description}
        </p>
      </motion.div>
    </div>
  );
}

export default function Timeline() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' });

  return (
    <section
      id="journey"
      style={{ background: '#0E0E0E', padding: 'clamp(3.5rem, 8vw, 7rem) 0', position: 'relative', overflow: 'hidden' }}
    >
      {/* Ghost year watermark */}
      <div
        className="font-heading"
        style={{
          position: 'absolute',
          right: '-2rem',
          top: '50%',
          transform: 'translateY(-50%)',
          fontSize: 'clamp(10rem, 22vw, 22rem)',
          fontWeight: 900,
          color: 'rgba(200,161,90,0.025)',
          letterSpacing: '-0.04em',
          userSelect: 'none',
          pointerEvents: 'none',
          lineHeight: 1,
        }}
      >
        '13
      </div>

      <div className="site-container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div ref={headerRef} style={{ marginBottom: 'clamp(2.5rem, 5vw, 5rem)' }}>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-body"
            style={{
              color: '#C8A15A',
              fontSize: '0.7rem',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
            }}
          >
            <span style={{ width: '2rem', height: '1px', background: '#C8A15A', flexShrink: 0 }} />
            The Journey
          </motion.p>

          <div style={{ overflow: 'hidden' }}>
            <motion.h2
              initial={{ y: '110%' }}
              animate={headerInView ? { y: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="font-heading"
              style={{
                fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)',
                fontWeight: 700,
                color: '#F5F5F5',
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                margin: 0,
              }}
            >
              A decade of{' '}
              <span className="italic text-gradient">building.</span>
            </motion.h2>
          </div>
        </div>

        {/* Entries */}
        <div>
          {timelineItems.map((item, i) => (
            <TimelineEntry
              key={item.year + item.title}
              item={item}
              index={i}
              isLast={i === timelineItems.length - 1}
            />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .timeline-entry {
            grid-template-columns: 20px 1fr !important;
            gap: 0 1.25rem !important;
          }
          .timeline-year { display: none !important; }
        }
        @media (min-width: 641px) and (max-width: 900px) {
          .timeline-entry {
            grid-template-columns: 6rem 1px 1fr !important;
            gap: 0 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
