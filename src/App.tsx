import React from 'react';
import { Layout } from 'lucide-react';
import { CreatePost } from './components/CreatePost';
import { Post } from './components/Post';
import type { Post as PostType } from './types';

const MOCK_POSTS: PostType[] = [
  {
    id: '1',
    content: "Just launched my new project! It's been an amazing journey, and I'm excited to share it with everyone. Check it out and let me know what you think! 🚀",
    author: {
      id: '1',
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
      bio: 'Full-stack developer | Open source enthusiast',
    },
    likes: 42,
    comments: [],
    createdAt: new Date('2024-03-28T09:24:00'),
  },
  {
    id: '2',
    content: "Beautiful sunset from today's hike! Nature never fails to inspire. 🌅 #NatureLover #Photography",
    author: {
      id: '2',
      name: 'Michael Torres',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
      bio: 'Photography enthusiast | Adventure seeker',
    },
    likes: 128,
    comments: [],
    createdAt: new Date('2024-03-28T08:15:00'),
  },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-2xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <Layout className="w-8 h-8 text-blue-500" />
            <h1 className="text-xl font-bold text-gray-900">Social Network</h1>
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-8">
        <CreatePost />
        
        <div className="space-y-6">
          {MOCK_POSTS.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;