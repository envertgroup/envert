// src/components/Footer.jsx
import { Link } from 'react-router-dom';
import { Zap, Mail, Phone, MapPin } from 'lucide-react';

// ── Social Icons ─────────────────────────────────────────────────────────────
const TwitterIcon  = ({ size }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>;
const LinkedinIcon = ({ size }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>;
const InstagramIcon= ({ size }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>;
const YoutubeIcon  = ({ size }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>;

const footerLinks = {
  Products: [
    { label: 'Electric Scooters', href: '/products?cat=2-Wheeler' },
    { label: 'Electric Autos', href: '/products?cat=3-Wheeler' },
    { label: 'Electric Bicycles', href: '/products?cat=Bicycle' },
  ],
  Solutions: [
    { label: 'Charging Infrastructure', href: '/charging' },
    { label: 'Battery Solutions', href: '/battery' },
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
    { label: 'About EnVERT', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Press', href: '/press' },
    { label: 'Privacy Policy', href: '/privacy' },
  ],
};

const socials = [
  { icon: TwitterIcon,   href: '#', label: 'Twitter' },
  { icon: LinkedinIcon,  href: '#', label: 'LinkedIn' },
  { icon: InstagramIcon, href: '#', label: 'Instagram' },
  { icon: YoutubeIcon,   href: '#', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer
      className="relative w-full"
      style={{
        background: 'var(--color-footer-bg)',
        borderTop: '1px solid var(--color-border)',
        paddingTop: '64px',
      }}
    >
      {/* subtle background orbs — clipped to their own container so they don't affect footer width */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div
          style={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(34,197,94,0.04) 0%, transparent 70%)', top: -100, left: -100 }}
        />
        <div
          style={{ position: 'absolute', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(6,182,212,0.04) 0%, transparent 70%)', bottom: -80, right: -80 }}
        />
      </div>

      {/* ── MAIN GRID ─────────────────────────────────────────────────────── */}
      <div className="section-container pb-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Brand Column — 4/12 */}
          <div className="lg:col-span-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 mb-5">
              <img
                src="/assets/logo/logo.png"
                alt="EnVERT"
                className="h-9 w-auto"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
            </Link>

            {/* Tagline */}
            <p className="text-sm leading-relaxed mb-7" style={{ color: 'var(--color-text-muted)', maxWidth: '320px' }}>
              India's next-generation EV solutions company — powering the electric future
              with sustainable mobility for individuals, fleets, and cities.
            </p>

            {/* Contact Details */}
            <div className="space-y-3 mb-7">
              <a
                href="tel:+917003942199"
                className="flex items-center gap-3 text-sm group"
                style={{ color: 'var(--color-text-muted)' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--color-primary)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text-muted)'}
              >
                <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.2)' }}>
                  <Phone size={13} style={{ color: '#22c55e' }} />
                </div>
                +91 70039 42199
              </a>
              <a
                href="mailto:envertev@gmail.com"
                className="flex items-center gap-3 text-sm"
                style={{ color: 'var(--color-text-muted)' }}
                onMouseEnter={e => e.currentTarget.style.color = '#06b6d4'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text-muted)'}
              >
                <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(6,182,212,0.12)', border: '1px solid rgba(6,182,212,0.2)' }}>
                  <Mail size={13} style={{ color: '#06b6d4' }} />
                </div>
                envertev@gmail.com
              </a>
              <a
                href="https://maps.google.com/?q=Aurora+Waterfront+GN+34/1+Sector+V+Salt+Lake+Kolkata+700091"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-sm"
                style={{ color: 'var(--color-text-muted)' }}
                onMouseEnter={e => e.currentTarget.style.color = '#f59e0b'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text-muted)'}
              >
                <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.2)' }}>
                  <MapPin size={13} style={{ color: '#f59e0b' }} />
                </div>
                <span className="leading-relaxed">
                  Unit 1414B, Aurora Waterfront,<br />GN Block GN 34/1, Sector V,<br />Saltlake, Kolkata – 700091
                </span>
              </a>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200"
                  style={{
                    color: 'var(--color-text-muted)',
                    background: 'var(--color-surface)',
                    border: '1px solid var(--color-border)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#22c55e';
                    e.currentTarget.style.borderColor = 'rgba(34,197,94,0.4)';
                    e.currentTarget.style.background = 'rgba(34,197,94,0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'var(--color-text-muted)';
                    e.currentTarget.style.borderColor = 'var(--color-border)';
                    e.currentTarget.style.background = 'var(--color-surface)';
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns — 8/12 */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4
                  className="text-xs font-bold uppercase tracking-widest mb-5"
                  style={{ color: 'var(--color-primary)', letterSpacing: '0.1em' }}
                >
                  {title}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        to={link.href}
                        className="text-sm transition-colors duration-200"
                        style={{ color: 'var(--color-text-muted)' }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--color-text-primary)'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--color-text-muted)'; }}
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
      </div>

      {/* ── DIVIDER ───────────────────────────────────────────────────────── */}
      <div className="section-container relative z-10">
        <div
          className="h-px w-full"
          style={{ background: 'linear-gradient(90deg, transparent, var(--color-border), transparent)' }}
        />
      </div>

      {/* ── BOTTOM BAR ────────────────────────────────────────────────────── */}
      <div className="section-container py-6 relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
            © {new Date().getFullYear()} <span style={{ color: 'var(--color-text-secondary)' }}>EnVERT Technologies Pvt. Ltd.</span> All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div
              className="w-5 h-5 rounded-md flex items-center justify-center"
              style={{ background: 'rgba(34,197,94,0.15)' }}
            >
              <Zap size={11} style={{ color: '#22c55e' }} />
            </div>
            <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
              Powered by clean energy — driving a greener tomorrow.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
