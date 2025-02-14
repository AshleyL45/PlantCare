package com.example.PlantCare.daos;

import com.example.PlantCare.entities.OrderItem;
import com.example.PlantCare.exceptions.ResourceNotFoundException; // Import
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class OrderItemDao {
    private final JdbcTemplate jdbcTemplate;

    public OrderItemDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    // Convertir une ligne SQL en objet OrderItem
    private final RowMapper<OrderItem> orderItemRowMapper = (rs, rowNum) -> new OrderItem(
            rs.getLong("order_id"),
            rs.getLong("product_id"),
            rs.getInt("quantity"),
            rs.getBigDecimal("price")
    );

    // Ajouter un article à une commande
    public boolean addOrderItem(Long orderId, Long productId, int quantity, double price) {
        String sql = "INSERT INTO order_item (order_id, product_id, quantity, price) VALUES (?, ?, ?, ?)";
        int rowsAffected = jdbcTemplate.update(sql, orderId, productId, quantity, price);
        return rowsAffected > 0;
    }

    // Récupérer tous les articles d'une commande
    public List<OrderItem> findItemsByOrderId(Long orderId) {
        String sql = "SELECT * FROM order_item WHERE order_id = ?";
        return jdbcTemplate.query(sql, orderItemRowMapper, orderId);
    }

    // Récupérer toutes les commandes où un produit spécifique a été acheté
    public List<OrderItem> findOrdersByProductId(Long productId) {
        String sql = "SELECT * FROM order_item WHERE product_id = ?";
        return jdbcTemplate.query(sql, orderItemRowMapper, productId);
    }

    // Mettre à jour la quantité d'un article dans une commande
    public void updateOrderItemQuantity(Long orderId, Long productId, int newQuantity) {
        String sql = "UPDATE order_item SET quantity = ? WHERE order_id = ? AND product_id = ?";
        int rowsAffected = jdbcTemplate.update(sql, newQuantity, orderId, productId);

        if (rowsAffected <= 0) {
            throw new ResourceNotFoundException(
                    "Article introuvable dans la commande " + orderId + " pour le produit " + productId
            );
        }
    }

    // Supprimer un article d'une commande
    public void deleteOrderItem(Long orderId, Long productId) {
        String sql = "DELETE FROM order_item WHERE order_id = ? AND product_id = ?";
        int rowsAffected = jdbcTemplate.update(sql, orderId, productId);

        if (rowsAffected <= 0) {
            throw new ResourceNotFoundException(
                    "Aucun article trouvé pour la commande " + orderId + " avec le produit " + productId
            );
        }
    }

    // Vérifier si un article existe dans une commande
    public boolean exists(Long orderId, Long productId) {
        String sql = "SELECT COUNT(*) FROM order_item WHERE order_id = ? AND product_id = ?";
        Integer count = jdbcTemplate.queryForObject(sql, Integer.class, orderId, productId);
        return count != null && count > 0;
    }

    // Récupérer le total d'une commande (somme des prix * quantité)
    public double getOrderTotal(Long orderId) {
        String sql = "SELECT SUM(quantity * price) FROM order_item WHERE order_id = ?";
        Double total = jdbcTemplate.queryForObject(sql, Double.class, orderId);
        return total != null ? total : 0.0;
    }
}
