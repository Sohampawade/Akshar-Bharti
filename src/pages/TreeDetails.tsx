import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, User, Ruler, Activity, Leaf } from 'lucide-react';
import SEO from '../components/SEO';
import { mockTrees, mockLocations } from '../data/mockData';

export default function TreeDetails() {
  const { treeId } = useParams<{ treeId: string }>();
  
  const tree = treeId ? mockTrees[treeId] : null;
  const location = tree ? mockLocations.find(loc => loc.id === tree.locationId) : null;

  if (!tree || !location) {
    return <Navigate to="/404" replace />;
  }

  return (
    <>
      <SEO 
        title={`Tree ${tree.id} - ${tree.species} | Akshar Bharati`} 
        description={`Track the journey of tree ${tree.id} (${tree.species}) planted at ${location.name}.`}
      />

      <div className="bg-surface-light py-8 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to={`/tracker/${location.id}`} className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-brand-600 mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to {location.name}
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                  tree.status === 'Healthy' ? 'bg-green-100 text-green-700 border border-green-200' : 'bg-yellow-100 text-yellow-700 border border-yellow-200'
                }`}>
                  {tree.status}
                </div>
                <div className="text-sm font-medium text-gray-500">
                  ID: {tree.id}
                </div>
              </div>
              <h1 className="text-4xl font-extrabold text-gray-900 mb-2">{tree.species}</h1>
              <div className="flex items-center text-gray-600 gap-1 font-medium">
                <MapPin className="w-4 h-4 text-brand-600" />
                <Link to={`/tracker/${location.id}`} className="hover:text-brand-700 underline decoration-gray-300 underline-offset-4">
                  {location.name}, {location.city}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 bg-white flex-grow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            
            {/* Stats Cards */}
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
              <div className="p-3 bg-brand-50 text-brand-600 rounded-xl">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">Planted</div>
                <div className="font-semibold text-gray-900">{new Date(tree.plantedDate).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
              <div className="p-3 bg-brand-50 text-brand-600 rounded-xl">
                <User className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">Tree Friend</div>
                <div className="font-semibold text-gray-900">{tree.treeFriend}</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
              <div className="p-3 bg-brand-50 text-brand-600 rounded-xl">
                <Ruler className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">Current Height</div>
                <div className="font-semibold text-gray-900">{tree.height}</div>
              </div>
            </div>
            
          </div>

          <div className="bg-surface-light rounded-3xl p-8 md:p-12 border border-gray-100">
            <div className="flex items-center gap-3 mb-8">
              <Activity className="w-6 h-6 text-brand-600" />
              <h2 className="text-2xl font-bold text-gray-900">Tree Journey</h2>
            </div>
            
            <div className="relative pl-8 md:pl-0">
              {/* Vertical line for mobile */}
              <div className="md:hidden absolute top-0 left-[11px] bottom-0 w-0.5 bg-brand-200"></div>
              
              <div className="space-y-8 md:space-y-0 md:flex md:flex-col gap-8">
                {tree.observations.map((obs, idx) => (
                  <div key={idx} className="relative flex flex-col md:flex-row md:items-center group">
                    {/* Desktop layout connection line */}
                    {idx !== tree.observations.length - 1 && (
                      <div className="hidden md:block absolute top-12 left-[11px] bottom-[-2rem] w-0.5 bg-brand-100 group-hover:bg-brand-200 transition-colors"></div>
                    )}
                    
                    {/* Timeline Node */}
                    <div className="absolute left-[-1.65rem] md:relative md:left-0 flex-shrink-0 w-6 h-6 rounded-full border-4 border-white bg-brand-500 shadow-sm z-10 md:mr-6 mt-1 md:mt-0"></div>
                    
                    {/* Content Card */}
                    <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex-grow md:max-w-2xl hover:shadow-md transition-shadow">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                        <span className="font-semibold text-gray-900">{obs.note}</span>
                        <span className="text-sm font-medium text-brand-600 bg-brand-50 px-2 py-0.5 rounded-full inline-block w-fit">
                          {new Date(obs.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                        </span>
                      </div>
                      
                      {obs.height && (
                        <div className="text-sm text-gray-600 flex items-center gap-1.5 mt-3">
                          <Ruler className="w-4 h-4 text-gray-400" />
                          Measured height: <span className="font-medium text-gray-900">{obs.height}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
             <div className="inline-flex items-center justify-center p-4 bg-gray-50 rounded-full mb-4">
                <Leaf className="w-8 h-8 text-brand-300" />
             </div>
             <p className="text-gray-500 text-sm">
               QR Code tracking simulation complete.<br/>
               In reality, this page is accessed by scanning the physical tag on the tree.
             </p>
          </div>
          
        </div>
      </div>
    </>
  );
}
