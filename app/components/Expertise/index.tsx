'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { RiBriefcase4Line, RiVideoLine, RiFundsLine } from 'react-icons/ri';

const ease = [0.22, 1, 0.36, 1] as const;

const roles = [
  {
    icon: RiBriefcase4Line,
    title: 'Entrepreneur',
    description:
      'Building culture-first brands across food, beverage and marketing — from Food Talk India to Jade Forest to Anthem.',
  },
  {
    icon: RiVideoLine,
    title: 'Content Creator',
    description:
      'Demystifying the F&B world for millions — what India eats, drinks, and how the brands behind it all are built.',
  },
  {
    icon: RiFundsLine,
    title: 'Investor',
    description:
      'Backing bold founders building the next wave of consumer brands — culture-led, community-driven, category-defining.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.92 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease,
      delay: 0.2 + i * 0.18,
    },
  }),
};

export default function Expertise() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section
      id="expertise"
      ref={ref}
      className="exp-section"
    >
      <div className="site-container">
        {/* Header */}
        <motion.div
          className="exp-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease }}
        >
          <div className="exp-label-row">
            <motion.span
              className="exp-line"
              initial={{ width: 0 }}
              animate={inView ? { width: '2.5rem' } : {}}
              transition={{ duration: 0.8, ease, delay: 0.3 }}
            />
            <span className="font-body exp-label">What I Do</span>
          </div>
          <h2 className="font-heading exp-heading">
            Builder by nature, creator by <span className="text-gradient" style={{ fontStyle: 'italic' }}>craft</span>.
          </h2>
        </motion.div>

        {/* 3-column icon cards */}
        <div className="exp-grid">
          {roles.map((role, i) => {
            const Icon = role.icon;
            return (
              <motion.div
                key={role.title}
                className="exp-card"
                custom={i}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={cardVariants}
              >
                <div className="exp-card__glow" />
                <div className="exp-card__icon-wrap">
                  <Icon className="exp-card__icon" />
                </div>
                <h3 className="font-heading exp-card__title">{role.title}</h3>
                <div className="exp-card__separator" />
                <p className="font-body exp-card__desc">{role.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        .exp-section {
          background: #0A0A0A;
          padding: clamp(6rem, 12vw, 10rem) 0;
          border-top: 1px solid rgba(200,161,90,0.08);
          overflow: hidden;
        }

        .exp-header {
          text-align: center;
          margin-bottom: clamp(4rem, 6vw, 6rem);
        }

        .exp-label-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .exp-line {
          height: 1px;
          background: #C8A15A;
          display: inline-block;
        }

        .exp-label {
          font-size: 0.7rem;
          letter-spacing: 0.25em;
          color: #C8A15A;
          text-transform: uppercase;
        }

        .exp-heading {
          font-size: clamp(2.6rem, 5vw, 4rem);
          font-weight: 700;
          color: #F5F5F5;
          letter-spacing: -0.025em;
          line-height: 1.1;
          margin: 0;
        }

        /* ── Card grid ── */
        .exp-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: clamp(2rem, 3vw, 3rem);
        }

        .exp-card {
          text-align: center;
          padding: clamp(2.5rem, 4vw, 3.5rem) clamp(2rem, 3vw, 2.5rem);
          position: relative;
          border: 1px solid rgba(200,161,90,0.1);
          background: rgba(200,161,90,0.02);
          transition: border-color 0.5s ease, background 0.5s ease;
          overflow: hidden;
        }

        .exp-card:hover {
          border-color: rgba(200,161,90,0.35);
          background: rgba(200,161,90,0.05);
        }

        /* Ambient glow behind icon on hover */
        .exp-card__glow {
          position: absolute;
          top: 15%;
          left: 50%;
          transform: translateX(-50%);
          width: 120px;
          height: 120px;
          background: radial-gradient(circle, rgba(200,161,90,0.12) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.6s ease;
          pointer-events: none;
        }

        .exp-card:hover .exp-card__glow {
          opacity: 1;
        }

        /* ── Icon ── */
        .exp-card__icon-wrap {
          width: 5.5rem;
          height: 5.5rem;
          margin: 0 auto 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(200,161,90,0.25);
          background: rgba(200,161,90,0.04);
          color: #C8A15A;
          position: relative;
          z-index: 1;
          transition: all 0.5s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .exp-card:hover .exp-card__icon-wrap {
          background: rgba(200,161,90,0.12);
          border-color: rgba(200,161,90,0.6);
          transform: translateY(-6px) scale(1.05);
          box-shadow: 0 8px 30px rgba(200,161,90,0.15);
        }

        .exp-card__icon {
          width: 34px;
          height: 34px;
          transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .exp-card:hover .exp-card__icon {
          transform: scale(1.1);
        }

        /* ── Title ── */
        .exp-card__title {
          font-size: clamp(1.5rem, 2vw, 1.8rem);
          font-weight: 700;
          color: #F5F5F5;
          margin: 0 0 1.25rem;
          letter-spacing: -0.01em;
          transition: color 0.4s ease;
        }

        .exp-card:hover .exp-card__title {
          color: #C8A15A;
        }

        /* ── Separator ── */
        .exp-card__separator {
          width: 2rem;
          height: 1px;
          background: rgba(200,161,90,0.3);
          margin: 0 auto 1.25rem;
          transition: width 0.5s cubic-bezier(0.22, 1, 0.36, 1), background 0.5s ease;
        }

        .exp-card:hover .exp-card__separator {
          width: 4rem;
          background: #C8A15A;
        }

        /* ── Description ── */
        .exp-card__desc {
          color: #888;
          font-size: 1rem;
          line-height: 1.8;
          margin: 0;
          max-width: 360px;
          margin-left: auto;
          margin-right: auto;
          transition: color 0.4s ease;
        }

        .exp-card:hover .exp-card__desc {
          color: #aaa;
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .exp-grid {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }
        }

        @media (max-width: 600px) {
          .exp-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </section>
  );
}
