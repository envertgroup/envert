// src/pages/admin/AdminDashboard.jsx
import { Package, Wrench, MessageSquare, Eye } from 'lucide-react';
import { products } from '../../data/products';
import { services } from '../../data/services';
import { testimonials } from '../../data/testimonials';

export default function AdminDashboard() {
  const stats = [
    { label: 'Total Products', value: products.length, icon: Package, color: '#22c55e' },
    { label: 'Active Services', value: services.length, icon: Wrench, color: '#06b6d4' },
    { label: 'Testimonials', value: testimonials.length, icon: MessageSquare, color: '#f59e0b' },
    { label: 'Page Views', value: '12,450', icon: Eye, color: '#8b5cf6' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold" style={{ color: 'var(--color-text-primary)' }}>Welcome back, Admin</h2>
        <p className="text-sm mt-1" style={{ color: 'var(--color-text-secondary)' }}>Here is an overview of your platform today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map(s => {
          const Icon = s.icon;
          return (
            <div key={s.label} className="glass-card p-6" style={{ borderTop: `3px solid ${s.color}` }}>
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: `${s.color}15` }}>
                  <Icon size={20} style={{ color: s.color }} />
                </div>
              </div>
              <div>
                <p className="text-3xl font-black mb-1" style={{ color: 'var(--color-text-primary)' }}>{s.value}</p>
                <p className="text-xs font-medium uppercase tracking-wider" style={{ color: 'var(--color-text-muted)' }}>{s.label}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="glass-card p-8 text-center mt-8">
        <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Wrench size={30} className="text-blue-500" />
        </div>
        <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>Firebase Integration Pending</h3>
        <p className="text-sm max-w-md mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
          Currently, the admin panel uses local mock data. In Phase 2, this will be connected to Firebase Firestore for real-time CRUD operations.
        </p>
      </div>
    </div>
  );
}
