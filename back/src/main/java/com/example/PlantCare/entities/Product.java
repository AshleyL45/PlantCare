package com.example.PlantCare.entities;

import java.math.BigDecimal;

public class Product {
    private Long id;
    private String name;
    private String latinName;
    private String description;
    private int stock;
    private String category;
    private int rating;
    private String size;
    private boolean petFriendly;
    private String image;
    private BigDecimal price;

    public Product() {
    }

    public Product(Long id, String name, String latinName, String description, int stock, String category,
                   int rating, String size, boolean petFriendly, String image, BigDecimal price) {
        this.id = id;
        this.name = name;
        this.latinName = latinName;
        this.description = description;
        this.stock = stock;
        this.category = category;
        this.rating = rating;
        this.size = size;
        this.petFriendly = petFriendly;
        this.image = image;
        this.price = price;
    }

    // Getters & Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getLatinName() { return latinName; }
    public void setLatinName(String latinName) { this.latinName = latinName; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public int getStock() { return stock; }
    public void setStock(int stock) { this.stock = stock; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public int getRating() { return rating; }
    public void setRating(int rating) { this.rating = rating; }

    public String getSize() { return size; }
    public void setSize(String size) { this.size = size; }

    public boolean isPetFriendly() { return petFriendly; }
    public void setPetFriendly(boolean petFriendly) { this.petFriendly = petFriendly; }

    public String getImage() { return image; }
    public void setImage(String image) { this.image = image; }

    public BigDecimal getPrice() { return price; }
    public void setPrice(BigDecimal price) { this.price = price; }
}
