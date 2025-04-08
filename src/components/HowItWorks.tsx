
import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Connect Your Systems',
    description: 'Integrate with your existing CRM, calendars, and communication platforms.',
    color: 'bg-sw-blue'
  },
  {
    number: '02',
    title: 'Train Your Assistants',
    description: 'Customize your AI with your brand voice, FAQs, and business processes.',
    color: 'bg-sw-green'
  },
  {
    number: '03',
    title: 'Deploy & Monitor',
    description: 'Launch your always-on AI assistants and monitor their performance.',
    color: 'bg-sw-red'
  },
  {
    number: '04',
    title: 'Scale & Optimize',
    description: 'Grow your capabilities and refine your automation as your business evolves.',
    color: 'bg-sw-yellow'
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 gradient-bg">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Getting started with simpleWorkflows is easy and straightforward
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-2xl mb-4`}>
                {step.number}
              </div>
              {index < steps.length - 1 && (
                <div className="absolute top-8 left-16 w-full h-0.5 bg-gray-200 hidden lg:block"></div>
              )}
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
