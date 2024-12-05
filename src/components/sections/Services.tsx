import React from 'react';
import { Shield, Video, Bell, Users } from 'lucide-react';

const services = [
  {
    icon: Shield,
    title: 'Physical Security',
    description: 'Professional security personnel trained to protect your premises and assets.',
  },
  {
    icon: Video,
    title: 'Surveillance Systems',
    description: 'State-of-the-art CCTV and monitoring solutions for comprehensive coverage.',
  },
  {
    icon: Bell,
    title: 'Alarm Systems',
    description: 'Advanced alarm systems with 24/7 monitoring and rapid response protocols.',
  },
  {
    icon: Users,
    title: 'Security Consulting',
    description: 'Expert security assessments and customized protection strategies.',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive security solutions designed to protect what matters most to you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
            >
              <service.icon className="w-12 h-12 mb-4 text-black" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;