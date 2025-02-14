package com.example.PlantCare.entities;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PastOrPresent;
import jakarta.validation.constraints.PositiveOrZero;

import java.math.BigDecimal;
import java.time.LocalDateTime;

public class Order {

    private Long id;

    @NotNull(message = "L'ID de l'utilisateur (userId) est obligatoire.")
    private Long userId;

    @PastOrPresent(message = "La date de la commande (orderDate) ne peut pas être dans le futur.")
    private LocalDateTime orderDate;

    @NotNull(message = "Le total de la commande (total) est obligatoire.")
    @PositiveOrZero(message = "Le total de la commande doit être un nombre positif ou zéro.")
    private BigDecimal total;

    public Order() {
        this.orderDate = LocalDateTime.now();
    }

    public Order(Long id, Long userId, LocalDateTime orderDate, BigDecimal total) {
        this.id = id;
        this.userId = userId;
        this.orderDate = orderDate;
        this.total = total;
    }

    // Getters & Setters
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }

    public Long getUserId() {
        return userId;
    }
    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public LocalDateTime getOrderDate() {
        return orderDate;
    }
    public void setOrderDate(LocalDateTime orderDate) {
        this.orderDate = orderDate;
    }

    public BigDecimal getTotal() {
        return total;
    }
    public void setTotal(BigDecimal total) {
        this.total = total;
    }
}
