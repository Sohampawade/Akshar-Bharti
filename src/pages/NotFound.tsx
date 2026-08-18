import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found | Akshar Bharati" />
      <div className="flex-grow flex items-center justify-center bg-surface-light px-4 py-20">
        <div className="text-center max-w-lg">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-full mb-8 shadow-sm text-gray-300">
             <Leaf className="w-12 h-12" />
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-10">
            Looks like this path doesn't have a tree yet. The page you are looking for might have been moved or doesn't exist.
          </p>
          <Link 
            to="/tracker" 
            className="inline-flex justify-center items-center bg-brand-600 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-brand-700 transition-colors shadow-sm"
          >
            Return to Plantation Tracker
          </Link>
        </div>
      </div>
    </>
  );
}
