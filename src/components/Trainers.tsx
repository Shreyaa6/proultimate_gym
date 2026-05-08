"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, Mail, Phone } from "lucide-react";

const trainers = [
  {
    name: "Vikram Singh",
    role: "Head Coach / Strength",
    img: "https://i.pinimg.com/736x/83/76/9b/83769b32fb7c92e764cca062c2136a66.jpg",
    socials: [Globe, Mail, Phone]
  },
  {
    name: "Arjun Yadav",
    role: "HIIT & Transformation Expert",
    img: "https://i.pinimg.com/1200x/9f/ff/0c/9fff0c4371c3309ea26e8422aca2867a.jpg",
    socials: [Globe, Mail, Phone]
  },
  {
    name: "Rahul Sharma",
    role: "Pro Bodybuilder / Lead Trainer",
    img: "https://i.pinimg.com/1200x/55/ee/0f/55ee0f8abf6e7e5056365e68d9353da2.jpg",
    socials: [Globe, Mail, Phone]
  }
];

const Trainers = () => {
  return (
    <section id="trainers" className="py-32 px-6 bg-surface relative overflow-hidden">
      {/* Decorative text background */}
      <div className="absolute top-0 left-0 w-full overflow-hidden opacity-[0.02] select-none pointer-events-none">
        <p className="text-[20vw] font-black uppercase italic whitespace-nowrap -translate-x-20">proultimate gym</p>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-accent text-xs font-bold uppercase tracking-[0.6em] mb-6"
            >
              Elite Coaches
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black uppercase italic"
            >
              हमारे <span className="text-accent">ट्रेनर्स</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-foreground/50 max-w-sm"
          >
            हमारे ट्रेनर्स सिर्फ प्रमाणित नहीं हैं; वे अपने कौशल के उस्ताद हैं 
            और उनके पास दशकों का अनुभव है।
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {trainers.map((trainer, i) => (
            <motion.div
              key={trainer.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden mb-8 border border-white/5">
                <img 
                  src={trainer.img} 
                  alt={trainer.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Social Overlay */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                  {trainer.socials.map((Icon, idx) => (
                    <button key={idx} className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-accent hover:text-white transition-colors">
                      <Icon size={18} />
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-black uppercase italic mb-1">{trainer.name}</h3>
                <p className="text-accent text-xs font-bold uppercase tracking-widest">{trainer.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
