package com.example.scottross123.microbakery.repository;

import com.example.scottross123.microbakery.model.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RecipeRepository extends JpaRepository<Recipe, Long> { }
