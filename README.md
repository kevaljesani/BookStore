# 📚 BookStore - Next.js E-Commerce Platform

A modern, fully responsive e-commerce website for books built with Next.js 16, TypeScript, and Tailwind CSS. Features product browsing, search/filter functionality, shopping cart, user authentication, and guest checkout.

## 🚀 Live Demo

[Live Demo URL - Add if deployed]

## ✨ Features

### Core Features
- ✅ **Product Management** - Browse books with detailed product pages
- ✅ **Search & Filter** - Search by title/author and filter by author
- ✅ **Shopping Cart** - Add/remove items, update quantities, persistent storage
- ✅ **User Authentication** - Login with email or continue as guest
- ✅ **Responsive Design** - Fully responsive on mobile, tablet, and desktop
- ✅ **SEO Optimized** - Meta tags, Open Graph, JSON-LD structured data

### Technical Features
- ✅ **Next.js 16 App Router** - Modern routing with server components
- ✅ **TypeScript** - Full type safety across the application
- ✅ **Tailwind CSS** - Utility-first styling with responsive design
- ✅ **Zustand State Management** - Persistent cart and auth state
- ✅ **Image Optimization** - Next.js Image component with proper sizing
- ✅ **Server Components** - Optimized performance with SSR
- ✅ **Client Components** - Interactive features with proper hydration

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16+ | React framework with App Router |
| TypeScript | 5+ | Type safety and better DX |
| Tailwind CSS | 4+ | Styling and responsive design |
| Zustand | 5+ | State management (cart & auth) |
| Lucide React | Latest | Icon library |
| Next.js Image | Built-in | Image optimization |


🎯 Key Features Implementation

Shopping Cart
Persistent storage using Zustand with localStorage

Add/remove items, update quantities

Automatic total calculation

Cart persists across page reloads

Authentication
Email-based login

Guest checkout option

Persistent session using Zustand

Logout functionality

Search & Filter
Real-time search by title or author

Filter by author dropdown

URL parameter updates for shareable links

SEO Implementation
Dynamic metadata per page

Open Graph tags for social sharing

JSON-LD structured data for rich snippets

Proper heading hierarchy (H1, H2, H3)

Semantic HTML5 elements

Image alt text optimization

🎨 Styling
The project uses Tailwind CSS with a custom configuration.

🧪 Performance Optimization
Implemented Optimizations
✅ Image optimization with Next.js Image component

✅ Code splitting with dynamic imports

✅ Server Components for static content

✅ Proper sizes attribute for responsive images

✅ Lazy loading for below-fold content

✅ Zustand selectors to prevent unnecessary re-renders