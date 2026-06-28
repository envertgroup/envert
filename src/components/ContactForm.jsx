import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Send, CheckCircle } from 'lucide-react';

const interests = [
  '2-Wheeler', '3-Wheeler / Auto',
  'Charging Infrastructure', 'Battery Solutions', 'Fleet Electrification',
  'Solar Integration', 'Software / Telematics', 'Consultancy',
];

export default function ContactForm() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const queryInterest = queryParams.get('interest');
  
  // Clean interest string if it has spaces or specific format
  const initialInterest = interests.includes(queryInterest) ? queryInterest : '';

  const [form, setForm] = useState({
    name: '', email: '', phone: '', company: '', interest: initialInterest, message: '',
    botcheck: false
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setForm({ ...form, [e.target.name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Honeypot check
    if (form.botcheck) {
      console.warn('Bot detected via honeypot.');
      setSubmitted(true);
      return;
    }

    // 2. Client-side Rate Limiting (Cooldown & Cap)
    const now = Date.now();
    const lastSubmit = localStorage.getItem('envert_last_submit');
    const submitHistory = JSON.parse(localStorage.getItem('envert_submit_history') || '[]');

    // Check last submission (2-minute cooldown)
    if (lastSubmit && now - parseInt(lastSubmit) < 120000) {
      alert('Please wait at least 2 minutes before sending another message.');
      return;
    }

    // Check hourly limit (max 3 submissions per hour)
    const oneHourAgo = now - 3600000;
    const recentSubmissions = submitHistory.filter(timestamp => timestamp > oneHourAgo);
    if (recentSubmissions.length >= 3) {
      alert('You have reached the maximum number of submissions for this hour. Please try again later.');
      return;
    }

    // 3. hCaptcha Check
    const hcaptchaResponse = window.hcaptcha ? window.hcaptcha.getResponse() : '';
    if (!hcaptchaResponse) {
      alert('Please check the hCaptcha box to verify you are not a bot.');
      return;
    }

    setLoading(true);
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: form.name,
          email: form.email,
          phone: form.phone,
          company: form.company,
          interest: form.interest,
          message: form.message,
          "h-captcha-response": hcaptchaResponse,
          from_name: 'EnVERT Website Contact Form',
          subject: `New Lead: ${form.name} (${form.interest || 'General Inquiry'})`,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        // Save submission history for rate limiting
        localStorage.setItem('envert_last_submit', now.toString());
        recentSubmissions.push(now);
        localStorage.setItem('envert_submit_history', JSON.stringify(recentSubmissions));

        setForm({
          name: '', email: '', phone: '', company: '', interest: '', message: '',
          botcheck: false
        });

        // Reset hCaptcha Widget
        if (window.hcaptcha) {
          window.hcaptcha.reset();
        }
      } else {
        alert(result.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('An error occurred. Please check your internet connection and try again.');
    } finally {
      setLoading(false);
    }
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
          Our team will get back to you within 24 hours. Thank you for reaching out to EnVERT!
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
      {/* Honeypot field for bot check */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        style={{ display: 'none' }}
        checked={form.botcheck}
        onChange={handleChange}
      />

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
            placeholder="+91 70039 42199"
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

      {/* hCaptcha Checkbox Container */}
      <div className="flex justify-center p-3 rounded-xl border border-dashed" style={{ borderColor: 'var(--color-border)', background: 'rgba(255,255,255,0.01)' }}>
        <div
          className="h-captcha"
          data-sitekey={import.meta.env.VITE_HCAPTCHA_SITE_KEY || "YOUR_HCAPTCHA_SITE_KEY_HERE"}
          data-theme="dark"
        ></div>
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
