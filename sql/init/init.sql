CREATE TABLE IF NOT EXISTS "users"(
    id VARCHAR(36) PRIMARY KEY NOT NULL,
    user_name VARCHAR(16) NOT NULL,
    user_password VARCHAR(16) NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    is_deleted BOOLEAN NOT NULL,
);