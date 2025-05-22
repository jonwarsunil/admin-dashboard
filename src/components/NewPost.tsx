'use client';
import { useState } from 'react';
import Input from './Input';
import Button from './Button';

interface NewPostFormProps {
  closeModal: () => void;
  onPostCreated: () => void;
}

export default function NewPostForm({ closeModal, onPostCreated }: NewPostFormProps) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [type, setType] = useState('General');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newPost = {
      id: Date.now(),
      title,
      body,
      type,
      createdAt: new Date().toISOString(),
    };

    const storedPosts = localStorage.getItem('posts');
    const posts = storedPosts ? JSON.parse(storedPosts) : [];

    const updatedPosts = [newPost, ...posts];
    localStorage.setItem('posts', JSON.stringify(updatedPosts));

    onPostCreated();
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <div>
        <div className='mb-4'>
          <label className='block text-sm font-medium text-gray-700 mb-1'>Title</label>
          <Input type='text' placeholder='Enter Title' value={title} onChange={value => setTitle(value)} required />
        </div>
        <div className='mb-4'>
          <label className='block text-sm font-medium text-gray-700 mb-1'>Type</label>
          <select
            value={type}
            onChange={e => setType(e.target.value)}
            className='w-full px-4 py-3 border placeholder-gray-500 border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-gray-500 focus:outline-none'
          >
            <option value='General'>General</option>
            <option value='Tech'>Tech</option>
            <option value='Lifestyle'>Lifestyle</option>
            <option value='Other'>Other</option>
          </select>
        </div>
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-2'>Descripton</label>
          <textarea
            value={body}
            onChange={e => setBody(e.target.value)}
            className='w-full px-4 py-2 border placeholder-gray-500 border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-gray-500 focus:outline-none'
            required
          />
        </div>
      </div>

      <div className='flex justify-center mt-4 mb-4'>
        <Button
          value='Add Blog'
          type='submit'
          className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition'
        />
      </div>
    </form>
  );
}
