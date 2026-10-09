CREATE TABLE IF NOT EXISTS products (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT,
  price REAL NOT NULL,
  stock INTEGER DEFAULT 0,
  image TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO products (name, category, description, price, stock, image)
VALUES
  ('Wireless Mouse', 'Electronics', 'Ergonomic wireless mouse for office work.', 899.00, 24, ''),
  ('Laptop Stand', 'Accessories', 'Portable laptop stand for better posture.', 1499.00, 18, ''),
  ('Water Bottle', 'Lifestyle', 'Insulated stainless steel bottle.', 599.00, 32, '');
