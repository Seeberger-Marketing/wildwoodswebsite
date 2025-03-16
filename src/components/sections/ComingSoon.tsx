import React from 'react';
import SectionTitle from '../ui/SectionTitle';

export default function ComingSoon() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#1a1a1a] to-black/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>LINE-UP & STAGE</SectionTitle>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xl text-gray-300">
            Das Line-up und die Stage-Informationen werden in Kürze veröffentlicht. 
            Bleibt gespannt!
          </p>
        </div>
      </div>
    </section>
  );
}
