package com.example.scottross123.microbakery.controllers;

import com.example.scottross123.microbakery.model.*;
import com.example.scottross123.microbakery.service.RecipeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping(path = "api/v1/recipe")
public class RecipeController {


    @Autowired
    private RecipeService recipeService;

    @GetMapping
    public List<Recipe> getRecipes() {
        return recipeService.getRecipes();
    }

    @GetMapping("/{id}")
    public Recipe getRecipe(@PathVariable Long id) {
        return recipeService.getRecipe(id);
    }

    @PostMapping
    public void addRecipe(@RequestBody Recipe recipe) {
        recipeService.addRecipe(recipe);
    }

    @DeleteMapping("/{id}")
    public void deleteRecipe(@PathVariable Long id) {
        recipeService.deleteRecipe(id);
    }

    @PutMapping("/{id}")
    public void updateRecipe(@PathVariable Long id, @RequestBody Recipe updatedRecipe) {
        recipeService.updateRecipe(id, updatedRecipe);
    }

    @GetMapping("/{id}/product")
    public Product getProduct(@PathVariable Long id) {
        return recipeService.getProduct(id);
    }

    @GetMapping("/{id}/ingredients")
    public Set<Ingredient> getItems(@PathVariable Long id) {
        return recipeService.getIngredients(id);
    }
}
