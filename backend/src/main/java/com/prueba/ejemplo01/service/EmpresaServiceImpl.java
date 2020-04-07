package com.prueba.ejemplo01.service;

import com.prueba.ejemplo01.model.Empresa;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

@Service
public class EmpresaServiceImpl implements EmpresaService {
    private static final String URI_RUC = "http://wsruc.com/Ruc2WS_JSON.php";
    private static final String TIPO_RUC = "2";
    private static final String TOKEN = "cXdlcnR5bGFtYXJja19zYUBob3RtYWlsLmNvbXF3ZXJ0eQ==";
    @Autowired
    RestTemplate restTemplate;

    @Override
    public Empresa findByRuc(String ruc) {
        ResponseEntity<Empresa> response = null;

        UriComponentsBuilder builder = UriComponentsBuilder.fromUriString(URI_RUC)
                .queryParam("tipo", TIPO_RUC)
                .queryParam("ruc", ruc)
                .queryParam("token", TOKEN);
        String uriBuilder = builder.build().toUriString();

        HttpHeaders headers = new HttpHeaders();
        headers.set("Accept", MediaType.APPLICATION_JSON_VALUE);

        HttpEntity<String> entity = new HttpEntity<>(headers);
        try {

            response = restTemplate.exchange(uriBuilder, HttpMethod.GET, entity, Empresa.class);

        } catch (Exception e) {
            e.printStackTrace();
        }
        assert response != null;

        return response.getBody();


    }
}
