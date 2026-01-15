import { Recycle } from 'lucide-react';

function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="bg-green-600 p-2 rounded-lg">
              <Recycle className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">kabadizone</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#prices" className="text-gray-600 hover:text-green-600 transition-colors">Prices</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-green-600 transition-colors">How It Works</a>
            <a href="#contact" className="text-gray-600 hover:text-green-600 transition-colors">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
