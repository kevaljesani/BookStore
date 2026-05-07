import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import products from '../../../data/books.json';
import ProductDetailClient from './ProductDetailClient';

// ✅ Add async and await params
export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ id: string }>  // ← params is a Promise
}): Promise<Metadata> {
  // ✅ Await params before accessing
  const { id } = await params;
  const productId = Number(id);
  
  const product = products?.find(p => p.id === productId);
  
  if (!product) {
    return {
      title: 'Product Not Found',
      description: 'The requested book could not be found.',
    };
  }

  return {
    title: `${product.title} by ${product.author}`,
    description: product.description.substring(0, 160),
    keywords: `${product.title}, ${product.author}, book, buy book online`,
    openGraph: {
      title: `${product.title} - BookStore`,
      description: product.description.substring(0, 160),
      images: [product.image],
      type: 'book',
      authors: [product.author],
    },
  };
}

// ✅ Also await params in the page component
export default async function ProductDetailPage({ 
  params 
}: { 
  params: Promise<{ id: string }>  // ← params is a Promise
}) {
  // ✅ Await params before accessing
  const { id } = await params;
  const productId = Number(id);
  
  const product = products?.find(p => p.id === productId);

  if (!product) {
    notFound();
  }

  return <ProductDetailClient product={product} />;
}