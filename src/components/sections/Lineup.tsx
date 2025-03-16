import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import { artistData } from '../../data/artists';
import ArtistCard from '../ui/ArtistCard';

export default function Lineup() {
  return (
    <section id="lineup" className="py-20 bg-gradient-to-b from-black/90 to-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>LIVE ON STAGE</SectionTitle>
        <p className="text-center text-gray-300 mb-12">
          Unser fantastisches Line-Up mit einem top Mix aus DJs von beliebten Radio Stations 
          und bekannten Gesichtern der Hip Hop Szene.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {artistData.map((artist, index) => (
            <ArtistCard key={artist.name} artist={artist} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
