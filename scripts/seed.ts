import { products } from './seed-products';
import { users, vendors, admins } from './seed-users';

async function seed() {
  console.log(`Seeding database...`);
  console.log(`Found ${products.length} products`);
  console.log(`Found ${users.length} users`);
  console.log(`Found ${vendors.length} vendors`);
  console.log(`Found ${admins.length} admins`);
  
  // Implementation of actual DB inserts would go here
  console.log('Seeding complete!');
}

seed().catch(console.error);
