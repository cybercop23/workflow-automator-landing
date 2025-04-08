
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-20 bg-sw-blue">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to Transform Your Business Operations?</h2>
          <p className="text-lg text-blue-100 max-w-2xl">
            Join hundreds of businesses that have revolutionized their operations with AI assistants.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              className="bg-white text-sw-blue hover:bg-gray-100 font-medium text-lg px-8 py-6"
              size="lg"
              onClick={() => window.open("https://demo.simpleworkflows.us", "_blank", "noopener,noreferrer")}
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline"
              className="bg-white text-sw-blue hover:bg-gray-100 border-white font-medium text-lg px-8 py-6"
              size="lg"
              onClick={() => window.location.href = "mailto:sales@simpleworkflows.us"}
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
