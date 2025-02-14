package com.example.PlantCare.entities;

public class CareType {
    private Long id;
    private String name;
    private String watering;
    private String lightExposure;
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
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getWatering() { return watering; }
    public void setWatering(String watering) { this.watering = watering; }

    public String getLightExposure() { return lightExposure; }
    public void setLightExposure(String lightExposure) { this.lightExposure = lightExposure; }

    public String getFertilizer() { return fertilizer; }
    public void setFertilizer(String fertilizer) { this.fertilizer = fertilizer; }
}
