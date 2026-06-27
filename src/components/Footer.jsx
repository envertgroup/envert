// src/components/Footer.jsx
import { Link } from 'react-router-dom';
import { Zap, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const TwitterIcon = ({ size }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>;
const LinkedinIcon = ({ size }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>;
const InstagramIcon = ({ size }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>;
const YoutubeIcon = ({ size }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>;

const footerLinks = {
  Products: [
    { label: 'Electric Scooters', href: '/products?cat=2-Wheeler' },
    { label: 'Electric Autos', href: '/products?cat=3-Wheeler' },
    { label: 'Electric Cars', href: '/products?cat=Car' },
    { label: 'Electric Buses', href: '/products?cat=Bus' },
    { label: 'Electric Bicycles', href: '/products?cat=Bicycle' },
  ],
  Solutions: [
    { label: 'Charging Infrastructure', href: '/charging' },
    { label: 'Battery Business', href: '/battery' },
    { label: 'Solar + EV Integration', href: '/solar' },
    { label: 'Fleet Electrification', href: '/fleet' },
    { label: 'Consultancy', href: '/consultancy' },
  ],
  Technology: [
    { label: 'Software & Apps', href: '/software' },
    { label: 'Manufacturing', href: '/manufacturing' },
    { label: 'EV Services', href: '/services' },
  ],
  Company: [
    { label: 'About Envert', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Press', href: '/press' },
    { label: 'Privacy Policy', href: '/privacy' },
  ],
};

const socials = [
  { icon: TwitterIcon, href: '#', label: 'Twitter' },
  { icon: LinkedinIcon, href: '#', label: 'LinkedIn' },
  { icon: InstagramIcon, href: '#', label: 'Instagram' },
  { icon: YoutubeIcon, href: '#', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer style={{ background: 'var(--color-footer-bg)', borderTop: '1px solid var(--color-border)' }}>
      {/* Newsletter Banner */}
      <div style={{ borderBottom: '1px solid var(--color-border)' }}>
        <div className="section-container py-12">
          <div
            className="rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8"
            style={{ background: 'var(--gradient-card)', border: '1px solid var(--color-border)' }}
          >
            <div>
              <h3 className="text-2xl font-bold gradient-text mb-2">Stay Ahead of the EV Revolution</h3>
              <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                Get the latest updates on new vehicles, charging networks, and EV incentives.
              </p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-72 px-4 py-3 rounded-lg text-sm outline-none"
                style={{
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-text-primary)',
                }}
              />
              <button className="btn-primary flex-shrink-0">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-5">
              <img
                src="/assets/logo/logo.png"
                alt="Envert"
                className="h-8 w-auto"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </Link>
            <p className="text-sm leading-relaxed mb-6" style={{ color: '#6b7280' }}>
              India's premier EV trading and distribution company. Powering the electric future with sustainable mobility solutions for individuals, fleets, and cities.
            </p>
            <div className="space-y-3 mb-6">
              <a href="tel:+919876543210" className="flex items-center gap-2 text-sm" style={{ color: '#6b7280' }}>
                <Phone size={14} style={{ color: '#22c55e' }} /> +91 98765 43210
              </a>
              <a href="mailto:hello@envert.in" className="flex items-center gap-2 text-sm" style={{ color: '#6b7280' }}>
                <Mail size={14} style={{ color: '#22c55e' }} /> hello@envert.in
              </a>
              <div className="flex items-start gap-2 text-sm" style={{ color: '#6b7280' }}>
                <MapPin size={14} className="mt-0.5 flex-shrink-0" style={{ color: '#22c55e' }} />
                <span>Plot 14, EV Nagar, Electronic City, Bengaluru – 560100</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="p-2 rounded-lg transition-all duration-200"
                  style={{
                    color: '#6b7280',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#22c55e';
                    e.currentTarget.style.borderColor = 'rgba(34,197,94,0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#6b7280';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold mb-5" style={{ color: '#f9fafb' }}>{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm transition-colors duration-200"
                      style={{ color: '#6b7280' }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = '#22c55e'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = '#6b7280'; }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="section-container py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: '#4b5563' }}>
            © {new Date().getFullYear()} Envert Technologies Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <Zap size={12} style={{ color: '#22c55e' }} />
            <span className="text-xs" style={{ color: '#4b5563' }}>
              Powered by clean energy. Driving a greener tomorrow.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
