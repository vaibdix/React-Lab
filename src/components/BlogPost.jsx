import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { loadHighlighter } from './highlighter';
import ScrollProgress from './ScrollProgress';
import CopyButton from './CopyButton';

const BlogPost = ({ postPath, theme }) => {
  const [content, setContent] = useState('');
  const [highlighter, setHighlighter] = useState(null);
  const [isHighlighterLoading, setIsHighlighterLoading] = useState(true);
  const isDark = theme === 'dark';

  useEffect(() => {
    const initHighlighter = async () => {
      try {
        setIsHighlighterLoading(true);
        const hl = await loadHighlighter();
        setHighlighter(hl);
      } catch (error) {
        console.error('Failed to initialize highlighter:', error);
      } finally {
        setIsHighlighterLoading(false);
      }
    };
    initHighlighter();
  }, []);

  useEffect(() => {
    fetch(postPath)
      .then((response) => response.text())
      .then((text) => setContent(text))
      .catch((error) => console.error('Error loading blog post:', error));
  }, [postPath]);

  const components = {
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || '');
      const lang = match ? match[1] : '';
      const code = String(children).replace(/\n$/, '');

      if (!inline && highlighter && lang) {
        try {
          const html = highlighter.codeToHtml(code, {
            lang,
            theme: 'houston',
          });
          return (
            <div className="relative group">
              <div dangerouslySetInnerHTML={{ __html: html }} />
              <CopyButton code={code} />
            </div>
          );
        } catch (error) {
          // Fallback to plain code block if highlighting fails
          return (
            <div className="relative group">
              <pre className={`language-${lang}`}>
                <code {...props}>{code}</code>
              </pre>
              <CopyButton code={code} />
            </div>
          );
        }
      }

      return (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
  };

  if (isHighlighterLoading) {
    return <div>Loading syntax highlighter...</div>;
  }

  return (
    <>
      <ScrollProgress />
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`blog-post prose max-w-4xl mx-auto ${isDark ? 'prose-invert' : ''}`}
      >
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={components}
          className={isDark ? 'text-white/90' : 'text-gray-900'}
        >
          {content}
        </ReactMarkdown>
      </motion.article>
    </>
  );
};

export default BlogPost;
