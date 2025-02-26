"use client"
import { useEffect, useState } from 'react';
import { getBlogPosts } from '../lib/contentfulClient';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getBlogPosts().then(setPosts);
  }, []);

  return (
    <div>
      <h1>Blog</h1>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post.sys.id}>
            <h2>{post.fields.title}</h2>
            <p>{post.fields.content}</p>
          </div>
        ))
      ) : (
        <p>Loading posts...</p>
      )}
    </div>
  );
};

export default Blog;
