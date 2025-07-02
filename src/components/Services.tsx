
import { Package, Box, Archive, Gift, Truck, Factory } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Package,
      title: "Custom Packaging",
      description: "Tailored packaging solutions designed specifically for your products and brand requirements."
    },
    {
      icon: Box,
      title: "Corrugated Boxes",
      description: "Durable and cost-effective corrugated packaging for shipping and storage needs."
    },
    {
      icon: Archive,
      title: "Food Packaging",
      description: "FDA-approved food-grade packaging that maintains freshness and safety standards."
    },
    {
      icon: Gift,
      title: "Retail Packaging",
      description: "Eye-catching retail packaging that enhances product presentation and brand visibility."
    },
    {
      icon: Truck,
      title: "Industrial Packaging",
      description: "Heavy-duty packaging solutions for industrial and manufacturing applications."
    },
    {
      icon: Factory,
      title: "Bulk Solutions",
      description: "Large-scale packaging operations with efficient logistics and cost optimization."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive packaging solutions tailored to meet your specific industry needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow group">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                <service.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
