// Import all markdown files from the posts directory
const markdownFiles = import.meta.glob('../posts/*.md', { eager: true });

// Process the posts to create a structured object
const posts = Object.entries(markdownFiles).reduce((acc, [path, module]) => {
  const fileName = path.replace('../posts/', '').replace('.md', '');
  const content = module.default;

  // Extract title (first h1)
  const titleMatch = content.match(/^#\s+(.+)$/m);
  const title = titleMatch ? titleMatch[1] : fileName;

  // Extract excerpt (first paragraph after title)
  const excerptMatch = content.match(/^(?!#)(.+)$/m);
  const excerpt = excerptMatch
    ? excerptMatch[1].slice(0, 150) + '...'
    : 'Click to read more...';

  acc[fileName] = {
    path: content,
    slug: fileName,
    title,
    excerpt,
  };

  return acc;
}, {});

export const getAllPosts = () => {
  return Object.entries(posts).map(([slug, data]) => ({
    slug,
    ...data,
  }));
};

export const getPostBySlug = (slug) => {
  return posts[slug];
};
