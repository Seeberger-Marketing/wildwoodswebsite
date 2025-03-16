import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';

export default function Sponsors() {
  const sponsors = [
    { name: "SoundMaster Pro", tier: "gold" },
    { name: "EcoStage", tier: "gold" },
    { name: "LightTech", tier: "silver" },
    { name: "ForestDrinks", tier: "silver" },
    { name: "LocalFood Co", tier: "bronze" },
    { name: "GreenEnergy", tier: "bronze" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-24 bg-black/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>UNSERE PARTNER</SectionTitle>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {sponsors.map((sponsor) => (
            <motion.div
              key={sponsor.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className={`
                p-8 rounded-xl backdrop-blur-sm flex items-center justify-center
                ${sponsor.tier === 'gold' ? 'bg-[#d8a12c]/10 border-[#d8a12c]/30' : 
                  sponsor.tier === 'silver' ? 'bg-white/5 border-white/20' : 
                  'bg-white/5 border-white/10'}
                border transition-all duration-300 hover:border-[#d8a12c]/50
              `}
            >
              <span className={`
                text-xl font-bold
                ${sponsor.tier === 'gold' ? 'text-[#d8a12c]' : 
                  sponsor.tier === 'silver' ? 'text-gray-200' : 
                  'text-gray-300'}
              `}>
                {sponsor.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
