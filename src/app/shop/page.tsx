"use client"
import React, { useState } from 'react';
import { Heart, Share2, BarChart2, ShoppingCart } from 'lucide-react';
import Banner from '../components/banner';


// Product Type Definition
interface Product {
  id: number;
  name: string;
  category: string;
  originalPrice: number;
  currentPrice: number;
  discount?: number;
  isNew?: boolean;
  imageUrl?: string;
}

// Sample Product Data
const initialProducts: Product[] = [
  {
    id: 1,
    name: 'Syltherine',
    category: 'Stylish cafe chair',
    originalPrice: 3500000,
    currentPrice: 2500000,
    discount: 30,
    imageUrl: '/images/constant/p1.png'
  },
  {
    id: 2,
    name: 'Leviosa',
    category: 'Stylish cafe chair',
    originalPrice: 3500000,
    currentPrice: 2500000,
    imageUrl: '/images/constant/p2.png'
  },
  {
    id: 3,
    name: 'Lolito',
    category: 'Luxury big sofa',
    originalPrice: 14000000,
    currentPrice: 7000000,
    discount: 50,
    imageUrl: '/images/constant/p3.png'
  },
  {
    id: 4,
    name: 'Respira',
    category: 'Outdoor bar table and stool',
    originalPrice: 3500000,
    currentPrice: 500000,
    isNew: true,
    imageUrl: '/images/constant/p4.png'
  },
  {
    id: 5,
    name: 'Syltherine',
    category: 'Stylish cafe chair',
    originalPrice: 3500000,
    currentPrice: 2500000,
    discount: 30,
    imageUrl: '/images/constant/p1.png'
  },
  {
    id: 6,
    name: 'Leviosa',
    category: 'Stylish cafe chair',
    originalPrice: 3500000,
    currentPrice: 2500000,
    imageUrl: '/images/constant/p2.png'
  },
  {
    id: 7,
    name: 'Lolito',
    category: 'Luxury big sofa',
    originalPrice: 14000000,
    currentPrice: 7000000,
    discount: 50,
    imageUrl: '/images/constant/p3.png'
  },
  {
    id: 8,
    name: 'Respira',
    category: 'Outdoor bar table and stool',
    originalPrice: 3500000,
    currentPrice: 500000,
    isNew: true,
    imageUrl: '/images/constant/p4.png'
  }
];

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    
    <div 
      className="bg-white shadow-md rounded-lg overflow-hidden relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
    
      {/* Product Image */}
      <div className="relative">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-64 object-cover"
        />
        {product.isNew && (
          <div className="absolute top-4 left-4 bg-green-500 text-white px-2 py-1 rounded-full text-xs">
            New
          </div>
        )}
        {product.discount && (
          <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs">
            -{product.discount}%
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="p-4">
        <h3 className="font-bold text-lg">{product.name}</h3>
        <p className="text-gray-500 text-sm">{product.category}</p>
        
        <div className="flex justify-between items-center mt-2">
          <div>
            <span className="font-bold text-lg text-gray-800">
              Rp {product.currentPrice.toLocaleString()}
            </span>
            {product.originalPrice !== product.currentPrice && (
              <span className="line-through text-gray-400 ml-2 text-sm">
                Rp {product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Hover Buttons */}
      {isHovered && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center space-x-4">
          <button className="bg-white p-2 rounded-full hover:bg-gray-100">
            <ShoppingCart size={20} />
          </button>
          <button className="bg-white p-2 rounded-full hover:bg-gray-100">
            <Share2 size={20} />
          </button>
          <button className="bg-white p-2 rounded-full hover:bg-gray-100">
            <BarChart2 size={20} />
          </button>
          <button className="bg-white p-2 rounded-full hover:bg-gray-100">
            <Heart size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

const Shop: React.FC = () => {
  const [products] = useState<Product[]>(initialProducts);
  const [showPerPage, setShowPerPage] = useState(16);
  const [sortBy, setSortBy] = useState('default');

  return (
    <div className="container mt-auto px-4 py-4">
      <Banner label='Shop' image='/bg.png' logo="/images/header/logo.png"/>

      <div className="flex justify-between items-center mb-6 bg-[#F9F1E7]">
        <div>
          <span>Showing 1–{products.length} of {products.length} results</span>
        </div>
        <div className="flex space-x-4">
          <select 
            value={showPerPage} 
            onChange={(e) => setShowPerPage(Number(e.target.value))}
            className="border rounded px-2 py-1"
          >
            <option value={16}>Show 16</option>
            <option value={32}>Show 32</option>
          </select>
          <select 
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)}
            className="border rounded px-2 py-1"
          >
            <option value="default">Short by Default</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="flex justify-center space-x-2 mt-8">
        <button className="px-4 py-2 bg-gray-200 rounded">1</button>
        <button className="px-4 py-2 bg-gray-200 rounded">2</button>
        <button className="px-4 py-2 bg-gray-200 rounded">3</button>
        <button className="px-4 py-2 bg-gray-200 rounded">Next</button>
      </div>
    </div>
  );
};

export default Shop;

