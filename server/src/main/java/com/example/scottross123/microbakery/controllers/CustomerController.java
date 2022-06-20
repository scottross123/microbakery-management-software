package com.example.scottross123.microbakery.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.example.scottross123.microbakery.model.Customer;
import com.example.scottross123.microbakery.service.CustomerService;

@RestController
@RequestMapping(path="api/customer")
public class CustomerController {

    private final CustomerService customerService;

    public CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }
    
    @GetMapping
    public List<Customer> getCustomers() {
        return customerService.getCustomers();
    }

}
