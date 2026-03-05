import { createContext, useContext, useState, useEffect } from 'react';
import { products as initialProducts } from '../data/products';

const ProductContext = createContext();

export const useProducts = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedProducts = localStorage.getItem('products');
      if (savedProducts) {
        try {
          return JSON.parse(savedProducts);
        } catch (e) {
          console.error("Failed to parse products from local storage", e);
        }
      }
    }
    // Fallback to default dummy data if nothing in localStorage
    return initialProducts;
  });

  // Sync products to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  // Add a new product
  const addProduct = (productData) => {
    const newProduct = {
      ...productData,
      id: Date.now(), // Generate a unique ID based on timestamp
      price: Number(productData.price)
    };
    setProducts(prev => [...prev, newProduct]);
  };

  // Update an existing product
  const updateProduct = (id, updatedData) => {
    setProducts(prev => prev.map(p => 
      p.id === id ? { ...p, ...updatedData, price: Number(updatedData.price) } : p
    ));
  };

  // Delete a product
  const deleteProduct = (id) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, updateProduct, deleteProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
