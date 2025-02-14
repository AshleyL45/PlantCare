package com.example.PlantCare.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.PlantCare.daos.OrderItemDao;
import com.example.PlantCare.entities.OrderItem;

import java.util.List;

@RestController
@RequestMapping("/order-item")
public class OrderItemController {

    private final OrderItemDao orderItemDao;

    public OrderItemController(OrderItemDao orderItemDao) {
        this.orderItemDao = orderItemDao;
    }

    // Récupérer tous les articles d'une commande
    @GetMapping("/order/{orderId}")
    public ResponseEntity<List<OrderItem>> getItemsByOrderId(@PathVariable Long orderId) {
        return ResponseEntity.ok(orderItemDao.findItemsByOrderId(orderId));
    }

    // Récupérer toutes les commandes où un produit spécifique a été acheté
    @GetMapping("/product/{productId}")
    public ResponseEntity<List<OrderItem>> getOrdersByProductId(@PathVariable Long productId) {
        return ResponseEntity.ok(orderItemDao.findOrdersByProductId(productId));
    }

    // Ajouter un article à une commande
    @PostMapping
    public ResponseEntity<String> addOrderItem(@RequestBody OrderItem orderItem) {
        // On garde la logique pour les doublons (code 409 Conflict)
        if (orderItemDao.exists(orderItem.getOrderId(), orderItem.getProductId())) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Cet article est déjà dans la commande.");
        }

        boolean success = orderItemDao.addOrderItem(
                orderItem.getOrderId(),
                orderItem.getProductId(),
                orderItem.getQuantity(),
                orderItem.getPrice().doubleValue()
        );
        if (success) {
            return ResponseEntity.status(HttpStatus.CREATED).body("Article ajouté avec succès.");
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Erreur lors de l'ajout de l'article.");
        }
    }

    // Mettre à jour la quantité d'un article dans une commande
    @PutMapping
    public ResponseEntity<String> updateOrderItemQuantity(@RequestBody OrderItem orderItem) {
        // Plus de `if/else` sur le "success".
        // Si l'article n'existe pas, `OrderItemDao.updateOrderItemQuantity` lèvera ResourceNotFoundException
        // => 404 renvoyé par GlobalExceptionHandler
        orderItemDao.updateOrderItemQuantity(
                orderItem.getOrderId(),
                orderItem.getProductId(),
                orderItem.getQuantity()
        );
        return ResponseEntity.ok("Quantité mise à jour avec succès.");
    }

    // Supprimer un article d'une commande
    @DeleteMapping
    public ResponseEntity<String> removeOrderItem(@RequestBody OrderItem orderItem) {
        // Idem, plus de `if(!success)` => lever ResourceNotFoundException dans le DAO
        orderItemDao.deleteOrderItem(orderItem.getOrderId(), orderItem.getProductId());
        return ResponseEntity.ok("Article supprimé avec succès.");
    }

    // Calculer le total d'une commande
    @GetMapping("/order/{orderId}/total")
    public ResponseEntity<Double> getOrderTotal(@PathVariable Long orderId) {
        return ResponseEntity.ok(orderItemDao.getOrderTotal(orderId));
    }
}

