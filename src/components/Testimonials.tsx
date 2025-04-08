
import React from 'react';

const testimonials = [
  {
    quote: "simpleWorkflows has completely transformed our customer service. Our AI assistants handle 70% of inquiries without human intervention.",
    author: "Sarah Johnson",
    role: "Customer Success Manager",
    company: "TechSolutions Inc."
  },
  {
    quote: "The lead generation capabilities are incredible. We've seen a 40% increase in qualified leads since implementing simpleWorkflows.",
    author: "Michael Chen",
    role: "Marketing Director",
    company: "GrowthPartners"
  },
  {
    quote: "Setting up was surprisingly simple, and the ROI was apparent within the first month. Our team can focus on high-value tasks now.",
    author: "Alex Rodriguez",
    role: "Operations Lead",
    company: "Innovate LLC"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">What Our Clients Say</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from businesses that have transformed with simpleWorkflows
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
            >
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      className="w-5 h-5 text-yellow-400" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </div>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
