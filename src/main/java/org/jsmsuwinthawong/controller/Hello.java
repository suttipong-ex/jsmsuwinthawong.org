package org.jsmsuwinthawong.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by suttipong on 4/4/17.
 */
@RestController
public class Hello {
    @GetMapping("")
    public String hello(){
        return "Hello!";
    }
}
