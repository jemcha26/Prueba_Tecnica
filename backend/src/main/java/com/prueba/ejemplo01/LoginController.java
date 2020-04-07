package com.prueba.ejemplo01;

import com.prueba.ejemplo01.model.Login;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/login")
public class LoginController {
    @PostMapping
    boolean login(@RequestBody Login login) {
        if (login.getUsername().equals("user") && login.getPwd().equals("1234")) {
            return true;
        } else {
            return false;
        }
    }
}
