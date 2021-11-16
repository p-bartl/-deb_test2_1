CREATE TABLE order_products9 (
    id SERIAL PRIMARY KEY,
    quantity INTEGER NOT NULL,
    order_id BIGINT REFERENCES orders9(id) NOT NULL,
    product_id BIGINT REFERENCES products9(id) NOT NULL
);