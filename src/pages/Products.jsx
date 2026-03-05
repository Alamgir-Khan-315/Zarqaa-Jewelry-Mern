import { useState } from 'react';
import { categories } from '../data/products';
import { useProducts } from '../context/ProductContext';
import ProductCard from '../components/ui/ProductCard';

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { products } = useProducts();

  // Filter products based on selected category
  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-4">
            Our Collection
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            Discover our meticulously crafted artificial jewelry designed to bring elegance and sparkle to your everyday life.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-amber-500 text-white shadow-md'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 dark:text-gray-400 text-lg">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
