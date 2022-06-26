package com.example.scottross123.microbakery.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Set;

@Entity(name = "\"Order\"")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "order_time", nullable = false)
    private LocalDateTime orderTime;

    @Column(name = "pickup_time", nullable = false)
    private LocalDateTime pickupTime;

    @ManyToOne
    @JoinColumn(name = "customer_id", referencedColumnName = "id", nullable = false)
    private Customer customer;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "order")
    private Set<LineItem> lineItems;

    public Order() {}

    public Order(LocalDateTime orderTime, LocalDateTime pickupTime) {
        this.orderTime = orderTime;
        this.pickupTime = pickupTime;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDateTime getOrderTime() {
        return orderTime;
    }

    public void setOrderTime(LocalDateTime orderTime) {
        this.orderTime = orderTime;
    }

    public LocalDateTime getPickupTime() {
        return pickupTime;
    }

    public void setPickupTime(LocalDateTime pickupTime) {
        this.pickupTime = pickupTime;
    }
    @JsonIgnore
    public Customer getOrderer() {
        return customer;
    }

    public void setOrderer(Customer customer) {
        this.customer = customer;
    }

    @JsonIgnore
    public Set<LineItem> getItems() {
        return lineItems;
    }

    public void setItems(Set<LineItem> lineItems) {
        this.lineItems = lineItems;
    }

    @Override
    public String toString() {
        return "Order{" +
                "id=" + id +
                ", orderTime=" + orderTime +
                ", pickupTime=" + pickupTime +
                '}';
    }
}
