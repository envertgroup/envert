// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Battery, Sun, Truck, Cpu, Wrench, Factory, BarChart3, Check } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import ProductCard from '../components/ProductCard';
import TestimonialCarousel from '../components/TestimonialCarousel';
import { products } from '../data/products';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SEO from '../components/SEO';

const solutions = [
  { icon: Zap, title: 'Charging Infrastructure', desc: 'Home chargers to 150kW DC fast chargers and public charging networks.', href: '/charging', color: '#22c55e' },
  { icon: Battery, title: 'Battery Solutions', desc: 'Contract manufacturing, BMS integration, refurbishment, and second-life solutions.', href: '/battery', color: '#06b6d4' },
  { icon: Sun, title: 'Solar + EV Integration', desc: 'Hybrid solar-EV systems, inverters, and net metering solutions.', href: '/solar', color: '#f59e0b' },
  { icon: Truck, title: 'Fleet Electrification', desc: 'End-to-end fleet transition — procurement, charging depots, and telematics.', href: '/fleet', color: '#8b5cf6' },
  { icon: Cpu, title: 'Software & Telematics', desc: 'Fleet tracking apps, remote diagnostics, and OTA update platforms.', href: '/software', color: '#ec4899' },
  { icon: Wrench, title: 'EV Services', desc: 'Scheduled maintenance, diagnostics, and 24/7 roadside assistance.', href: '/services', color: '#f97316' },
  { icon: Factory, title: 'Manufacturing', desc: 'Custom scooters, charger units, motor controllers, and battery packs.', href: '/manufacturing', color: '#22c55e' },
  { icon: BarChart3, title: 'Consultancy', desc: 'Carbon footprint auditing, EV policy guidance, and infrastructure planning.', href: '/consultancy', color: '#06b6d4' },
];

const whyEnVERT = [
  'Pan-India service network across multiple cities',
  'ISO 9001:2015 certified manufacturing & processes',
  'FAME II & state subsidy assistance',
  'Dedicated fleet team and account managers',
  '5-year battery warranty on select models',
  'Zero-interest EMI financing options',
];

function SolutionCard({ solution, delay }) {
  const [ref, isVisible] = useScrollAnimation();
  const Icon = solution.icon;
  return (
    <Link
      ref={ref}
      to={solution.href}
      className="glass-card p-6 block group"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`,
      }}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
        style={{ background: `${solution.color}18`, border: `1px solid ${solution.color}30` }}
      >
        <Icon size={22} style={{ color: solution.color }} />
      </div>
      <h3 className="font-bold mb-2 text-base" style={{ color: 'var(--color-text-primary)' }}>{solution.title}</h3>
      <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--color-text-secondary)' }}>{solution.desc}</p>
      <span
        className="text-xs font-semibold flex items-center gap-1 transition-gap duration-200"
        style={{ color: solution.color }}
      >
        Learn more <ArrowRight size={12} />
      </span>
    </Link>
  );
}

export default function Home() {
  const featuredProducts = products.filter(p => p.featured).slice(0, 4);
  const [ref, isVisible] = useScrollAnimation();

  return (
    <>
      <SEO 
        title="EnVERT — India's Premier EV Company" 
        description="EnVERT delivers complete electric vehicle (EV) solutions across India — including electric scooters, cargo trikes, public charging stations, solar integration, and fleet telematics."
        keywords="EV company, electric vehicle, electric scooter, fleet electrification, EV charging, solar EV, EnVERT"
      />
      <HeroSection />

      {/* Solutions */}
      <section className="py-24" style={{ background: 'var(--color-bg)' }}>
        <div className="section-container">
          <SectionTitle
            badge="Our Verticals"
            title="Complete EV"
            highlight="Ecosystem"
            subtitle="From vehicles and charging to software and consultancy — EnVERT is your single partner for everything electric."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
            {solutions.map((s, i) => (
              <SolutionCard key={s.title} solution={s} delay={i * 60} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24" style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="section-container">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
            <SectionTitle
              badge="Featured Vehicles"
              title="Our Bestselling"
              highlight="EVs"
              subtitle="Premium electric vehicles for every segment — 2W, 3W, cars, buses, and bicycles."
              center={false}
            />
            <Link to="/products" className="btn-secondary flex-shrink-0 self-end">
              View All Products <ArrowRight size={15} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>

      {/* Why EnVERT */}
      <section className="py-24" style={{ background: 'var(--color-bg)' }}>
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <SectionTitle
                badge="Why EnVERT"
                title="India's Most Trusted"
                highlight="EV Partner"
                subtitle="We don't just sell vehicles — we build end-to-end electric mobility ecosystems for individuals, enterprises, and governments."
                center={false}
              />
              <ul className="mt-8 space-y-3">
                {whyEnVERT.map((item, i) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm"
                    style={{ color: 'var(--color-text-secondary)' }}
                  >
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: 'rgba(34,197,94,0.15)' }}
                    >
                      <Check size={11} style={{ color: 'var(--color-primary)' }} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Link to="/contact" className="btn-primary">
                  Talk to Our Expert <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Right - visual card */}
            <div
              ref={ref}
              className="relative"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(40px)',
                transition: 'opacity 0.7s ease, transform 0.7s ease',
              }}
            >
              <div className="glass-card p-8 relative overflow-hidden">
                {/* Background decoration */}
                <div
                  className="absolute inset-0 opacity-30 pointer-events-none"
                  style={{ background: 'var(--gradient-card)' }}
                />
                <div className="relative z-10">
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: 'Years in EV Industry', value: '8+' },
                      { label: 'Service Centres', value: '180+' },
                      { label: 'Certified Technicians', value: '600+' },
                      { label: 'States Covered', value: '22+' },
                    ].map(stat => (
                      <div
                        key={stat.label}
                        className="p-4 rounded-xl"
                        style={{ background: 'var(--color-bg-secondary)', border: '1px solid var(--color-border)' }}
                      >
                        <div className="text-3xl font-extrabold gradient-text mb-1">{stat.value}</div>
                        <div className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  <div
                    className="mt-4 p-4 rounded-xl flex items-center gap-4"
                    style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)' }}
                  >
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'rgba(34,197,94,0.15)' }}>
                      <Zap size={20} style={{ color: '#22c55e' }} />
                    </div>
                    <div>
                      <div className="font-bold" style={{ color: 'var(--color-text-primary)' }}>FAME II Authorized Dealer</div>
                      <div className="text-xs" style={{ color: 'var(--color-text-secondary)' }}>Central Government Subsidy Available</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialCarousel />

      {/* CTA Banner */}
      <section
        className="py-20"
        style={{ background: 'var(--color-bg-secondary)', borderTop: '1px solid var(--color-border)' }}
      >
        <div className="section-container text-center">
          <h2
            className="text-3xl md:text-5xl font-extrabold mb-5"
            style={{ color: 'var(--color-text-primary)' }}
          >
            Ready to go <span className="gradient-text">Electric?</span>
          </h2>
          <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
            Talk to our EV experts today. Get a free consultation, quote, and subsidy assistance.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact" className="btn-primary text-base py-3.5 px-10">
              Get Free Quote <ArrowRight size={17} />
            </Link>
            <Link to="/products" className="btn-secondary text-base py-3.5 px-10">
              Browse EVs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
