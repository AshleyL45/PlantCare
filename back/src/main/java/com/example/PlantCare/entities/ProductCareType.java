package com.example.PlantCare.entities;

public class ProductCareType {
    private Long productId;
    private Long careTypeId;

    public ProductCareType() {
    }

    public ProductCareType(Long productId, Long careTypeId) {
        this.productId = productId;
        this.careTypeId = careTypeId;
    }

    // Getters & Setters
    public Long getProductId() { return productId; }
    public void setProductId(Long productId) { this.productId = productId; }

    public Long getCareTypeId() { return careTypeId; }
    public void setCareTypeId(Long careTypeId) { this.careTypeId = careTypeId; }
}
