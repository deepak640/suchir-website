'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { RiArrowDownLine } from 'react-icons/ri';

const ROLES = ['Entrepreneur', 'Content Creator', 'Culture Curator'];

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  /* subtle mouse glow only */
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const gX = useSpring(rawX, { stiffness: 35, damping: 20 });
  const gY = useSpring(rawY, { stiffness: 35, damping: 20 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const r = heroRef.current.getBoundingClientRect();
      rawX.set(e.clientX - r.left - r.width / 2);
      rawY.set(e.clientY - r.top - r.height / 2);
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [rawX, rawY]);

  /* typewriter */
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = ROLES[roleIdx];
    let t: ReturnType<typeof setTimeout>;
    if (!deleting && displayed.length < word.length) {
      t = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 75);
    } else if (!deleting && displayed.length === word.length) {
      t = setTimeout(() => setDeleting(true), 2400);
    } else if (deleting && displayed.length > 0) {
      t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 38);
    } else {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % ROLES.length);
    }
    return () => clearTimeout(t);
  }, [displayed, deleting, roleIdx]);

  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section
      ref={heroRef}
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: '#0E0E0E',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Subtle mouse-following glow */}
      <motion.div
        style={{
          position: 'absolute',
          width: '700px',
          height: '700px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(200,161,90,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
          x: gX,
          y: gY,
          top: '50%',
          left: '50%',
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* Content */}
      <div
        className="site-container"
        style={{ position: 'relative', zIndex: 1, paddingTop: '80px' }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'clamp(2rem, 5vw, 5rem)',
            alignItems: 'center',
            minHeight: 'calc(100vh - 80px)',
            padding: '3rem 0',
          }}
          className="hero-grid"
        >

          {/* LEFT */}
          <div>
            {/* Label */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}
            >
              <span style={{ width: '2rem', height: '1px', background: '#C8A15A', flexShrink: 0 }} />
              <span
                className="font-body"
                style={{ fontSize: '0.65rem', letterSpacing: '0.22em', color: '#C8A15A', textTransform: 'uppercase' }}
              >
                Entrepreneur &amp; Content Creator
              </span>
            </motion.div>

            {/* Name */}
            <div style={{ overflow: 'hidden', marginBottom: '0.2rem' }}>
              <motion.h1
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, ease, delay: 0.4 }}
                className="font-heading"
                style={{
                  fontSize: 'clamp(3rem, 7vw, 6.5rem)',
                  fontWeight: 700,
                  color: '#F5F5F5',
                  lineHeight: 0.95,
                  letterSpacing: '-0.02em',
                  margin: 0,
                }}
              >
                Shuchir
              </motion.h1>
            </div>
            <div style={{ overflow: 'hidden', marginBottom: '2rem' }}>
              <motion.h1
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, ease, delay: 0.55 }}
                className="font-heading text-gradient"
                style={{
                  fontSize: 'clamp(3rem, 7vw, 6.5rem)',
                  fontWeight: 700,
                  fontStyle: 'italic',
                  lineHeight: 0.95,
                  letterSpacing: '-0.02em',
                  margin: 0,
                }}
              >
                Suri
              </motion.h1>
            </div>

            {/* Typewriter role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              style={{ height: '2rem', display: 'flex', alignItems: 'center', marginBottom: '1.75rem' }}
            >
              <span
                className="font-heading"
                style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)', color: '#A1A1A1', fontStyle: 'italic' }}
              >
                {displayed}
              </span>
              <span
                style={{
                  display: 'inline-block',
                  width: '2px',
                  height: '1.2rem',
                  background: '#C8A15A',
                  marginLeft: '3px',
                  animation: 'blink 1s step-end infinite',
                }}
              />
            </motion.div>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, ease, delay: 1 }}
              style={{
                height: '1px',
                background: 'linear-gradient(90deg, #C8A15A, rgba(200,161,90,0.15), transparent)',
                transformOrigin: 'left',
                maxWidth: '400px',
                marginBottom: '1.75rem',
              }}
            />

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="font-body"
              style={{
                color: '#A1A1A1',
                fontSize: 'clamp(0.875rem, 1.4vw, 1rem)',
                lineHeight: 1.85,
                maxWidth: '420px',
                marginBottom: '2.25rem',
              }}
            >
              Delhi-based entrepreneur and content creator — building
              culture-first brands, producing experiences, and demystifying
              the F&amp;B space.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.25 }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '0.875rem' }}
            >
              <button
                onClick={() => document.getElementById('ventures')?.scrollIntoView({ behavior: 'smooth' })}
                className="font-body"
                style={{
                  background: '#C8A15A',
                  color: '#0E0E0E',
                  border: 'none',
                  padding: '0.875rem 2rem',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'background 0.3s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#D4B87A')}
                onMouseLeave={(e) => (e.currentTarget.style.background = '#C8A15A')}
              >
                Explore Ventures
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="font-body"
                style={{
                  background: 'none',
                  border: '1px solid rgba(200,161,90,0.35)',
                  color: '#F5F5F5',
                  padding: '0.875rem 2rem',
                  fontSize: '0.8rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#C8A15A';
                  e.currentTarget.style.color = '#C8A15A';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(200,161,90,0.35)';
                  e.currentTarget.style.color = '#F5F5F5';
                }}
              >
                Get in Touch
              </button>
            </motion.div>
          </div>

          {/* RIGHT — portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease, delay: 0.6 }}
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            <div style={{ position: 'relative', width: 'clamp(240px, 26vw, 380px)', height: 'clamp(300px, 34vw, 500px)' }}>
              {/* Outer frame */}
              <div style={{ position: 'absolute', inset: '-10px', border: '1px solid rgba(200,161,90,0.1)', pointerEvents: 'none' }} />
              {/* Corner accents */}
              <div style={{ position: 'absolute', top: '10px', right: '10px', width: '40px', height: '40px', borderTop: '2px solid #C8A15A', borderRight: '2px solid #C8A15A', opacity: 0.6 }} />
              <div style={{ position: 'absolute', bottom: '10px', left: '10px', width: '40px', height: '40px', borderBottom: '2px solid #C8A15A', borderLeft: '2px solid #C8A15A', opacity: 0.6 }} />

              {/* Card */}
              <div style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
                <Image
                  src="/images/suchir2.webp"
                  alt="Shuchir Suri"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  sizes="(max-width: 768px) 100vw, 26vw"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        aria-label="Scroll down"
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.4rem',
          color: '#555',
          transition: 'color 0.3s',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = '#C8A15A')}
        onMouseLeave={(e) => (e.currentTarget.style.color = '#555')}
      >
        <span className="font-body" style={{ fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase' }}>Scroll</span>
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}>
          <RiArrowDownLine size={16} />
        </motion.div>
      </motion.button>

      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
