import React from 'react';
import { useAudioStore } from '../store/audioStore';
import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react';

const NowPlaying: React.FC = () => {
  const { currentTrack, isPlaying, volume, togglePlayPause, setVolume } = useAudioStore();

  return (
    <div className="flex flex-col items-center space-y-8">
      <div className="w-64 h-64 bg-gray-300 dark:bg-gray-700 rounded-lg shadow-lg">
        {/* Placeholder for album art */}
      </div>
      <div className="text-center">
        <h2 className="text-2xl font-bold">{currentTrack || 'No track selected'}</h2>
        <p className="text-gray-600 dark:text-gray-400">Artist Name</p>
      </div>
      <div className="flex items-center space-x-6">
        <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
          <SkipBack size={24} />
        </button>
        <button
          onClick={togglePlayPause}
          className="p-4 bg-blue-500 rounded-full text-white hover:bg-blue-600"
        >
          {isPlaying ? <Pause size={32} /> : <Play size={32} />}
        </button>
        <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
          <SkipForward size={24} />
        </button>
      </div>
      <div className="w-full max-w-md flex items-center space-x-2">
        <Volume2 size={20} />
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default NowPlaying;