import SEO from '../components/SEO';
import { ExternalLink, Heart, Leaf, Globe } from 'lucide-react';

export default function About() {
  return (
    <>
      <SEO 
        title="About | Akshar Bharati" 
        description="Learn more about Akshar Bharati, our broader mission, and the Tree Buddy Urban Forests initiative."
      />
      
      <div className="bg-brand-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Leaf className="w-12 h-12 text-brand-400 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">About Akshar Bharati</h1>
          <p className="text-xl text-brand-100 max-w-2xl mx-auto leading-relaxed">
            Dedicated to illuminating minds and nurturing the environment for a sustainable, brighter future.
          </p>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="prose prose-lg text-gray-600 max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Heart className="w-8 h-8 text-brand-500" />
              Who We Are
            </h2>
            <p className="mb-8 leading-relaxed">
              Akshar Bharati is a non-governmental organization committed to socio-economic development through various educational and environmental initiatives. We believe that empowering communities through knowledge and environmental stewardship is the key to building a resilient society. Our volunteers and supporters work tirelessly to create platforms where individuals can contribute meaningfully to society.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3 mt-12">
              <Globe className="w-8 h-8 text-brand-500" />
              Sasya Shyamala Bharati (Tree Buddy)
            </h2>
            <p className="mb-6 leading-relaxed">
              The <strong>Tree Buddy Urban Forests</strong> initiative is our flagship environmental project under the "Sasya Shyamala Bharati" banner. Recognizing the rapid depletion of green cover in our cities, this program focuses on planting and sustaining micro-forests in urban spaces, primarily targeting schools and community areas.
            </p>
            <p className="mb-8 leading-relaxed">
              We don't just plant trees; we nurture them. By assigning a "Tree Friend" to each sapling and tracking its growth journey, we ensure high survival rates and foster a deep sense of environmental responsibility within the community.
            </p>

            <div className="bg-surface-light rounded-3xl p-8 my-12 border border-gray-100 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Broader Mission</h3>
              <p className="text-gray-600 mb-8 max-w-lg mx-auto">
                Discover more about our educational libraries, volunteer programs, and how you can be a part of the Akshar Bharati family.
              </p>
              <a 
                href="https://aksharbharati.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2 bg-brand-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-brand-700 transition-colors shadow-sm"
              >
                Visit Official Website
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
