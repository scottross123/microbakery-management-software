package com.example.scottross123.microbakery.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.scottross123.microbakery.model.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {}
