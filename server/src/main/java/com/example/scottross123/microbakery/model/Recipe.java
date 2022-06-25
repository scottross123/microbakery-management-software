package com.example.scottross123.microbakery.model;

import javax.persistence.*;
import java.util.Set;
@Entity(name = "Recipe")
public class Recipe {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "prep_time", nullable = false)
    private int prepTime;

    @Column(name = "mix_time", nullable = false)
    private int mixTime;

    @Column(name = "ddt")
    private int ddt;

    @Column(name = "bulk_fermentation")
    private int bulkFermentation;

    @Column(name = "proof")
    private int proof;

    @Column(name = "baking_time")
    private int bakingTime;

    @OneToOne
    @JoinColumn(name = "product_id", referencedColumnName = "id", nullable = false)
    private Product product;

    @ManyToMany
    @JoinTable(
            name = "recipe_ingredient",
            joinColumns = {@JoinColumn(name = "recipe_id", referencedColumnName = "id")},
            inverseJoinColumns = {@JoinColumn(name = "ingredient_id", referencedColumnName = "id")}
    )
    private Set<Ingredient> ingredients;

    public Recipe() {}

    public Recipe(int prepTime, int mixTime, int ddt, int bulkFermentation, int proof, int bakingTime) {
        this.prepTime = prepTime;
        this.mixTime = mixTime;
        this.ddt = ddt;
        this.bulkFermentation = bulkFermentation;
        this.proof = proof;
        this.bakingTime = bakingTime;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getPrepTime() {
        return prepTime;
    }

    public void setPrepTime(int prepTime) {
        this.prepTime = prepTime;
    }

    public int getMixTime() {
        return mixTime;
    }

    public void setMixTime(int mixTime) {
        this.mixTime = mixTime;
    }

    public int getDdt() {
        return ddt;
    }

    public void setDdt(int ddt) {
        this.ddt = ddt;
    }

    public int getBulkFermentation() {
        return bulkFermentation;
    }

    public void setBulkFermentation(int bulkFermentation) {
        this.bulkFermentation = bulkFermentation;
    }

    public int getProof() {
        return proof;
    }

    public void setProof(int proof) {
        this.proof = proof;
    }

    public int getBakingTime() {
        return bakingTime;
    }

    public void setBakingTime(int bakingTime) {
        this.bakingTime = bakingTime;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public Set<Ingredient> getIngredients() {
        return ingredients;
    }

    public void setIngredients(Set<Ingredient> ingredients) {
        this.ingredients = ingredients;
    }

    @Override
    public String toString() {
        return "Recipe{" +
                "id=" + id +
                ", prepTime=" + prepTime +
                ", mixTime=" + mixTime +
                ", ddt=" + ddt +
                ", bulkFermentation=" + bulkFermentation +
                ", proof=" + proof +
                ", bakingTime=" + bakingTime +
                '}';
    }
}
