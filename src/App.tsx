import React from 'react';
import { Header } from './components/Header';
import { Features } from './components/Features';
import { Rewards } from './components/Rewards';
import { Community } from './components/Community';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Features />
      <Rewards />
      <Community />
      <Footer />
    </div>
  );
}

export default App;