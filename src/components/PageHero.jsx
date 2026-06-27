// src/components/PageHero.jsx
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function PageHero({ title, highlight, subtitle, badge, breadcrumbs = [], children }) {
  return (
    <section
      className="relative pt-32 pb-20 overflow-hidden"
      style={{ background: 'var(--gradient-hero)' }}
    >
      {/* Background orbs */}
      <div
        className="orb orb-green"
        style={{ width: 600, height: 600, top: -200, right: -100, opacity: 0.4 }}
      />
      <div
        className="orb orb-cyan"
        style={{ width: 400, height: 400, bottom: -100, left: -100, opacity: 0.3 }}
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 mb-8 flex-wrap" aria-label="Breadcrumb">
          <Link
            to="/"
            className="flex items-center gap-1 text-sm transition-colors duration-200"
            style={{ color: 'var(--color-text-muted)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-primary)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-muted)')}
          >
            <Home size={13} /> Home
          </Link>
          {breadcrumbs.map((crumb, i) => (
            <span key={i} className="flex items-center gap-2" style={{ color: 'var(--color-text-muted)' }}>
              <ChevronRight size={13} />
              {crumb.href ? (
                <Link
                  to={crumb.href}
                  className="text-sm transition-colors duration-200"
                  style={{ color: 'var(--color-text-muted)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-primary)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-muted)')}
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-sm" style={{ color: 'var(--color-primary)' }}>{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>

        <div className="max-w-4xl">
          {badge && (
            <div className="mb-5">
              <span className="badge badge-primary">{badge}</span>
            </div>
          )}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            style={{ color: 'var(--color-text-primary)' }}
          >
            {title}
            {highlight && (
              <>
                {' '}
                <span className="gradient-text">{highlight}</span>
              </>
            )}
          </h1>
          {subtitle && (
            <p
              className="text-lg md:text-xl max-w-2xl leading-relaxed"
              style={{ color: 'var(--color-text-secondary)' }}
            >
              {subtitle}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </section>
  );
}
