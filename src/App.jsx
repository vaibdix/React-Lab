import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import BlogPost from './components/BlogPost';
import BlogGrid from './components/BlogGrid';
import SearchBar from './components/SearchBar';
import { getAllPosts } from './utils/blogPosts';
import './App.css';
import { TextHoverEffectDemo } from './components/ui/TextHoverEffectDemo';


function App() {
  const posts = getAllPosts();
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  });

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Create meteor elements
  const meteors = Array.from({ length: 40 }).map((_, i) => ({
    id: i,
    top: Math.random() * 100,
    left: Math.random() * 100,
    delay: Math.random() * 10,
  }));

  return (
    <Router>
      <div className={`app min-h-screen relative overflow-hidden ${theme === 'dark' ? 'bg-primary text-white' : 'bg-white text-gray-900'}`}>
        {/* Meteor effect */}
        <div className="meteor-effect">
          {meteors.map((meteor) => (
            <div
              key={meteor.id}
              className="meteor"
              style={{
                top: `${meteor.top}%`,
                left: `${meteor.left}%`,
                animationDelay: `${meteor.delay}s`,
              }}
            />
          ))}
        </div>

        <header className={`fixed top-0 z-50 w-full backdrop-blur-md ${
          theme === 'dark' ? 'bg-primary/50 border-white/10' : 'bg-white/50 border-gray-200'
        } border-b`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">

                <Link
                  to="/"
                  className="text-2xl font-bold text-accent">
                    React Lab
                </Link>

              <div className="flex items-center gap-8">
                <SearchBar theme={theme} />

                <nav>
                  <Link
                    to="/"
                    className={`transition-colors ${
                      theme === 'dark' ? 'text-white/80 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Home
                  </Link>
                </nav>
                <button
                  onClick={toggleTheme}
                  className={`p-2 rounded-lg transition-colors ${
                    theme === 'dark' ? 'hover:bg-white/5' : 'hover:bg-gray-100'
                  }`}
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? (
                    <Sun className="w-5 h-5 text-[#ffa264c7] border-2 border-neutral-800" />
                  ) : (
                    <Moon className="w-5 h-5 text-gray-600" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </header>

        <main className="pt-24 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Routes>
              <Route path="/" element={<BlogGrid theme={theme} />} />
              {posts.map((post) => (
                <Route
                  key={post.slug}
                  path={`/post/${post.slug}`}
                  element={<BlogPost postPath={post.path} theme={theme} />}
                />
              ))}
            </Routes>
          </div>
        </main>

        <footer >
        <TextHoverEffectDemo />
        </footer>
      </div>
    </Router>
  );
}

export default App;