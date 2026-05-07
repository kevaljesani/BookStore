import type { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'Home - Best Book Deals Online',
  description: 'Shop the best collection of books including Atomic Habits, Rich Dad Poor Dad and more. Free shipping',
  keywords: 'buy books online, best books, book store, online bookshop',
  openGraph: {
    title: 'BookStore - Home | Best Book Deals',
    description: 'Shop trending books at unbeatable prices',
    url: 'https://bookstore.com',
  },
};

export default function HomePage() {
  return <HomeClient />;
}