// src/pages/admin/AdminLayout.jsx
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Package, Wrench, MessageSquare, BarChart2, LogOut, Settings } from 'lucide-react';
import { useState, useEffect } from 'react';

const sidebarLinks = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/admin' },
  { icon: Package, label: 'Products', path: '/admin/products' },
  { icon: Wrench, label: 'Services', path: '/admin/services' },
  { icon: MessageSquare, label: 'Testimonials', path: '/admin/testimonials' },
  { icon: BarChart2, label: 'Stats', path: '/admin/stats' },
];

export default function AdminLayout() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Fake auth check for visual phase
  useEffect(() => {
    const auth = localStorage.getItem('envert_admin_auth');
    if (auth !== 'true') {
      navigate('/admin/login');
    } else {
      setIsAuthenticated(true);
    }
  }, [navigate, pathname]);

  const handleLogout = () => {
    localStorage.removeItem('envert_admin_auth');
    navigate('/admin/login');
  };

  if (!isAuthenticated) return null;

  return (
    <div className="flex h-screen overflow-hidden" style={{ background: 'var(--color-bg-secondary)' }}>
      {/* Sidebar */}
      <aside className="w-64 flex-shrink-0 border-r" style={{ background: 'var(--color-bg)', borderRight: '1px solid var(--color-border)' }}>
        <div className="h-16 flex items-center px-6 border-b" style={{ borderBottom: '1px solid var(--color-border)' }}>
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <img
              src="/assets/logo/logo.png"
              alt="EnVERT"
              className="h-12 w-auto"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </Link>
        </div>

        <div className="p-4 space-y-1">
          {sidebarLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-medium"
                style={{
                  background: isActive ? 'var(--gradient-primary)' : 'transparent',
                  color: isActive ? '#fff' : 'var(--color-text-secondary)',
                }}
              >
                <Icon size={18} style={{ color: isActive ? '#fff' : 'var(--color-text-muted)' }} />
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="absolute bottom-0 w-64 p-4 border-t" style={{ borderTop: '1px solid var(--color-border)', background: 'var(--color-bg)' }}>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-medium hover:bg-red-500/10 text-red-500"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Topbar */}
        <header className="h-16 flex-shrink-0 px-8 flex items-center justify-between border-b" style={{ background: 'var(--color-bg)', borderBottom: '1px solid var(--color-border)' }}>
          <h1 className="font-bold text-lg" style={{ color: 'var(--color-text-primary)' }}>
            {sidebarLinks.find(l => l.path === pathname)?.label || 'Admin Panel'}
          </h1>
          <div className="flex items-center gap-4">
            <Link to="/" target="_blank" className="text-sm font-medium hover:underline" style={{ color: 'var(--color-primary)' }}>
              View Live Site ↗
            </Link>
            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-800 text-white font-bold text-sm">
              A
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
