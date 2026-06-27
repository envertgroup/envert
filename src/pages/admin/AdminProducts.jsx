// src/pages/admin/AdminProducts.jsx
import { Plus, Edit2, Trash2 } from 'lucide-react';
import { products } from '../../data/products';

export default function AdminProducts() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold" style={{ color: 'var(--color-text-primary)' }}>Products</h2>
          <p className="text-sm mt-1" style={{ color: 'var(--color-text-secondary)' }}>Manage your vehicle inventory and accessories.</p>
        </div>
        <button className="btn-primary py-2 px-4 flex items-center gap-2 text-sm">
          <Plus size={16} /> Add Product
        </button>
      </div>

      <div className="glass-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr style={{ background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid var(--color-border)' }}>
                <th className="p-4 text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--color-text-muted)' }}>Name</th>
                <th className="p-4 text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--color-text-muted)' }}>Category</th>
                <th className="p-4 text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--color-text-muted)' }}>Price</th>
                <th className="p-4 text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--color-text-muted)' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p, i) => (
                <tr key={p.id} style={{ borderBottom: i !== products.length - 1 ? '1px solid var(--color-border)' : 'none' }}>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg overflow-hidden bg-gray-800 flex-shrink-0">
                        <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                      </div>
                      <span className="font-semibold text-sm" style={{ color: 'var(--color-text-primary)' }}>{p.name}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="px-2 py-1 rounded-md text-xs font-medium" style={{ background: 'var(--color-surface)', color: 'var(--color-text-secondary)', border: '1px solid var(--color-border)' }}>
                      {p.category}
                    </span>
                  </td>
                  <td className="p-4 text-sm font-medium" style={{ color: 'var(--color-text-primary)' }}>
                    ₹{p.price.toLocaleString()}
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 rounded-lg hover:bg-white/5 transition-colors" style={{ color: 'var(--color-text-secondary)' }}>
                        <Edit2 size={16} />
                      </button>
                      <button className="p-2 rounded-lg hover:bg-red-500/10 transition-colors text-red-500">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
