'use client';

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, viewportConfig } from '@/lib/animations';
import SectionLabel from '@/components/ui/SectionLabel';

const stats = [
  { value: '11+', label: 'Years Building Brands' },
  { value: '3', label: 'Ventures Co-Founded' },
  { value: 'Seed', label: 'Funding Raised — Jade Forest' },
  { value: '#1', label: "India's Largest Gin Festival" },
];

function StatCard({ stat }: { stat: typeof stats[0] }) {
  return (
    <motion.div
      variants={fadeUp}
      className="group"
      style={{
        background: '#181818',
        border: '1px solid rgba(200,161,90,0.1)',
        padding: '2.5rem 2rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        transition: 'border-color 0.3s',
      }}
      whileHover={{ borderColor: 'rgba(200,161,90,0.3)' }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '2.5rem',
          height: '2.5rem',
          borderTop: '1px solid transparent',
          borderRight: '1px solid transparent',
          transition: 'border-color 0.4s',
          pointerEvents: 'none',
        }}
      />
      <p
        className="font-heading"
        style={{
          fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
          fontWeight: 700,
          color: '#C8A15A',
          lineHeight: 1,
          marginBottom: '0.75rem',
          letterSpacing: '-0.01em',
        }}
      >
        {stat.value}
      </p>
      <p
        className="font-body"
        style={{
          color: '#A1A1A1',
          fontSize: '0.8rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          lineHeight: 1.5,
        }}
      >
        {stat.label}
      </p>
    </motion.div>
  );
}

export default function Impact() {
  return (
    <section
      id="impact"
      style={{
        padding: '7rem 0',
        background: '#0A0A0A',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="site-container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <SectionLabel>Impact</SectionLabel>
          </div>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="font-heading"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.75rem)',
              fontWeight: 700,
              color: '#F5F5F5',
              lineHeight: 1.15,
            }}
          >
            Numbers that{' '}
            <span className="italic text-gradient">tell the story.</span>
          </motion.h2>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
          }}
        >
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
