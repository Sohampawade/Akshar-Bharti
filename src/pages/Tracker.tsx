import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { mockLocations } from '../data/mockData';

export default function Tracker() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredLocations = mockLocations.filter(location => 
    location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    location.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <SEO 
        title="Plantation Tracker | Akshar Bharati" 
        description="Explore the urban forests and plantation locations being tracked through the Akshar Bharati initiative."
      />
      
      <div className="bg-surface-light py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Plantation Tracker</h1>
            <p className="text-lg text-gray-600 mb-8">
              Explore the urban forests and plantation locations being tracked through the initiative.
            </p>
            
            <div className="relative max-w-lg">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-11 pr-4 py-3 border border-gray-200 rounded-xl leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 sm:text-sm shadow-sm transition-shadow"
                placeholder="Search by school, location, or city..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 bg-white flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">
              {filteredLocations.length} Locations Found
            </h2>
          </div>

          {filteredLocations.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredLocations.map((location) => (
                <Link 
                  key={location.id} 
                  to={`/tracker/${location.id}`}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-brand-200 transition-all group flex flex-col h-full"
                >
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-600 transition-colors">{location.name}</h3>
                    <div className="flex items-center text-sm text-gray-500 gap-1 mb-4">
                      <MapPin className="w-4 h-4" />
                      {location.city}, {location.state}
                    </div>
                  </div>
                  
                  <div className="mt-auto bg-surface-light rounded-xl p-4 mb-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Total Trees</div>
                        <div className="font-semibold text-gray-900">{location.totalTrees}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Healthy</div>
                        <div className="font-semibold text-brand-600">{location.healthyTrees}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Species</div>
                        <div className="font-semibold text-gray-900">{location.speciesCount}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">Planted</div>
                        <div className="font-semibold text-gray-900">{new Date(location.plantedDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center text-brand-600 font-medium text-sm group-hover:text-brand-700">
                    View Details <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                <Search className="w-6 h-6 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No locations found</h3>
              <p className="text-gray-500">We couldn't find any plantations matching your search.</p>
              <button 
                onClick={() => setSearchTerm('')}
                className="mt-4 text-brand-600 hover:text-brand-700 font-medium"
              >
                Clear search
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
