import { Link } from 'react-router-dom';
import { Leaf } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Leaf className="w-6 h-6 text-brand-400" />
              <span className="font-bold text-lg text-white">Akshar Bharati</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Growing forests. Growing futures. The Tree Buddy Urban Forests initiative is dedicated to bringing greenery back to our communities.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-brand-400 transition-colors">Home</Link></li>
              <li><Link to="/tracker" className="hover:text-brand-400 transition-colors">Plantation Tracker</Link></li>
              <li><Link to="/about" className="hover:text-brand-400 transition-colors">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://aksharbharati.org/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-400 transition-colors flex items-center gap-2">
                  Official Website
                </a>
              </li>
              <li>
                <a href="mailto:info@aksharbharati.org" className="hover:text-brand-400 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; {currentYear} Akshar Bharati. All rights reserved.</p>
          <p>
            This is a demonstration site. Data shown is for illustrative purposes.
          </p>
        </div>
      </div>
    </footer>
  );
}
