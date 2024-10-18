import React from 'react';
import { Plus } from 'lucide-react';

const Playlists: React.FC = () => {
  // Placeholder data for playlists
  const playlists = [
    { id: 1, name: 'Favorites', trackCount: 15 },
    { id: 2, name: 'Workout Mix', trackCount: 20 },
    { id: 3, name: 'Chill Vibes', trackCount: 30 },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Your Playlists</h2>
      <button className="mb-6 flex items-center bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
        <Plus size={20} className="mr-2" />
        Create New Playlist
      </button>
      <ul className="space-y-4">
        {playlists.map((playlist) => (
          <li key={playlist.id} className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
            <h3 className="font-semibold text-lg">{playlist.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{playlist.trackCount} tracks</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Playlists;