package com.example.PlantCare.daos;

import com.example.PlantCare.entities.Product;
import com.example.PlantCare.exceptions.ResourceNotFoundException;  // CHANGEMENT
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;
import org.springframework.dao.EmptyResultDataAccessException;

import java.util.List;

@Repository
public class ProductDao {
    private final JdbcTemplate jdbcTemplate;

    public ProductDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    private final RowMapper<Product> productRowMapper = (rs, rowNum) -> new Product(
            rs.getLong("id"),
            rs.getString("name"),
            rs.getString("latin_name"),
            rs.getString("description"),
            rs.getInt("stock"),
            rs.getString("category"),
            rs.getInt("rating"),
            rs.getString("size"),
            rs.getBoolean("pet_friendly"),
            rs.getString("image"),
            rs.getBigDecimal("price")
    );

    // Récupérer tous les produits
    public List<Product> findAll() {
        String sql = "SELECT * FROM product";
        return jdbcTemplate.query(sql, productRowMapper);
    }

    // Récupérer un produit par son ID
    public Product findById(Long id) {
        String sql = "SELECT * FROM product WHERE id = ?";
        return jdbcTemplate.query(sql, productRowMapper, id)
                .stream()
                .findFirst()
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Produit avec l'ID " + id + " n'existe pas"));
    }

    // Insérer un nouveau produit
    public Product save(Product product) {
        try {
            String sql = "INSERT INTO product (name, latin_name, description, stock, category, rating, " +
                    "size, pet_friendly, image, price) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
            jdbcTemplate.update(sql,
                    product.getName(),
                    product.getLatinName(),
                    product.getDescription(),
                    product.getStock(),
                    product.getCategory(),
                    product.getRating(),
                    product.getSize(),
                    product.isPetFriendly(),
                    product.getImage(),
                    product.getPrice()
            );

            // Récupérer l'ID généré
            String sqlGetId = "SELECT LAST_INSERT_ID()";
            Long id = jdbcTemplate.queryForObject(sqlGetId, Long.class);
            product.setId(id);
            return product;
        } catch (Exception e) {
            System.out.println("🚨 Erreur lors de l'insertion : " + e.getMessage());
            throw new RuntimeException("Erreur lors de la création du produit", e);
        }
    }

    // Mettre à jour un produit existant
    public Product update(Long id, Product product) {
        if (!productExists(id)) {
            throw new ResourceNotFoundException(
                    "Produit avec l'ID " + id + " n'existe pas et ne peut donc être mis à jour.");
        }

        String sql = "UPDATE product SET name = ?, latin_name = ?, description = ?, stock = ?, category = ?, " +
                "rating = ?, size = ?, pet_friendly = ?, image = ?, price = ? WHERE id = ?";
        int rowsAffected = jdbcTemplate.update(sql,
                product.getName(),
                product.getLatinName(),
                product.getDescription(),
                product.getStock(),
                product.getCategory(),
                product.getRating(),
                product.getSize(),
                product.isPetFriendly(),
                product.getImage(),
                product.getPrice(),
                id
        );

        if (rowsAffected <= 0) {
            throw new ResourceNotFoundException(
                    "Échec de la mise à jour du produit avec l'ID " + id);
        }

        return this.findById(id);
    }

    // Supprimer un produit
    public boolean delete(Long id) {
        String sql = "DELETE FROM product WHERE id = ?";
        int rowsAffected = jdbcTemplate.update(sql, id);
        return rowsAffected > 0;
    }

    // Vérifier si un produit existe en base de données par son ID
    private boolean productExists(Long id) {
        String checkSql = "SELECT COUNT(*) FROM product WHERE id = ?";
        int count = jdbcTemplate.queryForObject(checkSql, Integer.class, id);
        return count > 0;
    }

    // Recherche par catégorie
    public List<Product> findByCategory(String category) {
        String sql = "SELECT * FROM product WHERE category = ?";
        return jdbcTemplate.query(sql, productRowMapper, category);
    }

    // Recherche par mot-clé
    public List<Product> searchByKeyword(String keyword) {
        String sql = "SELECT * FROM product WHERE name LIKE ? OR description LIKE ?";
        String searchPattern = "%" + keyword + "%";
        return jdbcTemplate.query(sql, productRowMapper, searchPattern, searchPattern);
    }

    // Tri par prix
    public List<Product> findAllSortedByPrice(boolean ascending) {
        String order = ascending ? "ASC" : "DESC";
        String sql = "SELECT * FROM product ORDER BY price " + order;
        return jdbcTemplate.query(sql, productRowMapper);
    }

    // Produits en stock
    public List<Product> findAvailableProduct() {
        String sql = "SELECT * FROM product WHERE stock > 0";
        return jdbcTemplate.query(sql, productRowMapper);
    }

    // Mettre à jour le stock
    public boolean updateStock(Long id, int quantitySold) {
        String sql = "UPDATE product SET stock = stock - ? WHERE id = ? AND stock >= ?";
        int rowsAffected = jdbcTemplate.update(sql, quantitySold, id, quantitySold);
        return rowsAffected > 0;
    }
}

