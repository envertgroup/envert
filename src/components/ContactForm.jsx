// src/components/ContactForm.jsx
import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const interests = [
  '2-Wheeler', '3-Wheeler / Auto', 'Electric Car', 'Electric Bus',
  'Charging Infrastructure', 'Battery Solutions', 'Fleet Electrification',
  'Solar Integration', 'Software / Telematics', 'Consultancy',
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', company: '', interest: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission (Firebase integration comes in Phase 2)
    await new Promise(r => setTimeout(r, 1200));
    setSubmitted(true);
    setLoading(false);
  };

  if (submitted) {
    return (
      <div
        className="glass-card p-12 text-center"
        style={{ animation: 'fadeIn 0.5s ease' }}
      >
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
          style={{ background: 'rgba(34,197,94,0.15)' }}
        >
          <CheckCircle size={40} style={{ color: 'var(--color-primary)' }} />
        </div>
        <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--color-text-primary)' }}>
          Message Sent!
        </h3>
        <p className="mb-6" style={{ color: 'var(--color-text-secondary)' }}>
          Our team will get back to you within 24 hours. Thank you for reaching out to Envert!
        </p>
        <button onClick={() => setSubmitted(false)} className="btn-secondary">
          Send Another
        </button>
      </div>
    );
  }

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '10px',
    background: 'var(--color-surface)',
    border: '1px solid var(--color-border)',
    color: 'var(--color-text-primary)',
    fontSize: '0.9rem',
    outline: 'none',
    transition: 'border-color 0.2s ease',
  };

  return (
    <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--color-text-secondary)' }}>
            Full Name *
          </label>
          <input
            required
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = 'var(--color-primary)')}
            onBlur={(e) => (e.target.style.borderColor = 'var(--color-border)')}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--color-text-secondary)' }}>
            Email Address *
          </label>
          <input
            required
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@company.com"
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = 'var(--color-primary)')}
            onBlur={(e) => (e.target.style.borderColor = 'var(--color-border)')}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--color-text-secondary)' }}>
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = 'var(--color-primary)')}
            onBlur={(e) => (e.target.style.borderColor = 'var(--color-border)')}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--color-text-secondary)' }}>
            Company / Organization
          </label>
          <input
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Your company name"
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = 'var(--color-primary)')}
            onBlur={(e) => (e.target.style.borderColor = 'var(--color-border)')}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--color-text-secondary)' }}>
          I'm interested in...
        </label>
        <select
          name="interest"
          value={form.interest}
          onChange={handleChange}
          style={{ ...inputStyle, cursor: 'pointer' }}
          onFocus={(e) => (e.target.style.borderColor = 'var(--color-primary)')}
          onBlur={(e) => (e.target.style.borderColor = 'var(--color-border)')}
        >
          <option value="" style={{ background: '#111827' }}>Select area of interest</option>
          {interests.map(opt => (
            <option key={opt} value={opt} style={{ background: '#111827' }}>{opt}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1.5" style={{ color: 'var(--color-text-secondary)' }}>
          Message *
        </label>
        <textarea
          required
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your requirements, fleet size, timeline, or anything else..."
          rows={5}
          style={{ ...inputStyle, resize: 'vertical' }}
          onFocus={(e) => (e.target.style.borderColor = 'var(--color-primary)')}
          onBlur={(e) => (e.target.style.borderColor = 'var(--color-border)')}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full justify-center"
        style={{ opacity: loading ? 0.7 : 1 }}
      >
        {loading ? (
          <>
            <div
              className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"
            />
            Sending...
          </>
        ) : (
          <>
            <Send size={16} />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
