// src/components/Navbar.jsx
import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Zap, ChevronDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { label: 'Products', href: '/products' },
  {
    label: 'Solutions',
    href: '#',
    dropdown: [
      { label: 'Charging & Infrastructure', href: '/charging' },
      { label: 'Battery Business', href: '/battery' },
      { label: 'Solar + EV Integration', href: '/solar' },
      { label: 'Fleet Electrification', href: '/fleet' },
    ],
  },
  {
    label: 'Technology',
    href: '#',
    dropdown: [
      { label: 'Software & Telematics', href: '/software' },
      { label: 'Manufacturing', href: '/manufacturing' },
    ],
  },
  { label: 'Services', href: '/services' },
  { label: 'Consultancy', href: '/consultancy' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location]);

  const navStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    transition: 'all 0.3s ease',
    background: scrolled ? 'var(--color-navbar-bg)' : 'transparent',
    backdropFilter: scrolled ? 'blur(16px)' : 'none',
    borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
  };

  return (
    <nav style={navStyle}>
      <div className="section-container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <img
              src="/assets/logo/logo.png"
              alt="Envert"
              className="h-12 w-auto"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                    style={{
                      color: openDropdown === link.label ? 'var(--color-primary)' : 'var(--color-text-secondary)',
                    }}
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      style={{
                        transform: openDropdown === link.label ? 'rotate(180deg)' : 'rotate(0)',
                        transition: 'transform 0.2s ease',
                      }}
                    />
                  </button>
                  {openDropdown === link.label && (
                    <div
                      className="absolute top-full left-0 mt-1 w-56 rounded-xl py-2 z-50"
                      style={{
                        background: 'var(--color-surface)',
                        border: '1px solid var(--color-border)',
                        backdropFilter: 'blur(16px)',
                        boxShadow: 'var(--shadow-glass)',
                      }}
                    >
                      {link.dropdown.map((item) => (
                        <NavLink
                          key={item.href}
                          to={item.href}
                          className="block px-4 py-2.5 text-sm font-medium transition-colors duration-150"
                          style={({ isActive }) => ({
                            color: isActive ? 'var(--color-primary)' : 'var(--color-text-secondary)',
                            background: isActive ? 'var(--color-primary-glow)' : 'transparent',
                          })}
                        >
                          {item.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={link.href}
                  to={link.href}
                  className="px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                  style={({ isActive }) => ({
                    color: isActive ? 'var(--color-primary)' : 'var(--color-text-secondary)',
                    background: isActive ? 'var(--color-primary-glow)' : 'transparent',
                  })}
                >
                  {link.label}
                </NavLink>
              )
            )}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg transition-all duration-200"
              style={{
                color: 'var(--color-text-secondary)',
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
              }}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            {/* CTA */}
            <Link to="/contact" className="btn-primary hidden sm:inline-flex text-sm py-2 px-5">
              <Zap size={15} />
              Get Quote
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg"
              style={{ color: 'var(--color-text-primary)' }}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="lg:hidden"
          style={{
            background: 'var(--color-navbar-bg)',
            backdropFilter: 'blur(16px)',
            borderTop: '1px solid var(--color-border)',
          }}
        >
          <div className="section-container py-4 flex flex-col gap-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label}>
                  <button
                    onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      style={{
                        transform: openDropdown === link.label ? 'rotate(180deg)' : 'rotate(0)',
                        transition: 'transform 0.2s ease',
                      }}
                    />
                  </button>
                  {openDropdown === link.label && (
                    <div className="ml-4 flex flex-col gap-1">
                      {link.dropdown.map((item) => (
                        <NavLink
                          key={item.href}
                          to={item.href}
                          className="px-4 py-2.5 rounded-lg text-sm"
                          style={{ color: 'var(--color-text-muted)' }}
                        >
                          {item.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={link.href}
                  to={link.href}
                  className="px-4 py-3 rounded-lg text-sm font-medium"
                  style={({ isActive }) => ({
                    color: isActive ? 'var(--color-primary)' : 'var(--color-text-secondary)',
                    background: isActive ? 'var(--color-primary-glow)' : 'transparent',
                  })}
                >
                  {link.label}
                </NavLink>
              )
            )}
            <div className="pt-3 border-t" style={{ borderColor: 'var(--color-border)' }}>
              <Link to="/contact" className="btn-primary w-full justify-center">
                <Zap size={15} />
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
