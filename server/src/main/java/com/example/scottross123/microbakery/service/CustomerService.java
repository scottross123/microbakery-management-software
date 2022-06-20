package com.example.scottross123.microbakery.service;

import com.example.scottross123.microbakery.model.Customer;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class CustomerService {
    public List<Customer> getCustomers() {
        return List.of(
            new Customer(
                1L,
                "Ruby",
                "Aguero-Trejo",
                "666-666-6666"
            )
        );
    }
}
