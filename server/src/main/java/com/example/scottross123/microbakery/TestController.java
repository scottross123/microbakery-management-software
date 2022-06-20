package com.example.scottross123.microbakery;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {
    
    @RequestMapping(value="/", method=RequestMethod.GET)
    public String getTest() {
        return "bro";
    }
}
