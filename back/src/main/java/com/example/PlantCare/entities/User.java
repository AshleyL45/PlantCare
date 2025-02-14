package com.example.PlantCare.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.time.LocalDateTime;

public class User {
    private Long id;
    private String email;

    @JsonIgnore
    private String password;

    private LocalDateTime createdAt;

    public User() {
        this.createdAt = LocalDateTime.now();
    }

    public User(Long id, String email, String password, LocalDateTime createdAt) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.createdAt = createdAt;
    }

    // Getters & Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}
