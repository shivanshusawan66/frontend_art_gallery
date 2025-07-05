// Navbar.jsx
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link to="/" className="text-2xl font-serif font-semibold text-slate-800 tracking-tight hover:text-slate-900 transition">
          Romi Gallery
        </Link>

        <div className="space-x-8 text-md font-medium text-slate-700">
          <Link to="/" className="hover:text-teal-600 transition-colors duration-200">
            Home
          </Link>
          <Link to="/category" className="hover:text-teal-600 transition-colors duration-200">
            Category
          </Link>
          <Link to="/about" className="hover:text-teal-600 transition-colors duration-200">
            About
          </Link>
          <Link to="/contact" className="hover:text-teal-600 transition-colors duration-200">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}