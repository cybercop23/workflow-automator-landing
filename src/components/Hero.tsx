
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 gradient-bg">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-10">
          <div className="space-y-4 max-w-3xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              Where your virtual assistants work <span className="text-sw-blue">around the clock</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Never miss another lead again. Let your AI powered assistants work for you, 24/7/365. We help you automate your operations so you can do what you do best - help others.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button 
                as="a" 
                href="https://demo.simpleworkflows.us" 
                className="bg-sw-blue hover:bg-blue-600 text-white font-medium text-lg px-8 py-6"
                size="lg"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                as="a" 
                href="#how-it-works" 
                variant="outline"
                className="border-sw-blue text-sw-blue hover:bg-sw-blue/5 font-medium text-lg px-8 py-6"
                size="lg"
              >
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="w-full max-w-3xl mx-auto rounded-2xl shadow-2xl overflow-hidden animate-float">
            <div className="bg-gray-800 h-8 w-full flex items-center px-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            <div className="bg-white border-4 border-gray-100 p-6 h-64 flex items-center justify-center">
              <div className="text-center">
                <p className="text-lg text-gray-600 font-light">AI Assistant Demo</p>
                <div className="mt-4 flex items-center space-x-2 justify-center">
                  <div className="h-4 w-4 rounded-full bg-sw-green animate-pulse"></div>
                  <p className="text-sm text-gray-500">Online and ready to help</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
