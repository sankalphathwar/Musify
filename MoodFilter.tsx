import React from 'react';
import { Smile, Zap, BookOpen } from 'lucide-react';

const moods = [
  { name: 'Chill', icon: Smile },
  { name: 'Energetic', icon: Zap },
  { name: 'Study', icon: BookOpen },
];

const MoodFilter: React.FC = () => {
  return (
    <div className="my-8">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Playlist Mood Filters</h2>
      <div className="flex space-x-4">
        {moods.map((mood) => (
          <button
            key={mood.name}
            className="flex items-center space-x-2 px-4 py-2 bg-white dark:bg-gray-700 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
          >
            <mood.icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <span className="text-gray-800 dark:text-white">{mood.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MoodFilter;