
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, PRODUCTS } from '../constants';
import { PageRoute } from '../types';

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-24 sm:py-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10 mb-6">
              Empowering Global Enterprises
            </span>
            <h1 className="text-5xl font-bold tracking-tight text-slate-900 sm:text-7xl mb-8">
              Driving Innovation <br /> 
              <span className="text-indigo-600">Across the Globe.</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-600 mb-10">
              NexusCore provides the strategic consulting and technological foundations required for modern enterprises to thrive in an era of rapid disruption.
            </p>
            <div className="flex items-center justify-center gap-x-6">
              <Link
                to={PageRoute.SERVICES}
                className="rounded-full bg-indigo-600 px-8 py-4 text-sm font-semibold text-white shadow-xl hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all transform hover:scale-105"
              >
                Explore Services
              </Link>
              <Link to={PageRoute.ABOUT} className="text-sm font-semibold leading-6 text-slate-900 group">
                Learn more about us <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Services Overview */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-2 group">
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <i className={`${service.icon} text-xl`}></i>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Product Teaser */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-indigo-900 rounded-3xl overflow-hidden relative">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 lg:p-20 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-white mb-6">Revolutionary Insights with Nexus Analytics</h2>
                <p className="text-indigo-100 mb-10 text-lg">
                  Harness the power of AI to predict market trends before they happen. Our latest platform update brings real-time causal analysis to your fingertips.
                </p>
                <div className="flex">
                  <Link to={PageRoute.PRODUCTS} className="bg-white text-indigo-900 px-6 py-3 rounded-full font-bold hover:bg-indigo-50 transition-colors">
                    View Products
                  </Link>
                </div>
              </div>
              <div className="h-64 lg:h-auto bg-slate-200">
                <img src={PRODUCTS[0].image} alt="Dashboard" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
