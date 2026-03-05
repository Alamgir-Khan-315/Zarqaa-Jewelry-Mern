import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useProducts } from '../../context/ProductContext';
import { Save, X } from 'lucide-react';
import { categories } from '../../data/products';

export default function ProductForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, addProduct, updateProduct } = useProducts();
  
  const isEditing = Boolean(id);
  
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: 'Necklaces', // default
    image: '',
    description: ''
  });

  // Load existing data if editing
  useEffect(() => {
    if (isEditing) {
      const existingProduct = products.find(p => p.id === Number(id));
      if (existingProduct) {
        setFormData({
          name: existingProduct.name,
          price: existingProduct.price,
          category: existingProduct.category,
          image: existingProduct.image,
          description: existingProduct.description || ''
        });
      } else {
        // ID not found, redirect to list
        navigate('/admin_gopu');
      }
    }
  }, [id, isEditing, products, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isEditing) {
      updateProduct(Number(id), formData);
    } else {
      addProduct(formData);
    }
    
    navigate('/admin_gopu');
  };

  // Filter out "All" category since products shouldn't be assigned strictly to "All"
  const availableCategories = categories.filter(c => c !== "All");

  return (
    <div className="space-y-6">
      <div className="pb-4 border-b border-gray-200 dark:border-gray-800">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          {isEditing ? 'Edit Product' : 'Add New Product'}
        </h1>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          {isEditing ? 'Update the details of your jewelry piece.' : 'List a new piece of jewelry in your store.'}
        </p>
      </div>

      <div className="bg-white dark:bg-gray-900 shadow-sm ring-1 ring-gray-200 dark:ring-gray-800 rounded-lg p-6 md:p-8">
        <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
          
          {/* Name & Price Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Product Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                placeholder="e.g. Golden Rose Pendant"
              />
            </div>
            
            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Price (Rs)
              </label>
              <input
                type="number"
                id="price"
                name="price"
                required
                min="0"
                value={formData.price}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                placeholder="e.g. 3500"
              />
            </div>
          </div>

          {/* Category & Image Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Category
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
              >
                {availableCategories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="image" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Image URL
              </label>
              <input
                type="url"
                id="image"
                name="image"
                required
                value={formData.image}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                placeholder="https://example.com/image.jpg"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows="4"
              required
              value={formData.description}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors resize-none"
              placeholder="Elegant details about the jewelry piece..."
            ></textarea>
          </div>

          {/* Actions */}
          <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-gray-800">
            <button
              type="submit"
              className="flex items-center justify-center px-6 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
            >
              <Save className="mr-2 h-4 w-4" />
              {isEditing ? 'Save Changes' : 'Create Product'}
            </button>
            <button
              type="button"
              onClick={() => navigate('/admin_gopu')}
              className="flex items-center justify-center px-6 py-2 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none transition-colors"
            >
              <X className="mr-2 h-4 w-4" />
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
