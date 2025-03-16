import React from 'react';
import { Artist } from '../../types';

interface ArtistCardProps {
  artist: Artist;
  index: number;
}

export default function ArtistCard({ artist, index }: ArtistCardProps) {
  return (
    <div 
      className="bg-black/50 p-6 rounded-lg text-center transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-[#d8a12c]/20"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="h-48 mb-4 overflow-hidden rounded-lg">
        <img
          src={artist.image}
          alt={artist.name}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            e.currentTarget.src = '/assets/images/artist-placeholder.jpg';
          }}
        />
      </div>
      <h3 className="text-[#d8a12c] text-xl font-semibold mb-2">{artist.name}</h3>
      <p className="text-white mb-2">{artist.stage}</p>
      <p className="text-gray-400 text-sm">{artist.role}</p>
    </div>
  );
}
