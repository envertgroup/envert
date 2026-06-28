// src/pages/Solar.jsx
import { Sun, Zap, Home, Building2, ArrowRight, TrendingDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SectionTitle from '../components/SectionTitle';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SEO from '../components/SEO';

const solarProducts = [
  { icon: Home, title: 'Residential Solar + EV', desc: 'Rooftop solar panels paired with home EV charger. Power your home and vehicle from the sun.', savings: 'Save ₹4,000/month avg.', color: '#f59e0b' },
  { icon: Building2, title: 'Commercial Solar Hub', desc: 'Solar canopy over parking lot generates power while shading vehicles. Charges your fleet for near-zero cost.', savings: 'Up to 80% energy cost saving', color: '#22c55e' },
  { icon: Zap, title: 'Hybrid Inverter System', desc: 'Bi-directional inverters manage grid, solar, and battery storage simultaneously with smart priority switching.', savings: '99.9% power reliability', color: '#06b6d4' },
  { icon: TrendingDown, title: 'Net Metering Advisory', desc: 'We handle the full DISCOM application for net metering — export excess solar power and earn credits on your electricity bill.', savings: 'Earn from excess power', color: '#8b5cf6' },
];

function SolarCard({ item, index }) {
  const [ref, isVisible] = useScrollAnimation();
  const Icon = item.icon;
  return (
    <div
      ref={ref}
      className="glass-card p-8"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: `all 0.5s ease ${index * 100}ms`
      }}
    >
      <div className="flex items-start gap-5">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
          style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}
        >
          <Icon size={24} style={{ color: item.color }} />
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>
            {item.title}
          </h3>
          <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--color-text-secondary)' }}>
            {item.desc}
          </p>
          <span className="badge badge-primary text-xs">{item.savings}</span>
        </div>
      </div>
    </div>
  );
}

export default function Solar() {
  return (
    <>
      <SEO 
        title="Solar + EV Integration — EnVERT" 
        description="Pair solar panel systems with smart EV chargers. EnVERT provides complete residential solar setups and commercial solar canopies for off-grid and cost-effective EV charging."
        keywords="solar EV charging, solar carport, rooftop solar EV, off grid charging, EnVERT"
      />
      <PageHero
        badge="Solar Integration"
        title="Charge from"
        highlight="Sunlight"
        subtitle="EnVERT integrates solar power with EV charging for homes, businesses, and fleets — delivering near-zero-cost mobility."
        breadcrumbs={[{ label: 'Solar + EV Integration' }]}
      />
      <section className="py-24" style={{ background: 'var(--color-bg)' }}>
        <div className="section-container">
          <SectionTitle
            badge="Solar Solutions"
            title="Sun-Powered"
            highlight="Mobility"
            subtitle="Combine rooftop solar with EV charging infrastructure for maximum energy independence."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-14">
            {solarProducts.map((item, i) => (
              <SolarCard key={item.title} item={item} index={i} />
            ))}
          </div>
          <div className="text-center mt-14">
            <Link to="/contact" className="btn-primary py-3.5 px-10">
              Get Solar + EV Quote <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
