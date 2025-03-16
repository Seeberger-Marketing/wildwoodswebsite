import React from 'react';
import SectionTitle from '../ui/SectionTitle';

export default function Gallery() {
  return (
    <section id="galerie" className="py-20 bg-black/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Fotos 2024</SectionTitle>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(12)].map((_, index) => (
            <div key={index} className="aspect-square overflow-hidden rounded-lg transform hover:scale-105 transition-duration-300">
              <img
                src={`/assets/images/gallery/image-${index + 1}.jpg`}
                alt={`Festival Impression ${index + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = '/assets/images/gallery-placeholder.jpg';
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
