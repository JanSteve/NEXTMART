export const users = Array.from({ length: 100 }, (_, i) => ({
  id: `USR-${i + 1}`,
  name: `Test User ${i + 1}`,
  email: `user${i + 1}@example.com`,
  role: 'USER',
  status: 'ACTIVE'
}));

export const vendors = [
  { id: 'VND-1', name: 'Vendor 1', email: 'vendor1@example.com', role: 'VENDOR', businessName: 'Tech Solutions' },
  { id: 'VND-2', name: 'Vendor 2', email: 'vendor2@example.com', role: 'VENDOR', businessName: 'Fashion Hub' },
  { id: 'VND-3', name: 'Vendor 3', email: 'vendor3@example.com', role: 'VENDOR', businessName: 'Home Essentials' },
  { id: 'VND-4', name: 'Vendor 4', email: 'vendor4@example.com', role: 'VENDOR', businessName: 'Beauty Care' },
  { id: 'VND-5', name: 'Vendor 5', email: 'vendor5@example.com', role: 'VENDOR', businessName: 'Sports World' }
];

export const admins = [
  { id: 'ADM-1', name: 'Super Admin', email: 'admin@nexmart.com', role: 'ADMIN' },
  { id: 'ADM-2', name: 'Support Admin', email: 'support@nexmart.com', role: 'ADMIN' }
];
