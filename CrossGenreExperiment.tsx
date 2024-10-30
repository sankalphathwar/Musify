import React from 'react';
import { Shuffle, Play } from 'lucide-react';

const genreCombos = [
  { name: 'Jazz + Electronic', image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
  { name: 'Classical + Lo-Fi', image: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
  { name: 'Rock + Hip Hop', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
];

const CrossGenreExperiment: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center text-indigo-600 dark:text-indigo-400">Cross-Genre Experimentation</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {genreCombos.map((combo) => (
          <div key={combo.name} className="card group cursor-pointer overflow-hidden">
            <div className="relative h-48 mb-4">
              <img src={combo.image} alt={combo.name} className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Shuffle className="w-12 h-12 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{combo.name}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Experience the fusion of these genres</p>
            <button className="btn btn-primary w-full">
              <Play className="w-5 h-5 mr-2 inline-block" />
              Create Playlist
            </button>
          </div>
        ))}
      </div>
      <div className="card mt-8">
        <h2 className="text-2xl font-semibold mb-4">Custom Genre Blend</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">Create your own unique genre combination:</p>
        <div className="flex items-center space-x-4">
          <select className="form-select w-1/3">
            <option>Select Genre 1</option>
            <option>Jazz</option>
            <option>Classical</option>
            <option>Rock</option>
            <option>Electronic</option>
            <option>Hip Hop</option>
          </select>
          <Shuffle className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
          <select className="form-select w-1/3">
            <option>Select Genre 2</option>
            <option>Lo-Fi</option>
            <option>Ambient</option>
            <option>Folk</option>
            <option>R&B</option>
            <option>World</option>
          </select>
          <button className="btn btn-primary">Blend</button>
        </div>
      </div>
    </div>
  );
};

export default CrossGenreExperiment;