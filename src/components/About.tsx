
import { Award, Users, Globe, TrendingUp } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, number: "25+", label: "Years Experience" },
    { icon: Users, number: "500+", label: "Happy Clients" },
    { icon: Globe, number: "50+", label: "Countries Served" },
    { icon: TrendingUp, number: "1M+", label: "Products Delivered" }
  ];

  return (
    <section id="about" className="py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-blue-200 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gray-200 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 transform transition-all duration-500 hover:scale-105">
              Leading the Future of 
              <span className="text-blue-600 block animate-bounce"> Packaging</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed transform transition-all duration-300 hover:text-gray-700">
              With over two decades of experience in the packaging industry, we've built our reputation 
              on delivering innovative, sustainable, and cost-effective packaging solutions that help 
              businesses protect their products and enhance their brand presence.
            </p>
            <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed transform transition-all duration-300 hover:text-gray-700">
              Our commitment to quality, sustainability, and customer satisfaction has made us a trusted 
              partner for businesses across various industries, from food and beverage to electronics and e-commerce.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Learn More About Us
            </button>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 md:p-8 shadow-lg transform transition-all duration-500 hover:scale-105 animate-fade-in delay-300">
            <div className="grid grid-cols-2 gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center transform transition-all duration-300 hover:scale-110"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4 transform transition-all duration-300 hover:from-blue-600 hover:to-blue-700 hover:scale-110">
                    <stat.icon className="h-6 w-6 md:h-8 md:w-8 text-blue-600 hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 transform transition-all duration-300 hover:text-blue-600">{stat.number}</div>
                  <div className="text-sm md:text-base text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
