import type { Metadata, Viewport } from 'next';  // ✅ Import both types
import Link from 'next/link';

// ✅ Separate metadata export (no viewport properties)
export const metadata: Metadata = {
  title: 'About Us - BookStore Story',
  description: 'Learn about BookStore - our mission to make quality books accessible, our team, and why thousands of readers choose us.',
  keywords: 'about bookstore, online book store india, book store mission',
  openGraph: {
    title: 'About BookStore | Our Story',
    description: 'Discover the story behind BookStore and our commitment to readers',
  },
};

// ✅ Separate viewport export (moved from metadata)
export const viewport: Viewport = {
  themeColor: 'black',
  width: 'device-width',
  initialScale: 1,
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Breadcrumbs */}
      <nav className="text-sm mb-6" aria-label="Breadcrumb">
        <ol className="flex space-x-2">
          <li><Link href="/" className="text-blue-600 hover:underline">Home</Link></li>
          <li><span className="text-gray-400">/</span></li>
          <li className="text-gray-600" aria-current="page">About Us</li>
        </ol>
      </nav>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>

        <div className="prose prose-lg">
          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-6">
            To make quality books accessible to everyone, fostering a love for reading and learning
            in communities around the world.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Why Choose Us?</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>Wide selection of books across genres</li>
            <li>Competitive prices and regular discounts</li>
            <li>Fast and reliable shipping</li>
            <li>Excellent customer support</li>
            <li>Secure payment options</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Information</h2>
          <div className="text-gray-600 space-y-2">
            <p>📧 Email: kevaljesani@gmail.com</p>
            <p>📞 Phone: +91 6353423657</p>
            <p>
              💼 LinkedIn:
                <a href="https://www.linkedin.com/in/keval-jesani-64721b1a4/" target="_blank"> Keval Jesani</a>
            </p>
            <p>📍 Address: Ahmedabad, India</p>
          </div>
        </div>

        {/* JSON-LD for business info */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BookStore",
              "name": "BookStore",
              "url": "https://bookstore.com",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+911234567890",
                "contactType": "customer service",
                "email": "support@bookstore.com"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Book Street",
                "addressLocality": "Mumbai",
                "addressCountry": "India"
              }
            })
          }}
        />
      </div>
    </div>
  );
}