import React from 'react';
import { Gift, Award, Crown } from 'lucide-react';

export function Rewards() {
  return (
    <section id="rewards" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Win Big, Play Bigger</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From real-world rewards to NFTs, every win counts in the Dynasty ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-600/20 to-purple-600/40 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300" />
            <img
              src="https://images.unsplash.com/photo-1621799754526-a0d52c49fad5?auto=format&fit=crop&q=80"
              alt="NFT Rewards"
              className="w-full h-64 object-cover rounded-xl"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-xl font-bold text-white mb-2">Exclusive NFTs</h3>
              <p className="text-gray-200">Collect unique digital assets and showcase your achievements.</p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-600/20 to-purple-600/40 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300" />
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80"
              alt="Prize Pools"
              className="w-full h-64 object-cover rounded-xl"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-xl font-bold text-white mb-2">Massive Prize Pools</h3>
              <p className="text-gray-200">Compete for substantial rewards in our tournaments.</p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-600/20 to-purple-600/40 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300" />
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
              alt="Leaderboards"
              className="w-full h-64 object-cover rounded-xl"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-xl font-bold text-white mb-2">Global Leaderboards</h3>
              <p className="text-gray-200">Rise through the ranks and become a Dynasty legend.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}