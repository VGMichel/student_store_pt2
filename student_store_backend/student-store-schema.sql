CREATE TABLE users (
  id          SERIAL PRIMARY KEY,
  name        TEXT,
  password    TEXT NOT NULL,
  username    TEXT NOT NULL UNIQUE,
  email       TEXT NOT NULL UNIQUE CHECK (POSITION('@' IN email) > 1),
  is_admin    BOOLEAN NOT NULL DEFAULT FALSE,
  created_at  TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE products (
  id                SERIAL PRIMARY KEY,
  name              TEXT NOT NULL,
  category          TEXT NOT NULL,
  image             TEXT NOT NULL,
  description       TEXT NOT NULL,
  price             BIGINT
);


CREATE TABLE orders (
  id                SERIAL PRIMARY KEY,
 FOREIGN KEY       (customer_id) REFERENCES users(id) ON DELETE CASCADE,
  created_at        TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE order_details (
  FOREIGN KEY       (orders_id) REFERENCES orders(id) ON DELETE CASCADE,
  FOREIGN KEY       (products_id) REFERENCES products(id) ON DELETE CASCADE,
  quantity          INT DEFAULT 1,
  discount          INT NULL,
  PRIMARY KEY       (order_id, product_id)
);
