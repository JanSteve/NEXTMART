-- Create separate databases for each service
CREATE DATABASE nexmart_auth;
CREATE DATABASE nexmart_products;
CREATE DATABASE nexmart_orders;
CREATE DATABASE nexmart_payments;
CREATE DATABASE nexmart_vendors;

-- Enable extensions on the main dev database
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";
CREATE EXTENSION IF NOT EXISTS "unaccent";
