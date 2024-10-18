import create from 'zustand';

interface AudioState {
  currentTrack: string | null;
  isPlaying: boolean;
  volume: number;
  playlist: string[];
  setCurrentTrack: (track: string) => void;
  togglePlayPause: () => void;
  setVolume: (volume: number) => void;
  addToPlaylist: (track: string) => void;
  removeFromPlaylist: (track: string) => void;
}

export const useAudioStore = create<AudioState>((set) => ({
  currentTrack: null,
  isPlaying: false,
  volume: 1,
  playlist: [],
  setCurrentTrack: (track) => set({ currentTrack: track }),
  togglePlayPause: () => set((state) => ({ isPlaying: !state.isPlaying })),
  setVolume: (volume) => set({ volume }),
  addToPlaylist: (track) => set((state) => ({ playlist: [...state.playlist, track] })),
  removeFromPlaylist: (track) =>
    set((state) => ({ playlist: state.playlist.filter((t) => t !== track) })),
}));