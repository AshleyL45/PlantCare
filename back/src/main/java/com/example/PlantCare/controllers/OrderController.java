package com.example.PlantCare.controllers;

import com.example.PlantCare.daos.OrderDao;
import com.example.PlantCare.entities.Order;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/order")
public class OrderController {

    private final OrderDao orderDao;

    public OrderController(OrderDao orderDao) {
        this.orderDao = orderDao;
    }

    // Récupérer toutes les commandes
    @GetMapping
    public ResponseEntity<List<Order>> getAllOrders() {
        return ResponseEntity.ok(orderDao.findAll());
    }

    // Récupérer une commande par son ID
    @GetMapping("/{id}")
    public ResponseEntity<Order> getOrderById(@PathVariable Long id) {
        Order order = orderDao.findById(id);
        return ResponseEntity.ok(order);
    }

    // Créer une nouvelle commande
    @PostMapping
    public ResponseEntity<Order> createOrder(@RequestBody Order order) {
        Order createdOrder = orderDao.save(order);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdOrder);
    }

    // Mettre à jour une commande existante
    @PutMapping("/{id}")
    public ResponseEntity<Order> updateOrder(@PathVariable Long id, @RequestBody Order order) {
        Order updatedOrder = orderDao.update(id, order);
        return ResponseEntity.ok(updatedOrder);
    }

    // Supprimer une commande
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteOrder(@PathVariable Long id) {
        boolean deleted = orderDao.delete(id);
        if (deleted) {
            return ResponseEntity.noContent().build(); // 204
        } else {
            throw new com.example.PlantCare.exceptions.ResourceNotFoundException(
                    "Commande avec l'ID " + id + " n'existe pas et ne peut pas être supprimée."
            );
        }
    }

    // Récupérer toutes les commandes d'un utilisateur
    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Order>> getOrdersByUserId(@PathVariable Long userId) {
        return ResponseEntity.ok(orderDao.findByUserId(userId));
    }

    // Récupérer les commandes récentes
    @GetMapping("/recent")
    public ResponseEntity<List<Order>> getRecentOrders(@RequestParam(defaultValue = "5") int limit) {
        return ResponseEntity.ok(orderDao.findRecentOrders(limit));
    }

    // Calculer le total des commandes d'un utilisateur
    @GetMapping("/user/{userId}/total-spent")
    public ResponseEntity<Double> getTotalSpentByUser(@PathVariable Long userId) {
        return ResponseEntity.ok(orderDao.getTotalSpentByUser(userId));
    }
}
