package com.example.scottross123.microbakery.service;

import com.example.scottross123.microbakery.model.Ingredient;
import com.example.scottross123.microbakery.model.Recipe;
import com.example.scottross123.microbakery.repository.IngredientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Set;

@Service
public class IngredientService {

    @Autowired
    private IngredientRepository ingredientRepository;

    public List<Ingredient> getIngredients() {
        return ingredientRepository.findAll();
    }

    public Ingredient getIngredient(Long id) {
        Ingredient ingredient = ingredientRepository.findById(id).orElseThrow(() -> new IllegalStateException("Ingredient with id " + id + " does not exist!!"));
        return ingredient;
    }

    public void addIngredient(Ingredient ingredient) {
        ingredientRepository.save(ingredient);
    }

    public void deleteIngredient(Long id) {
        Ingredient ingredient = ingredientRepository.findById(id).orElseThrow(() -> new IllegalStateException("Ingredient with id " + id + " does not exist!!"));
        ingredientRepository.delete(ingredient);
    }

    @Transactional
    public void updateIngredient(Long id, Ingredient updatedIngredient) {
        Ingredient ingredient = ingredientRepository.findById(id).orElseThrow(() -> new IllegalStateException("Ingredient with id " + id + " does not exist!!"));
        ingredient.setName(updatedIngredient.getName());
        ingredient.setDescription(updatedIngredient.getDescription());
        ingredient.setCost(updatedIngredient.getCost());
    }

    public Set<Recipe> getRecipes(Long id) {
        Ingredient ingredient = ingredientRepository.findById(id).orElseThrow(() -> new IllegalStateException("Ingredient with id " + id + " does not exist!!"));
        return ingredient.getRecipes();
    }

}
