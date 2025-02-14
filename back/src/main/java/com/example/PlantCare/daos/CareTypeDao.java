package com.example.PlantCare.daos;

import com.example.PlantCare.entities.CareType;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;
import org.springframework.dao.EmptyResultDataAccessException;

import java.util.List;

@Repository
public class CareTypeDao {
    private final JdbcTemplate jdbcTemplate;

    public CareTypeDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    // Convertir une ligne SQL en objet CareType
    private final RowMapper<CareType> careTypeRowMapper = (rs, rowNum) -> new CareType(
            rs.getLong("id"),
            rs.getString("name"),
            rs.getString("watering"),
            rs.getString("light_exposure"),
            rs.getString("fertilizer")
    );

    // Récupérer tous les types de soins
    public List<CareType> findAll() {
        String sql = "SELECT * FROM care_type";
        return jdbcTemplate.query(sql, careTypeRowMapper);
    }

    // Récupérer un type de soin par son ID
    public CareType findById(Long id) {
        String sql = "SELECT * FROM care_type WHERE id = ?";
        return jdbcTemplate.query(sql, careTypeRowMapper, id)
                .stream()
                .findFirst()
                .orElseThrow(() -> new RuntimeException("CareType avec l'ID : " + id + " n'existe pas"));
    }

    // Créer un nouveau type de soin
    public CareType save(CareType careType) {
        try {
            String sql = "INSERT INTO care_type (name, watering, light_exposure, fertilizer) VALUES (?, ?, ?, ?)";
            jdbcTemplate.update(sql, careType.getName(), careType.getWatering(), careType.getLightExposure(), careType.getFertilizer());

            // Récupérer l'ID du type de soin nouvellement créé
            String sqlGetId = "SELECT LAST_INSERT_ID()";
            Long id = jdbcTemplate.queryForObject(sqlGetId, Long.class);
            careType.setId(id);
            return careType;
        } catch (Exception e) {
            System.out.println("🚨 Erreur lors de l'insertion : " + e.getMessage());
            throw new RuntimeException("Erreur lors de la création du CareType", e);
        }
    }

    // Mettre à jour un type de soin existant
    public CareType update(Long id, CareType careType) {
        if (!careTypeExists(id)) {
            throw new EmptyResultDataAccessException("CareType avec l'ID : " + id + " n'existe pas", 1);
        }

        String sql = "UPDATE care_type SET name = ?, watering = ?, light_exposure = ?, fertilizer = ? WHERE id = ?";
        int rowsAffected = jdbcTemplate.update(sql, careType.getName(), careType.getWatering(), careType.getLightExposure(), careType.getFertilizer(), id);

        if (rowsAffected <= 0) {
            throw new RuntimeException("Échec de la mise à jour du CareType avec l'ID : " + id);
        }

        return this.findById(id);
    }

    // Supprimer un type de soin
    public boolean delete(Long id) {
        String sql = "DELETE FROM care_type WHERE id = ?";
        int rowsAffected = jdbcTemplate.update(sql, id);
        return rowsAffected > 0;
    }

    // Vérifier si un type de soin existe
    private boolean careTypeExists(Long id) {
        String checkSql = "SELECT COUNT(*) FROM care_type WHERE id = ?";
        int count = jdbcTemplate.queryForObject(checkSql, Integer.class, id);
        return count > 0;
    }

    // Vérifier si un type de soin existe par son nom (éviter les doublons)
    public boolean existsByName(String name) {
        String sql = "SELECT COUNT(*) FROM care_type WHERE name = ?";
        Integer count = jdbcTemplate.queryForObject(sql, Integer.class, name);
        return count != null && count > 0;
    }
}
