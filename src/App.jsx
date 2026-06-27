// src/App.jsx
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Charging from './pages/Charging';
import Battery from './pages/Battery';
import Solar from './pages/Solar';
import Fleet from './pages/Fleet';
import Software from './pages/Software';
import Services from './pages/Services';
import Manufacturing from './pages/Manufacturing';
import Consultancy from './pages/Consultancy';
import Contact from './pages/Contact';

// Admin Pages
import AdminLayout from './pages/admin/AdminLayout';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminProducts from './pages/admin/AdminProducts';

// Scroll to top on every route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

// 404 Page
function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center" style={{ background: 'var(--color-bg)' }}>
      <div className="text-center px-6">
        <p className="text-8xl font-black gradient-text mb-4">404</p>
        <h1 className="text-2xl font-bold mb-3" style={{ color: 'var(--color-text-primary)' }}>
          Page Not Found
        </h1>
        <p className="mb-8" style={{ color: 'var(--color-text-secondary)' }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a href="/" className="btn-primary">← Back to Home</a>
      </div>
    </div>
  );
}

// Main layout wrapper (Navbar + content + Footer)
function Layout({ children }) {
  const { pathname } = useLocation();
  const isAdmin = pathname.startsWith('/admin');

  if (isAdmin) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--color-bg)' }}>
        <main style={{ flex: 1 }}>
          {children}
        </main>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--color-bg)' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/charging" element={<Charging />} />
            <Route path="/battery" element={<Battery />} />
            <Route path="/solar" element={<Solar />} />
            <Route path="/fleet" element={<Fleet />} />
            <Route path="/software" element={<Software />} />
            <Route path="/services" element={<Services />} />
            <Route path="/manufacturing" element={<Manufacturing />} />
            <Route path="/consultancy" element={<Consultancy />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            
            {/* Admin Protected Routes */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
              <Route path="products" element={<AdminProducts />} />
              {/* Placeholders for future pages */}
              <Route path="services" element={<div className="p-8">Services Admin (WIP)</div>} />
              <Route path="testimonials" element={<div className="p-8">Testimonials Admin (WIP)</div>} />
              <Route path="stats" element={<div className="p-8">Stats Admin (WIP)</div>} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}
