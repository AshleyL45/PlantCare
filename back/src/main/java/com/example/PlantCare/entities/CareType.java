package com.example.PlantCare.entities;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class CareType {

    private Long id;

    @NotBlank(message = "Le nom ne doit pas être vide.")
    @Size(max = 100, message = "Le nom ne doit pas dépasser 100 caractères.")
    private String name;

    @NotBlank(message = "Le champ 'watering' ne doit pas être vide.")
    @Size(max = 200, message = "Le champ 'watering' ne doit pas dépasser 200 caractères.")
    private String watering;

    @NotBlank(message = "Le champ 'lightExposure' ne doit pas être vide.")
    @Size(max = 200, message = "Le champ 'lightExposure' ne doit pas dépasser 200 caractères.")
    private String lightExposure;

    @NotBlank(message = "Le champ 'fertilizer' ne doit pas être vide.")
    @Size(max = 200, message = "Le champ 'fertilizer' ne doit pas dépasser 200 caractères.")
    private String fertilizer;

    public CareType() {
    }

    public CareType(Long id, String name, String watering, String lightExposure, String fertilizer) {
        this.id = id;
        this.name = name;
        this.watering = watering;
        this.lightExposure = lightExposure;
        this.fertilizer = fertilizer;
    }

    // Getters & Setters
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public String getWatering() {
        return watering;
    }
    public void setWatering(String watering) {
        this.watering = watering;
    }

    public String getLightExposure() {
        return lightExposure;
    }
    public void setLightExposure(String lightExposure) {
        this.lightExposure = lightExposure;
    }

    public String getFertilizer() {
        return fertilizer;
    }
    public void setFertilizer(String fertilizer) {
        this.fertilizer = fertilizer;
    }
}
