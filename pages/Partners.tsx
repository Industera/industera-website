
import React from 'react';
import { PARTNERS, CERTIFICATIONS } from '../constants';

const Partners: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Ecosystem & Partners</h1>
            <p className="text-slate-600">Collaborating with industry leaders to deliver excellence.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {PARTNERS.map(partner => (
              <div key={partner.id} className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center hover:shadow-md transition-shadow">
                <div className="text-4xl text-slate-400 mb-4">
                  <i className={partner.logo}></i>
                </div>
                <span className="font-bold text-slate-900">{partner.name}</span>
                <span className="text-xs text-slate-400 uppercase tracking-widest mt-1">{partner.industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white" id="certifications">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Certifications & Standards</h2>
            <p className="text-slate-600">Committed to the highest levels of security and ethical practice.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CERTIFICATIONS.map(cert => (
              <div key={cert.id} className="flex items-center gap-6 p-8 rounded-2xl border border-slate-100 hover:border-indigo-200 transition-colors">
                <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 text-2xl">
                  <i className={cert.icon}></i>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900">{cert.name}</h4>
                  <p className="text-slate-500 text-sm mb-1">{cert.issuer}</p>
                  <p className="text-indigo-600 text-xs font-bold uppercase tracking-widest">Since {cert.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
