// src/components/ProductCard.jsx
import { Link } from 'react-router-dom';
import { Zap, ArrowRight, BadgeCheck, Tag } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function formatPrice(price) {
  if (price >= 100000) {
    return `₹${(price / 100000).toFixed(2)} L`;
  }
  return `₹${price.toLocaleString('en-IN')}`;
}

export default function ProductCard({ product, delay = 0 }) {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div
      ref={ref}
      className="glass-card overflow-hidden flex flex-col h-full"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`,
      }}
    >
      {/* Image */}
      <div className="relative overflow-hidden h-52 bg-black/30" style={{ background: 'var(--color-bg-tertiary)' }}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          <span className="badge badge-primary text-xs">{product.category}</span>
          {product.featured && (
            <span className="badge badge-accent text-xs">
              <BadgeCheck size={11} /> Featured
            </span>
          )}
        </div>
        {!product.inStock && (
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ background: 'rgba(0,0,0,0.6)' }}
          >
            <span className="badge" style={{ background: 'rgba(239,68,68,0.2)', color: '#f87171', border: '1px solid rgba(239,68,68,0.3)' }}>
              Out of Stock
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <p className="text-xs font-medium mb-1" style={{ color: 'var(--color-accent)' }}>
          {product.subcategory}
        </p>
        <h3
          className="text-lg font-bold mb-2 leading-tight"
          style={{ color: 'var(--color-text-primary)' }}
        >
          {product.name}
        </h3>
        <p
          className="text-sm leading-relaxed mb-4 line-clamp-2 flex-1"
          style={{ color: 'var(--color-text-secondary)' }}
        >
          {product.description}
        </p>

        {/* Key Specs */}
        <div
          className="grid grid-cols-2 gap-2 mb-4 p-3 rounded-xl"
          style={{ background: 'var(--color-bg-secondary)', border: '1px solid var(--color-border)' }}
        >
          {product.range && (
            <div className="flex items-center gap-1.5">
              <Zap size={12} style={{ color: 'var(--color-primary)' }} />
              <span className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>{product.range}</span>
            </div>
          )}
          {product.power && (
            <div className="flex items-center gap-1.5">
              <Zap size={12} style={{ color: 'var(--color-accent)' }} />
              <span className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>{product.power}</span>
            </div>
          )}
          {product.topSpeed && (
            <div className="flex items-center gap-1.5">
              <Tag size={12} style={{ color: 'var(--color-primary)' }} />
              <span className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>{product.topSpeed}</span>
            </div>
          )}
          {product.battery && (
            <div className="flex items-center gap-1.5">
              <Tag size={12} style={{ color: 'var(--color-accent)' }} />
              <span className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>{product.battery}</span>
            </div>
          )}
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between mt-auto">
          <div>
            <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>Starting from</p>
            <p className="text-xl font-bold gradient-text">{formatPrice(product.price)}</p>
          </div>
          <Link
            to={`/products/${product.id}`}
            className="flex items-center gap-1.5 text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-200"
            style={{
              color: 'var(--color-primary)',
              background: 'var(--color-primary-glow)',
              border: '1px solid rgba(34,197,94,0.3)',
            }}
          >
            Details <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}
