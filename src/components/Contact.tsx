
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 transform transition-all duration-500 hover:scale-105">Get In Touch</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to discuss your packaging needs? Contact us today for a free consultation and quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 md:gap-16">
          <div className="space-y-8 animate-fade-in">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 transform transition-all duration-300 hover:scale-105 hover:translate-x-2">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-700 w-12 h-12 rounded-lg flex items-center justify-center transform transition-all duration-300 hover:rotate-12">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-gray-300">+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4 transform transition-all duration-300 hover:scale-105 hover:translate-x-2">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-700 w-12 h-12 rounded-lg flex items-center justify-center transform transition-all duration-300 hover:rotate-12">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-gray-300">info@samarthpackwell.com</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4 transform transition-all duration-300 hover:scale-105 hover:translate-x-2">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-700 w-12 h-12 rounded-lg flex items-center justify-center transform transition-all duration-300 hover:rotate-12">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Address</div>
                    <div className="text-gray-300">B-7, Gat No.904, Near Vaishali Garden, Kolhapur Road, Kolhapur Road-416115</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-2xl border border-gray-700 transform transition-all duration-500 hover:scale-105 animate-fade-in delay-300">
            <h3 className="text-xl md:text-2xl font-semibold mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">First Name</label>
                  <input type="text" className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 backdrop-blur-sm" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Last Name</label>
                  <input type="text" className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 backdrop-blur-sm" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input type="email" className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 backdrop-blur-sm" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Subject</label>
                <input type="text" className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 backdrop-blur-sm" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea rows={5} className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none backdrop-blur-sm"></textarea>
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center group transform hover:scale-105 hover:shadow-lg">
                Send Message
                <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
