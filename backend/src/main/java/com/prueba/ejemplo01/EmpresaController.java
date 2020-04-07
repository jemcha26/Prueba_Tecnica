package com.prueba.ejemplo01;

import com.prueba.ejemplo01.model.Empresa;
import com.prueba.ejemplo01.service.EmpresaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;

@CrossOrigin(origins = "http://localhost:4200",maxAge = 3600)
@RestController
@RequestMapping({"/empresa"})
public class EmpresaController {

    @Autowired
    EmpresaService service;

    @GetMapping(path = {"/{ruc}"})
    public Empresa getEmpresaRuc(@PathVariable("ruc") String ruc) throws IOException {
        return service.findByRuc(ruc);
    }
}
