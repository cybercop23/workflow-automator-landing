
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Bot, Calendar, User } from 'lucide-react';

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
                className="bg-sw-blue hover:bg-blue-600 text-white font-medium text-lg px-8 py-6"
                size="lg"
                onClick={() => window.open("https://demo.simpleworkflows.us", "_blank", "noopener,noreferrer")}
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline"
                className="border-sw-blue text-sw-blue hover:bg-sw-blue/5 font-medium text-lg px-8 py-6"
                size="lg"
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="w-full max-w-3xl mx-auto animate-float">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Customer Support Chat */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-gray-800 h-8 w-full flex items-center px-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <p className="text-white text-xs ml-2 opacity-70">Customer Support Assistant</p>
                </div>
                <div className="p-4 h-64 flex flex-col space-y-3 overflow-y-auto">
                  <div className="flex items-start space-x-2">
                    <div className="bg-gray-100 rounded-full p-2">
                      <User className="h-5 w-5 text-gray-600" />
                    </div>
                    <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                      <p className="text-sm">Hi, I'm having trouble with my recent order #45678. Can you help me?</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-2 self-end">
                    <div className="bg-sw-blue rounded-lg p-3 max-w-[80%] text-white">
                      <p className="text-sm">Hello! I'd be happy to help with your order #45678. I can see it was shipped yesterday. Let me check the tracking details for you right away.</p>
                    </div>
                    <div className="bg-sw-blue rounded-full p-2">
                      <Bot className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-2 self-end">
                    <div className="bg-sw-blue rounded-lg p-3 max-w-[80%] text-white">
                      <p className="text-sm">The tracking number is RT456789US and your package is currently in transit. It should arrive by tomorrow at 5 PM.</p>
                    </div>
                    <div className="bg-sw-blue rounded-full p-2">
                      <Bot className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center mt-2">
                    <div className="h-4 w-4 rounded-full bg-sw-green animate-pulse"></div>
                    <p className="text-xs text-gray-500 ml-2">Online and ready to help</p>
                  </div>
                </div>
              </div>
              
              {/* Appointment Scheduling */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-gray-800 h-8 w-full flex items-center px-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <p className="text-white text-xs ml-2 opacity-70">Scheduling Assistant</p>
                </div>
                <div className="p-4 h-64 flex flex-col space-y-3 overflow-y-auto">
                  <div className="flex items-start space-x-2">
                    <div className="bg-gray-100 rounded-full p-2">
                      <User className="h-5 w-5 text-gray-600" />
                    </div>
                    <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                      <p className="text-sm">I need to schedule a consultation for next week. What times do you have available?</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-2 self-end">
                    <div className="bg-sw-green rounded-lg p-3 max-w-[80%] text-white">
                      <p className="text-sm">I'd be happy to help you schedule a consultation. Let me check the calendar for next week.</p>
                    </div>
                    <div className="bg-sw-green rounded-full p-2">
                      <Bot className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-2 self-end">
                    <div className="bg-sw-green rounded-lg p-3 max-w-[80%] text-white">
                      <p className="text-sm">We have openings on Tuesday at 10 AM, Wednesday at 2 PM, or Thursday at 4 PM. Which works best for you?</p>
                    </div>
                    <div className="bg-sw-green rounded-full p-2">
                      <Calendar className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <div className="bg-gray-100 rounded-full p-2">
                      <User className="h-5 w-5 text-gray-600" />
                    </div>
                    <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                      <p className="text-sm">Wednesday at 2 PM works for me.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center mt-2">
                    <div className="h-4 w-4 rounded-full bg-sw-green animate-pulse"></div>
                    <p className="text-xs text-gray-500 ml-2">Scheduling in progress...</p>
                  </div>
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
