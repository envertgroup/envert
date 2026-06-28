// src/pages/Consultancy.jsx
import { BarChart3, Leaf, MapPin, FileText, Users, TrendingDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SectionTitle from '../components/SectionTitle';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SEO from '../components/SEO';

const services = [
  { icon: Leaf, title: 'Carbon Footprint Auditing', desc: 'Measure, report, and plan reduction of your organization\'s transport-related carbon emissions.', color: '#22c55e' },
  { icon: MapPin, title: 'Charging Network Planning', desc: 'Site selection, feasibility analysis, and ROI modeling for public or private charging networks.', color: '#06b6d4' },
  { icon: FileText, title: 'Policy & Subsidy Guidance', desc: 'Navigate FAME II, state EV policies, PLI schemes, and tax incentives with our policy experts.', color: '#f59e0b' },
  { icon: BarChart3, title: 'Techno-Economic Feasibility', desc: 'Detailed feasibility reports for EV fleet transition, charging infrastructure, or solar-EV projects.', color: '#8b5cf6' },
  { icon: Users, title: 'Stakeholder Training', desc: 'Workshops and training programs for fleet managers, drivers, and technicians on EV operations.', color: '#ec4899' },
  { icon: TrendingDown, title: 'TCO & ROI Modeling', desc: 'Financial modeling comparing diesel/petrol TCO vs. electric alternatives with real-world data.', color: '#f97316' },
];

function ConsultancyServiceCard({ s, index }) {
  const [ref, isVisible] = useScrollAnimation();
  const Icon = s.icon;
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
        style={{ background: `${s.color}15`, border: `1px solid ${s.color}30` }}
      >
        <Icon size={22} style={{ color: s.color }} />
      </div>
      <h3 className="font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>
        {s.title}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
        {s.desc}
      </p>
    </div>
  );
}

export default function Consultancy() {
  return (
    <>
      <SEO 
        title="EV Consultancy — EnVERT" 
        description="EnVERT offers expert EV consultancy services for businesses, governments, and organizations. From carbon audits and policy planning to feasibility reports and TCO modeling."
        keywords="EV consultancy, carbon audit, EV policy analysis, feasibility study, EnVERT"
      />
      <PageHero
        badge="Consultancy"
        title="Expert Guidance for Your"
        highlight="EV Journey"
        subtitle="EnVERT's consultancy team helps businesses, government bodies, and institutions plan, finance, and execute their EV transition."
        breadcrumbs={[{ label: 'Consultancy' }]}
      />
      <section className="py-24" style={{ background: 'var(--color-bg)' }}>
        <div className="section-container">
          <SectionTitle badge="Services" title="Consultancy" highlight="Areas" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {services.map((s, i) => (
              <ConsultancyServiceCard key={s.title} s={s} index={i} />
            ))}
          </div>
          <div className="text-center mt-14">
            <Link to="/contact?interest=Consultancy" className="btn-primary py-3.5 px-10">
              Book a Consultation <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
