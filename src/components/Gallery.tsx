"use client";

import React from "react";
import { motion } from "framer-motion";

const galleryImages = [
  { url: "https://i.pinimg.com/webp85/736x/3e/db/f0/3edbf095758f5b12bfd22697e2519761.webp", span: "row-span-2 col-span-2" },
  { url: "https://i.pinimg.com/webp85/736x/67/1b/59/671b59411a699238097a043775b5a13a.webp", span: "col-span-1" },
  { url: "https://i.pinimg.com/736x/fd/b8/7b/fdb87b209fa3b670a430a24b2a3cf3fa.jpg", span: "row-span-2" },
  { url: "https://i.pinimg.com/webp85/1200x/67/a8/15/67a81533cfc0d82cbae30d69e43e3065.webp", span: "col-span-1" },
  { url: "https://i.pinimg.com/736x/12/a7/c4/12a7c477b923b3263b3db6bfb7fb998c.jpg", span: "col-span-2" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-32 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <p className="text-accent text-xs font-bold uppercase tracking-[0.6em] mb-4">The Sanctuary</p>
            <h2 className="text-5xl md:text-7xl font-black uppercase italic">Our <span className="text-accent">Space.</span></h2>
          </div>
          <p className="text-white/50 max-w-sm">
            Experience an environment designed for ultimate performance. 
            Every corner of proultimate gym is crafted to inspire greatness.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-3 gap-4 md:gap-8 h-[800px]">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className={`${img.span} relative overflow-hidden rounded-[2rem] md:rounded-[3rem] group border border-white/5`}
            >
              <img 
                src={img.url} 
                alt="proultimate gym interior" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
