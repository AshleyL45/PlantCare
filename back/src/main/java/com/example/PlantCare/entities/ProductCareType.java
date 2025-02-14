package com.example.PlantCare.entities;

import jakarta.validation.constraints.NotNull;

public class ProductCareType {

    @NotNull(message = "L'ID du produit (productId) est obligatoire.")
    private Long productId;

    @NotNull(message = "L'ID du type de soin (careTypeId) est obligatoire.")
    private Long careTypeId;

    public ProductCareType() {
    }

    public ProductCareType(Long productId, Long careTypeId) {
        this.productId = productId;
        this.careTypeId = careTypeId;
    }

    // Getters & Setters
    public Long getProductId() {
        return productId;
    }
    public void setProductId(Long productId) {
        this.productId = productId;
    }

    public Long getCareTypeId() {
        return careTypeId;
    }
    public void setCareTypeId(Long careTypeId) {
        this.careTypeId = careTypeId;
    }
}
