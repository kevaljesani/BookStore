import type { Metadata } from 'next';
import CartClient from './CartClient';

export const metadata: Metadata = {
  title: 'Shopping Cart - Review Your Books',
  description: 'Review items in your cart, update quantities, and proceed to checkout. Free shipping',
  robots: 'noindex, follow', // Cart page doesn't need indexing
};

export default function CartPage() {
  return <CartClient />;
}