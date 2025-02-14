package com.example.PlantCare.daos;

import com.example.PlantCare.entities.Order;
import com.example.PlantCare.exceptions.ResourceNotFoundException; // Import
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;
import java.sql.PreparedStatement;
import java.sql.Timestamp;
import java.util.List;

@Repository
public class OrderDao {
    private final JdbcTemplate jdbcTemplate;

    public OrderDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    private final RowMapper<Order> orderRowMapper = (rs, rowNum) -> new Order(
            rs.getLong("id"),
            rs.getLong("user_id"),
            rs.getTimestamp("order_date").toLocalDateTime(),
            rs.getBigDecimal("total")
    );

    // Récupérer toutes les commandes
    public List<Order> findAll() {
        String sql = "SELECT * FROM `order`";
        return jdbcTemplate.query(sql, orderRowMapper);
    }

    // Récupérer une commande par son ID
    public Order findById(Long id) {
        String sql = "SELECT * FROM `order` WHERE id = ?";
        return jdbcTemplate.query(sql, orderRowMapper, id)
                .stream()
                .findFirst()
                .orElseThrow(() -> new ResourceNotFoundException(
                        "Commande avec l'ID " + id + " n'existe pas."));
    }

    // Créer une nouvelle commande
    public Order save(Order order) {
        try {
            String sql = "INSERT INTO `order` (user_id, total) VALUES (?, ?)";
            KeyHolder keyHolder = new GeneratedKeyHolder();

            jdbcTemplate.update(connection -> {
                PreparedStatement ps = connection.prepareStatement(sql, new String[]{"id"});
                ps.setLong(1, order.getUserId());
                ps.setBigDecimal(2, order.getTotal());
                return ps;
            }, keyHolder);

            // Récupérer l'ID généré
            Long id = keyHolder.getKey().longValue();
            order.setId(id);

            return order;
        } catch (Exception e) {
            System.out.println("🚨 Erreur lors de l'insertion : " + e.getMessage());
            throw new RuntimeException("Erreur lors de la création de la commande", e);
        }
    }

    // Mettre à jour une commande existante
    public Order update(Long id, Order order) {
        if (!orderExists(id)) {
            throw new ResourceNotFoundException(
                    "Commande avec l'ID " + id + " n'existe pas et ne peut pas être mise à jour.");
        }

        String sql = "UPDATE `order` SET user_id = ?, order_date = ?, total = ? WHERE id = ?";
        int rowsAffected = jdbcTemplate.update(sql,
                order.getUserId(),
                Timestamp.valueOf(order.getOrderDate()),
                order.getTotal(),
                id
        );

        if (rowsAffected <= 0) {
            throw new ResourceNotFoundException(
                    "Échec de la mise à jour de la commande avec l'ID " + id);
        }

        return this.findById(id);
    }

    // Supprimer une commande
    public boolean delete(Long id) {
        String sql = "DELETE FROM `order` WHERE id = ?";
        int rowsAffected = jdbcTemplate.update(sql, id);
        return rowsAffected > 0;
    }

    // Vérifier si une commande existe
    private boolean orderExists(Long id) {
        String checkSql = "SELECT COUNT(*) FROM `order` WHERE id = ?";
        int count = jdbcTemplate.queryForObject(checkSql, Integer.class, id);
        return count > 0;
    }

    // Récupérer toutes les commandes d'un utilisateur
    public List<Order> findByUserId(Long userId) {
        String sql = "SELECT * FROM `order` WHERE user_id = ?";
        return jdbcTemplate.query(sql, orderRowMapper, userId);
    }

    // Récupérer les commandes récentes
    public List<Order> findRecentOrders(int limit) {
        String sql = "SELECT * FROM `order` ORDER BY order_date DESC LIMIT ?";
        return jdbcTemplate.query(sql, orderRowMapper, limit);
    }

    // Calculer le total des commandes d'un utilisateur
    public Double getTotalSpentByUser(Long userId) {
        String sql = "SELECT SUM(total) FROM `order` WHERE user_id = ?";
        return jdbcTemplate.queryForObject(sql, Double.class, userId);
    }
}
