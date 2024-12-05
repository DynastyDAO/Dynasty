import React from 'react';
import { MessageCircle, Twitter as TwitterIcon, Instagram as InstagramIcon, Youtube as YoutubeIcon } from 'lucide-react';

export function Community() {
  return (
    <section id="community" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Be a Part of the Dynasty Movement</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join our thriving community of gamers, competitors, and enthusiasts.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {[
            { icon: <MessageCircle className="w-6 h-6" />, name: 'Discord' },
            { icon: <TwitterIcon className="w-6 h-6" />, name: 'Twitter' },
            { icon: <InstagramIcon className="w-6 h-6" />, name: 'Instagram' },
            { icon: <YoutubeIcon className="w-6 h-6" />, name: 'YouTube' }
          ].map((social, index) => (
            <a
              key={index}
              href="#"
              className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-full transition"
            >
              {social.icon}
              <span className="text-white">{social.name}</span>
            </a>
          ))}
        </div>

        <div className="mt-16 max-w-md mx-auto">
          <div className="bg-gray-800 p-8 rounded-xl">
            <h3 className="text-xl font-bold text-white mb-4">Stay Updated!</h3>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="bg-purple-600 px-6 py-2 rounded-lg hover:bg-purple-700 transition text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}