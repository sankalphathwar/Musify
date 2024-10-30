import React, { useState } from 'react';
import { Users, Plus, Share2 } from 'lucide-react';

const CollaborativePlaylists: React.FC = () => {
  const [playlists, setPlaylists] = useState([
    { id: 1, name: 'Summer Vibes', genre: 'Pop', collaborators: 3 },
    { id: 2, name: 'Workout Mix', genre: 'Electronic', collaborators: 2 },
    { id: 3, name: 'Chill Evenings', genre: 'Lo-Fi', collaborators: 4 },
  ]);

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center text-indigo-600 dark:text-indigo-400">Collaborative Playlists</h1>
      <div className="card mb-8">
        <h2 className="text-2xl font-semibold mb-4">Create a New Collaborative Playlist</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="playlistName" className="block mb-1">Playlist Name</label>
            <input type="text" id="playlistName" className="form-input w-full" placeholder="Enter playlist name" />
          </div>
          <div>
            <label htmlFor="genre" className="block mb-1">Genre</label>
            <select id="genre" className="form-select w-full">
              <option>Select a genre</option>
              <option>Pop</option>
              <option>Rock</option>
              <option>Hip Hop</option>
              <option>Electronic</option>
              <option>Jazz</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary w-full">
            <Plus className="w-5 h-5 mr-2 inline-block" />
            Create Collaborative Playlist
          </button>
        </form>
      </div>
      <div className="card">
        <h2 className="text-2xl font-semibold mb-4">Your Collaborative Playlists</h2>
        <ul className="space-y-4">
          {playlists.map((playlist) => (
            <li key={playlist.id} className="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-800 rounded">
              <div>
                <h3 className="font-semibold">{playlist.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{playlist.genre}</p>
              </div>
              <div className="flex items-center space-x-4">
                <span className="flex items-center">
                  <Users className="w-5 h-5 mr-1" />
                  {playlist.collaborators}
                </span>
                <button className="btn btn-primary">
                  <Share2 className="w-5 h-5 mr-1" />
                  Invite
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CollaborativePlaylists;