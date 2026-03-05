import { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { X, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';

export default function CartDrawer() {
  const { 
    cartItems, 
    cartTotal, 
    isCartOpen, 
    setIsCartOpen, 
    removeFromCart, 
    addToCart,
    clearItemFromCart
  } = useCart();

  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [formData, setFormData] = useState({
    whatsapp: '',
    address: '',
    email: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleProcessCheckout = (e) => {
    e.preventDefault();
    
    // Generate WhatsApp Message
    const phoneNumber = "923154572266";
    
    let message = "🛍️ *New Order from Zarqaa Jewelry* 🛍️\n\n";
    
    message += "*Customer Details:*\n";
    message += `WhatsApp: ${formData.whatsapp}\n`;
    message += `Address: ${formData.address}\n`;
    if (formData.email) {
      message += `Email: ${formData.email}\n`;
    }
    message += "\n";
    
    message += "*Order Details:*\n";
    cartItems.forEach((item, index) => {
      message += `${index + 1}. ${item.name} (${item.category})\n`;
      message += `   Qty: ${item.quantity} x Rs ${item.price} = Rs ${item.price * item.quantity}\n`;
    });
    
    message += `\n*Total Amount: Rs ${cartTotal}*\n\n`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    
    // Close cart and reset form after checkout attempt
    setIsCartOpen(false);
    setIsCheckingOut(false);
    setFormData({ whatsapp: '', address: '', email: '' });
  };

  // Close handler that also resets checkout state
  const handleClose = () => {
    setIsCartOpen(false);
    // Add a tiny delay so the reset isn't visible during slide-out animation
    setTimeout(() => setIsCheckingOut(false), 300);
  };

  if (!isCartOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-[60] transition-opacity"
        onClick={handleClose}
      />
      
      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 w-full md:w-[400px] bg-white dark:bg-gray-900 shadow-xl z-[60] flex flex-col transform transition-transform duration-300 ease-in-out">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800 shrink-0">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
            {isCheckingOut ? (
              <button 
                onClick={() => setIsCheckingOut(false)}
                className="mr-2 p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                title="Back to cart"
              >
                <ArrowLeft size={20} />
              </button>
            ) : (
              <ShoppingBag className="mr-2" size={20} />
            )}
            {isCheckingOut ? 'Checkout Details' : 'Your Shopping Cart'}
          </h2>
          <button 
            onClick={handleClose}
            className="p-2 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto">
          {isCheckingOut ? (
            // Form View
            <form id="checkout-form" onSubmit={handleProcessCheckout} className="p-4 space-y-4">
              <div>
                <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  WhatsApp Number *
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  required
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  placeholder="+92 300 1234567"
                />
              </div>
              
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Delivery Address *
                </label>
                <textarea
                  id="address"
                  name="address"
                  required
                  rows="3"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white resize-none"
                  placeholder="Complete home/office address"
                ></textarea>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email <span className="text-gray-400 font-normal">(Optional)</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  placeholder="you@example.com"
                />
              </div>
            </form>
          ) : (
            // Cart Items View
            <div className="p-4 space-y-4 h-full">
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-gray-500 dark:text-gray-400">
                  <ShoppingBag size={48} className="mb-4 opacity-20" />
                  <p>Your cart is empty</p>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-20 h-20 object-cover rounded-md"
                    />
                    
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between">
                          <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                            {item.name}
                          </h3>
                          <button 
                            onClick={() => clearItemFromCart(item.id)}
                            className="text-gray-400 hover:text-rose-500 transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                        <p className="text-sm mt-1 font-semibold text-amber-500">
                          Rs {item.price}
                        </p>
                      </div>
                      
                      <div className="flex items-center gap-3 mt-2">
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none"
                        >
                          -
                        </button>
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          {item.quantity}
                        </span>
                        <button 
                          onClick={() => addToCart(item)}
                          className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="p-4 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50 shrink-0">
            <div className="flex justify-between text-base font-semibold text-gray-900 dark:text-white mb-4">
              <p>Total</p>
              <p>Rs {cartTotal}</p>
            </div>
            
            {isCheckingOut ? (
              <button
                type="submit"
                form="checkout-form"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-4 rounded-lg transition-colors flex justify-center items-center shadow-md hover:shadow-lg"
              >
                Send Order to WhatsApp
              </button>
            ) : (
              <button
                onClick={() => setIsCheckingOut(true)}
                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-4 rounded-lg transition-colors flex justify-center items-center shadow-md hover:shadow-lg"
              >
                Proceed to Checkout
              </button>
            )}
          </div>
        )}
      </div>
    </>
  );
}
