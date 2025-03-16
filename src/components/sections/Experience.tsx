import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';

export default function Experience() {
  const features = [
    {
      title: "Mainstage",
      description: "Imposante Hauptbühne mit State-of-the-art Soundsystem und spektakulärer Opening Show"
    },
    {
      title: "Forestage",
      description: "Alternative Bühne im Wald mit einzigartiger Atmosphäre und alternativen Sounds"
    },
    {
      title: "Natürliche Waldkulisse",
      description: "Der Wald als magische Szenerie mit stimmungsvoller Dekoration"
    },
    {
      title: "Food Village",
      description: "Kulinarische Highlights von lokalen Food Artists"
    },
    {
      title: "Chill Areas",
      description: "Entspannte Rückzugsorte direkt in der Natur"
    },
    {
      title: "Art Installations",
      description: "Interaktive Kunstinstallationen verteilt im gesamten Festivalgelände"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section className="py-24 bg-black/90 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50"></div>
      
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <SectionTitle>FESTIVAL HIGHLIGHTS</SectionTitle>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.2 }
              }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#d8a12c]/20 to-[#f4c668]/20 rounded-xl transform scale-[0.98] opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"></div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-[#d8a12c]/50 transition-all duration-300">
                <h3 className="text-2xl font-bold text-[#d8a12c] mb-4">{feature.title}</h3>
                <p className="text-gray-300 text-lg leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
