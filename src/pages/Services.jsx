// src/pages/Services.jsx
import { Wrench, AlertCircle, Home, Battery, Truck, BarChart3, ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SectionTitle from '../components/SectionTitle';
import { services, serviceCategories } from '../data/services';
import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const iconMap = { Wrench, AlertCircle, Home, Battery, Truck, BarChart3, Building2: Home, CreditCard: Battery, LineChart: BarChart3 };

function ServiceCard({ svc, index }) {
  const [ref, isVisible] = useScrollAnimation();
  const iconKey = svc.icon;
  const Icon = iconMap[iconKey] || Wrench;
  return (
    <div
      ref={ref}
      className="glass-card p-7"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: `all 0.5s ease ${index * 80}ms`
      }}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
        style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)' }}
      >
        <Icon size={22} style={{ color: 'var(--color-primary)' }} />
      </div>
      <span className="badge badge-primary text-xs mb-3">{svc.category}</span>
      <h3 className="font-bold text-lg mb-2" style={{ color: 'var(--color-text-primary)' }}>
        {svc.title}
      </h3>
      <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text-secondary)' }}>
        {svc.description}
      </p>
      <ul className="space-y-2 mb-5">
        {svc.features.slice(0, 3).map(f => (
          <li key={f} className="flex items-center gap-2 text-xs" style={{ color: 'var(--color-text-muted)' }}>
            <div
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: 'var(--color-primary)' }}
            />
            {f}
          </li>
        ))}
      </ul>
      <Link
        to="/contact"
        className="text-sm font-semibold flex items-center gap-1"
        style={{ color: 'var(--color-primary)' }}
      >
        Book Service <ArrowRight size={13} />
      </Link>
    </div>
  );
}

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('All');
  const filtered = activeCategory === 'All' ? services : services.filter(s => s.category === activeCategory);

  return (
    <>
      <title>EV Services — Envert</title>
      <PageHero
        badge="EV Services"
        title="Full-Spectrum EV"
        highlight="Support"
        subtitle="Envert provides comprehensive after-sales and field services to keep your EVs running efficiently — 24/7, across India."
        breadcrumbs={[{ label: 'EV Services' }]}
      />
      <section className="py-24" style={{ background: 'var(--color-bg)' }}>
        <div className="section-container">
          {/* Category pills */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {serviceCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200"
                style={{
                  background: activeCategory === cat ? 'var(--gradient-primary)' : 'var(--color-surface)',
                  color: activeCategory === cat ? '#fff' : 'var(--color-text-secondary)',
                  border: activeCategory === cat ? 'none' : '1px solid var(--color-border)',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((svc, i) => (
              <ServiceCard key={svc.id} svc={svc} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* 24/7 Banner */}
      <section className="py-16" style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="section-container text-center">
          <div className="glass-card p-10 max-w-2xl mx-auto">
            <Clock size={40} className="mx-auto mb-4" style={{ color: 'var(--color-primary)' }} />
            <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>
              24/7 Emergency Roadside Assistance
            </h3>
            <p className="mb-6" style={{ color: 'var(--color-text-secondary)' }}>
              Stranded? Call our EV emergency helpline. We'll reach you within 60 minutes in 62+ cities.
            </p>
            <a href="tel:+918000000000" className="btn-primary py-3.5 px-10 text-lg">
              📞 +91 80000 00000
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
