"use client";

import React from "react";
import { motion } from "framer-motion";

const CTABanner = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="relative rounded-[4rem] overflow-hidden bg-accent p-16 md:p-24 text-center group"
        >
          <div className="absolute inset-0 flex items-center justify-center opacity-10 select-none pointer-events-none group-hover:scale-110 transition-transform duration-1000">
            <p className="text-[10vw] font-black uppercase italic whitespace-nowrap">Pro Ultimate Pro Ultimate</p>
          </div>

          <div className="relative z-10">
            <h2 className="text-5xl md:text-8xl font-black uppercase italic text-background leading-none mb-10 tracking-tighter">
              Your Strongest Self <br />
              Starts <span className="text-white">Today.</span>
            </h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-background text-accent px-12 py-5 rounded-2xl font-black uppercase tracking-tighter hover:bg-black transition-colors"
            >
              Join Now
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
