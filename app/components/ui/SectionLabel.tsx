'use client';

import { motion } from 'framer-motion';
import { fadeUp, viewportConfig } from '@/lib/animations';

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className={`inline-flex items-center gap-3 mb-6 ${className}`}
    >
      <span className="w-8 h-px bg-[#C8A15A]" />
      <span className="text-[#C8A15A] text-xs font-medium tracking-[0.2em] uppercase font-body">
        {children}
      </span>
    </motion.div>
  );
}
