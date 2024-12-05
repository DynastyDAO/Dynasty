import React from 'react';
import { Gamepad2, Trophy, Swords, Coins } from 'lucide-react';

const features = [
  {
    icon: <Gamepad2 className="w-8 h-8" />,
    title: 'Custom Room Play',
    description: 'Battle it out in exclusive game modes tailored for ultimate fun and competition.'
  },
  {
    icon: <Trophy className="w-8 h-8" />,
    title: 'Offline Tournaments',
    description: 'Show your skills on the big stage with real-world tournaments.'
  },
  {
    icon: <Swords className="w-8 h-8" />,
    title: '1vs1 Raids & Team Competitions',
    description: 'Prove your dominance in intense gaming challenges.'
  },
  {
    icon: <Coins className="w-8 h-8" />,
    title: 'Bet on Champions',
    description: 'Elevate the excitement by wagering on your favorites and win big!'
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Your Gaming Journey Starts Here</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experience gaming like never before with our revolutionary features and competitive ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition">
              <div className="text-purple-500 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}