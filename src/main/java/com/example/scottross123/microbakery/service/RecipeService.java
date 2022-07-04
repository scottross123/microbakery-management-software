package com.example.scottross123.microbakery.service;

import com.example.scottross123.microbakery.model.Ingredient;
import com.example.scottross123.microbakery.model.Product;
import com.example.scottross123.microbakery.model.Recipe;
import com.example.scottross123.microbakery.repository.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Set;

@Service
public class RecipeService {

    @Autowired
    private RecipeRepository recipeRepository;

    public List<Recipe> getRecipes() {
        return recipeRepository.findAll();
    }

    public Recipe getRecipe(Long id) {
        Recipe recipe = recipeRepository.findById(id).orElseThrow(() -> new IllegalStateException("Recipe with id " + id + " does not exist!!"));
        return recipe;
    }

    public void addRecipe(Recipe recipe) {
        recipeRepository.save(recipe);
    }

    public void deleteRecipe(Long id) {
        Recipe recipe = recipeRepository.findById(id).orElseThrow(() -> new IllegalStateException("Recipe with id " + id + " does not exist!!"));
        recipeRepository.delete(recipe);
    }

    @Transactional
    public void updateRecipe(Long id, Recipe updatedRecipe) {
        Recipe recipe = recipeRepository.findById(id).orElseThrow(() -> new IllegalStateException("Recipe with id " + id + " does not exist!!"));
        recipe.setPrepTime(updatedRecipe.getPrepTime());
        recipe.setMixTime(updatedRecipe.getMixTime());
        recipe.setDdt(updatedRecipe.getDdt());
        recipe.setBulkFermentation(updatedRecipe.getBulkFermentation());
        recipe.setProof(updatedRecipe.getProof());
        recipe.setBakingTime(updatedRecipe.getBakingTime());
        recipe.setProduct(updatedRecipe.getProduct());
        recipe.setIngredients(updatedRecipe.getIngredients());
    }

    public Product getProduct(Long id) {
        Recipe recipe = recipeRepository.findById(id).orElseThrow(() -> new IllegalStateException("Product with id " + id + " does not exist!!"));
        return recipe.getProduct();
    }

    public Set<Ingredient> getIngredients(Long id) {
        Recipe recipe = recipeRepository.findById(id).orElseThrow(() -> new IllegalStateException("Product with id " + id + " does not exist!!"));
        return recipe.getIngredients();
    }
}
