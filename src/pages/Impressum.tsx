import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';

export default function Impressum() {
  return (
    <main className="py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Impressum</SectionTitle>
        <div className="prose prose-invert max-w-none">
          {/* Impressum content will go here */}
          <p>Impressum Inhalt wird hier eingefügt...</p>
        </div>
      </div>
    </main>
  );
}
