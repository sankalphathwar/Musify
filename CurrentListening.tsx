import React from 'react';
import { BarChart, PieChart, TrendingUp } from 'lucide-react';

const CurrentListening: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center text-indigo-600 dark:text-indigo-400">Current Listening Analysis</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="card">
          <h2 className="text-2xl font-semibold mb-4">Top Genres</h2>
          <div className="flex items-center justify-center h-64">
            <PieChart className="w-48 h-48 text-indigo-600 dark:text-indigo-400 animate-float" />
          </div>
        </div>
        <div className="card">
          <h2 className="text-2xl font-semibold mb-4">Listening Habits</h2>
          <div className="flex items-center justify-center h-64">
            <BarChart className="w-48 h-48 text-indigo-600 dark:text-indigo-400 animate-float" />
          </div>
        </div>
        <div className="card">
          <h2 className="text-2xl font-semibold mb-4">Mood Preferences</h2>
          <div className="flex items-center justify-center h-64">
            <TrendingUp className="w-48 h-48 text-indigo-600 dark:text-indigo-400 animate-float" />
          </div>
        </div>
      </div>
      <div className="card mt-8">
        <h2 className="text-2xl font-semibold mb-4">Unexplored Genres</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">Discover new music by exploring these genres:</p>
        <div className="flex flex-wrap gap-2">
          {['Blues', 'Country', 'Reggae', 'Folk', 'World'].map((genre) => (
            <span key={genre} className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm">
              {genre}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CurrentListening;