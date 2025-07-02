
import { Award, Users, Globe, TrendingUp } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, number: "25+", label: "Years Experience" },
    { icon: Users, number: "500+", label: "Happy Clients" },
    { icon: Globe, number: "50+", label: "Countries Served" },
    { icon: TrendingUp, number: "1M+", label: "Products Delivered" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Leading the Future of 
              <span className="text-blue-600"> Packaging</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With over two decades of experience in the packaging industry, we've built our reputation 
              on delivering innovative, sustainable, and cost-effective packaging solutions that help 
              businesses protect their products and enhance their brand presence.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our commitment to quality, sustainability, and customer satisfaction has made us a trusted 
              partner for businesses across various industries, from food and beverage to electronics and e-commerce.
            </p>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Learn More About Us
            </button>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
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
