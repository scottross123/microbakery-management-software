package com.example.scottross123.microbakery.repository;

import com.example.scottross123.microbakery.model.LineItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LineItemRepository extends JpaRepository<LineItem, Long> { }
