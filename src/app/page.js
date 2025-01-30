"use client";

import Image from 'next/image';
import { ArrowRight, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const products = [
    {
      title: "API Access",
      features: [
        "✓ Versatile Access - Generate API keys tailored to various development needs.",
        "✓ Effortless Integration - Write transactions and retrieve blockchain data.",
        "✓ Real-Time Insights - Monitor and analyze transaction data."
      ]
    },
    {
      title: "NFT Studio",
      features: [
        "✓ Customizable and Dynamic - Integrate NFTs with tailored business logic.",
        "✓ Cost-Efficient - Reduce minting costs by up to 8x.",
        "✓ User-Friendly - Easy-to-use NFT management tools."
      ]
    },
    {
      title: "Identity Solutions",
      features: [
        "✓ Seamless Sign-In - Log in with familiar Web2 credentials.",
        "✓ Secure & Private - Zero-knowledge technology.",
        "✓ Full Control - Customize identity solutions for your app."
      ]
    }
  ];

  return (
    <div className="bg-black text-white font-sans min-h-screen">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <span className="text-xl font-bold tracking-tight">[ Kadeshchain ]</span>
              <span className="text-xs bg-gradient-to-r from-green-500 to-blue-500 px-2 py-1 rounded-full font-medium">BETA</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#products" className="text-sm hover:text-green-400 transition-colors duration-300">Products</a>
              <a href="#about" className="text-sm hover:text-green-400 transition-colors duration-300">About</a>
              <a href="#use-cases" className="text-sm hover:text-green-400 transition-colors duration-300">Use Cases</a>
              <button className="bg-gradient-to-r from-green-500 to-blue-500 px-6 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-all duration-300 transform hover:scale-105">
                SIGN UP / LOG IN
              </button>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 rounded-md hover:bg-gray-800 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-black/95 backdrop-blur-sm`}>
          <div className="px-4 py-3 space-y-3">
            <a href="#products" className="block px-3 py-2 text-base hover:bg-gray-800 rounded-md transition-colors" onClick={() => setIsMenuOpen(false)}>Products</a>
            <a href="#about" className="block px-3 py-2 text-base hover:bg-gray-800 rounded-md transition-colors" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#use-cases" className="block px-3 py-2 text-base hover:bg-gray-800 rounded-md transition-colors" onClick={() => setIsMenuOpen(false)}>Use Cases</a>
            <button className="w-full mt-4 bg-gradient-to-r from-green-500 to-blue-500 px-6 py-2.5 rounded-full text-sm font-medium transition-transform hover:scale-105">
              SIGN UP / LOG IN
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-500/10 via-blue-500/5 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400 animate-fade-in">
            The Essential Toolkit for Every Kadeshchain Developer
          </h1>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg sm:text-xl leading-relaxed">
            Kadeshchain Build offers a robust, easy-to-use suite of tools for developers to create, test, and launch dApps.
            Generate API keys in seconds, launch NFT collections with a single click, and streamline user onboarding.
          </p>
          <button className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-blue-500 px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105 group">
            START BUILDING
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl font-bold uppercase text-gray-200">Products</h2>
          <ArrowRight className="w-6 h-6 text-green-500" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="group relative bg-gradient-to-b from-gray-900 to-black border border-gray-800 p-8 rounded-2xl hover:border-green-500/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <h3 className="text-xl font-semibold mb-6">{product.title}</h3>
              <div className="w-16 h-16 mx-auto mb-8">
                <Image 
                  src={`https://source.unsplash.com/random/200x200?blockchain&${index}`} 
                  alt={product.title} 
                  width={64} 
                  height={64} 
                  className="rounded-lg"
                />
              </div>
              <ul className="space-y-4 text-gray-300 text-sm mb-8">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="#" className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors group-hover:translate-x-1 duration-300">
                Learn more
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl font-bold uppercase text-gray-200">About Kadeshchain</h2>
          <ArrowRight className="w-6 h-6 text-green-500" />
        </div>
        <div className="space-y-12">
          {[
            {
              title: "Industry Leading Performance",
              description: "With a peak of 30,000 transactions per second paired with 99.99% uptime, Kadeshchain is the fastest and most reliable network."
            },
            {
              title: "Secure by Default",
              description: "The Move programming language is simple by design, allowing for easy decompilation, runtime verification, and code inspection."
            },
            {
              title: "Lowest Fees on any Chain",
              description: "Gas fees on Kadeshchain are up to 100x lower than other Layer-1 chains—so low, you won't mind covering them."
            }
          ].map((item, index) => (
            <div key={index} className="group bg-gradient-to-r from-gray-900 to-black p-8 rounded-2xl border border-gray-800 hover:border-green-500/50 transition-all duration-300">
              <div className="md:grid md:grid-cols-2 md:gap-12 items-center">
                <h3 className="text-2xl font-semibold mb-4 md:mb-0 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="flex items-center gap-4 mb-12 justify-center">
          <h2 className="text-2xl font-bold uppercase text-gray-200">Use Cases</h2>
          <ArrowRight className="w-6 h-6 text-green-500" />
        </div>

        {/* Gaming Use Case */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-6">Level Up Your Games</h3>
          <p className="text-gray-300 text-lg mb-12 max-w-3xl mx-auto">
            Transform your games into thriving player-driven ecosystems that boost engagement and monetization.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "NFT Studio",
                description: "Enable dynamic, evolving NFTs that reflect players' in-game achievements."
              },
              {
                title: "Identity Solutions",
                description: "Provide gamers with seamless Web2 social login experiences across platforms."
              },
              {
                title: "API Access",
                description: "Build and scale games without the complexities of blockchain management."
              }
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
                <h4 className="text-xl font-semibold mb-4">{item.title}</h4>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Loyalty Program Use Case */}
        <div>
          <h3 className="text-3xl font-bold mb-6">Boost Loyalty Programs</h3>
          <p className="text-gray-300 text-lg mb-12 max-w-3xl mx-auto">
            Create dynamic and secure loyalty solutions that drive customer retention and satisfaction.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "NFT Studio",
                description: "Transform traditional loyalty rewards with customizable NFTs that adapt to customer behavior."
              },
              {
                title: "Identity Solutions",
                description: "Onboard users seamlessly with familiar Web2 logins and no abstract concepts."
              },
              {
                title: "API Access",
                description: "Power your loyalty program with scalable infrastructure and API management."
              }
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300">
                <h4 className="text-xl font-semibold mb-4">{item.title}</h4>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-400 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-xl font-semibold">Kadeshchain Labs</div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Content Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}