
import React from 'react';
import { Clock, MessageSquare, BarChart3, Zap, Users, Lock } from 'lucide-react';

const features = [
  {
    icon: <Clock className="h-8 w-8 text-sw-blue" />,
    title: '24/7 Availability',
    description: 'Your AI assistants never sleep, ensuring you never miss a lead or customer inquiry, regardless of timezone.'
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-sw-red" />,
    title: 'Smart Conversations',
    description: 'Engage customers with natural, intelligent conversations that understand context and provide relevant responses.'
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-sw-green" />,
    title: 'Data Insights',
    description: 'Gain valuable insights from customer interactions to improve your offerings and customer experience.'
  },
  {
    icon: <Zap className="h-8 w-8 text-sw-yellow" />,
    title: 'Seamless Integration',
    description: 'Easily integrate with your existing tools and workflows for a smooth operational experience.'
  },
  {
    icon: <Users className="h-8 w-8 text-sw-blue" />,
    title: 'Human Handoff',
    description: 'Intelligent escalation to human agents when necessary, ensuring complex issues are resolved appropriately.'
  },
  {
    icon: <Lock className="h-8 w-8 text-sw-red" />,
    title: 'Secure & Compliant',
    description: 'Enterprise-grade security ensures your data and customer information stays protected at all times.'
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Powerful Features</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Our AI assistants provide powerful capabilities to enhance your business operations
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="feature-card bg-white rounded-xl p-6 shadow-md border border-gray-100"
            >
              <div className="mb-4 p-3 rounded-full bg-gray-50 inline-block">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
