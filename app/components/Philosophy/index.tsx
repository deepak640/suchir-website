'use client';

import { motion } from 'framer-motion';
import { viewportConfig } from '@/lib/animations';

const lines = [
  { text: 'Bring the right people together.', delay: 0 },
  { text: 'Build something worth talking about.', delay: 0.3 },
  { text: 'Let culture do the rest.', delay: 0.6 },
];

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      className="relative min-h-screen flex items-center justify-center bg-[#0A0A0A] overflow-hidden py-28"
    >
      {/* Subtle background dot */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: 'radial-gradient(circle, #C8A15A 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Gold ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none opacity-[0.04]"
        style={{ background: 'radial-gradient(circle, #C8A15A 0%, transparent 70%)' }}
      />

      <div className="max-w-5xl mx-auto px-8 md:px-12 lg:px-16 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-3 mb-14"
        >
          <span className="w-8 h-px bg-[#C8A15A]" />
          <span className="text-[#C8A15A] text-xs tracking-[0.25em] uppercase font-body">Philosophy</span>
          <span className="w-8 h-px bg-[#C8A15A]" />
        </motion.span>

        <div className="space-y-6 md:space-y-8">
          {lines.map(({ text, delay }) => (
            <motion.p
              key={text}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-[#F5F5F5] leading-tight"
            >
              {text}
            </motion.p>
          ))}
        </div>

        {/* Decorative dividers */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={viewportConfig}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 flex items-center justify-center gap-6"
          style={{ originX: 0.5 }}
        >
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[rgba(200,161,90,0.4)]" />
          <div className="w-2 h-2 bg-[#C8A15A] rotate-45" />
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[rgba(200,161,90,0.4)]" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportConfig}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-10 text-[#A1A1A1] font-body text-sm tracking-widest uppercase"
        >
          — Shuchir Suri
        </motion.p>
      </div>
    </section>
  );
}
