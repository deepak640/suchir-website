'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { RiBriefcase4Line, RiMicLine, RiGroupLine, RiCalendarEventLine } from 'react-icons/ri';

const ease = [0.22, 1, 0.36, 1] as const;

const roles = [
  {
    icon: RiBriefcase4Line,
    title: 'Entrepreneur',
    description:
      'Founder of Food Talk India, Jade Forest and Anthem — building culture-first brands across food, drink and marketing.',
  },
  {
    icon: RiMicLine,
    title: 'Content Creator',
    description:
      'Creating content that demystifies the F&B world, from what India eats and drinks to how great brands are built.',
  },
  {
    icon: RiGroupLine,
    title: 'Community Builder',
    description:
      'Grew Food Talk India from an invite-only circle into one of the country’s largest food and drink communities.',
  },
  {
    icon: RiCalendarEventLine,
    title: 'Experience Maker',
    description:
      'Co-created the Explorers Club, an experiential festival series welcoming 1,00,000+ attendees across three cities.',
  },
];

export default function Expertise() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="expertise"
      ref={ref}
      style={{ background: '#0A0A0A', padding: 'clamp(4rem, 8vw, 7rem) 0', borderTop: '1px solid rgba(200,161,90,0.1)' }}
    >
      <div className="site-container">
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
          <span style={{ width: '2rem', height: '1px', background: '#C8A15A', flexShrink: 0 }} />
          <span className="font-body" style={{ fontSize: '0.65rem', letterSpacing: '0.22em', color: '#C8A15A', textTransform: 'uppercase' }}>
            What I Do
          </span>
        </div>
        <h2
          className="font-heading"
          style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 700, color: '#F5F5F5', letterSpacing: '-0.02em', lineHeight: 1.1, margin: '0 0 3.5rem' }}
        >
          Many hats, one <span className="text-gradient" style={{ fontStyle: 'italic' }}>obsession</span>.
        </h2>

        {/* Grid */}
        <div className="expertise-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2.5rem' }}>
          {roles.map((role, i) => {
            const Icon = role.icon;
            return (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease, delay: i * 0.1 }}
                style={{ textAlign: 'center' }}
              >
                <div
                  style={{
                    width: '3.5rem',
                    height: '3.5rem',
                    margin: '0 auto 1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(200,161,90,0.3)',
                    background: 'rgba(200,161,90,0.05)',
                    color: '#C8A15A',
                  }}
                >
                  <Icon size={24} />
                </div>
                <h3 className="font-heading" style={{ fontSize: '1.25rem', fontWeight: 700, color: '#F5F5F5', margin: '0 0 0.75rem' }}>
                  {role.title}
                </h3>
                <p className="font-body" style={{ color: '#A1A1A1', fontSize: '0.875rem', lineHeight: 1.7, margin: 0 }}>
                  {role.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .expertise-grid { grid-template-columns: 1fr 1fr !important; gap: 2.5rem 1.5rem !important; }
        }
        @media (max-width: 520px) {
          .expertise-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
