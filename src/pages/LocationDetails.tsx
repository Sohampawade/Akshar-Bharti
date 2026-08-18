import { useParams, Link, Navigate } from 'react-router-dom';
import { MapPin, Calendar, Users, Leaf, ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';
import { mockLocations, mockTrees } from '../data/mockData';

export default function LocationDetails() {
  const { locationId } = useParams<{ locationId: string }>();
  
  const location = mockLocations.find(loc => loc.id === locationId);
  
  if (!location) {
    return <Navigate to="/404" replace />;
  }

  // Get trees that belong to this location (using mock data)
  const treesInLocation = Object.values(mockTrees).filter(tree => tree.locationId === location.id);

  return (
    <>
      <SEO 
        title={`${location.name} | Akshar Bharati`} 
        description={`Explore the plantation details and tracked trees at ${location.name}, ${location.city}.`}
      />

      <div className="bg-surface-light py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/tracker" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-brand-600 mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to Tracker
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-gray-700 text-xs font-medium border border-gray-200 mb-4 shadow-sm">
                <MapPin className="w-3.5 h-3.5 text-brand-600" />
                {location.city}, {location.state}
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">{location.name}</h1>
              <p className="text-lg text-gray-600 max-w-2xl">
                {location.description}
              </p>
            </div>
            
            <div className="flex gap-4">
               <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm text-center min-w-[120px]">
                 <div className="text-3xl font-bold text-gray-900">{location.totalTrees}</div>
                 <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mt-1">Trees Planted</div>
               </div>
               <div className="bg-white rounded-xl p-4 border border-brand-200 shadow-sm text-center min-w-[120px]">
                 <div className="text-3xl font-bold text-brand-600">{location.healthyTrees}</div>
                 <div className="text-xs font-medium text-brand-600 uppercase tracking-wide mt-1">Healthy</div>
               </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 bg-white flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Content - Tree Grid */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Tracked Trees</h2>
              <p className="text-gray-600 mb-8">
                Click on any tree marker below to view its individual journey and growth details. 
                <br className="hidden md:block"/>
                <span className="text-sm italic text-gray-400 mt-2 block">* Only a sample of trees are interactable in this demo.</span>
              </p>

              {treesInLocation.length > 0 ? (
                <div className="bg-surface-light rounded-2xl p-8 border border-gray-100 flex flex-wrap gap-4 items-center justify-start min-h-[300px]">
                  {/* Render interactive mock trees */}
                  {treesInLocation.map(tree => (
                    <Link 
                      key={tree.id}
                      to={`/trees/${tree.id}`}
                      className="group relative flex flex-col items-center justify-center p-3 rounded-xl hover:bg-white transition-all hover:shadow-md border border-transparent hover:border-brand-200"
                      title={`${tree.species} (${tree.status})`}
                    >
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                        tree.status === 'Healthy' ? 'bg-brand-100 text-brand-600' : 'bg-accent-light bg-opacity-30 text-accent-dark'
                      }`}>
                        <Leaf className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-medium text-gray-700 group-hover:text-brand-600">{tree.id}</span>
                      
                      {/* Tooltip */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max px-3 py-1.5 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                        {tree.species} • {tree.status}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-900"></div>
                      </div>
                    </Link>
                  ))}
                  
                  {/* Decorative non-interactive trees representing the rest of the 850 trees */}
                  {Array.from({ length: 40 }).map((_, i) => (
                    <div key={`filler-${i}`} className="p-3 opacity-40">
                      <div className="w-10 h-10 rounded-full bg-gray-200 text-gray-400 flex items-center justify-center">
                        <Leaf className="w-5 h-5" />
                      </div>
                    </div>
                  ))}
                  <div className="text-sm text-gray-400 font-medium px-4">
                    + {location.totalTrees - treesInLocation.length} more trees...
                  </div>
                </div>
              ) : (
                <div className="bg-surface-light rounded-2xl p-12 text-center border border-gray-100">
                  <Leaf className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No tracked trees yet</h3>
                  <p className="text-gray-500">Individual tree records for this location haven't been digitized in the demo.</p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Plantation Info</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-gray-400 mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-gray-900">Planted On</div>
                      <div className="text-sm text-gray-600">{new Date(location.plantedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Leaf className="w-5 h-5 text-gray-400 mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-gray-900">Species Diversity</div>
                      <div className="text-sm text-gray-600">{location.speciesCount} different species</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-gray-400 mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-gray-900">Community</div>
                      <div className="text-sm text-gray-600">Maintained by students and local Tree Friends.</div>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-brand-50 rounded-2xl border border-brand-100 p-6">
                <h3 className="text-brand-900 font-bold mb-2">Did you know?</h3>
                <p className="text-brand-700 text-sm leading-relaxed">
                  Urban forests like this one can help lower local temperatures by up to 2-4°C and provide a crucial habitat for local bird and insect species.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
