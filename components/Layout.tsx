
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PageRoute } from '../types';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: PageRoute.HOME },
    { name: 'About', path: PageRoute.ABOUT },
    { name: 'Services', path: PageRoute.SERVICES },
    { name: 'Products', path: PageRoute.PRODUCTS },
    { name: 'Partners', path: PageRoute.PARTNERS },
    { name: 'Contact', path: PageRoute.CONTACT },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-effect py-3 shadow-sm' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:rotate-12 transition-transform">
              N
            </div>
            <span className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-slate-900' : 'text-slate-900'}`}>
              NexusCore
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-indigo-600 ${location.pathname === link.path ? 'text-indigo-600' : 'text-slate-600'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to={PageRoute.CONTACT}
              className="bg-indigo-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-all shadow-md hover:shadow-indigo-200"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-slate-600 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute top-full left-0 right-0 shadow-xl p-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="block text-lg font-medium text-slate-700 px-4 py-2 hover:bg-slate-50 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

const Footer: React.FC = () => (
  <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-indigo-500 rounded flex items-center justify-center text-white font-bold">N</div>
            <span className="text-xl font-bold text-white">NexusCore</span>
          </div>
          <p className="text-sm leading-relaxed text-slate-400">
            Pioneering excellence in corporate strategy and digital transformation. Empowering the next generation of global leaders.
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-6">Platform</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to={PageRoute.SERVICES} className="hover:text-indigo-400">Services</Link></li>
            <li><Link to={PageRoute.PRODUCTS} className="hover:text-indigo-400">Products</Link></li>
            <li><Link to={PageRoute.PARTNERS} className="hover:text-indigo-400">Partners</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-6">Company</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to={PageRoute.ABOUT} className="hover:text-indigo-400">About Us</Link></li>
            <li><Link to={PageRoute.CERTIFICATIONS} className="hover:text-indigo-400">Certifications</Link></li>
            <li><a href="#" className="hover:text-indigo-400">Careers</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-6">Connect</h4>
          <div className="flex space-x-4 mb-6">
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-colors">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-colors">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-colors">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
          <div className="text-sm">
            <p>hello@nexuscore.com</p>
            <p>+1 (555) 000-Nexus</p>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
        <p>&copy; 2024 NexusCore Solutions Inc. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
          <a href="#" className="hover:text-white">Cookie Policy</a>
        </div>
      </div>
    </div>
  </footer>
);

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};
