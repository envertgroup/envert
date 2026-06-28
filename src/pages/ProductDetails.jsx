// src/pages/ProductDetails.jsx
import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import {
  ArrowLeft, Zap, Tag, BadgeCheck, Check, MapPin, Truck,
  MessageCircle, Phone, ChevronRight, Home, Star, Shield,
  Battery, Gauge, Clock, Weight, Users, Activity
} from 'lucide-react';
import { products } from '../data/products';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// ─── Helpers ──────────────────────────────────────────────────────────────────
function formatPrice(price) {
  if (price >= 100000) return `₹${(price / 100000).toFixed(2)} L`;
  return `₹${price.toLocaleString('en-IN')}`;
}

const ICON_MAP = {
  Range: { icon: Activity, color: 'var(--color-primary)', bg: 'rgba(34,197,94,0.12)' },
  Power: { icon: Zap, color: '#f59e0b', bg: 'rgba(245,158,11,0.12)' },
  Battery: { icon: Battery, color: 'var(--color-accent)', bg: 'rgba(6,182,212,0.12)' },
  'Charging Time': { icon: Clock, color: '#a78bfa', bg: 'rgba(167,139,250,0.12)' },
  'Top Speed': { icon: Gauge, color: '#f43f5e', bg: 'rgba(244,63,94,0.12)' },
  Weight: { icon: Weight, color: '#94a3b8', bg: 'rgba(148,163,184,0.12)' },
  Payload: { icon: Truck, color: '#fb923c', bg: 'rgba(251,146,60,0.12)' },
  Seating: { icon: Users, color: '#4ade80', bg: 'rgba(74,222,128,0.12)' },
  Acceleration: { icon: Activity, color: '#f43f5e', bg: 'rgba(244,63,94,0.12)' },
  Compatibility: { icon: Check, color: 'var(--color-primary)', bg: 'rgba(34,197,94,0.12)' },
  Connector: { icon: Zap, color: 'var(--color-accent)', bg: 'rgba(6,182,212,0.12)' },
  Certification: { icon: Shield, color: '#a78bfa', bg: 'rgba(167,139,250,0.12)' },
};

