import type { Metadata } from 'next';
import ProductsClient from './ProductsClient';

// ✅ Metadata is fine here because this is a Server Component
export const metadata: Metadata = {
  title: 'All Books - Shop Our Collection',
  description: 'Browse our complete collection of books. Filter by author, search by title, and find your next favorite read.',
  keywords: 'books, online bookstore, buy books, book store',
  openGraph: {
    title: 'All Books | BookStore',
    description: 'Browse our complete collection of books',
    type: 'website',
  },
};

export default function ProductsPage() {
  return <ProductsClient />;
}