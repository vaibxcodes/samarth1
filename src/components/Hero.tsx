
import { ArrowRight, Shield, Truck, Recycle } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="space-y-6 md:space-y-8 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight transform transition-all duration-700 hover:scale-105">
              Premium Packaging
              <span className="text-blue-300 block animate-bounce">Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed transform transition-all duration-500 delay-200">
              Delivering sustainable, innovative packaging solutions that protect your products 
              and enhance your brand image across industries worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-white text-blue-900 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center group">
                Get Quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 transform hover:scale-105">
                View Portfolio
              </button>
            </div>
          </div>
          
          <div className="relative animate-fade-in delay-500">
            <div className="bg-blue-800/20 rounded-2xl p-6 md:p-8 backdrop-blur-sm border border-white/10 shadow-2xl transform transition-all duration-500 hover:scale-105">
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <div className="bg-white/10 rounded-lg p-4 md:p-6 text-center transform transition-all duration-300 hover:bg-white/20 hover:scale-105">
                  <Shield className="h-6 w-6 md:h-8 md:w-8 mx-auto mb-3 text-blue-300 animate-pulse" />
                  <h3 className="font-semibold mb-2 text-sm md:text-base">Secure</h3>
                  <p className="text-xs md:text-sm text-blue-100">Maximum protection</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 md:p-6 text-center transform transition-all duration-300 hover:bg-white/20 hover:scale-105">
                  <Truck className="h-6 w-6 md:h-8 md:w-8 mx-auto mb-3 text-blue-300 animate-pulse delay-500" />
                  <h3 className="font-semibold mb-2 text-sm md:text-base">Fast Delivery</h3>
                  <p className="text-xs md:text-sm text-blue-100">Quick turnaround</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 md:p-6 text-center col-span-2 transform transition-all duration-300 hover:bg-white/20 hover:scale-105">
                  <Recycle className="h-6 w-6 md:h-8 md:w-8 mx-auto mb-3 text-green-400 animate-spin" />
                  <h3 className="font-semibold mb-2 text-sm md:text-base">Eco-Friendly</h3>
                  <p className="text-xs md:text-sm text-blue-100">Sustainable materials</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
