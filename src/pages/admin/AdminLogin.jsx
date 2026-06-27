// src/pages/admin/AdminLogin.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, ArrowRight, AlertCircle } from 'lucide-react';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Temporary mock login: password is "envert2026"
    if (password === 'envert2026') {
      localStorage.setItem('envert_admin_auth', 'true');
      navigate('/admin');
    } else {
      setError('Invalid admin password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6" style={{ background: 'var(--color-bg)' }}>
      <div className="w-full max-w-md glass-card p-8 text-center relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-green-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>

        <div className="relative z-10">
          <div className="w-16 h-16 rounded-2xl mx-auto flex items-center justify-center mb-6" style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)' }}>
            <Lock size={28} style={{ color: 'var(--color-primary)' }} />
          </div>
          
          <h1 className="text-2xl font-bold mb-2" style={{ color: 'var(--color-text-primary)' }}>Admin Access</h1>
          <p className="text-sm mb-8" style={{ color: 'var(--color-text-secondary)' }}>
            Enter the master password to access the Envert dashboard.
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="password"
                placeholder="Enter password..."
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError('');
                }}
                className="w-full px-4 py-3 rounded-xl outline-none transition-all text-center tracking-widest"
                style={{
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-text-primary)',
                }}
                autoFocus
              />
            </div>
            
            {error && (
              <div className="flex items-center justify-center gap-2 text-sm text-red-500 bg-red-500/10 py-2 rounded-lg">
                <AlertCircle size={14} /> {error}
              </div>
            )}

            <button type="submit" className="w-full btn-primary py-3.5 flex items-center justify-center gap-2">
              Login <ArrowRight size={16} />
            </button>
          </form>
          
          <p className="mt-6 text-xs" style={{ color: 'var(--color-text-muted)' }}>
            Hint: Use <code>envert2026</code> for testing.
          </p>
        </div>
      </div>
    </div>
  );
}
