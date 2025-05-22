'use client';

import { useEffect, useState } from 'react';
import NewPostForm from '../components/NewPost';
import BlogCard from '../components/BlogCard';
import Button from '../components/Button';
import Modal from '../components/modal';

export default function Blogs() {
  const [blogData, setBlogData] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchBlogs = async () => {
    try {
      const response = await fetch('https://dummyjson.com/posts?limit=3');
      const apiPosts = await response.json();

      const storedPosts = localStorage.getItem('posts');
      const localPosts = storedPosts ? JSON.parse(storedPosts) : [];

      setBlogData([...localPosts, ...apiPosts.posts]);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handlePostCreated = () => {
    fetchBlogs();
  };

  const handleDeletePost = (id: number) => {
    const storedPosts = localStorage.getItem('posts');
    const localPosts = storedPosts ? JSON.parse(storedPosts) : [];

    const updatedPosts = localPosts.filter((post: any) => post.id !== id);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));

    setBlogData(prev => prev.filter(post => post.id !== id));
  };

  return (
    <main className='mx-auto px-4 py-10'>
      <div className='flex justify-between items-center mb-8'>
        <h1 className='text-3xl font-bold'>Blogs</h1>
        <Button
          value='Create Blog'
          onClick={() => setIsModalOpen(true)}
          className='px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition'
        />
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title='Create New Post'>
        <NewPostForm closeModal={() => setIsModalOpen(false)} onPostCreated={handlePostCreated} />
      </Modal>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {blogData.map((post: any) => {
          const isLocal = post.createdAt;
          return (
            <BlogCard
              key={post.id}
              id={post.id}
              title={post.title}
              body={post.body}
              type={post.type}
              createdAt={post.createdAt}
              onDelete={isLocal ? handleDeletePost : undefined}
            />
          );
        })}
      </div>
    </main>
  );
}
