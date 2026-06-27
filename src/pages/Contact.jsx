// src/pages/Contact.jsx
import { Mail, Phone, MapPin, Clock, ArrowRight } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContactForm';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const contactInfo = [
  {
    icon: Phone,
    title: 'Call Us',
    lines: ['+91 98765 43210', '+91 80000 00000 (24/7 Emergency)'],
    color: '#22c55e',
  },
  {
    icon: Mail,
    title: 'Email Us',
    lines: ['hello@envert.in', 'fleet@envert.in'],
    color: '#06b6d4',
  },
  {
    icon: MapPin,
    title: 'Head Office',
    lines: ['Plot 14, EV Nagar,', 'Electronic City, Bengaluru – 560100'],
    color: '#f59e0b',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    lines: ['Mon – Sat: 9:00 AM – 6:00 PM', 'Emergency: 24/7'],
    color: '#8b5cf6',
  },
];

export default function Contact() {
  return (
    <>
      <title>Contact Us — Envert</title>

      <PageHero
        badge="Get in Touch"
        title="Let's Build Your"
        highlight="EV Future"
        subtitle="Talk to our experts about vehicles, charging infrastructure, fleet electrification, or any EV solution. We respond within 24 hours."
        breadcrumbs={[{ label: 'Contact' }]}
      />

      {/* Contact Info Cards */}
      <section className="py-16" style={{ background: 'var(--color-bg)' }}>
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactInfo.map((info, i) => {
              const [ref, isVisible] = useScrollAnimation();
              const Icon = info.icon;
              return (
                <div
                  key={info.title}
                  ref={ref}
                  className="glass-card p-6"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
                    transition: `all 0.5s ease ${i * 80}ms`,
                    borderTop: `3px solid ${info.color}`,
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: `${info.color}15` }}
                  >
                    <Icon size={20} style={{ color: info.color }} />
                  </div>
                  <h3 className="font-bold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                    {info.title}
                  </h3>
                  {info.lines.map((line) => (
                    <p key={line} className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                      {line}
                    </p>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-16" style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <div>
              <SectionTitle
                badge="Send a Message"
                title="Tell Us About"
                highlight="Your Needs"
                subtitle="Fill in the form and our team will reach out within one business day."
                center={false}
              />
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            {/* Map + Office Info */}
            <div className="space-y-6">
              {/* Map embed */}
              <div
                className="rounded-2xl overflow-hidden"
                style={{ border: '1px solid var(--color-border)', height: 320 }}
              >
                <iframe
                  title="Envert Head Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15556.327!2d77.6563!3d12.8448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6b7c0d0b0001%3A0xabcdef!2sElectronic%20City%2C%20Bengaluru!5e0!3m2!1sen!2sin!4v1690000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Regional offices */}
              <div className="glass-card p-6">
                <h3 className="font-bold mb-4" style={{ color: 'var(--color-text-primary)' }}>
                  Regional Offices
                </h3>
                <div className="space-y-4">
                  {[
                    { city: 'Mumbai', addr: 'Andheri East, Mumbai – 400069' },
                    { city: 'Delhi NCR', addr: 'Sector 18, Noida – 201301' },
                    { city: 'Hyderabad', addr: 'Hitech City, Hyderabad – 500081' },
                    { city: 'Chennai', addr: 'OMR Road, Chennai – 600119' },
                  ].map((office) => (
                    <div
                      key={office.city}
                      className="flex items-start gap-3 py-3"
                      style={{ borderBottom: '1px solid var(--color-border)' }}
                    >
                      <MapPin size={16} className="flex-shrink-0 mt-0.5" style={{ color: 'var(--color-primary)' }} />
                      <div>
                        <p className="text-sm font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                          {office.city}
                        </p>
                        <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
                          {office.addr}
                        </p>
                      </div>
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
