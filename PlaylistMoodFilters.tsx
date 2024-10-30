import React, { useState } from 'react';
import { Smile, Zap, BookOpen, Coffee, Sun, Moon } from 'lucide-react';

const moods = [
  { name: 'Chill', icon: Coffee },
  { name: 'Energetic', icon: Zap },
  { name: 'Study', icon: BookOpen },
  { name: 'Happy', icon: Smile },
  { name: 'Morning', icon: Sun },
  { name: 'Night', icon: Moon },
];

const PlaylistMoodFilters: React.FC = () => {
  const [selectedMood, setSelectedMood] = useState('');

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center text-indigo-600 dark:text-indigo-400">Playlist Mood Filters</h1>
      <div className="card mb-8">
        <h2 className="text-2xl font-semibold mb-4">Select Your Mood</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {moods.map((mood) => (
            <button
              key={mood.name}
              className={`flex items-center justify-center space-x-2 p-4 rounded-lg transition-all duration-300 ${
                selectedMood === mood.name
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white dark:bg-gray-800 hover:bg-indigo-100 dark:hover:bg-indigo-900'
              }`}
              onClick={() => setSelectedMood(mood.name)}
            >
              <mood.icon className="w-6 h-6" />
              <span>{mood.name}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="card">
        <h2 className="text-2xl font-semibold mb-4">Your Mood-Based Playlist</h2>
        {selectedMood ? (
          <>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Here's a custom playlist based on your {selectedMood.toLowerCase()} mood:
            </p>
            <ul className="space-y-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <li key={i} className="flex items-center justify-between p-2 bg-gray-100 dark:bg-gray-800 rounded">
                  <span>Song {i}</span>
                  <span className="text-gray-500 dark:text-gray-400">Artist {i}</span>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <p className="text-gray-600 dark:text-gray-300">Select a mood to generate a custom playlist.</p>
        )}
      </div>
    </div>
  );
};

export default PlaylistMoodFilters;