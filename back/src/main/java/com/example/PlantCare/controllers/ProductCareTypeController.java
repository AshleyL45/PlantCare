package com.example.PlantCare.controllers;

import com.example.PlantCare.daos.ProductCareTypeDao;
import com.example.PlantCare.entities.ProductCareType;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/product-care")
public class ProductCareTypeController {

    private final ProductCareTypeDao productCareTypeDao;

    public ProductCareTypeController(ProductCareTypeDao productCareTypeDao) {
        this.productCareTypeDao = productCareTypeDao;
    }

    // Récupérer tous les types de soins associés à un produit
    @GetMapping("/product/{productId}")
    public ResponseEntity<List<ProductCareType>> getCareTypesByProduct(@PathVariable Long productId) {
        return ResponseEntity.ok(productCareTypeDao.findCareTypesByProductId(productId));
    }

    // Récupérer tous les produits nécessitant un type de soin spécifique
    @GetMapping("/care-type/{careTypeId}")
    public ResponseEntity<List<ProductCareType>> getProductsByCareType(@PathVariable Long careTypeId) {
        return ResponseEntity.ok(productCareTypeDao.findProductsByCareTypeId(careTypeId));
    }

    // Associer un type de soin à un produit

    @PostMapping
    public ResponseEntity<String> addCareTypeToProduct(@RequestBody ProductCareType productCareType) {
        if (productCareTypeDao.exists(productCareType.getProductId(), productCareType.getCareTypeId())) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Cette association existe déjà.");
        }

        // On appelle la méthode Dao qui lève une exception si productId ou careTypeId sont introuvables
        productCareTypeDao.addCareTypeToProduct(productCareType.getProductId(), productCareType.getCareTypeId());
        return ResponseEntity.status(HttpStatus.CREATED).body("Association ajoutée avec succès.");
    }

    // Supprimer un type de soin associé à un produit
    @DeleteMapping
    public ResponseEntity<String> removeCareTypeFromProduct(@RequestBody ProductCareType productCareType) {
        productCareTypeDao.removeCareTypeFromProduct(productCareType.getProductId(), productCareType.getCareTypeId());
        return ResponseEntity.ok("Association supprimée avec succès.");
    }
}
