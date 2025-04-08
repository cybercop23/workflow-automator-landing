
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
        </nav>
        
        <div>
          <Button
            className="bg-sw-blue hover:bg-blue-600 text-white font-medium"
            onClick={() => window.open("https://demo.simpleworkflows.us", "_blank", "noopener,noreferrer")}
          >
            Get Demo
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
