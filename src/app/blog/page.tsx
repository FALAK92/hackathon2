'use client'
import React, { useState } from 'react';
import { ChevronRight, Calendar, User, Tag } from 'lucide-react';
import Banner from '../components/banner';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  category: string;
  date: string;
  imageUrl?: string;
}

interface BlogCategory {
  name: string;
  count: number;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Going all-in with millennial design',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    author: 'Admin',
    category: 'Wood',
    date: '14 Oct 2022',
    imageUrl: '/images/constant/b1.png'
  },
  {
    id: 2,
    title: 'Exploring new ways of decorating',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    author: 'Admin',
    category: 'Handmade',
    date: '14 Oct 2022',
    imageUrl: '/images/constant/b2.png'
  },
  {
    id: 3,
    title: 'Handmade pieces that took time to make',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    author: 'Admin',
    category: 'Wood',
    date: '14 Oct 2022',
    imageUrl: '/images/constant/b3.png'
  }
];

const blogCategories: BlogCategory[] = [
  { name: 'Crafts', count: 2 },
  { name: 'Design', count: 8 },
  { name: 'Handmade', count: 7 },
  { name: 'Interior', count: 1 },
  { name: 'Wood', count: 6 }
];

const recentPosts: BlogPost[] = [
  {
    id: 4,
    title: 'Modern home in Milan',
    date: '03 Aug 2022',
    author: 'Admin',
    category: 'Interior',
    excerpt: ''
  },
  {
    id: 5,
    title: 'Colorful office redesign',
    date: '03 Aug 2022',
    author: 'Admin',
    category: 'Design',
    excerpt: ''
  },
  ...blogPosts.slice(0, 3)
];

const BlogPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const BlogPostCard: React.FC<{ post: BlogPost }> = ({ post }) => (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {post.imageUrl && (
        <img 
          src={post.imageUrl} 
          alt={post.title} 
          width={817}
          height={500}
          className="object-cover"
        />
      )}
      <div className="p-6">
        <div className="flex items-center text-gray-500 text-sm mb-2 space-x-3">
          <div className="flex items-center">
            <User size={16} className="mr-1" />
            {post.author}
          </div>
          <div className="flex items-center">
            <Tag size={16} className="mr-1" />
            {post.category}
          </div>
          <div className="flex items-center">
            <Calendar size={16} className="mr-1" />
            {post.date}
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2">{post.title}</h3>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <button className="flex items-center text-black hover:text-gray-600">
          Read more <ChevronRight size={16} className="ml-1" />
        </button>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <Banner label='Blog' image='/bg.png'/>
      <div className="grid md:grid-cols-[3fr,1fr] gap-8">
        {/* Main Blog Posts Section */}
        <div>
          <div className="flex flex-col justify-center items-center">
            {blogPosts.map(post => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center space-x-2 mt-8">
            <button 
              className="px-4 py-2 bg-gray-200 rounded"
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            >
              Previous
            </button>
            {[1, 2, 3].map(page => (
              <button
                key={page}
                className={`px-4 py-2 rounded ${
                  currentPage === page 
                    ? 'bg-black text-white' 
                    : 'bg-gray-200'
                }`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            ))}
            <button 
              className="px-4 py-2 bg-gray-200 rounded"
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Next
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <div>
          {/* Categories */}
          <div className="bg-gray-100 rounded-lg p-6 mb-6">
            <h3 className="text-xl font-bold mb-4">Categories</h3>
            {blogCategories.map(category => (
              <div 
                key={category.name} 
                className="flex justify-between items-center py-2 border-b last:border-b-0"
              >
                <span>{category.name}</span>
                <span className="bg-gray-200 rounded-full px-2 py-1 text-sm">
                  {category.count}
                </span>
              </div>
            ))}
          </div>

          {/* Recent Posts */}
          <div className="bg-gray-100 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Recent Posts</h3>
            {recentPosts.map(post => (
              <div 
                key={post.id} 
                className="flex items-center py-3 border-b last:border-b-0"
              >
                <div>
                  <h4 className="font-medium text-sm hover:text-gray-600">
                    {post.title}
                  </h4>
                  <p className="text-xs text-gray-500">{post.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
