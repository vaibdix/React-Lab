import { createHighlighter } from 'shiki';

let highlighterInstance = null;

export const loadHighlighter = async () => {
  if (highlighterInstance) {
    return highlighterInstance;
  }

  try {
    highlighterInstance = await createHighlighter({
      themes: ['github-dark'],
      langs: [
        'javascript',
        'typescript',
        'jsx',
        'tsx',
        'html',
        'css',
        'json',
        'markdown',
        'python',
        'bash',
        'diff',
      ],
    });

    return highlighterInstance;
  } catch (error) {
    console.error('Failed to initialize highlighter:', error);
    throw error;
  }
};
