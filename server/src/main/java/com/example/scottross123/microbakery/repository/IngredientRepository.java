package com.example.scottross123.microbakery.repository;

import com.example.scottross123.microbakery.model.Ingredient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IngredientRepository extends JpaRepository<Ingredient, Long> { }
