package com.example.scottross123.microbakery.repository;

import com.example.scottross123.microbakery.model.Customer;
import com.example.scottross123.microbakery.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> { }
