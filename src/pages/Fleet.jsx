// src/pages/Fleet.jsx
import { Truck, BarChart3, CreditCard, MapPin, ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SectionTitle from '../components/SectionTitle';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const fleetSteps = [
  { num: '01', title: 'TCO Analysis', desc: 'We analyze your current fleet costs vs. EV transition ROI, payback period, and 10-year savings projection.' },
  { num: '02', title: 'Vehicle Selection', desc: 'We recommend the right mix of 2W, 3W, LCV, or buses based on your route profiles and payload requirements.' },
  { num: '03', title: 'Charging Depot Setup', desc: 'Site survey, electrical upgrades, and installation of smart chargers at your depot or warehouses.' },
  { num: '04', title: 'Driver Training', desc: 'Certified EV driver training, range anxiety management, and regenerative braking workshops.' },
  { num: '05', title: 'Fleet Management Software', desc: 'Real-time GPS tracking, battery SoC monitoring, trip reports, and maintenance alerts via our platform.' },
  { num: '06', title: 'Ongoing Support', desc: '24/7 helpline, scheduled servicing, and dedicated fleet account manager for your operations team.' },
];

const clients = ['E-commerce Delivery', 'Food & Grocery', 'City Public Transport', 'School Transport', 'Corporate Shuttle', 'Agricultural Logistics'];

function FleetStepCard({ step, index }) {
  const [ref, isVisible] = useScrollAnimation();
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
      <div className="text-5xl font-black gradient-text mb-4 opacity-30">{step.num}</div>
      <h3 className="font-bold text-lg mb-2" style={{ color: 'var(--color-text-primary)' }}>
        {step.title}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
        {step.desc}
      </p>
    </div>
  );
}

export default function Fleet() {
  return (
    <>
      <title>Fleet Electrification — EnVERT</title>
      <PageHero
        badge="Fleet Electrification"
        title="Electrify Your"
        highlight="Entire Fleet"
        subtitle="From TCO analysis to depot charging and driver training — EnVERT manages your complete fleet electrification journey."
        breadcrumbs={[{ label: 'Fleet Electrification' }]}
      />
      <section className="py-24" style={{ background: 'var(--color-bg)' }}>
        <div className="section-container">
          <SectionTitle
            badge="Our Process"
            title="How We Electrify"
            highlight="Your Fleet"
            subtitle="A proven 6-step process used by multiple fleet operators across India."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {fleetSteps.map((step, i) => (
              <FleetStepCard key={step.num} step={step} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-20" style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="section-container text-center">
          <SectionTitle badge="Sectors Served" title="Who We" highlight="Electrify" />
          <div className="flex flex-wrap justify-center gap-3 mt-10">
            {clients.map(c => (
              <div
                key={c}
                className="flex items-center gap-2 px-5 py-3 rounded-full glass-card text-sm font-medium"
                style={{ color: 'var(--color-text-primary)' }}
              >
                <Check size={14} style={{ color: 'var(--color-primary)' }} /> {c}
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link to="/contact" className="btn-primary py-3.5 px-10">
              Start Fleet Transition <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
