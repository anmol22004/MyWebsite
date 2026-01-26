import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams, useNavigate } from 'react-router-dom';
import posts from '../data/blogs';

export default function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="max-w-2xl mx-auto py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Blog not found</h2>
        <button
          className="mt-4 px-4 py-2 rounded bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-semibold shadow hover:from-indigo-500 hover:to-cyan-400"
          onClick={() => navigate('/blog')}
        >
          Back to Blog
        </button>
      </div>
    );
  }

  const shareUrl = `${window.location.origin}/blog/${post.id}`;

  return (
    <div className="max-w-2xl mx-auto py-16">
      <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-cyan-500 text-transparent bg-clip-text">{post.title}</h1>
      <p className="text-xs text-indigo-600 font-semibold mb-6">
        {new Date(post.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </p>
      <div className="prose prose-lg text-black mb-8">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <button
          className="px-4 py-2 rounded bg-gradient-to-r from-indigo-600 to-cyan-500 text-white font-semibold shadow hover:from-indigo-500 hover:to-cyan-400"
          onClick={() => {
            navigate('/blog');
            window.scrollTo({ top: 0, behavior: 'instant' });
          }}
        >
          Back to Blog
        </button>
      </div>
    </div>
  );
}
