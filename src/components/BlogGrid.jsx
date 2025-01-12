import { motion } from 'framer-motion';
import BlogCard from './BlogCard';
import { getAllPosts } from '../utils/blogPosts';

const BlogGrid = ({ theme }) => {
  const blogPosts = getAllPosts();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {blogPosts.map((post, index) => (
        <motion.div
          key={post.slug}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <BlogCard
            title={post.title}
            excerpt={post.excerpt}
            path={`/post/${post.slug}`}
            theme={theme}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default BlogGrid;
