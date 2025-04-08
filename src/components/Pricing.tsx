
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$499',
    period: '/month',
    description: 'Perfect for small businesses just getting started',
    features: [
      '1 AI Assistant',
      'Up to 500 conversations/month',
      'Basic integrations',
      'Email support',
      'Basic analytics',
    ],
    buttonText: 'Start Free Trial',
    buttonVariant: 'outline',
    popular: false
  },
  {
    name: 'Professional',
    price: '$999',
    period: '/month',
    description: 'For growing businesses with increasing customer interactions',
    features: [
      '3 AI Assistants',
      'Up to 2,000 conversations/month',
      'Advanced integrations',
      'Priority support',
      'Advanced analytics & reporting',
      'Custom training',
    ],
    buttonText: 'Start Free Trial',
    buttonVariant: 'default',
    popular: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large organizations with complex needs',
    features: [
      'Unlimited AI Assistants',
      'Unlimited conversations',
      'Enterprise integrations',
      'Dedicated support',
      'Custom reporting',
      'Advanced security features',
      'SLA guarantees',
    ],
    buttonText: 'Contact Sales',
    buttonVariant: 'outline',
    popular: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Simple, Transparent Pricing</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that works best for your business needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-xl p-8 ${
                plan.popular 
                  ? 'border-2 border-sw-blue shadow-lg relative' 
                  : 'border border-gray-200 shadow'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-sw-blue text-white px-4 py-1 text-sm font-medium rounded-bl-xl rounded-tr-xl">
                  Most Popular
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-gray-600 ml-1">{plan.period}</span>
                </div>
                <p className="text-gray-600 mt-2">{plan.description}</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="h-5 w-5 text-sw-green mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full ${
                  plan.buttonVariant === 'default' 
                    ? 'bg-sw-blue hover:bg-blue-600 text-white' 
                    : 'border-sw-blue text-sw-blue hover:bg-sw-blue/5'
                }`}
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
