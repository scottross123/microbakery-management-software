package com.example.scottross123.microbakery.controllers;

import com.example.scottross123.microbakery.model.Customer;
import com.example.scottross123.microbakery.model.LineItem;
import com.example.scottross123.microbakery.model.Order;
import com.example.scottross123.microbakery.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping(path = "api/v1/order/")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @GetMapping("/all")
    public List<Order> getOrders() {
        return orderService.getOrders();
    }

    @GetMapping("/{id}")
    public Order getOrder(@PathVariable Long id) {
        return orderService.getOrder(id);
    }

    @PostMapping("/add")
    public void addOrder(@RequestBody Order order) {
        orderService.addOrder(order);
    }

    @DeleteMapping("/{id}")
    public void deleteOrder(@PathVariable Long id) {
        orderService.deleteOrder(id);
    }

    @PutMapping("/{id}")
    public void updateOrder(@PathVariable Long id, @RequestBody Order updatedOrder) {
        orderService.updateOrder(id, updatedOrder);
    }

    @GetMapping("/{id}/orderer")
    public Customer getOrderer(@PathVariable Long id) {
        return orderService.getOrderer(id);
    }

    @GetMapping("/{id}/items")
    public Set<LineItem> getItems(@PathVariable Long id) {
        return orderService.getItems(id);
    }

    // add mapping for order total price

    // add mapping for quantity of items
}
