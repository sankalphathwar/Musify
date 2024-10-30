import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import PersonalizedPlaylists from './pages/PersonalizedPlaylists';
import GenreExploration from './pages/GenreExploration';
import CurrentListening from './pages/CurrentListening';
import CrossGenreExperiment from './pages/CrossGenreExperiment';
import PlaylistMoodFilters from './pages/PlaylistMoodFilters';
import CollaborativePlaylists from './pages/CollaborativePlaylists';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkMode);
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('darkMode', (!darkMode).toString());
  };

  return (
    <Router>
      <div className={`min-h-screen bg-gradient-to-br from-violet-100 to-indigo-200 dark:from-gray-900 dark:to-violet-900 text-gray-800 dark:text-white transition-colors duration-300`}>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/personalized-playlists" element={<PersonalizedPlaylists />} />
            <Route path="/genre-exploration" element={<GenreExploration />} />
            <Route path="/current-listening" element={<CurrentListening />} />
            <Route path="/cross-genre" element={<CrossGenreExperiment />} />
            <Route path="/mood-filters" element={<PlaylistMoodFilters />} />
            <Route path="/collaborative-playlists" element={<CollaborativePlaylists />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;