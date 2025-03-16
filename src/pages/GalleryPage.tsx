import React, { useEffect } from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import ImageGallery from '../components/ui/ImageGallery';
import { galleryData } from '../data/gallery';

export default function GalleryPage() {
  useEffect(() => {
    // Picflow Gallery Integration
    if (!window.picflow) {
      window.picflow = true;
      const script = document.createElement('script');
      script.src = 'https://picflow.com/embed/main.js';
      script.type = 'module';
      script.defer = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <main className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Galerie</SectionTitle>
        
        {/* Picflow Gallery */}
        <div className="mb-16">
          <picflow-gallery 
            id="gal_z09fB1WzIzFAGbnu" 
            tenant="tnt_v73yvgRykESFxBFN" 
            lightbox="#000000E6" 
            no-background="true"
          ></picflow-gallery>
        </div>
        
        {/* 2024 Gallery */}
        <div className="mb-16">
          <ImageGallery 
            images={galleryData.gallery2024} 
            title="Wild Woods Open Air 2024" 
          />
        </div>

        {/* 2022 Gallery */}
        <div>
          <ImageGallery 
            images={galleryData.gallery2022} 
            title="Wild Woods Open Air 2022" 
          />
        </div>
      </div>
    </main>
  );
}
