// src/components/SectionTitle.jsx
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function SectionTitle({ badge, title, highlight, subtitle, center = true, className = '' }) {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`${center ? 'text-center' : ''} ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
      }}
    >
      {badge && (
        <div className={`flex ${center ? 'justify-center' : ''} mb-4`}>
          <span className="badge badge-primary">{badge}</span>
        </div>
      )}
      <h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4"
        style={{ color: 'var(--color-text-primary)' }}
      >
        {title}{' '}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {subtitle && (
        <p
          className={`text-base md:text-lg leading-relaxed ${center ? 'max-w-2xl mx-auto' : 'max-w-xl'}`}
          style={{ color: 'var(--color-text-secondary)' }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
