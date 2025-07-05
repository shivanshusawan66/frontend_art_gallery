// AboutPage.jsx
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 sm:px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-4">
              Our Artistic Journey
            </h1>
            <div className="w-20 h-0.5 bg-teal-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-sm p-8 border border-slate-100">
                <div className="flex items-start mb-6">
                  <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <span className="text-teal-700 text-xl">🎨</span>
                  </div>
                  <div>
                    <h2 className="text-xl font-serif font-semibold text-slate-800 mb-2">
                      Our Mission
                    </h2>
                    <p className="text-slate-600">
                      Welcome to the Art Gallery! Our mission is to showcase the most inspiring and beautiful artworks from talented artists around the world. We believe art should be accessible to everyone, and we're dedicated to creating a platform where creativity can flourish.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-8 border border-slate-100">
                <div className="flex items-start mb-6">
                  <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <span className="text-teal-700 text-xl">🖌️</span>
                  </div>
                  <div>
                    <h2 className="text-xl font-serif font-semibold text-slate-800 mb-2">
                      Our History
                    </h2>
                    <p className="text-slate-600">
                      Founded in 2025, the Art Gallery has been dedicated to bringing art closer to everyone through an easy-to-use online platform. What began as a small passion project has grown into a vibrant community of artists and art lovers from around the globe.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-xl shadow-sm p-8 border border-slate-100 h-full">
                <div className="flex items-start mb-6">
                  <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <span className="text-teal-700 text-xl">👨‍🎨</span>
                  </div>
                  <div>
                    <h2 className="text-xl font-serif font-semibold text-slate-800 mb-2">
                      Our Team
                    </h2>
                    <p className="text-slate-600 mb-4">
                      Our passionate team works tirelessly to curate and maintain a diverse collection of artworks for your enjoyment. We come from diverse backgrounds but share a common love for art and creativity.
                    </p>
                    
                    <div className="mt-6">
                      <h3 className="font-medium text-slate-800 mb-3">Meet Our Curators</h3>
                      <div className="flex space-x-4">
                        <div className="text-center">
                          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-2" />
                          <p className="text-sm text-slate-700">Alex Morgan</p>
                          <p className="text-xs text-slate-500">Lead Curator</p>
                        </div>
                        <div className="text-center">
                          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-2" />
                          <p className="text-sm text-slate-700">Taylor Kim</p>
                          <p className="text-xs text-slate-500">Digital Art Specialist</p>
                        </div>
                        <div className="text-center">
                          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto mb-2" />
                          <p className="text-sm text-slate-700">Jordan Lee</p>
                          <p className="text-xs text-slate-500">Community Manager</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl p-10 text-white">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-serif font-bold mb-4">
                Join Our Artistic Community
              </h2>
              <p className="text-slate-300 mb-6">
                Whether you're an artist looking to showcase your work or an art enthusiast wanting to discover new talent, we welcome you to our growing community.
              </p>
              <button className="bg-teal-500 hover:bg-teal-400 text-white px-8 py-3 rounded-full transition duration-300 font-medium">
                Become a Member
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}