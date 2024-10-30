import React from 'react';
import { Link } from 'react-router-dom';
import { Music, Headphones, Radio, Share2, Smile } from 'lucide-react';

const features = [
  { name: 'Personalized Playlists', icon: Headphones, path: '/personalized-playlists' },
  { name: 'Genre Exploration', icon: Radio, path: '/genre-exploration' },
  { name: 'Current Listening Analysis', icon: Music, path: '/current-listening' },
  { name: 'Cross-Genre Experimentation', icon: Share2, path: '/cross-genre' },
  { name: 'Playlist Mood Filters', icon: Smile, path: '/mood-filters' },
  { name: 'Collaborative Playlists', icon: Share2, path: '/collaborative-playlists' },
];

const Home: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-8 text-indigo-600 dark:text-indigo-400">Welcome to Musify</h1>
      <p className="text-xl mb-12 text-gray-600 dark:text-gray-300">Discover, create, and share music like never before</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature) => (
          <Link key={feature.name} to={feature.path} className="card group hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors duration-300">
            <feature.icon className="w-16 h-16 text-indigo-600 dark:text-indigo-400 mb-4 group-hover:animate-bounce" />
            <h2 className="text-2xl font-semibold mb-2">{feature.name}</h2>
            <p className="text-gray-600 dark:text-gray-300">Explore {feature.name.toLowerCase()}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;