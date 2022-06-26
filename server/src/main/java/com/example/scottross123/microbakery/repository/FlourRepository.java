package com.example.scottross123.microbakery.repository;

import com.example.scottross123.microbakery.model.Flour;
import com.example.scottross123.microbakery.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FlourRepository extends JpaRepository<Flour, Long> { }
