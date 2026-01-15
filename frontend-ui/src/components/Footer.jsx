import { Recycle, Mail, Phone, MapPin } from 'lucide-react';

function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-green-600 p-2 rounded-lg">
                <Recycle className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">kabadizone</span>
            </div>
            <p className="text-gray-400 mb-4">
              Making waste management simple and profitable. We help you contribute to a sustainable environment while earning money.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#prices" className="hover:text-green-500 transition-colors">Prices</a></li>
              <li><a href="#how-it-works" className="hover:text-green-500 transition-colors">How It Works</a></li>
              <li><a href="#contact" className="hover:text-green-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-green-500" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-green-500" />
                <span>info@kabadizone.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-green-500 mt-1" />
                <span>123 Green Street, Eco City, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 kabadizone. All rights reserved. Built with ♻️ for a sustainable future.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
