// src/pages/Charging.jsx
import { Zap, Home, Building2, Car, Clock, Wifi, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SectionTitle from '../components/SectionTitle';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SEO from '../components/SEO';

const chargingTypes = [
  {
    icon: Home,
    title: 'Home Charging',
    power: '3.3 kW – 7.4 kW',
    time: '3–8 hours',
    price: '₹8,500 – ₹18,000',
    desc: 'Convenient overnight charging at home. Wall-mounted smart charger with app control and energy monitoring.',
    features: ['Wi-Fi + Bluetooth connectivity', 'Smart scheduling', 'Energy usage dashboard', 'ISI approved'],
    color: '#22c55e',
  },
  {
    icon: Building2,
    title: 'Commercial Charging Hub',
    power: '22 kW – 60 kW AC',
    time: '1–3 hours',
    price: 'Custom quote',
    desc: 'Multi-point charging solutions for offices, malls, hotels, and housing societies.',
    features: ['OCPP 1.6 compliant', 'RFID access control', 'Revenue management portal', 'Remote diagnostics'],
    color: '#06b6d4',
  },
  {
    icon: Car,
    title: 'DC Fast Charging',
    power: '60 kW – 150 kW',
    time: '20–45 minutes',
    price: 'Custom quote',
    desc: 'Ultra-fast DC charging for highways and high-footfall public locations.',
    features: ['CCS2 + CHAdeMO + GB/T', '95% uptime SLA', 'Fleet priority mode', 'Night-vision ready kiosk'],
    color: '#f59e0b',
  },
];

function ChargingCard({ item, delay }) {
  const [ref, isVisible] = useScrollAnimation();
  const Icon = item.icon;
  return (
    <div
      ref={ref}
      className="glass-card p-8"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
        borderTop: `3px solid ${item.color}`,
      }}
    >
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
        style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}
      >
        <Icon size={26} style={{ color: item.color }} />
      </div>
      <h3 className="text-xl font-bold mb-1" style={{ color: 'var(--color-text-primary)' }}>{item.title}</h3>
      <div className="flex flex-wrap gap-4 my-4">
        <div>
          <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>Power Output</p>
          <p className="text-sm font-semibold" style={{ color: item.color }}>{item.power}</p>
        </div>
        <div>
          <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>Charge Time</p>
          <p className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>{item.time}</p>
        </div>
        <div>
          <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>Starting Price</p>
          <p className="text-sm font-semibold gradient-text">{item.price}</p>
        </div>
      </div>
      <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--color-text-secondary)' }}>{item.desc}</p>
      <ul className="space-y-2">
        {item.features.map(f => (
          <li key={f} className="flex items-center gap-2 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: item.color }} />
            {f}
          </li>
        ))}
      </ul>
      <Link to="/contact?interest=Charging Infrastructure" className="btn-primary mt-6 text-sm py-2.5">
        Get Quote <ArrowRight size={14} />
      </Link>
    </div>
  );
}

export default function Charging() {
  return (
    <>
      <SEO 
        title="Charging Infrastructure — EnVERT" 
        description="EnVERT designs, supplies, and installs complete EV charging solutions in India. Including home chargers (3.3kW-7.4kW), commercial charging hubs, and DC fast chargers (60kW-150kW)."
        keywords="EV charger, home EV charging, commercial EV charger, DC fast charging station, EnVERT"
      />
      <PageHero
        badge="Charging Solutions"
        title="Power Every"
        highlight="Journey"
        subtitle="From your driveway to highways — EnVERT designs, supplies, and installs complete EV charging infrastructure across India."
        breadcrumbs={[{ label: 'Charging & Infrastructure' }]}
      />

      <section className="py-24" style={{ background: 'var(--color-bg)' }}>
        <div className="section-container">
          <SectionTitle
            badge="Charging Types"
            title="Find the Right"
            highlight="Charger"
            subtitle="We offer complete charging solutions for homes, offices, and public spaces — all designed for Indian grid conditions."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
            {chargingTypes.map((item, i) => (
              <ChargingCard key={item.title} item={item} delay={i * 120} />
            ))}
          </div>
        </div>
      </section>

      {/* Network Map placeholder */}
      <section className="py-20" style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="section-container text-center">
          <SectionTitle
            badge="Network"
            title="Multiple Charging"
            highlight="Points"
            subtitle="Our growing network spans multiple cities across India with 24/7 monitoring and maintenance."
          />
          <div
            className="glass-card p-8 mt-12 flex items-center justify-center"
            style={{ height: 320, background: 'var(--gradient-card)' }}
          >
            <div className="text-center">
              <Zap size={48} className="mx-auto mb-4 animate-pulse" style={{ color: 'var(--color-primary)' }} />
              <p style={{ color: 'var(--color-text-secondary)' }}>Interactive charging network map — coming soon</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
