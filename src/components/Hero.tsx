
import { ArrowRight, Shield, Truck, Recycle } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Premium Packaging
              <span className="text-blue-300 block">Solutions</span>
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Delivering sustainable, innovative packaging solutions that protect your products 
              and enhance your brand image across industries worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center group">
                Get Quote
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
                View Portfolio
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-blue-800/30 rounded-2xl p-8 backdrop-blur-sm">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 rounded-lg p-6 text-center">
                  <Shield className="h-8 w-8 mx-auto mb-3 text-blue-300" />
                  <h3 className="font-semibold mb-2">Secure</h3>
                  <p className="text-sm text-blue-100">Maximum protection</p>
                </div>
                <div className="bg-white/10 rounded-lg p-6 text-center">
                  <Truck className="h-8 w-8 mx-auto mb-3 text-blue-300" />
                  <h3 className="font-semibold mb-2">Fast Delivery</h3>
                  <p className="text-sm text-blue-100">Quick turnaround</p>
                </div>
                <div className="bg-white/10 rounded-lg p-6 text-center col-span-2">
                  <Recycle className="h-8 w-8 mx-auto mb-3 text-green-400" />
                  <h3 className="font-semibold mb-2">Eco-Friendly</h3>
                  <p className="text-sm text-blue-100">Sustainable materials</p>
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
