// src/data/services.js
export const services = [
  // Charging & Infrastructure
  {
    id: 'svc1',
    title: 'Home Charging Setup',
    category: 'Charging',
    description: 'Complete home charging installation service. Our certified technicians handle wiring, mounting, and commissioning of your home charger.',
    icon: 'Home',
    features: ['Site survey & assessment', 'Type 2 & CCS installation', '1-year maintenance warranty', 'App-connected smart charger'],
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&h=400&fit=crop',
  },
  {
    id: 'svc2',
    title: 'Commercial Charging Hub',
    category: 'Charging',
    description: 'End-to-end design, supply, and installation of multi-point commercial EV charging hubs for malls, hotels, and offices.',
    icon: 'Building2',
    features: ['Up to 150kW DC fast chargers', 'OCPP-compliant management', 'Real-time monitoring', 'Revenue sharing model'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
  },

  // Maintenance
  {
    id: 'svc3',
    title: 'Scheduled EV Servicing',
    category: 'Maintenance',
    description: 'Preventive maintenance and health checks for all Envert EVs. Our diagnostic tools identify issues before they become problems.',
    icon: 'Wrench',
    features: ['Battery health diagnostic', 'Motor & controller check', 'Software updates', 'Brake & tyre inspection'],
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=600&h=400&fit=crop',
  },
  {
    id: 'svc4',
    title: 'Emergency Roadside Assist',
    category: 'Maintenance',
    description: '24/7 roadside assistance for stranded EV owners. Portable charging units, towing, and on-site repair capabilities.',
    icon: 'AlertCircle',
    features: ['24/7 helpline', 'Portable charging van', 'Towing to nearest service center', 'On-site repair for minor issues'],
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&h=400&fit=crop',
  },

  // Fleet
  {
    id: 'svc5',
    title: 'Fleet Electrification',
    category: 'Fleet',
    description: 'Complete fleet transition planning from fossil fuel to electric. We handle procurement, charging infrastructure, driver training, and operations software.',
    icon: 'Truck',
    features: ['TCO analysis & ROI modeling', 'Bulk procurement pricing', 'Charging depot planning', 'Fleet management software'],
    image: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=600&h=400&fit=crop',
  },
  {
    id: 'svc6',
    title: 'EV Leasing & Rentals',
    category: 'Fleet',
    description: 'Flexible leasing and short-term rental plans for businesses that want to go electric without heavy capital expenditure.',
    icon: 'CreditCard',
    features: ['0% down payment options', '1–5 year lease terms', 'Full maintenance included', 'Upgrade option after 2 years'],
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600&h=400&fit=crop',
  },

  // Battery
  {
    id: 'svc7',
    title: 'Battery Refurbishment',
    category: 'Battery',
    description: 'Breathe new life into degraded EV batteries. Our BMS diagnostics and cell replacement service restores up to 95% of original capacity.',
    icon: 'Battery',
    features: ['Cell-level diagnostics', 'Cell balancing & replacement', 'BMS firmware update', '12-month capacity warranty'],
    image: 'https://images.unsplash.com/photo-1504707748692-419802cf939d?w=600&h=400&fit=crop',
  },

  // Consultancy
  {
    id: 'svc8',
    title: 'EV Consultancy',
    category: 'Consultancy',
    description: 'Strategic advisory for businesses and government bodies planning EV adoption, charging infrastructure, or carbon reduction targets.',
    icon: 'LineChart',
    features: ['Carbon footprint auditing', 'Charging network planning', 'Policy & subsidy guidance', 'Techno-economic feasibility'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
  },
];

export const serviceCategories = ['All', 'Charging', 'Maintenance', 'Fleet', 'Battery', 'Consultancy'];
