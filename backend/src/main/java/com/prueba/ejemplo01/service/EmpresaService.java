package com.prueba.ejemplo01.service;

import com.prueba.ejemplo01.model.Empresa;
import org.springframework.stereotype.Service;


public interface EmpresaService {
    Empresa findByRuc(String ruc);
}
