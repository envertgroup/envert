// src/components/TestimonialCarousel.jsx
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { testimonials } from '../data/testimonials';

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const timerRef = useRef(null);

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setCurrent(c => (c + 1) % testimonials.length);
    }, 4500);
  };

  useEffect(() => {
    if (isAutoPlay) startTimer();
    return () => clearInterval(timerRef.current);
  }, [isAutoPlay]);

  const go = (dir) => {
    clearInterval(timerRef.current);
    setCurrent(c => (c + dir + testimonials.length) % testimonials.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 8000);
  };

  const t = testimonials[current];

  return (
    <section className="py-24" style={{ background: 'var(--color-bg)' }}>
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="badge badge-primary mb-4">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--color-text-primary)' }}>
            Trusted by <span className="gradient-text">multiple clients over India</span>
          </h2>
        </div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto">
          <div
            className="glass-card p-8 md:p-12 relative overflow-hidden"
            style={{ minHeight: 280 }}
          >
            {/* Quote icon */}
            <div className="absolute top-6 right-8 opacity-10">
              <Quote size={80} style={{ color: 'var(--color-primary)' }} />
            </div>

            <div
              key={current}
              style={{ animation: 'fadeIn 0.5s ease' }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>

              {/* Quote */}
              <p
                className="text-lg md:text-xl leading-relaxed mb-8 relative z-10"
                style={{ color: 'var(--color-text-primary)', fontStyle: 'italic' }}
              >
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover"
                  style={{ border: '2px solid var(--color-primary)' }}
                />
                <div>
                  <p className="font-semibold" style={{ color: 'var(--color-text-primary)' }}>{t.name}</p>
                  <p className="text-sm" style={{ color: 'var(--color-primary)' }}>{t.role}</p>
                  <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>{t.company}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => go(-1)}
              className="p-3 rounded-full transition-all duration-200"
              style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', color: 'var(--color-text-secondary)' }}
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { clearInterval(timerRef.current); setCurrent(i); setIsAutoPlay(false); }}
                  className="transition-all duration-300 rounded-full"
                  style={{
                    width: i === current ? 28 : 8,
                    height: 8,
                    background: i === current ? 'var(--color-primary)' : 'var(--color-border-strong)',
                  }}
                />
              ))}
            </div>

            <button
              onClick={() => go(1)}
              className="p-3 rounded-full transition-all duration-200"
              style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', color: 'var(--color-text-secondary)' }}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
