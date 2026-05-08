"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "2,499",
    features: ["Gym Floor Access", "Locker Room", "Standard Equipment", "24/7 Access"],
    popular: false
  },
  {
    name: "Premium",
    price: "4,999",
    features: ["All Basic Features", "Group Classes", "Sauna & Steam", "Personal Locker", "Initial Assessment"],
    popular: true
  },
  {
    name: "Elite",
    price: "8,999",
    features: ["All Premium Features", "Personal Training (4/mo)", "Nutrition Plan", "Laundry Service", "Private Lounge"],
    popular: false
  }
];

const Membership = () => {
  return (
    <section id="memberships" className="py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-accent text-xs font-bold uppercase tracking-[0.6em] mb-6"
          >
            Pricing Plans
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black uppercase italic"
          >
            Investment in <span className="text-accent">Self</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-12 rounded-[3.5rem] border ${
                plan.popular ? "bg-accent text-background border-accent" : "bg-surface border-white/5"
              } flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute top-8 right-8 bg-background text-accent px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-xl font-bold uppercase tracking-widest mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-10">
                <span className="text-5xl font-black italic">₹{plan.price}</span>
                <span className={`text-xs uppercase font-bold tracking-widest ${plan.popular ? "text-background/50" : "text-foreground/30"}`}>/ month</span>
              </div>

              <ul className="space-y-6 mb-12 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-4 text-sm font-medium">
                    <div className={`p-1 rounded-full ${plan.popular ? "bg-background/10" : "bg-accent/10"}`}>
                      <Check className={`w-3 h-3 ${plan.popular ? "text-background" : "text-accent"}`} strokeWidth={4} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className={`w-full py-5 rounded-2xl font-black uppercase tracking-tighter transition-transform active:scale-95 ${
                plan.popular ? "bg-background text-accent hover:bg-black" : "bg-accent text-background hover:bg-accent-hover"
              }`}>
                Join {plan.name}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Membership;
