
import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { PageRoute } from './types';

// Lazy load pages for performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Products = lazy(() => import('./pages/Products'));
const Partners = lazy(() => import('./pages/Partners'));
const Contact = lazy(() => import('./pages/Contact'));

const LoadingScreen = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<LoadingScreen />}>
          <Routes>
            <Route path={PageRoute.HOME} element={<Home />} />
            <Route path={PageRoute.ABOUT} element={<About />} />
            <Route path={PageRoute.SERVICES} element={<Services />} />
            <Route path={PageRoute.PRODUCTS} element={<Products />} />
            <Route path={PageRoute.PARTNERS} element={<Partners />} />
            <Route path={PageRoute.CERTIFICATIONS} element={<Partners />} />
            <Route path={PageRoute.CONTACT} element={<Contact />} />
            {/* Fallback to Home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
};

export default App;
