"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-background relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <p className="text-accent text-xs font-bold uppercase tracking-[0.6em] mb-6">Contact Us</p>
            <h2 className="text-5xl md:text-7xl font-black uppercase italic leading-[0.9] mb-12">
              Start Your <br />
              <span className="text-accent">Ultimate Journey.</span>
            </h2>
            
            <div className="space-y-10">
              <div className="flex gap-6 items-center group">
                <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-1">Call Us</p>
                  <p className="text-xl font-bold">+91 99999 88888</p>
                </div>
              </div>
              
              <div className="flex gap-6 items-center group">
                <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-1">Email Us</p>
                  <p className="text-xl font-bold">gurgaon@proultimate.in</p>
                </div>
              </div>
              
              <div className="flex gap-6 items-center group">
                <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-1">Find Us</p>
                  <p className="text-xl font-bold">SEC. 48, GURGAON, HR</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-16 h-64 rounded-[2rem] overflow-hidden grayscale contrast-125 border border-white/5 opacity-50 hover:opacity-100 transition-opacity">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14032.483163456388!2d77.0396489!3d28.4013149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d2287957367e9%3A0xc63b5168536f981e!2sSector%2048%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                className="w-full h-full border-0"
                loading="lazy" 
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="glass p-12 rounded-[3.5rem] border-white/10"
          >
            <form 
              className="space-y-8"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! Your ultimate journey starts now. We'll contact you shortly.");
              }}
            >
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Your Name</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-accent outline-none transition-colors" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Email Address</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-accent outline-none transition-colors" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Preferred Service</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-accent outline-none transition-colors appearance-none">
                  <option className="bg-background">Weight Training</option>
                  <option className="bg-background">Crossfit</option>
                  <option className="bg-background">HIIT classes</option>
                  <option className="bg-background">Yoga & Aerobics</option>
                  <option className="bg-background">Spa Services</option>
                </select>
              </div>
              <button className="w-full bg-accent text-white py-5 rounded-2xl font-black uppercase tracking-tighter hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl">
                Claim Free Session
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/919999988888"
        target="_blank"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-10 right-10 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl z-[100] cursor-pointer"
      >
        <MessageCircle size={32} color="white" />
      </motion.a>
    </section>
  );
};

export default Contact;
