'use client';

import { motion } from 'framer-motion';
import { RiLinkedinFill, RiInstagramLine, RiArrowUpLine } from 'react-icons/ri';
import { navItems } from '@/lib/data';

const LINKEDIN_URL  = 'https://www.linkedin.com/in/shuchirsuri/';
const INSTAGRAM_URL = 'https://www.instagram.com/shuchirsuri/';

export default function Footer() {
  const year = new Date().getFullYear();

  const handleNav = (href: string) => {
    document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{ background: '#080808', position: 'relative' }}>

      {/* Top accent line */}
      <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(200,161,90,0.35) 30%, rgba(200,161,90,0.35) 70%, transparent)' }} />

      <div className="site-container">

        {/* ── Main three-column block ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr 1fr',
            gap: '3rem 4rem',
            padding: '4rem 0 3rem',
            borderBottom: '1px solid rgba(200,161,90,0.08)',
          }}
          className="footer-grid"
        >
          {/* COL 1 — Brand */}
          <div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="font-heading"
              style={{
                background: 'none',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
                fontSize: '2rem',
                fontWeight: 700,
                letterSpacing: '0.18em',
                color: '#C8A15A',
                display: 'block',
                marginBottom: '0.5rem',
                lineHeight: 1,
                textAlign: 'left',
              }}
            >
              SS
            </button>
            <p
              className="font-heading"
              style={{ fontSize: '0.9375rem', color: '#3a3a3a', fontStyle: 'italic', marginBottom: '1.25rem' }}
            >
              Shuchir Suri
            </p>
            <p
              className="font-body"
              style={{ fontSize: '0.8125rem', color: '#3a3a3a', lineHeight: 1.75, maxWidth: '240px' }}
            >
              Delhi-based entrepreneur building brands at the intersection of food, beverage, and culture.
            </p>
          </div>

          {/* COL 2 — Navigation */}
          <div>
            <p
              className="font-body"
              style={{
                fontSize: '0.65rem',
                letterSpacing: '0.18em',
                color: '#555',
                textTransform: 'uppercase',
                marginBottom: '1.5rem',
              }}
            >
              Navigate
            </p>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNav(item.href)}
                  className="font-body"
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    fontSize: '0.875rem',
                    color: '#555',
                    textAlign: 'left',
                    letterSpacing: '0.03em',
                    transition: 'color 0.3s',
                    width: 'fit-content',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#C8A15A')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#555')}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* COL 3 — Connect */}
          <div>
            <p
              className="font-body"
              style={{
                fontSize: '0.65rem',
                letterSpacing: '0.18em',
                color: '#555',
                textTransform: 'uppercase',
                marginBottom: '1.5rem',
              }}
            >
              Connect
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { href: LINKEDIN_URL,  icon: RiLinkedinFill,  label: 'LinkedIn' },
                { href: INSTAGRAM_URL, icon: RiInstagramLine, label: 'Instagram' },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    textDecoration: 'none',
                    transition: 'opacity 0.3s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.7')}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                >
                  <Icon size={15} style={{ color: '#C8A15A', flexShrink: 0 }} />
                  <span
                    className="font-body"
                    style={{ fontSize: '0.875rem', color: '#555', letterSpacing: '0.03em' }}
                  >
                    {label}
                  </span>
                </a>
              ))}

              <a
                href="mailto:hello@shuchirsuri.com"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  textDecoration: 'none',
                  marginTop: '0.25rem',
                  transition: 'opacity 0.3s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.7')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
              >
                <span
                  className="font-body"
                  style={{ fontSize: '0.8rem', color: '#3a3a3a', borderBottom: '1px solid rgba(200,161,90,0.2)', paddingBottom: '1px' }}
                >
                  hello@shuchirsuri.com
                </span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* ── Bottom bar ── */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1.25rem 0',
            gap: '1rem',
            flexWrap: 'wrap',
          }}
        >
          <p
            className="font-body"
            style={{ color: '#2a2a2a', fontSize: '0.75rem', letterSpacing: '0.04em' }}
          >
            © {year} Shuchir Suri. All rights reserved.
          </p>

          <p
            className="font-body"
            style={{ color: '#222', fontSize: '0.75rem' }}
          >
            Built with Next.js &amp; Framer Motion
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            style={{
              background: 'none',
              border: '1px solid rgba(200,161,90,0.15)',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#333',
              transition: 'all 0.3s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#C8A15A';
              e.currentTarget.style.color = '#C8A15A';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(200,161,90,0.15)';
              e.currentTarget.style.color = '#333';
            }}
          >
            <RiArrowUpLine size={14} />
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
          .footer-grid > div:first-child { grid-column: 1 / -1; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
