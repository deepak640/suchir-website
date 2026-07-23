'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { RiArrowRightUpLine } from 'react-icons/ri';
import { ventures } from '@/lib/data';

const ease = [0.22, 1, 0.36, 1] as const;

function VentureCard({
  venture,
  index,
}: {
  venture: (typeof ventures)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [hovered, setHovered] = useState(false);

  const isLink = venture.website && venture.website !== '#';

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease, delay: index * 0.12 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="venture-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        background: 'linear-gradient(160deg, #161616 0%, #101010 100%)',
        border: `1px solid ${hovered ? 'rgba(200,161,90,0.4)' : 'rgba(200,161,90,0.12)'}`,
        padding: '2rem',
        position: 'relative',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
        transition: 'transform 0.4s cubic-bezier(0.22,1,0.36,1), border-color 0.4s',
      }}
    >
      {/* ── Seal / monogram lockup (falls back from a real logo) ── */}
      <div
        style={{
          width: '4.5rem',
          height: '4.5rem',
          border: '1px solid rgba(200,161,90,0.35)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          marginBottom: '2rem',
          background: 'rgba(200,161,90,0.03)',
        }}
      >
        {/* Corner accents — the maker's-mark motif used across the site */}
        <span style={{ position: 'absolute', top: 5, left: 5, width: 10, height: 10, borderTop: '1px solid #C8A15A', borderLeft: '1px solid #C8A15A', opacity: 0.7 }} />
        <span style={{ position: 'absolute', bottom: 5, right: 5, width: 10, height: 10, borderBottom: '1px solid #C8A15A', borderRight: '1px solid #C8A15A', opacity: 0.7 }} />

        {venture.logo ? (
          <Image src={venture.logo} alt={`${venture.name} logo`} width={44} height={44} style={{ objectFit: 'contain' }} />
        ) : (
          <span
            className="font-heading"
            style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '0.04em', color: '#C8A15A' }}
          >
            {venture.monogram}
          </span>
        )}
      </div>

      {/* ── Eyebrow: category · year ── */}
      <div
        className="font-body"
        style={{ fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#6a6a6a', marginBottom: '0.75rem' }}
      >
        {venture.category} <span style={{ color: '#C8A15A', margin: '0 0.4rem' }}>·</span> {venture.year}
      </div>

      {/* ── Name ── */}
      <h3
        className="font-heading"
        style={{ fontSize: '1.6rem', fontWeight: 700, lineHeight: 1.15, color: hovered ? '#C8A15A' : '#F5F5F5', margin: '0 0 0.9rem', transition: 'color 0.35s' }}
      >
        {venture.name}
      </h3>

      {/* ── Short description ── */}
      <p
        className="font-body"
        style={{ color: '#A1A1A1', fontSize: '0.9rem', lineHeight: 1.7, margin: 0, flex: 1 }}
      >
        {venture.blurb}
      </p>

      {/* ── Learn more ── */}
      <a
        href={venture.website}
        {...(isLink ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        className="font-body"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          marginTop: '2rem',
          fontSize: '0.78rem',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          color: hovered ? '#C8A15A' : '#8a8a8a',
          textDecoration: 'none',
          transition: 'color 0.35s',
          alignSelf: 'flex-start',
        }}
      >
        Learn more
        <motion.span animate={{ x: hovered ? 3 : 0, y: hovered ? -3 : 0 }} transition={{ duration: 0.3 }} style={{ display: 'inline-flex' }}>
          <RiArrowRightUpLine size={16} />
        </motion.span>
      </a>
    </motion.article>
  );
}

export default function Ventures() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="ventures" ref={ref} style={{ background: '#0A0A0A', padding: '7rem 0', position: 'relative' }}>
      <div className="site-container">
        {/* ── Section header ── */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
          <span style={{ width: '2rem', height: '1px', background: '#C8A15A', flexShrink: 0 }} />
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="font-body"
            style={{ fontSize: '0.65rem', letterSpacing: '0.22em', color: '#C8A15A', textTransform: 'uppercase' }}
          >
            Ventures
          </motion.span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease, delay: 0.1 }}
          className="font-heading"
          style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 700, color: '#F5F5F5', letterSpacing: '-0.02em', lineHeight: 1.1, margin: '0 0 3.5rem', maxWidth: '20ch' }}
        >
          The brands I&apos;ve <span className="text-gradient" style={{ fontStyle: 'italic' }}>built</span>.
        </motion.h2>

        {/* ── Cards ── */}
        <div className="ventures-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
          {ventures.map((v, i) => (
            <VentureCard key={v.id} venture={v} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .ventures-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .ventures-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
