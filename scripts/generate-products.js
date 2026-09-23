import fs from 'fs';
import path from 'path';

// Helper for random choice
const choice = (arr) => arr[Math.floor(Math.random() * arr.length)];
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const randomFloat = (min, max, decimals = 1) => parseFloat((Math.random() * (max - min) + min).toFixed(decimals));

// Categories data
const categories = {
  'Electronics': {
    Smartphones: 10, Laptops: 8, Headphones: 8, Cameras: 5, Tablets: 5, 'Smart Watches': 5, Speakers: 5, Accessories: 4
  },
  'Fashion': {
    'T-shirts': 8, Jeans: 6, Dresses: 5, Sneakers: 5, 'Formal Shoes': 4, Bags: 4, Kurtas: 4, Watches: 4
  },
  'Home & Kitchen': {
    Cookware: 6, Furniture: 5, Bedding: 5, Appliances: 5, Decor: 5, Storage: 4
  },
  'Beauty & Personal Care': {
    Skincare: 6, Haircare: 5, Makeup: 5, Fragrances: 5, "Men's Grooming": 4
  },
  'Sports & Fitness': {
    'Gym Equipment': 5, Sportswear: 5, 'Outdoor Gear': 5, 'Yoga & Meditation': 5
  },
  'Books': {
    Fiction: 4, 'Self-Help': 3, Technical: 3, "Children's": 3, Business: 2
  },
  'Toys & Games': {
    'Board Games': 5, 'LEGO/Building': 5, 'Action Figures': 4, Educational: 3, Dolls: 3
  }
};

const brands = {
  'Electronics': ['Samsung', 'Apple', 'Sony', 'Boat', 'Noise', 'Dell', 'HP', 'Lenovo', 'Canon', 'Nikon'],
  'Fashion': ['Puma', 'Nike', 'Adidas', 'Raymond', 'FabIndia', 'Biba', 'Manyavar', 'W for Woman', 'Peter England'],
  'Home & Kitchen': ['Prestige', 'Pigeon', 'Wonderchef', 'Bombay Dyeing', 'IKEA', 'Godrej', 'Havells', 'Bajaj'],
  'Beauty & Personal Care': ['Lakme', 'Mamaearth', 'Plum', 'MCaffeine', 'Nivea', 'Loreal', 'Maybelline', 'Gillette'],
  'Sports & Fitness': ['Decathlon', 'Nivia', 'Cosco', 'Yonex', 'Puma', 'Adidas'],
  'Books': ['Penguin', 'HarperCollins', 'Rupa', 'Arihant', 'Oswaal', 'BPB'],
  'Toys & Games': ['Funskool', 'Lego', 'Mattel', 'Hasbro', 'Fisher-Price', 'Hamleys']
};

const materials = ['Plastic', 'Metal', 'Wood', 'Cotton', 'Polyester', 'Glass', 'Ceramic', 'Leather'];

let productCount = 1;
const products = [];

for (const [category, subcategories] of Object.entries(categories)) {
  for (const [subcategory, count] of Object.entries(subcategories)) {
    for (let i = 0; i < count; i++) {
      const brand = choice(brands[category]);
      const name = `${brand} Premium ${subcategory} Pro V${randomInt(1, 10)}`;
      const sku = `${category.substring(0, 4).toUpperCase()}-${brand.substring(0, 3).toUpperCase()}-${subcategory.substring(0, 3).toUpperCase()}-${productCount.toString().padStart(3, '0')}`;
      
      const description = `Experience the ultimate in quality and performance with the ${name}. Designed for the modern consumer, this product combines cutting-edge technology with elegant design. Whether you are using it for daily tasks or special occasions, it delivers unparalleled reliability. The ${brand} commitment to excellence is evident in every aspect of this item, from its durable construction to its intuitive features. Enjoy a seamless experience that enhances your lifestyle and brings convenience to your fingertips. This product has been rigorously tested to ensure it meets the highest standards of durability and performance. It is the perfect choice for anyone looking to upgrade their current setup or find a thoughtful gift for a loved one. Join millions of satisfied customers who have made ${brand} their go-to choice for premium products. Available now with fast shipping and easy returns, there has never been a better time to invest in quality. With a sleek finish and robust build, this ${subcategory.toLowerCase()} is designed to stand the test of time, providing you with years of dependable service.`;
      
      const shortDescription = `Premium ${subcategory} from ${brand}. High quality and reliable performance.`;
      
      const basePrice = randomInt(500, 50000);
      const mrp = Math.floor(basePrice * 1.2);

      const variants = [
        { size: 'Standard', color: 'Black', colorHex: '#000000', price: basePrice, mrp: mrp, stockQty: randomInt(10, 100) },
        { size: 'Large', color: 'White', colorHex: '#FFFFFF', price: basePrice + 500, mrp: mrp + 500, stockQty: randomInt(5, 50) }
      ];

      const images = Array.from({ length: 5 }, (_, idx) => ({
        url: `https://picsum.photos/seed/${sku.toLowerCase()}-${idx}/600/600`,
        alt: `${name} View ${idx + 1}`,
        isPrimary: idx === 0,
        displayOrder: idx
      }));

      products.push({
        name,
        brand,
        sku,
        description,
        shortDescription,
        category,
        subcategory,
        highlights: [
          'Premium build quality',
          'Durable materials used',
          'Sleek and modern design',
          '1 year manufacturer warranty',
          'Easy to use and maintain'
        ],
        tags: [brand.toLowerCase(), subcategory.toLowerCase(), 'premium', 'new'],
        manufacturingDetails: {
          countryOfOrigin: 'India',
          material: choice(materials),
          weight: `${randomInt(100, 2000)}g`,
          dimensions: `${randomInt(10, 100)} x ${randomInt(10, 100)} x ${randomInt(5, 50)} cm`
        },
        variants,
        images,
        rating: randomFloat(3.5, 5.0),
        reviewCount: randomInt(100, 10000),
        isFulfilledByNexmart: Math.random() > 0.3
      });
      productCount++;
    }
  }
}

const fileContent = `export const products = ${JSON.stringify(products, null, 2)};\n`;
fs.writeFileSync('/Users/janstevedaniel/Desktop/NEXMART/scripts/seed-products.ts', fileContent);
console.log('Successfully generated 200 products in seed-products.ts');
