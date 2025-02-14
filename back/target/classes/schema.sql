--CREATE DATABASE IF NOT EXISTS plantCare_db;
USE plantCare_db;

CREATE TABLE IF NOT EXISTS user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE product (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    latin_name VARCHAR(255),
    description TEXT,
    stock INT NOT NULL,
    category VARCHAR(100),
    rating INT,
    size VARCHAR(50),
    pet_friendly BOOLEAN,
    image VARCHAR(500),
    price DECIMAL(10,2) NOT NULL,
    CHECK (stock >= 0)
);

CREATE TABLE care_type (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    watering VARCHAR(255),
    light_exposure VARCHAR(255),
    fertilizer VARCHAR(255)
);


CREATE TABLE product_care_type (
    product_id INT NOT NULL,
    care_type_id INT NOT NULL,
    PRIMARY KEY (product_id, care_type_id),
    FOREIGN KEY (product_id) REFERENCES product(id) ON DELETE CASCADE,
    FOREIGN KEY (care_type_id) REFERENCES care_type(id) ON DELETE CASCADE
);


CREATE TABLE order (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    total DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user(id)
);

CREATE TABLE order_item (
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    PRIMARY KEY (order_id, product_id),
    FOREIGN KEY (order_id) REFERENCES order(id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES product(id)
);




