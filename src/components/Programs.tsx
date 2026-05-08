"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Dumbbell, 
  Zap, 
  Wind, 
  Heart, 
  UserCheck, 
  Trophy, 
  Sparkles, 
  Coffee, 
  Music, 
  Target,
  Flame
} from "lucide-react";

const programs = [
  {
    icon: <Dumbbell className="w-10 h-10" />,
    title: "Weight Training",
    description: "Build massive strength and pure muscle with Gurgaon's most advanced heavy lifting zone.",
    img: "https://i.pinimg.com/736x/cf/ea/71/cfea719b29faa06ec4a718490bb9a17a.jpg"
  },
  {
    icon: <Zap className="w-10 h-10" />,
    title: "Crossfit",
    description: "High-intensity functional movements designed to build an athletic, powerful physique.",
    img: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80"
  },
  {
    icon: <Flame className="w-10 h-10" />,
    title: "HIIT classes",
    description: "Burn maximum calories in minimum time with our heart-pounding interval training.",
    img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80"
  },
  {
    icon: <Music className="w-10 h-10" />,
    title: "Zumba & Dance",
    description: "Fusion of high-energy dance moves and fitness for a fun, effective full-body workout.",
    img: "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?auto=format&fit=crop&q=80"
  },
  {
    icon: <Wind className="w-10 h-10" />,
    title: "Yoga & Aerobics",
    description: "Master your mobility, breath, and cardiovascular health in our premium studios.",
    img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80"
  },
  {
    icon: <Trophy className="w-10 h-10" />,
    title: "Adult Sports",
    description: "Competitive and recreational sports programs designed for the active adult.",
    img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80"
  },
  {
    icon: <UserCheck className="w-10 h-10" />,
    title: "Personal Training",
    description: "Customized 1-on-1 coaching from Gurgaon's most decorated fitness experts.",
    img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80"
  },
  {
    icon: <Coffee className="w-10 h-10" />,
    title: "Nutrition Consulting",
    description: "Expert dietary planning to fuel your transformation and optimize performance.",
    img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80"
  },
  {
    icon: <Sparkles className="w-10 h-10" />,
    title: "Spa Services",
    description: "Luxury recovery and relaxation to rejuvenate your body after intense training.",
    img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80"
  }
];

const Programs = () => {
  return (
    <section id="programs" className="py-32 px-6 bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-accent text-xs font-bold uppercase tracking-[0.6em] mb-6"
          >
            Elite Services
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black uppercase italic"
          >
            Ultimate <span className="text-accent">Offerings</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((prog, i) => (
            <motion.div
              key={prog.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -12 }}
              className="group relative h-[450px] rounded-[3rem] overflow-hidden border border-white/5"
            >
              <img 
                src={prog.img} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt={prog.title} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent group-hover:via-black/60 transition-all duration-500" />
              
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <div className="mb-6 text-accent group-hover:scale-110 transition-transform duration-500 origin-left">
                  {prog.icon}
                </div>
                <h3 className="text-3xl font-black uppercase italic mb-4">{prog.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {prog.description}
                </p>
                
                <div 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="mt-8 flex items-center gap-2 text-accent text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 cursor-pointer"
                >
                  <span>Explore Program</span>
                  <div className="w-8 h-px bg-accent" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
