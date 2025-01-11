import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';

const BlogCard = ({ title, excerpt, path, theme }) => {
  const navigate = useNavigate();
  const cardRef = useRef(null);
  const isDark = theme === 'dark';

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e) => {
      const { left, top, width, height } = card.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;

      card.style.setProperty('--x', `${x}px`);
      card.style.setProperty('--y', `${y}px`);
    };

    card.addEventListener('mousemove', handleMouseMove);
    return () => card.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={cardRef}
      onClick={() => navigate(path)}
      className={`group relative overflow-hidden rounded-xl p-8 transition-colors duration-500 cursor-pointer backdrop-blur-sm ${
        isDark
          ? 'bg-secondary/50 hover:bg-secondary/70 border-[#ffa264]/10'
          : 'bg-gray-50/50 hover:bg-gray-100/70 border-gray-200'
      } border`}
    >
      <div className="pointer-events-none absolute inset-0 spotlight opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative z-10">
        <h2
          className={`text-2xl font-bold mb-4 ${
            isDark
              ? 'bg-gradient-to-r from-white to-white/50'
              : 'bg-gradient-to-r from-gray-900 to-gray-600'
          } bg-clip-text text-transparent`}
        >
          {title}
        </h2>
        <p className={isDark ? 'text-white/70 mb-6' : 'text-gray-600 mb-6'}>{excerpt}</p>
        <span className="inline-flex items-center text-accent group-hover:gap-2 transition-all duration-300">
          Read More <ArrowRight size={20} />
        </span>
      </div>
    </div>
  );
};

export default BlogCard;