import React, { useState } from 'react';
import { Search as SearchIcon } from 'lucide-react';

const Search: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality here
    console.log('Searching for:', searchTerm);
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Search</h2>
      <form onSubmit={handleSearch} className="mb-6">
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for songs, artists, or albums"
            className="w-full p-3 pl-10 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <SearchIcon className="absolute left-3 top-3 text-gray-400" size={20} />
        </div>
      </form>
      {/* Add search results here */}
    </div>
  );
};

export default Search;