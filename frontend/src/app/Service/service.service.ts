import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Empresa } from '../Modelo/Empresa';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  getEmpresaRuc(ruc:string){
    return this.http.get<Empresa>('http://localhost:8090/prueba/ws/empresa/'+ruc);
  }
  
}
