package com.example.scottross123.microbakery.service;

import com.example.scottross123.microbakery.model.Customer;
import com.example.scottross123.microbakery.model.Order;
import com.example.scottross123.microbakery.repository.CustomerRepository;

import java.util.List;
import java.util.Set;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CustomerService {

    @Autowired
    private CustomerRepository customerRepository;

    public List<Customer> getCustomers() {
        return customerRepository.findAll();
    }

    public Customer getCustomer(Long id) {
        Customer customer = customerRepository.findById(id).orElseThrow(() -> new IllegalStateException("Customer with id " + id + " does not exist!!"));
        return customer;
    }

    public void addCustomer(Customer customer) {
        customerRepository.save(customer);
    }

    public void deleteCustomer(Long id) {
        Customer customer = customerRepository.findById(id).orElseThrow(() -> new IllegalStateException("Customer with id " + id + " does not exist!!"));
        customerRepository.delete(customer);
    }

    @Transactional
    public void updateCustomer(Long id, Customer updatedCustomer) {
        Customer customer = customerRepository.findById(id).orElseThrow(() -> new IllegalStateException("Customer with id " + id + " does not exist!!"));      
        customer.setFirstName(updatedCustomer.getFirstName());
        customer.setLastName(updatedCustomer.getLastName());
        customer.setPhoneNumber(updatedCustomer.getPhoneNumber());
        customer.setOrders(updatedCustomer.getOrders());
    }

    public Set<Order> getOrders(Long id) {
        Customer customer = customerRepository.findById(id).orElseThrow(() -> new IllegalStateException("Customer with id " + id + " does not exist!!"));
        return customer.getOrders();
    }
}
