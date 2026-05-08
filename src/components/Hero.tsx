"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, MousePointer2 } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.png')" }}
      >
        <div className="absolute inset-0 bg-black/70" /> {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 px-4 py-1.5 rounded-full mb-8"
          >
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-accent text-[10px] font-bold uppercase tracking-[0.3em]">proultimate gym - SEC. 48 GURGAON</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-8xl lg:text-[10rem] font-black uppercase italic tracking-tighter leading-[0.8] mb-8"
          >
            The <span className="text-gradient">Ultimate</span> <br />
            Power <span className="text-accent">House</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-2xl text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed font-light"
          >
            Train Hard. Transform Faster. Gurgaon’s most elite fitness sanctuary 
            is now open at Sector 48.
          </motion.p>

          <div className="flex flex-wrap justify-center gap-6">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 0, 0, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-accent text-white px-12 py-5 rounded-2xl font-black uppercase tracking-tighter flex items-center gap-2 group shadow-2xl"
            >
              Join Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}
              className="glass px-12 py-5 rounded-2xl font-black uppercase tracking-tighter flex items-center gap-2"
            >
              Explore Plans
            </motion.button>
          </div>
        </motion.div>

      {/* Stats / Floating Elements Removed */}
      </div>
      
      {/* Scroll Indicator Removed */}
    </section>
  );
};

export default Hero;
