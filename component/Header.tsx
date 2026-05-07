'use client';

import Link from 'next/link';
import { ShoppingCart, User, LogOut } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import { useAuthStore } from '@/store/authStore';
import { useEffect, useState } from 'react';

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const totalItems = useCartStore(state => state.getTotalItems());
  const { user, isAuthenticated, logout } = useAuthStore();

  // ✅ Only show client-specific content after mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50" suppressHydrationWarning>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            BookStore
          </Link>
          
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-blue-600 transition">Home</Link>
            <Link href="/products" className="hover:text-blue-600 transition">Books</Link>
            <Link href="/about" className="hover:text-blue-600 transition">About</Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link href="/cart" className="relative">
              <ShoppingCart className="w-6 h-6" />
              {/* ✅ Only show badge after client hydration */}
              {mounted && totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            
            {/* ✅ Only render auth content after mounting */}
            {mounted ? (
              isAuthenticated ? (
                <div className="flex items-center space-x-3">
                  <span className="text-sm text-gray-600">{user?.name}</span>
                  <button onClick={logout} className="hover:text-red-500">
                    <LogOut className="w-5 h-5" />
                  </button>
                </div>
              ) : (
                <Link href="/login">
                  <User className="w-6 h-6 hover:text-blue-600 transition" />
                </Link>
              )
            ) : (
              // ✅ Placeholder during SSR to prevent mismatch
              <div className="w-6 h-6" />
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}