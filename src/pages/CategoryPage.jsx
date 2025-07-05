import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllCategories } from '../api';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function CategoryPage() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getAllCategories()
      .then(res => {
        setCategories(res.data.data || []);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load categories');
        setLoading(false);
      });
  }, []);

  // Category images from Unsplash with art-related topics
  const categoryImages = [
    'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=600&h=400&q=80', // Painting
    'https://images.unsplash.com/photo-1569930784237-ea65a2f40c91?auto=format&fit=crop&w=600&h=400&q=80', // Sculpture
    'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&h=400&q=80', // Photography
    'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&h=400&q=80', // Digital
    'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=600&h=400&q=80', // Drawing
    'https://images.unsplash.com/photo-1585109645319-b1f54b8c1c1a?auto=format&fit=crop&w=600&h=400&q=80', // Printmaking
    'https://images.unsplash.com/photo-1536924940846-227afb31e2a5?auto=format&fit=crop&w=600&h=400&q=80', // Watercolor
    'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=600&h=400&q=80', // Abstract
    'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=600&h=400&q=80', // Abstract
    'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=600&h=400&q=80', // Landscape
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&h=400&q=80', // Portrait
    'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=600&h=400&q=80', // Installation
    'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=600&h=400&q=80', // Installation
    'https://images.unsplash.com/photo-1501084817091-a4f3d1d19e07?auto=format&fit=crop&w=600&h=400&q=80', // Mixed Media
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-4">
            Art Categories
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Explore our diverse collection of artistic expressions
          </p>
          <div className="w-20 h-0.5 bg-teal-400 mx-auto mt-6"></div>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="flex flex-col items-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500 mb-4"></div>
              <p className="text-slate-500">Loading categories...</p>
            </div>
          </div>
        ) : error ? (
          <div className="text-center py-20 bg-white rounded-xl max-w-2xl mx-auto border border-slate-100">
            <p className="text-red-500 text-lg">{error}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {categories.map((cat, index) => {
              // Use index to cycle through available images
              const imageIndex = index % categoryImages.length;
              return (
                <Link
                  key={cat.id}
                  to={`/category/${encodeURIComponent(cat.name)}`}
                  className="group"
                >
                  <div className="relative rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-60">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 flex items-end p-5">
                      <div>
                        <h3 className="text-xl font-medium text-white mb-1">
                          {cat.name}
                        </h3>
                        <p className="text-teal-200 text-sm">
                          {cat.artwork_count || 12} artworks
                        </p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/30 z-0"></div>
                    <img
                      src={categoryImages[imageIndex]}
                      alt={cat.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.parentNode.innerHTML = `
                          <div class="w-full h-full bg-gradient-to-r from-teal-400 to-indigo-500 flex items-center justify-center">
                            <span class="text-white text-lg font-medium">${cat.name}</span>
                          </div>
                        `;
                      }}
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </main>
      
      <div className="bg-slate-800 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-serif font-bold mb-6">Discover More Art</h2>
          <Link 
            to="/" 
            className="bg-teal-500 hover:bg-teal-400 text-white px-8 py-3 rounded-full transition duration-300 font-medium inline-block"
          >
            Browse All Artworks
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}