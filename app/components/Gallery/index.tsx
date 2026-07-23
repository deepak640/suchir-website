'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUp, staggerContainer, scaleIn, viewportConfig } from '@/lib/animations';
import SectionLabel from '@/components/ui/SectionLabel';
import { galleryImages, galleryCategories } from '@/lib/data';

const categoryColors: Record<string, string> = {
  Events: '#C8A15A',
  Speaking: '#B8956A',
  Interviews: '#A0896E',
  Podcasts: '#9A8060',
  'Brand Shoots': '#8B7355',
};

function GalleryItem({ image, index }: { image: (typeof galleryImages)[0]; index: number }) {
  // Drop real photos into public/images and point src at them; anything still
  // named "placeholder-*" renders the elegant fallback tile instead of a broken image.
  const hasPhoto = Boolean(image.src) && !image.src.includes('placeholder');
  const accent = categoryColors[image.category] ?? '#C8A15A';

  return (
    <motion.div
      variants={scaleIn}
      className={`group relative overflow-hidden bg-[#181818] border border-[rgba(200,161,90,0.08)] cursor-pointer
        ${image.span === 'tall' ? 'row-span-2' : ''}
        ${image.span === 'wide' ? 'col-span-2' : ''}
      `}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.4 }}
    >
      <div
        className="w-full h-full min-h-[220px] flex items-center justify-center relative"
        style={{
          background: hasPhoto
            ? '#101010'
            : `linear-gradient(135deg, #${['1a1a1a', '161618', '181614', '1a1816', '141618'][index % 5]} 0%, #${['0e0e0e', '0e0e10', '100e0e', '0e100e', '0e0e10'][index % 5]} 100%)`,
          aspectRatio: image.span === 'tall' ? '3/4' : image.span === 'wide' ? '16/9' : '4/3',
        }}
      >
        {hasPhoto ? (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="text-center">
            <div
              className="w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center"
              style={{ background: `${accent}15`, border: `1px solid ${accent}25` }}
            >
              <span style={{ color: accent }} className="text-xs font-body">
                {image.category.charAt(0)}
              </span>
            </div>
            <p className="text-[#2a2a2a] text-xs font-body tracking-widest uppercase">{image.alt}</p>
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-[#0E0E0E]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-5">
          <div>
            <span
              className="text-xs font-body tracking-[0.15em] uppercase mb-1 block"
              style={{ color: accent }}
            >
              {image.category}
            </span>
            <p className="text-[#F5F5F5] font-body text-sm">{image.alt}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <section id="gallery" className="py-28 lg:py-36 bg-[#0E0E0E] relative">
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div>
            <SectionLabel>Gallery</SectionLabel>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-[#F5F5F5] leading-tight"
            >
              Moments that
              <br />
              <span className="italic text-gradient">matter.</span>
            </motion.h2>
          </div>

          {/* Filter tabs */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="flex flex-wrap gap-2"
          >
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs font-body px-4 py-2 border tracking-wide transition-all duration-300 ${
                  activeCategory === cat
                    ? 'border-[#C8A15A] bg-[#C8A15A] text-[#0E0E0E]'
                    : 'border-[rgba(200,161,90,0.2)] text-[#A1A1A1] hover:border-[rgba(200,161,90,0.5)] hover:text-[#F5F5F5]'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Masonry grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[220px]"
          >
            {filtered.map((img, i) => (
              <GalleryItem key={img.id} image={img} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
