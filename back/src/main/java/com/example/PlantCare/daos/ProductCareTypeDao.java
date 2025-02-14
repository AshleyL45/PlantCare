package com.example.PlantCare.daos;

import com.example.PlantCare.entities.ProductCareType;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ProductCareTypeDao {
    private final JdbcTemplate jdbcTemplate;

    public ProductCareTypeDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    // Convertir une ligne SQL en objet ProductCareType
    private final RowMapper<ProductCareType> productCareTypeRowMapper = (rs, rowNum) -> new ProductCareType(
            rs.getLong("product_id"),
            rs.getLong("care_type_id")
    );

    // Associer un type de soin à un produit
    public boolean addCareTypeToProduct(Long productId, Long careTypeId) {
        // Vérifier si le produit existe
        String checkProductSql = "SELECT COUNT(*) FROM product WHERE id = ?";
        Integer productCount = jdbcTemplate.queryForObject(checkProductSql, Integer.class, productId);

        // Vérifier si le type de soin existe
        String checkCareTypeSql = "SELECT COUNT(*) FROM care_type WHERE id = ?";
        Long careTypeCount = jdbcTemplate.queryForObject(checkCareTypeSql, Long.class, careTypeId);


        if (productCount == null || productCount == 0) {
            throw new RuntimeException("❌ Erreur : Le produit avec l'ID " + productId + " n'existe pas !");
        }
        if (careTypeCount == null || careTypeCount == 0) {
            throw new RuntimeException("❌ Erreur : Le type de soin avec l'ID " + careTypeId + " n'existe pas !");
        }

        // Insérer l'association seulement si les deux existent
        String sql = "INSERT INTO product_care_type (product_id, care_type_id) VALUES (?, ?)";
        int rowsAffected = jdbcTemplate.update(sql, productId, careTypeId);
        return rowsAffected > 0;
    }


    // Supprimer un type de soin associé à un produit
    public boolean removeCareTypeFromProduct(Long productId, Long careTypeId) {
        String sql = "DELETE FROM product_care_type WHERE product_id = ? AND care_type_id = ?";
        int rowsAffected = jdbcTemplate.update(sql, productId, careTypeId);
        return rowsAffected > 0;
    }

    // Récupérer tous les types de soins associés à un produit
    public List<ProductCareType> findCareTypesByProductId(Long productId) {
        String sql = "SELECT * FROM product_care_type WHERE product_id = ?";
        return jdbcTemplate.query(sql, productCareTypeRowMapper, productId);
    }

    // Récupérer tous les produits qui nécessitent un type de soin spécifique
    public List<ProductCareType> findProductsByCareTypeId(Long careTypeId) {
        String sql = "SELECT * FROM product_care_type WHERE care_type_id = ?";
        return jdbcTemplate.query(sql, productCareTypeRowMapper, careTypeId);
    }

    // Vérifier si un type de soin est déjà associé à un produit
    public boolean exists(Long productId, Long careTypeId) {
        String sql = "SELECT COUNT(*) FROM product_care_type WHERE product_id = ? AND care_type_id = ?";
        Integer count = jdbcTemplate.queryForObject(sql, Integer.class, productId, careTypeId);
        return count != null && count > 0;
    }
}

