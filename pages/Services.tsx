
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-6 sm:text-5xl">Our Capabilities</h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Comprehensive solutions tailored to your unique organizational needs. We combine strategy, technology, and creativity.
          </p>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {SERVICES.map((service, idx) => (
              <div key={service.id} className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-xl transition-all border border-slate-100">
                <div className="flex items-start gap-8">
                  <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex-shrink-0 flex items-center justify-center text-indigo-600">
                    <i className={`${service.icon} text-2xl`}></i>
                  </div>
                  <div>
                    <span className="text-indigo-600 font-bold text-xs uppercase tracking-widest mb-2 block">{service.category}</span>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {service.description} Our team of experts utilizes state-of-the-art methodologies to ensure maximum ROI and operational efficiency.
                    </p>
                    <ul className="space-y-3 mb-8">
                      {['Custom Frameworks', 'Stakeholder Alignment', 'KPI Tracking'].map(item => (
                        <li key={item} className="flex items-center text-sm text-slate-500">
                          <i className="fa-solid fa-circle-check text-indigo-500 mr-2"></i>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <button className="text-indigo-600 font-semibold flex items-center group">
                      Deep Dive into {service.title}
                      <i className="fa-solid fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
