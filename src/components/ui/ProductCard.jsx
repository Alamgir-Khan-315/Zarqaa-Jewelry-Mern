import { useCart } from '../../context/CartContext';
import { ShoppingCart } from 'lucide-react';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 dark:border-gray-700 flex flex-col h-full">
      
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gray-100 dark:bg-gray-900">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
        />
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-xs font-semibold bg-white/90 dark:bg-gray-900/90 text-gray-800 dark:text-gray-200 rounded-full shadow-sm backdrop-blur-sm">
            {product.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex-grow">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-1">
            {product.name}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-4">
            {product.description}
          </p>
        </div>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
          <span className="text-xl font-bold text-amber-500">
            Rs {product.price}
          </span>
          <button
            onClick={() => addToCart(product)}
            className="flex items-center justify-center p-2.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-amber-500 hover:text-white dark:hover:bg-amber-500 transition-colors tooltip-trigger relative group/btn"
            aria-label="Add to cart"
          >
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
