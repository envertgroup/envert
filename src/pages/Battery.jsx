// src/pages/Battery.jsx
import { Battery as BatteryIcon, RefreshCw, Recycle, Shield, ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SEO from '../components/SEO';

const batteryServices = [
  { icon: BatteryIcon, title: 'Li-ion Battery Contract Manufacturing', desc: 'Custom assembly and high-capacity contract manufacturing for LFP and NMC battery packs. Scaled production built to automotive standards.', color: '#22c55e' },
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
  const [heroRef, heroVisible] = useScrollAnimation(0.05);

  return (
    <>
      <SEO 
        title="WAGSOL Battery Business — EnVERT" 
        description="WAGSOL is EnVERT's custom battery technology brand. Providing LFP & NMC cell-level contract manufacturing, smart BMS integration, pack refurbishment, and second-life energy storage systems."
        keywords="WAGSOL battery, EV battery pack, LFP battery manufacturing, BMS integration, battery refurbishment, EnVERT"
      />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        className="relative pt-28 pb-20 overflow-hidden"
        style={{ background: 'var(--gradient-hero)', minHeight: '60vh' }}
      >
        {/* Background orbs */}
        <div className="orb orb-cyan" style={{ width: 600, height: 600, top: -200, right: -100, opacity: 0.3 }} />
        <div className="orb orb-green" style={{ width: 400, height: 400, bottom: -100, left: -80, opacity: 0.25 }} />
        <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

        <div
          ref={heroRef}
          className="section-container relative z-10"
          style={{
            opacity: heroVisible ? 1 : 0,
            transform: heroVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 mb-10 text-sm" style={{ color: 'var(--color-text-muted)' }}>
            <Link
              to="/"
              className="transition-colors"
              onMouseEnter={e => e.currentTarget.style.color = 'var(--color-primary)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--color-text-muted)'}
            >
              Home
            </Link>
            <span>/</span>
            <span style={{ color: 'var(--color-primary)' }}>Battery Business</span>
          </nav>

          {/* Sub-brand block */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">

            {/* Left: Text */}
            <div className="flex-1 max-w-2xl">
              {/* "A division of EnVERT" label */}
              <div className="flex items-center gap-2 mb-5">
                <span className="badge badge-primary">Battery Division</span>
                <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>— A division of EnVERT</span>
              </div>

              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6"
                style={{ color: 'var(--color-text-primary)', letterSpacing: '-0.02em' }}
              >
                Advanced Battery{' '}
                <span className="gradient-text">Solutions</span>
              </h1>

              <p className="text-lg leading-relaxed mb-8" style={{ color: 'var(--color-text-secondary)' }}>
                From contract manufacturing to custom pack design, BMS integration, and second-life
                applications — WAGSOL covers the full battery lifecycle.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link to="/contact" className="btn-primary">
                  Get Battery Quote <ArrowRight size={16} />
                </Link>
                <Link to="/contact" className="btn-secondary">
                  Talk to an Expert
                </Link>
              </div>
            </div>

            {/* Right: WAGSOL Logo Card */}
            <div className="lg:w-auto flex-shrink-0">
              <div
                className="relative p-8 rounded-3xl overflow-hidden"
                style={{
                  background: 'var(--gradient-card)',
                  border: '1px solid var(--color-border)',
                  boxShadow: '0 24px 80px rgba(0,0,0,0.4), 0 0 0 1px rgba(6,182,212,0.15)',
                  minWidth: '320px',
                }}
              >
                {/* Background glow behind logo */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'radial-gradient(ellipse at 50% 50%, rgba(6,182,212,0.12) 0%, transparent 70%)',
                  }}
                />
                <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />

                <div className="relative z-10 flex flex-col items-center gap-5">
                  {/* Powered by EnVERT label */}
                  <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--color-text-muted)' }}>
                    Powered by EnVERT
                  </p>

                  {/* WAGSOL Logo — landscape 3:1 */}
                  <div
                    className="flex items-center justify-center"
                    style={{ width: '240px', height: '80px' }}
                  >
                    <img
                      src="/assets/logo/wagsol-logo.png"
                      alt="WAGSOL"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        objectPosition: 'center',
                      }}
                      onError={e => {
                        // Fallback: render text logo if file missing
                        e.target.style.display = 'none';
                        e.target.parentNode.innerHTML = `
                          <span style="
                            font-size: 2.5rem;
                            font-weight: 900;
                            letter-spacing: -0.03em;
                            background: linear-gradient(135deg, #22c55e, #06b6d4);
                            -webkit-background-clip: text;
                            -webkit-text-fill-color: transparent;
                            background-clip: text;
                          ">WAGSOL</span>
                        `;
                      }}
                    />
                  </div>

                  {/* Divider */}
                  <div
                    className="w-full h-px"
                    style={{ background: 'var(--color-border)' }}
                  />

                  {/* Quick tagline */}
                  <p className="text-xs text-center" style={{ color: 'var(--color-text-muted)', maxWidth: '200px' }}>
                    India's trusted name in advanced lithium battery technology
                  </p>

                  {/* Glowing dot indicators */}
                  <div className="flex items-center gap-2">
                    {['LFP', 'NMC', 'BMS', 'ESS'].map(tag => (
                      <span
                        key={tag}
                        className="px-2 py-1 rounded-md text-xs font-semibold"
                        style={{
                          background: 'rgba(6,182,212,0.12)',
                          border: '1px solid rgba(6,182,212,0.25)',
                          color: 'var(--color-accent)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent, var(--color-bg))' }}
        />
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────────────── */}
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

      {/* ── SPECS ────────────────────────────────────────────────────────── */}
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
              {/* WAGSOL inline logo — small, beneath heading */}
              <div className="flex items-center gap-3 mt-6 mb-8">
                <span className="text-sm" style={{ color: 'var(--color-text-muted)' }}>Supplied under</span>
                <div
                  className="px-3 py-1.5 rounded-lg flex items-center"
                  style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
                >
                  <img
                    src="/assets/logo/wagsol-logo.png"
                    alt="WAGSOL"
                    style={{ height: '22px', width: 'auto', objectFit: 'contain' }}
                    onError={e => {
                      e.target.style.display = 'none';
                      e.target.parentNode.innerHTML += `<span style="font-weight:800;font-size:0.9rem;background:linear-gradient(135deg,#22c55e,#06b6d4);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">WAGSOL</span>`;
                    }}
                  />
                </div>
                <span className="text-sm" style={{ color: 'var(--color-text-muted)' }}>brand</span>
              </div>
              <Link to="/contact" className="btn-primary">
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
