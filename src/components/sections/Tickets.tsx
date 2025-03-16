import React, { useEffect } from 'react';
import SectionTitle from '../ui/SectionTitle';

export default function Tickets() {
  useEffect(() => {
    // DiTix Script Integration
    const script = document.createElement('script');
    script.src = 'https://ditix.app/embed/shop/event.js';
    script.type = 'text/javascript';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="tickets" className="py-20 bg-gradient-to-b from-[#1a1a1a] to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Tickets</SectionTitle>
        <p className="text-center text-gray-300 mb-12">
          Sichere dir jetzt dein Ticket für eine unvergessliche Nacht im Wild Woods!
        </p>
        <div className="flex justify-center">
          <div 
            className="ditix-event-box w-full max-w-3xl" 
            data-src="https://pipsevents.ditix.shop/tickets/event/XLhw4GaFj412Imzx" 
            data-accent-color="#FFAF60"
          ></div>
        </div>
      </div>
    </section>
  );
}
