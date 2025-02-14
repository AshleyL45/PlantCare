package com.example.PlantCare.controllers;

import com.example.PlantCare.daos.CareTypeDao;
import com.example.PlantCare.entities.CareType;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
        CareType careType = careTypeDao.findById(id);
        return ResponseEntity.ok(careType);
    }

    // Ajouter un nouveau type de soin
    @PostMapping
    public ResponseEntity<CareType> createCareType(@RequestBody CareType careType) {
        if (careTypeDao.existsByName(careType.getName())) {
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }
        CareType createdCareType = careTypeDao.save(careType);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdCareType);
    }

    // Mettre à jour un type de soin
    @PutMapping("/{id}")
    public ResponseEntity<CareType> updateCareType(@PathVariable Long id, @RequestBody CareType careType) {
        CareType updatedCareType = careTypeDao.update(id, careType);
        return ResponseEntity.ok(updatedCareType);
    }

    // Supprimer un type de soin
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCareType(@PathVariable Long id) {
        boolean deleted = careTypeDao.delete(id);
        if (deleted) {
            return ResponseEntity.noContent().build();
        } else {
            throw new com.example.PlantCare.exceptions.ResourceNotFoundException(
                    "CareType avec l'ID " + id + " n'existe pas et ne peut pas être supprimé."
            );

        }
    }
}
