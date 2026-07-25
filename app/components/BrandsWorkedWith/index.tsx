'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1] as const;

const row1 = ['Diageo', 'Pernod Ricard', 'Zomato', 'Swiggy', 'AB InBev', 'Red Bull', 'Coca-Cola', 'Nestlé'];
const row2 = ['ITC Hotels', 'Google', 'Bira 91', 'WeWork', 'Taj Hotels', 'Uber Eats', 'Bacardi', 'Samsung'];

function TickerRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const repeated = [...items, ...items, ...items];
  return (
    <div className="bw-ticker-wrap">
      <div className="bw-fade bw-fade--left" />
      <div className="bw-fade bw-fade--right" />
      <div className={`bw-track ${reverse ? 'bw-track--reverse' : ''}`}>
        {repeated.map((item, i) => (
          <span key={i} className="bw-group">
            <span className="font-heading bw-item">{item}</span>
            <span className="bw-dot" />
          </span>
        ))}
      </div>
    </div>
  );
}

export default function BrandsWorkedWith() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="brands" ref={ref} className="bw-section">
      <div className="site-container">
        <motion.div
          className="bw-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease }}
        >
          <div className="bw-label-row">
            <motion.span
              className="bw-line"
              initial={{ width: 0 }}
              animate={inView ? { width: '2.5rem' } : {}}
              transition={{ duration: 0.8, ease, delay: 0.3 }}
            />
            <span className="font-body bw-label">Trusted By</span>
          </div>
          <h2 className="font-heading bw-heading">
            Brands I've <span className="text-gradient" style={{ fontStyle: 'italic' }}>worked with</span>
          </h2>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, ease, delay: 0.4 }}
      >
        <TickerRow items={row1} />
        <TickerRow items={row2} reverse />
      </motion.div>

      <style>{`
        .bw-section {
          background: #0A0A0A;
          padding: clamp(5rem, 10vw, 8rem) 0 clamp(4rem, 8vw, 6rem);
          border-top: 1px solid rgba(200,161,90,0.08);
          overflow: hidden;
        }

        .bw-header {
          text-align: center;
          margin-bottom: clamp(2.5rem, 4vw, 3.5rem);
        }

        .bw-label-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .bw-line {
          height: 1px;
          background: #C8A15A;
          display: inline-block;
        }

        .bw-label {
          font-size: 0.7rem;
          letter-spacing: 0.25em;
          color: #C8A15A;
          text-transform: uppercase;
        }

        .bw-heading {
          font-size: clamp(2.4rem, 5vw, 3.5rem);
          font-weight: 700;
          color: #F5F5F5;
          letter-spacing: -0.025em;
          line-height: 1.1;
          margin: 0;
        }

        .bw-ticker-wrap {
          position: relative;
          border-top: 1px solid rgba(200,161,90,0.12);
          padding: 1.5rem 0;
        }

        .bw-ticker-wrap:last-child {
          border-bottom: 1px solid rgba(200,161,90,0.12);
        }

        .bw-fade {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 120px;
          z-index: 2;
          pointer-events: none;
        }

        .bw-fade--left {
          left: 0;
          background: linear-gradient(to right, #0A0A0A, transparent);
        }

        .bw-fade--right {
          right: 0;
          background: linear-gradient(to left, #0A0A0A, transparent);
        }

        @keyframes bw-scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }

        @keyframes bw-scroll-right {
          0% { transform: translateX(-33.33%); }
          100% { transform: translateX(0); }
        }

        .bw-track {
          display: flex;
          align-items: center;
          white-space: nowrap;
          width: max-content;
          animation: bw-scroll-left 30s linear infinite;
        }

        .bw-track--reverse {
          animation: bw-scroll-right 35s linear infinite;
        }

        .bw-track:hover {
          animation-play-state: paused;
        }

        .bw-group {
          display: inline-flex;
          align-items: center;
          gap: 2.5rem;
          padding: 0 2.5rem;
        }

        .bw-item {
          font-size: clamp(1.3rem, 2.2vw, 1.75rem);
          font-weight: 600;
          color: #888;
          letter-spacing: 0.02em;
          transition: color 0.3s;
        }

        .bw-item:hover {
          color: #C8A15A;
        }

        .bw-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #C8A15A;
          display: inline-block;
          flex-shrink: 0;
          opacity: 0.3;
        }

        @media (max-width: 600px) {
          .bw-group {
            gap: 1.5rem;
            padding: 0 1.5rem;
          }
          .bw-fade {
            width: 50px;
          }
        }
      `}</style>
    </section>
  );
}
