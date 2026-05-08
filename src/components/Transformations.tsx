"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sanya Gupta",
    role: "Marketing Executive",
    comment: "proultimate gym has completely changed my perspective on fitness. The environment is so motivating, and the personal training is world-class.",
    img: "https://i.pinimg.com/736x/c2/c0/15/c2c015674ebc62572aaef00052b669ec.jpg",
    stats: "Lost 12kg in 4 months"
  },
  {
    name: "Aryan Sharma",
    role: "Software Engineer",
    comment: "The best gym in Gurgaon hands down. The equipment at Sector 48 is top-notch and the trainers really know their stuff. Highly recommended!",
    img: "https://i.pinimg.com/736x/3c/7c/9b/3c7c9b6b6e8083d9f651905b55930ece.jpg",
    stats: "Gained 8kg Lean Muscle"
  }
];

const Transformations = () => {
  return (
    <section id="transformations" className="py-32 px-6 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-accent text-xs font-bold uppercase tracking-[0.6em] mb-6"
          >
            Visible Impact
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black uppercase italic"
          >
            Real <span className="text-accent">Stories.</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="glass p-10 rounded-[4rem] border-white/5 relative group"
            >
              <div className="absolute top-10 right-10 text-accent/20">
                <Quote size={80} />
              </div>
              
              <div className="flex flex-col md:flex-row gap-10 items-center relative z-10">
                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-accent/20 group-hover:border-accent transition-colors shrink-0">
                  <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                </div>
                
                <div>
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={14} className="fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-xl italic font-medium leading-relaxed mb-6 text-white/90">
                    "{t.comment}"
                  </p>
                  <div>
                    <h4 className="text-2xl font-black uppercase italic text-accent">{t.name}</h4>
                    <p className="text-xs uppercase tracking-widest text-white/40 font-bold mb-2">{t.role}</p>
                    <div className="inline-block px-4 py-1 bg-accent/10 border border-accent/20 rounded-full">
                      <span className="text-accent text-[10px] font-bold uppercase tracking-widest">{t.stats}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Transformations;
