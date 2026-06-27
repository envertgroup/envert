// src/components/HeroSection.jsx
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Leaf, ChevronDown } from 'lucide-react';

const brands = [
  'Sustainable Mobility',
  'Zero Emission',
  'Eco-Friendly Tech',
  'Smart EV Infrastructure',
  'Battery Innovation',
  'Solar + EV Integration',
  'Green Logistics'
];

export default function HeroSection() {
  const canvasRef = useRef(null);

  // Particle animation on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      a: Math.random() * 0.6 + 0.2,
    }));

    let animId;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(34,197,94,${p.a})`;
        ctx.fill();
      });
      // Draw connections
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach(b => {
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(34,197,94,${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
      {/* Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }} />

      {/* Background Orbs */}
      <div className="orb orb-green animate-pulse-slow" style={{ width: 700, height: 700, top: -200, right: -200, opacity: 0.35 }} />
      <div className="orb orb-cyan" style={{ width: 500, height: 500, bottom: -100, left: -100, opacity: 0.25 }} />
      <div className="orb orb-purple" style={{ width: 400, height: 400, top: '30%', left: '20%', opacity: 0.15 }} />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid pointer-events-none" style={{ zIndex: 0 }} />

      {/* Main Content */}
      <div className="section-container flex-1 flex flex-col justify-center pt-28 pb-16 relative z-10">
        <div className="max-w-5xl">
          {/* Headline */}
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[1.08] tracking-tight mb-6"
            style={{
              color: 'var(--color-text-primary)',
              animation: 'slideUp 0.6s ease 0.2s both',
            }}
          >
            Power Your
            <br />
            <span className="gradient-text">Electric</span>
            <br />
            Future
          </h1>

          {/* Subline */}
          <p
            className="text-lg md:text-xl max-w-2xl leading-relaxed mb-10"
            style={{
              color: 'var(--color-text-secondary)',
              animation: 'slideUp 0.6s ease 0.35s both',
            }}
          >
            Envert delivers complete EV solutions — from 2-wheelers to electric buses, 
            charging infrastructure, battery management, solar integration, and fleet electrification.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-4 mb-14"
            style={{ animation: 'slideUp 0.6s ease 0.5s both' }}
          >
            <Link to="/products" className="btn-primary text-base py-3.5 px-8 animate-glow-pulse">
              Explore EVs <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="btn-secondary text-base py-3.5 px-8">
              Get a Quote
            </Link>
          </div>

          {/* Trust pills */}
          <div
            className="flex flex-wrap items-center gap-6"
            style={{ animation: 'slideUp 0.6s ease 0.65s both' }}
          >
            {[
              { icon: Zap, text: 'Next-Gen EV Solutions' },
              { icon: Shield, text: 'Quality & Innovation' },
              { icon: Leaf, text: 'Eco-Friendly Focus' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2">
                <Icon size={16} style={{ color: 'var(--color-primary)' }} />
                <span className="text-sm font-medium" style={{ color: 'var(--color-text-secondary)' }}>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Brand Ticker */}
      <div
        className="relative z-10 py-5"
        style={{
          borderTop: '1px solid var(--color-border)',
          background: 'rgba(0,0,0,0.2)',
          backdropFilter: 'blur(8px)',
        }}
      >
        <div className="overflow-hidden">
          <div className="flex gap-12 animate-marquee whitespace-nowrap">
            {[...brands, ...brands].map((brand, i) => (
              <span
                key={`${brand}-${i}`}
                className="text-sm font-semibold flex-shrink-0 flex items-center gap-3"
                style={{ color: 'var(--color-text-muted)' }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: 'var(--color-primary)' }}
                />
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2">
        <span className="text-xs" style={{ color: 'var(--color-text-muted)' }}>Scroll to explore</span>
        <ChevronDown
          size={20}
          style={{ color: 'var(--color-primary)', animation: 'float 2s ease-in-out infinite' }}
        />
      </div>
    </section>
  );
}
