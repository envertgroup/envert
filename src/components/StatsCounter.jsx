// src/components/StatsCounter.jsx
import { useScrollAnimation, useCountUp } from '../hooks/useScrollAnimation';
import { stats } from '../data/stats';
import { Zap, Users, MapPin, Globe, Leaf, Briefcase } from 'lucide-react';

const iconMap = { Zap, Users, MapPin, Globe, Leaf, Briefcase };

function StatItem({ stat, delay }) {
  const [ref, isVisible] = useScrollAnimation();
  const count = useCountUp(stat.value, 2000, isVisible);

  const Icon = iconMap[stat.icon] || Zap;

  return (
    <div
      ref={ref}
      className="flex flex-col items-center text-center"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
        style={{
          background: 'var(--gradient-card)',
          border: '1px solid var(--color-border)',
        }}
      >
        <Icon size={24} style={{ color: 'var(--color-primary)' }} />
      </div>
      <div className="text-3xl md:text-4xl font-extrabold gradient-text mb-1">
        {count.toLocaleString('en-IN')}{stat.suffix}
      </div>
      <div className="text-sm font-medium" style={{ color: 'var(--color-text-secondary)' }}>
        {stat.label}
      </div>
    </div>
  );
}

export default function StatsCounter() {
  return (
    <section
      className="py-20"
      style={{ background: 'var(--color-bg-secondary)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}
    >
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <StatItem key={stat.id} stat={stat} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
