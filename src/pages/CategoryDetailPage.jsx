// CategoryDetailPage.jsx
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getAllCategories, getArtworksByCategory } from '../api';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function CategoryDetailPage() {
  const { categoryName } = useParams();
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState(null);

  useEffect(() => {
    getAllCategories()
      .then(res => {
        const categories = res.data.data || [];
        const foundCategory = categories.find(c => c.name === categoryName);
        if (!foundCategory) {
          setError('Category not found');
          setLoading(false);
          return;
        }
        setCategory(foundCategory);
        return getArtworksByCategory(foundCategory.id);
      })
      .then(res => {
        if (res) {
          setArtworks(res.data.data || []);
        }
        setLoading(false);
      })
      .catch(err => {
        const msg = err?.response?.data?.message ||
                   err?.message ||
                   'An unexpected error occurred';
        setError(msg);
        setLoading(false);
      });
  }, [categoryName]);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-4">
            {categoryName}
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Explore our curated collection of {categoryName.toLowerCase()} artworks
          </p>
          <div className="w-20 h-0.5 bg-teal-400 mx-auto mt-6"></div>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="flex flex-col items-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500 mb-4"></div>
              <p className="text-slate-500">Loading artworks...</p>
            </div>
          </div>
        ) : error ? (
          <div className="text-center py-20 bg-white rounded-xl max-w-2xl mx-auto border border-slate-100">
            <p className="text-red-500 text-lg">{error}</p>
            <Link 
              to="/categories" 
              className="mt-4 inline-block text-teal-600 hover:text-teal-700 font-medium"
            >
              Browse all categories
            </Link>
          </div>
        ) : (
          <>
            {artworks.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-xl max-w-2xl mx-auto border border-slate-100">
                <p className="text-slate-500 text-lg mb-4">
                  No artworks found in this category yet
                </p>
                <Link 
                  to="/categories" 
                  className="text-teal-600 hover:text-teal-700 font-medium"
                >
                  Browse other categories
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
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
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.parentNode.innerHTML = `
                            <div class="bg-gray-200 border-2 border-dashed rounded-xl w-full h-60 flex items-center justify-center text-slate-400">
                              Artwork Image
                            </div>
                          `;
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <span className="text-white text-sm font-medium">View Details</span>
                      </div>
                    </div>
                    <div className="p-5 flex flex-col">
                      <h3 className="text-lg font-medium text-slate-800 mb-2">
                        {art.title}
                      </h3>
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
          </>
        )}
      </main>
      
      <div className="bg-slate-800 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-serif font-bold mb-6">Explore More Art</h2>
          <Link 
            to="/categories" 
            className="bg-teal-500 hover:bg-teal-400 text-white px-8 py-3 rounded-full transition duration-300 font-medium inline-block"
          >
            View All Categories
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}