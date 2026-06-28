// src/pages/Contact.jsx
import { Mail, Phone, MapPin, ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SEO from '../components/SEO';

// ─── Contact Info Cards ────────────────────────────────────────────────────────
function ContactCard({ info, delay }) {
  const [ref, isVisible] = useScrollAnimation(0.1);
  const Icon = info.icon;
  return (
    <a
      href={info.href}
      target={info.target}
      rel={info.rel}
      ref={ref}
      className="group relative overflow-hidden rounded-2xl p-7 block transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
      style={{
        background: 'var(--gradient-card)',
        border: '1px solid var(--color-border)',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms, border-color 0.3s, box-shadow 0.3s`,
        boxShadow: '0 4px 24px rgba(0,0,0,0.2)',
      }}
      onMouseEnter={e => e.currentTarget.style.borderColor = `${info.color}50`}
      onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--color-border)'}
    >
      {/* hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
        style={{ background: `radial-gradient(ellipse at 30% 30%, ${info.color}18 0%, transparent 70%)` }}
      />
      {/* top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
        style={{ background: `linear-gradient(90deg, ${info.color}, transparent)` }}
      />

      <div
        className="w-13 h-13 rounded-xl flex items-center justify-center mb-5 relative z-10 transition-transform duration-300 group-hover:scale-110"
        style={{
          width: 52, height: 52,
          background: `${info.color}18`,
          border: `1px solid ${info.color}30`,
        }}
      >
        <Icon size={22} style={{ color: info.color }} />
      </div>

      <h3
        className="font-bold text-lg mb-3 relative z-10 flex items-center gap-1.5"
        style={{ color: 'var(--color-text-primary)' }}
      >
        {info.title}
      </h3>
      <div className="space-y-1 relative z-10">
        {info.lines.map((line) => (
          <p
            key={line}
            className="text-sm leading-relaxed transition-colors duration-200 group-hover:text-white"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            {line}
          </p>
        ))}
      </div>
    </a>
  );
}

const contactCards = [
  {
    icon: Phone,
    title: 'Call Us',
    lines: ['+91 70039 42199'],
    color: '#22c55e',
    href: 'tel:+917003942199',
  },
  {
    icon: Mail,
    title: 'Email Us',
    lines: ['envertev@gmail.com'],
    color: '#06b6d4',
    href: 'mailto:envertev@gmail.com',
  },
  {
    icon: MapPin,
    title: 'Head Office',
    lines: [
      'Unit 1414B, 14th Floor,',
      'Aurora Waterfront, GN Block GN 34/1,',
      'Sector V, Saltlake, Kolkata – 700091',
    ],
    color: '#f59e0b',
    href: 'https://maps.google.com/?q=Aurora+Waterfront+GN+34/1+Sector+V+Salt+Lake+Kolkata+700091',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
];

export default function Contact() {
  const [formRef, formVisible] = useScrollAnimation(0.05);
  const [mapRef, mapVisible] = useScrollAnimation(0.05);

  return (
    <>
      <SEO 
        title="Contact Us — EnVERT" 
        description="Contact EnVERT Technologies for vehicle purchase inquiries, custom charging depot installations, battery pack contract manufacturing, solar integrations, and partnerships."
        keywords="contact EnVERT, EV customer service, Kolkata EV manufacturer, EV partnerships, EnVERT phone"
      />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        className="relative pt-28 pb-20 overflow-hidden"
        style={{ background: 'var(--gradient-hero)', minHeight: '52vh' }}
      >
        <div className="orb orb-cyan" style={{ width: 600, height: 600, top: -250, right: -100, opacity: 0.3 }} />
        <div className="orb orb-green" style={{ width: 400, height: 400, bottom: -150, left: -80, opacity: 0.2 }} />
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

        <div className="section-container relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 mb-10 text-sm" style={{ color: 'var(--color-text-muted)' }}>
            <Link
              to="/"
              style={{ color: 'var(--color-text-muted)', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--color-primary)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text-muted)'}
            >
              Home
            </Link>
            <span>/</span>
            <span style={{ color: 'var(--color-primary)' }}>Contact</span>
          </nav>

          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="badge badge-primary">Get in Touch</span>
            </div>
            <h1
              className="text-5xl md:text-6xl font-black leading-tight mb-6"
              style={{ color: 'var(--color-text-primary)', letterSpacing: '-0.02em' }}
            >
              Let's Build Your{' '}
              <span className="gradient-text">EV Future</span>
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--color-text-secondary)', maxWidth: '540px' }}>
              Talk to our experts about vehicles, charging infrastructure, fleet electrification, or any EV solution. We respond within 24 hours.
            </p>
          </div>
        </div>

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent, var(--color-bg))' }}
        />
      </section>

      {/* ── CONTACT CARDS ────────────────────────────────────────────────── */}
      <section className="pt-10 pb-0" style={{ background: 'var(--color-bg)' }}>
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {contactCards.map((card, i) => (
              <ContactCard key={card.title} info={card} delay={i * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FORM + MAP ───────────────────────────────────────────────────── */}
      <section className="py-20" style={{ background: 'var(--color-bg)' }}>
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-stretch">

            {/* Form — 3/5 width */}
            <div
              ref={formRef}
              className="lg:col-span-3"
              style={{
                opacity: formVisible ? 1 : 0,
                transform: formVisible ? 'translateX(0)' : 'translateX(-30px)',
                transition: 'opacity 0.65s ease, transform 0.65s ease',
              }}
            >
              {/* Section label */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.25)' }}
                >
                  <Zap size={14} style={{ color: 'var(--color-primary)' }} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold" style={{ color: 'var(--color-text-primary)' }}>
                    Send Us a <span className="gradient-text">Message</span>
                  </h2>
                  <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>
                    Our team will get back to you within one business day.
                  </p>
                </div>
              </div>
              <ContactForm />
            </div>

            {/* Map — 2/5 width */}
            <div
              ref={mapRef}
              className="lg:col-span-2 flex flex-col gap-5"
              style={{
                opacity: mapVisible ? 1 : 0,
                transform: mapVisible ? 'translateX(0)' : 'translateX(30px)',
                transition: 'opacity 0.65s ease 0.1s, transform 0.65s ease 0.1s',
              }}
            >
              {/* Map embed */}
              <div
                className="rounded-2xl overflow-hidden relative flex-1"
                style={{
                  border: '1px solid var(--color-border)',
                  minHeight: '340px',
                  boxShadow: '0 8px 40px rgba(0,0,0,0.3)',
                }}
              >
                <iframe
                  title="EnVERT Head Office Location"
                  src="https://maps.google.com/maps?q=Aurora%20Waterfront%20GN%2034/1%20Sector%20V%20Salt%20Lake%20Kolkata%20700091&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Office summary card */}
              <div
                className="rounded-2xl p-6"
                style={{
                  background: 'var(--gradient-card)',
                  border: '1px solid var(--color-border)',
                }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center"
                    style={{ background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.25)' }}
                  >
                    <MapPin size={18} style={{ color: '#f59e0b' }} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1" style={{ color: 'var(--color-text-primary)' }}>
                      EnVERT Head Office
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
                      Unit 1414B, 14th Floor, Aurora Waterfront,<br />
                      GN Block GN 34/1, Sector V, Saltlake,<br />
                      Kolkata – 700091
                    </p>
                    <a
                      href="https://maps.google.com/?q=Aurora+Waterfront+GN+34/1+Sector+V+Salt+Lake+Kolkata+700091"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold mt-3"
                      style={{ color: 'var(--color-primary)' }}
                    >
                      Open in Google Maps <ArrowRight size={12} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
