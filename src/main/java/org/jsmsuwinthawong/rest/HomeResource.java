package org.jsmsuwinthawong.rest;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

/**
 * Created by exodus on 4/23/17.
 */
@RestController
public class HomeResource {
    @RequestMapping("/welcome")
    public String home(){
        return "Welcome to Jsmsuwinthawong";
    }
}
