import { useState } from 'react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppRedirect = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.message.trim()) return;

    const phoneNumber = "923154572266";
    const textMessage = `*New Inquiry from Zarqaa Jewelry App*\n\n*Name:* ${formData.name}\n\n*Message:* ${formData.message}`;
    
    const encodedMessage = encodeURIComponent(textMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen py-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Get in Touch</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a question about our jewelry or need help with an order? Send us a message directly via WhatsApp and we'll get back to you shortly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
          
          {/* Contact Info Side */}
          <div className="bg-amber-600 dark:bg-gray-800 p-8 md:p-12 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <p className="text-amber-100 dark:text-gray-300 mb-12">
                We're here to help and answer any question you might have. We look forward to hearing from you.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <Phone className="w-6 h-6 mr-4 text-amber-200" />
                  <div>
                    <h3 className="text-lg font-medium">WhatsApp / Phone</h3>
                    <p className="mt-1 text-amber-100 dark:text-gray-300">+92 315 4572266</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-6 h-6 mr-4 text-amber-200" />
                  <div>
                    <h3 className="text-lg font-medium">Email</h3>
                    <p className="mt-1 text-amber-100 dark:text-gray-300">hello@zarqaajewelry.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 mr-4 text-amber-200" />
                  <div>
                    <h3 className="text-lg font-medium">Location</h3>
                    <p className="mt-1 text-amber-100 dark:text-gray-300">Lahore, Pakistan<br/>Available online nationwide</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-16">
              <p className="text-sm text-amber-200 dark:text-gray-400">
                Operating Hours: 9:00 AM - 10:00 PM (PKT)
              </p>
            </div>
          </div>

          {/* Form Side */}
          <div className="p-8 md:p-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send us a Message</h2>
            
            <form onSubmit={handleWhatsAppRedirect} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex justify-center items-center py-4 px-6 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
              >
                <Send className="w-5 h-5 mr-2" />
                Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
