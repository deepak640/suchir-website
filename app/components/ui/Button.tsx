'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'outline';
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function Button({ children, variant = 'primary', href, onClick, className = '' }: ButtonProps) {
  const base =
    'inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium tracking-wide font-body transition-all duration-300 cursor-pointer';

  const styles = {
    primary: 'bg-[#C8A15A] text-[#0E0E0E] hover:bg-[#D4B87A]',
    outline: 'border border-[rgba(200,161,90,0.4)] text-[#F5F5F5] hover:border-[#C8A15A] hover:text-[#C8A15A]',
  };

  const content = (
    <motion.span
      className={`${base} ${styles[variant]} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        {content}
      </a>
    );
  }

  return content;
}
