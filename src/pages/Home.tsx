import React from 'react';
import { useAudioStore } from '../store/audioStore';

const Home: React.FC = () => {
  const { currentTrack, isPlaying, togglePlayPause } = useAudioStore();

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Welcome to Your Music</h2>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">Now Playing</h3>
        {currentTrack ? (
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">{currentTrack}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Artist Name</p>
            </div>
            <button
              onClick={togglePlayPause}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
              {isPlaying ? 'Pause' : 'Play'}
            </button>
          </div>
        ) : (
          <p>No track currently playing</p>
        )}
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">Recently Played</h3>
        <ul className="space-y-2">
          <li>Track 1</li>
          <li>Track 2</li>
          <li>Track 3</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;