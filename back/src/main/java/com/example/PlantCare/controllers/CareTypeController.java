package com.example.PlantCare.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.PlantCare.daos.CareTypeDao;
import com.example.PlantCare.entities.CareType;

import java.util.List;

@RestController
@RequestMapping("/care-type")
public class CareTypeController {

    private final CareTypeDao careTypeDao;

    public CareTypeController(CareTypeDao careTypeDao) {
        this.careTypeDao = careTypeDao;
    }

    // Récupérer tous les types de soins
    @GetMapping
    public ResponseEntity<List<CareType>> getAllCareTypes() {
        return ResponseEntity.ok(careTypeDao.findAll());
    }

    // Récupérer un type de soin par son ID
    @GetMapping("/{id}")
    public ResponseEntity<CareType> getCareTypeById(@PathVariable Long id) {
        try {
            CareType careType = careTypeDao.findById(id);
            return ResponseEntity.ok(careType);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    // Ajouter un nouveau type de soin
    @PostMapping
    public ResponseEntity<CareType> createCareType(@RequestBody CareType careType) {
        try {
            // Vérifier si le nom existe déjà pour éviter les doublons
            if (careTypeDao.existsByName(careType.getName())) {
                return ResponseEntity.status(HttpStatus.CONFLICT).body(null);
            }
            CareType createdCareType = careTypeDao.save(careType);
            return ResponseEntity.status(HttpStatus.CREATED).body(createdCareType);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    // Mettre à jour un type de soin
    @PutMapping("/{id}")
    public ResponseEntity<CareType> updateCareType(@PathVariable Long id, @RequestBody CareType careType) {
        try {
            CareType updatedCareType = careTypeDao.update(id, careType);
            return ResponseEntity.ok(updatedCareType);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    // Supprimer un type de soin
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCareType(@PathVariable Long id) {
        if (careTypeDao.delete(id)) {
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
