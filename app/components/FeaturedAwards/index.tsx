'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1] as const;

const items = [
  'Forbes India',
  '30 Under 30',
  'YourStory',
  'Top F&B Creator',
  'Economic Times',
  'Young Entrepreneur',
  'Inc42',
  'BW Disrupt',
];

export default function FeaturedAwards() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="featured" ref={ref} className="fa-section">
      <div className="site-container">
        <motion.div
          className="fa-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease }}
        >
          <div className="fa-label-row">
            <motion.span
              className="fa-line"
              initial={{ width: 0 }}
              animate={inView ? { width: '2.5rem' } : {}}
              transition={{ duration: 0.8, ease, delay: 0.3 }}
            />
            <span className="font-body fa-label">Recognition</span>
          </div>
          <h2 className="font-heading fa-heading">
            Featured <span className="text-gradient" style={{ fontStyle: 'italic' }}>&</span> Awards
          </h2>
        </motion.div>
      </div>

      <div className="site-container">
        <div className="fa-grid">
          {items.map((item, i) => (
            <motion.div
              key={item}
              className="fa-item"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease, delay: 0.3 + i * 0.07 }}
            >
              <span className="font-heading fa-item-name">{item}</span>
              <span className="fa-item-dot" />
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .fa-section {
          background: #0A0A0A;
          padding: clamp(5rem, 10vw, 8rem) 0 clamp(4rem, 8vw, 6rem);
          border-top: 1px solid rgba(200,161,90,0.08);
          overflow: hidden;
        }

        .fa-header {
          text-align: center;
          margin-bottom: clamp(2.5rem, 4vw, 3.5rem);
        }

        .fa-label-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .fa-line {
          height: 1px;
          background: #C8A15A;
          display: inline-block;
        }

        .fa-label {
          font-size: 0.7rem;
          letter-spacing: 0.25em;
          color: #C8A15A;
          text-transform: uppercase;
        }

        .fa-heading {
          font-size: clamp(2.4rem, 5vw, 3.5rem);
          font-weight: 700;
          color: #F5F5F5;
          letter-spacing: -0.025em;
          line-height: 1.1;
          margin: 0;
        }

        .fa-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-top: 1px solid rgba(200,161,90,0.15);
        }

        .fa-item {
          padding: clamp(1.75rem, 3.5vw, 2.75rem) 1.25rem;
          border-bottom: 1px solid rgba(200,161,90,0.1);
          border-right: 1px solid rgba(200,161,90,0.1);
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          transition: background 0.4s;
        }

        .fa-item:nth-child(4n) {
          border-right: none;
        }

        .fa-item:hover {
          background: rgba(200,161,90,0.04);
        }

        .fa-item-name {
          font-size: clamp(1.2rem, 2.2vw, 1.6rem);
          font-weight: 600;
          color: #E0E0E0;
          letter-spacing: 0.01em;
          transition: color 0.3s;
        }

        .fa-item:hover .fa-item-name {
          color: #C8A15A;
        }

        .fa-item-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #C8A15A;
          opacity: 0.4;
          transition: opacity 0.3s;
        }

        .fa-item:hover .fa-item-dot {
          opacity: 1;
        }

        @media (max-width: 900px) {
          .fa-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .fa-item:nth-child(4n) {
            border-right: 1px solid rgba(200,161,90,0.1);
          }
          .fa-item:nth-child(2n) {
            border-right: none;
          }
        }
      `}</style>
    </section>
  );
}
