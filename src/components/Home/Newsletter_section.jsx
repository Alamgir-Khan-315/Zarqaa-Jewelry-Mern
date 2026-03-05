import React from 'react'
import { Mail } from 'lucide-react'

const Newsletter_section = () => {
  return (
    <section className="py-20 bg-amber-600 dark:bg-amber-900 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-black opacity-10 blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Mail className="w-12 h-12 text-white/80 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Join Our Exclusive Club</h2>
          <p className="text-amber-100 mb-8 text-lg max-w-2xl mx-auto">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals delivered straight to your inbox.</p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-1 px-6 py-4 rounded-full border-none focus:ring-2 focus:ring-white bg-white/10 dark:bg-black/20 text-white placeholder-amber-200 outline-none backdrop-blur-sm"
              required
            />
            <button type="submit" className="px-8 py-4 bg-white text-amber-700 dark:bg-gray-950 dark:text-amber-500 font-bold rounded-full hover:bg-amber-50 dark:hover:bg-gray-800 transition-colors shadow-lg shadow-amber-900/20 whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </section>
  )
}

export default Newsletter_section