// ─── Animated Spec Card ────────────────────────────────────────────────────────
function SpecCard({ label, value, delay = 0 }) {
  const [ref, isVisible] = useScrollAnimation(0.1);
  const meta = ICON_MAP[label] || { icon: Tag, color: 'var(--color-primary)', bg: 'rgba(34,197,94,0.12)' };
  const Icon = meta.icon;

  return (
    <div
      ref={ref}
      className="group relative p-5 rounded-2xl overflow-hidden cursor-default"
      style={{
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`,
      }}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
        style={{ background: `radial-gradient(circle at 50% 0%, ${meta.bg} 0%, transparent 70%)` }}
      />
      <div className="relative z-10">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
          style={{ background: meta.bg }}
        >
          <Icon size={18} style={{ color: meta.color }} />
        </div>
        <p className="text-xs mb-1 uppercase tracking-widest font-medium" style={{ color: 'var(--color-text-muted)' }}>
          {label}
        </p>
        <p className="text-base font-bold" style={{ color: 'var(--color-text-primary)' }}>
          {value}
        </p>
      </div>
    </div>
  );
}

// ─── Related Products ──────────────────────────────────────────────────────────
function RelatedCard({ product }) {
  const [ref, isVisible] = useScrollAnimation(0.1);
  return (
    <Link
      to={`/products/${product.id}`}
      ref={ref}
      className="group glass-card overflow-hidden flex flex-col"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.5s ease, transform 0.5s ease',
        textDecoration: 'none',
      }}
    >
      <div className="relative overflow-hidden h-40">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-3 left-3">
          <span className="badge badge-primary text-xs">{product.category}</span>
        </div>
      </div>
      <div className="p-4">
        <p className="text-xs mb-1" style={{ color: 'var(--color-accent)' }}>{product.subcategory}</p>
        <h4 className="font-bold text-sm mb-2" style={{ color: 'var(--color-text-primary)' }}>{product.name}</h4>
        <p className="text-sm font-semibold gradient-text">{formatPrice(product.price)}</p>
      </div>
    </Link>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────
export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const [selectedColor, setSelectedColor] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4" style={{ background: 'var(--color-bg)' }}>
        <div className="orb orb-green" style={{ width: 500, height: 500, top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.2 }} />
        <p className="text-8xl font-black gradient-text mb-4 relative z-10">404</p>
        <h1 className="text-2xl font-bold mb-3 relative z-10" style={{ color: 'var(--color-text-primary)' }}>Product Not Found</h1>
        <p className="mb-8 relative z-10" style={{ color: 'var(--color-text-secondary)' }}>The vehicle you're looking for doesn't exist.</p>
        <Link to="/products" className="btn-primary relative z-10">Browse All Products</Link>
      </div>
    );
  }

  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);

  const specs = [
    { label: 'Range', value: product.range },
    { label: 'Power', value: product.power },
    { label: 'Battery', value: product.battery },
    { label: 'Charging Time', value: product.chargingTime },
    { label: 'Top Speed', value: product.topSpeed },
    { label: 'Weight', value: product.weight },
    { label: 'Payload', value: product.payload },
    { label: 'Seating', value: product.seating },
    { label: 'Acceleration', value: product.acceleration },
    { label: 'Compatibility', value: product.compatibility },
    { label: 'Connector', value: product.connector },
    { label: 'Certification', value: product.certification },
  ].filter(s => s.value);

  return (
    <div style={{ background: 'var(--color-bg)', minHeight: '100vh', overflowX: 'hidden' }}>
      <title>{product.name} — EnVERT</title>

      {/* ── HERO SECTION ──────────────────────────────────────────────────── */}
      <section
        className="relative pt-28 pb-0 overflow-hidden"
        style={{ background: 'var(--gradient-hero)', minHeight: '92vh' }}
      >
        {/* Orbs */}
        <div className="orb orb-green" style={{ width: 700, height: 700, top: -200, right: -150, opacity: 0.35 }} />
        <div className="orb orb-cyan" style={{ width: 500, height: 500, bottom: 0, left: -100, opacity: 0.25 }} />
        <div className="orb orb-purple" style={{ width: 350, height: 350, top: '30%', left: '40%', opacity: 0.15 }} />
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

        <div className="section-container relative z-10 h-full flex flex-col">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 mb-12 flex-wrap" aria-label="Breadcrumb">
            <Link
              to="/"
              className="flex items-center gap-1 text-sm transition-colors"
              style={{ color: 'var(--color-text-muted)' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--color-primary)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text-muted)'}
            >
              <Home size={13} /> Home
            </Link>
            <ChevronRight size={13} style={{ color: 'var(--color-text-muted)' }} />
            <Link
              to="/products"
              className="text-sm transition-colors"
              style={{ color: 'var(--color-text-muted)' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--color-primary)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text-muted)'}
            >
              Products
            </Link>
            <ChevronRight size={13} style={{ color: 'var(--color-text-muted)' }} />
            <span className="text-sm" style={{ color: 'var(--color-primary)' }}>{product.name}</span>
          </nav>

          {/* Main two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 flex-1 pb-16">

            {/* ── LEFT: Image ──────────────────────────────────────────── */}
            <div className="flex flex-col gap-5 order-2 lg:order-1">
              {/* Main image */}
              <div
                className="relative rounded-3xl overflow-hidden group"
                style={{
                  border: '1px solid var(--color-border)',
                  boxShadow: '0 24px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(34,197,94,0.1)',
                  background: 'var(--color-bg-secondary)',
                  aspectRatio: '4/3',
                }}
              >
                {/* Glow ring */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ boxShadow: 'inset 0 0 60px rgba(34,197,94,0.12)', borderRadius: '24px' }}
                />
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Out of stock */}
                {!product.inStock && (
                  <div className="absolute inset-0 flex items-center justify-center backdrop-blur-sm bg-black/50">
                    <span
                      className="text-xl font-bold px-8 py-4 rounded-2xl"
                      style={{ background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.4)', color: '#f87171' }}
                    >
                      Out of Stock
                    </span>
                  </div>
                )}

                {/* Category badge on image */}
                <div className="absolute top-5 left-5 flex gap-2">
                  <span className="badge badge-primary">{product.category}</span>
                  {product.featured && (
                    <span className="badge badge-accent">
                      <Star size={11} fill="currentColor" /> Featured
                    </span>
                  )}
                </div>
              </div>

              {/* Color picker */}
              {product.colors && product.colors.length > 0 && (
                <div
                  className="p-5 rounded-2xl"
                  style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
                >
                  <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--color-text-muted)' }}>
                    Available Variants
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color, i) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(i)}
                        className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200"
                        style={{
                          background: selectedColor === i ? 'var(--gradient-primary)' : 'var(--color-bg-secondary)',
                          color: selectedColor === i ? '#fff' : 'var(--color-text-secondary)',
                          border: selectedColor === i ? 'none' : '1px solid var(--color-border)',
                          boxShadow: selectedColor === i ? '0 4px 16px var(--color-primary-glow)' : 'none',
                        }}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* ── RIGHT: Details ────────────────────────────────────────── */}
            <div className="flex flex-col order-1 lg:order-2">
              {/* Sub-category pill */}
              <p
                className="text-sm font-semibold uppercase tracking-widest mb-3"
                style={{ color: 'var(--color-accent)' }}
              >
                {product.subcategory}
              </p>

              {/* Product Name */}
              <h1
                className="text-4xl md:text-5xl xl:text-6xl font-black leading-tight mb-6"
                style={{ color: 'var(--color-text-primary)', letterSpacing: '-0.02em' }}
              >
                {product.name.split(' ').slice(0, -1).join(' ')}{' '}
                <span className="gradient-text">{product.name.split(' ').slice(-1)}</span>
              </h1>

              {/* Description */}
              <p className="text-base md:text-lg leading-relaxed mb-8" style={{ color: 'var(--color-text-secondary)' }}>
                {product.description}
              </p>

              {/* Price block */}
              <div
                className="relative p-6 rounded-2xl mb-8 overflow-hidden"
                style={{ background: 'var(--gradient-card)', border: '1px solid var(--color-border)' }}
              >
                <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
                <div className="relative z-10 flex items-end justify-between flex-wrap gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-widest mb-1" style={{ color: 'var(--color-text-muted)' }}>
                      Starting from
                    </p>
                    <p
                      className="text-5xl font-black gradient-text leading-none"
                    >
                      {formatPrice(product.price)}
                    </p>
                    <p className="text-xs mt-2" style={{ color: 'var(--color-text-muted)' }}>
                      *Ex-showroom price. Taxes &amp; registration extra.
                    </p>
                  </div>
                  {product.inStock ? (
                    <span
                      className="badge"
                      style={{ background: 'rgba(34,197,94,0.12)', color: '#22c55e', border: '1px solid rgba(34,197,94,0.3)' }}
                    >
                      <Check size={12} /> In Stock
                    </span>
                  ) : (
                    <span
                      className="badge"
                      style={{ background: 'rgba(239,68,68,0.12)', color: '#f87171', border: '1px solid rgba(239,68,68,0.3)' }}
                    >
                      Out of Stock
                    </span>
                  )}
                </div>
              </div>

              {/* Quick highlights (top 3 specs inline) */}
              {specs.slice(0, 3).length > 0 && (
                <div className="grid grid-cols-3 gap-3 mb-8">
                  {specs.slice(0, 3).map((spec) => {
                    const meta = ICON_MAP[spec.label] || { icon: Zap, color: 'var(--color-primary)', bg: 'rgba(34,197,94,0.12)' };
                    const Icon = meta.icon;
                    return (
                      <div
                        key={spec.label}
                        className="flex flex-col items-center text-center p-4 rounded-2xl"
                        style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
                      >
                        <Icon size={20} style={{ color: meta.color }} className="mb-2" />
                        <p className="text-lg font-bold" style={{ color: 'var(--color-text-primary)' }}>{spec.value}</p>
                        <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>{spec.label}</p>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <Link
                  to={`/contact?subject=${encodeURIComponent('Enquiry for ' + product.name)}`}
                  className={`btn-primary flex-1 justify-center py-4 text-base ${!product.inStock ? 'opacity-40 pointer-events-none' : ''}`}
                >
                  <Phone size={18} />
                  {product.category === 'Accessory' ? 'Order Now' : 'Book a Test Drive'}
                </Link>
                <Link
                  to="/contact"
                  className="btn-secondary flex-1 justify-center py-4 text-base"
                >
                  <MessageCircle size={18} />
                  Get a Quote
                </Link>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-3">
                {['BIS Certified', 'Warranty Included', 'Pan-India Service'].map(item => (
                  <span
                    key={item}
                    className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full"
                    style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', color: 'var(--color-text-secondary)' }}
                  >
                    <Shield size={11} style={{ color: 'var(--color-primary)' }} />
                    {item}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Bottom wave fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent, var(--color-bg))' }}
        />
      </section>

      {/* ── SPECS SECTION ─────────────────────────────────────────────────── */}
      {specs.length > 0 && (
        <section className="py-20 relative" style={{ background: 'var(--color-bg)' }}>
          <div className="section-container">
            <div className="mb-12">
              <span className="badge badge-primary mb-4">Specifications</span>
              <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--color-text-primary)' }}>
                Under the{' '}
                <span className="gradient-text">Hood</span>
              </h2>
              <p className="mt-3 text-base max-w-xl" style={{ color: 'var(--color-text-secondary)' }}>
                Every number engineered for real-world performance on Indian roads.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {specs.map((spec, i) => (
                <SpecCard key={spec.label} label={spec.label} value={spec.value} delay={i * 50} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FEATURES SECTION ──────────────────────────────────────────────── */}
      {product.features && product.features.length > 0 && (
        <section className="py-20" style={{ background: 'var(--color-bg-secondary)' }}>
          <div className="section-container">
            <div className="mb-12">
              <span className="badge badge-accent mb-4">Features</span>
              <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--color-text-primary)' }}>
                Built to{' '}
                <span className="gradient-text">Impress</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
              {product.features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-5 rounded-2xl"
                  style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(34,197,94,0.12)' }}
                  >
                    <Check size={16} style={{ color: 'var(--color-primary)' }} />
                  </div>
                  <span className="text-sm font-medium" style={{ color: 'var(--color-text-primary)' }}>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA BANNER ────────────────────────────────────────────────────── */}
      <section className="py-20 relative overflow-hidden" style={{ background: 'var(--color-bg)' }}>
        <div className="orb orb-green" style={{ width: 400, height: 400, top: -100, right: 0, opacity: 0.2 }} />
        <div className="orb orb-cyan" style={{ width: 300, height: 300, bottom: -50, left: 0, opacity: 0.2 }} />
        <div className="section-container relative z-10">
          <div
            className="rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
            style={{ background: 'var(--gradient-card)', border: '1px solid var(--color-border)' }}
          >
            <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
            <div className="relative z-10">
              <span className="badge badge-primary mb-6">Ready to Go Electric?</span>
              <h2
                className="text-3xl md:text-5xl font-black mb-4 leading-tight"
                style={{ color: 'var(--color-text-primary)' }}
              >
                Experience the{' '}
                <span className="gradient-text">{product.name}</span>
                {' '}Today
              </h2>
              <p className="text-base md:text-lg mb-10 max-w-xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
                Visit your nearest EnVERT showroom or request a home demo. Our EV specialists are ready to guide you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to={`/contact?subject=${encodeURIComponent('Book test drive for ' + product.name)}`}
                  className={`btn-primary text-lg py-5 px-10 ${!product.inStock ? 'opacity-40 pointer-events-none' : ''}`}
                >
                  <Phone size={20} /> Book Test Drive
                </Link>
                <Link to="/products" className="btn-secondary text-lg py-5 px-10">
                  <ArrowLeft size={20} /> Browse More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RELATED PRODUCTS ──────────────────────────────────────────────── */}
      {related.length > 0 && (
        <section className="py-20" style={{ background: 'var(--color-bg-secondary)' }}>
          <div className="section-container">
            <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
              <div>
                <span className="badge badge-primary mb-4">More from this category</span>
                <h2 className="text-3xl font-bold" style={{ color: 'var(--color-text-primary)' }}>
                  You May Also{' '}
                  <span className="gradient-text">Like</span>
                </h2>
              </div>
              <Link to="/products" className="btn-secondary">
                View All <ChevronRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map(p => <RelatedCard key={p.id} product={p} />)}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
