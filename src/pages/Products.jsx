// src/pages/Products.jsx
import { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import ProductCard from '../components/ProductCard';
import SectionTitle from '../components/SectionTitle';
import { products, categories } from '../data/products';

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    return products.filter(p => {
      const matchCat = activeCategory === 'All' || p.category === activeCategory;
      const matchSearch = !search || p.name.toLowerCase().includes(search.toLowerCase()) || p.subcategory.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [activeCategory, search]);

  return (
    <>
      <SEO 
        title="EV Products & Catalog — EnVERT" 
        description="Browse EnVERT's collection of electric vehicles including electric bicycles, electric scooters, high-speed electric autos, and cargo trikes."
        keywords="electric vehicles, electric scooters, electric auto, electric cycle, EV shop, EnVERT"
      />
      <PageHero
        badge="Vehicle Catalog"
        title="Our Complete"
        highlight="EV Lineup"
        subtitle="Browse 2-wheelers, 3-wheelers, bicycles, and EV accessories — all engineered for Indian roads."
        breadcrumbs={[{ label: 'Products' }]}
      />

      <section className="py-16" style={{ background: 'var(--color-bg)' }}>
        <div className="section-container">
          {/* Filters Bar */}
          <div className="flex flex-col md:flex-row gap-4 mb-10">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2"
                style={{ color: 'var(--color-text-muted)' }}
              />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search vehicles..."
                className="w-full pl-10 pr-4 py-3 rounded-xl text-sm outline-none"
                style={{
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-text-primary)',
                }}
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  <X size={15} />
                </button>
              )}
            </div>

            {/* Category pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200"
                  style={{
                    background: activeCategory === cat ? 'var(--gradient-primary)' : 'var(--color-surface)',
                    color: activeCategory === cat ? '#fff' : 'var(--color-text-secondary)',
                    border: activeCategory === cat ? 'none' : '1px solid var(--color-border)',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Result count */}
          <p className="text-sm mb-8" style={{ color: 'var(--color-text-muted)' }}>
            Showing <strong style={{ color: 'var(--color-text-primary)' }}>{filtered.length}</strong> vehicles
            {activeCategory !== 'All' && ` in ${activeCategory}`}
            {search && ` matching "${search}"`}
          </p>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((product, i) => (
                <ProductCard key={product.id} product={product} delay={i * 60} />
              ))}
            </div>
          ) : (
            <div className="text-center py-24">
              <p className="text-5xl mb-4">🔍</p>
              <p className="text-lg font-semibold mb-2" style={{ color: 'var(--color-text-primary)' }}>No vehicles found</p>
              <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>Try a different category or search term</p>
              <button
                onClick={() => { setActiveCategory('All'); setSearch(''); }}
                className="btn-secondary mt-6"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
