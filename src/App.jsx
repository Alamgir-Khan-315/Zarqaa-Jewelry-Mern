import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { CartProvider } from './context/CartContext';
import { ProductProvider } from './context/ProductContext';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import CartDrawer from './components/cart/CartDrawer';

// Client Pages
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';

// Admin Pages
import AdminLayout from './components/admin/AdminLayout';
import ProductList from './pages/admin/ProductList';
import ProductForm from './pages/admin/ProductForm';

function App() {
  return (
    <ThemeProvider>
      <ProductProvider>
        <CartProvider>
          <Router>
            <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 font-sans transition-colors duration-300 flex flex-col pt-safe">
              <CartDrawer />
              
              <Routes>
                {/* Admin Routes (No Client Navbar/Footer) */}
                <Route path="/admin_gopu" element={<AdminLayout />}>
                  <Route index element={<ProductList />} />
                  <Route path="new" element={<ProductForm />} />
                  <Route path="edit/:id" element={<ProductForm />} />
                </Route>

                {/* Client Routes */}
                <Route
                  path="*"
                  element={
                    <>
                      <Navbar />
                      <main className="flex-1">
                        <Routes>
                          <Route path="/" element={<Home />} />
                          <Route path="/products" element={<Products />} />
                          <Route path="/contact" element={<Contact />} />
                        </Routes>
                      </main>
                      <Footer />
                    </>
                  }
                />
              </Routes>
              
            </div>
          </Router>
        </CartProvider>
      </ProductProvider>
    </ThemeProvider>
  );
}

export default App;
