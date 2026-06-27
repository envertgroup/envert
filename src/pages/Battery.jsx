// src/pages/Battery.jsx
import { Battery as BatteryIcon, RefreshCw, Recycle, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SectionTitle from '../components/SectionTitle';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const batteryServices = [
  { icon: BatteryIcon, title: 'Li-ion Battery Trading', desc: 'Premium lithium iron phosphate (LFP) and NMC cells sourced globally. Available in 18650, 21700, and prismatic formats.', color: '#22c55e' },
  { icon: Shield, title: 'BMS Integration', desc: 'Custom Battery Management System design, testing, and integration for 2W, 3W, and commercial vehicle packs.', color: '#06b6d4' },
  { icon: RefreshCw, title: 'Battery Refurbishment', desc: 'Cell-level diagnostics, balancing, and replacement to restore up to 95% of original capacity. 12-month warranty.', color: '#f59e0b' },
  { icon: Recycle, title: 'Second Life & Recycling', desc: 'Retired EV batteries repurposed for stationary energy storage or responsibly recycled per CPCB norms.', color: '#8b5cf6' },
];

const specs = [
  { label: 'Chemistry', value: 'LFP / NMC / NCA' },
  { label: 'Capacity Range', value: '1.5 kWh – 200 kWh' },
  { label: 'Cell Formats', value: '18650, 21700, Prismatic, Pouch' },
  { label: 'Cycle Life', value: '2,000+ cycles (LFP)' },
  { label: 'Operating Temp', value: '-20°C to +60°C' },
  { label: 'Certifications', value: 'IEC 62619, UL 1973, AIS 156' },
];

// Extracted to a proper component so hooks work correctly
function BatteryServiceCard({ svc, index }) {
  const [ref, isVisible] = useScrollAnimation();
  const Icon = svc.icon;
  return (
    <div
      ref={ref}
      className="glass-card p-6"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.5s ease ${index * 100}ms, transform 0.5s ease ${index * 100}ms`,
        borderTop: `3px solid ${svc.color}`,
      }}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
        style={{ background: `${svc.color}15` }}
      >
        <Icon size={22} style={{ color: svc.color }} />
      </div>
      <h3 className="font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>
        {svc.title}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
        {svc.desc}
      </p>
    </div>
  );
}

export default function Battery() {
  const [specsRef, specsVisible] = useScrollAnimation();

  return (
    <>
      <title>Battery Business — Envert</title>
      <PageHero
        badge="Battery Business"
        title="Advanced Battery"
        highlight="Solutions"
        subtitle="From cell trading to custom pack design, BMS integration, and second-life applications — Envert covers the full battery lifecycle."
        breadcrumbs={[{ label: 'Battery Business' }]}
      />

      <section className="py-24" style={{ background: 'var(--color-bg)' }}>
        <div className="section-container">
          <SectionTitle
            badge="Services"
            title="Full-Lifecycle"
            highlight="Battery Solutions"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {batteryServices.map((svc, i) => (
              <BatteryServiceCard key={svc.title} svc={svc} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Battery Specs */}
      <section className="py-20" style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionTitle
                badge="Specifications"
                title="Industrial-Grade"
                highlight="Battery Packs"
                subtitle="We supply and integrate batteries that meet the toughest automotive and energy storage standards."
                center={false}
              />
              <Link to="/contact" className="btn-primary mt-8">
                Get Battery Quote <ArrowRight size={15} />
              </Link>
            </div>
            <div
              ref={specsRef}
              style={{
                opacity: specsVisible ? 1 : 0,
                transform: specsVisible ? 'translateX(0)' : 'translateX(40px)',
                transition: 'all 0.7s ease',
              }}
            >
              <div className="glass-card p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {specs.map((s) => (
                    <div
                      key={s.label}
                      className="p-4 rounded-xl"
                      style={{ background: 'var(--color-bg)', border: '1px solid var(--color-border)' }}
                    >
                      <p className="text-xs mb-1" style={{ color: 'var(--color-text-muted)' }}>
                        {s.label}
                      </p>
                      <p className="font-semibold text-sm" style={{ color: 'var(--color-text-primary)' }}>
                        {s.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
