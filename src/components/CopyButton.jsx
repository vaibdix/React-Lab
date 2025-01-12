import { useState, useEffect } from 'react';
import { Check, Copy } from 'lucide-react';

const CopyButton = ({ code }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute right-4 top-4 p-2 rounded-lg transition-colors duration-200 hover:bg-white/10"
      aria-label={copied ? 'Copied!' : 'Copy code'}
    >
      {copied ? (
        <Check size={16} className="text-green-400" />
      ) : (
        <Copy size={16} className="text-gray-400" />
      )}
    </button>
  );
};

export default CopyButton;
