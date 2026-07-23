'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef } from 'react';
import { galleryImages, galleryCategories } from '@/lib/data';

const ease = [0.22, 1, 0.36, 1] as const;

const categoryAccent: Record<string, string> = {
  Events: '#C8A15A',
  Speaking: '#C8A15A',
  Interviews: '#C8A15A',
  Podcasts: '#C8A15A',
  'Brand Shoots': '#C8A15A',
};

function Frame({ image, index }: { image: (typeof galleryImages)[0]; index: number }) {
  // Real photos live in public/images; anything still named "placeholder-*"
  // renders the developed-frame fallback instead of a broken image.
  const hasPhoto = Boolean(image.src) && !image.src.includes('placeholder');
  const accent = categoryAccent[image.category] ?? '#C8A15A';
  const frameNo = String(index + 1).padStart(2, '0');

  return (
    <motion.figure
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.5, ease, delay: index * 0.04 }}
      className="frame"
      style={{ margin: 0 }}
    >
      <div className="frame-inner">
        {hasPhoto ? (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="frame-photo"
          />
        ) : (
          <div className="frame-placeholder">
            <span className="frame-mono" style={{ color: accent }}>
              {image.category.charAt(0)}
            </span>
          </div>
        )}

        {/* corner ticks — draw in on hover */}
        <span className="tick tick-tl" />
        <span className="tick tick-tr" />
        <span className="tick tick-bl" />
        <span className="tick tick-br" />

        {/* frame number */}
        <span className="frame-no font-body">{frameNo}</span>
      </div>

      <figcaption className="frame-cap">
        <span className="frame-cat font-body" style={{ color: accent }}>
          {image.category}
        </span>
        <span className="frame-title font-body">{image.alt}</span>
      </figcaption>
    </motion.figure>
  );
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const headRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headRef, { once: true, margin: '-80px' });

  const filtered =
    activeCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <section id="gallery" className="gallery-section">
      <div className="site-container">
        {/* Header */}
        <div ref={headRef} className="gallery-head">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease }}
              style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}
            >
              <span style={{ width: '2rem', height: '1px', background: '#C8A15A' }} />
              <span
                className="font-body"
                style={{ fontSize: '0.65rem', letterSpacing: '0.24em', color: '#C8A15A', textTransform: 'uppercase' }}
              >
                The Contact Sheet
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease, delay: 0.08 }}
              className="font-heading gallery-title"
            >
              Moments that <span className="text-gradient" style={{ fontStyle: 'italic' }}>matter</span>.
            </motion.h2>
          </div>

          {/* Filter tabs with sliding indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, ease, delay: 0.2 }}
            className="gallery-filters"
          >
            {galleryCategories.map((cat) => {
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`gallery-filter font-body ${active ? 'is-active' : ''}`}
                >
                  {cat}
                  {active && (
                    <motion.span layoutId="gallery-underline" className="gallery-underline" transition={{ duration: 0.4, ease }} />
                  )}
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* Contact sheet grid */}
        <motion.div layout className="gallery-grid">
          <AnimatePresence mode="popLayout">
            {filtered.map((img, i) => (
              <Frame key={img.id} image={img} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <style>{`
        .gallery-section {
          background: #0C0C0C;
          padding: clamp(5rem, 9vw, 8rem) 0;
          position: relative;
        }
        .gallery-head {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          margin-bottom: 3.5rem;
        }
        .gallery-title {
          font-size: clamp(2.4rem, 5.5vw, 4.25rem);
          font-weight: 700;
          color: #F5F5F5;
          line-height: 1.02;
          letter-spacing: -0.02em;
          margin: 0;
        }
        .gallery-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem 1.75rem;
        }
        .gallery-filter {
          position: relative;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.35rem 0;
          font-size: 0.72rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #6f6f6f;
          transition: color 0.3s;
        }
        .gallery-filter:hover { color: #F5F5F5; }
        .gallery-filter.is-active { color: #F5F5F5; }
        .gallery-underline {
          position: absolute;
          left: 0;
          right: 0;
          bottom: -3px;
          height: 1px;
          background: #C8A15A;
        }
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.75rem 1.5rem;
        }
        .frame-inner {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 5;
          overflow: hidden;
          background: #131313;
          border: 1px solid rgba(200,161,90,0.10);
          transition: border-color 0.45s ease;
        }
        .frame:hover .frame-inner { border-color: rgba(200,161,90,0.35); }
        .frame-photo {
          object-fit: cover;
          transition: transform 0.7s cubic-bezier(0.22,1,0.36,1), filter 0.5s ease;
          filter: grayscale(0.15);
        }
        .frame:hover .frame-photo { transform: scale(1.06); filter: grayscale(0); }
        .frame-placeholder {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background:
            radial-gradient(120% 120% at 30% 20%, rgba(200,161,90,0.06), transparent 60%),
            repeating-linear-gradient(45deg, #121212 0, #121212 8px, #101010 8px, #101010 16px);
        }
        .frame-mono {
          font-family: var(--font-heading, serif);
          font-size: 2.6rem;
          font-weight: 700;
          opacity: 0.35;
          transition: opacity 0.45s ease, transform 0.6s ease;
        }
        .frame:hover .frame-mono { opacity: 0.6; transform: scale(1.08); }
        .frame-no {
          position: absolute;
          top: 0.7rem;
          left: 0.75rem;
          font-size: 0.62rem;
          letter-spacing: 0.18em;
          color: rgba(245,245,245,0.55);
          mix-blend-mode: difference;
        }
        /* corner ticks */
        .tick {
          position: absolute;
          width: 12px;
          height: 12px;
          opacity: 0;
          transition: opacity 0.4s ease, transform 0.4s ease;
          pointer-events: none;
        }
        .tick-tl { top: 6px; left: 6px; border-top: 1px solid #C8A15A; border-left: 1px solid #C8A15A; transform: translate(4px,4px); }
        .tick-tr { top: 6px; right: 6px; border-top: 1px solid #C8A15A; border-right: 1px solid #C8A15A; transform: translate(-4px,4px); }
        .tick-bl { bottom: 6px; left: 6px; border-bottom: 1px solid #C8A15A; border-left: 1px solid #C8A15A; transform: translate(4px,-4px); }
        .tick-br { bottom: 6px; right: 6px; border-bottom: 1px solid #C8A15A; border-right: 1px solid #C8A15A; transform: translate(-4px,-4px); }
        .frame:hover .tick { opacity: 1; transform: translate(0,0); }
        .frame-cap {
          display: flex;
          flex-direction: column;
          gap: 0.28rem;
          padding: 0.9rem 0.1rem 0;
        }
        .frame-cat {
          font-size: 0.6rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }
        .frame-title {
          font-size: 0.82rem;
          color: #C9C9C9;
          line-height: 1.35;
          transition: color 0.35s ease;
        }
        .frame:hover .frame-title { color: #F5F5F5; }

        @media (max-width: 1024px) {
          .gallery-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 720px) {
          .gallery-grid { grid-template-columns: repeat(2, 1fr); gap: 1.25rem 1rem; }
        }
        @media (min-width: 900px) {
          .gallery-head { flex-direction: row; align-items: flex-end; justify-content: space-between; }
        }
        @media (prefers-reduced-motion: reduce) {
          .frame-photo, .frame-mono, .tick, .frame:hover .frame-photo { transition: none; transform: none; }
        }
      `}</style>
    </section>
  );
}
