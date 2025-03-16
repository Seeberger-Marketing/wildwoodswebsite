import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';

export default function WeekendInfo() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-black/90 to-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>THE EXPERIENCE</SectionTitle>
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl text-gray-300 font-light"
          >
            48 Stunden pure Magie. Zwei einzigartige Vibes. Ein Festival.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-[#d8a12c] mt-4 font-medium"
          >
            1. & 2. August 2025
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900/40 to-black/40 p-8 backdrop-blur-sm hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <h3 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              Electric Friday
            </h3>
            <p className="text-[#d8a12c] text-sm mb-4">1. August 2025</p>
            <p className="text-gray-300 text-lg">
              Lass dich von elektronischen Beats in andere Sphären tragen. 
              Eine Nacht, die die Grenzen zwischen Realität und Traum verschwimmen lässt.
            </p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-900/40 to-black/40 p-8 backdrop-blur-sm hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <h3 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-red-400">
              Fusion Saturday
            </h3>
            <p className="text-[#d8a12c] text-sm mb-4">2. August 2025</p>
            <p className="text-gray-300 text-lg">
              Erlebe die perfekte Verschmelzung verschiedener Musikwelten. 
              Wo Genres sich treffen und neue Sounds entstehen.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
