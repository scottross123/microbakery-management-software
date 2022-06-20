package com.example.scottross123.microbakery.model;

public class Customer {
    private Long id;
    private String firstName;
    private String lastName;
    private String phoneNumber;

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
