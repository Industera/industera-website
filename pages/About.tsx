
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="animate-in slide-in-from-bottom-4 duration-700">
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-indigo-600 font-semibold mb-2">Our Story</h2>
              <h1 className="text-4xl font-bold text-slate-900 mb-8 sm:text-5xl">Built on Trust, <br />Driven by Results.</h1>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Founded in 2010, NexusCore began with a simple mission: to bridge the gap between visionary strategy and technical execution. Today, we serve over 200 Fortune 500 companies across 6 continents.
              </p>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Our approach combines deep domain expertise with a commitment to sustainable innovation. We don't just solve today's problems; we anticipate tomorrow's challenges.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-bold text-slate-900 mb-1">15+</div>
                  <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-slate-900 mb-1">500+</div>
                  <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Expert Consultants</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl rotate-2">
                <img src="https://picsum.photos/seed/about1/1000/1200" alt="Office Culture" className="w-full aspect-[4/5] object-cover" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-indigo-600 p-8 rounded-2xl shadow-xl -rotate-2 hidden sm:block">
                <p className="text-white font-medium italic">"At NexusCore, we believe the best way to predict the future is to create it together."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-16">The Minds Behind NexusCore</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { name: 'Dr. Sarah Chen', role: 'Chief Executive Officer', img: 'https://picsum.photos/seed/sarah/400/500' },
              { name: 'Marcus Sterling', role: 'Head of Strategy', img: 'https://picsum.photos/seed/marcus/400/500' },
              { name: 'Elena Rodriguez', role: 'CTO', img: 'https://picsum.photos/seed/elena/400/500' }
            ].map((leader) => (
              <div key={leader.name} className="group">
                <div className="mb-6 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                  <img src={leader.img} alt={leader.name} className="w-full aspect-[3/4] object-cover transition-transform group-hover:scale-110" />
                </div>
                <h4 className="text-xl font-bold text-slate-900">{leader.name}</h4>
                <p className="text-indigo-600 font-medium">{leader.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
