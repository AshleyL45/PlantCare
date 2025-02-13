-- Création de la base de données et sélection
CREATE DATABASE IF NOT EXISTS plantCare_db;
USE plantCare_db;

-- Table des utilisateurs (User)
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);



-- Table des produits (Product) mise à jour pour correspondre au JSON
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    latin_name VARCHAR(255),
    description TEXT,
    stock INT NOT NULL,  -- Correspond au champ "quantity" du JSON
    category VARCHAR(100),
    rating INT,
    size VARCHAR(50),
    pet_friendly BOOLEAN,
    image VARCHAR(500),
    price DECIMAL(10,2) NOT NULL,
    CHECK (stock >= 0)
);

-- Table listant les types de soins (care_type)
CREATE TABLE care_types (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE
);

-- Table de liaison entre la table products et care_types (relation plusieurs-à-plusieurs)
CREATE TABLE product_care_types (
    product_id INT NOT NULL,
    care_type_id INT NOT NULL,
    PRIMARY KEY (product_id, care_type_id),
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE,
    FOREIGN KEY (care_type_id) REFERENCES care_types(id) ON DELETE CASCADE
);

-- Table des commandes (Order)
CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    total DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Table d'association entre commandes et produits (Order_Items)
CREATE TABLE order_items (
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    price DECIMAL(10,2) NOT NULL,  -- Prix du produit au moment de la commande
    PRIMARY KEY (order_id, product_id),
    FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(id)
);
