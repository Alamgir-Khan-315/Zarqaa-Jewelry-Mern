import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 pt-12 pb-8 transition-colors duration-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand */}
          <div className="space-y-4">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-rose-500">
              Zarqaa Jewelry
            </span>
            <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xs">
              Exquisite artificial jewelry designed to elevate your style. Uncompromising quality for every occasion.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3 relative z-10">
              <li>
                <Link to="/products" className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  Shop Collection
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-base text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-3">
              <li className="text-base text-gray-500 dark:text-gray-400">
                <span className="block font-medium text-gray-900 dark:text-white mb-1">WhatsApp:</span>
                +92 315 4572266
              </li>
              <li className="text-base text-gray-500 dark:text-gray-400">
                <span className="block font-medium text-gray-900 dark:text-white mb-1">Email:</span>
                hello@zarqaajewelry.com
              </li>
            </ul>
          </div>

        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-base text-gray-400">
            &copy; {new Date().getFullYear()} Zarqaa Jewelry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
