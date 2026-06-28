// src/pages/Manufacturing.jsx
import { Factory, Cpu, Battery, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SectionTitle from '../components/SectionTitle';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const products = [
  { icon: Factory, title: 'Electric Scooters & Trikes', desc: 'OEM manufacturing of 2W and 3W electric vehicles. Custom branding, color, and spec available for B2B clients.', capacity: '10,000 units/year', color: '#22c55e' },
  { icon: Zap, title: 'EV Charger Units', desc: 'Manufacturing of 3.3kW to 60kW AC/DC charging units for home, commercial, and fleet applications.', capacity: '5,000 units/year', color: '#06b6d4' },
  { icon: Cpu, title: 'Motor Controllers', desc: 'BLDC and PMSM motor controllers for 2W, 3W, and LCV applications. AUTOSAR-compliant firmware.', capacity: '20,000 units/year', color: '#f59e0b' },
  { icon: Battery, title: 'Battery Packs', desc: 'Custom lithium battery pack assembly for automotive and energy storage. AIS 156 certified manufacturing.', capacity: '15,000 packs/year', color: '#8b5cf6' },
];

function ManufacturingProductCard({ p, index }) {
  const [ref, isVisible] = useScrollAnimation();
  const Icon = p.icon;
  return (
    <div
      ref={ref}
      className="glass-card p-8"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: `all 0.5s ease ${index * 100}ms`,
        borderLeft: `4px solid ${p.color}`
      }}
    >
      <div className="flex items-start gap-5">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
          style={{ background: `${p.color}15` }}
        >
          <Icon size={24} style={{ color: p.color }} />
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>
            {p.title}
          </h3>
          <p className="text-sm leading-relaxed mb-3" style={{ color: 'var(--color-text-secondary)' }}>
            {p.desc}
          </p>
          <span className="badge badge-accent text-xs">Capacity: {p.capacity}</span>
        </div>
      </div>
    </div>
  );
}

export default function Manufacturing() {
  return (
    <>
      <title>Manufacturing — EnVERT</title>
      <PageHero
        badge="Manufacturing"
        title="Made in India,"
        highlight="For India"
        subtitle="EnVERT's state-of-the-art manufacturing facility produces EVs, chargers, motor controllers, and battery packs for B2B and OEM clients."
        breadcrumbs={[{ label: 'Manufacturing' }]}
      />
      <section className="py-24" style={{ background: 'var(--color-bg)' }}>
        <div className="section-container">
          <SectionTitle badge="Products" title="What We" highlight="Manufacture" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-14">
            {products.map((p, i) => (
              <ManufacturingProductCard key={p.title} p={p} index={i} />
            ))}
          </div>
          <div className="text-center mt-14">
            <Link to="/contact" className="btn-primary py-3.5 px-10">
              Enquire for OEM Partnership <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
