CREATE TABLE If NOT EXISTS users9 (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    password_digest VARCHAR
);