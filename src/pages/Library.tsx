import React from 'react';

const Library: React.FC = () => {
  // Placeholder data for the library
  const tracks = [
    { id: 1, title: 'Track 1', artist: 'Artist 1' },
    { id: 2, title: 'Track 2', artist: 'Artist 2' },
    { id: 3, title: 'Track 3', artist: 'Artist 3' },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Your Library</h2>
      <ul className="space-y-4">
        {tracks.map((track) => (
          <li key={track.id} className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 flex justify-between items-center">
            <div>
              <h3 className="font-semibold">{track.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{track.artist}</p>
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">
              Play
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Library;