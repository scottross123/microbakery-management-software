package com.example.scottross123.microbakery.service;

import com.example.scottross123.microbakery.model.Customer;
import com.example.scottross123.microbakery.model.Order;
import com.example.scottross123.microbakery.repository.OrderRepository;
import com.example.scottross123.microbakery.repository.CustomerRepository;

import java.util.List;

import javax.transaction.Transactional;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    public List<Order> getOrders() {
        return orderRepository.findAll();
    }

    public Order getOrder(Long id) {
        Order order = orderRepository.findById(id).orElseThrow(() -> new IllegalStateException("Order with id " + id + " does not exist!!"));
        return order;
    }

    public void addOrder(Order order) {
        orderRepository.save(order);
    }

    public void deleteOrder(Long id) {
        Order order = orderRepository.findById(id).orElseThrow(() -> new IllegalStateException("Order with id " + id + " does not exist!!"));
        orderRepository.delete(order);
    }

    @Transactional
    public void updateOrder(Long id, Order updatedOrder) {
        Order order = orderRepository.findById(id).orElseThrow(() -> new IllegalStateException("Order with id " + id + " does not exist!!"));
        order.setOrderTime(updatedOrder.getOrderTime());
        order.setPickupTime(updatedOrder.getPickupTime());
    }

    public Customer getOrderer(Long id) {
        Order order = orderRepository.findById(id).orElseThrow(() -> new IllegalStateException("Order with id " + id + " does not exist!!"));
        return order.getOrderer();
    }
}
