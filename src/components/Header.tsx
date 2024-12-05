import React from 'react';
import { Gamepad2, Trophy, Users } from 'lucide-react';

export function Header() {
  return (
    <header className="relative bg-black text-white">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 z-10" />
        <img
          src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80"
          alt="Gaming Setup"
          className="w-full h-full object-cover"
        />
      </div>
      
      <nav className="relative z-20 container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Gamepad2 className="w-8 h-8 text-purple-500" />
            <span className="text-2xl font-bold">Dynasty</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="hover:text-purple-400 transition">Features</a>
            <a href="#rewards" className="hover:text-purple-400 transition">Rewards</a>
            <a href="#community" className="hover:text-purple-400 transition">Community</a>
            <button className="bg-purple-600 px-6 py-2 rounded-full hover:bg-purple-700 transition">
              Join Now
            </button>
          </div>
        </div>
      </nav>

      <div className="relative z-20 container mx-auto px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to Dynasty: The Ultimate Gaming Powerhouse
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Revolutionizing Gaming with Custom Play, Competitive Tournaments, and Real-World Rewards!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-purple-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition">
              Join the Revolution
            </button>
            <button className="border border-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white/10 transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}