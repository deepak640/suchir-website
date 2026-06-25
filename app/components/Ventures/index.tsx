'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { RiArrowRightUpLine } from 'react-icons/ri';
import { ventures } from '@/lib/data';

const nums = ['01', '02', '03'];

function VentureRow({
  venture,
  index,
}: {
  venture: (typeof ventures)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [hovered, setHovered] = useHoverState();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.12 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'grid',
        gridTemplateColumns: '5rem 1fr auto',
        gap: '2.5rem',
        alignItems: 'start',
        padding: '2.5rem 0',
        borderBottom: '1px solid rgba(200,161,90,0.1)',
        cursor: 'default',
        transition: 'background 0.4s',
        borderLeft: `3px solid ${hovered ? '#C8A15A' : 'transparent'}`,
        paddingLeft: hovered ? '1.5rem' : '0',
        transitionProperty: 'border-left-color, padding-left',
        transitionDuration: '0.35s',
      }}
      className="venture-row"
    >
      {/* Number */}
      <div>
        <span
          className="font-heading"
          style={{
            fontSize: '0.8rem',
            fontWeight: 700,
            color: hovered ? '#C8A15A' : 'rgba(200,161,90,0.3)',
            letterSpacing: '0.08em',
            transition: 'color 0.35s',
            display: 'block',
            marginTop: '0.25rem',
          }}
        >
          {nums[index]}
        </span>
        <span
          className="font-body"
          style={{
            fontSize: '0.65rem',
            color: '#3a3a3a',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            display: 'block',
            marginTop: '0.4rem',
          }}
        >
          {venture.year}
        </span>
      </div>

      {/* Content */}
      <div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', flexWrap: 'wrap', marginBottom: '0.6rem' }}>
          <h3
            className="font-heading"
            style={{
              fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
              fontWeight: 700,
              color: hovered ? '#C8A15A' : '#F5F5F5',
              margin: 0,
              lineHeight: 1.15,
              transition: 'color 0.35s',
            }}
          >
            {venture.name}
          </h3>
          <span
            className="font-body"
            style={{
              fontSize: '0.7rem',
              color: '#555',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              border: '1px solid rgba(200,161,90,0.15)',
              padding: '0.2rem 0.6rem',
              whiteSpace: 'nowrap',
            }}
          >
            {venture.category}
          </span>
        </div>
        <p
          className="font-body"
          style={{
            color: '#A1A1A1',
            fontSize: '0.9375rem',
            lineHeight: 1.75,
            maxWidth: '640px',
            margin: 0,
          }}
        >
          {venture.description}
        </p>
      </div>

      {/* Arrow */}
      <div style={{ paddingTop: '0.35rem' }}>
        <motion.div
          animate={{ rotate: hovered ? 0 : 45, opacity: hovered ? 1 : 0.2 }}
          transition={{ duration: 0.3 }}
        >
          <RiArrowRightUpLine size={22} style={{ color: '#C8A15A' }} />
        </motion.div>
      </div>
    </motion.div>
  );
}

/* tiny hook so we don't import useState in every row */
function useHoverState(): [boolean, (v: boolean) => void] {
  const { useState } = require('react');
  return useState(false);
}

export default function Ventures() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="ventures"
      style={{ background: '#0A0A0A', padding: '7rem 0', position: 'relative' }}
    >
      <div className="site-container">
        {/* Header */}
        <div
          ref={ref}
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '2rem',
            marginBottom: '3.5rem',
            flexWrap: 'wrap',
          }}
        >
          <div>
            <div style={{ overflow: 'hidden' }}>
              <motion.h2
                initial={{ y: '110%' }}
                animate={inView ? { y: 0 } : {}}
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
                Brands that shape{' '}
                <span className="italic text-gradient">culture.</span>
              </motion.h2>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-body"
            style={{
              color: '#555',
              fontSize: '0.875rem',
              lineHeight: 1.75,
              maxWidth: '280px',
            }}
          >
            Three ventures, one vision — defining how India eats, drinks, and gathers.
          </motion.p>
        </div>

        {/* Top border */}
        <div style={{ height: '1px', background: 'rgba(200,161,90,0.15)', marginBottom: '0' }} />

        {/* Venture rows */}
        {ventures.map((v, i) => (
          <VentureRow key={v.id} venture={v} index={i} />
        ))}
      </div>

      <style>{`
        @media (max-width: 640px) {
          .venture-row { grid-template-columns: 3rem 1fr !important; }
          .venture-row > div:last-child { display: none; }
        }
      `}</style>
    </section>
  );
}
