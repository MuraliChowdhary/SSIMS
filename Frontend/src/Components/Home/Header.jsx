import React from "react";
import "./Header.css"; // Import the CSS file
import { motion } from "framer-motion";

export const Header = () => {
  return (
    <div className="relative">
      <img
        src="/backgroundimage.webp"
        alt="Background"
        className="w-full h-screen object-cover"
      />

      <motion.div
        animate={{ opacity: 1, y: 0 }} // Animation properties
        initial={{ opacity: 0, y: -100 }} // Start position
        transition={{ delay: .3, duration: 4  }} // Animation timing
        className="absolute inset-0 flex flex-col justify-center items-center text-center text-slate-950" // Center the content
      >
        <h1 className="text-4xl font-bold mb-4">
          Your Global Commerce Partner, Engineered for Peak Performance
        </h1>
        <p className="text-lg mb-8">
          Launch your eye-catching online store with ease, attract and convert more customers than ever before.
        </p>
        <a
          href="#start-free"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
        >
          Get Started
        </a>
      </motion.div>

      <div className="absolute top-0 left-0 w-full flex justify-between items-center p-4 text-lg">
        <div className="flex space-x-6 items-center">
          <button className="font-bold">Primemart</button>
          <a href="#features" className="text-black hover:text-blue-700">
            Features
          </a>
          <a href="#about-us" className="text-black hover:text-blue-700">
            About Us
          </a>
          <a href="#pricing" className="text-black hover:text-blue-700">
            Pricing
          </a>
          <a href="#contact-us" className="text-black hover:text-blue-700">
            Contact Us
          </a>
          <a href="#resources" className="text-black hover:text-blue-700">
            Resources
          </a>
        </div>

        <div className="flex space-x-6 items-center">
          <a href="#signin" className="text-black hover:text-blue-700">
            Sign In
          </a>
          <a
            href="#start-free"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 shadow-lg"
          >
            Start Free
          </a>
        </div>
      </div>
    </div>
  );
};
