"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Membership from "@/components/Membership";
import Trainers from "@/components/Trainers";
import Transformations from "@/components/Transformations";
import Gallery from "@/components/Gallery";
import CTABanner from "@/components/CTABanner";
import Contact from "@/components/Contact";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative bg-background text-foreground min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Membership />
      <Trainers />
      <Transformations />
      <Gallery />
      <CTABanner />
      <Contact />
      
      {/* Footer Section */}
      <footer className="py-20 border-t border-white/5 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-16 mb-20">
            <div className="col-span-2">
                <span className="text-3xl font-black tracking-tighter uppercase italic text-accent">proultimate gym</span>
              <p className="text-white/50 max-w-sm mb-10 text-sm leading-relaxed">
                Gurgaon's most elite fitness destination. Located at Sector 48, 
                we provide the ultimate training environment for high-performance 
                living. Join the elite.
              </p>
              <div className="flex gap-6">
                {['fb', 'ig', 'tw', 'yt'].map((social) => (
                  <div key={social} className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-accent hover:text-white transition-colors cursor-pointer uppercase text-[10px] font-bold">
                    {social}
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-black uppercase tracking-widest mb-8">Quick Links</h4>
              <ul className="space-y-4 text-sm text-white/40 font-medium">
                <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
                <li><a href="#programs" className="hover:text-accent transition-colors">Services</a></li>
                <li><a href="#memberships" className="hover:text-accent transition-colors">Memberships</a></li>
                <li><a href="#trainers" className="hover:text-accent transition-colors">Elite Trainers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-black uppercase tracking-widest mb-8">Hours</h4>
              <ul className="space-y-4 text-sm text-white/40 font-medium">
                <li>Monday - Friday: 5am - 11pm</li>
                <li>Saturday: 6am - 10pm</li>
                <li>Sunday: 8am - 8pm</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold">
              © 2024 proultimate gym - SEC. 48 GURGAON. All Rights Reserved.
            </p>
            <div className="flex gap-8 text-[10px] uppercase tracking-widest text-white/30 font-bold">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
