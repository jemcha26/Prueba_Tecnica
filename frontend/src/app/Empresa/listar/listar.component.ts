import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/Modelo/Empresa';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
empresa:Empresa = new Empresa();
  constructor(private router:Router,private service:ServiceService) { }

  ngOnInit(): void {
    this.Buscar();
  }
  
  Buscar(){
    let ruc=localStorage.getItem("ruc");
    console.log('Ruc : '+ruc);
    this.service.getEmpresaRuc(ruc)
    .subscribe(data=>{
      this.empresa=data;
    })   
    }
}
