import React from 'react'
import { Star } from 'lucide-react'

const Testimonials_section = () => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Loved by Thousands</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Don't just take our word for it. Here is what our customers have to say.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Jenkins", role: "Verified Buyer", text: "The necklace I ordered is simply stunning. It looks exactly like real gold and the craftsmanship is impeccable.", rating: 5 },
              { name: "Emily Chen", role: "Verified Buyer", text: "Fast shipping and elegant packaging! I bought a set of earrings for my sister's wedding and she absolutely loved them.", rating: 5 },
              { name: "Aisha Fatima", role: "Verified Buyer", text: "I have sensitive skin but their premium collection doesn't irritate at all. Very happy with the quality and design.", rating: 5 }
            ].map((review, idx) => (
              <div key={idx} className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 relative hover:shadow-md transition-shadow">
                <div className="flex text-amber-500 mb-4">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic mb-6">"{review.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center text-amber-700 dark:text-amber-500 font-bold text-lg border border-amber-200 dark:border-amber-800">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white leading-tight">{review.name}</h4>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{review.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Testimonials_section