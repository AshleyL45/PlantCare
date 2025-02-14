package com.example.PlantCare.entities;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;

import java.math.BigDecimal;

public class OrderItem {

    @NotNull(message = "L'ID de la commande (orderId) est obligatoire.")
    private Long orderId;

    @NotNull(message = "L'ID du produit (productId) est obligatoire.")
    private Long productId;

    @Min(value = 1, message = "La quantité (quantity) doit être d'au moins 1.")
    private int quantity;

    @NotNull(message = "Le prix (price) est obligatoire.")
    @PositiveOrZero(message = "Le prix (price) doit être un nombre positif ou zéro.")
    private BigDecimal price;

    public OrderItem() {
    }

    public OrderItem(Long orderId, Long productId, int quantity, BigDecimal price) {
        this.orderId = orderId;
        this.productId = productId;
        this.quantity = quantity;
        this.price = price;
    }

    // Getters & Setters
    public Long getOrderId() {
        return orderId;
    }
    public void setOrderId(Long orderId) {
        this.orderId = orderId;
    }

    public Long getProductId() {
        return productId;
    }
    public void setProductId(Long productId) {
        this.productId = productId;
    }

    public int getQuantity() {
        return quantity;
    }
    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public BigDecimal getPrice() {
        return price;
    }
    public void setPrice(BigDecimal price) {
        this.price = price;
    }
}
