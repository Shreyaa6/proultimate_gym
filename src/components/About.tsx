"use client";

import React from "react";
import { motion } from "framer-motion";

const stats = [
  { label: "Elite Members", value: "1000+" },
  { label: "Pro Trainers", value: "25" },
  { label: "Locations", value: "SEC. 48" },
  { label: "Legacy", value: "10 Yrs" },
];

const About = () => {
  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-accent text-xs font-bold uppercase tracking-[0.5em] mb-6">About proultimate gym</p>
            <h2 className="text-5xl md:text-7xl font-black uppercase italic leading-[0.9] mb-10">
              Forging <span className="text-gradient">Champions</span> <br />
              In <span className="text-accent">Gurgaon.</span>
            </h2>
            <p className="text-xl text-white/60 leading-relaxed font-light mb-12">
              proultimate gym is the gold standard of fitness in Gurgaon. 
              Our Sector 48 facility is a high-octane environment equipped with 
              the world's most advanced strength and conditioning tools. 
              Whether you're a pro athlete or just starting, we provide the 
              atmosphere to shatter your plateaus.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <p className="text-4xl font-black italic text-accent mb-2">{stat.value}</p>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/5 relative">
              <div className="absolute inset-0 bg-accent/20 mix-blend-overlay group-hover:bg-transparent transition-all duration-700" />
              <img 
                src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80" 
                alt="Gym Interior" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
            </div>
            
            <div className="absolute -bottom-10 -right-10 glass p-10 rounded-[2rem] max-w-xs border-accent/20 hidden md:block">
              <p className="text-accent text-[10px] font-bold uppercase tracking-widest mb-4">The Standard</p>
              <p className="text-sm italic font-medium leading-relaxed">
                "Pro Ultimate isn't just a gym; it's a commitment to being the absolute best version of yourself."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
