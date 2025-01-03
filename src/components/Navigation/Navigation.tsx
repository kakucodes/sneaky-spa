import React, { useState } from "react";
import { Radio, Home, ShoppingBag, X } from "lucide-react";

export const Navigation = () => {
  const [isRadioOpen, setIsRadioOpen] = useState(false);

  return (
    <>
      {/* Main Navigation Bar */}
      <nav className="fixed top-0 w-full bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Left side - Main navigation */}
            <div className="flex space-x-8">
              <a href="/" className="flex items-center hover:text-blue-600">
                <Home className="h-5 w-5" />
                <span className="ml-2">Home</span>
              </a>
              <a
                href="/dashboard"
                className="flex items-center font-medium hover:text-blue-600"
              >
                <span>Dashboard</span>
              </a>
              <a href="/shop" className="flex items-center hover:text-blue-600">
                <ShoppingBag className="h-5 w-5" />
                <span className="ml-2">Shop</span>
              </a>
            </div>

            {/* Right side - Social links and radio */}
            <div className="flex items-center space-x-6">
              {/* <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600"
              >
                <Discord className="h-5 w-5" />
              </a> */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600"
              >
                <X className="h-5 w-5" />
              </a>
              <button
                onClick={() => setIsRadioOpen(true)}
                className="text-gray-600 hover:text-blue-600"
              >
                <Radio className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Radio Modal */}
      {isRadioOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Radio Player</h2>
              <button
                onClick={() => setIsRadioOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
              {/* Radio widget content would go here */}
              <span className="text-gray-500">Radio Widget Placeholder</span>
            </div>
          </div>
        </div>
      )}

      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div className="h-16" />
    </>
  );
};
