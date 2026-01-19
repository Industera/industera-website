
import React, { useState } from 'react';
import { generateServiceRecommendation } from '../services/geminiService';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', query: '' });
  const [aiRecommendation, setAiRecommendation] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleAiRecommend = async () => {
    if (!formData.query) return;
    setIsGenerating(true);
    const recommendation = await generateServiceRecommendation(formData.query);
    setAiRecommendation(recommendation);
    setIsGenerating(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Real-world: API call here
  };

  return (
    <div className="animate-in fade-in duration-700 py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 mb-6">Let's start a conversation.</h1>
            <p className="text-slate-600 text-lg mb-12">
              Our experts are ready to help you solve your most complex challenges. Reach out for a consultation.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Global HQ</h4>
                  <p className="text-slate-500">101 Innovation Blvd, Suite 200<br />San Francisco, CA 94105</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Direct Line</h4>
                  <p className="text-slate-500">+1 (555) 000-NEXUS</p>
                </div>
              </div>
            </div>

            {/* AI Recommendation Feature */}
            <div className="mt-16 p-8 bg-slate-50 rounded-3xl border border-slate-100">
              <div className="flex items-center gap-3 mb-4">
                <i className="fa-solid fa-wand-magic-sparkles text-indigo-600"></i>
                <h3 className="font-bold text-slate-900">AI Service Recommendation</h3>
              </div>
              <p className="text-sm text-slate-500 mb-6">Describe your business challenge and let our AI suggest a starting point.</p>
              <textarea 
                className="w-full bg-white border border-slate-200 rounded-xl p-4 text-sm focus:ring-2 focus:ring-indigo-500 outline-none mb-4"
                placeholder="e.g. We are looking to migrate our legacy retail database to the cloud..."
                rows={3}
                value={formData.query}
                onChange={(e) => setFormData({...formData, query: e.target.value})}
              />
              <button 
                onClick={handleAiRecommend}
                disabled={isGenerating || !formData.query}
                className="w-full py-3 bg-indigo-600 text-white rounded-xl font-bold disabled:opacity-50 hover:bg-indigo-700 transition-colors"
              >
                {isGenerating ? 'Analyzing...' : 'Get Suggestion'}
              </button>

              {aiRecommendation && (
                <div className="mt-6 p-4 bg-indigo-50 rounded-xl border border-indigo-100 text-indigo-900 text-sm animate-in slide-in-from-top-2">
                  <p className="font-semibold mb-1">Our AI Suggestion:</p>
                  {aiRecommendation}
                </div>
              )}
            </div>
          </div>

          <div className="bg-slate-900 rounded-3xl p-10 shadow-2xl">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center text-white py-20 animate-in zoom-in duration-500">
                <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mb-6">
                  <i className="fa-solid fa-check text-4xl"></i>
                </div>
                <h2 className="text-3xl font-bold mb-4">Message Received!</h2>
                <p className="text-slate-400">Our team will get back to you within 24 business hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-slate-400 text-sm font-medium mb-2">Full Name</label>
                  <input 
                    required
                    type="text" 
                    className="w-full bg-slate-800 border-none rounded-xl p-4 text-white focus:ring-2 focus:ring-indigo-500 outline-none"
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-slate-400 text-sm font-medium mb-2">Work Email</label>
                  <input 
                    required
                    type="email" 
                    className="w-full bg-slate-800 border-none rounded-xl p-4 text-white focus:ring-2 focus:ring-indigo-500 outline-none"
                    placeholder="jane@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-slate-400 text-sm font-medium mb-2">How can we help?</label>
                  <textarea 
                    required
                    rows={4}
                    className="w-full bg-slate-800 border-none rounded-xl p-4 text-white focus:ring-2 focus:ring-indigo-500 outline-none"
                    placeholder="Tell us about your project..."
                    value={formData.query}
                    onChange={(e) => setFormData({...formData, query: e.target.value})}
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full py-4 bg-indigo-500 text-white rounded-xl font-bold hover:bg-indigo-400 transition-all text-lg"
                >
                  Send Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
