// src/pages/Software.jsx
import { Cpu, MapPin, Bell, BarChart3, Smartphone, Cloud, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SectionTitle from '../components/SectionTitle';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SEO from '../components/SEO';

const features = [
  { icon: MapPin, title: 'Real-Time GPS Tracking', desc: 'Live vehicle location, route history, geofencing, and trip replay on web and mobile.' },
  { icon: Bell, title: 'Smart Alerts', desc: 'Instant alerts for speeding, low battery, unauthorized use, and scheduled maintenance.' },
  { icon: BarChart3, title: 'Fleet Analytics', desc: 'Comprehensive dashboards for energy usage, driver behavior, utilization rates, and cost per km.' },
  { icon: Smartphone, title: 'Driver Mobile App', desc: 'Android & iOS app for drivers — range display, nearest charger, trip logs, and emergency SOS.' },
  { icon: Cloud, title: 'OTA Updates', desc: 'Over-the-air firmware updates for vehicle ECU, BMS, and onboard software — no workshop visit needed.' },
  { icon: Cpu, title: 'API Integration', desc: 'REST APIs to integrate with your existing ERP, WMS, or logistics platforms.' },
];

function SoftwareFeatureCard({ feature, index }) {
  const [ref, isVisible] = useScrollAnimation();
  const Icon = feature.icon;
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
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
        style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)' }}
      >
        <Icon size={22} style={{ color: 'var(--color-primary)' }} />
      </div>
      <h3 className="font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>
        {feature.title}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
        {feature.desc}
      </p>
    </div>
  );
}

export default function Software() {
  return (
    <>
      <SEO 
        title="Software & Technology — EnVERT" 
        description="Optimize your EV fleet with EnVERT's custom telematics and fleet management software. Features real-time GPS tracking, battery SoC monitoring, diagnostic alerts, and driver analytics."
        keywords="EV software, fleet tracking, telematics software, vehicle diagnostics, GPS tracking, EnVERT"
      />
      <PageHero
        badge="Software Solutions"
        title="Smart Software for"
        highlight="Smart Fleets"
        subtitle="EnVERT's telematics and fleet management platform gives you complete visibility and control over every vehicle in your fleet."
        breadcrumbs={[{ label: 'Software & Technology' }]}
      />
      <section className="py-24" style={{ background: 'var(--color-bg)' }}>
        <div className="section-container">
          <SectionTitle
            badge="Platform Features"
            title="Everything You Need to"
            highlight="Manage Your Fleet"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {features.map((f, i) => (
              <SoftwareFeatureCard key={f.title} feature={f} index={i} />
            ))}
          </div>
          <div className="text-center mt-14">
            <Link to="/contact" className="btn-primary py-3.5 px-10">
              Request a Demo <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
