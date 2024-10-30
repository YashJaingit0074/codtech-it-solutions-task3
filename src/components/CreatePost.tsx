import React, { useState } from 'react';
import { Image, Send } from 'lucide-react';

export function CreatePost() {
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle post creation
    setContent('');
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
      <form onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="What's on your mind?"
          className="w-full p-4 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none h-32"
        />
        <div className="flex justify-between items-center mt-4">
          <button
            type="button"
            className="flex items-center gap-2 text-gray-500 hover:text-blue-500 transition-colors"
          >
            <Image className="w-5 h-5" />
            <span>Add Photo</span>
          </button>
          <button
            type="submit"
            disabled={!content.trim()}
            className="flex items-center gap-2 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send className="w-4 h-4" />
            <span>Post</span>
          </button>
        </div>
      </form>
    </div>
  );
}