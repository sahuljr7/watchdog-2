import React from 'react';
import { CheckCircle } from 'lucide-react';

const features = [
  'Over 15 years of industry experience',
  'Certified security professionals',
  '24/7 emergency response',
  'Customized security solutions',
  'Advanced technology integration',
  'Comprehensive training programs',
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Why Choose WatchDog?</h2>
            <p className="text-gray-600 mb-8">
              With over a decade of experience in providing top-tier security solutions, 
              we've established ourselves as a trusted partner for businesses and 
              individuals seeking professional protection services.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-black" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?auto=format&fit=crop&q=80"
              alt="Security Professional"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-black text-white p-6 rounded-lg">
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-sm">Years of Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;