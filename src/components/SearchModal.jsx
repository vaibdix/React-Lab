import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Command, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getAllPosts } from '../utils/blogPosts';

const SearchModal = ({ isOpen, onClose, theme }) => {
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const [results, setResults] = useState([]);
  const navigate = useNavigate();
  const isDark = theme === 'dark';

  const handleSearch = useCallback((searchQuery) => {
    const posts = getAllPosts();
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    const searchResults = posts
      .filter((post) => {
        const content = post.title.toLowerCase();
        const searchTerm = searchQuery.toLowerCase();
        return content.includes(searchTerm);
      })
      .map((post) => ({
        ...post,
        preview: findSearchPreview(post.path, searchQuery),
      }));

    setResults(searchResults);
    setActiveIndex(0);
  }, []);

  const findSearchPreview = (content, searchQuery) => {
    const index = content.toLowerCase().indexOf(searchQuery.toLowerCase());
    if (index === -1) return '';

    const start = Math.max(0, index - 40);
    const end = Math.min(content.length, index + searchQuery.length + 40);
    let preview = content.slice(start, end);

    // Highlight the matching text
    const regex = new RegExp(searchQuery, 'gi');
    preview = preview.replace(
      regex,
      (match) => `<mark class="bg-accent/30 text-inherit">${match}</mark>`
    );

    return start > 0 ? `...${preview}...` : `${preview}...`;
  };

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveIndex((prev) => (prev + 1) % results.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveIndex((prev) => (prev - 1 + results.length) % results.length);
      } else if (e.key === 'Enter' && results[activeIndex]) {
        navigate(`/post/${results[activeIndex].slug}`);
        onClose();
      } else if (e.key === 'Escape') {
        onClose();
      }
    },
    [results, activeIndex, navigate, onClose]
  );

  useEffect(() => {
    handleSearch(query);
  }, [query, handleSearch]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className={`fixed top-[20%] left-1/2 -translate-x-1/2 w-full max-w-xl z-50 ${
              isDark ? 'bg-secondary' : 'bg-white'
            } rounded-xl shadow-2xl border ${isDark ? 'border-white/10' : 'border-gray-200'}`}
          >
            <div className="p-4">
              <div className="flex items-center gap-3 px-3 py-2 rounded-lg border mb-2">
                <Search className={isDark ? 'text-white/50' : 'text-gray-400'} size={20} />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search docs..."
                  className={`flex-1 bg-transparent border-none outline-none ${
                    isDark
                      ? 'text-white placeholder-white/50'
                      : 'text-gray-900 placeholder-gray-500'
                  }`}
                  onKeyDown={handleKeyDown}
                  autoFocus
                />
                <kbd
                  className={`px-2 py-1 rounded text-sm ${
                    isDark ? 'bg-white/10 text-white/70' : 'bg-gray-100 text-gray-500'
                  }`}
                >
                  <Command size={14} className="inline mr-1" />K
                </kbd>
              </div>

              <div className="max-h-[60vh] overflow-y-auto">
                {results.map((result, index) => (
                  <div
                    key={result.slug}
                    onClick={() => {
                      navigate(`/post/${result.slug}`);
                      onClose();
                    }}
                    className={`p-4 cursor-pointer rounded-lg transition-colors ${
                      index === activeIndex ? (isDark ? 'bg-white/5' : 'bg-gray-100') : ''
                    } ${isDark ? 'hover:bg-white/5' : 'hover:bg-gray-100'}`}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className={`font-medium ${isDark ? 'text-white/90' : 'text-gray-900'}`}>
                        {result.title}
                      </h3>
                      <ArrowRight
                        size={16}
                        className={isDark ? 'text-white/30' : 'text-gray-400'}
                      />
                    </div>
                    <p
                      className={`text-sm mt-1 ${isDark ? 'text-white/60' : 'text-gray-600'}`}
                      dangerouslySetInnerHTML={{ __html: result.preview }}
                    />
                  </div>
                ))}

                {query && results.length === 0 && (
                  <div className="p-4 text-center">
                    <p className={isDark ? 'text-white/60' : 'text-gray-600'}>
                      No results found for "{query}"
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;
