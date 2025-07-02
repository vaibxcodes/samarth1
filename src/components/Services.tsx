import { Package, Box, Archive, Gift, Truck, Factory } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Package,
      title: "Custom Packaging",
      description:
        "Tailored packaging solutions designed specifically for your products and brand requirements.",
    },
    {
      icon: Box,
      title: "Corrugated Boxes",
      description:
        "Durable and cost-effective corrugated packaging for shipping and storage needs.",
    },
    {
      icon: Archive,
      title: "Food Packaging",
      description:
        "FDA-approved food-grade packaging that maintains freshness and safety standards.",
    },
    {
      icon: Gift,
      title: "Retail Packaging",
      description:
        "Eye-catching retail packaging that enhances product presentation and brand visibility.",
    },
    {
      icon: Truck,
      title: "Industrial Packaging",
      description:
        "Heavy-duty packaging solutions for industrial and manufacturing applications.",
    },
    {
      icon: Factory,
      title: "Bulk Solutions",
      description:
        "Large-scale packaging operations with efficient logistics and cost optimization.",
    },
  ];

  return (
    <section
      id="services"
      className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23000000%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>{" "}
      {/* ✅ This was missing */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 md:mb-6 transform transition-all duration-500 hover:scale-105">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive packaging solutions tailored to meet your specific
            industry needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group transform hover:-translate-y-2 animate-fade-in border border-gray-100"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-14 h-14 md:w-16 md:h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-blue-700 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-6">
                <service.icon className="h-7 w-7 md:h-8 md:w-8 text-blue-600 group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
