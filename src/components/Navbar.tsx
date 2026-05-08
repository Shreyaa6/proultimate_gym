"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Dumbbell } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Memberships", href: "#memberships" },
    { name: "Trainers", href: "#trainers" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isScrolled ? "glass py-4 shadow-2xl border-b border-white/5" : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.a 
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <div className="bg-accent p-2 rounded-xl shadow-[0_0_20px_rgba(255,0,0,0.4)]">
            <Dumbbell className="text-white w-6 h-6" strokeWidth={2.5} />
          </div>
          <span className="text-xl md:text-2xl font-black tracking-tighter uppercase italic">proultimate gym</span>
        </motion.a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-[10px] font-bold hover:text-accent transition-colors uppercase tracking-[0.3em] relative group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-px bg-accent transition-all group-hover:w-full" />
            </motion.a>
          ))}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-accent text-white px-8 py-3 rounded-xl text-xs font-black uppercase tracking-tighter hover:shadow-[0_0_30px_rgba(255,0,0,0.3)] transition-all"
          >
            Start Training
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="w-12 h-12 rounded-xl glass flex items-center justify-center text-foreground"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[101] glass flex flex-col p-12 lg:hidden"
          >
            <div className="flex justify-between items-center mb-16">
              <span className="text-2xl font-black uppercase italic">proultimate gym</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                <X size={24} />
              </button>
            </div>
            
            <div className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-4xl font-black uppercase italic hover:text-accent transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
            
            <div className="mt-auto">
              <button className="w-full bg-accent text-white py-6 rounded-2xl font-black uppercase tracking-tighter text-xl">
                Start Training
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
