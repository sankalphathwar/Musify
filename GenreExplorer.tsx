import React from 'react';
import { Music } from 'lucide-react';

const genres = ['Jazz', 'House', 'Classical', 'Rock', 'Hip Hop'];

const GenreExplorer: React.FC = () => {
  return (
    <div className="my-8">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Genre Explorer</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {genres.map((genre) => (
          <div key={genre} className="card group cursor-pointer">
            <div className="flex flex-col items-center">
              <Music className="w-12 h-12 text-indigo-600 dark:text-indigo-400 mb-2 group-hover:animate-bounce" />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{genre}ify</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Explore {genre}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenreExplorer;