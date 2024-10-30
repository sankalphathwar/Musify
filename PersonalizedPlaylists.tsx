import React, { useState } from 'react';
import { Sliders } from 'lucide-react';

const PersonalizedPlaylists: React.FC = () => {
  const [trackCount, setTrackCount] = useState(20);
  const genres = ['Pop', 'Rock', 'Hip Hop', 'Electronic', 'Jazz', 'Classical'];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center text-indigo-600 dark:text-indigo-400">Personalized Playlists</h1>
      <div className="card mb-8">
        <h2 className="text-2xl font-semibold mb-4">Create Your Playlist</h2>
        <div className="flex items-center mb-4">
          <label htmlFor="trackCount" className="mr-4">Number of tracks:</label>
          <input
            type="range"
            id="trackCount"
            min="10"
            max="50"
            step="5"
            value={trackCount}
            onChange={(e) => setTrackCount(parseInt(e.target.value))}
            className="w-64"
          />
          <span className="ml-4">{trackCount}</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
          {genres.map((genre) => (
            <button key={genre} className="btn btn-primary">
              {genre}
            </button>
          ))}
        </div>
        <button className="btn btn-primary w-full">
          <Sliders className="w-5 h-5 mr-2 inline-block" />
          Generate Playlist
        </button>
      </div>
      <div className="card">
        <h2 className="text-2xl font-semibold mb-4">Your Personalized Playlist</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">Select a genre and track count to generate your personalized playlist.</p>
      </div>
    </div>
  );
};

export default PersonalizedPlaylists;