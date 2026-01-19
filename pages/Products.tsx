
import React from 'react';
import { PRODUCTS } from '../constants';

const Products: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700 py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-20 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Enterprise Platforms</h1>
          <p className="text-slate-600 text-lg">Next-generation software built for scale.</p>
        </div>

        <div className="space-y-32">
          {PRODUCTS.map((product, idx) => (
            <div key={product.id} className={`flex flex-col lg:flex-row gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="flex-1">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                  <img src={product.image} alt={product.name} className="relative rounded-3xl shadow-xl w-full object-cover aspect-video" />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">{product.name}</h2>
                <p className="text-indigo-600 text-xl font-medium mb-6">{product.tagline}</p>
                <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                  Engineered with security and scalability at its core. Our platform integrates seamlessly with existing cloud infrastructure, providing unparalleled data visibility.
                </p>
                <div className="flex flex-wrap gap-4 mb-10">
                  {['Cloud Native', 'AI Powered', 'SOC2 Compliant'].map(feature => (
                    <span key={feature} className="bg-slate-100 px-4 py-2 rounded-lg text-slate-700 text-sm font-semibold">{feature}</span>
                  ))}
                </div>
                <button className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-800 transition-colors">
                  Request Demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
