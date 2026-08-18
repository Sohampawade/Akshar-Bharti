import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, MapPin, Users, TreeDeciduous } from 'lucide-react';
import SEO from '../components/SEO';
import { mockLocations } from '../data/mockData';

export default function Home() {
  const featuredLocations = mockLocations.slice(0, 3);

  return (
    <>
      <SEO 
        title="Akshar Bharati | Tree Buddy Urban Forests" 
        description="Explore the trees, people and communities growing through Akshar Bharati's Tree Buddy Urban Forest initiative."
      />
      
      {/* Hero Section */}
      <section className="relative bg-surface-light overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNHYtNGgtMnY0aC00djJoNHY0aDJ2LTRoNHYtMmgtNHptMC0zMFYwaC0ydjRoLTR2Mmg0djRoMnYtNGg0VjJoLTR6bS0yMCAyMHYtNGgtMnY0SC41djJoNHY0aDJ2LTRoNHYtMmgtNHptMjAgMjB2LTRoLTJ2NEgwbXYyaDR2NGgydi00aDR2LTJoLTR6IiBmaWxsPSIjNTA5NTU2IiBmaWxsLW9wYWNpdHk9IjAuMDUiLz48L2c+PC9zdmc+')] opacity-50 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 md:pt-32 md:pb-40 relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 text-brand-700 font-medium text-sm mb-8 border border-brand-100 shadow-sm">
            <Leaf className="w-4 h-4" />
            <span>Sasya Shyamala Bharati Initiative</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight max-w-4xl mb-6">
            Growing forests. <br className="hidden md:block" />
            <span className="text-brand-600">Growing futures.</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mb-10 leading-relaxed">
            Explore the trees, people, and communities growing through Akshar Bharati's Tree Buddy Urban Forest initiative.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link 
              to="/tracker" 
              className="inline-flex justify-center items-center gap-2 bg-brand-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-brand-700 transition-all shadow-md hover:shadow-lg"
            >
              Explore Plantation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/about" 
              className="inline-flex justify-center items-center gap-2 bg-white text-gray-700 border border-gray-200 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 hover:text-gray-900 transition-all shadow-sm"
            >
              About Akshar Bharati
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Statistics (Demo Data) */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-2">Our Impact</p>
            <h2 className="text-3xl font-bold text-gray-900">Making a greener tomorrow</h2>
            <p className="text-xs text-gray-400 mt-2">* These are prototype statistics for demonstration purposes</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Trees Planted', value: '1,920+', icon: TreeDeciduous },
              { label: 'Locations', value: '12', icon: MapPin },
              { label: 'Tree Friends', value: '320', icon: Users },
              { label: 'Species', value: '18', icon: Leaf },
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center p-6 bg-surface-light rounded-2xl border border-gray-100 shadow-sm">
                <div className="w-12 h-12 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center mb-4">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-3xl font-extrabold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Locations */}
      <section className="py-20 bg-surface-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Locations</h2>
              <p className="text-gray-600 max-w-2xl">Discover the urban forests we are nurturing across various communities.</p>
            </div>
            <Link to="/tracker" className="hidden md:flex items-center gap-1 text-brand-600 font-medium hover:text-brand-700">
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredLocations.map((location) => (
              <div key={location.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group flex flex-col h-full">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-600 transition-colors">{location.name}</h3>
                  <div className="flex items-center text-sm text-gray-500 gap-1 mb-4">
                    <MapPin className="w-4 h-4" />
                    {location.city}, {location.state}
                  </div>
                  <p className="text-sm text-gray-600 line-clamp-2">{location.description}</p>
                </div>
                
                <div className="mt-auto pt-6 border-t border-gray-50 grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Trees Planted</div>
                    <div className="font-semibold text-gray-900">{location.totalTrees}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Healthy</div>
                    <div className="font-semibold text-brand-600">{location.healthyTrees}</div>
                  </div>
                </div>

                <Link 
                  to={`/tracker/${location.id}`}
                  className="w-full inline-flex justify-center items-center bg-surface-light text-brand-700 font-medium py-2.5 rounded-xl hover:bg-brand-50 transition-colors"
                >
                  View Plantation
                </Link>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to="/tracker" className="inline-flex items-center gap-1 text-brand-600 font-medium hover:text-brand-700">
              View all locations <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-brand-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">How it works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-brand-800 -translate-y-1/2 z-0"></div>
            
            {[
              { step: '1', title: 'Plant', desc: 'A sapling finds its new home in an urban forest.' },
              { step: '2', title: 'Track', desc: 'Each tree is given a unique ID and added to our system.' },
              { step: '3', title: 'Care', desc: 'Tree Friends monitor and care for the saplings regularly.' },
              { step: '4', title: 'Grow', desc: 'Saplings grow into healthy trees, creating a micro-forest.' },
            ].map((item, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-brand-600 border-4 border-brand-900 flex items-center justify-center text-2xl font-bold mb-6 shadow-xl">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-brand-200 text-sm max-w-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Want to see our urban forests?</h2>
          <p className="text-lg text-gray-600 mb-10">
            Browse through our tracked plantations and see the individual journey of the trees we've planted.
          </p>
          <Link 
            to="/tracker" 
            className="inline-flex justify-center items-center bg-brand-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-brand-700 transition-all shadow-md"
          >
            Open Plantation Tracker
          </Link>
        </div>
      </section>
    </>
  );
}
