package com.example.scottross123.microbakery.controllers;

import com.example.scottross123.microbakery.model.Product;
import com.example.scottross123.microbakery.model.Recipe;
import com.example.scottross123.microbakery.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/product")
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping
    public List<Product> getProducts() {
        return productService.getProducts();
    }

    @GetMapping("/{id}")
    public Product getProduct(@PathVariable Long id) {
        return productService.getProduct(id);
    }

    @PostMapping
    public void addProduct(@RequestBody Product product) {
        productService.addProduct(product);
    }

    @DeleteMapping("/{id}")
    public void deleteProduct(@PathVariable Long id) {
        productService.deleteProduct(id);
    }

    @PutMapping("/{id}")
    public void updateProduct(@PathVariable Long id, @RequestBody Product updatedProduct) {
        productService.updateProduct(id, updatedProduct);
    }

    @GetMapping("/{id}/recipe")
    public Recipe getRecipe(@PathVariable Long id){
        return productService.getRecipe(id);
    }
}
