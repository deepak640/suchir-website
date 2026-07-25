'use client';

import { useState, useEffect } from 'react';

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.15, rootMargin: '-80px 0px -35% 0px' }
      );

      observer.observe(el);
      observers.push(observer);
    });

    const handleScroll = () => {
      const atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 100;
      if (atBottom && sectionIds.length > 0) {
        setActiveSection(sectionIds[sectionIds.length - 1]);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observers.forEach((o) => o.disconnect());
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds]);

  return activeSection;
}
