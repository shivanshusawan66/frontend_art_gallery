// HomePage.jsx
import { useEffect, useState } from 'react';
import api from '../api/axios';
import { Link } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function HomePage() {
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/get_all_artworks')
      .then(response => {
        setArtworks(response.data.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Failed to fetch artworks:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-slate-50 to-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-800 mb-6">
              Discover Artistic Excellence
            </h1>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-8">
              Immerse yourself in a curated collection of masterpieces across diverse styles and mediums. 
              Experience creativity that moves the soul.
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/category">
                <button className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-full transition duration-300">
                  Explore Collection
                </button>
              </Link>
              <button
                onClick={() => {
                  const el = document.getElementById('art-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="border border-slate-300 hover:border-slate-400 text-slate-700 px-6 py-3 rounded-full transition duration-300"
              >
                View Art
              </button>

            </div>
          </div>
        </div>
      </section>

      {/* Artworks Section */}
      <main id="art-section"  className="flex-grow container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-semibold text-slate-800 mb-3">
            Featured Artworks
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Carefully selected pieces showcasing diverse artistic expressions
          </p>
          <div className="w-20 h-0.5 bg-teal-400 mx-auto mt-6"></div>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="flex flex-col items-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500 mb-4"></div>
              <p className="text-slate-500">Curating collection...</p>
            </div>
          </div>
        ) : artworks.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-xl max-w-2xl mx-auto border border-slate-100">
            <p className="text-slate-400 italic text-lg">
              Our gallery is currently being prepared. Please check back soon.
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {artworks.map(art => (
              <div
                key={art.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 flex flex-col"
              >
                <div className="relative overflow-hidden group">
                  <img
                    src={import.meta.env.VITE_API_MEDIA_URL + art.image_url}
                    alt={art.title}
                    className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-sm font-medium">View Details</span>
                  </div>
                </div>
                <div className="p-5 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-medium text-slate-800">
                      {art.title}
                    </h3>
                    <span className="bg-teal-50 text-teal-700 text-xs font-medium px-2 py-1 rounded">
                      {art.category}
                    </span>
                  </div>
                  <p className="text-slate-500 text-sm mb-4 line-clamp-2">
                    {art.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {art.tags.map(tag => (
                      <span
                        key={tag}
                        className="bg-slate-100 text-slate-700 px-2 py-1 rounded-full text-xs"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Call to Action */}
      <section className="py-16 bg-slate-800 text-white">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-3xl font-serif font-bold mb-6">Become Part of Our Collection</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Submit your artwork for consideration in our next exhibition. Join our community of talented artists.
          </p>
          <button className="bg-teal-500 hover:bg-teal-400 text-white px-8 py-3 rounded-full transition duration-300 font-medium">
            Submit Artwork
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}