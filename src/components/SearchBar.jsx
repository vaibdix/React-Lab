import { useState, useEffect } from 'react';
import { Search, Command } from 'lucide-react';
import SearchModal from './SearchModal';

const SearchBar = ({ theme }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsModalOpen(true);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className={`flex items-center mx-10 gap-7 px-4 py-2 rounded-lg transition-colors ${
          isDark
            ? 'bg-white/5 hover:bg-white/10 text-white/70'
            : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
        }`}
      >
        <Search size={16} />
        <span>Search...</span>
        <kbd className={`px-2 py-0.5 text-xs rounded ${isDark ? 'bg-white/10' : 'bg-white'}`}>
          <Command size={12} className="inline mr-1" />K
        </kbd>
      </button>

      <SearchModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} theme={theme} />
    </>
  );
};

export default SearchBar;
