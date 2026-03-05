import React from 'react'
import { Link } from 'react-router-dom'

const categories = [
    { name: 'Necklaces', image: 'https://images.unsplash.com/photo-1599643478524-fb66f4568e21?auto=format&fit=crop&q=80&w=400' },
    { name: 'Earrings', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=400' },
    { name: 'Rings', image: 'https://images.unsplash.com/photo-1605100804763-247f66156eb4?auto=format&fit=crop&q=80&w=400' },
    { name: 'Bracelets', image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=400' },
  ];

const Shop_by_catagory = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Shop by Category</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Explore our wide range of jewelry categories tailored for your perfect look.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {
            categories.map((category, idx) => (
              <Link to={`/products?category=${category.name.toLowerCase()}`} key={idx} className="group flex flex-col items-center">
                <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden mb-4 border-4 border-amber-50 dark:border-gray-800 group-hover:border-amber-200 dark:group-hover:border-amber-900/50 transition-all duration-300">
                  <img src={category.image} alt={category.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-500 transition-colors">{category.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Shop_by_catagory