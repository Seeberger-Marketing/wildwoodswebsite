import React from 'react';
import Hero from '../components/sections/Hero';
import WeekendInfo from '../components/sections/WeekendInfo';
import Experience from '../components/sections/Experience';
import Countdown from '../components/sections/Countdown';
import Sponsors from '../components/sections/Sponsors';
import FAQ from '../components/sections/FAQ';

export default function Home() {
  return (
    <main className="snap-y snap-mandatory h-screen overflow-y-auto">
      <div className="snap-start"><Hero /></div>
      <div className="snap-start"><Countdown /></div>
      <div className="snap-start"><WeekendInfo /></div>
      <div className="snap-start"><Experience /></div>
      <div className="snap-start"><Sponsors /></div>
      <div className="snap-start"><FAQ /></div>
    </main>
  );
}
