CREATE TABLE orders9 (
    id SERIAL PRIMARY KEY,
    user_id BIGINT REFERENCES users9(id) NOT NULL,
    status VARCHAR NOT NULL
);