package com.example.scottross123.microbakery.model;

import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity(name = "Flour")
public class Flour extends Ingredient {

    @Column(name = "grain", length = 150, nullable = false)
    private String grain;

    @Column(name = "protein", precision = 3, scale = 1, nullable = false)
    private BigDecimal protein;

    @Column(name = "extraction", nullable = false)
    private int extraction;

    @Type(type="yes_no")
    @Column(name = "malted", nullable = false)
    private boolean malted;

    public Flour() {}

    public Flour(String name, String description, BigDecimal cost, String grain, BigDecimal protein, int extraction, boolean malted) {
        super(name, description, cost);
        this.grain = grain;
        this.protein = protein;
        this.extraction = extraction;
        this.malted = malted;
    }

    public String getGrain() {
        return grain;
    }

    public void setGrain(String grain) {
        this.grain = grain;
    }

    public BigDecimal getProtein() {
        return protein;
    }

    public void setProtein(BigDecimal protein) {
        this.protein = protein;
    }

    public int getExtraction() {
        return extraction;
    }

    public void setExtraction(int extraction) {
        this.extraction = extraction;
    }

    public boolean getMalted() {
        return malted;
    }

    public void setMalted(boolean malted) {
        this.malted = malted;
    }

    @Override
    public String toString() {
        return "Flour{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", cost=" + cost +
                ", grain=" + grain + '\'' +
                ", protein=" + protein +
                ", extraction=" + extraction +
                ", malted=" + malted +
                '}';
    }
}
