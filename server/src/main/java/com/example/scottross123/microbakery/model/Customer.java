package com.example.scottross123.microbakery.model;

import javax.persistence.*;

@Entity(name = "Customer")
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "f_name")
    private String firstName;

    @Column(name = "l_name")
    private String lastName;

    @Column(name = "phone_num")
    private String phoneNumber;

    public Customer() {}

    public Customer(Long id, String firstName, String lastName, String phoneNumber) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    @Override
    public String toString() {
        return "Customer{" + 
        "id=" + this.id + 
        ", firstName='" + this.firstName + '\'' + 
        ", lastName='" + this.lastName + '\'' + 
        ", phoneNumber='" + this.phoneNumber + '\'' + 
        '}';
    }

}

/*
 * use @transiet for fullname attribute
 * should address be a separate table?
 */