
import React from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="w-full py-4 border-b border-gray-100 bg-white/80 backdrop-blur-sm fixed top-0 z-50">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/3e263d1d-4abf-4276-811e-d77a8ce1225a.png" 
            alt="simpleWorkflows Logo" 
            className="h-12"
          />
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm font-medium text-gray-700 hover:text-sw-blue transition-colors">Features</a>
          <a href="#how-it-works" className="text-sm font-medium text-gray-700 hover:text-sw-blue transition-colors">How It Works</a>
          <a href="#pricing" className="text-sm font-medium text-gray-700 hover:text-sw-blue transition-colors">Pricing</a>
        </nav>
        
        <div>
          <Button 
            as="a"
            href="https://demo.simpleworkflows.us" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-sw-blue hover:bg-blue-600 text-white font-medium"
          >
            Get Demo
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
