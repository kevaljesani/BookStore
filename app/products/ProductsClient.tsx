'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Search } from 'lucide-react';
import products from '@/data/books.json';
import ProductCard from '@/component/ProductCard';
export default function ProductsClient() {
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAuthor, setSelectedAuthor] = useState('');

  // Rest of your client-side logic remains exactly the same
  useEffect(() => {
    const params = new URLSearchParams();
    if (searchTerm) params.set('q', searchTerm);
    if (selectedAuthor) params.set('author', selectedAuthor);
    window.history.replaceState({}, '', `${window.location.pathname}?${params}`);
  }, [searchTerm, selectedAuthor]);

  const authors = [...new Set(products.map(p => p.author))];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesAuthor = !selectedAuthor || product.author === selectedAuthor;
    return matchesSearch && matchesAuthor;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">All Books</h1>
      
      {/* Search and Filter - keep all your existing JSX */}
      <div className="mb-8 flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <label htmlFor="search" className="sr-only">Search books</label>
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            id="search"
            type="text"
            placeholder="Search by title or author..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Search books by title or author"
          />
        </div>
        
        <div>
          <label htmlFor="author-filter" className="sr-only">Filter by author</label>
          <select
            id="author-filter"
            value={selectedAuthor}
            onChange={(e) => setSelectedAuthor(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Filter books by author"
          >
            <option value="">All Authors</option>
            {authors.map(author => (
              <option key={author} value={author}>{author}</option>
            ))}
          </select>
        </div>
      </div>

      <p className="mb-4 text-gray-600" aria-live="polite">
        Showing {filteredProducts.length} of {products.length} books
      </p>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No books found matching your criteria.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}