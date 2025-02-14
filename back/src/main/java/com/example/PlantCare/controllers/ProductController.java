package com.example.PlantCare.controllers;

import com.example.PlantCare.daos.ProductDao;
import com.example.PlantCare.entities.Product;
import com.example.PlantCare.exceptions.ResourceNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/product")
public class ProductController {

    private final ProductDao productDao;

    public ProductController(ProductDao productDao) {
        this.productDao = productDao;
    }

    // Récupérer tous les produits
    @GetMapping
    public ResponseEntity<List<Product>> getAllProduct() {
        return ResponseEntity.ok(productDao.findAll());
    }

    // Récupérer un produit par son ID
    @GetMapping("/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable Long id) {
        Product product = productDao.findById(id);
        return ResponseEntity.ok(product);
    }

    // Ajouter un nouveau produit
    @PostMapping
    public ResponseEntity<Product> createProduct(@RequestBody Product product) {
        Product createdProduct = productDao.save(product);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdProduct);
    }

    // Mettre à jour un produit
    @PutMapping("/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable Long id, @RequestBody Product product) {
        Product updatedProduct = productDao.update(id, product);
        return ResponseEntity.ok(updatedProduct);
    }

    // Supprimer un produit
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable Long id) {
        boolean deleted = productDao.delete(id);
        if (deleted) {
            return ResponseEntity.noContent().build();
        } else {
            // On lève directement l'exception
            throw new ResourceNotFoundException("Produit avec l'ID " + id + " n'existe pas et ne peut pas être supprimé.");
        }
    }

    // Récupérer les produits par catégorie
    @GetMapping("/category/{category}")
    public ResponseEntity<List<Product>> getProductByCategory(@PathVariable String category) {
        return ResponseEntity.ok(productDao.findByCategory(category));
    }

    // Recherche de produits par mot-clé (nom ou description)
    @GetMapping("/search")
    public ResponseEntity<List<Product>> searchProduct(@RequestParam String keyword) {
        return ResponseEntity.ok(productDao.searchByKeyword(keyword));
    }

    // Trier les produits par prix
    @GetMapping("/sort")
    public ResponseEntity<List<Product>> sortProductByPrice(@RequestParam(defaultValue = "true") boolean ascending) {
        return ResponseEntity.ok(productDao.findAllSortedByPrice(ascending));
    }

    // Récupérer les produits en stock uniquement
    @GetMapping("/available")
    public ResponseEntity<List<Product>> getAvailableProduct() {
        return ResponseEntity.ok(productDao.findAvailableProduct());
    }

    // Mettre à jour le stock après une commande
    @PutMapping("/{id}/update-stock")
    public ResponseEntity<String> updateStock(@PathVariable Long id, @RequestParam int quantitySold) {
        boolean success = productDao.updateStock(id, quantitySold);
        if (success) {
            return ResponseEntity.ok("Stock mis à jour avec succès.");
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("Stock insuffisant ou produit introuvable.");
        }
    }
}
