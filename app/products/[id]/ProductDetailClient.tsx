'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCartStore } from '@/store/cartStore';
import { ShoppingCart, ArrowLeft } from 'lucide-react';
import { Book } from '@/types';

interface ProductDetailClientProps {
  product: Book; // ✅ Receive product as prop from Server Component
}

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
  const addItem = useCartStore(state => state.addItem);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <nav className="text-sm mb-6" aria-label="Breadcrumb">
        <ol className="flex space-x-2">
          <li><Link href="/" className="text-blue-600 hover:underline">Home</Link></li>
          <li><span className="text-gray-400">/</span></li>
          <li><Link href="/products" className="text-blue-600 hover:underline">Books</Link></li>
          <li><span className="text-gray-400">/</span></li>
          <li className="text-gray-600" aria-current="page">{product.title}</li>
        </ol>
      </nav>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="relative h-96 w-full md:h-[500px]">
          <Image
            src={product.image}
            alt={`Cover of ${product.title} by ${product.author}`}
            fill  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain"
            priority
          />
        </div>
        
        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          <h2 className="text-gray-600 text-lg mb-4">By {product.author}</h2>
          <p className="text-3xl text-blue-600 font-bold mb-6">
            ₹{product.price}
          </p>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">About this book</h3>
            <p className="text-gray-700 leading-relaxed">{product.description}</p>
          </div>
          
          {/* Structured Data for rich snippets */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Product",
                "name": product.title,
                "description": product.description,
                "author": {
                  "@type": "Person",
                  "name": product.author
                },
                "offers": {
                  "@type": "Offer",
                  "price": product.price,
                  "priceCurrency": "INR",
                  "availability": "https://schema.org/InStock"
                },
                "image": product.image
              })
            }}
          />
          
          <button
            onClick={() => addItem(product)}
            className="w-full md:w-auto bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition flex items-center justify-center space-x-2"
            aria-label={`Add ${product.title} to cart`}
          >
            <ShoppingCart className="w-5 h-5" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}