package com.example.PlantCare.daos;

import com.example.PlantCare.entities.User;
import com.example.PlantCare.exceptions.ResourceNotFoundException; // Import
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public class UserDao {
    private final JdbcTemplate jdbcTemplate;

    public UserDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    private final RowMapper<User> userRowMapper = (rs, rowNum) -> new User(
            rs.getLong("id"),
            rs.getString("email"),
            rs.getString("password"),
            rs.getTimestamp("created_at") != null ? rs.getTimestamp("created_at").toLocalDateTime() : null
    );

    public List<User> findAll() {
        String sql = "SELECT * FROM user";
        return jdbcTemplate.query(sql, userRowMapper);
    }

    public User findById(Long id) {
        String sql = "SELECT * FROM user WHERE id = ?";
        return jdbcTemplate.query(sql, userRowMapper, id)
                .stream()
                .findFirst()
                .orElseThrow(() -> new ResourceNotFoundException("Utilisateur avec l'ID " + id + " n'existe pas"));
    }

    public User save(User user) {
        try {
            String sql = "INSERT INTO user (email, password) VALUES (?, ?)";
            jdbcTemplate.update(sql, user.getEmail(), user.getPassword());

            String sqlGetId = "SELECT LAST_INSERT_ID()";
            Long id = jdbcTemplate.queryForObject(sqlGetId, Long.class);

            user.setId(id);
            return user;
        } catch (Exception e) {
            System.out.println("🚨 Erreur lors de l'insertion : " + e.getMessage());
            throw new RuntimeException("Erreur lors de la création de l'utilisateur", e);
        }
    }

    public User update(Long id, User user) {
        if (!userExists(id)) {
            throw new ResourceNotFoundException("Utilisateur avec l'ID " + id + " n'existe pas et ne peut pas être mis à jour.");
        }

        String sql = "UPDATE user SET email = ?, password = ? WHERE id = ?";
        int rowsAffected = jdbcTemplate.update(sql, user.getEmail(), user.getPassword(), id);

        if (rowsAffected <= 0) {
            throw new ResourceNotFoundException("Échec de la mise à jour de l'utilisateur avec l'ID " + id);
        }

        return this.findById(id);
    }

    public boolean delete(Long id) {
        String sql = "DELETE FROM user WHERE id = ?";
        int rowsAffected = jdbcTemplate.update(sql, id);
        return rowsAffected > 0;
    }

    private boolean userExists(Long id) {
        String checkSql = "SELECT COUNT(*) FROM user WHERE id = ?";
        int count = jdbcTemplate.queryForObject(checkSql, Integer.class, id);
        return count > 0;
    }

    public boolean existsByEmail(String email) {
        String sql = "SELECT COUNT(*) FROM user WHERE email = ?";
        Integer count = jdbcTemplate.queryForObject(sql, Integer.class, email);
        return count != null && count > 0;
    }
}
