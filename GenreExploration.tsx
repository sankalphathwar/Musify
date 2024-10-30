import React from 'react';
import { Music, Info } from 'lucide-react';

const genres = [
  { name: 'Jazz', subgenres: ['Bebop', 'Swing', 'Cool Jazz'], image: 'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
  { name: 'Electronic', subgenres: ['House', 'Techno', 'Trance'], image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
  { name: 'Classical', subgenres: ['Baroque', 'Romantic', 'Contemporary'], image: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
];

const GenreExploration: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center text-indigo-600 dark:text-indigo-400">Genre Exploration</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {genres.map((genre) => (
          <div key={genre.name} className="card overflow-hidden group">
            <div className="relative h-48 mb-4">
              <img src={genre.image} alt={genre.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Music className="w-12 h-12 text-white" />
              </div>
            </div>
            <h2 className="text-2xl font-semibold mb-2">{genre.name}ify</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">Explore the world of {genre.name}</p>
            <h3 className="font-semibold mb-2">Popular Subgenres:</h3>
            <ul className="list-disc list-inside mb-4">
              {genre.subgenres.map((subgenre) => (
                <li key={subgenre}>{subgenre}</li>
              ))}
            </ul>
            <button className="btn btn-primary w-full">
              <Info className="w-5 h-5 mr-2 inline-block" />
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenreExploration;