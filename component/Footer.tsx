import { Link } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-6">BookStore</h3>
            <p className="text-gray-400">Your one-stop destination for amazing books.</p>
          </div>
          
          
          <div>
            <h3 className="text-xl font-bold mb-6">Contact</h3>
            <p className="text-gray-400">Email: kevaljesani140@gmail.com</p>
            <p className="text-gray-400">Phone: +91 6353423657</p>
            <p>
              💼 LinkedIn:
                <a href="https://www.linkedin.com/in/keval-jesani-64721b1a4/" target="_blank"> Keval Jesani</a>
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; 2026 BookStore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}