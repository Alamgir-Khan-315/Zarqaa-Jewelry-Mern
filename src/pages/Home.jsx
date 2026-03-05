import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useProducts } from '../context/ProductContext';
import ProductCard from '../components/ui/ProductCard';
import Shop_by_catagory from '../components/Home/Shop by catagory';
import Testimonials_section from '../components/Home/Testimonials_section';
import Newsletter_section from '../components/Home/Newsletter_section';

export default function Home() {
  const { products } = useProducts();
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="bg-white dark:bg-gray-950 transition-colors">
      
      {/* Hero Section */}
      <section className="relative bg-amber-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
              Elegance that speaks for <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-rose-500">itself.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
              Discover our exquisite collection of artificial jewelry. Premium quality, stunning designs, and affordable luxury for every occasion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/products"
                className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-amber-600 hover:bg-amber-700 transition-colors"
              >
                Shop Collection
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link 
                to="/contact"
                className="inline-flex justify-center items-center px-8 py-4 border border-gray-300 dark:border-gray-700 text-base font-medium rounded-full text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative elements - Only visible on md and up */}
        <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-1/3 overflow-hidden rounded-bl-[100px]">
          <img 
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=1000" 
            alt="Hero Jewelry" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-amber-50 dark:to-gray-900"></div>
        </div>
      </section>

      {/* Shop by Category */}
      <Shop_by_catagory />

      {/* Featured Products Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Featured Products</h2>
              <p className="text-gray-600 dark:text-gray-400">Handpicked favorites from our collection.</p>
            </div>
            <Link 
              to="/products"
              className="hidden sm:inline-flex items-center text-amber-600 dark:text-amber-500 font-semibold hover:text-amber-700 dark:hover:text-amber-400 transition-colors"
            >
              View All <ArrowRight className="ml-1" size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-10 text-center sm:hidden">
            <Link 
              to="/products"
              className="inline-flex items-center text-amber-600 dark:text-amber-500 font-semibold transition-colors"
            >
              View All Products <ArrowRight className="ml-1" size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Features/Trust Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-16 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Premium Quality</h3>
              <p className="text-gray-600 dark:text-gray-400">Crafted with precision using high-quality materials that last.</p>
            </div>
            <div className="p-6">
               <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 900 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Fast Response</h3>
              <p className="text-gray-600 dark:text-gray-400">Order directly via WhatsApp for quick and personal service.</p>
            </div>
            <div className="p-6">
               <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Secure Value</h3>
              <p className="text-gray-600 dark:text-gray-400">Affordable luxury without compromising on the aesthetics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials_section />

      {/* Newsletter Section */}
      <Newsletter_section />

    </div>
  );
}
